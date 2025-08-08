
import ResourcesSection from "../shared/ResourcesSection";

const resources = [
  {
    title: "The Elements of Statistical Learning",
    description: "Référence académique couvrant en profondeur le clustering, PCA, et autres techniques non supervisées avec une approche mathématique rigoureuse.",
    type: "book" as const,
    difficulty: "Avancé" as const,
    language: "Anglais",
    url: "https://hastie.su.domains/ElemStatLearn/",
    rating: 5,
    free: true
  },
  {
    title: "Hands-On Unsupervised Learning",
    description: "Guide pratique avec implémentations Python pour clustering, réduction de dimensionnalité, et détection d'anomalies.",
    type: "book" as const,
    difficulty: "Intermédiaire" as const,
    language: "Anglais",
    rating: 4,
    free: false
  },
  {
    title: "CS229: Machine Learning - Unsupervised Learning",
    description: "Cours de Stanford couvrant K-means, PCA, ICA avec notes détaillées et exercices pratiques.",
    type: "video" as const,
    difficulty: "Intermédiaire" as const,
    language: "Anglais",
    url: "http://cs229.stanford.edu/",
    rating: 5,
    free: true
  },
  {
    title: "Scikit-learn Clustering Guide",
    description: "Documentation complète avec exemples pratiques pour tous les algorithmes de clustering disponibles.",
    type: "website" as const,
    difficulty: "Débutant" as const,
    language: "Anglais",
    url: "https://scikit-learn.org/stable/modules/clustering.html",
    rating: 5,
    free: true
  },
  {
    title: "UMAP: Uniform Manifold Approximation",
    description: "Implémentation Python de UMAP pour la réduction de dimensionnalité non-linéaire avec documentation excellente.",
    type: "code" as const,
    difficulty: "Intermédiaire" as const,
    language: "Python",
    url: "https://umap-learn.readthedocs.io/",
    rating: 4,
    free: true
  },
  {
    title: "Andrew Ng - Unsupervised Learning",
    description: "Introduction accessible aux concepts fondamentaux avec focus sur les applications pratiques.",
    type: "video" as const,
    difficulty: "Débutant" as const,
    language: "Anglais",
    url: "https://www.coursera.org/learn/unsupervised-learning",
    rating: 4,
    free: false
  },
  {
    title: "Anomaly Detection: A Survey",
    description: "Survey académique complet des techniques de détection d'anomalies avec comparaisons détaillées.",
    type: "website" as const,
    difficulty: "Avancé" as const,
    language: "Anglais",
    rating: 4,
    free: true
  },
  {
    title: "PyOD: Python Outlier Detection",
    description: "Bibliothèque Python complète pour la détection d'anomalies avec plus de 30 algorithmes implémentés.",
    type: "code" as const,
    difficulty: "Intermédiaire" as const,
    language: "Python",
    url: "https://pyod.readthedocs.io/",
    rating: 4,
    free: true
  },
  {
    title: "t-SNE: Visualizing Data",
    description: "Article original de van der Maaten expliquant t-SNE avec implémentations et bonnes pratiques.",
    type: "website" as const,
    difficulty: "Avancé" as const,
    language: "Anglais",
    url: "https://lvdmaaten.github.io/tsne/",
    rating: 4,
    free: true
  },
  {
    title: "Kaggle Learn: Clustering Course",
    description: "Cours pratique et interactif sur Kaggle couvrant K-means et clustering hiérarchique avec datasets réels.",
    type: "website" as const,
    difficulty: "Débutant" as const,
    language: "Anglais",
    url: "https://www.kaggle.com/learn/",
    rating: 4,
    free: true
  },
  {
    title: "r/MachineLearning",
    description: "Communauté Reddit active avec discussions sur les dernières recherches en apprentissage non supervisé.",
    type: "community" as const,
    difficulty: "Intermédiaire" as const,
    language: "Anglais",
    url: "https://reddit.com/r/MachineLearning",
    rating: 4,
    free: true
  },
  {
    title: "France Data Science",
    description: "Communauté française de data scientists avec groupes de discussion sur l'apprentissage non supervisé.",
    type: "community" as const,
    difficulty: "Intermédiaire" as const,
    language: "Français",
    rating: 3,
    free: true
  }
];

const tips = [
  "Commencez toujours par explorer vos données avec des visualisations",
  "La standardisation des données est cruciale pour la plupart des algorithmes",
  "Utilisez plusieurs métriques d'évaluation (silhouette, inertie, ARI) pour comparer les résultats",
  "Expérimentez avec différents hyperparamètres - ils ont un impact majeur",
  "Validez vos clusters avec l'expertise métier, pas seulement les métriques"
];

const warnings = [
  "Les résultats peuvent varier selon l'initialisation - testez plusieurs runs",
  "Attention à la malédiction de la dimensionnalité avec trop de features",
  "t-SNE peut créer des clusters artificiels - ne sur-interprétez pas",
  "DBSCAN est très sensible aux paramètres eps et min_samples",
  "Les algorithmes de clustering assument souvent des formes sphériques"
];

const bestPractices = [
  "Toujours visualiser vos données avant et après clustering",
  "Documentez vos choix d'hyperparamètres et leurs justifications",
  "Utilisez la validation croisée même en apprentissage non supervisé",
  "Combinez plusieurs techniques (PCA + clustering) pour de meilleurs résultats",
  "Créez des métriques métier pour évaluer la qualité pratique de vos clusters"
];

const UnsupervisedResourcesSection = () => {
  return (
    <ResourcesSection
      title="Ressources pour Maîtriser l'Apprentissage Non Supervisé"
      resources={resources}
      tips={tips}
      warnings={warnings}
      bestPractices={bestPractices}
    />
  );
};

export default UnsupervisedResourcesSection;
