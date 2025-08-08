
import React, { useState } from "react";
import { Rss, Calendar, ExternalLink, Search, Filter, RefreshCw, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const ActuSection = () => {
  const [newsFilter, setNewsFilter] = useState("all");
  const [selectedRssSource, setSelectedRssSource] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("articles");
  const navigate = useNavigate();

  // Fonction pour simuler le chargement de nouvelles actualités
  const refreshNews = () => {
    setIsLoading(true);
    
    // Simuler un temps de chargement
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Flux mis à jour",
        description: "Les actualités ont été mises à jour avec succès.",
      });
    }, 1500);
  };

  const handleReadArticle = (url: string) => {
    // Dans une vraie application, on redirigerait vers l'article
    toast({
      title: "Navigation externe",
      description: "Dans une version complète, vous seriez redirigé vers " + url,
    });
    // On pourrait aussi ouvrir une nouvelle fenêtre: window.open(url, '_blank');
  };

  const handleLoadMoreArticles = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Chargement terminé",
        description: "De nouveaux articles ont été chargés.",
      });
    }, 1000);
  };

  const rssSources = [
    {
      name: "Data.gouv.fr",
      url: "https://www.data.gouv.fr/fr/datasets/recent.atom",
      description: "Le portail officiel des données publiques en France",
      language: "Français",
      category: "Données publiques"
    },
    {
      name: "DataScientest Blog",
      url: "https://datascientest.com/feed/",
      description: "Articles, tutoriels et analyses sur la data science, expliqués en français",
      language: "Français",
      category: "Formation"
    },
    {
      name: "Le Big Data",
      url: "https://www.lebigdata.fr/feed",
      description: "Actualités et analyses autour du big data et de la data science",
      language: "Français",
      category: "Actualités"
    },
    {
      name: "KDnuggets",
      url: "https://www.kdnuggets.com/feed",
      description: "Articles sur le machine learning et la data science par des experts du secteur",
      language: "Anglais",
      category: "Expertise"
    },
    {
      name: "OpenAI Blog",
      url: "https://openai.com/index.xml",
      description: "Les dernières nouveautés et recherches d'OpenAI",
      language: "Anglais",
      category: "IA"
    },
    {
      name: "Towards Data Science",
      url: "https://towardsdatascience.com/feed",
      description: "Plateforme de partage d'idées et expériences en data science",
      language: "Anglais",
      category: "Communauté"
    }
  ];

  const rssArticles = [
    {
      title: "Lancement du hub de données satellitaires pour la recherche environnementale",
      source: "Data.gouv.fr",
      date: "1 avril 2025",
      url: "https://www.data.gouv.fr/fr/satellite-hub-2025",
      excerpt: "Nouveau portail centralisant toutes les données satellitaires françaises avec API ouverte pour les chercheurs et développeurs.",
      category: "Données publiques"
    },
    {
      title: "Comment optimiser vos pipelines ML pour réduire l'empreinte carbone",
      source: "DataScientest Blog",
      date: "30 mars 2025",
      url: "https://datascientest.com/ml-carbon-footprint",
      excerpt: "Techniques pratiques pour réduire jusqu'à 60% la consommation énergétique de vos modèles d'apprentissage sans sacrifier la performance.",
      category: "Durabilité"
    },
    {
      title: "L'UE adopte de nouvelles normes pour les modèles d'IA à usage critique",
      source: "Le Big Data",
      date: "29 mars 2025",
      url: "https://www.lebigdata.fr/ue-normes-ia-2025",
      excerpt: "La Commission Européenne a adopté de nouvelles normes pour les modèles d'IA dans les secteurs sensibles comme la santé et la justice.",
      category: "Réglementation"
    },
    {
      title: "OpenAI dévoile GPT-5 avec des capacités multimodales avancées",
      source: "OpenAI Blog",
      date: "28 mars 2025",
      url: "https://openai.com/blog/gpt-5",
      excerpt: "GPT-5 établit de nouveaux records sur tous les benchmarks et introduit des capacités inédites de raisonnement visuel et spatial.",
      category: "IA"
    },
    {
      title: "AWS lance de nouveaux outils pour la data science collaborative",
      source: "DataScientest Blog",
      date: "22 mars 2025",
      url: "https://datascientest.com/aws-tools-data-science-2025",
      excerpt: "Amazon Web Services propose de nouvelles fonctionnalités pour faciliter la collaboration des équipes data en environnement cloud.",
      category: "Outils"
    },
    {
      title: "Les modèles multimodaux transforment l'analyse prédictive en 2025",
      source: "KDnuggets",
      date: "18 mars 2025",
      url: "https://www.kdnuggets.com/multimodal-models-2025",
      excerpt: "L'intégration de données de différentes natures (texte, image, audio) dans les modèles prédictifs révolutionne les performances analytiques.",
      category: "Tendances"
    }
  ];

  // Filtrer les articles selon la source sélectionnée
  const filteredArticles = selectedRssSource === "all" 
    ? rssArticles 
    : rssArticles.filter(article => article.source === selectedRssSource);

  const handleViewSourceArticles = (sourceName: string) => {
    setSelectedRssSource(sourceName);
    setActiveTab("articles");
  };

  return (
    <div id="actu" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Actualités Data Science</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Restez informé des dernières tendances et avancées en data science grâce à notre agrégateur 
          de flux RSS. Consultez les articles récents et découvrez de nouvelles sources d'information.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="articles">Articles récents</TabsTrigger>
          <TabsTrigger value="sources">Sources RSS</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          <div className="mb-6 flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Rechercher dans les actualités..." 
                className="pl-9 w-full"
              />
            </div>
            
            <div className="w-full lg:w-64">
              <Select value={selectedRssSource} onValueChange={setSelectedRssSource}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les sources</SelectItem>
                  {rssSources.map((source, index) => (
                    <SelectItem key={index} value={source.name}>
                      {source.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              className="lg:w-auto" 
              onClick={refreshNews}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Mise à jour..." : "Rafraîchir"}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Badge 
              variant={newsFilter === "all" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setNewsFilter("all")}
            >
              Tous
            </Badge>
            <Badge 
              variant={newsFilter === "ia" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setNewsFilter("ia")}
            >
              IA
            </Badge>
            <Badge 
              variant={newsFilter === "tools" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setNewsFilter("tools")}
            >
              Outils
            </Badge>
            <Badge 
              variant={newsFilter === "regulation" ? "default" : "outline"} 
              className="cursor-pointer"
              onClick={() => setNewsFilter("regulation")}
            >
              Réglementation
            </Badge>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center border rounded-lg">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-4">
                Aucun article ne correspond à vos critères de recherche.
              </p>
              <Button variant="outline" onClick={() => setSelectedRssSource("all")}>
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
                      <span>{article.source}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{article.date}</span>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          article.category === "Réglementation" ? "bg-red-50 text-red-800 border-red-200" :
                          article.category === "Données publiques" ? "bg-green-50 text-green-800 border-green-200" :
                          article.category === "Outils" ? "bg-blue-50 text-blue-800 border-blue-200" :
                          article.category === "IA" ? "bg-violet-50 text-violet-800 border-violet-200" :
                          "bg-purple-50 text-purple-800 border-purple-200"
                        }
                      >
                        {article.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" size="sm" onClick={() => handleReadArticle(article.url)}>
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Lire l'article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" onClick={handleLoadMoreArticles} disabled={isLoading}>
              {isLoading ? "Chargement..." : "Charger plus d'articles"}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="sources">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rssSources.map((source, index) => (
              <Card key={index} className="hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{source.name}</CardTitle>
                    <Rss className="h-5 w-5 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm mb-3">{source.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="outline">{source.language}</Badge>
                    <Badge 
                      className={
                        source.category === "Données publiques" ? "bg-green-100 text-green-800" : 
                        source.category === "Formation" ? "bg-blue-100 text-blue-800" : 
                        source.category === "Actualités" ? "bg-purple-100 text-purple-800" : 
                        source.category === "Expertise" ? "bg-amber-100 text-amber-800" :
                        source.category === "IA" ? "bg-violet-100 text-violet-800" :
                        "bg-gray-100 text-gray-800"
                      }
                    >
                      {source.category}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => toast({
                    title: "Abonnement au flux",
                    description: `Dans une version complète, vous seriez abonné au flux de ${source.name}`
                  })}>
                    <Rss className="h-3 w-3 mr-1" />
                    S'abonner
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleViewSourceArticles(source.name)}
                  >
                    Voir les articles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100 mt-8">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full">
                <Rss className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Suggérer un flux RSS</h3>
                <p className="text-sm mb-4">
                  Vous connaissez une bonne source d'informations sur la data science ?
                  Partagez-la avec la communauté en nous suggérant un nouveau flux RSS.
                </p>
                <Button variant="outline" size="sm" onClick={() => toast({
                  title: "Suggestion de flux RSS",
                  description: "Dans une version complète, vous pourriez suggérer un nouveau flux RSS"
                })}>
                  Proposer un flux
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActuSection;
