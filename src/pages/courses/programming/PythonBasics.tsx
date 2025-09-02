
import { useState } from "react";
import CourseLayout from "@/components/layout/CourseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import CourseHeroTemplate from "@/components/courses/CourseHeroTemplate";
import { Code, BookOpen, Target, Users, TrendingUp, Lightbulb, Database, BarChart3, Brain, ChevronDown, Play, CheckCircle, Clock, Star, GitBranch, Package, Zap } from "lucide-react";
import PythonModule1 from "@/components/courses/python/PythonModule1";
import PythonModule2 from "@/components/courses/python/PythonModule2";
import PythonModule3 from "@/components/courses/python/PythonModule3";
import PythonModule4 from "@/components/courses/python/PythonModule4";
import PythonModule5 from "@/components/courses/python/PythonModule5";
import PythonModule6 from "@/components/courses/python/PythonModule6";
import PythonModule7 from "@/components/courses/python/PythonModule7";

const PythonBasics = () => {
  const [activeTab, setActiveTab] = useState("modules");
  const [module1Open, setModule1Open] = useState(false);
  const [module2Open, setModule2Open] = useState(false);
  const [module3Open, setModule3Open] = useState(false);



  // Course configuration
  const courseConfig = {
    title: "Python pour la Data Science - Fondamentaux",
    description: "Maîtrisez Python et ses bibliothèques essentielles pour devenir un expert en analyse de données et machine learning",
    level: "Débutant à Intermédiaire",
    duration: "8-10 semaines",
    modules: 10,
    totalHours: "60h",
    learningObjectives: [
      "Maîtriser la syntaxe Python et les structures de données",
      "Manipuler et analyser des données avec Pandas",
      "Créer des visualisations avec Matplotlib et Seaborn",
      "Effectuer des calculs scientifiques avec NumPy",
      "Utiliser Jupyter Notebook pour l'analyse interactive",
      "Appliquer les concepts à des projets de Data Science réels"
    ],
    prerequisites: [
      "Notions de base en mathématiques (statistiques recommandées)",
      "Aucune expérience en programmation requise",
      "Motivation pour l'analyse de données",
      "Ordinateur avec 4GB RAM minimum"
    ],
    tools: [
      "Python 3.9+ avec Anaconda",
      "Jupyter Notebook/Lab",
      "VS Code avec extensions Python",
      "Git pour le versioning"
    ],
    careerPaths: [
      "Data Analyst",
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Intelligence Analyst"
    ],
    industryApplications: [
      "Finance : Analyse de risques, trading algorithmique",
      "Marketing : Segmentation client, analyse de campagnes",
      "Santé : Analyse d'essais cliniques, épidémiologie",
      "E-commerce : Systèmes de recommandation, pricing"
    ]
  };

  // Practical exercises definitions - Data Science focused
  const practicalExercises = [
    {
      id: 1,
      title: "Analyseur de données de ventes",
      description: "Analysez les tendances de ventes d'un e-commerce avec des données CSV",
      difficulty: "Facile",
      estimatedTime: "45 min",
      skills: ["Pandas", "Lecture CSV", "Statistiques de base"],
      dataScience: true,
      dataset: "sales_data.csv"
    },
    {
      id: 2,
      title: "Visualisation des prix immobiliers",
      description: "Créez des graphiques pour analyser l'évolution des prix immobiliers",
      difficulty: "Moyen",
      estimatedTime: "1h",
      skills: ["Matplotlib", "Pandas", "Visualisation"],
      dataScience: true,
      dataset: "housing_prices.csv"
    },
    {
      id: 3,
      title: "Nettoyage de données clients",
      description: "Nettoyez et préparez un dataset de clients pour l'analyse",
      difficulty: "Moyen",
      estimatedTime: "1h15",
      skills: ["Pandas", "Data Cleaning", "Gestion des valeurs manquantes"],
      dataScience: true,
      dataset: "customer_data.csv"
    },
    {
      id: 4,
      title: "Analyse de sentiment Twitter",
      description: "Analysez les sentiments dans des tweets avec du text mining",
      difficulty: "Difficile",
      estimatedTime: "2h",
      skills: ["NLP", "TextBlob", "Pandas", "Visualisation"],
      dataScience: true,
      dataset: "tweets_sample.csv"
    },
    {
      id: 5,
      title: "Prédiction simple avec régression",
      description: "Créez votre premier modèle de machine learning pour prédire les prix",
      difficulty: "Difficile",
      estimatedTime: "2h30",
      skills: ["Scikit-learn", "Régression linéaire", "Évaluation de modèle"],
      dataScience: true,
      dataset: "regression_data.csv"
    },
    {
      id: 6,
      title: "Dashboard interactif avec Streamlit",
      description: "Construisez un dashboard web pour présenter vos analyses",
      difficulty: "Avancé",
      estimatedTime: "3h",
      skills: ["Streamlit", "Plotly", "Dashboard", "Déploiement"],
      dataScience: true,
      dataset: "business_metrics.csv"
    }
  ];

  // Learning path progression
  const learningPath = [
    {
      phase: "Fondations Python",
      duration: "2-3 semaines",
      modules: [1, 2, 3],
      description: "Maîtrisez les bases de Python",
      color: "blue"
    },
    {
      phase: "Manipulation de données",
      duration: "3-4 semaines",
      modules: [4, 5, 6],
      description: "Apprenez Pandas et NumPy",
      color: "green"
    },
    {
      phase: "Visualisation et analyse",
      duration: "2-3 semaines",
      modules: [7, 8],
      description: "Créez des graphiques et analysez",
      color: "purple"
    },
    {
      phase: "Projets avancés",
      duration: "2-3 semaines",
      modules: [9, 10],
      description: "Machine Learning et déploiement",
      color: "orange"
    }
  ];

  return (
    <CourseLayout
      title="Python Basics"
      categoryName="Programming"
      courseName="Python Basics"
      categorySlug="programming"
    >
      <CourseHeroTemplate 
        courseInfo={{
          title: courseConfig.title,
          description: courseConfig.description,
          level: courseConfig.level,
          duration: courseConfig.duration,
          modules: courseConfig.modules,
          totalHours: courseConfig.totalHours
        }}
        features={[
          {
            title: "Objectifs d'apprentissage",
            items: courseConfig.learningObjectives
          },
          {
            title: "Prérequis",
            items: courseConfig.prerequisites
          },
          {
            title: "Outils utilisés",
            items: courseConfig.tools
          },
          {
            title: "Débouchés professionnels",
            items: courseConfig.careerPaths
          },
          {
            title: "Applications industrielles",
            items: courseConfig.industryApplications
          }
        ]}
        icon={Code}
        gradientFrom="from-blue-500"
        gradientTo="to-purple-600"
        iconColor="text-white"
      />
      
      {/* Learning Path Overview */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Parcours d'Apprentissage Progressif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((phase, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 border-l-4 border-${phase.color}-500 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 bg-${phase.color}-100 rounded-full flex items-center justify-center`}>
                    <span className={`font-bold text-${phase.color}-600 text-sm`}>{index + 1}</span>
                  </div>
                  <h3 className={`font-semibold text-${phase.color}-800`}>{phase.phase}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{phase.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{phase.duration}</span>
                </div>
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1">
                    {phase.modules.map((moduleNum) => (
                      <Badge key={moduleNum} variant="outline" className="text-xs">
                        Module {moduleNum}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="exercises">Projets</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
            <TabsTrigger value="community">Communauté</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            {/* Course Introduction */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-3">
                <Lightbulb className="h-6 w-6" />
                Pourquoi Python pour la Data Science ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">🚀 Avantages de Python</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Simplicité :</strong> Syntaxe claire et intuitive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Écosystème riche :</strong> Plus de 300,000 packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Communauté active :</strong> Support et ressources abondantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Polyvalence :</strong> Web, IA, automatisation, analyse</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">📊 Bibliothèques Essentielles</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-indigo-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Database className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-800">Pandas</span>
                      </div>
                      <p className="text-sm text-gray-600">Manipulation et analyse de données</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-indigo-200">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">Matplotlib/Seaborn</span>
                      </div>
                      <p className="text-sm text-gray-600">Visualisation de données</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-indigo-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Brain className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-800">Scikit-learn</span>
                      </div>
                      <p className="text-sm text-gray-600">Machine Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Stories */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Star className="h-6 w-6 text-yellow-500" />
                Témoignages d'Apprenants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Marie L.</h4>
                      <p className="text-sm text-blue-600">Data Analyst</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"Ce cours m'a permis de passer de débutante à analyste de données en 3 mois. Les projets pratiques sont excellents !"</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">Thomas R.</h4>
                      <p className="text-sm text-green-600">Data Scientist</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"L'approche progressive et les exemples concrets m'ont aidé à maîtriser Python rapidement."</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Sarah K.</h4>
                      <p className="text-sm text-purple-600">ML Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"Les modules sur le machine learning m'ont ouvert les portes d'une nouvelle carrière !"</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="modules" className="space-y-6">
            {/* Progress Overview */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Votre Progression
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0%</div>
                  <div className="text-sm text-green-700">Complété</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-blue-700">Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15h</div>
                  <div className="text-sm text-purple-700">Durée totale</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-orange-700">Projets</div>
                </div>
              </div>
              <Progress value={0} className="mt-4" />
            </div>
            
            <div className="grid gap-6">
              {/* Module 1: Python Fundamentals */}
              <Card className="p-6 border-l-4 border-l-blue-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Code className="h-5 w-5 text-blue-600" />
                        Module 1: Fondamentaux Python
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Débutant</Badge>
                        <Badge variant="outline">2h</Badge>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Découvrez les bases de Python : installation, variables, types de données et opérateurs essentiels pour la data science.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">🐍 Introduction</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Qu'est-ce que Python ?</li>
                            <li>• Installation et environnement</li>
                            <li>• Premier programme</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">📊 Variables & Types</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Types de données</li>
                            <li>• Variables et assignation</li>
                            <li>• Conversion de types</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">⚡ Opérateurs</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Arithmétiques</li>
                            <li>• Comparaison</li>
                            <li>• Logiques</li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <PythonModule1 isOpen={module1Open} onToggle={() => setModule1Open(!module1Open)} />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 2: Control Structures */}
              <Card className="p-6 border-l-4 border-l-green-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <GitBranch className="h-5 w-5 text-green-600" />
                        Module 2: Structures de Contrôle
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Intermédiaire</Badge>
                        <Badge variant="outline">3h</Badge>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Maîtrisez les conditions, boucles et gestion d'erreurs pour contrôler le flux de vos programmes d'analyse de données.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">🔀 Conditions</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• if, elif, else</li>
                            <li>• Conditions complexes</li>
                            <li>• Opérateur ternaire</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">🔄 Boucles</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• for et while</li>
                            <li>• Itération sur données</li>
                            <li>• break et continue</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">⚠️ Gestion d'erreurs</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• try/except</li>
                            <li>• Types d'exceptions</li>
                            <li>• Debugging</li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <PythonModule2 isOpen={module2Open} onToggle={() => setModule2Open(!module2Open)} />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 3: Functions and Modules */}
              <Card className="p-6 border-l-4 border-l-purple-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Package className="h-5 w-5 text-purple-600" />
                        Module 3: Fonctions et Modules
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Intermédiaire</Badge>
                        <Badge variant="outline">2.5h</Badge>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Organisez votre code avec des fonctions réutilisables et découvrez l'écosystème des modules Python pour la data science.
                      </p>
                      <div className="border-t pt-4">
                        <PythonModule3 isOpen={module3Open} onToggle={() => setModule3Open(!module3Open)} />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 4: NumPy */}
              <Card className="p-6 border-l-4 border-l-blue-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Database className="h-5 w-5 text-blue-600" />
                        Module 4: NumPy - Calcul Numérique
                        <ChevronDown className="h-4 w-4" />
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Intermédiaire</Badge>
                        <Badge variant="outline">4h</Badge>
                        <Badge variant="default">Disponible</Badge>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4">
                        Maîtrisez NumPy pour le calcul scientifique et l'analyse de données performante.
                      </p>
                      <PythonModule4 />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 5: Pandas */}
              <Card className="p-6 border-l-4 border-l-green-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Database className="h-5 w-5 text-green-600" />
                        Module 5: Pandas - Manipulation de Données
                        <ChevronDown className="h-4 w-4" />
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Intermédiaire</Badge>
                        <Badge variant="outline">5h</Badge>
                        <Badge variant="default">Disponible</Badge>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4">
                        Analysez et manipulez des données avec la bibliothèque Pandas.
                      </p>
                      <PythonModule5 />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 6: Matplotlib */}
              <Card className="p-6 border-l-4 border-l-purple-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-purple-600" />
                        Module 6: Matplotlib - Visualisation
                        <ChevronDown className="h-4 w-4" />
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Intermédiaire</Badge>
                        <Badge variant="outline">4h</Badge>
                        <Badge variant="default">Disponible</Badge>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4">
                        Créez des visualisations impactantes avec Matplotlib et Seaborn.
                      </p>
                      <PythonModule6 />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>

              {/* Module 7: Jupyter Notebook */}
              <Card className="p-6 border-l-4 border-l-orange-500">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Code className="h-5 w-5 text-orange-600" />
                        Module 7: Jupyter Notebook
                        <ChevronDown className="h-4 w-4" />
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Débutant</Badge>
                        <Badge variant="outline">3h</Badge>
                        <Badge variant="default">Disponible</Badge>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
                      <p className="text-gray-600 mb-4">
                        Maîtrisez l'environnement interactif de référence pour la Data Science.
                      </p>
                      <PythonModule7 />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>


            </div>
          </TabsContent>
          
          <TabsContent value="exercises" className="space-y-6">
            {/* Projects Introduction */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                <Target className="h-6 w-6" />
                Projets Pratiques Data Science
              </h2>
              <p className="text-purple-700 mb-6">
                Appliquez vos connaissances Python à travers des projets concrets inspirés de cas d'usage réels en entreprise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">6</div>
                  <div className="text-sm text-purple-700">Projets Guidés</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">20h</div>
                  <div className="text-sm text-purple-700">Pratique Totale</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-sm text-purple-700">Cas Réels</div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6">
              {practicalExercises.map((exercise, index) => (
                <Card key={exercise.id} className={`p-6 border-l-4 ${
                  index % 3 === 0 ? 'border-l-blue-500' : 
                  index % 3 === 1 ? 'border-l-green-500' : 'border-l-purple-500'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{exercise.title}</h3>
                        <Badge 
                          variant={exercise.difficulty === 'Facile' ? 'default' : exercise.difficulty === 'Moyen' ? 'secondary' : 'destructive'}
                        >
                          {exercise.difficulty}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{exercise.description}</p>
                      
                      {/* Project Details */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">🎯 Objectifs d'apprentissage :</h4>
                        <div className="flex flex-wrap gap-2">
                          {exercise.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {exercise.estimatedTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        Projet {index + 1}/6
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Commencer
                    </Button>
                  </div>
                </Card>
              ))}
              
              {/* Bonus Project */}
              <Card className="p-6 border-2 border-dashed border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50">
                <div className="text-center">
                  <Star className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">Projet Final : Portfolio Data Science</h3>
                  <p className="text-yellow-700 mb-4">
                    Créez votre propre projet data science de A à Z et construisez un portfolio professionnel.
                  </p>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge variant="secondary">Projet libre</Badge>
                    <Badge variant="outline">8-12h</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">Portfolio</Badge>
                  </div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    Découvrir le projet final
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-6">
            {/* Resources Header */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                Ressources d'Apprentissage
              </h2>
              <p className="text-blue-700">
                Découvrez une sélection de ressources essentielles pour approfondir vos connaissances en Python et Data Science.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <BookOpen className="h-5 w-5" />
                    Documentation Officielle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://docs.python.org/3/" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">🐍 Python.org</div>
                    <div className="text-sm text-blue-600">Documentation complète et tutoriels officiels</div>
                  </a>
                  <a href="https://pandas.pydata.org/docs/" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">🐼 Pandas</div>
                    <div className="text-sm text-blue-600">Guide complet pour la manipulation de données</div>
                  </a>
                  <a href="https://numpy.org/doc/" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">🔢 NumPy</div>
                    <div className="text-sm text-blue-600">Référence pour le calcul scientifique</div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Code className="h-5 w-5" />
                    Outils Essentiels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="font-medium text-green-800">💻 VS Code + Extensions</div>
                    <div className="text-sm text-green-600">Python, Jupyter, GitLens</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="font-medium text-green-800">📓 Jupyter Notebook</div>
                    <div className="text-sm text-green-600">Environnement interactif pour l'analyse</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="font-medium text-green-800">🐍 Anaconda Distribution</div>
                    <div className="text-sm text-green-600">Python + 250+ packages data science</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Target className="h-5 w-5" />
                    Plateformes d'Apprentissage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://www.kaggle.com/learn" className="block p-4 border rounded-lg hover:bg-purple-50 transition-colors group">
                    <div className="font-medium text-purple-800 group-hover:text-purple-900">🏆 Kaggle Learn</div>
                    <div className="text-sm text-purple-600">Micro-cours gratuits + compétitions</div>
                  </a>
                  <a href="https://realpython.com/" className="block p-4 border rounded-lg hover:bg-purple-50 transition-colors group">
                    <div className="font-medium text-purple-800 group-hover:text-purple-900">🎯 Real Python</div>
                    <div className="text-sm text-purple-600">Tutoriels pratiques et avancés</div>
                  </a>
                  <a href="https://www.datacamp.com/" className="block p-4 border rounded-lg hover:bg-purple-50 transition-colors group">
                    <div className="font-medium text-purple-800 group-hover:text-purple-900">📊 DataCamp</div>
                    <div className="text-sm text-purple-600">Cours interactifs data science</div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <Database className="h-5 w-5" />
                    Datasets & Projets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://github.com/" className="block p-4 border rounded-lg hover:bg-orange-50 transition-colors group">
                    <div className="font-medium text-orange-800 group-hover:text-orange-900">🐙 GitHub</div>
                    <div className="text-sm text-orange-600">Projets open source et portfolios</div>
                  </a>
                  <a href="https://www.kaggle.com/datasets" className="block p-4 border rounded-lg hover:bg-orange-50 transition-colors group">
                    <div className="font-medium text-orange-800 group-hover:text-orange-900">📈 Kaggle Datasets</div>
                    <div className="text-sm text-orange-600">Milliers de datasets gratuits</div>
                  </a>
                  <a href="https://archive.ics.uci.edu/ml/" className="block p-4 border rounded-lg hover:bg-orange-50 transition-colors group">
                    <div className="font-medium text-orange-800 group-hover:text-orange-900">🎓 UCI ML Repository</div>
                    <div className="text-sm text-orange-600">Datasets académiques de référence</div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="space-y-6">
            {/* Community Header */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
                <Users className="h-6 w-6" />
                Rejoignez la Communauté
              </h2>
              <p className="text-green-700 mb-6">
                Connectez-vous avec d'autres apprenants, partagez vos projets et obtenez de l'aide de la communauté Python.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">50k+</div>
                  <div className="text-sm text-green-700">Membres actifs</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-green-700">Support communautaire</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                  <div className="text-sm text-green-700">Projets partagés</div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Users className="h-5 w-5" />
                    Forums & Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://stackoverflow.com/questions/tagged/python" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">💬 Stack Overflow</div>
                    <div className="text-sm text-blue-600">Questions techniques et solutions</div>
                    <div className="text-xs text-blue-500 mt-1">15M+ questions Python</div>
                  </a>
                  <a href="https://www.reddit.com/r/Python/" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">🔥 Reddit r/Python</div>
                    <div className="text-sm text-blue-600">Actualités et discussions</div>
                    <div className="text-xs text-blue-500 mt-1">900k+ membres</div>
                  </a>
                  <a href="https://discuss.python.org/" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors group">
                    <div className="font-medium text-blue-800 group-hover:text-blue-900">🐍 Python Discourse</div>
                    <div className="text-sm text-blue-600">Forum officiel Python</div>
                    <div className="text-xs text-blue-500 mt-1">Discussions avancées</div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Zap className="h-5 w-5" />
                    Chat en Temps Réel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="https://discord.gg/python" className="block p-4 border rounded-lg hover:bg-green-50 transition-colors group">
                    <div className="font-medium text-green-800 group-hover:text-green-900">💬 Discord Python</div>
                    <div className="text-sm text-green-600">Chat instantané et aide rapide</div>
                    <div className="text-xs text-green-500 mt-1">200k+ membres en ligne</div>
                  </a>
                  <a href="https://gitter.im/python/community" className="block p-4 border rounded-lg hover:bg-green-50 transition-colors group">
                    <div className="font-medium text-green-800 group-hover:text-green-900">💻 Gitter</div>
                    <div className="text-sm text-green-600">Discussions techniques</div>
                    <div className="text-xs text-green-500 mt-1">Intégration GitHub</div>
                  </a>
                  <a href="https://python.org/community/irc/" className="block p-4 border rounded-lg hover:bg-green-50 transition-colors group">
                    <div className="font-medium text-green-800 group-hover:text-green-900">⚡ IRC #python</div>
                    <div className="text-sm text-green-600">Canal historique Python</div>
                    <div className="text-xs text-green-500 mt-1">Support expert 24/7</div>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Star className="h-5 w-5" />
                    Événements & Meetups
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <div className="font-medium text-purple-800">🎪 PyCon France</div>
                    <div className="text-sm text-purple-600">Conférence annuelle Python</div>
                    <div className="text-xs text-purple-500 mt-1">Prochaine édition : Octobre 2024</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <div className="font-medium text-purple-800">🌍 Meetups Locaux</div>
                    <div className="text-sm text-purple-600">Rencontres dans votre ville</div>
                    <div className="text-xs text-purple-500 mt-1">Paris, Lyon, Toulouse, Nantes...</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <div className="font-medium text-purple-800">💻 Hackathons Data Science</div>
                    <div className="text-sm text-purple-600">Compétitions et projets collaboratifs</div>
                    <div className="text-xs text-purple-500 mt-1">Événements mensuels</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <Target className="h-5 w-5" />
                    Mentorat & Carrière
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <div className="font-medium text-orange-800">👨‍🏫 Programme Mentorat</div>
                    <div className="text-sm text-orange-600">Accompagnement personnalisé</div>
                    <div className="text-xs text-orange-500 mt-1">Mentors expérimentés disponibles</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <div className="font-medium text-orange-800">💼 Job Board</div>
                    <div className="text-sm text-orange-600">Offres d'emploi Data Science</div>
                    <div className="text-xs text-orange-500 mt-1">500+ offres mises à jour</div>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <div className="font-medium text-orange-800">🎯 Portfolio Review</div>
                    <div className="text-sm text-orange-600">Feedback sur vos projets</div>
                    <div className="text-xs text-orange-500 mt-1">Sessions hebdomadaires</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre la communauté ?</h3>
                <p className="mb-6 text-indigo-100">
                  Connectez-vous avec des milliers de développeurs Python et data scientists passionnés.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Rejoindre Discord
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                    Voir les événements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CourseLayout>
  );
};

export default PythonBasics;
