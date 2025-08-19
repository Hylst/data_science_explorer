
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Rss } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NewsFilters from "./NewsFilters";
import NewsArticleCard from "./NewsArticleCard";
import RSSSourceCard from "./RSSSourceCard";
import rssSourcesData from "@/data/rss-sources.json";
import rssArticlesData from "@/data/rss-articles.json";

// Interface for RSS source structure
interface RSSSource {
  name: string;
  url: string;
  description: string;
  language: string;
  category: string;
}

const ActuSection = () => {
  const [newsFilter, setNewsFilter] = useState("all");
  const [selectedRssSource, setSelectedRssSource] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("articles");
  const { toast } = useToast();

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

  const rssSources = rssSourcesData;

  const rssArticles = rssArticlesData;

  // Filtrer les articles selon la source sélectionnée
  const filteredArticles = selectedRssSource === "all" 
    ? rssArticles 
    : rssArticles.filter(article => article.source === selectedRssSource);

  /**
   * Handle RSS source subscription
   * @param source - RSS source to subscribe to
   */
  const handleSubscribeToRss = (source: RSSSource) => {
    // In a complete version, this would handle actual RSS subscription
    console.log(`Subscribing to ${source.name}`);
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
          <NewsFilters
          selectedRssSource={selectedRssSource}
          onSourceChange={setSelectedRssSource}
          newsFilter={newsFilter}
          onFilterChange={setNewsFilter}
          isLoading={isLoading}
          onRefresh={refreshNews}
          rssSources={rssSources}
        />

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
                <NewsArticleCard
                  key={index}
                  article={article}
                  onReadArticle={handleReadArticle}
                />
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rssSources.map((source, index) => (
              <RSSSourceCard
                key={index}
                source={source}
                onSubscribe={handleSubscribeToRss}
                onVisit={(url) => window.open(url, '_blank')}
              />
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

export default React.memo(ActuSection);
