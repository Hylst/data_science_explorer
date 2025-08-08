
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DataScienceExplorer</h3>
            <p className="text-muted-foreground">
              Une ressource complète pour apprendre et maîtriser la Data Science, de débutant à expert.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contenu</h3>
            <ul className="space-y-2">
              <li><Link to="/introduction" className="text-muted-foreground hover:text-primary">Introduction</Link></li>
              <li><Link to="/fundamentals" className="text-muted-foreground hover:text-primary">Fondamentaux</Link></li>
              <li><Link to="/machine-learning" className="text-muted-foreground hover:text-primary">Machine Learning</Link></li>
              <li><Link to="/tools" className="text-muted-foreground hover:text-primary">Outils</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary">Projets</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Communauté</h3>
            <ul className="space-y-2">
              <li><Link to="/community" className="text-muted-foreground hover:text-primary">Forum</Link></li>
              <li><Link to="/community/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary">Événements</Link></li>
              <li><Link to="/jobs" className="text-muted-foreground hover:text-primary">Emplois</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Restez informé</h3>
            <p className="text-muted-foreground mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et tutoriels.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button 
                type="submit" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} DataScienceExplorer. Tous droits réservés.</p>
            <p>Créé et développé par Geoffroy Streit</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground text-sm hover:text-primary">Politique de confidentialité</Link>
            <Link to="/terms" className="text-muted-foreground text-sm hover:text-primary">Conditions d'utilisation</Link>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
