
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Clock, Users, Target, BookOpen, Calculator, Brain, TrendingUp, Zap } from "lucide-react";

const MathLearningPaths = () => {
  const learningPaths = [
    {
      id: "beginner",
      title: "Parcours Débutant",
      description: "Fondamentaux mathématiques pour débuter en Data Science",
      duration: "8-12 semaines",
      difficulty: "Débutant",
      progress: 0,
      color: "green",
      icon: <Target className="h-6 w-6" />,
      modules: [
        { name: "Arithmétique et algèbre de base", duration: "2 semaines", completed: false },
        { name: "Fonctions et graphiques", duration: "2 semaines", completed: false },
        { name: "Statistiques descriptives", duration: "3 semaines", completed: false },
        { name: "Probabilités de base", duration: "3 semaines", completed: false }
      ],
      link: "/fundamentals/math-stats/descriptive-statistics"
    },
    {
      id: "intermediate",
      title: "Parcours Intermédiaire",
      description: "Concepts avancés pour l'analyse de données",
      duration: "12-16 semaines",
      difficulty: "Intermédiaire",
      progress: 25,
      color: "blue",
      icon: <Calculator className="h-6 w-6" />,
      modules: [
        { name: "Calcul différentiel et intégral", duration: "4 semaines", completed: true },
        { name: "Algèbre linéaire avancée", duration: "4 semaines", completed: false },
        { name: "Statistiques inférentielles", duration: "4 semaines", completed: false },
        { name: "Analyse multivariée", duration: "4 semaines", completed: false }
      ],
      link: "/fundamentals/math-stats/linear-algebra"
    },
    {
      id: "advanced",
      title: "Parcours Avancé",
      description: "Mathématiques pour le Machine Learning et l'IA",
      duration: "16-20 semaines",
      difficulty: "Avancé",
      progress: 60,
      color: "purple",
      icon: <Brain className="h-6 w-6" />,
      modules: [
        { name: "Optimisation et recherche opérationnelle", duration: "5 semaines", completed: true },
        { name: "Analyse de Fourier et traitement du signal", duration: "4 semaines", completed: true },
        { name: "Topologie et analyse fonctionnelle", duration: "4 semaines", completed: false },
        { name: "Théorie de l'information", duration: "3 semaines", completed: false }
      ],
      link: "/fundamentals/math-stats/differential-calculus"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-50 border-green-200 text-green-800",
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "default";
      case "Intermédiaire": return "secondary";
      case "Avancé": return "destructive";
      default: return "default";
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Parcours d'Apprentissage Mathématiques</h2>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        Choisissez le parcours adapté à votre niveau et progressez étape par étape dans votre maîtrise des mathématiques pour la Data Science.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {learningPaths.map((path) => (
          <Card key={path.id} className={`hover:shadow-lg transition-all duration-300 ${getColorClasses(path.color)}`}>
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {path.icon}
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                </div>
                <Badge variant={getBadgeVariant(path.difficulty)}>
                  {path.difficulty}
                </Badge>
              </div>
              <p className="text-gray-700 text-sm">{path.description}</p>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{path.modules.length} modules</span>
                  </div>
                </div>

                {path.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Modules inclus :</h4>
                  <div className="space-y-1">
                    {path.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs bg-white/50 p-2 rounded">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            module.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`} />
                          <span className={module.completed ? 'line-through text-gray-500' : ''}>
                            {module.name}
                          </span>
                        </div>
                        <span className="text-gray-500">{module.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Link to={path.link}>
                    <Button className="w-full" size="sm">
                      {path.progress > 0 ? 'Continuer' : 'Commencer'}
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          Progression Recommandée
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-700 font-bold">1</span>
            </div>
            <h4 className="font-semibold text-green-700">Fondations Solides</h4>
            <p className="text-sm text-gray-600">Maîtrisez les bases avant de progresser</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-700 font-bold">2</span>
            </div>
            <h4 className="font-semibold text-blue-700">Application Pratique</h4>
            <p className="text-sm text-gray-600">Appliquez immédiatement vos connaissances</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-700 font-bold">3</span>
            </div>
            <h4 className="font-semibold text-purple-700">Spécialisation</h4>
            <p className="text-sm text-gray-600">Développez votre expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathLearningPaths;
