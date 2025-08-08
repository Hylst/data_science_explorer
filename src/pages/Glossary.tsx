import { useState, useMemo, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import GlossaryGrid from "@/components/glossary/GlossaryGrid";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { BookOpen, FileText, Book, BarChartBig, Brain, Spline, CheckCircle, Wand2, Search, Database, Cpu, AlertTriangle, Code2, ListChecks } from "lucide-react";
import type { GlossaryEntry } from "@/components/glossary/types";

const glossaryEntries: GlossaryEntry[] = [
  {
    term: "Data Science",
    description:
      "La data science (science des données) est un domaine réunissant statistique avancée, informatique, traitement de grands ensembles de données (big data), apprentissage automatique et compréhension du métier concerné. Elle vise à extraire des insights exploitables à partir de données hétérogènes—structurées ou non structurées. Le data scientist analyse, nettoie, modélise et visualise ces données pour expliquer des phénomènes, prédire des comportements ou optimiser des prises de décisions. Les applications touchent à la santé, la finance, l'industrie, le marketing, l'environnement... Ce domaine exige une curiosité analytique, une solide culture technique ainsi qu'un souci éthique sur la manipulation des données personnelles.",
    icon: <BookOpen className="w-7 h-7 text-primary" />
  },
  {
    term: "Machine Learning",
    description:
      "Le machine learning (apprentissage automatique) désigne l'ensemble des techniques permettant à une machine d'apprendre à partir des données et d'améliorer progressivement ses performances sans être explicitement programmée pour chaque tâche. Il s'appuie sur des algorithmes (régression, classification, clustering, etc.) capables de généraliser à partir d'exemples et d'ajuster leurs modèles internes grâce à des itérations (optimisation). Les applications incluent la reconnaissance d'image et de voix, la suggestion de contenu, la détection de fraudes ou de maladies. Le ML nécessite un travail important de sélection, préparation et nettoyage des données (feature engineering).",
    icon: <Brain className="w-7 h-7 text-secondary" />
  },
  {
    term: "Statistiques",
    description:
      "La statistique est la science de la collecte, de l'organisation, de l'analyse, de l'interprétation et de la présentation de données. Elle permet de décrypter des tendances, détecter des anomalies, réaliser des inférences et prendre des décisions dans des contextes d'incertitude. Elle englobe les méthodes descriptives (moyenne, médiane, écart-type, corrélation...), l'estimation, les tests d'hypothèses et la modélisation. En data science, la statistique est indispensable pour valider l'interprétation des modèles et garantir la robustesse des résultats face à la variabilité des données du monde réel.",
    icon: <FileText className="w-7 h-7 text-primary" />
  },
  {
    term: "Classification",
    description:
      "La classification est une tâche supervisée consistant à affecter une observation à une ou plusieurs catégories prédéfinies (« classes ») à l'aide d'un modèle entraîné sur des exemples annotés. Elle est utilisée pour trier des courriels (spam/non spam), diagnostiquer des maladies (malade/sain), reconnaître des objets (voiture, chat, etc.). Les algorithmes courants sont la régression logistique, les forêts aléatoires (Random Forest), ou les réseaux de neurones. Un des enjeux majeurs est d'équilibrer précision, rappel, gestion des classes déséquilibrées et explicabilité du résultat.",
    icon: <ListChecks className="w-7 h-7 text-secondary" />
  },
  {
    term: "Régression",
    description:
      "La régression est une technique prédictive où l'on cherche à estimer une variable quantitative (continue) en fonction d'autres variables observées (prédicteurs). Elle modélise les relations linéaires ou non entre variables (par exemple : prédire un prix immobilier selon la surface, l'emplacement, l'âge du bien...). On distingue la régression linéaire, polynomiale ou logistique selon les cas. Bien choisir la méthode et bien valider les hypothèses (normalité, indépendance, homoscédasticité) garantit la pertinence du modèle.",
    icon: <BarChartBig className="w-7 h-7 text-secondary" />
  },
  {
    term: "Apprentissage Supervisé",
    description:
      "L'apprentissage supervisé implique que le modèle est entraîné sur un jeu de données où chaque observation possède une 'étiquette' connue (catégorie ou valeur cible). L'objectif est d'apprendre la correspondance entre les entrées et la sortie attendue pour pouvoir généraliser sur de nouveaux cas. Les tâches typiques sont la classification ou la régression. Les étapes clés incluent la division du jeu de données (train/test), le choix du modèle, l'optimisation des paramètres et l'évaluation par validation croisée.",
    icon: <CheckCircle className="w-7 h-7 text-primary" />
  },
  {
    term: "Apprentissage Non Supervisé",
    description:
      "Contrairement au supervisé, les méthodes non supervisées apprennent automatiquement la structure cachée de données sans étiquettes explicites. Cela permet, par exemple, de segmenter une population de clients en groupes homogènes (clusters) ou bien de détecter des anomalies. Les techniques phares incluent le clustering (K-means, DBSCAN) et la réduction de dimensionnalité (ACP, t-SNE). Elles révèlent des patterns inattendus mais leur interprétation nécessite des validations métiers.",
    icon: <Wand2 className="w-7 h-7 text-primary" />
  },
  {
    term: "Cluster/Clustering",
    description:
      "Le clustering consiste à regrouper automatiquement des points de données semblables au sein d'une même catégorie (« cluster ») sans connaissance préalable des classes. Il aide à mieux comprendre la structure des données, à découvrir des segments cachés ou à préparer des analyses ultérieures. Les applications sont nombreuses : marketing (segmentation client), biologie (groupes de gènes), image (regroupement de pixels similaires). Le choix du nombre de clusters, l'interprétation des groupements et la visualisation sont centraux.",
    icon: <Spline className="w-7 h-7 text-secondary" />
  },
  {
    term: "Overfitting (Surapprentissage)",
    description:
      "L'overfitting, ou surapprentissage, décrit une situation où un modèle a tellement bien assimilé les caractéristiques spécifiques liées au jeu d'entraînement qu'il perd sa capacité à généraliser sur des données nouvelles. Il détecte des schémas ou du bruit propres aux exemples vus (mémorisation excessive), ce qui entraîne de mauvaises performances en production. Cela arrive avec des modèles trop complexes ou trop peu de données. Les solutions incluent la régularisation, le dropout et la validation croisée.",
    icon: <AlertTriangle className="w-7 h-7 text-primary" />
  },
  {
    term: "Underfitting (Sous-apprentissage)",
    description:
      "À l'opposé de l'overfitting, l'underfitting arrive lorsqu'un modèle n'assimile pas correctement les relations importantes dans les données d'entraînement : il est trop simple (manque de complexité), mal paramétré ou manque de données pertinentes. Les performances sont alors faibles aussi bien sur l'entraînement que sur des données inédites. Corriger cela passe souvent par : enrichir les données, essayer des modèles plus puissants ou ajuster les paramètres ('hyperparamètres').",
    icon: <AlertTriangle className="w-7 h-7 text-secondary" />
  },
  {
    term: "Réseau de Neurones",
    description:
      "Un réseau de neurones est un modèle mathématique inspiré du cerveau biologique, organisé en couches de nœuds ('neurones artificiels'). Chaque neurone combine des signaux d'entrée pondérés, applique une fonction d'activation, puis transmet le signal aux couches suivantes. Ces réseaux sont capables d'apprendre des représentations hiérarchiques complexes, et s'appliquent à la reconnaissance d'images, de sons, à la traduction automatique et à la génération de texte. L'apprentissage profond (deep learning) s'appuie sur des architectures empilant de nombreuses couches.",
    icon: <Brain className="w-7 h-7 text-primary" />
  },
  {
    term: "Feature Engineering",
    description:
      "Le feature engineering désigne l'ensemble des techniques de sélection, transformation, création ou combinaison de variables ('features') pertinentes à inclure dans un modèle. Il s'agit de traduire une problématique concrète en variables numériques optimales pour l'apprentissage machine. Exemples : fusionner des dates en durée, encoder du texte, créer des indicateurs métier. Un bon feature engineering augmente la pertinence du modèle, parfois plus que le choix de l'algorithme lui-même.",
    icon: <BookOpen className="w-7 h-7 text-secondary" />
  },
  {
    term: "Donnée Manquante",
    description:
      "Une donnée manquante est une information absente dans un ensemble de données (notée 'NaN', 'null', cellule vide ou valeur aberrante). Sa gestion est critique : leur présence en quantité peut biaiser ou fausser les modèles. Les approches de traitement incluent la suppression des lignes incomplètes, l'imputation (remplacement par la moyenne, médiane, ou régression), ou l'usage d'algorithmes robustes. L'analyse des raisons d'absence est primordiale (problème de collecte, biais systémique, etc.).",
    icon: <Database className="w-7 h-7 text-secondary" />
  },
  {
    term: "Normalisation",
    description:
      "La normalisation est la transformation de données pour garantir que toutes les variables sont sur une même échelle numérique (souvent entre 0 et 1, ou via le 'z-score' : moyenne nulle/variance 1). Elle est essentielle pour les algorithmes sensibles à l'échelle (régression, K-means, réseaux de neurones) afin d'éviter que certaines variables dominent injustement. Elle diffère de la standardisation qui ramène la distribution autour de la moyenne et de l'écart-type.",
    icon: <BarChartBig className="w-7 h-7 text-primary" />
  },
  {
    term: "Validation Croisée",
    description:
      "La validation croisée ('cross-validation') est une méthode d'évaluation qui consiste à diviser le jeu de données en plusieurs sous-ensembles ('folds') pour entraîner/tester le modèle plusieurs fois, réduisant le risque de surapprentissage. La plus utilisée est la 'k-fold' (jeu de données découpé en 'k' portions égales). Cela permet d'obtenir une estimation robuste et de vérifier l'adaptabilité du modèle à des échantillons variés.",
    icon: <CheckCircle className="w-7 h-7 text-primary" />
  },
  {
    term: "Accuracy (Précision)",
    description:
      "L'accuracy (précision globale) mesure le pourcentage de prédictions correctes d'un modèle de classification sur l'ensemble des cas testés. Mais ce n'est pas la seule métrique utile ! En présence de classes déséquilibrées, il vaut mieux compléter par d'autres métriques (précision, rappel, F1-score) pour saisir la subtilité des résultats. Une accuracy élevée n'implique pas forcément une bonne performance sur chaque classe.",
    icon: <BarChartBig className="w-7 h-7 text-secondary" />
  },
  {
    term: "Gradient",
    description:
      "Le gradient indique, pour une fonction mathématique, la direction et la vitesse du changement maximal. Dans les modèles d'apprentissage automatique, le calcul du gradient sert à minimiser une fonction de coût (erreur) lors de l'optimisation des paramètres (poids du modèle). La Descente de Gradient ('Gradient Descent') est l'algorithme principal d'optimisation en deep learning : il ajuste progressivement les poids pour améliorer la précision du modèle.",
    icon: <Spline className="w-7 h-7 text-primary" />
  },
  {
    term: "Régression Linéaire",
    description:
      "La régression linéaire est une méthode de modélisation statistique qui vise à décrire la relation linéaire entre une variable indépendante (X) et une variable dépendante (Y) sous forme d'une droite. Le but est de trouver les coefficients optimaux qui minimisent l'erreur entre valeurs prédites et observées. C'est la base de très nombreux modèles, appliquée à la finance, la biologie, l'industrie, etc.",
    icon: <BarChartBig className="w-7 h-7 text-secondary" />
  },
  {
    term: "Réseau de neurones convolutifs (CNN)",
    description:
      "Les Réseaux de Neurones Convolutifs (CNN) sont spécialement conçus pour traiter des données à structure spatiale, notamment les images. Leurs couches convolutives extraient automatiquement des motifs locaux (bords, textures...) et leurs couches profondes reconstituent des connaissances globales. Les CNN ont révolutionné la reconnaissance d'image, la détection d'objets, l'analyse médicale et les voitures autonomes.",
    icon: <BookOpen className="w-7 h-7 text-primary" />
  },
  {
    term: "Réseau de neurones récurrents (RNN)",
    description:
      "Les Réseaux de Neurones Récurrents (RNN) traitent des séquences temporelles : texte, séries financières, signaux vocaux. Ils mémorisent des états internes (mémoire courte ou longue, 'LSTM', 'GRU'), ce qui leur permet de 'se souvenir' du passé pour prédire le futur. Ils sont à la base des traductions automatiques, assistants vocaux, prévisions météo. Les architectures modernes (Transformers) offrent des alternatives puissantes.",
    icon: <Brain className="w-7 h-7 text-secondary" />
  },
  {
    term: "Big Data",
    description:
      "Le Big Data caractérise les ensembles de données massifs (volume), variés (type), générés rapidement (vélocité), et souvent de qualité variable (véracité). Il s'agit de stocker, traiter, analyser et visualiser ces volumes avec des outils dédiés (Hadoop, Spark, NoSQL) incapables d'être gérés par des moyens traditionnels. Le big data est un fondement de la data science moderne, notamment pour l'IoT, le web, la finance...",
    icon: <Database className="w-7 h-7 text-primary" />
  },
  {
    term: "Deep Learning",
    description:
      "Le deep learning (apprentissage profond) est une sous-catégorie du machine learning utilisant des réseaux de neurones artificiels à de nombreuses couches. Il excelle dans le traitement d'images, de sons, de textes ou de jeux (AlphaGo, ChatGPT...), grâce à sa capacité à extraire des représentations complexes de haut niveau à partir des données brutes. Mais il nécessite de grandes quantités de données et des ressources matérielles importantes.",
    icon: <Brain className="w-7 h-7 text-primary" />
  },
  {
    term: "Exploration de Données (Data Mining)",
    description:
      "L'exploration de données, ou data mining, regroupe les techniques visant à découvrir des patterns cachés, des relations inattendues, ou à classer et détecter des anomalies au sein de grands ensembles de données. Les méthodes incluent clustering, règles d'association ('market basket analysis'), arbres de décision, et bien d'autres. Outil précieux, il doit être utilisé de façon responsable pour éviter les biais et interprétations trompeuses.",
    icon: <Search className="w-7 h-7 text-secondary" />
  },
  {
    term: "Algorithmique",
    description:
      "L'algorithmique est la science de la formulation, de l'analyse et de l'optimisation d'algorithmes, c'est-à-dire des instructions précises permettant de résoudre un problème ou d'accomplir une tâche. En data science, la compréhension du fonctionnement d'un algorithme (complexité, robustesse, limitations) est essentielle pour réaliser les bons choix selon la problématique à traiter.",
    icon: <Code2 className="w-7 h-7 text-primary" />
  },
  {
    term: "Biais Algorithmique",
    description:
      "Le biais algorithmique fait référence aux distorsions ou disparités dans les résultats produits par un modèle, causés par la nature biaisée des données d'entraînement, les préjugés des concepteurs ou les choix méthodologiques. Il peut avoir un impact négatif majeur (discrimination, injustice, amplification de stéréotypes). Il est nécessaire d'auditer, de documenter et de corriger tout biais détecté dans les applications de data science.",
    icon: <AlertTriangle className="w-7 h-7 text-secondary" />
  },
  {
    term: "Matrice de Confusion",
    description:
      "La matrice de confusion est un tableau utilisé pour évaluer les performances d'un modèle de classification. Elle indique le nombre de vrais positifs, faux positifs, vrais négatifs et faux négatifs, ce qui permet de calculer diverses métriques (précision, rappel, F1-score...). Elle donne un aperçu complet des erreurs et réussites du modèle pour chaque classe.",
    icon: <CheckCircle className="w-7 h-7 text-secondary" />
  },
  {
    term: "Token",
    description:
      "En traitement du langage naturel (NLP), un 'token' désigne une unité élémentaire de texte : mot, sous-mot, caractère ou unité sémantique. L'étape de tokenisation consiste à découper les phrases en ces unités pour permettre aux modèles linguistiques (chatbots, analyse de sentiments, traduction...) d'en comprendre et traiter le contenu.",
    icon: <FileText className="w-7 h-7 text-secondary" />
  },
  {
    term: "Feature Selection",
    description:
      "Le 'feature selection' est le processus de sélection des variables indépendantes les plus pertinentes pour un modèle prédictif, permettant d'améliorer les performances, la robustesse et l'explicabilité du modèle tout en réduisant la complexité et le temps de calcul.",
    icon: <Wand2 className="w-7 h-7 text-secondary" />
  },
  {
    term: "Pipeline",
    description:
      "Un pipeline en data science désigne une chaîne organisée de traitements successifs sur les données : depuis la collecte, le prétraitement, la transformation, l'entraînement jusqu'à la mise en production du modèle. Les pipelines garantissent la reproductibilité, l'automatisation et la traçabilité des analyses.",
    icon: <Book className="w-7 h-7 text-secondary" />
  },
  {
    term: "Apprentissage par Renforcement",
    description:
      "L'apprentissage par renforcement ('Reinforcement Learning') est une technique où un agent apprend à prendre les meilleures décisions dans un environnement en recevant des récompenses ou des pénalités. Cette méthode inspire l'IA de jeux vidéo, robots, finance algorithmique, ou encore la conduite autonome.",
    icon: <BookOpen className="w-7 h-7 text-primary" />
  },
  {
    term: "Explainability (Explicabilité)",
    description:
      "L'explicabilité désigne la capacité à comprendre 'pourquoi' et 'comment' un modèle d'apprentissage automatique prend ses décisions. C'est crucial pour la confiance, l'acceptation métier, la conformité réglementaire (RGPD...) et la recherche d'erreurs ou de biais. Les outils XAI ('Explainable AI') comprennent LIME, SHAP, partial dependence plots, etc.",
    icon: <BookOpen className="w-7 h-7 text-secondary" />
  },
  {
    term: "Prédiction",
    description:
      "La prédiction est le processus consistant à estimer une valeur ou une catégorie pour une observation inconnue à partir d'un modèle appris sur des données historiques. On distingue la prédiction 'quantitative' (régression) et 'qualitative' (classification). Sa fiabilité dépend de la qualité des données et du modèle.",
    icon: <CheckCircle className="w-7 h-7 text-primary" />
  },
];

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredEntries = useMemo(() => {
    if (!searchQuery) return glossaryEntries;
    
    const query = searchQuery.toLowerCase();
    return glossaryEntries.filter(
      entry => 
        entry.term.toLowerCase().includes(query) ||
        entry.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Glossaire Data Science"
          description="Explorez les concepts essentiels de la Data Science avec notre glossaire complet et interactif"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <GlossaryGrid entries={filteredEntries} />
        </div>
      </div>
    </Layout>
  );
};

export default Glossary;
