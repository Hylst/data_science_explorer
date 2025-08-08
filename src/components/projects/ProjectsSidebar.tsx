
import React from "react";
import { 
  Target, 
  BarChart3, 
  Brain, 
  Zap, 
  Image, 
  Globe, 
  Database, 
  TrendingUp, 
  Users,
  Search,
  Star,
  Filter,
  BookOpen,
  Award,
  Settings,
  Rocket,
  Trophy,
  Code
} from "lucide-react";

export type ProjectsSectionType = "overview" | "featured" | "categories" | "beginner" | "intermediate" | "advanced" | "collaborative" | "search" | "stats" | "certifications";

interface ProjectsSidebarProps {
  currentSection: ProjectsSectionType;
  onSectionChange: (section: ProjectsSectionType) => void;
}

const ProjectsSidebar = ({ currentSection, onSectionChange }: ProjectsSidebarProps) => {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const sidebarItems = [
    { 
      title: "Vue d'ensemble", 
      href: "#overview", 
      isActive: currentSection === "overview",
      icon: <BookOpen className="h-4 w-4" />,
      section: "overview" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("overview" as ProjectsSectionType);
        scrollToSection("overview");
      }
    },
    { 
      title: "Statistiques", 
      href: "#stats", 
      isActive: currentSection === "stats",
      icon: <BarChart3 className="h-4 w-4" />,
      section: "stats" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("stats" as ProjectsSectionType);
        scrollToSection("stats");
      }
    },
    { 
      title: "Recherche Avancée", 
      href: "#search", 
      isActive: currentSection === "search",
      icon: <Search className="h-4 w-4" />,
      section: "search" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("search" as ProjectsSectionType);
        scrollToSection("search");
      }
    },
    { 
      title: "Catégories", 
      href: "#categories", 
      isActive: currentSection === "categories",
      icon: <Filter className="h-4 w-4" />,
      section: "categories" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("categories" as ProjectsSectionType);
        scrollToSection("categories");
      }
    },
    { 
      title: "Projets en vedette", 
      href: "#featured", 
      isActive: currentSection === "featured",
      icon: <Trophy className="h-4 w-4" />,
      section: "featured" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("featured" as ProjectsSectionType);
        scrollToSection("featured");
      }
    },
    { 
      title: "Projets débutants", 
      href: "#beginner", 
      isActive: currentSection === "beginner",
      icon: <Target className="h-4 w-4" />,
      section: "beginner" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("beginner" as ProjectsSectionType);
        scrollToSection("beginner");
      }
    },
    { 
      title: "Projets intermédiaires", 
      href: "#intermediate", 
      isActive: currentSection === "intermediate",
      icon: <TrendingUp className="h-4 w-4" />,
      section: "intermediate" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("intermediate" as ProjectsSectionType);
        scrollToSection("intermediate");
      }
    },
    { 
      title: "Projets avancés", 
      href: "#advanced", 
      isActive: currentSection === "advanced",
      icon: <Rocket className="h-4 w-4" />,
      section: "advanced" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("advanced" as ProjectsSectionType);
        scrollToSection("advanced");
      }
    },
    { 
      title: "Projets collaboratifs", 
      href: "#collaborative", 
      isActive: currentSection === "collaborative",
      icon: <Users className="h-4 w-4" />,
      section: "collaborative" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("collaborative" as ProjectsSectionType);
        scrollToSection("collaborative");
      }
    },
    { 
      title: "Certifications", 
      href: "#certifications", 
      isActive: currentSection === "certifications",
      icon: <Award className="h-4 w-4" />,
      section: "certifications" as ProjectsSectionType,
      onClick: () => {
        onSectionChange("certifications" as ProjectsSectionType);
        scrollToSection("certifications");
      }
    }
  ];

  return { items: sidebarItems };
};

export default ProjectsSidebar;
