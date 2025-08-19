import { ArrowRight } from "lucide-react";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";

const Hero = () => {
  return (
    <UnifiedHeroSection
      variant="home"
      title="Apprendre la Data Science Ensemble"
      description="Un projet personnel de partage de connaissances en data science. Créé par Geoffroy Streit, actuellement en reconversion professionnelle, ce site rassemble mes apprentissages et découvertes dans ce domaine fascinant."
      alert={{
        message: "📚 Projet d'apprentissage partagé",
        details: "En tant qu'apprenant en reconversion, je partage ici mes notes, synthèses et projets pour aider d'autres personnes dans leur parcours d'apprentissage de la data science.",
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
      layout="centered"
      decorative={true}
    />
  );
};

export default Hero;
