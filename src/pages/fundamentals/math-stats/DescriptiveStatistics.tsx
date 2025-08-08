
import React from "react";
import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { ChartBar, TrendingUp, Calculator, BarChart3, Target, Eye } from "lucide-react";

// Import des nouveaux composants modulaires
import DescriptiveStatsIntro from "./descriptive-statistics/components/DescriptiveStatsIntro";
import CentralTendencySection from "./descriptive-statistics/components/CentralTendencySection";
import DispersionSection from "./descriptive-statistics/components/DispersionSection";
import CorrelationSection from "./descriptive-statistics/components/CorrelationSection";
import PracticalApplicationsSection from "./descriptive-statistics/components/PracticalApplicationsSection";

const DescriptiveStatistics = () => {
  const sidebar = {
    items: [
      { title: "Introduction", href: "#intro", icon: <ChartBar className="h-4 w-4" />, isActive: true },
      { title: "Tendance centrale", href: "#central", icon: <Calculator className="h-4 w-4" /> },
      { title: "Dispersion", href: "#dispersion", icon: <BarChart3 className="h-4 w-4" /> },
      { title: "Corrélation", href: "#correlation", icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Applications", href: "#applications", icon: <Target className="h-4 w-4" /> },
      { title: "Visualisation", href: "#visualization", icon: <Eye className="h-4 w-4" /> }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="Statistiques Descriptives"
          description="Maîtrisez l'art de transformer vos données en insights actionables avec les outils statistiques fondamentaux"
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <DescriptiveStatsIntro />
          <CentralTendencySection />
          <DispersionSection />
          <CorrelationSection />
          <PracticalApplicationsSection />
        </div>
      </div>
    </Layout>
  );
};

export default DescriptiveStatistics;
