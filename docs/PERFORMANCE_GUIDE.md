# Guide d'Optimisation des Performances - DataScienceExplorer

## Vue d'ensemble

Ce guide présente les optimisations de performance implémentées dans DataScienceExplorer pour garantir une expérience utilisateur fluide et rapide.

## Métriques de Performance Cibles

### Core Web Vitals

- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1

### Métriques Personnalisées

- **Time to Interactive** : < 3s
- **First Meaningful Paint** : < 2s
- **Bundle Size** : < 250KB (gzipped)

## Optimisations Implémentées

### 1. Code Splitting et Lazy Loading

#### React.lazy pour les composants

```typescript
// Chargement paresseux des pages
const MachineLearning = lazy(() => import('@/pages/MachineLearning'));
const Fundamentals = lazy(() => import('@/pages/Fundamentals'));

// Avec Suspense
<Suspense fallback={<LoadingSpinner />}>
  <MachineLearning />
</Suspense>
```

#### Lazy Loading des images

```typescript
// Composant LazyImage optimisé
<LazyImage
  src="/large-image.jpg"
  alt="Description"
  className="w-full h-auto"
  placeholder={<ImageSkeleton />}
  onLoad={() => trackImageLoad('hero-image')}
/>
```

### 2. Optimisation du Bundle

#### Tree Shaking

```typescript
// Import spécifique pour réduire la taille
import { debounce } from 'lodash-es'; // ✅ Bon
// import _ from 'lodash'; // ❌ Éviter
```

#### Analyse du bundle

```bash
# Analyser la taille du bundle
npm run build:analyze

# Résultats attendus
# Total bundle size: ~230KB (gzipped)
# Largest chunks:
# - vendor: ~120KB
# - main: ~80KB
# - chunks: ~30KB
```

### 3. Mémorisation et Cache

#### React.memo et useCallback

```typescript
// Composant mémorisé
export const ExpensiveComponent = memo(({ data, onUpdate }: Props) => {
  const handleUpdate = useCallback((id: string) => {
    onUpdate(id);
  }, [onUpdate]);

  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item));
  }, [data]);

  return <div>{/* Rendu */}</div>;
});

// HOC d'optimisation
const OptimizedComponent = withPerformanceOptimization(
  ExpensiveComponent,
  'ExpensiveComponent'
);
```

#### Cache des requêtes

```typescript
// Cache avec TTL
const useDataCache = (key: string, fetcher: () => Promise<any>) => {
  const [cache, setCache] = useState(new Map());
  
  const getCachedData = useCallback(async () => {
    const cached = cache.get(key);
    const now = Date.now();
    
    if (cached && now - cached.timestamp < 300000) { // 5 min TTL
      return cached.data;
    }
    
    const data = await fetcher();
    setCache(prev => new Map(prev).set(key, { data, timestamp: now }));
    return data;
  }, [key, fetcher, cache]);
  
  return getCachedData;
};
```

### 4. Optimisation du Rendu

#### Intersection Observer pour les animations

```typescript
// Animation à la demande
export const useIntersectionAnimation = (
  ref: RefObject<Element>,
  animationClass: string
) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Une seule fois
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
  
  return isVisible ? animationClass : '';
};
```

#### Virtual Scrolling pour les listes

```typescript
// Pour les longues listes de cours/projets
export const VirtualizedList = ({ items, itemHeight = 100 }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = useOptimizedScroll(() => {
    if (!containerRef.current) return;
    
    const scrollTop = containerRef.current.scrollTop;
    const containerHeight = containerRef.current.clientHeight;
    
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.min(
      newStartIndex + Math.ceil(containerHeight / itemHeight) + 2,
      items.length
    );
    
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, 16); // 60fps
  
  return (
    <div ref={containerRef} onScroll={handleScroll}>
      {/* Rendu des éléments visibles uniquement */}
      {items.slice(startIndex, endIndex).map(item => (
        <VirtualizedItem key={item.id} item={item} />
      ))}
    </div>
  );
};
```

### 5. Optimisation des Images

#### Formats modernes et responsive

```typescript
// Composant d'image optimisée
export const OptimizedImage = ({ 
  src, 
  alt, 
  sizes = "100vw",
  className = "" 
}: ImageProps) => {
  return (
    <picture>
      <source
        srcSet={`${src}?format=webp&w=320 320w,
                 ${src}?format=webp&w=640 640w,
                 ${src}?format=webp&w=1024 1024w`}
        sizes={sizes}
        type="image/webp"
      />
      <source
        srcSet={`${src}?w=320 320w,
                 ${src}?w=640 640w,
                 ${src}?w=1024 1024w`}
        sizes={sizes}
        type="image/jpeg"
      />
      <img
        src={`${src}?w=640`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};
```

