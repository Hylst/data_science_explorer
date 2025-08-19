import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
// Supprimer cette ligne : import { Calculator, Dice1, TrendingUp, AlertCircle, Target, Brain, Lightbulb } from "lucide-react";

// Import des nouveaux composants
import ProbabilityIntro from "./probability/components/ProbabilityIntro";
import ProbabilityBasics from "./probability/components/ProbabilityBasics";
import RandomVariables from "./probability/components/RandomVariables";

// Supprimer complètement la variable sidebar non utilisée
const ProbabilityTheory = () => {
  // Supprimer les lignes 11-19 qui définissent la variable sidebar
  
  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Théorie des Probabilités"
          description="Plongez dans l'univers fascinant de l'incertitude et découvrez comment quantifier et maîtriser le hasard"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <ProbabilityIntro />
          <ProbabilityBasics />
          <RandomVariables />

          {/* Les autres sections seront ajoutées dans les prochains composants */}
          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200 text-center">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">🚧 Contenu en construction</h3>
            <p className="text-yellow-700">
              Les sections sur les distributions, le théorème de Bayes et les applications pratiques 
              seront ajoutées dans les prochains composants pour maintenir une structure modulaire.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProbabilityTheory;
