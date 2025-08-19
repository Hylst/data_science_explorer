
import { 
  Code2, 
  Database, 
  LineChart, 
  BarChart3, 
  BrainCircuit,
  BookOpen,
  GraduationCap
} from "lucide-react";

export const ToolsSidebar = () => {
  const sidebarItems = [
    {
      title: "Langages de programmation",
      href: "#programming-tools",
      icon: <Code2 className="h-4 w-4" />,
      isActive: false,
      onClick: () => {
        const element = document.getElementById("programming-tools");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    {
      title: "Outils de traitement des données",
      href: "#data-processing-tools",
      icon: <Database className="h-4 w-4" />,
      isActive: false,
      onClick: () => {
        const element = document.getElementById("data-processing-tools");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    {
      title: "Frameworks de Machine Learning",
      href: "#ml-frameworks",
      icon: <BrainCircuit className="h-4 w-4" />,
      isActive: false,
      onClick: () => {
        const element = document.getElementById("ml-frameworks");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    {
      title: "Outils de visualisation",
      href: "#visualization-tools",
      icon: <LineChart className="h-4 w-4" />,
      isActive: false,
      onClick: () => {
        const element = document.getElementById("visualization-tools");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    {
      title: "Outils de Business Intelligence",
      href: "#bi-tools",
      icon: <BarChart3 className="h-4 w-4" />,
      isActive: false,
      onClick: () => {
        const element = document.getElementById("bi-tools");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    {
      title: "Livres et publications",
      href: "/resources",
      icon: <BookOpen className="h-4 w-4" />,
      isActive: false
    },
    {
      title: "Cours et formations",
      href: "/resources",
      icon: <GraduationCap className="h-4 w-4" />,
      isActive: false
    }
  ];

  return { items: sidebarItems };
};
