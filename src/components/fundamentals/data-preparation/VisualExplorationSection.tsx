import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, ScatterChart, TrendingUp, Eye, Download, Play } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

/**
 * Visual Exploration Section Component
 * Provides interactive data visualization and profiling tools
 */
export const VisualExplorationSection: React.FC = () => {
  const [activeChart, setActiveChart] = useState<string>("distribution");
  const [selectedDataset, setSelectedDataset] = useState<string>("sales");

  /**
   * Sample datasets for demonstration
   */
  const datasets = {
    sales: {
      name: "Données de Ventes",
      variables: ["montant", "date", "client_id", "produit", "region"],
      rows: 15420
    },
    patients: {
      name: "Données Patients",
      variables: ["age", "poids", "taille", "diagnostic", "duree_sejour"],
      rows: 8934
    }
  };

  /**
   * Chart configuration for different visualization types
   */
  const chartTypes = [
    {
      id: "distribution",
      name: "Distribution",
      icon: BarChart3,
      description: "Histogrammes et densités"
    },
    {
      id: "correlation",
      name: "Corrélation",
      icon: ScatterChart,
      description: "Matrices de corrélation"
    },
    {
      id: "outliers",
      name: "Outliers",
      icon: TrendingUp,
      description: "Détection visuelle"
    },
    {
      id: "profiling",
      name: "Profiling",
      icon: Eye,
      description: "Analyse automatique"
    }
  ];

  return (
    <section id="exploration" className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <BarChart3 className="h-8 w-8 text-blue-500" />
          Exploration Visuelle des Données
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          L'exploration visuelle permet de comprendre rapidement la structure, 
          la distribution et les relations dans vos données avant tout traitement.
        </p>
      </div>

      <CourseHighlight type="concept" title="Les 4 Piliers de l'Exploration Visuelle">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {chartTypes.map((chart) => {
            const IconComponent = chart.icon;
            return (
              <Card 
                key={chart.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  activeChart === chart.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setActiveChart(chart.id)}
              >
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h4 className="font-semibold mb-1">{chart.name}</h4>
                  <p className="text-sm text-muted-foreground">{chart.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CourseHighlight>

      {/* Interactive Visualization Panel */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-500" />
              Visualisation Interactive
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" />
                Exporter
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-1" />
                Analyser
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Dataset Selector */}
          <div className="flex gap-2">
            {Object.entries(datasets).map(([key, dataset]) => (
              <Badge 
                key={key}
                variant={selectedDataset === key ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedDataset(key)}
              >
                {dataset.name} ({dataset.rows.toLocaleString()} lignes)
              </Badge>
            ))}
          </div>

          <Tabs value={activeChart} onValueChange={setActiveChart}>
            <TabsList className="grid w-full grid-cols-4">
              {chartTypes.map((chart) => (
                <TabsTrigger key={chart.id} value={chart.id}>
                  {chart.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="distribution" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">📊 Graphiques de Distribution</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-medium">Variables Numériques</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">[Histogramme - Montant des Ventes]</span>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Moyenne:</span>
                        <span className="font-mono">2,847.32 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Médiane:</span>
                        <span className="font-mono">2,156.78 €</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Écart-type:</span>
                        <span className="font-mono">1,234.56 €</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium">Variables Catégorielles</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">[Graphique en Barres - Régions]</span>
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>IDF:</span>
                        <span className="font-mono">35.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PACA:</span>
                        <span className="font-mono">18.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ARA:</span>
                        <span className="font-mono">15.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="correlation" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">🔗 Matrice de Corrélation Interactive</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 h-48 rounded flex items-center justify-center">
                      <span className="text-gray-600">[Heatmap de Corrélation]</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-medium">Corrélations Significatives</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm">Montant ↔ Quantité</span>
                        <Badge className="bg-green-500">+0.87</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <span className="text-sm">Age ↔ Durée séjour</span>
                        <Badge className="bg-blue-500">+0.64</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                        <span className="text-sm">Prix ↔ Volume</span>
                        <Badge className="bg-red-500">-0.52</Badge>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      💡 Cliquez sur une cellule pour voir le scatter plot détaillé
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outliers" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">🎯 Détection Visuelle d'Outliers</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-medium text-center">Box Plot</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">[Box Plot]</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Détection par quartiles
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-center">Scatter Plot</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">[Scatter Plot]</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Outliers multivariés
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-center">Z-Score</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500">[Distribution Z]</span>
                    </div>
                    <div className="text-xs text-center text-muted-foreground">
                      Écarts à la normale
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h6 className="font-medium text-yellow-800 mb-2">⚠️ Outliers Détectés</h6>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Montant anormal:</span>
                      <div className="text-yellow-700">• 3 ventes {'>'} 50,000€</div>
                  <div className="text-yellow-700">• 12 ventes {'<'} 10€</div>
                    </div>
                    <div>
                      <span className="font-medium">Âge suspect:</span>
                      <div className="text-yellow-700">• 2 patients {'>'} 120 ans</div>
                      <div className="text-yellow-700">• 1 patient {'<'} 0 an</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profiling" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">🤖 Profiling Automatique des Datasets</h4>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: "Variables", value: "12", color: "blue" },
                      { label: "Observations", value: "15,420", color: "green" },
                      { label: "Valeurs manquantes", value: "2.3%", color: "yellow" },
                      { label: "Doublons", value: "0.1%", color: "red" }
                    ].map((stat, index) => (
                      <Card key={index} className={`bg-${stat.color}-50 border-${stat.color}-200`}>
                        <CardContent className="p-4 text-center">
                          <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                          <div className={`text-sm text-${stat.color}-700`}>{stat.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3">📋 Rapport de Qualité</h5>
                      <div className="space-y-2">
                        {[
                          { metric: "Complétude", score: 97.7, status: "excellent" },
                          { metric: "Cohérence", score: 94.2, status: "bon" },
                          { metric: "Validité", score: 89.1, status: "moyen" },
                          { metric: "Unicité", score: 99.9, status: "excellent" }
                        ].map((metric, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm">{metric.metric}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    metric.score >= 95 ? 'bg-green-500' :
                                    metric.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${metric.score}%` }}
                                />
                              </div>
                              <span className="text-sm font-mono">{metric.score}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-3">🔍 Recommandations</h5>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                          <strong>Nettoyage:</strong> Traiter 356 valeurs manquantes dans 'email'
                        </div>
                        <div className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
                          <strong>Validation:</strong> Vérifier 23 codes postaux invalides
                        </div>
                        <div className="p-2 bg-green-50 rounded border-l-4 border-green-400">
                          <strong>Enrichissement:</strong> Ajouter géolocalisation des adresses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default VisualExplorationSection;