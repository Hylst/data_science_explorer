
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, X, Filter } from "lucide-react";

interface AdvancedProjectSearchProps {
  onSearchChange: (filters: SearchFilters) => void;
}

interface SearchFilters {
  query: string;
  level: string;
  category: string;
  duration: string;
  technologies: string[];
  status: string;
}

const technologies = [
  "Python", "R", "SQL", "JavaScript", "Java", "Scala",
  "TensorFlow", "PyTorch", "Keras", "scikit-learn",
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly",
  "Apache Spark", "Hadoop", "Docker", "Kubernetes",
  "AWS", "Azure", "GCP", "MongoDB", "PostgreSQL"
];

const categories = [
  "Analyse de données", "Machine Learning", "Deep Learning",
  "Computer Vision", "NLP", "Big Data", "Séries temporelles",
  "Recommandation", "Classification", "Régression", "Clustering"
];

export function AdvancedProjectSearch({ onSearchChange }: AdvancedProjectSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    level: "all",
    category: "all",
    duration: "all",
    technologies: [],
    status: "all"
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof SearchFilters, value: string | string[]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearchChange(newFilters);
  };

  const handleTechnologyToggle = (tech: string) => {
    const newTechnologies = filters.technologies.includes(tech)
      ? filters.technologies.filter(t => t !== tech)
      : [...filters.technologies, tech];
    
    handleFilterChange('technologies', newTechnologies);
  };

  const clearFilters = () => {
    const clearedFilters: SearchFilters = {
      query: "",
      level: "all",
      category: "all", 
      duration: "all",
      technologies: [],
      status: "all"
    };
    setFilters(clearedFilters);
    onSearchChange(clearedFilters);
  };

  const activeFiltersCount = Object.values(filters).flat().filter(v => 
    v !== "" && v !== "all" && (Array.isArray(v) ? v.length > 0 : true)
  ).length;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Recherche de Projets
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Barre de recherche principale */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par titre, description, technologie..."
            className="pl-10"
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
          />
        </div>

        {/* Filtres rapides */}
        <div className="flex flex-wrap gap-2">
          <Select value={filters.level} onValueChange={(value) => handleFilterChange('level', value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous niveaux</SelectItem>
              <SelectItem value="beginner">Débutant</SelectItem>
              <SelectItem value="intermediate">Intermédiaire</SelectItem>
              <SelectItem value="advanced">Avancé</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.duration} onValueChange={(value) => handleFilterChange('duration', value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Durée" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toute durée</SelectItem>
              <SelectItem value="short">1-4 heures</SelectItem>
              <SelectItem value="medium">5-12 heures</SelectItem>
              <SelectItem value="long">13+ heures</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtres avancés
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>

          {activeFiltersCount > 0 && (
            <Button variant="ghost" onClick={clearFilters} className="gap-2">
              <X className="h-4 w-4" />
              Effacer
            </Button>
          )}
        </div>

        {/* Filtres avancés */}
        {showAdvanced && (
          <div className="border-t pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Catégorie</label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes catégories</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat.toLowerCase().replace(/ /g, '-')}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Statut</label>
                <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Statut du projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous statuts</SelectItem>
                    <SelectItem value="new">Nouveau</SelectItem>
                    <SelectItem value="popular">Populaire</SelectItem>
                    <SelectItem value="trending">Tendance</SelectItem>
                    <SelectItem value="completed">Complété</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Technologies</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>
                      {filters.technologies.length === 0 
                        ? "Sélectionner des technologies" 
                        : `${filters.technologies.length} sélectionnée${filters.technologies.length > 1 ? 's' : ''}`
                      }
                    </span>
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-64 overflow-y-auto">
                  <DropdownMenuLabel>Langages & Frameworks</DropdownMenuLabel>
                  {technologies.slice(0, 10).map((tech) => (
                    <DropdownMenuCheckboxItem
                      key={tech}
                      checked={filters.technologies.includes(tech)}
                      onCheckedChange={() => handleTechnologyToggle(tech)}
                    >
                      {tech}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Outils & Plateformes</DropdownMenuLabel>
                  {technologies.slice(10).map((tech) => (
                    <DropdownMenuCheckboxItem
                      key={tech}
                      checked={filters.technologies.includes(tech)}
                      onCheckedChange={() => handleTechnologyToggle(tech)}
                    >
                      {tech}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Tags des technologies sélectionnées */}
            {filters.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {filters.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => handleTechnologyToggle(tech)}
                  >
                    {tech}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
