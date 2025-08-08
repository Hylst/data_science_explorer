
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Trophy, 
  Clock, 
  Star,
  Target,
  BookOpen,
  Award,
  Zap
} from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Target className="h-5 w-5" />,
    label: "Projets Disponibles",
    value: "150+",
    description: "Projets variés et actualisés",
    color: "text-blue-600"
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Participants Actifs",
    value: "2,500+",
    description: "Communauté engagée",
    color: "text-green-600"
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    label: "Projets Complétés",
    value: "8,200+",
    description: "Succès de la communauté",
    color: "text-yellow-600"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Temps Moyen",
    value: "4-12h",
    description: "Par projet selon le niveau",
    color: "text-purple-600"
  },
  {
    icon: <Star className="h-5 w-5" />,
    label: "Note Moyenne",
    value: "4.8/5",
    description: "Satisfaction des utilisateurs",
    color: "text-orange-600"
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Guides Détaillés",
    value: "100%",
    description: "Tous les projets documentés",
    color: "text-teal-600"
  },
  {
    icon: <Award className="h-5 w-5" />,
    label: "Certifications",
    value: "12",
    description: "Certificats disponibles",
    color: "text-indigo-600"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    label: "Nouveautés",
    value: "5/mois",
    description: "Nouveaux projets ajoutés",
    color: "text-red-600"
  }
];

export function ProjectStats() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Statistiques de la Plateforme</h2>
        <p className="text-muted-foreground">
          Découvrez l'impact de notre communauté de data scientists
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
