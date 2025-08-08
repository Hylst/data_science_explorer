import React from "react";
import { Search, Filter, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewsFiltersProps {
  selectedRssSource: string;
  onSourceChange: (source: string) => void;
  newsFilter: string;
  onFilterChange: (filter: string) => void;
  isLoading: boolean;
  onRefresh: () => void;
  rssSources: Array<{
    name: string;
    url: string;
    description: string;
    language: string;
    category: string;
  }>;
}

/**
 * NewsFilters component handles search, filtering, and refresh functionality for news articles
 * @param props - Component props including filter states and handlers
 * @returns JSX element containing filter controls
 */
const NewsFilters: React.FC<NewsFiltersProps> = ({
  selectedRssSource,
  onSourceChange,
  newsFilter,
  onFilterChange,
  isLoading,
  onRefresh,
  rssSources
}) => {
  return (
    <>
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
          <Select value={selectedRssSource} onValueChange={onSourceChange}>
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
          onClick={onRefresh}
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
          onClick={() => onFilterChange("all")}
        >
          Tous
        </Badge>
        <Badge 
          variant={newsFilter === "ia" ? "default" : "outline"} 
          className="cursor-pointer"
          onClick={() => onFilterChange("ia")}
        >
          IA
        </Badge>
        <Badge 
          variant={newsFilter === "tools" ? "default" : "outline"} 
          className="cursor-pointer"
          onClick={() => onFilterChange("tools")}
        >
          Outils
        </Badge>
        <Badge 
          variant={newsFilter === "regulation" ? "default" : "outline"} 
          className="cursor-pointer"
          onClick={() => onFilterChange("regulation")}
        >
          Réglementation
        </Badge>
      </div>
    </>
  );
};

export default React.memo(NewsFilters);