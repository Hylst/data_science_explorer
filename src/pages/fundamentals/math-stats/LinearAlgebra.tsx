
import React from "react";
import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { Grid3X3, Zap, RotateCcw, Maximize, Calculator, Brain } from "lucide-react";
import LinearAlgebraIntro from "./linear-algebra/LinearAlgebraIntro";
import VectorsSection from "./linear-algebra/VectorsSection";
import MatricesSection from "./linear-algebra/MatricesSection";
import OperationsSection from "./linear-algebra/OperationsSection";
import DecompositionsSection from "./linear-algebra/DecompositionsSection";
import ApplicationsSection from "./linear-algebra/ApplicationsSection";
import InteractiveExercises from "./linear-algebra/InteractiveExercises";

const LinearAlgebra = () => {
  const sidebar = {
    items: [
      { title: "Introduction", href: "#intro", icon: <Brain className="h-4 w-4" />, isActive: true },
      { title: "Vecteurs", href: "#vectors", icon: <Zap className="h-4 w-4" /> },
      { title: "Matrices", href: "#matrices", icon: <Grid3X3 className="h-4 w-4" /> },
      { title: "Opérations", href: "#operations", icon: <RotateCcw className="h-4 w-4" /> },
      { title: "Décompositions", href: "#decompositions", icon: <Maximize className="h-4 w-4" /> },
      { title: "Applications", href: "#applications", icon: <Calculator className="h-4 w-4" /> },
      { title: "Exercices", href: "#exercises", icon: <Calculator className="h-4 w-4" /> }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Algèbre Linéaire"
          description="Le langage universel du machine learning : vecteurs, matrices et transformations expliqués simplement"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="space-y-16">
            <LinearAlgebraIntro />
            <VectorsSection />
            <MatricesSection />
            <OperationsSection />
            <DecompositionsSection />
            <ApplicationsSection />
            <InteractiveExercises />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LinearAlgebra;
