
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  Clock, 
  Users, 
  Trophy,
  Code,
  Database,
  BarChart3,
  Play,
  BookOpen,
  Download
} from "lucide-react";

interface FeaturedProjectProps {
  className?: string;
}

const featuredProjects = [
  {
    id: "featured-1",
    title: "Système de Recommandation Netflix",
    description: "Développez un système de recommandation complet utilisant les techniques de machine learning les plus avancées, similaire à celui utilisé par Netflix.",
    longDescription: "Ce projet vous permettra de maîtriser les algorithmes de filtrage collaboratif, le deep learning pour les recommandations, et l'analyse de sentiments sur les reviews. Vous travaillerez avec des datasets réels et apprendrez à déployer votre modèle en production.",
    level: "Avancé",
    duration: "15-20 heures",
    participants: 1247,
    rating: 4.9,
    completionRate: 78,
    technologies: ["Python", "TensorFlow", "Pandas", "PostgreSQL", "Docker", "Flask"],
    category: "Machine Learning",
    image: "/img/machine_learning.jpg",
    highlights: [
      "Dataset de 25M+ de ratings",
      "Algorithmes de pointe",
      "Déploiement cloud",
      "Interface web interactive"
    ],
    learningGoals: [
      "Filtrage collaboratif matriciel",
      "Réseaux de neurones pour recommandations",
      "Optimisation des hyperparamètres",
      "Évaluation des systèmes de recommandation"
    ],
    instructor: "Dr. Sarah Chen",
    status: "trending"
  },
  {
    id: "featured-2", 
    title: "Analyse Prédictive des Cryptomonnaies",
    description: "Créez un modèle prédictif pour analyser les tendances des cryptomonnaies en utilisant l'analyse technique et le machine learning.",
    longDescription: "Plongez dans l'univers de la finance quantitative en développant des modèles prédictifs sophistiqués. Vous apprendrez à traiter des données financières en temps réel, à implémenter des indicateurs techniques, et à utiliser des algorithmes de deep learning pour prédire les mouvements de prix.",
    level: "Intermédiaire",
    duration: "12-15 heures",
    participants: 892,
    rating: 4.7,
    completionRate: 65,
    technologies: ["Python", "PyTorch", "Plotly", "APIs", "Streamlit", "MongoDB"],
    category: "Finance Quantitative",
    image: "/img/bdd_sql_nosql.jpg",
    highlights: [
      "Données temps réel",
      "Indicateurs techniques avancés",
      "Modèles LSTM/GRU",
      "Dashboard interactif"
    ],
    learningGoals: [
      "Analyse technique automatisée",
      "Réseaux de neurones récurrents",
      "Gestion des données temporelles",
      "Visualisations financières avancées"
    ],
    instructor: "Prof. Marcus Johnson",
    status: "popular"
  }
];

export function FeaturedProject({ className }: FeaturedProjectProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "trending": return <Badge className="bg-purple-100 text-purple-800">🔥 Tendance</Badge>;
      case "popular": return <Badge className="bg-blue-100 text-blue-800">⭐ Populaire</Badge>;
      case "new": return <Badge className="bg-green-100 text-green-800">✨ Nouveau</Badge>;
      default: return null;
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {featuredProjects.map((project, index) => (
        <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/3 relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={getLevelColor(project.level)}>
                  {project.level}
                </Badge>
                {getStatusBadge(project.status)}
              </div>
            </div>

            {/* Contenu */}
            <div className="md:w-2/3 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base mb-3">
                      {project.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{project.duration}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Durée</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{project.participants}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Participants</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{project.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Note</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{project.completionRate}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Réussite</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Points forts */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Points forts du projet
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectifs d'apprentissage */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Objectifs d'apprentissage
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {project.learningGoals.map((goal, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progression et actions */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button className="gap-2">
                        <Play className="h-4 w-4" />
                        Commencer le projet
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Par {project.instructor}
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
