
import React, { useState } from "react";
import { statisticsDefinitions } from "./definitions/statistics-definitions";
import { programmingDefinitions } from "./definitions/programming-definitions";
import { datavizDefinitions } from "./definitions/dataviz-definitions";
import { dataProcessingDefinitions } from "./definitions/data-processing-definitions";
import { GlossaryTerm, GlossaryTermDefinition } from "@/components/ui/glossary-term";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen } from "lucide-react";

// Combiner tous les termes du glossaire
const allDefinitions = {
  ...statisticsDefinitions,
  ...programmingDefinitions,
  ...datavizDefinitions,
  ...dataProcessingDefinitions
};

type Category = "all" | "statistics" | "programming" | "dataviz" | "dataprocessing";

const GlossaryTermsBank = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("all");

  const getFilteredDefinitions = (): [string, GlossaryTermDefinition][] => {
    const searchLower = search.toLowerCase();
    
    let definitions: Record<string, GlossaryTermDefinition> = {};
    
    // Filtrer par catégorie
    switch(category) {
      case "statistics":
        definitions = statisticsDefinitions;
        break;
      case "programming":
        definitions = programmingDefinitions;
        break;
      case "dataviz":
        definitions = datavizDefinitions;
        break;
      case "dataprocessing":
        definitions = dataProcessingDefinitions;
        break;
      default:
        definitions = allDefinitions;
    }
    
    // Filtrer par texte de recherche
    return Object.entries(definitions)
      .filter(([key, def]) => 
        searchLower === "" || 
        def.term.toLowerCase().includes(searchLower) || 
        def.shortDefinition.toLowerCase().includes(searchLower)
      )
      .sort((a, b) => a[1].term.localeCompare(b[1].term));
  };

  const filteredDefinitions = getFilteredDefinitions();

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 my-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-ds-blue-500" />
        <h3 className="text-lg font-semibold">Banque de termes techniques</h3>
      </div>
      
      <div className="mb-4 relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Rechercher un terme..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <Tabs defaultValue="all" onValueChange={(value) => setCategory(value as Category)}>
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="statistics">Statistiques</TabsTrigger>
          <TabsTrigger value="programming">Programmation</TabsTrigger>
          <TabsTrigger value="dataviz">Visualisation</TabsTrigger>
          <TabsTrigger value="dataprocessing">Traitement</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <TermsList definitions={filteredDefinitions} />
        </TabsContent>
        
        <TabsContent value="statistics" className="mt-0">
          <TermsList definitions={filteredDefinitions} />
        </TabsContent>
        
        <TabsContent value="programming" className="mt-0">
          <TermsList definitions={filteredDefinitions} />
        </TabsContent>
        
        <TabsContent value="dataviz" className="mt-0">
          <TermsList definitions={filteredDefinitions} />
        </TabsContent>
        
        <TabsContent value="dataprocessing" className="mt-0">
          <TermsList definitions={filteredDefinitions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const TermsList = ({ definitions }: { definitions: [string, GlossaryTermDefinition][] }) => {
  if (definitions.length === 0) {
    return <p className="text-center py-4 text-gray-500">Aucun terme correspondant trouvé</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {definitions.map(([key, definition]) => (
        <div key={key} className="border rounded-md p-3 hover:bg-gray-50 transition-colors">
          <GlossaryTerm definition={definition}>
            <h4 className="font-medium text-ds-blue-600 cursor-pointer hover:underline">{definition.term}</h4>
          </GlossaryTerm>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{definition.shortDefinition}</p>
        </div>
      ))}
    </div>
  );
};

export default GlossaryTermsBank;
