
import { EducationalCard } from "@/components/ui/educational-cards";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Video, Globe, Code, Users, Star, ExternalLink, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";

const resources = {
  books: [
    {
      title: "The Elements of Statistical Learning",
      authors: "Trevor Hastie, Robert Tibshirani, Jerome Friedman",
      description: "LA référence académique en apprentissage statistique. Couvre tous les aspects théoriques et pratiques de l'apprentissage supervisé avec une approche mathématique rigoureuse.",
      difficulty: "Avancé" as const,
      language: "Anglais",
      rating: 5,
      url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
      topics: ["Théorie", "Statistiques", "Algorithmes", "Mathématiques"],
      type: "book" as const,
      free: true
    },
    {
      title: "Hands-On Machine Learning",
      authors: "Aurélien Géron",
      description: "Guide pratique complet avec implémentations Python. Excellent équilibre entre théorie et pratique, parfait pour débuter et progresser en apprentissage supervisé.",
      difficulty: "Intermédiaire" as const,
      language: "Français/Anglais",
      rating: 5,
      url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
      topics: ["Python", "Scikit-learn", "Projets pratiques", "TensorFlow"],
      type: "book" as const,
      free: false
    },
    {
      title: "Pattern Recognition and Machine Learning",
      authors: "Christopher Bishop",
      description: "Approche bayésienne de l'apprentissage automatique. Excellent pour comprendre les fondements probabilistes de l'apprentissage supervisé.",
      difficulty: "Avancé" as const,
      language: "Anglais",
      rating: 5,
      url: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf",
      topics: ["Probabilités", "Bayésien", "Théorie", "Mathématiques"],
      type: "book" as const,
      free: true
    },
    {
      title: "Machine Learning Yearning",
      authors: "Andrew Ng",
      description: "Guide stratégique pour structurer vos projets ML. Focus sur les bonnes pratiques et les pièges à éviter en apprentissage supervisé.",
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 4,
      url: "https://www.deeplearning.ai/machine-learning-yearning/",
      topics: ["Stratégie", "Bonnes pratiques", "Gestion de projet", "Évaluation"],
      type: "book" as const,
      free: true
    },
    {
      title: "Introduction to Statistical Learning",
      authors: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani",
      description: "Version accessible d'ESL. Parfait pour débuter avec une approche statistique de l'apprentissage supervisé. Exemples en R inclus.",
      difficulty: "Débutant" as const,
      language: "Anglais",
      rating: 5,
      url: "https://www.statlearning.com/",
      topics: ["R", "Statistiques", "Introduction", "Exercices"],
      type: "book" as const,
      free: true
    }
  ],
  courses: [
    {
      title: "Machine Learning (Stanford CS229)",
      description: "LE cours de référence en apprentissage automatique. Couvre tous les algorithmes supervisés avec rigueur mathématique et implémentations pratiques.",
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 5,
      url: "http://cs229.stanford.edu/",
      topics: ["Théorie", "Algorithmes", "Mathématiques", "Python/Octave"],
      type: "video" as const,
      free: true
    },
    {
      title: "Coursera Machine Learning",
      description: "Version accessible du cours Stanford. Excellente introduction pratique avec exercices guidés et projets concrets en apprentissage supervisé.",
      difficulty: "Débutant" as const,
      language: "Anglais",
      rating: 5,
      url: "https://www.coursera.org/learn/machine-learning",
      topics: ["Octave/Matlab", "Projets", "Introduction", "Évaluation"],
      type: "video" as const,
      free: false
    },
    {
      title: "Fast.ai Practical Deep Learning",
      description: "Approche top-down unique. Commence par des projets concrets puis explique la théorie. Excellent pour l'apprentissage supervisé avec deep learning.",
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 5,
      url: "https://course.fast.ai/",
      topics: ["Deep Learning", "PyTorch", "Projets réels", "Top-down"],
      type: "video" as const,
      free: true
    },
    {
      title: "CS231n: Convolutional Neural Networks",
      description: "Spécialisé en vision par ordinateur. Couvre l'apprentissage supervisé pour la classification et détection d'images avec CNNs.",
      difficulty: "Avancé" as const,
      language: "Anglais",
      rating: 5,
      url: "http://cs231n.stanford.edu/",
      topics: ["Computer Vision", "CNNs", "PyTorch", "Classification d'images"],
      type: "video" as const,
      free: true
    },
    {
      title: "Udacity Machine Learning Engineer",
      description: "Nanodegree complet avec projets industriels. Couvre l'apprentissage supervisé de A à Z avec déploiement en production.",
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 4,
      url: "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t",
      topics: ["Production", "AWS", "Projets", "Certification"],
      type: "video" as const,
      free: false
    }
  ],
  websites: [
    {
      title: "Scikit-learn Documentation",
      description: "Documentation officielle de la bibliothèque Python de référence. Guides utilisateur, API complète et exemples pour tous les algorithmes supervisés.",
      url: "https://scikit-learn.org/stable/",
      topics: ["Python", "API", "Exemples", "Tutoriels"],
      type: "website" as const,
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 5,
      free: true
    },
    {
      title: "Papers With Code - Supervised Learning",
      description: "Dernières recherches en apprentissage supervisé avec code source. Parfait pour se tenir au courant des avancées et reproduire les résultats.",
      url: "https://paperswithcode.com/methods/category/supervised-learning",
      topics: ["Research", "Code", "SOTA", "Benchmarks"],
      type: "website" as const,
      difficulty: "Avancé" as const,
      language: "Anglais",
      rating: 5,
      free: true
    },
    {
      title: "Kaggle Learn",
      description: "Micro-cours gratuits et pratiques. Excellente introduction hands-on aux techniques d'apprentissage supervisé avec datasets réels.",
      url: "https://www.kaggle.com/learn",
      topics: ["Pratique", "Datasets", "Compétitions", "Notebooks"],
      type: "website" as const,
      difficulty: "Débutant" as const,
      language: "Anglais",
      rating: 4,
      free: true
    },
    {
      title: "Machine Learning Mastery",
      description: "Blog de Jason Brownlee. Tutoriels pratiques, guides step-by-step et conseils d'expert pour maîtriser l'apprentissage supervisé.",
      url: "https://machinelearningmastery.com/",
      topics: ["Tutoriels", "Python", "Conseils pratiques", "Exemples"],
      type: "website" as const,
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 4,
      free: true
    },
    {
      title: "Towards Data Science",
      description: "Publication Medium avec articles de qualité. Couvre tous les aspects de l'apprentissage supervisé avec retours d'expérience réels.",
      url: "https://towardsdatascience.com/",
      topics: ["Articles", "Expérience", "Théorie", "Pratique"],
      type: "website" as const,
      difficulty: "Intermédiaire" as const,
      language: "Anglais",
      rating: 4,
      free: true
    },
    {
      title: "Google AI Education",
      description: "Ressources pédagogiques de Google. Cours interactifs et guides pour l'apprentissage automatique avec focus sur TensorFlow.",
      url: "https://ai.google/education/",
      topics: ["TensorFlow", "Interactif", "Google", "Débutant"],
      type: "website" as const,
      difficulty: "Débutant" as const,
      language: "Anglais",
      rating: 4,
      free: true
    }
  ]
};

