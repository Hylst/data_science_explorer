
import React from "react";
import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { TrendingUp, Zap, Target, RotateCcw } from "lucide-react";
import DifferentialCalculusIntro from "./differential-calculus/DifferentialCalculusIntro";
import DerivativeConceptSection from "./differential-calculus/DerivativeConceptSection";
import DerivationRulesSection from "./differential-calculus/DerivationRulesSection";
import OptimizationSection from "./differential-calculus/OptimizationSection";
import GradientsSection from "./differential-calculus/GradientsSection";
import ExercisesSection from "./differential-calculus/ExercisesSection";

const DifferentialCalculus = () => {
  const sidebar = {
    items: [
      { title: "Introduction", href: "#intro", icon: <Target className="h-4 w-4" />, isActive: true },
      { title: "Concept de dérivée", href: "#derivatives", icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Règles de dérivation", href: "#rules", icon: <Zap className="h-4 w-4" /> },
      { title: "Optimisation", href: "#optimization", icon: <Target className="h-4 w-4" /> },
      { title: "Gradients", href: "#gradients", icon: <RotateCcw className="h-4 w-4" /> },
      { title: "Exercices", href: "#exercises", icon: <Zap className="h-4 w-4" /> }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Calcul Différentiel"
          description="Découvrez la puissance des dérivées pour l'optimisation et l'apprentissage automatique"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="space-y-16">
            <DifferentialCalculusIntro />
            <DerivativeConceptSection />
            <DerivationRulesSection />
            <OptimizationSection />
            <GradientsSection />
            <ExercisesSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DifferentialCalculus;
