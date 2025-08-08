
import ContentLayout from "@/components/layout/ContentLayout";
import ToolsContent from "@/components/tools/ToolsContent";
import { ToolsSidebar } from "@/components/tools/ToolsSidebar";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { Wrench } from "lucide-react";

const Tools = () => {
  const sidebar = ToolsSidebar();

  return (
    <ContentLayout 
      title="Outils de Data Science" 
      backLink={{ href: "/", label: "Retour à l'accueil" }}
      sidebar={sidebar}
    >
      <section className="w-full">
        <UnifiedHeroSection
          variant="page"
          title="Outils de Data Science"
          description="Découvrez l'écosystème complet des technologies qui alimentent la révolution des données : langages, frameworks, plateformes et outils de visualisation pour transformer vos données en insights actionnable."
          icon={Wrench}
        />
        <div className="container mx-auto px-4 py-8">
          <ToolsContent section="overview" />
        </div>
      </section>
    </ContentLayout>
  );
};

export default Tools;
