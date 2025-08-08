import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AnimatedLogo from "@/components/ui/animated-logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Introduction", path: "/introduction" },
    { 
      name: "Fondamentaux", 
      path: "/fundamentals",
      subItems: [
        { name: "Traiter les données", path: "/fundamentals/data-preparation" },
        { name: "Maths & Stats", path: "/fundamentals/math-stats" },
        { name: "Programmation", path: "/fundamentals/programming" },
        { name: "Bases de données", path: "/fundamentals/databases" }
      ]
    },
    { 
      name: "Machine Learning", 
      path: "/machine-learning",
      subItems: [
        { name: "Apprentissage Supervisé", path: "/machine-learning/supervised" },
        { name: "Apprentissage Non Supervisé", path: "/machine-learning/unsupervised" },
        { name: "Apprentissage par Renforcement", path: "/machine-learning/reinforcement" }
      ]
    },
    { name: "Outils", path: "/tools" },
    { name: "Projets", path: "/projects" },
    { name: "Ressources", path: "/resources" },
    { name: "Communauté", path: "/community" },
    { name: "Blog", path: "/blog" },
    { name: "Glossaire", path: "/glossary" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Aligned to the left */}
          <div className="flex-shrink-0">
            <AnimatedLogo />
          </div>

          {/* Desktop Navigation - Optimized spacing */}
          <div className="hidden md:flex items-center ml-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`h-9 px-3 flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                            isActivePath(item.path)
                              ? "text-primary bg-primary/10"
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-popover border border-border shadow-lg z-50 min-w-48">
                        <DropdownMenuItem asChild>
                          <Link 
                            to={item.path}
                            className="w-full px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            Vue d'ensemble
                          </Link>
                        </DropdownMenuItem>
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link 
                              to={subItem.path}
                              className="w-full px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.path}
                      className={`h-9 px-3 inline-flex items-center text-sm font-medium transition-colors duration-200 rounded-md ${
                        isActivePath(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 p-0"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
