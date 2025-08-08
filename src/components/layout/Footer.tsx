
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
            <h3 className="text-lg font-bold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">À propos</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Politique de confidentialité</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Conditions d'utilisation</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} DataScienceExplorer. Tous droits réservés.</p>
            <p>Créé et développé par Geoffroy Streit</p>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            <p>Projet personnel et éducatif - Contenu libre d'accès</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
