// Centralized route configuration
export const ROUTES = {
  HOME: '/',
  COURSES: {
    INDEX: '/courses',
    FUNDAMENTALS: {
      MATH_STATS: '/courses/fundamentals/math-stats',
      PROGRAMMING: '/courses/fundamentals/programming',
      DATABASES: '/courses/fundamentals/databases'
    },
    MACHINE_LEARNING: {
      INDEX: '/courses/machine-learning',
      SUPERVISED: '/courses/machine-learning/supervised',
      UNSUPERVISED: '/courses/machine-learning/unsupervised'
    }
  }
} as const;

export const LEGACY_REDIRECTS = [
  { from: '/course/python-basics', to: '/courses/fundamentals/programming/python-basics' },
  { from: '/fundamentals/math-stats', to: '/courses/fundamentals/math-stats' },
  // ... all legacy routes
];