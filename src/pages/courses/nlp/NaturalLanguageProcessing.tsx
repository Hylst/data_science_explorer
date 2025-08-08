import React, { useState, useCallback, useMemo } from "react";
import CourseLayout from "@/components/layout/CourseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CourseHeroTemplate from "@/components/courses/CourseHeroTemplate";
import CourseModuleTemplate from "@/components/courses/CourseModuleTemplate";
import { MessageSquare, Brain, Languages, Zap } from "lucide-react";

const NaturalLanguageProcessing = () => {
  const [activeTab, setActiveTab] = useState("modules");

  // Configuration du cours avec ES6
  const courseConfig = useMemo(() => ({
    info: {
      title: "Traitement du Langage Naturel (NLP)",
      description: "Maîtrisez les techniques modernes de NLP avec Python, spaCy, NLTK et Transformers",
      level: "Intermédiaire",
      duration: "8 semaines",
      modules: 20,
      totalHours: "~32h"
    },
    features: [
      {
        title: "Technologies avancées",
        items: [
          "NLTK & spaCy pour preprocessing",
          "Transformers & BERT",
          "GPT et modèles génératifs",
          "Hugging Face ecosystem"
        ]
      },
      {
        title: "Prérequis",
        items: [
          "Python intermédiaire",
          "Machine Learning de base",
          "Statistiques appliquées",
          "Algèbre linéaire"
        ]
      },
      {
        title: "Applications concrètes",
        items: [
          "Chatbot intelligent",
          "Analyse de sentiment",
          "Système de recommandation",
          "Traduction automatique"
        ]
      }
    ]
  }), []);

  // Modules avec ES6 features
  const modules = [
    {
      id: "nlp-foundations",
      title: "Fondamentaux du NLP",
      description: "Introduction aux défis du traitement du langage naturel",
      duration: "2h",
      completed: false,
      level: "beginner" as const,
      type: "theory" as const
    },
    {
      id: "text-preprocessing",
      title: "Preprocessing de texte",
      description: "Tokenisation, normalisation et nettoyage des données textuelles",
      duration: "3.5h",
      completed: false,
      level: "beginner" as const,
      type: "practice" as const
    },
    {
      id: "feature-extraction",
      title: "Extraction de caractéristiques",
      description: "Bag of Words, TF-IDF et Word Embeddings",
      duration: "4h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "sentiment-analysis",
      title: "Analyse de sentiment",
      description: "Classification d'opinions et détection d'émotions",
      duration: "3.5h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "named-entity",
      title: "Reconnaissance d'entités nommées",
      description: "Extraction automatique d'entités (personnes, lieux, organisations)",
      duration: "3h",
      completed: false,
      level: "intermediate" as const,
      type: "practice" as const
    },
    {
      id: "transformers-bert",
      title: "Transformers et BERT",
      description: "Architecture transformer et modèles pré-entraînés",
      duration: "5h",
      completed: false,
      level: "advanced" as const,
      type: "practice" as const
    },
    {
      id: "gpt-generation",
      title: "GPT et génération de texte",
      description: "Modèles génératifs et fine-tuning",
      duration: "4.5h",
      completed: false,
      level: "advanced" as const,
      type: "practice" as const
    },
    {
      id: "chatbot-project",
      title: "Projet Chatbot",
      description: "Développement d'un assistant conversationnel complet",
      duration: "6h",
      completed: false,
      level: "advanced" as const,
      type: "project" as const
    }
  ];

  // Projets pratiques avec ES6 
  const practicalProjects = [
    {
      title: "Analyseur de sentiment Twitter",
      description: "Classification en temps réel des tweets selon leur sentiment",
      technologies: "NLTK, scikit-learn, Twitter API",
      techniques: ["Preprocessing", "Feature extraction", "Classification", "Déploiement"],
      difficulty: "Intermédiaire",
      estimatedTime: "10h"
    },
    {
      title: "Chatbot de support client",
      description: "Assistant virtuel avec compréhension du contexte",
      technologies: "spaCy, Transformers, Rasa",
      techniques: ["Intent recognition", "Entity extraction", "Dialogue management"],
      difficulty: "Avancé",
      estimatedTime: "15h"
    },
    {
      title: "Système de résumé automatique",
      description: "Génération de résumés d'articles avec BERT",
      technologies: "Hugging Face, BERT, PyTorch",
      techniques: ["Extractive summarization", "Abstractive summarization", "Évaluation"],
      difficulty: "Avancé",
      estimatedTime: "12h"
    }
  ];

  // Handlers avec useCallback
  const handleModuleStart = useCallback((moduleId: string) => {
    console.log(`Starting NLP module: ${moduleId}`);
    // Logique de démarrage du module NLP
  }, []);

  const handleModuleNotes = useCallback((moduleId: string) => {
    console.log(`Opening NLP notes for: ${moduleId}`);
    // Logique d'ouverture des notes
  }, []);

  const handleProjectStart = useCallback((projectTitle: string) => {
    console.log(`Starting NLP project: ${projectTitle}`);
    // Logique de démarrage de projet
  }, []);

  return (
    <CourseLayout
      title="Traitement du Langage Naturel (NLP)"
      categoryName="Intelligence Artificielle"
      courseName="Natural Language Processing"
      categorySlug="nlp"
    >
      <div className="space-y-8">
        <CourseHeroTemplate
          courseInfo={courseConfig.info}
          features={courseConfig.features}
          icon={MessageSquare}
          gradientFrom="from-rose-50"
          gradientTo="to-orange-50"
          iconColor="text-rose-600"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="models">Modèles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modules" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Parcours d'apprentissage</h2>
            <CourseModuleTemplate
              modules={modules}
              primaryColor="rose"
              onModuleStart={handleModuleStart}
              onModuleNotes={handleModuleNotes}
            />
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Projets appliqués</h2>
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
                        <p className="text-sm font-medium text-gray-700">Technologies :</p>
                        <p className="text-sm text-gray-600">{project.technologies}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Techniques :</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techniques.map((technique, techIndex) => (
                            <span key={techIndex} className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">
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
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition-colors mt-4"
                        onClick={() => handleProjectStart(project.title)}
                      >
                        <Languages className="h-4 w-4" />
                        Démarrer le projet
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="models" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Modèles et frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8 text-purple-600" />
                    <div>
                      <CardTitle>Modèles Transformers</CardTitle>
                      <CardDescription>État de l'art en NLP</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Maîtrisez les architectures transformer et les modèles pré-entraînés.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">BERT (compréhension)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">GPT (génération)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">T5 (text-to-text)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Frameworks et bibliothèques</CardTitle>
                  <CardDescription>Outils essentiels du NLP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Écosystème complet pour développer des applications NLP.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">• Hugging Face Transformers</div>
                    <div className="text-sm">• spaCy (production-ready)</div>
                    <div className="text-sm">• NLTK (recherche)</div>
                    <div className="text-sm">• Rasa (chatbots)</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CourseLayout>
  );
};

export default NaturalLanguageProcessing;