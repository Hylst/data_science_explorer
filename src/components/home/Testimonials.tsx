import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "DataScienceExplorer m'a permis de passer de débutant à Data Scientist en moins d'un an. Le contenu est structuré de manière progressive et les projets pratiques sont extrêmement formateurs.",
    author: "Sophie Martin",
    role: "Data Scientist, Finance Corp",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "En tant que développeur souhaitant se reconvertir dans la Data Science, j'ai trouvé ici tous les fondements mathématiques et statistiques expliqués clairement. Les exemples de code sont particulièrement utiles.",
    author: "Thomas Dubois",
    role: "ML Engineer, Tech Startup",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "La qualité pédagogique est remarquable. Les concepts complexes sont expliqués avec des analogies qui les rendent accessibles, et la progression est bien pensée.",
    author: "Emma Leroux",
    role: "Étudiante en Master Data",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment DataScienceExplorer aide des milliers d'apprenants dans leur parcours en Data Science
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="pb-0">
                <div className="text-4xl text-primary">"</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Note : Ces témoignages sont actuellement fictifs et servent d'exemples de présentation.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
