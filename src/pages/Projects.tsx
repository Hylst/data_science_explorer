
import { useState } from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectCategories } from "@/components/projects/ProjectCategories";
import { ProjectStats } from "@/components/projects/ProjectStats";
import { AdvancedProjectSearch } from "@/components/projects/AdvancedProjectSearch";
import { ProjectCertifications } from "@/components/projects/ProjectCertifications";
import { CollaborativeProjects } from "@/components/projects/CollaborativeProjects";
import ProjectsSidebar, { ProjectsSectionType } from "@/components/projects/ProjectsSidebar";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { useSectionTracker } from "@/hooks/use-section-tracker";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Target, 
  Trophy, 
  Users,
  TrendingUp,
  BookOpen,
  Award,
  Code
} from "lucide-react";

const Projects = () => {
  const sections: ProjectsSectionType[] = [
    "overview", "stats", "search", "categories", "featured", 
    "beginner", "intermediate", "advanced", "collaborative", "certifications"
  ];
  const { currentSection } = useSectionTracker<ProjectsSectionType>(sections);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchFilters, setSearchFilters] = useState({
    query: "",
    level: "all",
    category: "all",
    duration: "all",
    technologies: [],
    status: "all"
  });
  
  useSmoothScroll();

  const { items: sidebarItems } = ProjectsSidebar({ 
    currentSection, 
    onSectionChange: () => {} 
  });

  const handleSearchChange = (filters: any) => {
    setSearchFilters(filters);
    if (filters.query) {
      setActiveFilter(filters.query.toLowerCase());
    } else if (filters.technologies.length > 0) {
      setActiveFilter(filters.technologies[0].toLowerCase());
    } else {
      setActiveFilter("all");
    }
  };

  return (
    <ContentLayout 
      title="Projets Data Science" 
      backLink={{ href: "/tools", label: "Retour aux outils" }}
      sidebar={{ items: sidebarItems }}
    >
      <section className="py-8">
        <div id="overview">
          <UnifiedHeroSection
            variant="page"
            title="Projets Data Science"
            description="Mettez en pratique vos compétences avec des projets concrets et des défis adaptés à votre niveau. Explorez notre collection de plus de 150 projets, obtenez des certifications et rejoignez une communauté de data scientists passionnés."
          />
          
          {/* Hero Section enrichie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">150+ Projets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Du débutant à l'expert, trouvez le projet parfait pour votre niveau
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Communauté</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collaborez avec 2500+ data scientists du monde entier
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Validez vos compétences avec nos certifications reconnues
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Code className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Python, R, TensorFlow, PyTorch et bien plus encore
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-16">
          <div id="stats">
            <ProjectStats />
          </div>
          
          <div id="search">
            <AdvancedProjectSearch onSearchChange={handleSearchChange} />
          </div>
          
          <div id="categories">
            <ProjectCategories />
          </div>
          
          <div id="featured">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Projets en Vedette</h2>
                  <p className="text-muted-foreground">
                    Découvrez nos projets phares, plébiscités par la communauté et récompensés par nos experts
                  </p>
                </div>
              </div>
            </div>
            <FeaturedProject />
          </div>
          
          <div id="beginner">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Projets pour Débutants</h2>
                  <p className="text-muted-foreground mb-4">
                    Commencez votre parcours avec des projets accessibles et bien documentés. Parfait pour acquérir les bases !
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="gap-2">
                  <Target className="h-3 w-3" />
                  Guidé étape par étape
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Users className="h-3 w-3" />
                  Support communautaire
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Trophy className="h-3 w-3" />
                  Taux de réussite 85%+
                </Badge>
              </div>
              <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </div>
            <ProjectGrid filter={activeFilter} level="beginner" />
          </div>
          
          <div id="intermediate">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Projets Intermédiaires</h2>
                  <p className="text-muted-foreground mb-4">
                    Développez vos compétences avec des défis plus complexes et des datasets réels d'entreprise
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="gap-2">
                  <Code className="h-3 w-3" />
                  Techniques avancées
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Target className="h-3 w-3" />
                  Datasets réels
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Rocket className="h-3 w-3" />
                  Déploiement inclus
                </Badge>
              </div>
            </div>
            <ProjectGrid filter={activeFilter} level="intermediate" />
          </div>
          
          <div id="advanced">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Projets Avancés</h2>
                  <p className="text-muted-foreground mb-4">
                    Relevez des défis techniques de haut niveau pour les experts. Projets de niveau recherche et industrie.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="gap-2">
                  <Trophy className="h-3 w-3" />
                  Niveau expert
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Users className="h-3 w-3" />
                  Mentorat inclus
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Award className="h-3 w-3" />
                  Certification premium
                </Badge>
              </div>
            </div>
            <ProjectGrid filter={activeFilter} level="advanced" />
          </div>
          
          <div id="collaborative">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Projets Collaboratifs</h2>
                  <p className="text-muted-foreground mb-4">
                    Participez à des projets communautaires et open source qui ont un impact réel sur la société
                  </p>
                </div>
              </div>
            </div>
            <CollaborativeProjects />
          </div>

          <div id="certifications">
            <ProjectCertifications />
          </div>
        </div>
      </section>
    </ContentLayout>
  );
};

export default Projects;
