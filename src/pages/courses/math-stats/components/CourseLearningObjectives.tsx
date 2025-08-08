
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Brain, Calculator, TrendingUp, BookOpen, Users, Trophy, ExternalLink } from 'lucide-react';

const CourseLearningObjectives = () => {
  const objectives = [
    {
      id: 1,
      title: "Comprendre l'importance des mathématiques",
      description: "Saisir pourquoi les mathématiques sont le fondement de la data science",
      skills: ["Pensée analytique", "Vision d'ensemble", "Motivation"],
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      completed: false
    },
    {
      id: 2,
      title: "Maîtriser les ensembles et nombres",
      description: "Manipuler les concepts fondamentaux de théorie des ensembles",
      skills: ["Logique mathématique", "Opérations d'ensembles", "Propriétés"],
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      completed: false
    },
    {
      id: 3,
      title: "Appliquer les fonctions mathématiques",
      description: "Utiliser les fonctions pour modéliser des phénomènes réels",
      skills: ["Modélisation", "Représentation graphique", "Analyse"],
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      completed: false
    },
    {
      id: 4,
      title: "Comprendre le calcul différentiel",
      description: "Appliquer les dérivées pour l'optimisation et l'analyse",
      skills: ["Dérivation", "Optimisation", "Analyse de fonctions"],
      icon: <Target className="h-6 w-6 text-orange-600" />,
      completed: false
    },
    {
      id: 5,
      title: "Utiliser le calcul intégral",
      description: "Appliquer les intégrales en probabilités et statistiques",
      skills: ["Intégration", "Probabilités continues", "Statistiques"],
      icon: <BookOpen className="h-6 w-6 text-red-600" />,
      completed: false
    }
  ];

  const careerPaths = [
    {
      title: "Data Scientist",
      description: "Analyser et interpréter des données complexes pour les entreprises",
      requirements: ["Statistiques avancées", "Machine Learning", "Programmation"],
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Machine Learning Engineer",
      description: "Développer et déployer des modèles d'apprentissage automatique",
      requirements: ["Algèbre linéaire", "Optimisation", "Déploiement"],
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Statisticien",
      description: "Appliquer des méthodes statistiques pour résoudre des problèmes",
      requirements: ["Statistiques", "Probabilités", "Tests d'hypothèses"],
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  const nextSteps = [
    {
      title: "Statistiques Descriptives",
      description: "Approfondissez l'analyse et la description des données",
      link: "/fundamentals/math-stats/descriptive-statistics",
      difficulty: "Débutant"
    },
    {
      title: "Algèbre Linéaire",
      description: "Explorez les vecteurs et matrices pour le ML",
      link: "/fundamentals/math-stats/linear-algebra",
      difficulty: "Intermédiaire"
    },
    {
      title: "Théorie des Probabilités",
      description: "Maîtrisez l'incertitude et les distributions",
      link: "/fundamentals/math-stats/probability-theory",
      difficulty: "Intermédiaire"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Objectifs d'apprentissage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Objectifs d'apprentissage détaillés
          </CardTitle>
          <p className="text-gray-600">
            À la fin de ce cours, vous serez capable de :
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {objectives.map((objective) => (
              <div key={objective.id} className="border-l-4 border-blue-500 pl-6 py-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {objective.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{objective.title}</h3>
                      {objective.completed && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-gray-700 mb-3">{objective.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {objective.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Débouchés professionnels */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-green-600" />
            Débouchés professionnels
          </CardTitle>
          <p className="text-gray-600">
            Ces compétences vous préparent à des carrières passionnantes :
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  {career.icon}
                  <h3 className="font-semibold">{career.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{career.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-700">Compétences clés :</p>
                  {career.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full" />
                      <span className="text-xs text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prochaines étapes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-orange-600" />
            Prochaines étapes recommandées
          </CardTitle>
          <p className="text-gray-600">
            Continuez votre apprentissage avec ces cours complémentaires :
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{step.title}</h3>
                    <Badge variant={step.difficulty === "Débutant" ? "default" : "secondary"}>
                      {step.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={step.link} className="flex items-center gap-2">
                    Commencer
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ressources complémentaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-purple-600" />
            Ressources complémentaires
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Lectures recommandées</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>"The Art of Statistics" par David Spiegelhalter</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>"Mathematics for Machine Learning" par Deisenroth</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>"Think Stats" par Allen B. Downey</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Outils pratiques</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Python (NumPy, SciPy, Matplotlib)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>R pour l'analyse statistique</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Wolfram Alpha pour les calculs</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseLearningObjectives;
