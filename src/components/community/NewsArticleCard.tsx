import React from "react";
import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NewsArticle {
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
  category: string;
}

interface NewsArticleCardProps {
  article: NewsArticle;
  onReadArticle: (url: string) => void;
}

/**
 * NewsArticleCard component displays a single news article with metadata and actions
 * @param props - Component props including article data and read handler
 * @returns JSX element representing a news article card
 */
const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ article, onReadArticle }) => {
  /**
   * Get category-specific styling for badges
   * @param category - Article category
   * @returns CSS classes for badge styling
   */
  const getCategoryBadgeStyle = (category: string): string => {
    switch (category) {
      case "Réglementation":
        return "bg-red-50 text-red-800 border-red-200";
      case "Données publiques":
        return "bg-green-50 text-green-800 border-green-200";
      case "Outils":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "IA":
        return "bg-violet-50 text-violet-800 border-violet-200";
      default:
        return "bg-purple-50 text-purple-800 border-purple-200";
    }
  };

  return (
    <Card className="hover:shadow-md transition-all">
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
            className={getCategoryBadgeStyle(article.category)}
          >
            {article.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" size="sm" onClick={() => onReadArticle(article.url)}>
          <ExternalLink className="h-3 w-3 mr-1" />
          Lire l'article
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(NewsArticleCard);