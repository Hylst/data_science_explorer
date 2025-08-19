
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Target, Brain, Zap, Clock } from "lucide-react";

const AdvancedStatsIntro = () => {
  const courseInfo = {
    instructor: "Prof. Geoffroy Streit",
    level: "Avancé",
    duration: "6 semaines",
    modules: 8,
    students: 423,
    rating: 4.7
  };

  const keyTopics = [
    {
      icon: <TestTube className="h-6 w-6 text-blue-600" />,
      title: "Tests d'hypothèses",
      description: "Validation statistique de vos hypothèses de recherche"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Intervalles de confiance",
      description: "Quantification de l'incertitude dans vos estimations"
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Modèles avancés",
      description: "ANOVA, régression multiple et modèles mixtes"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Approche bayésienne",
      description: "Intégration des connaissances préalables dans l'analyse"
    }
  ];

  return (
    <section id="intro" className="scroll-mt-24">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-100 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <TestTube className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold">Bienvenue dans les Statistiques Avancées</h2>
            <p className="text-lg text-gray-600">Par {courseInfo.instructor}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{courseInfo.duration}</div>
            <div className="text-sm text-gray-600">Durée</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{courseInfo.modules}</div>
            <div className="text-sm text-gray-600">Modules</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{courseInfo.students}</div>
            <div className="text-sm text-gray-600">Étudiants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{courseInfo.rating}/5</div>
            <div className="text-sm text-gray-600">Note</div>
          </div>
        </div>

        <Badge className="bg-red-100 text-red-800 mb-4">{courseInfo.level}</Badge>

        <p className="text-lg text-gray-700 mb-4">
          Ce cours vous permettra de maîtriser les techniques statistiques avancées nécessaires pour 
          analyser des données complexes, valider vos hypothèses de recherche et prendre des décisions 
          éclairées basées sur l'évidence statistique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyTopics.map((topic, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                {topic.icon}
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Clock className="h-5 w-5 text-yellow-600" />
          Prérequis recommandés
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Maîtrise des statistiques descriptives</li>
          <li>• Connaissance de base des probabilités</li>
          <li>• Familiarité avec les distributions statistiques</li>
          <li>• Notions d'algèbre linéaire</li>
        </ul>
      </div>
    </section>
  );
};

export default AdvancedStatsIntro;
