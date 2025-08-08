
import React, { useState, useCallback } from "react";
import CourseLayout from "@/components/layout/CourseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CourseHeroTemplate from "@/components/courses/CourseHeroTemplate";
import CourseModuleTemplate from "@/components/courses/CourseModuleTemplate";
import { Code, FileText, Play, CheckCircle2 } from "lucide-react";

const PythonBasics = () => {
  const [activeTab, setActiveTab] = useState("modules");

  // Configuration du cours avec ES6
  const courseConfig = {
    info: {
      title: "Les bases de Python pour la Data Science",
      description: "Maîtrisez les fondamentaux de Python et ses bibliothèques essentielles",
      level: "Débutant",
      duration: "4 semaines",
      modules: 12,
      totalHours: "~20h"
    },
    features: [
      {
        title: "Ce que vous apprendrez",
        items: [
          "Syntaxe Python fondamentale",
          "Manipulation de données avec Pandas",
          "Calcul numérique avec NumPy",
          "Bonnes pratiques de programmation"
        ]
      },
      {
        title: "Prérequis",
        items: [
          "Aucune expérience de programmation requise",
          "Motivation à apprendre",
          "Ordinateur avec Python installé"
        ]
      },
      {
        title: "Outils utilisés",
        items: [
          "Python 3.8+",
          "Jupyter Notebook",
          "NumPy & Pandas",
          "Matplotlib"
        ]
      }
    ]
  };

  // Modules du cours avec ES6 destructuring et spread
  const modules = [
    {
      id: "intro-python",
      title: "Introduction à Python",
      description: "Syntaxe de base, variables et types de données",
      duration: "2h",
      completed: false,
      level: "beginner" as const,
      type: "theory" as const
    },
    {
      id: "control-structures",
      title: "Structures de contrôle",
      description: "Conditions, boucles et gestion des erreurs",
      duration: "3h",
      completed: false,
      level: "beginner" as const,
      type: "practice" as const
    },
    {
      id: "functions-modules",
      title: "Fonctions et modules",
      description: "Création et utilisation de fonctions, importation de modules",
      duration: "2.5h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "data-structures",
      title: "Structures de données",
      description: "Listes, dictionnaires, tuples et ensembles",
      duration: "3h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "numpy-intro",
      title: "Introduction à NumPy",
      description: "Calcul numérique et manipulation d'arrays",
      duration: "4h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "pandas-intro",
      title: "Introduction à Pandas",
      description: "Manipulation et analyse de données tabulaires",
      duration: "4h",
      completed: false,
      level: "intermediate" as const,
      type: "project" as const
    }
  ];

  // Exercices pratiques avec ES6 arrow functions
  const practicalExercises = [
    {
      title: "Calculatrice scientifique",
      description: "Créez une calculatrice avec NumPy pour les opérations mathématiques",
      difficulty: "Facile",
      estimatedTime: "1h"
    },
    {
      title: "Analyse de données CSV",
      description: "Analysez un dataset de ventes avec Pandas",
      difficulty: "Moyen",
      estimatedTime: "2h"
    },
    {
      title: "Visualisation de données",
      description: "Créez des graphiques avec Matplotlib",
      difficulty: "Moyen",
      estimatedTime: "1.5h"
    }
  ];

  // Handlers avec useCallback pour optimiser les performances
  const handleModuleStart = useCallback((moduleId: string) => {
    console.log(`Starting module: ${moduleId}`);
    // Logique de démarrage du module
  }, []);

  const handleModuleNotes = useCallback((moduleId: string) => {
    console.log(`Opening notes for module: ${moduleId}`);
    // Logique d'ouverture des notes
  }, []);

  return (
    <CourseLayout
      title="Les bases de Python pour la Data Science"
      categoryName="Programmation"
      courseName="Python Basics"
      categorySlug="programming"
    >
      <div className="space-y-8">
        <CourseHeroTemplate
          courseInfo={courseConfig.info}
          features={courseConfig.features}
          icon={Code}
          gradientFrom="from-blue-50"
          gradientTo="to-purple-50"
          iconColor="text-blue-600"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="exercises">Exercices</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modules" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Modules du cours</h2>
            <CourseModuleTemplate
              modules={modules}
              primaryColor="blue"
              onModuleStart={handleModuleStart}
              onModuleNotes={handleModuleNotes}
            />
          </TabsContent>
          
          <TabsContent value="exercises" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Exercices pratiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalExercises.map((exercise, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">{exercise.difficulty}</span>
                      <span className="text-sm text-gray-600">{exercise.estimatedTime}</span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      <Play className="h-4 w-4" />
                      Commencer l'exercice
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Ressources supplémentaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation officielle</CardTitle>
                  <CardDescription>Ressources Python officielles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="https://docs.python.org/3/" className="text-blue-600 hover:underline">Documentation Python 3</a></li>
                    <li>• <a href="https://numpy.org/doc/" className="text-blue-600 hover:underline">Documentation NumPy</a></li>
                    <li>• <a href="https://pandas.pydata.org/docs/" className="text-blue-600 hover:underline">Documentation Pandas</a></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Outils de développement</CardTitle>
                  <CardDescription>Environnements et éditeurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="https://jupyter.org/" className="text-blue-600 hover:underline">Jupyter Notebook</a></li>
                    <li>• <a href="https://code.visualstudio.com/" className="text-blue-600 hover:underline">Visual Studio Code</a></li>
                    <li>• <a href="https://www.anaconda.com/" className="text-blue-600 hover:underline">Anaconda Distribution</a></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CourseLayout>
  );
};

export default PythonBasics;
