
import { SearchIcon } from "lucide-react";

interface GlossaryHeaderProps {
  onSearch?: (query: string) => void;
}

const GlossaryHeader = ({ onSearch }: GlossaryHeaderProps) => {
  return (
    <div className="text-center space-y-6 mb-12">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-ds-purple-600 bg-clip-text text-transparent">
        Glossaire de la Data Science
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
        Explorez les concepts clés de la data science, de l'apprentissage automatique, 
        des statistiques et de l'intelligence artificielle. Chaque définition a été 
        soigneusement rédigée pour vous guider vers une compréhension approfondie.
      </p>
      <div className="relative max-w-xl mx-auto">
        <input
          type="search"
          placeholder="Rechercher une définition..."
          className="w-full px-4 py-2 pl-10 rounded-lg border bg-background/50 backdrop-blur-sm"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
      </div>
    </div>
  );
};

export default GlossaryHeader;
