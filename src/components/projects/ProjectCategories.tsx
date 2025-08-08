
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BarChart3, 
  Database, 
  Image, 
  Zap, 
  Globe,
  TrendingUp,
  Users
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  projectCount: number;
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  color: string;
}

const categories: Category[] = [
  {
    id: "data-analysis",
    title: "Analyse de Données",
    description: "Explorez et analysez des datasets réels pour extraire des insights pertinents",
    icon: <BarChart3 className="h-6 w-6" />,
    projectCount: 12,
    difficulty: "Débutant",
    color: "bg-blue-500"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Construisez des modèles prédictifs et classificateurs intelligents",
    icon: <Brain className="h-6 w-6" />,
    projectCount: 18,
    difficulty: "Intermédiaire",
    color: "bg-purple-500"
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Créez des réseaux de neurones pour des tâches complexes",
    icon: <Zap className="h-6 w-6" />,
    projectCount: 8,
    difficulty: "Avancé",
    color: "bg-orange-500"
  },
  {
    id: "computer-vision",
    title: "Vision par Ordinateur",
    description: "Traitez et analysez des images avec des algorithmes avancés",
    icon: <Image className="h-6 w-6" />,
    projectCount: 10,
    difficulty: "Avancé",
    color: "bg-green-500"
  },
  {
    id: "nlp",
    title: "Traitement du Langage Naturel",
    description: "Analysez et comprenez le langage humain avec l'IA",
    icon: <Globe className="h-6 w-6" />,
    projectCount: 14,
    difficulty: "Intermédiaire",
    color: "bg-teal-500"
  },
  {
    id: "big-data",
    title: "Big Data",
    description: "Gérez et analysez de grandes quantités de données",
    icon: <Database className="h-6 w-6" />,
    projectCount: 6,
    difficulty: "Avancé",
    color: "bg-red-500"
  },
  {
    id: "time-series",
    title: "Séries Temporelles",
    description: "Prédisez l'avenir en analysant les tendances temporelles",
    icon: <TrendingUp className="h-6 w-6" />,
    projectCount: 9,
    difficulty: "Intermédiaire",
    color: "bg-indigo-500"
  },
  {
    id: "collaborative",
    title: "Projets Collaboratifs",
    description: "Participez à des projets open source et communautaires",
    icon: <Users className="h-6 w-6" />,
    projectCount: 5,
    difficulty: "Débutant",
    color: "bg-pink-500"
  }
];

export function ProjectCategories() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Catégories de Projets</h2>
        <p className="text-muted-foreground">
          Explorez nos différentes catégories de projets adaptées à tous les niveaux
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${category.color} text-white`}>
                  {category.icon}
                </div>
                <Badge className={getDifficultyColor(category.difficulty)}>
                  {category.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-lg">{category.title}</CardTitle>
              <CardDescription className="text-sm">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{category.projectCount} projets</span>
                <span>→</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
