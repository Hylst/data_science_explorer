
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Video, Code, Users, Star, Clock } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResourcesSection = () => {
  const ressources = {
    livres: [
      {
        title: "Python for Data Analysis",
        auteur: "Wes McKinney",
        niveau: "Débutant-Intermédiaire",
        prix: "Gratuit en ligne",
        description: "LA référence pour pandas et l'analyse de données en Python",
        url: "https://wesmckinney.com/book/",
        rating: 5,
        specialite: ["Python", "Pandas", "NumPy"]
      },
      {
        title: "Hands-On Machine Learning",
        auteur: "Aurélien Géron",
        niveau: "Intermédiaire-Avancé",
        prix: "~40€",
        description: "Guide pratique complet du ML avec Python (scikit-learn, TensorFlow)",
        url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
        rating: 5,
        specialite: ["Machine Learning", "TensorFlow", "Scikit-learn"]
      },
      {
        title: "R for Data Science",
        auteur: "Hadley Wickham",
        niveau: "Débutant-Intermédiaire",
        prix: "Gratuit en ligne",
        description: "Guide complet pour maîtriser R et le tidyverse",
        url: "https://r4ds.hadley.nz/",
        rating: 5,
        specialite: ["R", "Tidyverse", "ggplot2"]
      },
      {
        title: "SQL for Data Scientists",
        auteur: "Renee M. P. Teate",
        niveau: "Débutant-Intermédiaire",
        prix: "~35€",
        description: "SQL spécialement orienté pour l'analyse de données",
        url: "https://www.oreilly.com/library/view/sql-for-data/9781119669364/",
        rating: 4,
        specialite: ["SQL", "Bases de données", "Analytics"]
      }
    ],
    plateformes: [
      {
        nom: "DataCamp",
        type: "Interactif",
        prix: "29€/mois",
        description: "Cours interactifs spécialisés en data science avec exercices pratiques",
        avantages: ["Projets réels", "Certificats", "Communauté active"],
        url: "https://www.datacamp.com/",
        rating: 4,
        specialites: ["Python", "R", "SQL", "Machine Learning"]
      },
      {
        nom: "Kaggle Learn",
        type: "Gratuit",
        prix: "Gratuit",
        description: "Micro-cours gratuits avec focus sur la pratique et les compétitions",
        avantages: ["Datasets réels", "Communauté mondiale", "Compétitions"],
        url: "https://www.kaggle.com/learn",
        rating: 5,
        specialites: ["Python", "Machine Learning", "Deep Learning", "SQL"]
      },
      {
        nom: "Coursera",
        type: "Académique",
        prix: "39-79€/mois",
        description: "Cours universitaires de Stanford, IBM, Google avec projets",
        avantages: ["Diplômes reconnus", "Projets encadrés", "Mentoring"],
        url: "https://www.coursera.org/browse/data-science",
        rating: 4,
        specialites: ["Tout spectre DS", "Certificats pro", "Spécialisations"]
      },
      {
        nom: "Fast.ai",
        type: "Pratique",
        prix: "Gratuit",
        description: "Approche top-down du deep learning avec applications concrètes",
        avantages: ["Projets impressionnants", "Méthode unique", "Communauté forte"],
        url: "https://www.fast.ai/",
        rating: 5,
        specialites: ["Deep Learning", "Computer Vision", "NLP"]
      }
    ],
    youtube: [
      {
        chaine: "3Blue1Brown",
        specialite: "Mathématiques visuelles",
        description: "Explications visuelles brillantes des concepts mathématiques",
        subscribers: "4.8M",
        mustWatch: ["Linear Algebra", "Neural Networks", "Calculus"],
        url: "https://www.youtube.com/c/3blue1brown"
      },
      {
        chaine: "Corey Schafer",
        specialite: "Python pratique",
        description: "Tutoriels Python clairs et détaillés pour tous niveaux",
        subscribers: "1.2M",
        mustWatch: ["Python OOP", "Pandas", "Matplotlib"],
        url: "https://www.youtube.com/user/schafer5"
      },
      {
        chaine: "StatQuest",
        specialite: "Stats & ML",
        description: "Concepts statistiques et ML expliqués simplement avec humour",
        subscribers: "800K",
        mustWatch: ["Random Forest", "Neural Networks", "Statistics"],
        url: "https://www.youtube.com/user/joshstarmer"
      },
      {
        chaine: "Data School",
        specialite: "Data Science Python",
        description: "Tutoriels pratiques pandas, scikit-learn et outils DS",
        subscribers: "200K",
        mustWatch: ["Pandas tricks", "Machine Learning", "Data cleaning"],
        url: "https://www.youtube.com/user/dataschool"
      }
    ],
    communautes: [
      {
        nom: "Stack Overflow",
        type: "Q&A",
        description: "LA référence pour poser des questions techniques",
        pourquoi: "Solutions rapides, communauté massive, historique complet",
        tags: ["python", "pandas", "r", "sql", "machine-learning"],
        url: "https://stackoverflow.com/"
      },
      {
        nom: "Reddit - r/MachineLearning",
        type: "Forum",
        description: "Discussions sur les dernières avancées en ML/AI",
        pourquoi: "Papers récents, discussions d'experts, trends",
        membres: "2.1M",
        url: "https://www.reddit.com/r/MachineLearning/"
      },
      {
        nom: "Kaggle",
        type: "Compétition",
        description: "Compétitions DS, datasets et notebooks partagés",
        pourquoi: "Pratique réelle, notebooks d'experts, datasets variés",
        competitions: "Active",
        url: "https://www.kaggle.com/"
      },
      {
        nom: "Data Science Central",
        type: "Réseau",
        description: "Articles, jobs et networking en data science",
        pourquoi: "Veille technologique, opportunités carrière",
        membres: "700K+",
        url: "https://www.datasciencecentral.com/"
      }
    ]
  };

  const ResourceCard = ({ ressource, type }: { ressource: any, type: string }) => {
    const getTypeIcon = () => {
      switch (type) {
        case 'livre': return <BookOpen className="h-5 w-5" />;
        case 'plateforme': return <Video className="h-5 w-5" />;
        case 'youtube': return <Video className="h-5 w-5" />;
        case 'communaute': return <Users className="h-5 w-5" />;
        default: return <Code className="h-5 w-5" />;
      }
    };

    // Helper function to get specialties array, handling both specialite and specialites
    const getSpecialties = () => {
      if (Array.isArray(ressource.specialite)) {
        return ressource.specialite;
      }
      if (Array.isArray(ressource.specialites)) {
        return ressource.specialites;
      }
      return [];
    };

    const specialties = getSpecialties();

    return (
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getTypeIcon()}
              <span className="text-lg">{ressource.title || ressource.nom || ressource.chaine}</span>
            </div>
            {ressource.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{ressource.rating}</span>
              </div>
            )}
          </CardTitle>
          {ressource.auteur && (
            <p className="text-sm text-gray-600">par {ressource.auteur}</p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">{ressource.description}</p>
          
          {ressource.niveau && (
            <div className="flex items-center gap-2">
              <Badge variant="outline">{ressource.niveau}</Badge>
              {ressource.prix && (
                <Badge className={ressource.prix === "Gratuit" || ressource.prix === "Gratuit en ligne" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                  {ressource.prix}
                </Badge>
              )}
            </div>
          )}

          {specialties.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold">Spécialités :</p>
              <div className="flex flex-wrap gap-1">
                {specialties.map((spec: string) => (
                  <Badge key={spec} variant="secondary" className="text-xs">{spec}</Badge>
                ))}
              </div>
            </div>
          )}

          {ressource.avantages && Array.isArray(ressource.avantages) && (
            <div className="space-y-2">
              <p className="text-sm font-semibold">Avantages :</p>
              <ul className="text-xs space-y-1">
                {ressource.avantages.map((avantage: string, idx: number) => (
                  <li key={idx}>• {avantage}</li>
                ))}
              </ul>
            </div>
          )}

          {ressource.mustWatch && Array.isArray(ressource.mustWatch) && (
            <div className="space-y-2">
              <p className="text-sm font-semibold">À regarder absolument :</p>
              <ul className="text-xs space-y-1">
                {ressource.mustWatch.map((video: string, idx: number) => (
                  <li key={idx}>• {video}</li>
                ))}
              </ul>
            </div>
          )}

          {ressource.subscribers && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{ressource.subscribers} abonnés</span>
            </div>
          )}

          {ressource.membres && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{ressource.membres} membres</span>
            </div>
          )}

          <Button asChild className="w-full mt-auto">
            <a href={ressource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Accéder à la ressource
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="resources" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">📚 Ressources d'Apprentissage : Votre Bibliothèque de Croissance</h2>
      
      <CourseHighlight title="🎯 Comment utiliser ces ressources efficacement ?" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">👶 Si vous débutez :</h4>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Commencez par Kaggle Learn (gratuit)</li>
              <li>Lisez "Python for Data Analysis" en parallèle</li>
              <li>Regardez 3Blue1Brown pour les maths</li>
              <li>Pratiquez avec les datasets Kaggle</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🚀 Si vous avez des bases :</h4>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>Investissez dans DataCamp ou Coursera</li>
              <li>Rejoignez les communautés Reddit/Stack Overflow</li>
              <li>Participez aux compétitions Kaggle</li>
              <li>Construisez un portfolio sur GitHub</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      <Tabs defaultValue="livres" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="livres">📖 Livres</TabsTrigger>
          <TabsTrigger value="plateformes">🎓 Plateformes</TabsTrigger>
          <TabsTrigger value="youtube">📺 YouTube</TabsTrigger>
          <TabsTrigger value="communautes">👥 Communautés</TabsTrigger>
        </TabsList>

        <TabsContent value="livres" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">📖 Livres Incontournables</h3>
            <p className="text-gray-600">
              Sélection des ouvrages les plus recommandés par la communauté data science mondiale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ressources.livres.map((livre, index) => (
              <ResourceCard key={index} ressource={livre} type="livre" />
            ))}
          </div>
          
          <CourseHighlight title="💡 Conseil de lecture" type="info">
            <p className="mb-2">
              <strong>Ne lisez pas tout d'un coup !</strong> Alternez entre théorie et pratique. 
              Lisez un chapitre, puis implémentez les concepts sur un petit projet.
            </p>
            <div className="bg-blue-50 p-3 rounded text-sm">
              <strong>Ordre recommandé :</strong> Python for Data Analysis → Hands-On ML → livre spécialisé selon votre domaine
            </div>
          </CourseHighlight>
        </TabsContent>

        <TabsContent value="plateformes" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">🎓 Plateformes d'Apprentissage</h3>
            <p className="text-gray-600">
              Comparaison des meilleures plateformes pour apprendre la data science en ligne.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ressources.plateformes.map((plateforme, index) => (
              <ResourceCard key={index} ressource={plateforme} type="plateforme" />
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h4 className="font-semibold mb-3">🎯 Guide de choix de plateforme</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-2"><strong>Budget serré :</strong> Kaggle Learn + YouTube</p>
                <p className="mb-2"><strong>Apprentissage structuré :</strong> DataCamp ou Coursera</p>
                <p><strong>Deep Learning focus :</strong> Fast.ai</p>
              </div>
              <div>
                <p className="mb-2"><strong>Certificats professionnels :</strong> Coursera</p>
                <p className="mb-2"><strong>Pratique intensive :</strong> DataCamp</p>
                <p><strong>Projets portfolio :</strong> Kaggle + GitHub</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="youtube" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">📺 Chaînes YouTube Exceptionnelles</h3>
            <p className="text-gray-600">
              Les créateurs qui expliquent le mieux les concepts de data science.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ressources.youtube.map((chaine, index) => (
              <ResourceCard key={index} ressource={chaine} type="youtube" />
            ))}
          </div>

          <CourseHighlight title="📺 Stratégie YouTube efficace" type="example">
            <div className="space-y-3">
              <p><strong>Routine suggérée :</strong></p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li><strong>Matin (15 min) :</strong> 3Blue1Brown pour les concepts théoriques</li>
                <li><strong>Pause déjeuner (20 min) :</strong> Corey Schafer pour la technique Python</li>
                <li><strong>Soir (30 min) :</strong> StatQuest pour le ML + Data School pour la pratique</li>
              </ul>
              <div className="bg-yellow-50 p-3 rounded text-sm">
                <strong>Pro tip :</strong> Activez les sous-titres automatiques et prenez des notes. 
                Créez un document "Concepts appris" avec timestamps des vidéos importantes.
              </div>
            </div>
          </CourseHighlight>
        </TabsContent>

        <TabsContent value="communautes" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">👥 Communautés Incontournables</h3>
            <p className="text-gray-600">
              Rejoignez la conversation mondiale de la data science et accélérez votre apprentissage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ressources.communautes.map((communaute, index) => (
              <ResourceCard key={index} ressource={communaute} type="communaute" />
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <CourseHighlight title="🤝 Comment bien utiliser les communautés" type="info">
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold">✅ Bonnes pratiques :</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Lisez les règles avant de poster</li>
                    <li>Utilisez des titres descriptifs</li>
                    <li>Partagez votre code et vos données d'exemple</li>
                    <li>Remerciez ceux qui vous aident</li>
                    <li>Aidez les autres quand vous le pouvez</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold">❌ À éviter :</h5>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Poser sans avoir cherché avant</li>
                    <li>Demander qu'on fasse le travail à votre place</li>
                    <li>Être vague dans vos questions</li>
                    <li>Ne pas donner de contexte</li>
                  </ul>
                </div>
              </div>
            </CourseHighlight>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">🆘 Besoin d'aide ?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p><strong>Stack Overflow</strong> pour les questions techniques précises avec code d'exemple.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">🧠 Discussions ?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p><strong>Reddit r/MachineLearning</strong> pour débattre des tendances et papers récents.</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">🏆 Compétition ?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p><strong>Kaggle</strong> pour améliorer vos skills avec des défis réels et datasets quality.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl border border-indigo-200">
        <h3 className="text-2xl font-bold mb-4 text-indigo-900">🗺️ Votre Feuille de Route d'Apprentissage</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h4 className="font-semibold">Fondations (1-2 mois)</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Kaggle Learn Python</li>
              <li>• "Python for Data Analysis"</li>
              <li>• 3Blue1Brown Linear Algebra</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h4 className="font-semibold">Pratique (2-3 mois)</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• DataCamp ou Coursera</li>
              <li>• Premier projet Kaggle</li>
              <li>• Rejoindre Stack Overflow</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h4 className="font-semibold">Spécialisation (3-4 mois)</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• "Hands-On ML"</li>
              <li>• Compétitions Kaggle</li>
              <li>• Communautés spécialisées</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h4 className="font-semibold">Expert (6+ mois)</h4>
            </div>
            <ul className="text-sm space-y-1">
              <li>• Recherche et veille</li>
              <li>• Contribution open source</li>
              <li>• Mentorat d'autres apprenants</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-100">
          <p className="text-sm text-indigo-700">
            <strong>💡 Rappel important :</strong> La data science est un marathon, pas un sprint. 
            Restez régulier, soyez patient avec vous-même, et célébrez chaque petite victoire ! 
            La communauté est là pour vous accompagner. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