### 6. Préchargement des Ressources

#### Critical Resource Hints

```typescript
// Préchargement intelligent
export const useResourcePreloader = () => {
  const preloadCriticalResources = useCallback(() => {
    // Précharger les polices
    preloadResource('/fonts/inter-var.woff2', 'font');
    
    // Précharger les images hero
    preloadResource('/images/hero-bg.webp', 'image');
    
    // Précharger les chunks critiques
    import('@/pages/Introduction').then(() => {
      console.log('Introduction page preloaded');
    });
  }, []);
  
  useEffect(() => {
    // Précharger après le chargement initial
    setTimeout(preloadCriticalResources, 1000);
  }, [preloadCriticalResources]);
};
```

### 7. Monitoring des Performances

#### Métriques en temps réel

```typescript
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Observer les métriques Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'navigation':
            console.log('Navigation timing:', entry);
            break;
          case 'paint':
            console.log('Paint timing:', entry);
            break;
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            break;
        }
      });
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    
    return () => observer.disconnect();
  }, []);
};
```

#### Détection des fuites mémoire

```typescript
export const useMemoryMonitoring = () => {
  useEffect(() => {
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };
    
    const interval = setInterval(checkMemory, 30000); // Toutes les 30s
    return () => clearInterval(interval);
  }, []);
};
```

## Optimisations CSS

### Critical CSS Inline

```css
/* CSS critique inliné dans le <head> */
.critical-above-fold {
  /* Styles pour le contenu above-the-fold */
  font-family: Inter, sans-serif;
  background: hsl(210 40% 98%);
  color: hsl(222.2 84% 4.9%);
}

/* CSS non-critique chargé de manière asynchrone */
.non-critical {
  /* Styles pour le contenu below-the-fold */
}
```

### Optimisation des animations

```css
/* Respect des préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Utilisation de transform et opacity pour les animations */
.optimized-animation {
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  will-change: transform, opacity;
}

.optimized-animation.visible {
  transform: translateY(0);
  opacity: 1;
}
```

## Tests de Performance

### Lighthouse CI

```json
// .lighthouserc.json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 90}],
        "categories:accessibility": ["error", {"minScore": 95}],
        "categories:best-practices": ["error", {"minScore": 90}],
        "categories:seo": ["error", {"minScore": 90}]
      }
    }
  }
}
```

### Tests de charge

```typescript
// Test de performance des composants
describe('Performance Tests', () => {
  it('should render UnifiedHeroSection under 100ms', async () => {
    const start = performance.now();
    
    render(
      <UnifiedHeroSection
        variant="home"
        title="Test"
        description="Test description"
      />
    );
    
    const end = performance.now();
    expect(end - start).toBeLessThan(100);
  });
  
  it('should handle 1000 list items efficiently', () => {
    const items = Array.from({ length: 1000 }, (_, i) => ({ id: i }));
    
    const { rerender } = render(<VirtualizedList items={items} />);
    
    // Test de re-rendu
    const start = performance.now();
    rerender(<VirtualizedList items={[...items, { id: 1000 }]} />);
    const end = performance.now();
    
    expect(end - start).toBeLessThan(16); // < 1 frame à 60fps
  });
});
```

## Checklist d'Optimisation

### Avant déploiement

- [ ] Bundle size < 250KB (gzipped)
- [ ] Images optimisées (WebP, responsive)
- [ ] Lazy loading implémenté
- [ ] Mémorisation des composants coûteux
- [ ] Tests Lighthouse score > 90
- [ ] Accessibilité validée
- [ ] Cross-browser testé

### Monitoring continu

- [ ] Core Web Vitals surveillés
- [ ] Métriques custom trackées
- [ ] Alertes configurées
- [ ] Rapports performance hebdomadaires

## Ressources et Outils

### Outils de développement

```bash
# Analyse du bundle
npm run build:analyze

# Tests de performance
npm run test:performance

# Lighthouse CI
npm run lighthouse:ci

# Monitoring en continu
npm run performance:monitor
```

### Métriques à surveiller

1. **Time to First Byte (TTFB)**
2. **First Contentful Paint (FCP)**
3. **Largest Contentful Paint (LCP)**
4. **First Input Delay (FID)**
5. **Cumulative Layout Shift (CLS)**

---

*Guide maintenu par l'équipe technique DataScienceExplorer*