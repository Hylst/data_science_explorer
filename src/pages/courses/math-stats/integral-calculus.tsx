
import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import IntegralCalculusContent from "@/pages/fundamentals/math-stats/integral-calculus/IntegralCalculusContent";
import { BookOpen, Calculator, Target, TrendingUp, Lightbulb, Settings } from "lucide-react";

const IntegralCalculusCourse = () => {
  const sidebar = {
    items: [
      { 
        title: "Introduction", 
        href: "#introduction",
        icon: <Lightbulb className="h-4 w-4" />,
        isActive: true
      },
      { 
        title: "Concepts fondamentaux", 
        href: "#concepts",
        icon: <Calculator className="h-4 w-4" />
      },
      { 
        title: "Techniques d'intégration", 
        href: "#techniques",
        icon: <Settings className="h-4 w-4" />
      },
      { 
        title: "Applications", 
        href: "#applications",
        icon: <Target className="h-4 w-4" />
      },
      { 
        title: "Exercices pratiques", 
        href: "#exercices",
        icon: <BookOpen className="h-4 w-4" />
      }
    ]
  };

  return (
    <ContentLayout 
      title="Calcul Intégral" 
      backLink={{ href: "/fundamentals/math-stats", label: "Retour aux cours" }}
      sidebar={sidebar}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Calcul Intégral
        </h1>
        <p className="text-xl text-gray-600">
          Maîtrisez les intégrales et leurs applications en statistiques et probabilités
        </p>
      </div>
      
      <IntegralCalculusContent />
    </ContentLayout>
  );
};

export default IntegralCalculusCourse;
