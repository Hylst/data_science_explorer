import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Calculator, ChartBar, Brain, Target, Clock, Users, Star, BookOpen, Play, CheckCircle } from "lucide-react";

const MathCoursesAvailable = () => {
  const courses = [
    {
      id: "math-intro",
      title: "Introduction aux Mathématiques",
      description: "Fondements mathématiques essentiels pour débuter en Data Science",
      status: "available",
      level: "Débutant",
      duration: "4 semaines",
      modules: 5,
      students: 1247,
      rating: 4.8,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      color: "blue",
      topics: ["Ensembles et fonctions", "Calcul de base", "Équations", "Graphiques", "Applications"],
      link: "/courses/fondations-mathematiques-et-logiques/math-intro",
      nextModule: "Introduction aux ensembles"
    },
    {
      id: "descriptive-stats",
      title: "Statistiques Descriptives",
      description: "Analyser et décrire les données avec les outils statistiques fondamentaux",
      status: "available",
      level: "Débutant",
      duration: "3 semaines",
      modules: 4,
      students: 892,
      rating: 4.9,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <ChartBar className="h-6 w-6 text-green-600" />,
      color: "green",
      topics: ["Tendance centrale", "Dispersion", "Corrélation", "Visualisation"],
      link: "/fundamentals/math-stats/descriptive-statistics",
      nextModule: "Mesures de tendance centrale"
    },
    {
      id: "probability-theory",
      title: "Théorie des Probabilités",
      description: "Maîtriser l'incertitude avec les concepts fondamentaux des probabilités",
      status: "available",
      level: "Intermédiaire",
      duration: "5 semaines",
      modules: 6,
      students: 634,
      rating: 4.7,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <Target className="h-6 w-6 text-purple-600" />,
      color: "purple",
      topics: ["Probabilités de base", "Variables aléatoires", "Distributions", "Théorème de Bayes"],
      link: "/fundamentals/math-stats/probability-theory",
      nextModule: "Introduction intuitive aux probabilités"
    },
    {
      id: "linear-algebra",
      title: "Algèbre Linéaire",
      description: "Vecteurs, matrices et transformations pour le Machine Learning",
      status: "available",
      level: "Intermédiaire",
      duration: "6 semaines",
      modules: 7,
      students: 789,
      rating: 4.6,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      color: "indigo",
      topics: ["Vecteurs", "Matrices", "Opérations", "Décompositions", "Applications ML"],
      link: "/fundamentals/math-stats/linear-algebra",
      nextModule: "Introduction à l'algèbre linéaire"
    },
    {
      id: "differential-calculus",
      title: "Calcul Différentiel",
      description: "Dérivées et optimisation pour l'apprentissage automatique",
      status: "available",
      level: "Avancé",
      duration: "5 semaines",
      modules: 6,
      students: 423,
      rating: 4.5,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <Target className="h-6 w-6 text-orange-600" />,
      color: "orange",
      topics: ["Dérivées", "Règles de dérivation", "Optimisation", "Gradients", "Applications"],
      link: "/fundamentals/math-stats/differential-calculus",
      nextModule: "Concept de dérivée"
    },
    {
      id: "advanced-stats",
      title: "Statistiques Avancées",
      description: "Tests d'hypothèses, intervalles de confiance, ANOVA et modèles avancés",
      status: "available",
      level: "Avancé",
      duration: "6 semaines",
      modules: 8,
      students: 289,
      rating: 4.8,
      progress: 0,
      instructor: "Prof. Geoffroy Streit",
      icon: <ChartBar className="h-6 w-6 text-red-600" />,
      color: "red",
      topics: ["Tests d'hypothèses", "ANOVA", "Régression avancée", "Statistiques bayésiennes"],
      link: "/fundamentals/math-stats/advanced-statistics",
      nextModule: "Introduction aux tests statistiques"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-100 text-green-800">Disponible</Badge>;
      case "coming-soon":
        return <Badge variant="outline">Bientôt</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      green: "border-green-200 hover:border-green-300",
      purple: "border-purple-200 hover:border-purple-300",
      indigo: "border-indigo-200 hover:border-indigo-300",
      orange: "border-orange-200 hover:border-orange-300",
      gray: "border-gray-200 hover:border-gray-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Cours Mathématiques Disponibles</h2>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        Parcours structurés et progressifs pour maîtriser les mathématiques de la Data Science.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {courses.map((course) => (
          <Card 
            key={course.id} 
            className={`hover:shadow-lg transition-all duration-300 border-l-4 ${getColorClasses(course.color)}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {course.icon}
                  <div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Par {course.instructor}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {getStatusBadge(course.status)}
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{course.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.modules} modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} étudiants</span>
                </div>
                {course.rating > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{course.rating}/5</span>
                  </div>
                )}
              </div>

              {course.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <div>
                <h4 className="font-semibold text-sm mb-2">Sujets abordés :</h4>
                <div className="flex flex-wrap gap-1">
                  {course.topics.map((topic, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Play className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Prochain module :</span>
                  <span className="text-gray-700">{course.nextModule}</span>
                </div>
              </div>

              <div className="pt-3 border-t">
                {course.status === "available" ? (
                  <Link to={course.link}>
                    <Button className="w-full">
                      {course.progress > 0 ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Continuer le cours
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Commencer le cours
                        </>
                      )}
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full">
                    Bientôt disponible
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section complémentaire */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-600" />
          Parcours Recommandé pour Débutants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Mathématiques de base", duration: "4 sem", status: "available" },
            { step: 2, title: "Statistiques descriptives", duration: "3 sem", status: "available" },
            { step: 3, title: "Théorie des probabilités", duration: "5 sem", status: "available" },
            { step: 4, title: "Algèbre linéaire", duration: "6 sem", status: "available" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <Badge variant="outline" className="text-xs">{item.duration}</Badge>
              </div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              {item.status === "available" && (
                <CheckCircle className="h-4 w-4 text-green-500 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MathCoursesAvailable;
