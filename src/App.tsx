import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

import ErrorBoundary from "@/components/ui/error-boundary";
import { PageLoading } from "@/components/ui/loading-states";

// Lazy load main pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Introduction = lazy(() => import("./pages/Introduction"));
const Fundamentals = lazy(() => import("./pages/Fundamentals"));
const MachineLearning = lazy(() => import("./pages/MachineLearning"));
const Tools = lazy(() => import("./pages/Tools"));
const Projects = lazy(() => import("./pages/Projects"));
const Resources = lazy(() => import("./pages/Resources"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizCategory = lazy(() => import("./pages/QuizCategory"));
const Community = lazy(() => import("./pages/Community"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Glossary = lazy(() => import("./pages/Glossary"));
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Contact = lazy(() => import("./pages/Contact"));
// Lazy load fundamentals pages
const MathStats = lazy(() => import("./pages/fundamentals/MathStats"));
const Programming = lazy(() => import("./pages/fundamentals/Programming"));
const Databases = lazy(() => import("./pages/fundamentals/Databases"));
const DataPreparationRefactored = lazy(() => import("./pages/fundamentals/DataPreparationRefactored"));

// Lazy load course imports
const MathIntroCourse = lazy(() => import("./pages/courses/math-stats/math-intro"));
const IntegralCalculusCourse = lazy(() => import("./pages/courses/math-stats/integral-calculus"));

// Lazy load math-stats subpages
const ProbabilityTheory = lazy(() => import("./pages/fundamentals/math-stats/ProbabilityTheory"));
const DescriptiveStatistics = lazy(() => import("./pages/fundamentals/math-stats/DescriptiveStatistics"));
const LinearAlgebra = lazy(() => import("./pages/fundamentals/math-stats/LinearAlgebra"));
const DifferentialCalculus = lazy(() => import("./pages/fundamentals/math-stats/DifferentialCalculus"));
const AdvancedStatistics = lazy(() => import("./pages/fundamentals/math-stats/AdvancedStatistics"));
const IntegralCalculus = lazy(() => import("./pages/fundamentals/math-stats/IntegralCalculus"));

// Lazy load Machine Learning imports
const SupervisedLearning = lazy(() => import("./pages/machine-learning/SupervisedLearning"));
const UnsupervisedLearning = lazy(() => import("./pages/machine-learning/UnsupervisedLearning"));
const ReinforcementLearning = lazy(() => import("./pages/machine-learning/ReinforcementLearning"));

// Lazy load Course pages
const CoursesIndex = lazy(() => import("./pages/courses/CoursesIndex"));
const PythonBasics = lazy(() => import("./pages/courses/programming/PythonBasics"));
const AppliedStatistics = lazy(() => import("./pages/courses/statistics/AppliedStatistics"));
const SupervisedLearningCourse = lazy(() => import("./pages/courses/machine-learning/SupervisedLearningCourse"));
const DatabaseFundamentals = lazy(() => import("./pages/courses/databases/DatabaseFundamentals"));
const DataVisualization = lazy(() => import("./pages/courses/dataviz/DataVisualization"));
const NaturalLanguageProcessing = lazy(() => import("./pages/courses/nlp/NaturalLanguageProcessing"));
const DataVisualizationTools = lazy(() => import("./pages/tools/DataVisualization"));

const queryClient = new QueryClient();

/**
 * Loading fallback component for lazy-loaded routes
 * Provides a consistent loading experience across the application
 */
const PageLoadingFallback = () => (
  <PageLoading message="Chargement de la page..." />
);

const App = () => (
  <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/fundamentals" element={<Fundamentals />} />
              <Route path="/fundamentals/math-stats" element={<MathStats />} />
              <Route path="/fundamentals/math-stats/probability-theory" element={<ProbabilityTheory />} />
              <Route path="/fundamentals/math-stats/descriptive-statistics" element={<DescriptiveStatistics />} />
              <Route path="/fundamentals/math-stats/linear-algebra" element={<LinearAlgebra />} />
              <Route path="/fundamentals/math-stats/differential-calculus" element={<DifferentialCalculus />} />
              <Route path="/fundamentals/math-stats/advanced-statistics" element={<AdvancedStatistics />} />
              <Route path="/fundamentals/math-stats/integral-calculus" element={<IntegralCalculus />} />
              <Route path="/fundamentals/data-preparation" element={<DataPreparationRefactored />} />
              <Route path="/fundamentals/programming" element={<Programming />} />
              <Route path="/fundamentals/databases" element={<Databases />} />
              <Route path="/machine-learning" element={<MachineLearning />} />
              // Replace current mixed structure with:
              <Route path="/courses/fundamentals/math-stats" element={<MathStats />} />
              <Route path="/courses/fundamentals/programming" element={<Programming />} />
              <Route path="/courses/machine-learning/supervised" element={<SupervisedLearning />} />
              
              // Maintain ALL legacy redirects
              <Route path="/fundamentals/math-stats" element={<Navigate to="/courses/fundamentals/math-stats" replace />} />
              <Route path="/machine-learning/supervised" element={<Navigate to="/courses/machine-learning/supervised" replace />} />
              <Route path="/machine-learning/unsupervised" element={<UnsupervisedLearning />} />
              <Route path="/machine-learning/reinforcement" element={<ReinforcementLearning />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/:categoryId" element={<QuizCategory />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Normalized Course Routes */}
              <Route path="/courses" element={<CoursesIndex />} />
              <Route path="/courses/programming/python-basics" element={<PythonBasics />} />
              <Route path="/courses/statistics/applied-statistics" element={<AppliedStatistics />} />
              <Route path="/courses/machine-learning/supervised-learning" element={<SupervisedLearningCourse />} />
              <Route path="/courses/databases/database-fundamentals" element={<DatabaseFundamentals />} />
              <Route path="/courses/dataviz/data-visualization" element={<DataVisualization />} />
              <Route path="/courses/nlp/natural-language-processing" element={<NaturalLanguageProcessing />} />
              
              {/* Tools Routes */}
              <Route path="/tools/visualization" element={<DataVisualizationTools />} />
              
              {/* Legacy course routes - keep for compatibility */}
              <Route path="/courses/fondations-mathematiques-et-logiques/math-intro" element={<MathIntroCourse />} />
              <Route path="/courses/math-stats/integral-calculus" element={<IntegralCalculusCourse />} />
              
              {/* Legacy routes redirects */}
              <Route path="/course/python-basics" element={<Navigate to="/courses/programming/python-basics" replace />} />
              <Route path="/course/applied-statistics" element={<Navigate to="/courses/statistics/applied-statistics" replace />} />
              <Route path="/course/supervised-ml" element={<Navigate to="/courses/machine-learning/supervised-learning" replace />} />
              <Route path="/course/databases" element={<Navigate to="/courses/databases/database-fundamentals" replace />} />
              <Route path="/course/dataviz" element={<Navigate to="/courses/dataviz/data-visualization" replace />} />
              <Route path="/course/nlp" element={<Navigate to="/courses/nlp/natural-language-processing" replace />} />
              
              {/* Old course structure redirects */}
              <Route path="/programming/python" element={<Navigate to="/courses/programming/python-basics" replace />} />
              <Route path="/statistics/applied" element={<Navigate to="/courses/statistics/applied-statistics" replace />} />
              <Route path="/ml/supervised" element={<Navigate to="/courses/machine-learning/supervised-learning" replace />} />
              
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
