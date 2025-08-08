
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Veuillez entrer une adresse email");
      return;
    }
    
    // Here you would normally send this to an API
    toast.success("Merci pour votre inscription !");
    setEmail("");
  };
  
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Restez à jour avec les dernières avancées en Data Science
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Recevez nos tutoriels, nouveaux cours, et actualités Data Science directement dans votre boîte mail.
          </p>
          
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm mx-auto gap-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">S'inscrire</Button>
          </form>
          <p className="text-xs text-primary-foreground/60 mt-4">
            Nous respectons votre vie privée. Désabonnez-vous à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
