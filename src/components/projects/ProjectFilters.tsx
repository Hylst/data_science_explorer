
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal } from "lucide-react";

interface ProjectFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function ProjectFilters({ activeFilter, setActiveFilter }: ProjectFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  
  const technologies = [
    "Python", "R", "SQL", "TensorFlow", "PyTorch", 
    "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Tableau"
  ];
  
  const handleTechnologyToggle = (tech: string) => {
    setSelectedTechnologies(prevTechnologies => 
      prevTechnologies.includes(tech) 
        ? prevTechnologies.filter(item => item !== tech)
        : [...prevTechnologies, tech]
    );
    
    if (!selectedTechnologies.includes(tech)) {
      setActiveFilter(tech.toLowerCase());
    } else if (selectedTechnologies.length === 1) {
      setActiveFilter("all");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      setActiveFilter(searchTerm.toLowerCase());
    }
  };
  
  return (
    <div className="flex gap-2 w-full sm:w-auto">
      <form onSubmit={handleSearch} className="flex-1 sm:w-64">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un projet..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {technologies.map((tech) => (
            <DropdownMenuCheckboxItem
              key={tech}
              checked={selectedTechnologies.includes(tech)}
              onCheckedChange={() => handleTechnologyToggle(tech)}
            >
              {tech}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
