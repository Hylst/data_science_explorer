import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Database, TrendingUp } from 'lucide-react';
import { GlossaryTerm } from '@/components/ui/glossary-term';
import { dataPreparationEnhancedDefinitions } from '../../../data/data-preparation-enhanced-definitions';
import CourseHighlight from '@/components/courses/CourseHighlight';

/**
 * Introduction section component for Data Preparation page
 * Provides overview and importance of data preparation in data science
 */
const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="space-y-8">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Eye className="h-8 w-8 text-blue-500" />
          Introduction à la Préparation des Données
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          La préparation des données représente 80% du travail d'un data scientist. 
          Cette étape cruciale détermine la qualité et la fiabilité de vos analyses.
        </p>
      </div>

      <CourseHighlight type="concept" title="Pourquoi la préparation des données est-elle si importante ?">
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="text-center p-4">
            <Database className="h-12 w-12 mx-auto mb-3 text-blue-500" />
            <h4 className="font-semibold mb-2">
              <GlossaryTerm 
                definition={dataPreparationEnhancedDefinitions['exactitude']}
                variant="hover"
                highlightStyle="glow"
              >
                Qualité des données
              </GlossaryTerm>
            </h4>
            <p className="text-sm text-muted-foreground">
              Des données de qualité garantissent des résultats fiables et des décisions éclairées.
            </p>
          </div>
          <div className="text-center p-4">
            <TrendingUp className="h-12 w-12 mx-auto mb-3 text-green-500" />
            <h4 className="font-semibold mb-2">Performance des modèles</h4>
            <p className="text-sm text-muted-foreground">
              Un <GlossaryTerm 
                definition={dataPreparationEnhancedDefinitions['nettoyage']}
                variant="hover"
                highlightStyle="underline"
              >
                preprocessing
              </GlossaryTerm> optimal améliore significativement les performances des algorithmes.
            </p>
          </div>
          <div className="text-center p-4">
            <Eye className="h-12 w-12 mx-auto mb-3 text-purple-500" />
            <h4 className="font-semibold mb-2">Insights cachés</h4>
            <p className="text-sm text-muted-foreground">
              L'exploration révèle des patterns et anomalies invisibles dans les données brutes.
            </p>
          </div>
        </div>
      </CourseHighlight>

      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            Les enjeux de la préparation des données
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-red-700">🚨 Problèmes courants</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Données manquantes (20-30% en moyenne)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Formats incohérents et erreurs de saisie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Doublons et valeurs aberrantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Données obsolètes ou non représentatives</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-700">✅ Bénéfices d'une bonne préparation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Amélioration de 40-60% des performances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Réduction des biais et erreurs d'interprétation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Accélération du développement des modèles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Confiance accrue dans les résultats</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default IntroductionSection;