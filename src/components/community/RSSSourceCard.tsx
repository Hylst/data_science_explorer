import { Globe, Plus, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RSSSource {
  name: string;
  url: string;
  description: string;
  language: string;
  category: string;
}

interface RSSSourceCardProps {
  source: RSSSource;
  onSubscribe: (source: RSSSource) => void;
  onVisit: (url: string) => void;
}

/**
 * RSSSourceCard component displays an RSS source with subscription and visit actions
 * @param props - Component props including source data and action handlers
 * @returns JSX element representing an RSS source card
 */
const RSSSourceCard: React.FC<RSSSourceCardProps> = ({ source, onSubscribe, onVisit }) => {
  /**
   * Get language-specific styling for badges
   * @param language - Source language
   * @returns CSS classes for badge styling
   */
  const getLanguageBadgeStyle = (language: string): string => {
    switch (language) {
      case "Français":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Anglais":
        return "bg-green-50 text-green-800 border-green-200";
      default:
        return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

  /**
   * Get category-specific styling for badges
   * @param category - Source category
   * @returns CSS classes for badge styling
   */
  const getCategoryBadgeStyle = (category: string): string => {
    switch (category) {
      case "Actualités générales":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "Recherche":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "Outils":
        return "bg-cyan-50 text-cyan-800 border-cyan-200";
      case "Communauté":
        return "bg-pink-50 text-pink-800 border-pink-200";
      default:
        return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Globe className="h-5 w-5 mr-2 text-blue-600" />
          {source.name}
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant="outline"
            className={getLanguageBadgeStyle(source.language)}
          >
            {source.language}
          </Badge>
          <Badge 
            variant="outline"
            className={getCategoryBadgeStyle(source.category)}
          >
            {source.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{source.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onVisit(source.url)}
          className="flex-1"
        >
          <ExternalLink className="h-3 w-3 mr-1" />
          Visiter
        </Button>
        <Button 
          size="sm" 
          onClick={() => onSubscribe(source)}
          className="flex-1"
        >
          <Plus className="h-3 w-3 mr-1" />
          S'abonner
        </Button>
      </CardFooter>
    </Card>
  );
};

import { memo } from 'react';
export default memo(RSSSourceCard);
