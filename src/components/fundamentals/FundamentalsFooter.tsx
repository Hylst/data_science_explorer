
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Brain, Code, Database } from "lucide-react";

const FundamentalsFooter = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
        <Button variant="outline" asChild className="h-auto py-6 flex flex-col items-center gap-2">
          <Link to="/fundamentals/math-stats">
            <Brain className="h-6 w-6" />
            <span>Mathématiques & Stats</span>
          </Link>
        </Button>
        <Button variant="outline" asChild className="h-auto py-6 flex flex-col items-center gap-2">
          <Link to="/fundamentals/programming">
            <Code className="h-6 w-6" />
            <span>Programmation</span>
          </Link>
        </Button>
        <Button variant="outline" asChild className="h-auto py-6 flex flex-col items-center gap-2">
          <Link to="/fundamentals/databases">
            <Database className="h-6 w-6" />
            <span>Bases de données</span>
          </Link>
        </Button>
      </div>

      <div className="mt-12 flex justify-between items-center pt-8 border-t">
        <Button variant="outline" className="flex items-center gap-1 group">
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <Link to="/introduction">Retour à l'introduction</Link>
        </Button>
        <Button size="lg" className="bg-gradient-to-r from-ds-blue-500 to-ds-purple-500 hover:from-ds-blue-600 hover:to-ds-purple-600 group">
          <Link to="/machine-learning" className="flex items-center gap-1">
            Continuer vers le Machine Learning
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground mt-8 text-right">
        <p>Auteur: Geoffroy Streit - geoffroy.streit@gmail.com</p>
      </div>
    </>
  );
};

export default FundamentalsFooter;
