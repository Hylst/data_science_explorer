
import React from "react";
import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { ChartBar, Target, Brain, TestTube, Zap, Calculator } from "lucide-react";
import AdvancedStatsIntro from "./advanced-statistics/AdvancedStatsIntro";
import HypothesisTestingSection from "./advanced-statistics/HypothesisTestingSection";
import ConfidenceIntervalsSection from "./advanced-statistics/ConfidenceIntervalsSection";
import ANOVASection from "./advanced-statistics/ANOVASection";
import RegressionSection from "./advanced-statistics/RegressionSection";
import BayesianStatisticsSection from "./advanced-statistics/BayesianStatisticsSection";
import PracticalApplicationsSection from "./advanced-statistics/PracticalApplicationsSection";

const AdvancedStatistics = () => {
  const sidebar = {
    items: [
      { title: "Introduction", href: "#intro", icon: <ChartBar className="h-4 w-4" />, isActive: true },
      { title: "Tests d'hypothèses", href: "#hypothesis-testing", icon: <TestTube className="h-4 w-4" /> },
      { title: "Intervalles de confiance", href: "#confidence-intervals", icon: <Target className="h-4 w-4" /> },
      { title: "ANOVA", href: "#anova", icon: <Calculator className="h-4 w-4" /> },
      { title: "Régression avancée", href: "#regression", icon: <Brain className="h-4 w-4" /> },
      { title: "Statistiques bayésiennes", href: "#bayesian", icon: <Zap className="h-4 w-4" /> },
      { title: "Applications", href: "#applications", icon: <Target className="h-4 w-4" /> }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Statistiques Avancées"
          description="Maîtrisez les techniques statistiques avancées pour l'analyse de données complexes et la prise de décision éclairée"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="space-y-16">
            <AdvancedStatsIntro />
            <HypothesisTestingSection />
            <ConfidenceIntervalsSection />
            <ANOVASection />
            <RegressionSection />
            <BayesianStatisticsSection />
            <PracticalApplicationsSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdvancedStatistics;
