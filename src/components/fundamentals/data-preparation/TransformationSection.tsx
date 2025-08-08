import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CourseHighlight from '@/components/courses/CourseHighlight';
import { Settings } from 'lucide-react';

/**
 * TransformationSection Component
 * 
 * This component handles the "Data Transformation" section of the data preparation page.
 * It covers the four types of data transformation: structural, format, calculated, and statistical.
 */
const TransformationSection: React.FC = () => {
  return (
    <section id="transformation" className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Settings className="h-8 w-8 text-purple-500" />
          Transformation des Données
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Une fois nettoyées, les données doivent être transformées pour répondre aux besoins spécifiques 
          de l'analyse : normalisation, agrégation, création de variables dérivées.
        </p>
      </div>

      <CourseHighlight type="concept" title="Les 4 Types de Transformation">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            {
              type: "Structurelle",
              icon: "🏗️",
              description: "Modification de la structure des données",
              examples: ["Pivot/Unpivot", "Jointures", "Groupement"]
            },
            {
              type: "Format",
              icon: "📋",
              description: "Standardisation des formats",
              examples: ["Dates", "Texte", "Nombres", "Unités"]
            },
            {
              type: "Calculée",
              icon: "🧮",
              description: "Création de nouvelles variables",
              examples: ["Ratios", "Tendances", "Scores", "Catégories"]
            },
            {
              type: "Statistique",
              icon: "📊",
              description: "Normalisation et mise à l'échelle",
              examples: ["Z-score", "Min-Max", "Quantiles", "Log"]
            }
          ].map((transfo, index) => (
            <div key={index} className="p-4 bg-muted/30 rounded-lg">
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">{transfo.icon}</div>
                <h4 className="font-semibold text-purple-700">{transfo.type}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{transfo.description}</p>
              <div className="space-y-1">
                {transfo.examples.map((example, eIndex) => (
                  <Badge key={eIndex} variant="outline" className="text-xs mr-1">
                    {example}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CourseHighlight>
    </section>
  );
};

export default TransformationSection;