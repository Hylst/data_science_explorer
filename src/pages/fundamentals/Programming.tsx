
import Layout from "@/components/layout/Layout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import ProgrammingSection from "@/components/fundamentals/ProgrammingSection";
import { createStandardSidebar } from "@/components/layout/StandardSidebar";
import { Code, BookOpen, Cpu, Database, Zap, Users, Rocket, Trophy, Terminal } from "lucide-react";

const Programming = () => {
  const sidebar = createStandardSidebar({
    currentPage: "programming",
    sections: [
      {
        title: "Introduction à la programmation",
        href: "#programming-intro",
        icon: <BookOpen className="h-4 w-4" />
      },
      {
        title: "Python pour la Data Science",
        href: "#python-masterclass", 
        icon: <Code className="h-4 w-4" />
      },
      {
        title: "Comparaison des langages",
        href: "#language-comparison",
        icon: <Cpu className="h-4 w-4" />
      },
      {
        title: "Exercices pratiques",
        href: "#practical-exercises",
        icon: <Zap className="h-4 w-4" />
      },
      {
        title: "Concepts avancés",
        href: "#advanced-concepts",
        icon: <Rocket className="h-4 w-4" />
      },
      {
        title: "Défis interactifs",
        href: "#interactive-challenges",
        icon: <Trophy className="h-4 w-4" />
      },
      {
        title: "Éditeur de code",
        href: "#code-editor",
        icon: <Terminal className="h-4 w-4" />
      },
      {
        title: "Ressources et communautés",
        href: "#resources",
        icon: <Users className="h-4 w-4" />
      }
    ]
  });

  return (
    <Layout>
      <div className="min-h-screen">
        <UnifiedHeroSection
          variant="page"
          title="La programmation en Data Science"
          description="Découvrez les langages et outils essentiels qui forment le socle technique de la data science. De l'analyse exploratoire au déploiement de modèles, maîtrisez les technologies clés du domaine."
          
        />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <ProgrammingSection />
        </div>
      </div>
    </Layout>
  );
};

export default Programming;
