
import React from "react";
import { Link } from "react-router-dom";
import { useMachineLearning } from "./MachineLearningContext";
import { BrainCircuit, Network, GitBranch, BarChart3, Cpu } from "lucide-react";

const MachineLearningNav = () => {
  const { activeSection, setActiveSection } = useMachineLearning();

  const navItems = [
    {
      title: "Introduction au ML",
      id: "introduction",
      icon: <BrainCircuit className="h-4 w-4" />,
    },
    {
      title: "Apprentissage supervisé",
      id: "supervised",
      icon: <Network className="h-4 w-4" />,
      href: "/machine-learning/supervised",
    },
    {
      title: "Apprentissage non supervisé",
      id: "unsupervised",
      icon: <GitBranch className="h-4 w-4" />,
      href: "/machine-learning/unsupervised",
    },
    {
      title: "Évaluation des modèles",
      id: "evaluation",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      title: "Deep Learning",
      id: "deep-learning",
      icon: <Cpu className="h-4 w-4" />,
    },
  ];

  const handleSectionChange = (sectionId: string, href?: string) => {
    if (href) {
      // Si c'est un lien vers une page séparée, ne pas faire de scroll
      return;
    }
    
    setActiveSection(sectionId);
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6">
      <div className="py-4">
        <h3 className="mb-4 text-sm font-semibold">Sections</h3>
        <div className="space-y-1">
          {navItems.map((item) => (
            item.href ? (
              <Link
                key={item.id}
                to={item.href}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id, item.href)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors ${
                  activeSection === item.id ? "bg-sidebar-accent font-medium" : ""
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            )
          ))}
        </div>
      </div>

      <div className="py-2">
        <h3 className="mb-4 text-sm font-semibold">Ressources</h3>
        <div className="space-y-1">
          <Link
            to="https://scikit-learn.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            Documentation Scikit-learn
          </Link>
          <Link
            to="https://www.tensorflow.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            TensorFlow
          </Link>
          <Link
            to="https://pytorch.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
          >
            PyTorch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningNav;
