
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const features = [
  {
    title: "Apprentissage structuré",
    description: "Parcours pédagogiques progressifs, du niveau débutant à expert"
  },
  {
    title: "Contenu théorique approfondi",
    description: "Concepts expliqués avec clarté et rigueur scientifique"
  },
  {
    title: "Projets pratiques guidés",
    description: "Appliquez vos connaissances sur des cas réels"
  },
  {
    title: "Ressources téléchargeables",
    description: "Notebooks, datasets et cheatsheets à votre disposition"
  },
  {
    title: "Communauté active",
    description: "Échangez avec d'autres apprenants et des experts"
  },
  {
    title: "Quiz et exercices interactifs",
    description: "Testez vos connaissances et suivez votre progression"
  },
];

// Composant ProgressDisplay pour contourner le problème avec le composant Progress
const ProgressDisplay = ({ value }: { value: number }) => {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div 
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};

const FeatureHighlights = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Pourquoi apprendre avec <span className="gradient-heading">DataScienceExplorer</span> ?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Notre plateforme combine des explications théoriques rigoureuses avec des applications pratiques 
              pour vous offrir une expérience d'apprentissage complète et engageante.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-ds-blue-100 to-ds-purple-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                {/* Code snippet */}
                <div className="col-span-2 bg-background rounded-lg shadow-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">python_basics.ipynb</span>
                    <span className="text-xs text-muted-foreground">Jupyter Notebook</span>
                  </div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-python">{`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# Charger et préparer les données
data = pd.read_csv('dataset.csv')
X = data.drop('target', axis=1)
y = data['target']

# Diviser les données
X_train, X_test, y_train, y_test = \\
    train_test_split(X, y, test_size=0.2)

# Afficher les dimensions
print(f"Training set: {X_train.shape}")
print(f"Testing set: {X_test.shape}")`}</code>
                  </pre>
                </div>
                
                {/* Progress card */}
                <div className="bg-background rounded-lg shadow-lg p-4">
                  <h4 className="text-sm font-medium mb-2">Progression du module</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Introduction Python</span>
                        <span>78%</span>
                      </div>
                      <ProgressDisplay value={78} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>NumPy & Pandas</span>
                        <span>45%</span>
                      </div>
                      <ProgressDisplay value={45} />
                    </div>
                  </div>
                </div>
                
                {/* Quiz results card */}
                <div className="bg-background rounded-lg shadow-lg p-4">
                  <h4 className="text-sm font-medium mb-2">Quiz Python</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">12/15</div>
                    <div className="text-xs text-muted-foreground">80% de réussite</div>
                    <div className="mt-2 text-xs text-blue-500 hover:underline cursor-pointer">
                      Revoir les erreurs
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-ds-blue-500/20 to-ds-purple-500/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full mt-12">
        <img 
          src="/svg/data_science_explorer_apprentissage.svg" 
          alt="Composants d'une expérience d'apprentissage complète"
          className="absolute top-0 left-0 w-full h-full opacity-80"
        />
      </div>
    </section>
  );
};

export default FeatureHighlights;
