import React, { useState } from 'react';
import CourseHighlight from '@/components/courses/CourseHighlight';
import CourseImageBlock from '@/components/courses/CourseImageBlock';
import CourseEquation from '@/components/courses/CourseEquation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Calculator, TrendingUp, Target, CheckCircle, AlertCircle, Lightbulb, BookOpen, Clock } from 'lucide-react';

const ModuleIntroduction = () => {
  const [activeExample, setActiveExample] = useState(0);

  const mathApplications = [
    {
      title: "Régression linéaire",
      equation: "y = \\beta_0 + \\beta_1 x + \\epsilon",
      description: "Prédit des valeurs continues basées sur des relations linéaires",
      realWorld: "Prédiction des prix immobiliers, estimation des ventes",
      mathConcepts: ["Algèbre linéaire", "Calcul différentiel", "Statistiques"],
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Réseaux de neurones",
      equation: "f(x) = \\sigma(Wx + b)",
      description: "Modélise des fonctions complexes par composition",
      realWorld: "Reconnaissance d'images, traitement du langage naturel",
      mathConcepts: ["Calcul différentiel", "Algèbre linéaire", "Optimisation"],
      icon: <Brain className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Classification Bayésienne",
      equation: "P(C|X) = \\frac{P(X|C) \\cdot P(C)}{P(X)}",
      description: "Classe les données selon les probabilités conditionnelles",
      realWorld: "Filtrage de spam, diagnostic médical, recommandations",
      mathConcepts: ["Probabilités", "Statistiques", "Théorie des ensembles"],
      icon: <Target className="h-6 w-6 text-green-600" />
    },
    {
      title: "Optimisation par gradient",
      equation: "\\theta_{t+1} = \\theta_t - \\alpha \\nabla J(\\theta_t)",
      description: "Trouve les paramètres optimaux pour minimiser l'erreur",
      realWorld: "Entraînement de modèles ML, optimisation de processus",
      mathConcepts: ["Calcul différentiel", "Optimisation", "Algèbre linéaire"],
      icon: <Calculator className="h-6 w-6 text-orange-600" />
    }
  ];

  const mathPillars = [
    {
      name: "Algèbre linéaire",
      description: "Manipulation de vecteurs et matrices",
      importance: "Essentiel pour représenter et transformer les données",
      examples: ["Réduction de dimensionnalité (PCA)", "Systèmes de recommandation", "Traitement d'images"],
      icon: <Calculator className="h-8 w-8 text-blue-600" />
    },
    {
      name: "Calcul différentiel",
      description: "Étude des dérivées et de l'optimisation",
      importance: "Fondamental pour l'apprentissage automatique",
      examples: ["Descente de gradient", "Optimisation de paramètres", "Analyse de sensibilité"],
      icon: <TrendingUp className="h-8 w-8 text-green-600" />
    },
    {
      name: "Probabilités et statistiques",
      description: "Modélisation de l'incertitude",
      importance: "Crucial pour l'inférence et la prise de décision",
      examples: ["Tests d'hypothèses", "Intervalles de confiance", "Modèles bayésiens"],
      icon: <Target className="h-8 w-8 text-purple-600" />
    },
    {
      name: "Théorie des ensembles",
      description: "Manipulation structurée des données",
      importance: "Base pour l'organisation et la logique",
      examples: ["Filtrage de données", "Opérations sur bases de données", "Logique booléenne"],
      icon: <Brain className="h-8 w-8 text-orange-600" />
    }
  ];

  const interactiveQuiz = {
    question: "Quel est le principal avantage des mathématiques en data science ?",
    options: [
      "Rendre les calculs plus rapides",
      "Comprendre et optimiser les algorithmes",
      "Impressionner les collègues",
      "Compliquer les choses inutilement"
    ],
    correctAnswer: 1,
    explanation: "Les mathématiques permettent de comprendre le fonctionnement interne des algorithmes, d'optimiser leurs performances et de diagnostiquer les problèmes."
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Pourquoi les maths sont-elles essentielles en data science ?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez comment les mathématiques forment l'épine dorsale de la data science et pourquoi 
          elles sont indispensables pour créer des solutions intelligentes et robustes.
        </p>
      </div>

      <CourseImageBlock 
        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
        alt="Équations mathématiques sur un tableau" 
        caption="Les mathématiques sont à la base de tous les algorithmes de data science"
      />

      {/* Les piliers mathématiques - Version interactive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Les piliers mathématiques de la data science
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mathPillars.map((pillar, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {pillar.icon}
                  <h3 className="text-xl font-semibold">{pillar.name}</h3>
                </div>
                <p className="text-gray-700 mb-3">{pillar.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-blue-800">Pourquoi c'est important :</p>
                  <p className="text-sm text-blue-700">{pillar.importance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Exemples d'applications :</p>
                  <div className="space-y-1">
                    {pillar.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Applications concrètes avec onglets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            Applications concrètes des mathématiques
          </CardTitle>
          <p className="text-gray-600">
            Explorez comment chaque algorithme utilise des concepts mathématiques spécifiques
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {mathApplications.map((app, index) => (
                <TabsTrigger key={index} value={index.toString()} className="flex items-center gap-2">
                  {app.icon}
                  <span className="hidden sm:inline">{app.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {mathApplications.map((app, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {app.icon}
                    <h3 className="text-2xl font-semibold">{app.title}</h3>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <CourseEquation latex={app.equation} displayMode={true} />
                  </div>
                  
                  <p className="text-gray-700">{app.description}</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Applications réelles :</h4>
                    <p className="text-green-700">{app.realWorld}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Concepts mathématiques utilisés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.mathConcepts.map((concept, idx) => (
                        <Badge key={idx} variant="outline">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quiz interactif */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            Quiz de compréhension
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{interactiveQuiz.question}</h3>
            <div className="space-y-2">
              {interactiveQuiz.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    if (index === interactiveQuiz.correctAnswer) {
                      alert("Correct ! " + interactiveQuiz.explanation);
                    } else {
                      alert("Pas tout à fait. " + interactiveQuiz.explanation);
                    }
                  }}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <CourseHighlight title="Niveau de connaissance requis" type="info">
        <div className="space-y-4">
          <p>
            Il n'est pas nécessaire d'être un mathématicien expert pour exceller en data science, 
            mais une compréhension solide des concepts fondamentaux est essentielle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">Niveau requis</h4>
              <p className="text-sm text-green-700">Mathématiques de lycée</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Objectif</h4>
              <p className="text-sm text-blue-700">Compréhension intuitive</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-800">Résultat</h4>
              <p className="text-sm text-purple-700">Maîtrise pratique</p>
            </div>
          </div>
        </div>
      </CourseHighlight>

      <CourseHighlight title="Ce que vous gagnerez" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              Compétences analytiques
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Comprendre intuitivement les algorithmes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Diagnostiquer les problèmes dans vos modèles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Optimiser les performances
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Compétences pratiques
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Adapter les techniques existantes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Communiquer avec d'autres professionnels
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Innover en créant de nouvelles approches
              </li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      {/* Exemple pratique enrichi */}
      <CourseHighlight title="Exemple pratique détaillé" type="example">
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Cas d'usage :</strong> Prédiction du prix d'une maison
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Modèle mathématique :</h4>
            <CourseEquation latex="\text{Prix} = \beta_0 + \beta_1 \times \text{Surface} + \beta_2 \times \text{Chambres} + \epsilon" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Données d'entrée</h4>
              <ul className="text-sm space-y-1">
                <li>• Surface : 120 m²</li>
                <li>• Nombre de chambres : 3</li>
                <li>• Localisation : centre-ville</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Processus mathématique</h4>
              <ul className="text-sm space-y-1">
                <li>• Collecte de données historiques</li>
                <li>• Optimisation par moindres carrés</li>
                <li>• Validation croisée</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Concepts mathématiques impliqués :</h4>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-yellow-200 text-yellow-800">Algèbre linéaire</Badge>
              <Badge className="bg-yellow-200 text-yellow-800">Calcul différentiel</Badge>
              <Badge className="bg-yellow-200 text-yellow-800">Statistiques</Badge>
              <Badge className="bg-yellow-200 text-yellow-800">Optimisation</Badge>
            </div>
          </div>
        </div>
      </CourseHighlight>

      {/* Motivation finale */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre voyage ?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Les mathématiques ne sont pas un obstacle, mais votre superpouvoir pour 
              comprendre et maîtriser la data science. Chaque concept que vous apprendrez 
              vous donnera une nouvelle perspective sur la façon dont les données peuvent 
              révéler des insights extraordinaires.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Progression graduelle</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Exemples concrets</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>Compréhension intuitive</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleIntroduction;