// Convertir en format attendu par ResourcesSection
const allResources = [
  ...resources.books,
  ...resources.courses,
  ...resources.websites
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "book": return <Book className="h-5 w-5 text-blue-600" />;
    case "video": return <Video className="h-5 w-5 text-red-600" />;
    case "website": return <Globe className="h-5 w-5 text-green-600" />;
    case "code": return <Code className="h-5 w-5 text-purple-600" />;
    case "community": return <Users className="h-5 w-5 text-orange-600" />;
    default: return <Book className="h-5 w-5" />;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Débutant": return "bg-green-100 text-green-800";
    case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
    case "Avancé": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
    />
  ));
};

const SupervisedResourcesSection = () => {
  const tips = [
    "Commencez par 'Introduction to Statistical Learning' pour une base solide",
    "Pratiquez avec Scikit-learn avant de passer aux frameworks complexes",
    "Alternez théorie et pratique pour une meilleure compréhension",
    "Rejoignez des communautés pour échanger et progresser"
  ];

  const warnings = [
    "Ne sautez pas les mathématiques : elles sont essentielles pour comprendre",
    "Évitez de collectionner les cours sans pratiquer",
    "Attention aux cours obsolètes : vérifiez les dates de publication",
    "Ne négligez pas la préparation des données : 80% du travail !"
  ];

  const bestPractices = [
    "Implémentez chaque algorithme à la main au moins une fois",
    "Travaillez sur des projets personnels pour consolider",
    "Participez à des compétitions Kaggle pour vous challenger",
    "Documentez vos apprentissages dans un blog ou notebook"
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">📚 Ressources pour Maîtriser l'Apprentissage Supervisé</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Sélection curée des meilleures ressources pour apprendre et maîtriser l'apprentissage supervisé. 
        Des bases théoriques aux applications pratiques, tout ce dont vous avez besoin pour exceller dans ce domaine fondamental du machine learning.
      </p>

      {/* Conseils et avertissements */}
      <div className="grid md:grid-cols-3 gap-6">
        <EducationalCard title="💡 Conseils d'apprentissage" type="saviez-vous">
          <ul className="space-y-2 text-sm">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </EducationalCard>

        <EducationalCard title="⚠️ Points d'attention" type="rappel">
          <ul className="space-y-2 text-sm">
            {warnings.map((warning, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </EducationalCard>

        <EducationalCard title="✅ Bonnes pratiques" type="concept">
          <ul className="space-y-2 text-sm">
            {bestPractices.map((practice, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </EducationalCard>
      </div>

      {/* Liste des ressources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allResources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(resource.type)}
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </div>
                {resource.free && (
                  <Badge className="bg-green-100 text-green-800 text-xs">Gratuit</Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(resource.difficulty)}>{resource.difficulty}</Badge>
                <Badge variant="outline" className="text-xs">{resource.language}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {resource.topics.slice(0, 3).map((topic, topicIndex) => (
                  <Badge key={topicIndex} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
                {resource.topics.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{resource.topics.length - 3}
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {renderStars(resource.rating)}
                  <span className="text-xs text-gray-500 ml-1">({resource.rating}/5)</span>
                </div>
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1"
                  >
                    Accéder <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupervisedResourcesSection;
