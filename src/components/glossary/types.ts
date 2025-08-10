
export interface GlossaryEntry {
  term: string;
  description: string;
  icon: React.ReactNode;
  category?: string;
}

// Category definitions for better organization
export const GLOSSARY_CATEGORIES = {
  FONDAMENTAUX: "fondamentaux",
  MACHINE_LEARNING: "machine-learning",
  DEEP_LEARNING: "deep-learning",
  STATISTIQUES: "statistiques",
  NLP: "nlp",
  COMPUTER_VISION: "computer-vision",
  PREPROCESSING: "preprocessing",
  MLOPS: "mlops",
  DATA_ENGINEERING: "data-engineering",
  VISUALIZATION: "visualization"
} as const;

export type GlossaryCategory = typeof GLOSSARY_CATEGORIES[keyof typeof GLOSSARY_CATEGORIES];
