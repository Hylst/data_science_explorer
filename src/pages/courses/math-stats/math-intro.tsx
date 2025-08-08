
import React from "react";
import Layout from "@/components/layout/Layout";
import MathIntroContent from "./components/MathIntroContent";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { BookOpen, Brain, Calculator, Target, TrendingUp, Lightbulb } from "lucide-react";

const MathIntroCourse = () => {
  const sidebar = {
    items: [
      { 
        title: "Introduction", 
        href: "#intro",
        icon: <Lightbulb className="h-4 w-4" />,
        isActive: true
      },
      { 
        title: "Importance des mathématiques", 
        href: "#importance",
        icon: <Brain className="h-4 w-4" />
      },
      { 
        title: "Fondements essentiels", 
        href: "#fondements",
        icon: <Calculator className="h-4 w-4" />
      },
      { 
        title: "Applications pratiques", 
        href: "#applications",
        icon: <Target className="h-4 w-4" />
      },
      { 
        title: "Parcours d'apprentissage", 
        href: "#parcours",
        icon: <TrendingUp className="h-4 w-4" />
      }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="course"
          title="Introduction aux Mathématiques"
          description="Découvrez les fondements mathématiques essentiels pour exceller en Data Science"
          
          courseInfo={{
            level: "Débutant",
            duration: "2-3 heures",
            modules: 5
          }}
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <MathIntroContent />
        </div>
      </div>
    </Layout>
  );
};

export default MathIntroCourse;
