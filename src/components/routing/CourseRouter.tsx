import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load course components
const MathIntroCourse = React.lazy(() => import('../../pages/courses/math-stats/math-intro'));
const IntegralCalculusCourse = React.lazy(() => import('../../pages/courses/math-stats/integral-calculus'));
const PythonBasics = React.lazy(() => import('../../pages/courses/programming/PythonBasics'));
const AppliedStatistics = React.lazy(() => import('../../pages/courses/statistics/AppliedStatistics'));
const SupervisedLearningCourse = React.lazy(() => import('../../pages/courses/machine-learning/SupervisedLearningCourse'));
const DatabaseFundamentals = React.lazy(() => import('../../pages/courses/databases/DatabaseFundamentals'));
const DataVisualization = React.lazy(() => import('../../pages/courses/dataviz/DataVisualization'));
const NaturalLanguageProcessing = React.lazy(() => import('../../pages/courses/nlp/NaturalLanguageProcessing'));
const MLModelsGuide = React.lazy(() => import('../../pages/courses/MLModelsGuide'));
const TransformersGuide = React.lazy(() => import('../../pages/courses/TransformersGuide'));

/**
 * Centralized course routing component that handles all course-related routes
 * and provides consistent URL patterns across the application
 */
const CourseRouter: React.FC = () => {
  return (
    <Routes>
      {/* Math & Statistics Courses */}
      <Route path="math-stats/math-intro" element={<MathIntroCourse />} />
      <Route path="math-stats/integral-calculus" element={<IntegralCalculusCourse />} />
      <Route path="statistics/applied-statistics" element={<AppliedStatistics />} />
      
      {/* Programming Courses */}
      <Route path="programming/python-basics" element={<PythonBasics />} />
      
      {/* Database Courses */}
      <Route path="databases/database-fundamentals" element={<DatabaseFundamentals />} />
      
      {/* Data Visualization Courses */}
      <Route path="dataviz/data-visualization" element={<DataVisualization />} />
      
      {/* Machine Learning Courses */}
      <Route path="machine-learning/supervised-learning" element={<SupervisedLearningCourse />} />
      <Route path="machine-learning/ml-models-guide" element={<MLModelsGuide />} />
      <Route path="machine-learning/transformers" element={<TransformersGuide />} />
      
      {/* NLP Courses */}
      <Route path="nlp/natural-language-processing" element={<NaturalLanguageProcessing />} />
      
      {/* Legacy redirects for backward compatibility */}
      <Route path="fondations-mathematiques-et-logiques/math-intro" element={<Navigate to="/courses/math-stats/math-intro" replace />} />
      <Route path="programmation-et-algorithmes/python-basics" element={<Navigate to="/courses/programming/python-basics" replace />} />
      <Route path="bases-de-donnees-et-stockage/database-fundamentals" element={<Navigate to="/courses/databases/database-fundamentals" replace />} />
      <Route path="machine-learning-et-ia/supervised-learning" element={<Navigate to="/courses/machine-learning/supervised-learning" replace />} />
      <Route path="visualisation-de-donnees/data-visualization" element={<Navigate to="/courses/dataviz/data-visualization" replace />} />
      <Route path="nlp-et-traitement-du-langage/natural-language-processing" element={<Navigate to="/courses/nlp/natural-language-processing" replace />} />
      
      {/* Catch-all redirect to courses index */}
      <Route path="*" element={<Navigate to="/courses" replace />} />
    </Routes>
  );
};

export default CourseRouter;