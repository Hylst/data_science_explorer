import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  TrendingUp, 
  Search, 
  Zap, 
  Network, 
  TreePine, 
  Layers, 
  Target, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  ExternalLink,
  Star
} from "lucide-react";

const MLModelsSection = () => {
  const [activeTab, setActiveTab] = useState("supervised");

  const supervisedModels = [
    {
      id: "sgd",
      title: "SGDClassifier",
      subtitle: "Classification par Descente de Gradient Stochastique",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-500",
      sklearnName: "sklearn.linear_model.SGDClassifier",
      similarAlgorithms: ["Perceptron", "LogisticRegression", "PassiveAggressiveClassifier"],
      howItWorks: "Optimise itérativement une fonction de coût en ajustant les poids du modèle. À chaque étape, utilise un échantillon aléatoire pour calculer le gradient et met à jour les paramètres.",
      explanation: "Imaginez que vous descendez une montagne dans le brouillard. La descente de gradient stochastique fait exactement ça : elle prend des 'pas' aléatoires dans la direction qui semble descendre le plus rapidement, en se basant sur quelques points seulement à chaque étape.",
      pros: [
        "Extrêmement rapide sur de gros datasets",
        "Faible consommation mémoire",
        "Apprentissage en ligne possible",
        "Scalabilité excellente"
      ],
      cons: [
        "Nécessite normalisation des données",
        "Sensible aux hyperparamètres",
        "Convergence parfois instable",
        "Modèle linéaire uniquement"
      ],
      useCases: [
        "Datasets de millions d'échantillons",
        "Classification de textes",
        "Détection de spam",
        "Systèmes de recommandation"
      ]
    },
    {
      id: "decision-tree",
      title: "DecisionTreeClassifier",
      subtitle: "Classification par Arbre de Décision",
      icon: <TreePine className="h-6 w-6" />,
      color: "bg-emerald-500",
      sklearnName: "sklearn.tree.DecisionTreeClassifier",
      similarAlgorithms: ["RandomForestClassifier", "ExtraTreesClassifier", "GradientBoostingClassifier"],
      howItWorks: "Divise récursivement l'espace des caractéristiques en régions homogènes en choisissant les meilleures questions (splits) selon un critère de pureté (Gini, entropie).",
      explanation: "Comme un questionnaire médical : 'Avez-vous de la fièvre ?' → OUI → 'Plus de 38°C ?' → OUI → 'Consultez un médecin'. L'arbre pose des questions successives sur vos données pour arriver à une décision finale.",
      pros: [
        "Interprétation très facile",
        "Pas de preprocessing nécessaire",
        "Gère données numériques et catégorielles",
        "Visualisation intuitive"
      ],
      cons: [
        "Tendance au surapprentissage",
        "Instabilité (petits changements = gros impact)",
        "Biais vers variables avec plus de modalités",
        "Difficile avec relations linéaires"
      ],
      useCases: [
        "Analyse exploratoire",
        "Règles métier explicites",
        "Données mixtes (num/cat)",
        "Détection de fraude"
      ]
    },
    {
      id: "random-forest",
      title: "RandomForestClassifier",
      subtitle: "Ensemble d'Arbres de Décision",
      icon: <TreePine className="h-6 w-6" />,
      color: "bg-green-600",
      sklearnName: "sklearn.ensemble.RandomForestClassifier",
      similarAlgorithms: ["ExtraTreesClassifier", "GradientBoostingClassifier", "XGBoost"],
      howItWorks: "Entraîne plusieurs arbres de décision sur des échantillons bootstrap différents avec sélection aléatoire de caractéristiques. Combine les prédictions par vote majoritaire.",
      explanation: "Comme demander l'avis à un panel d'experts : chaque arbre donne son opinion basée sur un échantillon différent des données, puis on vote pour la décision finale. La sagesse de la foule !",
      pros: [
        "Très robuste au surapprentissage",
        "Gère bien les données manquantes",
        "Importance des variables automatique",
        "Excellent compromis performance/simplicité"
      ],
      cons: [
        "Moins interprétable qu'un arbre simple",
        "Plus lent qu'un arbre unique",
        "Peut surapprendre sur données très bruitées",
        "Mémoire importante pour gros ensembles"
      ],
      useCases: [
        "Baseline solide pour tout problème",
        "Sélection de variables",
        "Données tabulaires complexes",
        "Compétitions Kaggle"
      ]
    }
  ];

  const unsupervisedModels = [
    {
      id: "kmeans",
      title: "K-Means",
      subtitle: "Clustering par Centroïdes",
      icon: <Search className="h-6 w-6" />,
      color: "bg-teal-500",
      sklearnName: "sklearn.cluster.KMeans",
      similarAlgorithms: ["MiniBatchKMeans", "KMedoids", "GaussianMixture"],
      howItWorks: "Initialise K centroïdes aléatoirement, assigne chaque point au centroïde le plus proche, recalcule les centroïdes comme moyenne des points assignés, répète jusqu'à convergence.",
      explanation: "Comme organiser une fête : vous placez K tables dans la salle, puis chaque invité s'assoit à la table la plus proche. Ensuite, vous déplacez les tables au centre de chaque groupe d'invités, et répétez jusqu'à stabilité.",
      pros: [
        "Simple et rapide",
        "Fonctionne bien sur clusters sphériques",
        "Scalable avec mini-batch",
        "Résultats reproductibles"
      ],
      cons: [
        "Nécessite de choisir K à l'avance",
        "Sensible à l'initialisation",
        "Assume clusters sphériques",
        "Sensible aux outliers"
      ],
      useCases: [
        "Segmentation client",
        "Compression d'images",
        "Préprocessing pour autres algos",
        "Analyse exploratoire"
      ]
    },
    {
      id: "hierarchical",
      title: "Clustering Hiérarchique",
      subtitle: "Classification Ascendante Hiérarchique",
      icon: <Network className="h-6 w-6" />,
      color: "bg-purple-500",
      explanation: "Comme construire un arbre généalogique : on commence par considérer chaque point comme un cluster, puis on fusionne progressivement les clusters les plus proches jusqu'à n'en avoir plus qu'un seul.",
      pros: [
        "Pas besoin de spécifier le nombre de clusters",
        "Dendrogramme informatif",
        "Déterministe",
        "Fonctionne avec toute métrique de distance"
      ],
      cons: [
        "Complexité O(n³) - lent sur gros datasets",
        "Sensible au bruit",
        "Difficile de défaire une mauvaise fusion",
        "Choix de la métrique de liaison crucial"
      ],
      useCases: [
        "Phylogénie",
        "Analyse de réseaux sociaux",
        "Taxonomie",
        "Petits datasets (&lt; 1000 points)"
      ]
    }
  ];

  const reinforcementModels = [
    {
      id: "q-learning",
      title: "Q-Learning",
      subtitle: "Apprentissage par Différence Temporelle",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500",
      explanation: "Comme apprendre à jouer aux échecs : vous essayez des coups, observez les résultats, et ajustez votre stratégie. Q-Learning mémorise la 'qualité' de chaque action dans chaque situation.",
      pros: [
        "Pas besoin de modèle de l'environnement",
        "Converge vers la solution optimale",
        "Applicable à de nombreux domaines",
        "Base solide pour autres méthodes RL"
      ],
      cons: [
        "Exploration vs exploitation difficile",
        "Convergence lente",
        "Problème de dimensionnalité",
        "Nécessite beaucoup d'expérience"
      ],
      useCases: [
        "Jeux simples",
        "Navigation robotique",
        "Optimisation de ressources",
        "Systèmes de recommandation adaptatifs"
      ]
    }
  ];

  const deepLearningModels = [
    {
      id: "neural-network",
      title: "Réseaux de Neurones",
      subtitle: "Perceptron Multi-Couches",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-indigo-500",
      explanation: "Comme le cerveau humain : des neurones artificiels connectés en couches. Chaque neurone reçoit des signaux, les traite, et transmet le résultat. L'apprentissage ajuste les connexions.",
      pros: [
        "Approximation universelle",
        "Gère relations non-linéaires complexes",
        "Flexible et adaptable",
        "État de l'art sur de nombreux problèmes"
      ],
      cons: [
        "Boîte noire difficile à interpréter",
        "Nécessite beaucoup de données",
        "Coûteux en calcul",
        "Nombreux hyperparamètres"
      ],
      useCases: [
        "Reconnaissance d'images",
        "Traitement du langage naturel",
        "Prédiction de séries temporelles",
        "Systèmes de recommandation"
      ]
    },
    {
      id: "cnn",
      title: "CNN (Réseaux Convolutifs)",
      subtitle: "Réseaux de Neurones Convolutifs",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-blue-600",
      explanation: "Comme l'œil humain : des filtres détectent des motifs locaux (contours, formes), puis des couches supérieures combinent ces motifs pour reconnaître des objets complexes.",
      pros: [
        "Excellent pour données spatiales",
        "Invariance aux translations",
        "Partage de paramètres efficace",
        "Hiérarchie de caractéristiques automatique"
      ],
      cons: [
        "Nécessite beaucoup de données",
        "Coûteux en calcul (GPU recommandé)",
        "Sensible aux rotations/déformations",
        "Architecture complexe à concevoir"
      ],
      useCases: [
        "Classification d'images",
        "Détection d'objets",
        "Imagerie médicale",
        "Vision par ordinateur"
      ]
    }
  ];

  const ModelCard = ({ model }: { model: any }) => (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4" style={{ borderLeftColor: model.color.replace('bg-', '#') }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${model.color} text-white`}>
            {model.icon}
          </div>
          <div>
            <CardTitle className="text-lg">{model.title}</CardTitle>
            <CardDescription className="text-sm">{model.subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Nom Scikit-learn */}
        {model.sklearnName && (
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="font-semibold mb-1 flex items-center gap-2 text-purple-700">
              <code className="text-xs bg-purple-100 px-2 py-1 rounded">sklearn</code>
              Nom Scikit-learn
            </h4>
            <code className="text-sm font-mono text-purple-800">{model.sklearnName}</code>
          </div>
        )}
        
        {/* Comment ça marche techniquement */}
        {model.howItWorks && (
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-indigo-700">
              <Target className="h-4 w-4" />
              Fonctionnement technique
            </h4>
            <p className="text-sm text-indigo-800">{model.howItWorks}</p>
          </div>
        )}
        
        <div className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: model.color.replace('bg-', '#') }}>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Analogie simple
          </h4>
          <p className="text-sm text-gray-700">{model.explanation}</p>
        </div>
        
        {/* Algorithmes similaires */}
        {model.similarAlgorithms && (
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-orange-700">
              <Network className="h-4 w-4" />
              Algorithmes similaires
            </h4>
            <div className="flex flex-wrap gap-2">
              {model.similarAlgorithms.map((algo: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs bg-orange-100 text-orange-800 border-orange-300">
                  {algo}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700">
              <CheckCircle className="h-4 w-4" />
              Avantages
            </h4>
            <ul className="text-sm space-y-1">
              {model.pros.map((pro: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-700">
              <XCircle className="h-4 w-4" />
              Inconvénients
            </h4>
            <ul className="text-sm space-y-1">
              {model.cons.map((con: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-700">
            <Lightbulb className="h-4 w-4" />
            Cas d'usage idéaux
          </h4>
          <ul className="text-sm space-y-1">
            {model.useCases.map((useCase: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );

  const ComparisonTable = () => (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Tableau Comparatif des Modèles
        </CardTitle>
        <CardDescription>
          Comparaison rapide pour vous aider à choisir le bon algorithme
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3 text-left font-semibold">Modèle</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">Interprétabilité</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">Performance</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">Vitesse</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">Données requises</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">Decision Tree</td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-green-100 text-green-800">Excellente</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Modérée</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-green-100 text-green-800">Rapide</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-green-100 text-green-800">Peu</Badge>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">Random Forest</td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Modérée</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-green-100 text-green-800">Excellente</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Modérée</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-yellow-100 text-yellow-800">Modérée</Badge>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">Neural Networks</td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-red-100 text-red-800">Très faible</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-green-100 text-green-800">Excellente</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-red-100 text-red-800">Très lente</Badge>
                </td>
                <td className="border border-gray-200 p-3">
                  <Badge className="bg-red-100 text-red-800">Beaucoup</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const SelectionGuide = () => (
    <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Lightbulb className="h-5 w-5" />
          Guide de Sélection
        </CardTitle>
        <CardDescription className="text-blue-700">
          Comment choisir le bon algorithme selon votre contexte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Données {'<'} 1000 échantillons</h4>
            <p className="text-sm text-blue-700">Utilisez des modèles simples comme Decision Tree ou SVM avec kernel linéaire</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Données {'>'} 100k échantillons</h4>
            <p className="text-sm text-blue-700">SGD, Random Forest ou Neural Networks selon la complexité</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Interprétabilité cruciale</h4>
            <p className="text-sm text-blue-700">Decision Tree ou modèles linéaires avec coefficients explicites</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Performance maximale</h4>
            <p className="text-sm text-blue-700">Random Forest, Gradient Boosting ou Deep Learning</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Données images/texte</h4>
            <p className="text-sm text-blue-700">CNN pour images, RNN/Transformers pour texte</p>
          </div>
          <div className="bg-white/70 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2 text-blue-800">Temps réel requis</h4>
            <p className="text-sm text-blue-700">Modèles linéaires, Decision Tree ou SGD</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div id="ml-models" className="scroll-mt-24 mt-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Guide Complet des Modèles de Machine Learning
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">🤖 Algorithmes, Estimateurs et Classifieurs</h3>
          <p className="text-gray-700 mb-4">
            Cette section présente les <strong>algorithmes de Machine Learning</strong> les plus utilisés en pratique. 
            Chaque modèle est un <strong>estimateur</strong> (pour la régression) ou un <strong>classifieur</strong> (pour la classification) 
            qui apprend des patterns dans vos données pour faire des prédictions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border">
              <strong className="text-blue-600">📊 Algorithmes :</strong> Les méthodes mathématiques (SGD, K-Means, etc.)
            </div>
            <div className="bg-white p-3 rounded border">
              <strong className="text-green-600">🎯 Estimateurs :</strong> Prédisent des valeurs numériques continues
            </div>
            <div className="bg-white p-3 rounded border">
              <strong className="text-purple-600">🏷️ Classifieurs :</strong> Prédisent des catégories ou classes
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl">
          Maîtrisez les algorithmes d'apprentissage automatique : supervisé, non supervisé, reinforcement learning et deep learning. 
          Chaque modèle est expliqué avec des analogies simples, ses avantages/inconvénients, ses cas d'usage optimaux, et son nom Scikit-learn.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="supervised" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Supervisé
          </TabsTrigger>
          <TabsTrigger value="unsupervised" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Non Supervisé
          </TabsTrigger>
          <TabsTrigger value="reinforcement" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Reinforcement
          </TabsTrigger>
          <TabsTrigger value="deep" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Deep Learning
          </TabsTrigger>
        </TabsList>

        <TabsContent value="supervised" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Apprentissage Supervisé</h3>
            <p className="text-gray-600">
              L'apprentissage supervisé utilise des données étiquetées pour entraîner des modèles à prédire des résultats. 
              Il comprend la classification (prédiction de catégories) et la régression (prédiction de valeurs numériques).
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supervisedModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unsupervised" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Apprentissage Non Supervisé</h3>
            <p className="text-gray-600">
              L'apprentissage non supervisé découvre des structures cachées dans les données sans étiquettes. 
              Il inclut le clustering (regroupement) et la réduction de dimensionnalité.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {unsupervisedModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reinforcement" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Apprentissage par Renforcement</h3>
            <p className="text-gray-600">
              L'apprentissage par renforcement apprend par interaction avec un environnement, 
              en maximisant les récompenses à long terme à travers l'exploration et l'exploitation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reinforcementModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deep" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Deep Learning</h3>
            <p className="text-gray-600">
              Le deep learning utilise des réseaux de neurones profonds pour apprendre des représentations complexes 
              des données, excellant dans la reconnaissance d'images, le traitement du langage naturel et plus encore.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {deepLearningModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <ComparisonTable />
      <SelectionGuide />

      <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold mb-4 text-green-800">Ressources pour Approfondir</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Carte des algorithmes Scikit-learn
            </a>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.coursera.org/learn/machine-learning" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Cours Machine Learning - Stanford
            </a>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Kaggle Learn - Cours gratuits
            </a>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://machinelearningmastery.com/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Machine Learning Mastery
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MLModelsSection;