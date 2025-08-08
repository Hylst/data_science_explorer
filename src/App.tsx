import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Introduction from "./pages/Introduction";
import Fundamentals from "./pages/Fundamentals";
import MachineLearning from "./pages/MachineLearning";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Glossary from "./pages/Glossary";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import MathStats from "./pages/fundamentals/MathStats";
import Programming from "./pages/fundamentals/Programming";
import Databases from "./pages/fundamentals/Databases";
import DataPreparationRefactored from "./pages/fundamentals/DataPreparationRefactored";

// Import course pages
import MathIntroCourse from "./pages/courses/math-stats/math-intro";
import IntegralCalculusCourse from "./pages/courses/math-stats/integral-calculus";

// Import new math-stats pages
import { ProbabilityTheory, DescriptiveStatistics, LinearAlgebra, DifferentialCalculus, AdvancedStatistics, IntegralCalculus } from "./pages/fundamentals/math-stats";

// Import ML course pages
import SupervisedLearning from "./pages/machine-learning/SupervisedLearning";
import UnsupervisedLearning from "./pages/machine-learning/UnsupervisedLearning";
import ReinforcementLearning from "./pages/machine-learning/ReinforcementLearning";

// Import new course pages with normalized routes
import CoursesIndex from "./pages/courses/CoursesIndex";
import PythonBasics from "./pages/courses/programming/PythonBasics";
import AppliedStatistics from "./pages/courses/statistics/AppliedStatistics";
import SupervisedLearningCourse from "./pages/courses/machine-learning/SupervisedLearningCourse";
import DatabaseFundamentals from "./pages/courses/databases/DatabaseFundamentals";
import DataVisualization from "./pages/courses/dataviz/DataVisualization";
import NaturalLanguageProcessing from "./pages/courses/nlp/NaturalLanguageProcessing";
import DataVisualizationTools from "./pages/tools/DataVisualization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
              <Route path="/machine-learning/supervised" element={<SupervisedLearning />} />
              <Route path="/machine-learning/unsupervised" element={<UnsupervisedLearning />} />
              <Route path="/machine-learning/reinforcement" element={<ReinforcementLearning />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
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
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
