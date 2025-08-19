import { useState, useCallback, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  lastFetch: Date | null;
}

interface ApiOptions<T = unknown> {
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  retryAttempts?: number;
  retryDelay?: number;
  timeout?: number;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseApiReturn<T, P = unknown> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  lastFetch: Date | null;
  execute: (params?: P) => Promise<T | null>;
  retry: () => Promise<T | null>;
  reset: () => void;
  cancel: () => void;
}

/**
 * Custom hook for handling API calls with comprehensive error handling and loading states
 * @param apiFunction - The API function to execute
 * @param options - Configuration options for the API call
 * @returns Object containing state and control functions
 */
export function useApi<T = unknown, P = unknown>(
  apiFunction: (params?: P) => Promise<T>,
  options: ApiOptions<T> = {}
): UseApiReturn<T, P> {
  const {
    showErrorToast = true,
    showSuccessToast = false,
    successMessage = 'Opération réussie',
    retryAttempts = 0,
    retryDelay = 1000,
    timeout = 30000,
    onSuccess,
    onError
  } = options;

  const { toast } = useToast();
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
    lastFetch: null
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const lastParamsRef = useRef<P | undefined>(undefined);
  const retryCountRef = useRef(0);

  /**
   * Cancel any ongoing API request
   */
  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);

  /**
   * Reset the API state to initial values
   */
  const reset = useCallback(() => {
    cancel();
    setState({
      data: null,
      loading: false,
      error: null,
      lastFetch: null
    });
    retryCountRef.current = 0;
  }, [cancel]);

  /**
   * Execute the API call with error handling and retry logic
   */
  const execute = useCallback(async (params?: P): Promise<T | null> => {
    // Cancel any existing request
    cancel();

    // Create new abort controller
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    // Store params for retry
    lastParamsRef.current = params;

    setState(prev => ({
      ...prev,
      loading: true,
      error: null
    }));

    try {
      // Set up timeout
      const timeoutId = setTimeout(() => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      }, timeout);

      // Execute API call
      const result = await apiFunction(params);

      // Clear timeout
      clearTimeout(timeoutId);

      // Check if request was aborted
      if (signal.aborted) {
        throw new Error('Request was cancelled');
      }

      // Update state with success
      setState({
        data: result,
        loading: false,
        error: null,
        lastFetch: new Date()
      });

      // Reset retry count on success
      retryCountRef.current = 0;

      // Show success toast if enabled
      if (showSuccessToast) {
        toast({
          title: 'Succès',
          description: successMessage,
        });
      }

      // Call success callback
      onSuccess?.(result);

      return result;
    } catch (error) {
      // Don't handle aborted requests
      if (signal.aborted || (error as Error).name === 'AbortError') {
        return null;
      }

      const apiError = error instanceof Error ? error : new Error('Une erreur inconnue s\'est produite');

      // Handle timeout
      if (apiError.message.includes('timeout') || apiError.name === 'TimeoutError') {
        apiError.message = 'La requête a expiré. Veuillez réessayer.';
      }

      // Handle network errors
      if (apiError.message.includes('fetch') || apiError.message.includes('network')) {
        apiError.message = 'Erreur de connexion. Vérifiez votre connexion Internet.';
      }

      // Update state with error
      setState(prev => ({
        ...prev,
        loading: false,
        error: apiError
      }));

      // Show error toast if enabled
      if (showErrorToast) {
        toast({
          title: 'Erreur',
          description: apiError.message,
          variant: 'destructive',
        });
      }

      // Call error callback
      onError?.(apiError);

      // Retry logic
      if (retryCountRef.current < retryAttempts) {
        retryCountRef.current++;
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, retryDelay * retryCountRef.current));
        
        // Retry the request
        return execute(params);
      }

      return null;
    }
  }, [apiFunction, timeout, showSuccessToast, successMessage, showErrorToast, retryAttempts, retryDelay, toast, onSuccess, onError, cancel]);

  /**
   * Retry the last API call with the same parameters
   */
  const retry = useCallback(async (): Promise<T | null> => {
    return execute(lastParamsRef.current);
  }, [execute]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    lastFetch: state.lastFetch,
    execute,
    retry,
    reset,
    cancel
  };
}

/**
 * Hook for handling multiple API calls with batch operations
 */
