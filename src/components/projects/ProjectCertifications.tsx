
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Star, 
  Clock, 
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

interface Certification {
  id: string;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  projectsRequired: number;
  completedProjects?: number;
  badge: string;
  skills: string[];
  participants: number;
  completionRate: number;
  status: "available" | "in-progress" | "completed" | "locked";
}

const certifications: Certification[] = [
  {
    id: "data-analyst",
    title: "Analyste de Données Certifié",
    description: "Maîtrisez les fondamentaux de l'analyse de données avec Python et SQL",
    level: "Débutant",
    duration: "4-6 semaines",
    projectsRequired: 5,
    completedProjects: 3,
    badge: "🏆",
    skills: ["Python", "Pandas", "SQL", "Matplotlib", "Analyse statistique"],
    participants: 1250,
    completionRate: 78,
    status: "in-progress"
  },
  {
    id: "ml-specialist",
    title: "Spécialiste Machine Learning",
    description: "Développez votre expertise en algorithmes de machine learning",
    level: "Intermédiaire", 
    duration: "6-8 semaines",
    projectsRequired: 8,
    completedProjects: 0,
    badge: "🤖",
    skills: ["scikit-learn", "TensorFlow", "Classification", "Régression", "Validation croisée"],
    participants: 890,
    completionRate: 65,
    status: "available"
  },
  {
    id: "deep-learning-expert",
    title: "Expert Deep Learning",
    description: "Créez des réseaux de neurones complexes pour des applications avancées",
    level: "Avancé",
    duration: "8-12 semaines", 
    projectsRequired: 10,
    badge: "🧠",
    skills: ["PyTorch", "CNN", "RNN", "GAN", "Transfer Learning"],
    participants: 420,
    completionRate: 52,
    status: "locked"
  },
  {
    id: "computer-vision",
    title: "Vision par Ordinateur",
    description: "Spécialisez-vous dans le traitement et l'analyse d'images",
    level: "Avancé",
    duration: "6-10 semaines",
    projectsRequired: 7,
    badge: "👁️",
    skills: ["OpenCV", "CNN", "Object Detection", "Image Segmentation"],
    participants: 340,
    completionRate: 58,
    status: "available"
  },
  {
    id: "nlp-specialist",
    title: "Spécialiste NLP",
    description: "Maîtrisez le traitement automatique du langage naturel",
    level: "Intermédiaire",
    duration: "5-8 semaines",
    projectsRequired: 6,
    badge: "📝",
    skills: ["NLTK", "spaCy", "Transformers", "Sentiment Analysis", "NER"],
    participants: 680,
    completionRate: 71,
    status: "available"
  },
  {
    id: "big-data-engineer",
    title: "Ingénieur Big Data",
    description: "Gérez et analysez de grandes quantités de données",
    level: "Avancé",
    duration: "10-14 semaines",
    projectsRequired: 12,
    badge: "⚡",
    skills: ["Spark", "Hadoop", "Kafka", "Docker", "Cloud Computing"],
    participants: 280,
    completionRate: 45,
    status: "locked"
  }
];

export function ProjectCertifications() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress": return <Clock className="h-4 w-4 text-blue-600" />;
      case "available": return <Target className="h-4 w-4 text-gray-600" />;
      case "locked": return <Star className="h-4 w-4 text-gray-400" />;
      default: return null;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "available": return "bg-gray-100 text-gray-800";
      case "locked": return "bg-gray-50 text-gray-400";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getButtonText = (status: string) => {
    switch (status) {
      case "completed": return "Voir le certificat";
      case "in-progress": return "Continuer";
      case "available": return "Commencer";
      case "locked": return "Prérequis non remplis";
      default: return "Voir détails";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Certifications Disponibles</h2>
        <p className="text-muted-foreground">
          Validez vos compétences avec nos certifications reconnues par l'industrie
        </p>
      </div>

      {/* Statistiques des certifications */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">6</p>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center"> 
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">3,860</p>
            <p className="text-sm text-muted-foreground">Participants</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">61%</p>
            <p className="text-sm text-muted-foreground">Taux de réussite</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">2-12</p>
            <p className="text-sm text-muted-foreground">Semaines</p>
          </CardContent>
        </Card>
      </div>

      {/* Liste des certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className={`${cert.status === 'locked' ? 'opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cert.badge}</span>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                      <Badge variant="outline" className={getStatusColor(cert.status)}>
                        {getStatusIcon(cert.status)}
                        <span className="ml-1 capitalize">{cert.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">
                {cert.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progression si en cours */}
              {cert.status === 'in-progress' && cert.completedProjects !== undefined && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span>{cert.completedProjects}/{cert.projectsRequired} projets</span>
                  </div>
                  <Progress value={(cert.completedProjects / cert.projectsRequired) * 100} />
                </div>
              )}

              {/* Informations sur la certification */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Durée</p>
                  <p className="font-medium">{cert.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Projets requis</p>
                  <p className="font-medium">{cert.projectsRequired}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Participants</p>
                  <p className="font-medium">{cert.participants.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Taux de réussite</p>
                  <p className="font-medium">{cert.completionRate}%</p>
                </div>
              </div>

              {/* Compétences développées */}
              <div>
                <p className="text-sm font-medium mb-2">Compétences développées</p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bouton d'action */}
              <Button 
                className="w-full" 
                variant={cert.status === 'locked' ? 'outline' : 'default'}
                disabled={cert.status === 'locked'}
              >
                {getButtonText(cert.status)}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
