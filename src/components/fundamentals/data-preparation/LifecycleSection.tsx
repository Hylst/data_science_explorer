import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RefreshCw, ArrowRight } from 'lucide-react';

/**
 * Lifecycle section component for Data Preparation page
 * Shows the complete data lifecycle from collection to exploitation
 */
const LifecycleSection: React.FC = () => {
  const lifecycleSteps = [
    { icon: "🔍", title: "Collecte", desc: "Sources multiples" },
    { icon: "🧹", title: "Nettoyage", desc: "Éliminer erreurs" },
    { icon: "🔄", title: "Transformation", desc: "Formatage, agrégation" },
    { icon: "✅", title: "Validation", desc: "Contrôles qualité" },
    { icon: "📈", title: "Exploitation", desc: "Analyse, ML, BI" }
  ];

  const timeDistribution = [
    { phase: "Collecte", percentage: 15, color: "blue", description: "Identification et extraction des sources" },
    { phase: "Nettoyage", percentage: 40, color: "green", description: "Suppression erreurs, doublons, valeurs manquantes" },
    { phase: "Transformation", percentage: 25, color: "purple", description: "Formatage, enrichissement, agrégation" },
    { phase: "Validation", percentage: 15, color: "orange", description: "Contrôles qualité et cohérence" },
    { phase: "Exploitation", percentage: 5, color: "red", description: "Mise à disposition pour analyse" }
  ];

  return (
    <section id="lifecycle" className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <RefreshCw className="h-8 w-8 text-purple-500" />
          Le Cycle de Vie des Données
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Comprendre le parcours complet d'une donnée, de sa création à son exploitation, 
          pour mieux identifier les points de contrôle qualité.
        </p>
      </div>

      {/* Flowchart */}
      <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
        <CardHeader>
          <CardTitle className="text-center">📊 Flux de Traitement des Données</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {lifecycleSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="hidden md:flex justify-center">
                    <ArrowRight className="h-6 w-6 text-slate-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Time Distribution */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center">⏱️ Répartition du Temps par Phase</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {timeDistribution.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <Badge variant="secondary" className="text-lg font-bold">{phase.percentage}%</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={phase.percentage} className="h-3" />
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-purple-500" />
            Points Clés du Cycle de Vie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-700">🔄 Processus Itératif</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Le cycle n'est pas linéaire - retours fréquents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Validation continue à chaque étape</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Amélioration progressive de la qualité</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-700">⚡ Optimisations Possibles</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Automatisation des tâches répétitives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Contrôles qualité en temps réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Pipelines de données reproductibles</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LifecycleSection;