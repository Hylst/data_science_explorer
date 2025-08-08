
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, BarChart3, Brain } from "lucide-react";

const CoursesIndex = () => {
  const courseCategories = [
    {
      title: "Programmation",
      description: "Langages et outils de développement pour la Data Science",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      courses: [
        {
          title: "Les bases de Python",
          description: "Fondamentaux de Python pour la Data Science",
          level: "Débutant",
          duration: "4 semaines",
          href: "/courses/programming/python-basics"
        }
      ]
    },
    {
      title: "Statistiques",
      description: "Concepts statistiques et mathématiques essentiels",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      courses: [
        {
          title: "Statistiques appliquées",
          description: "Application pratique des statistiques en analyse de données",
          level: "Intermédiaire",
          duration: "6 semaines",
          href: "/courses/statistics/applied-statistics"
        }
      ]
    },
    {
      title: "Bases de données",
      description: "SQL, NoSQL et gestion de données pour la Data Science",
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      courses: [
        {
          title: "Fondamentaux des bases de données",
          description: "Maîtrisez SQL, NoSQL et la gestion de données",
          level: "Débutant",
          duration: "5 semaines",
          href: "/courses/databases/database-fundamentals"
        }
      ]
    },
    {
      title: "Visualisation",
      description: "Créer des visualisations impactantes et interactives",
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      courses: [
        {
          title: "Visualisation de données avancée",
          description: "Python, D3.js et outils modernes de visualisation",
          level: "Intermédiaire",
          duration: "6 semaines",
          href: "/courses/dataviz/data-visualization"
        }
      ]
    },
    {
      title: "Machine Learning",
      description: "Algorithmes et techniques d'apprentissage automatique",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      courses: [
        {
          title: "Machine Learning Supervisé",
          description: "Classification et régression avec des algorithmes supervisés",
          level: "Intermédiaire",
          duration: "8 semaines",
          href: "/courses/machine-learning/supervised-learning"
        }
      ]
    },
    {
      title: "Intelligence Artificielle",
      description: "NLP et techniques avancées d'IA",
      icon: <Brain className="h-8 w-8 text-rose-600" />,
      courses: [
        {
          title: "Traitement du Langage Naturel",
          description: "NLTK, spaCy, BERT et techniques modernes de NLP",
          level: "Intermédiaire",
          duration: "8 semaines",
          href: "/courses/nlp/natural-language-processing"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BookOpen className="h-10 w-10 text-blue-600" />
              Catalogue des Cours
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos cours structurés pour maîtriser la Data Science, 
              du niveau débutant aux techniques avancées.
            </p>
          </div>

          <div className="space-y-12">
            {courseCategories.map((category, index) => (
              <section key={index} className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, courseIndex) => (
                    <Card key={courseIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{course.level}</Badge>
                          <span className="text-sm text-gray-500">{course.duration}</span>
                        </div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to={course.href}>
                            Commencer le cours
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Plus de cours à venir !</h3>
              <p className="text-gray-600 mb-6">
                Nous travaillons constamment à enrichir notre catalogue. 
                Revenez régulièrement pour découvrir de nouveaux contenus.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/fundamentals" className="text-blue-600 hover:underline">
                  Voir les Fondamentaux
                </Link>
                <Link to="/machine-learning" className="text-blue-600 hover:underline">
                  Explorer le Machine Learning
                </Link>
                <Link to="/projects" className="text-blue-600 hover:underline">
                  Découvrir les Projets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesIndex;
