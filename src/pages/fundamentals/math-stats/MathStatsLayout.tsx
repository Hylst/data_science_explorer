
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calculator, ChartBar, Grid3X3, TrendingUp, Clock, Users, BookOpen } from "lucide-react";

const MathStatsLayout = () => {
  const courses = [
    {
      id: "probability-theory",
      title: "Théorie des Probabilités",
      description: "Maîtrisez les fondements de l'incertitude et du hasard en data science",
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      level: "Intermédiaire",
      duration: "6 semaines",
      modules: 4,
      color: "blue",
      path: "/fundamentals/math-stats/probability-theory",
      concepts: ["Variables aléatoires", "Distributions", "Théorème de Bayes", "Tests d'hypothèses"]
    },
    {
      id: "descriptive-statistics",
      title: "Statistiques Descriptives",
      description: "Apprenez à résumer et analyser vos données avec les outils statistiques fondamentaux",
      icon: <ChartBar className="h-8 w-8 text-green-600" />,
      level: "Débutant",
      duration: "4 semaines",
      modules: 4,
      color: "green",
      path: "/fundamentals/math-stats/descriptive-statistics",
      concepts: ["Tendance centrale", "Dispersion", "Corrélation", "Visualisation"]
    },
    {
      id: "linear-algebra",
      title: "Algèbre Linéaire",
      description: "Explorez les vecteurs, matrices et transformations au cœur du machine learning",
      icon: <Grid3X3 className="h-8 w-8 text-purple-600" />,
      level: "Intermédiaire",
      duration: "8 semaines",
      modules: 4,
      color: "purple",
      path: "/fundamentals/math-stats/linear-algebra",
      concepts: ["Vecteurs", "Matrices", "Décompositions", "Transformations"]
    },
    {
      id: "differential-calculus",
      title: "Calcul Différentiel",
      description: "Découvrez la puissance des dérivées pour l'optimisation et l'apprentissage automatique",
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      level: "Avancé",
      duration: "6 semaines",
      modules: 4,
      color: "orange",
      path: "/fundamentals/math-stats/differential-calculus",
      concepts: ["Dérivées", "Gradients", "Optimisation", "Backpropagation"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: "border-l-blue-500",
        bg: "bg-blue-50",
        text: "text-blue-800",
        badge: "bg-blue-100 text-blue-800"
      },
      green: {
        border: "border-l-green-500",
        bg: "bg-green-50",
        text: "text-green-800",
        badge: "bg-green-100 text-green-800"
      },
      purple: {
        border: "border-l-purple-500",
        bg: "bg-purple-50",
        text: "text-purple-800",
        badge: "bg-purple-100 text-purple-800"
      },
      orange: {
        border: "border-l-orange-500",
        bg: "bg-orange-50",
        text: "text-orange-800",
        badge: "bg-orange-100 text-orange-800"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {courses.map((course) => {
        const colorClasses = getColorClasses(course.color);
        
        return (
          <Card key={course.id} className={`hover:shadow-lg transition-all duration-300 ${colorClasses.border}`}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.modules} modules
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Concepts clés :</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.concepts.map((concept, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded ${colorClasses.badge}`}>
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to={course.path}>
                    <Button className="w-full">
                      Commencer le cours
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MathStatsLayout;
