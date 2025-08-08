
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Star, 
  Trophy,
  Code,
  Database,
  BarChart3,
  Brain,
  Image,
  Globe,
  TrendingUp,
  Zap
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced" | "collaborative";
  image: string;
  technologies: string[];
  category: string;
  duration: string;
  difficulty: number; // 1-5
  rating: number;
  participants: number;
  completionRate: number;
  instructor?: string;
  status?: "new" | "popular" | "trending" | "updated";
  prerequisites?: string[];
  learningObjectives?: string[];
}

interface ProjectGridProps {
  filter: string;
  level: string;
}

export function ProjectGrid({ filter, level }: ProjectGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Base de données de projets enrichie
    const allProjects: Project[] = [
      // PROJETS DÉBUTANTS
      {
        id: "beginner-1",
        title: "Analyse exploratoire de données - Ventes",
        description: "Découvrez les bases de l'analyse de données en explorant un dataset de ventes réel. Apprenez à nettoyer, visualiser et extraire des insights.",
        level: "beginner",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        category: "analyse",
        duration: "3-5 heures",
        difficulty: 2,
        rating: 4.6,
        participants: 2847,
        completionRate: 89,
        instructor: "Marie Dubois",
        status: "popular",
        prerequisites: ["Bases de Python"],
        learningObjectives: [
          "Manipulation de DataFrames",
          "Statistiques descriptives",
          "Visualisations basiques",
          "Détection de valeurs aberrantes"
        ]
      },
      {
        id: "beginner-2",
        title: "Classification des fleurs d'Iris",
        description: "Votre premier modèle de machine learning ! Classifiez les variétés de fleurs d'Iris avec des algorithmes simples.",
        level: "beginner",
        image: "/img/bdd_sql_nosql.jpg",
        technologies: ["Python", "scikit-learn", "Matplotlib", "NumPy"],
        category: "machine learning",
        duration: "4-6 heures",
        difficulty: 2,
        rating: 4.8,
        participants: 3251,
        completionRate: 92,
        instructor: "Dr. Pierre Martin",
        status: "new",
        prerequisites: ["Python de base", "Statistiques de base"],
        learningObjectives: [
          "Algorithmes de classification",
          "Préparation des données",
          "Évaluation de modèles",
          "Validation croisée"
        ]
      },
      {
        id: "beginner-3",
        title: "Dashboard COVID-19 avec Streamlit",
        description: "Créez un tableau de bord interactif pour visualiser les données COVID-19 mondiales en temps réel.",
        level: "beginner",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "Streamlit", "Plotly", "Pandas"],
        category: "visualisation",
        duration: "5-7 heures",
        difficulty: 3,
        rating: 4.5,
        participants: 1892,
        completionRate: 84,
        instructor: "Sophie Chen",
        status: "trending",
        prerequisites: ["Python", "Pandas"],
        learningObjectives: [
          "Applications web avec Streamlit",
          "Visualisations interactives",
          "APIs de données",
          "Déploiement d'applications"
        ]
      },
      {
        id: "beginner-4",
        title: "Analyse de Sentiments sur Twitter",
        description: "Analysez les sentiments des tweets en temps réel sur des sujets d'actualité avec des techniques de NLP simples.",
        level: "beginner",
        image: "/img/bdd_sql_nosql.jpg",
        technologies: ["Python", "NLTK", "TextBlob", "Tweepy"],
        category: "nlp",
        duration: "4-6 heures",
        difficulty: 2,
        rating: 4.4,
        participants: 2156,
        completionRate: 78,
        instructor: "Ahmed Hassan",
        status: "updated",
        prerequisites: ["Python de base"],
        learningObjectives: [
          "Collecte de données Twitter",
          "Préprocessing de texte",
          "Analyse de sentiments",
          "Visualisation de résultats"
        ]
      },
      
      // PROJETS INTERMÉDIAIRES
      {
        id: "intermediate-1",
        title: "Système de Recommandation E-commerce",
        description: "Développez un système de recommandation complet pour un site e-commerce avec filtrage collaboratif et basé sur le contenu.",
        level: "intermediate",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "scikit-learn", "Surprise", "Flask", "PostgreSQL"],
        category: "recommandation",
        duration: "12-15 heures",
        difficulty: 4,
        rating: 4.7,
        participants: 1567,
        completionRate: 73,
        instructor: "Dr. Elena Rodriguez",
        status: "popular",
        prerequisites: ["Machine Learning de base", "Algèbre linéaire", "SQL"],
        learningObjectives: [
          "Filtrage collaboratif",
          "Recommandations basées sur le contenu",
          "Évaluation des systèmes de recommandation",
          "API REST avec Flask"
        ]
      },
      {
        id: "intermediate-2",
        title: "Prédiction des Prix Immobiliers",
        description: "Créez un modèle de régression avancé pour prédire les prix immobiliers en utilisant des données géographiques et économiques.",
        level: "intermediate",
        image: "/img/bdd_sql_nosql.jpg",
        technologies: ["Python", "XGBoost", "GeoPandas", "Folium", "Docker"],
        category: "regression",
        duration: "10-14 heures",
        difficulty: 4,
        rating: 4.6,
        participants: 1289,
        completionRate: 68,
        instructor: "Thomas Liu",
        status: "trending",
        prerequisites: ["Statistiques avancées", "Python intermédiaire"],
        learningObjectives: [
          "Régression avec XGBoost",
          "Données géographiques",
          "Feature engineering avancé",
          "Validation et optimisation"
        ]
      },
      {
        id: "intermediate-3",
        title: "Détection de Fraudes Bancaires",
        description: "Implémentez des algorithmes de détection d'anomalies pour identifier les transactions frauduleuses en temps réel.",
        level: "intermediate",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "scikit-learn", "Kafka", "Redis", "Elasticsearch"],
        category: "anomaly-detection",
        duration: "15-18 heures",
        difficulty: 4,
        rating: 4.8,
        participants: 892,
        completionRate: 65,
        instructor: "Dr. Sarah Johnson",
        status: "new",
        prerequisites: ["Machine Learning", "Statistiques", "Bases de données"],
        learningObjectives: [
          "Détection d'anomalies",
          "Données déséquilibrées",
          "Streaming de données",
          "Systèmes temps réel"
        ]
      },

      // PROJETS AVANCÉS
      {
        id: "advanced-1",
        title: "Classification d'Images Médicales avec CNN",
        description: "Développez un système de diagnostic médical automatisé en utilisant des réseaux de neurones convolutifs pour détecter des pathologies.",
        level: "advanced",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "DICOM"],
        category: "computer-vision",
        duration: "20-25 heures",
        difficulty: 5,
        rating: 4.9,
        participants: 542,
        completionRate: 45,
        instructor: "Prof. Michael Chen",
        status: "trending",
        prerequisites: ["Deep Learning", "Computer Vision", "Python avancé"],
        learningObjectives: [
          "CNNs pour l'imagerie médicale",
          "Transfer Learning",
          "Gestion des données DICOM",
          "Éthique en IA médicale"
        ]
      },
      {
        id: "advanced-2",
        title: "Traduction Automatique avec Transformers",
        description: "Construisez un système de traduction automatique état-de-l'art en utilisant l'architecture Transformer.",
        level: "advanced",
        image: "/img/bdd_sql_nosql.jpg",
        technologies: ["Python", "PyTorch", "Transformers", "CUDA", "Weights&Biases"],
        category: "nlp",
        duration: "25-30 heures",
        difficulty: 5,
        rating: 4.8,
        participants: 387,
        completionRate: 38,
        instructor: "Dr. Anna Kowalski",
        status: "new",
        prerequisites: ["NLP avancé", "Deep Learning", "Attention mechanisms"],
        learningObjectives: [
          "Architecture Transformer",
          "Attention multi-têtes",
          "Fine-tuning de modèles pré-entraînés",
          "Évaluation BLEU/ROUGE"
        ]
      },
      {
        id: "advanced-3",
        title: "Système de Trading Algorithmique",
        description: "Développez une stratégie de trading automatisée utilisant le machine learning et l'analyse technique avancée.",
        level: "advanced",
        image: "/img/machine_learning.jpg",
        technologies: ["Python", "Alpha Architect", "QuantLib", "Apache Airflow", "Docker"],
        category: "finance",
        duration: "30-35 heures",
        difficulty: 5,
        rating: 4.7,
        participants: 298,
        completionRate: 42,
        instructor: "Quantitative Team",
        status: "popular",
        prerequisites: ["Finance quantitative", "Séries temporelles", "ML avancé"],
        learningObjectives: [
          "Stratégies quantitatives",
          "Backtesting rigoureux",
          "Gestion des risques",
          "Déploiement en production"
        ]
      }
    ];
    
    setTimeout(() => {
      let filteredProjects = allProjects;
      
      // Filtrer par niveau
      if (level !== "all") {
        filteredProjects = allProjects.filter(project => project.level === level);
      }
      
      // Appliquer le filtre de recherche
      if (filter !== "all") {
        filteredProjects = filteredProjects.filter(project => 
          project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())) ||
          project.title.toLowerCase().includes(filter.toLowerCase()) ||
          project.description.toLowerCase().includes(filter.toLowerCase()) ||
          project.category.toLowerCase().includes(filter.toLowerCase())
        );
      }
      
      setProjects(filteredProjects);
      setIsLoading(false);
    }, 800);
  }, [filter, level]);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-14" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full mt-2" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
  
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <Database className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-medium mb-2">Aucun projet trouvé</h3>
        <p className="text-muted-foreground">
          Essayez de modifier vos filtres ou consultez d'autres catégories.
        </p>
      </div>
    );
  }

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    
    const statusConfig = {
      new: { label: "✨ Nouveau", className: "bg-green-100 text-green-800" },
      popular: { label: "🔥 Populaire", className: "bg-red-100 text-red-800" },
      trending: { label: "📈 Tendance", className: "bg-purple-100 text-purple-800" },
      updated: { label: "🔄 Mis à jour", className: "bg-blue-100 text-blue-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return config ? (
      <Badge className={config.className}>{config.label}</Badge>
    ) : null;
  };

  const getLevelInfo = (level: string) => {
    const levelConfig = {
      beginner: { label: "Débutant", color: "bg-green-100 text-green-800", icon: <Code className="h-4 w-4" /> },
      intermediate: { label: "Intermédiaire", color: "bg-yellow-100 text-yellow-800", icon: <BarChart3 className="h-4 w-4" /> },
      advanced: { label: "Avancé", color: "bg-red-100 text-red-800", icon: <Brain className="h-4 w-4" /> },
      collaborative: { label: "Collaboratif", color: "bg-blue-100 text-blue-800", icon: <Users className="h-4 w-4" /> }
    };
    
    return levelConfig[level as keyof typeof levelConfig] || levelConfig.beginner;
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const levelInfo = getLevelInfo(project.level);
        
        return (
          <Card key={project.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 w-full relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
              />
              <div className="absolute top-2 left-2 flex gap-2">
                <Badge className={levelInfo.color}>
                  {levelInfo.icon}
                  <span className="ml-1">{levelInfo.label}</span>
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                {getStatusBadge(project.status)}
              </div>
              
              {/* Overlay avec rating */}
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                {project.rating}
              </div>
            </div>
            
            <CardHeader className="pb-3">
              <h3 className="text-lg font-semibold line-clamp-2">{project.title}</h3>
              
              {/* Statistiques rapides */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {project.participants}
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  {project.completionRate}%
                </div>
              </div>

              {/* Difficulté */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Difficulté:</span>
                <div className="flex gap-1">
                  {getDifficultyStars(project.difficulty)}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {/* Instructeur */}
              {project.instructor && (
                <div className="text-xs text-muted-foreground">
                  Par <span className="font-medium">{project.instructor}</span>
                </div>
              )}

              {/* Barre de progression de popularité */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Popularité</span>
                  <span className="text-muted-foreground">{project.completionRate}%</span>
                </div>
                <Progress value={project.completionRate} className="h-1" />
              </div>
            </CardContent>
            
            <CardFooter className="pt-3">
              <Button asChild className="w-full">
                <Link to={`/projects/${project.id}`}>
                  Démarrer le projet
                </Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