export function useBatchApi<T = unknown, P = unknown>(
  apiFunctions: Array<(params?: P) => Promise<T>>,
  options: ApiOptions<T> = {}
) {
  const [states, setStates] = useState<ApiState<T>[]>(
    apiFunctions.map(() => ({
      data: null,
      loading: false,
      error: null,
      lastFetch: null
    }))
  );

  const { toast } = useToast();
  const abortControllersRef = useRef<AbortController[]>([]);

  /**
   * Execute all API calls in parallel
   */
  const executeAll = useCallback(async (paramsArray?: P[]): Promise<(T | null)[]> => {
    // Cancel existing requests
    abortControllersRef.current.forEach(controller => controller.abort());
    abortControllersRef.current = apiFunctions.map(() => new AbortController());

    // Set all to loading
    setStates(prev => prev.map(state => ({ ...state, loading: true, error: null })));

    const results = await Promise.allSettled(
      apiFunctions.map(async (apiFunction, index) => {
        try {
          const params = paramsArray?.[index];
          const result = await apiFunction(params);
          
          setStates(prev => prev.map((state, i) => 
            i === index 
              ? { data: result, loading: false, error: null, lastFetch: new Date() }
              : state
          ));
          
          return result;
        } catch (error) {
          const apiError = error instanceof Error ? error : new Error('Erreur inconnue');
          
          setStates(prev => prev.map((state, i) => 
            i === index 
              ? { ...state, loading: false, error: apiError }
              : state
          ));
          
          if (options.showErrorToast) {
            toast({
              title: `Erreur ${index + 1}`,
              description: apiError.message,
              variant: 'destructive',
            });
          }
          
          return null;
        }
      })
    );

    return results.map(result => 
      result.status === 'fulfilled' ? result.value : null
    );
  }, [apiFunctions, options.showErrorToast, toast]);

  /**
   * Execute a specific API call by index
   */
  const executeOne = useCallback(async (index: number, params?: P): Promise<T | null> => {
    if (index < 0 || index >= apiFunctions.length) {
      throw new Error('Index out of bounds');
    }

    const apiFunction = apiFunctions[index];
    
    setStates(prev => prev.map((state, i) => 
      i === index ? { ...state, loading: true, error: null } : state
    ));

    try {
      const result = await apiFunction(params);
      
      setStates(prev => prev.map((state, i) => 
        i === index 
          ? { data: result, loading: false, error: null, lastFetch: new Date() }
          : state
      ));
      
      return result;
    } catch (error) {
      const apiError = error instanceof Error ? error : new Error('Erreur inconnue');
      
      setStates(prev => prev.map((state, i) => 
        i === index 
          ? { ...state, loading: false, error: apiError }
          : state
      ));
      
      if (options.showErrorToast) {
        toast({
          title: 'Erreur',
          description: apiError.message,
          variant: 'destructive',
        });
      }
      
      return null;
    }
  }, [apiFunctions, options.showErrorToast, toast]);

  /**
   * Reset all states
   */
  const resetAll = useCallback(() => {
    abortControllersRef.current.forEach(controller => controller.abort());
    setStates(apiFunctions.map(() => ({
      data: null,
      loading: false,
      error: null,
      lastFetch: null
    })));
  }, [apiFunctions]);

  return {
    states,
    executeAll,
    executeOne,
    resetAll,
    isAnyLoading: states.some(state => state.loading),
    hasAnyError: states.some(state => state.error !== null),
    allData: states.map(state => state.data)
  };
}

/**
 * Hook for handling paginated API calls
 */
export function usePaginatedApi<T = unknown, P = unknown>(
  apiFunction: (page: number, limit: number, params?: P) => Promise<{ data: T[]; total: number; hasMore: boolean }>,
  initialLimit: number = 10,
  options: ApiOptions<{ data: T[]; total: number; hasMore: boolean }> = {}
) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);
  const [allData, setAllData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { loading, error, execute, reset: resetApi } = useApi(
    (params?: { page: number; limit: number; additionalParams?: P }) => {
      if (!params) {
        throw new Error('Pagination parameters are required');
      }
      return apiFunction(params.page, params.limit, params.additionalParams);
    },
    options
  );

  /**
   * Load data for a specific page
   */
  const loadPage = useCallback(async (pageNum: number, additionalParams?: P) => {
    const result = await execute({ page: pageNum, limit, additionalParams });
    
    if (result) {
      if (pageNum === 1) {
        setAllData(result.data);
      } else {
        setAllData(prev => [...prev, ...result.data]);
      }
      setTotal(result.total);
      setHasMore(result.hasMore);
    }
    
    return result;
  }, [execute, limit]);

  /**
   * Load next page
   */
  const loadMore = useCallback(async (additionalParams?: P) => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      return loadPage(nextPage, additionalParams);
    }
    return null;
  }, [hasMore, loading, page, loadPage]);

  /**
   * Refresh data (reload first page)
   */
  const refresh = useCallback(async (additionalParams?: P) => {
    setPage(1);
    setAllData([]);
    return loadPage(1, additionalParams);
  }, [loadPage]);

  /**
   * Reset pagination state
   */
  const reset = useCallback(() => {
    resetApi();
    setPage(1);
    setAllData([]);
    setTotal(0);
    setHasMore(true);
  }, [resetApi]);

  return {
    data: allData,
    loading,
    error,
    page,
    limit,
    total,
    hasMore,
    loadPage,
    loadMore,
    refresh,
    reset,
    setLimit
  };
}