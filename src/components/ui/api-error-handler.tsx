import React from 'react';
import { AlertTriangle, RefreshCw, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ApiErrorHandlerProps {
  error: Error | null;
  isLoading?: boolean;
  onRetry?: () => void;
  canRetry?: boolean;
  retryCount?: number;
  maxRetries?: number;
  showDetails?: boolean;
  className?: string;
  variant?: 'inline' | 'card' | 'alert';
  title?: string;
}

/**
 * Comprehensive API error handler component
 * Displays different error states with appropriate actions and styling
 */
export function ApiErrorHandler({
  error,
  isLoading = false,
  onRetry,
  canRetry = true,
  retryCount = 0,
  maxRetries = 3,
  showDetails = false,
  className = '',
  variant = 'alert',
  title
}: ApiErrorHandlerProps) {
  if (!error) return null;

  const errorType = getErrorType(error);
  const errorConfig = getErrorConfig(errorType);
  const canShowRetry = onRetry && canRetry && retryCount < maxRetries;

  const content = (
    <>
      <div className="flex items-start gap-3">
        <errorConfig.icon className={`h-5 w-5 ${errorConfig.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            {title || errorConfig.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {errorConfig.message}
          </p>
          
          {showDetails && (
            <details className="mb-3">
              <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700">
                Détails techniques
              </summary>
              <pre className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded overflow-auto">
                {error.message}
                {error.stack && `\n\n${error.stack}`}
              </pre>
            </details>
          )}
          
          <div className="flex items-center gap-2">
            {canShowRetry && (
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                disabled={isLoading}
                className="text-sm"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                    Tentative...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Réessayer ({retryCount}/{maxRetries})
                  </>
                )}
              </Button>
            )}
            
            {errorType === 'network' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.reload()}
                className="text-sm"
              >
                Actualiser la page
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );

  switch (variant) {
    case 'card':
      return (
        <Card className={`border-red-200 ${className}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-red-800">Erreur</CardTitle>
          </CardHeader>
          <CardContent>
            {content}
          </CardContent>
        </Card>
      );
    
    case 'inline':
      return (
        <div className={`p-4 bg-red-50 border border-red-200 rounded-md ${className}`}>
          {content}
        </div>
      );
    
    case 'alert':
    default:
      return (
        <Alert className={`border-red-200 bg-red-50 ${className}`}>
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription>
            {content}
          </AlertDescription>
        </Alert>
      );
  }
}

/**
 * Determine error type based on error message and properties
 */
function getErrorType(error: Error): 'network' | 'timeout' | 'permission' | 'validation' | 'server' | 'client' | 'unknown' {
  const message = error.message.toLowerCase();
  
  if (message.includes('fetch') || message.includes('network') || message.includes('connection')) {
    return 'network';
  }
  
  if (message.includes('timeout') || error.name === 'TimeoutError') {
    return 'timeout';
  }
  
  if (message.includes('permission') || message.includes('unauthorized') || message.includes('403')) {
    return 'permission';
  }
  
  if (message.includes('validation') || message.includes('invalid') || message.includes('400')) {
    return 'validation';
  }
  
  if (message.includes('500') || message.includes('server') || message.includes('internal')) {
    return 'server';
  }
  
  if (message.includes('404') || message.includes('not found')) {
    return 'client';
  }
  
  return 'unknown';
}

/**
 * Get error configuration based on error type
 */
function getErrorConfig(errorType: string) {
  const configs = {
    network: {
      icon: WifiOff,
      iconColor: 'text-red-500',
      title: 'Problème de connexion',
      message: 'Impossible de se connecter au serveur. Vérifiez votre connexion Internet et réessayez.'
    },
    timeout: {
      icon: AlertTriangle,
      iconColor: 'text-yellow-500',
      title: 'Délai d\'attente dépassé',
      message: 'La requête a pris trop de temps à répondre. Veuillez réessayer.'
    },
    permission: {
      icon: AlertTriangle,
      iconColor: 'text-orange-500',
      title: 'Accès refusé',
      message: 'Vous n\'avez pas les permissions nécessaires pour effectuer cette action.'
    },
    validation: {
      icon: AlertTriangle,
      iconColor: 'text-blue-500',
      title: 'Données invalides',
      message: 'Les données fournies ne sont pas valides. Vérifiez votre saisie et réessayez.'
    },
    server: {
      icon: AlertTriangle,
      iconColor: 'text-red-500',
      title: 'Erreur du serveur',
      message: 'Une erreur s\'est produite sur le serveur. Veuillez réessayer plus tard.'
    },
    client: {
      icon: AlertTriangle,
      iconColor: 'text-gray-500',
      title: 'Ressource non trouvée',
      message: 'La ressource demandée n\'a pas été trouvée.'
    },
    unknown: {
      icon: AlertTriangle,
      iconColor: 'text-gray-500',
      title: 'Erreur inattendue',
      message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.'
    }
  };
  
  return configs[errorType as keyof typeof configs] || configs.unknown;
}

/**
 * Network status indicator component
 */
export function NetworkStatusIndicator() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  
  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (isOnline) return null;
  
  return (
    <Alert className="border-orange-200 bg-orange-50 mb-4">
      <WifiOff className="h-4 w-4 text-orange-600" />
      <AlertDescription className="text-orange-800">
        <strong>Mode hors ligne</strong> - Certaines fonctionnalités peuvent être limitées.
      </AlertDescription>
    </Alert>
  );
}

/**
 * HOC for wrapping components with error boundary and API error handling
 */
export function withApiErrorHandling<P extends object>(
  Component: React.ComponentType<P>,
  options: {
    showNetworkStatus?: boolean;
    errorVariant?: 'inline' | 'card' | 'alert';
  } = {}
) {
  const { showNetworkStatus = true, errorVariant = 'alert' } = options;
  
  return function WrappedComponent(props: P) {
    return (
      <>
        {showNetworkStatus && <NetworkStatusIndicator />}
        <Component {...props} />
      </>
    );
  };
}