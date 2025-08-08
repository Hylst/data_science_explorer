
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Les bases de Python pour la Data Science",
    description: "Maîtrisez les fondamentaux de Python et ses bibliothèques essentielles comme NumPy et pandas.",
    level: "Débutant",
    duration: "4 semaines",
    modules: 12,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2928&q=80",
    href: "/courses/programming/python-basics"
  },
  {
    title: "Statistiques appliquées pour l'analyse de données",
    description: "Apprenez les concepts statistiques fondamentaux et leur application dans l'analyse de données réelles.",
    level: "Intermédiaire",
    duration: "6 semaines",
    modules: 18,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    href: "/courses/statistics/applied-statistics"
  },
  {
    title: "Machine Learning Supervisé",
    description: "Implémentez des algorithmes de classification et de régression sur des problèmes concrets.",
    level: "Intermédiaire",
    duration: "8 semaines",
    modules: 24,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80",
    href: "/courses/machine-learning/supervised-learning"
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Cours Populaires</h2>
            <p className="text-xl text-muted-foreground">
              Les cours les plus suivis par notre communauté
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/courses">
              Voir tous les cours
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="overflow-hidden card-hover">
              <div className="aspect-[16/9] relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  {course.level}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div>{course.duration}</div>
                  <div>{course.modules} modules</div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="secondary" className="w-full">
                  <Link to={course.href}>
                    Voir le cours
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
