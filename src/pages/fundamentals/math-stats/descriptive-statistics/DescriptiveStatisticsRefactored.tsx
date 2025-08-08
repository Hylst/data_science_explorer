
import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ChartBar, TrendingUp, Calculator, BarChart3 } from "lucide-react";

// Import des nouveaux composants
import DescriptiveStatsIntro from "./components/DescriptiveStatsIntro";
import CentralTendencySection from "./components/CentralTendencySection";

const DescriptiveStatisticsRefactored = () => {
  const sidebar = {
    items: [
      { title: "Introduction", href: "#intro", icon: <ChartBar className="h-4 w-4" />, isActive: true },
      { title: "Mesures centrales", href: "#central", icon: <ChartBar className="h-4 w-4" /> },
      { title: "Mesures de dispersion", href: "#dispersion", icon: <BarChart3 className="h-4 w-4" /> },
      { title: "Corrélation", href: "#correlation", icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Visualisation", href: "#visualization", icon: <Calculator className="h-4 w-4" /> },
      { title: "Applications", href: "#applications", icon: <Calculator className="h-4 w-4" /> }
    ]
  };

  return (
    <ContentLayout 
      title="Statistiques Descriptives" 
      backLink={{ href: "/fundamentals/math-stats", label: "Retour aux mathématiques" }}
      sidebar={sidebar}
    >
      <PageHeader
        title="Statistiques Descriptives"
        description="Apprenez à résumer et analyser vos données avec les outils statistiques fondamentaux"
      />

      <DescriptiveStatsIntro />
      <CentralTendencySection />

      {/* Les autres sections seront ajoutées dans les prochains composants */}
      <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200 text-center">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">🚧 Contenu en construction</h3>
        <p className="text-yellow-700">
          Les sections sur les mesures de dispersion, corrélation, visualisation et applications 
          seront ajoutées dans les prochains composants pour maintenir une structure modulaire et lisible.
        </p>
      </div>
    </ContentLayout>
  );
};

export default DescriptiveStatisticsRefactored;
