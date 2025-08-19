
import React, { useState, useCallback, useMemo } from "react";
import CourseLayout from "@/components/layout/CourseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CourseHeroTemplate from "@/components/courses/CourseHeroTemplate";
import CourseModuleTemplate from "@/components/courses/CourseModuleTemplate";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, TrendingUp, BarChart3, Play, CheckCircle, Zap } from "lucide-react";

const SupervisedLearningCourse = () => {
  const [activeTab, setActiveTab] = useState("modules");

  // Configuration du cours avec ES6
  const courseConfig = useMemo(() => ({
    info: {
      title: "Machine Learning Supervisé",
      description: "Maîtrisez les algorithmes de classification et de régression sur des problèmes concrets",
      level: "Intermédiaire",
      duration: "8 semaines",
      modules: 24,
      totalHours: "~35h"
    },
    features: [
      {
        title: "Compétences acquises",
        items: [
          "Algorithmes de classification",
          "Modèles de régression",
          "Évaluation de performance",
          "Optimisation d'hyperparamètres"
        ]
      },
      {
        title: "Prérequis",
        items: [
          "Python intermédiaire",
          "Statistiques de base",
          "Algèbre linéaire",
          "Pandas et NumPy"
        ]
      },
      {
        title: "Projets pratiques",
        items: [
          "Prédiction de prix immobiliers",
          "Classification d'emails spam",
          "Détection de fraude",
          "Recommandation de produits"
        ]
      }
    ]
  }), []);

  // Modules avec ES6 features
  const modules = [
    {
      id: "ml-intro",
      title: "Introduction au ML supervisé",
      description: "Concepts fondamentaux et types d'apprentissage",
      duration: "2.5h",
      completed: false,
      level: "beginner" as const,
      type: "theory" as const
    },
    {
      id: "linear-regression",
      title: "Régression linéaire",
      description: "Modèles de régression simple et multiple",
      duration: "4h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "logistic-regression",
      title: "Régression logistique",
      description: "Classification binaire et multinomiale",
      duration: "3.5h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "decision-trees",
      title: "Arbres de décision",
      description: "Algorithmes d'arbre pour classification et régression",
      duration: "4h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "random-forests",
      title: "Forêts aléatoires",
      description: "Méthodes d'ensemble et bagging",
      duration: "3h",
      completed: false,
      level: "advanced" as const,
      type: "practice" as const
    },
    {
      id: "svm",
      title: "SVM et méthodes kernel",
      description: "Support Vector Machines",
      duration: "4h",
      completed: false,
      level: "advanced" as const,
      type: "practice" as const
    },
    {
      id: "evaluation",
      title: "Évaluation et validation",
      description: "Métriques et techniques de validation croisée",
      duration: "3h",
      completed: false,
      level: "intermediate" as const,
      type: "theory" as const
    },
    {
      id: "hyperparameters",
      title: "Optimisation des hyperparamètres",
      description: "Grid search et optimisation bayésienne",
      duration: "2.5h",
      completed: false,
      level: "advanced" as const,
      type: "project" as const
    }
  ];

  // Projets pratiques avec ES6 
  const practicalProjects = [
    {
      title: "Prédiction immobilière",
      description: "Modèle de régression pour prédire les prix de l'immobilier",
      dataset: "Boston Housing Dataset",
      techniques: ["Régression linéaire", "Feature engineering", "Validation croisée"],
      difficulty: "Intermédiaire",
      estimatedTime: "6h"
    },
    {
      title: "Classification de spam",
      description: "Détection automatique d'emails indésirables",
      dataset: "SpamAssassin Dataset",
      techniques: ["NLP", "Régression logistique", "Naive Bayes"],
      difficulty: "Intermédiaire", 
      estimatedTime: "4h"
    },
    {
      title: "Détection de fraude",
      description: "Identification de transactions frauduleuses",
      dataset: "Credit Card Fraud Dataset",
      techniques: ["SVM", "Random Forest", "Techniques de déséquilibrage"],
      difficulty: "Avancé",
      estimatedTime: "8h"
    }
  ];

  // Handlers avec useCallback
  const handleModuleStart = useCallback((moduleId: string) => {
    // Logique de démarrage du module ML
  }, []);

  const handleModuleNotes = useCallback((moduleId: string) => {
    // Logique d'ouverture des notes
  }, []);

  const handleProjectStart = useCallback((projectTitle: string) => {
    // Logique de démarrage de projet
  }, []);

  return (
    <CourseLayout
      title="Machine Learning Supervisé"
      categoryName="Machine Learning"
      courseName="Supervised Learning"
      categorySlug="machine-learning"
    >
      <div className="space-y-8">
        <CourseHeroTemplate
          courseInfo={courseConfig.info}
          features={courseConfig.features}
          icon={Brain}
          gradientFrom="from-purple-50"
          gradientTo="to-pink-50"
          iconColor="text-purple-600"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modules" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Parcours d'apprentissage</h2>
            <CourseModuleTemplate
              modules={modules}
              primaryColor="purple"
              onModuleStart={handleModuleStart}
              onModuleNotes={handleModuleNotes}
            />
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Projets pratiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Dataset :</p>
                        <p className="text-sm text-gray-600">{project.dataset}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Techniques :</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techniques.map((technique, techIndex) => (
                            <span key={techIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{project.difficulty}</span>
                        <span className="text-gray-600">{project.estimatedTime}</span>
                      </div>
                      <button 
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors mt-4"
                        onClick={() => handleProjectStart(project.title)}
                      >
                        <Play className="h-4 w-4" />
                        Commencer le projet
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certification" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Certification</h2>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Certificat de complétion</h3>
              <p className="text-gray-700 mb-4">
                Obtenez un certificat reconnu après avoir complété tous les modules 
                et projets pratiques du cours.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white/70 p-3 rounded">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Critères de certification :</p>
                  <ul className="text-sm text-gray-600 mt-1">
                    <li>• Complétion de tous les modules</li>
                    <li>• Réalisation des 3 projets pratiques</li>
                    <li>• Score minimum de 80% aux évaluations</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CourseLayout>
  );
};

export default SupervisedLearningCourse;
