import { ArrowRight } from "lucide-react";
import DataScienceMap from "./DataScienceMap";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";

const Hero = () => {
  return (
    <UnifiedHeroSection
      variant="home"
      title="Explorez le monde de la Data Science"
      description="Une plateforme éducative francophone et libre d'accès pour apprendre la data science. Développée progressivement par Geoffroy Streit, elle réunit les connaissances essentielles pour évoluer dans ce domaine passionnant."
      alert={{
        message: "🚧 Projet en cours de développement",
        details: "En tant qu'apprenant, compiler ces cours m'aide à mieux synthétiser, retenir et mettre en application mes connaissances tout en les rendant accessibles à la communauté.",
        variant: "info"
      }}
      actions={[
        {
          label: "Commencer l'aventure",
          to: "/introduction",
          variant: "default",
          icon: ArrowRight
        },
        {
          label: "Découvrir les cours",
          to: "/courses",
          variant: "outline"
        }
      ]}
      sideContent={<DataScienceMap />}
      layout="split"
      decorative={true}
    />
  );
};

export default Hero;
