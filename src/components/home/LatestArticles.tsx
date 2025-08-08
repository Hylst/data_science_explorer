
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Introduction au Deep Learning: Comment fonctionnent les réseaux de neurones?",
    description: "Une explication accessible des principes fondamentaux du deep learning et du fonctionnement des réseaux de neurones artificiels.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Deep Learning",
    href: "/blog/introduction-deep-learning"
  },
  {
    title: "Les meilleures bibliothèques Python pour la visualisation de données",
    description: "Découvrez les outils de visualisation de données les plus performants et comment les utiliser efficacement dans vos projets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Visualisation",
    href: "/blog/python-visualization-libraries"
  },
  {
    title: "Comment optimiser vos modèles de Machine Learning pour de meilleures performances",
    description: "Techniques avancées pour améliorer la précision et réduire le temps d'entraînement de vos modèles ML.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    category: "Optimisation",
    href: "/blog/ml-model-optimization"
  },
];

const LatestArticles = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Articles Récents</h2>
            <p className="text-xl text-muted-foreground">
              Les dernières actualités et tutoriels de notre blog
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/blog">
              Tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden card-hover">
              <div className="aspect-[16/9] relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="ghost" className="w-full">
                  <Link to={article.href}>
                    Lire l'article
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

export default LatestArticles;
