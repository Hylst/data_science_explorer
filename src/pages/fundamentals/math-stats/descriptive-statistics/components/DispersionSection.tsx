
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter, Cell, ReferenceLine } from "recharts";
import { TrendingUp, BarChart3, AlertCircle, Target, Zap, Play, RotateCcw } from "lucide-react";

// Type definitions for better TypeScript support
interface EquipeData {
  data: number[];
  moyenne: number;
  ecartType: number;
  couleur: string;
  interpretation: string;
}

interface Scenario {
  title: string;
  description: string;
  equipes: Record<string, EquipeData>;
}

const DispersionSection = () => {
  const [selectedScenario, setSelectedScenario] = useState("entreprise");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [selectedVisualization, setSelectedVisualization] = useState<'variance' | 'covariance' | 'correlation'>('variance');

  // Interactive data for variance visualization
  const varianceData = [
    { x: 1, y: 8, mean: 10, deviation: -2 },
    { x: 2, y: 12, mean: 10, deviation: 2 },
    { x: 3, y: 9, mean: 10, deviation: -1 },
    { x: 4, y: 11, mean: 10, deviation: 1 },
    { x: 5, y: 10, mean: 10, deviation: 0 },
    { x: 6, y: 13, mean: 10, deviation: 3 },
    { x: 7, y: 7, mean: 10, deviation: -3 },
    { x: 8, y: 14, mean: 10, deviation: 4 },
  ];

  // Interactive data for covariance visualization
  const covarianceData = [
    { temperature: 15, sales: 80, tempDev: -5, salesDev: -40 },
    { temperature: 18, sales: 95, tempDev: -2, salesDev: -25 },
    { temperature: 22, sales: 130, tempDev: 2, salesDev: 10 },
    { temperature: 25, sales: 150, tempDev: 5, salesDev: 30 },
    { temperature: 28, sales: 180, tempDev: 8, salesDev: 60 },
    { temperature: 30, sales: 200, tempDev: 10, salesDev: 80 },
    { temperature: 12, sales: 60, tempDev: -8, salesDev: -60 },
    { temperature: 35, sales: 220, tempDev: 15, salesDev: 100 },
  ];

  // Correlation matrix data for heatmap
  const correlationMatrix = [
    { variable: 'Maths', Maths: 1.0, Physique: 0.85, Chimie: 0.72, Histoire: 0.45 },
    { variable: 'Physique', Maths: 0.85, Physique: 1.0, Chimie: 0.78, Histoire: 0.38 },
    { variable: 'Chimie', Maths: 0.72, Physique: 0.78, Chimie: 1.0, Histoire: 0.42 },
    { variable: 'Histoire', Maths: 0.45, Physique: 0.38, Chimie: 0.42, Histoire: 1.0 },
  ];

  // Animation control functions
  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);
    const interval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= varianceData.length - 1) {
          setIsAnimating(false);
          clearInterval(interval);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setAnimationStep(0);
  };

  // Color function for correlation heatmap
  const getCorrelationColor = (value: number) => {
    if (value >= 0.8) return '#1f77b4'; // Strong positive
    if (value >= 0.6) return '#aec7e8'; // Moderate positive
    if (value >= 0.4) return '#ffbb78'; // Weak positive
    if (value >= 0.2) return '#ff7f0e'; // Very weak positive
    if (value >= -0.2) return '#d62728'; // Near zero
    if (value >= -0.4) return '#ff9896'; // Very weak negative
    if (value >= -0.6) return '#9467bd'; // Weak negative
    if (value >= -0.8) return '#c5b0d5'; // Moderate negative
    return '#8c564b'; // Strong negative
  };

  const scenarios: Record<string, Scenario> = {
    entreprise: {
      title: "🏢 Performances d'équipes",
      description: "Productivité de 3 équipes sur 6 mois",
      equipes: {
        "Équipe A": { 
          data: [95, 98, 102, 99, 101, 105], 
          moyenne: 100, 
          ecartType: 3.2,
          couleur: "#3B82F6",
          interpretation: "Très stable, prévisible"
        },
        "Équipe B": { 
          data: [85, 95, 105, 90, 110, 115], 
          moyenne: 100, 
          ecartType: 11.8,
          couleur: "#EF4444",
          interpretation: "Instable, imprévisible"
        },
        "Équipe C": { 
          data: [88, 92, 108, 112, 96, 104], 
          moyenne: 100, 
          ecartType: 9.1,
          couleur: "#10B981",
          interpretation: "Modérément variable"
        }
      }
    },
    trading: {
      title: "📈 Rendements d'investissement",
      description: "Rendements annuels (%) de 3 portefeuilles",
      equipes: {
        "Portefeuille Prudent": { 
          data: [4, 5, 6, 5, 7, 5], 
          moyenne: 5.3, 
          ecartType: 1.0,
          couleur: "#10B981",
          interpretation: "Faible risque, rendement stable"
        },
        "Portefeuille Équilibré": { 
          data: [2, 8, 6, 9, 4, 7], 
          moyenne: 6.0, 
          ecartType: 2.8,
          couleur: "#F59E0B",
          interpretation: "Risque modéré, plus de variabilité"
        },
        "Portefeuille Agressif": { 
          data: [-5, 15, 8, 18, -2, 12], 
          moyenne: 7.7, 
          ecartType: 9.5,
          couleur: "#EF4444",
          interpretation: "Haut risque, forte volatilité"
        }
      }
    },
    qualite: {
      title: "⚙️ Contrôle qualité",
      description: "Dimensions de pièces (en mm, tolérance ±0.5)",
      equipes: {
        "Machine A": { 
          data: [10.1, 9.9, 10.2, 9.8, 10.0, 10.1], 
          moyenne: 10.02, 
          ecartType: 0.15,
          couleur: "#10B981",
          interpretation: "Excellente précision"
        },
        "Machine B": { 
          data: [9.5, 10.5, 9.7, 10.3, 9.9, 10.1], 
          moyenne: 10.0, 
          ecartType: 0.35,
          couleur: "#F59E0B",
          interpretation: "Précision acceptable"
        },
        "Machine C": { 
          data: [8.8, 11.2, 9.4, 10.8, 9.1, 10.7], 
          moyenne: 10.0, 
          ecartType: 0.95,
          couleur: "#EF4444",
          interpretation: "Précision insuffisante"
        }
      }
    }
  };

  const currentScenario = scenarios[selectedScenario as keyof typeof scenarios];

  // Préparation des données pour graphiques
  const chartData = Object.entries(currentScenario.equipes).map(([nom, equipe]) => ({
    nom,
    moyenne: equipe.moyenne,
    ecartType: equipe.ecartType,
    cv: (equipe.ecartType / equipe.moyenne * 100).toFixed(1)
  }));

  const timeSeriesData = currentScenario.equipes[Object.keys(currentScenario.equipes)[0]].data.map((_, index: number) => {
    const point: Record<string, string | number> = { periode: `P${index + 1}` };
    Object.entries(currentScenario.equipes).forEach(([nom, equipe]) => {
      point[nom] = equipe.data[index];
    });
    return point;
  });

  return (
    <section id="dispersion" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <TrendingUp className="h-8 w-8 text-green-600" />
        2. Mesures de Dispersion : Quantifier l'Imprévisibilité
      </h2>

      {/* Introduction conceptuelle */}
      <div className="mb-8">
        <CourseHighlight title="🎭 Analogie : Les personnalités de vos données" type="concept">
          <div className="space-y-4">
            <p className="text-lg">
              Imaginez trois amis qui arrivent toujours en moyenne à 14h00 à vos rendez-vous. 
              Mais l'un arrive toujours pile à l'heure, l'autre entre 13h45 et 14h15, 
              et le troisième peut débarquer entre 12h30 et 15h30 !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">😌</div>
                <p><strong>L'ami fiable</strong></p>
                <p>Faible dispersion</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">😐</div>
                <p><strong>L'ami modéré</strong></p>
                <p>Dispersion moyenne</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <div className="text-2xl mb-2">😅</div>
                <p><strong>L'ami imprévisible</strong></p>
                <p>Forte dispersion</p>
              </div>
            </div>
          </div>
        </CourseHighlight>
      </div>

      {/* Sélecteur de scénarios */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>🧪 Laboratoire de la Variabilité</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <Button
                key={key}
                variant={selectedScenario === key ? "default" : "outline"}
                onClick={() => setSelectedScenario(key)}
                className="flex-1 min-w-fit"
              >
                {scenario.title}
              </Button>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{currentScenario.title}</h4>
            <p className="text-sm text-gray-600">{currentScenario.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3">📊 Évolution dans le temps</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periode" />
                    <YAxis />
                    <Tooltip />
                    {Object.entries(currentScenario.equipes).map(([nom, equipe]) => (
                      <Line 
                        key={nom}
                        type="monotone" 
                        dataKey={nom} 
                        stroke={equipe.couleur}
                        strokeWidth={2}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">📈 Comparaison des écarts-types</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nom" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Écart-type']} />
                    <Bar dataKey="ecartType" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {Object.entries(currentScenario.equipes).map(([nom, equipe]) => (
              <div key={nom} className="bg-white p-4 rounded-lg border" style={{borderLeft: `4px solid ${equipe.couleur}`}}>
                <h6 className="font-semibold mb-2">{nom}</h6>
                <div className="space-y-1 text-sm">
                  <p><strong>Moyenne :</strong> {equipe.moyenne}</p>
                  <p><strong>Écart-type :</strong> {equipe.ecartType}</p>
                  <p><strong>CV :</strong> {(equipe.ecartType / equipe.moyenne * 100).toFixed(1)}%</p>
                  <p className="text-xs text-gray-600 mt-2">{equipe.interpretation}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Variance et Écart-type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Variance : La Mesure des Écarts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                La variance mesure à quel point vos données s'éloignent de la moyenne. 
                Plus la variance est élevée, plus vos données sont "dispersées".
              </p>

              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-sm mb-2">Variance de population :</h5>
                  <CourseEquation latex="\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm mb-2">Variance d'échantillon :</h5>
                  <CourseEquation latex="s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2" />
                </div>
              </div>

              <CourseHighlight title="🤔 Pourquoi élever au carré ?" type="example">
                <div className="text-sm space-y-2">
                  <p><strong>Problème :</strong> Si on additionne simplement les écarts (xi - x̄), ça donne toujours 0 !</p>
                  <p><strong>Solution :</strong> On élève au carré pour :</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Rendre tous les écarts positifs</li>
                    <li>• Amplifier l'impact des grandes déviations</li>
                    <li>• Permettre les calculs mathématiques</li>
                  </ul>
                </div>
              </CourseHighlight>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Pourquoi n-1 ? (Correction de Bessel)
                </h5>
                <p className="text-xs">
                  Avec un échantillon, on sous-estime naturellement la variance de la population. 
                  Diviser par (n-1) au lieu de n corrige ce biais et donne une estimation plus juste.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Écart-type : L'Unité Naturelle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                L'écart-type est la racine carrée de la variance. Il a l'énorme avantage 
                d'être dans la même unité que vos données originales !
              </p>

              <CourseEquation latex="s = \sqrt{s^2} = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2}" />

              <CourseHighlight title="💰 Exemple concret : Salaires" type="example">
                <div className="text-sm space-y-2">
                  <p><strong>Données :</strong> Salaires en euros</p>
                  <p><strong>Variance :</strong> en euros² (difficile à interpréter)</p>
                  <p><strong>Écart-type :</strong> en euros (directement compréhensible)</p>
                  <p className="bg-green-100 p-2 rounded text-xs">
                    Si l'écart-type des salaires est 5000€, cela signifie qu'en moyenne, 
                    les salaires s'écartent de 5000€ de la moyenne.
                  </p>
                </div>
              </CourseHighlight>

              <div className="bg-blue-50 p-3 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">🎯 Règle empirique (68-95-99.7)</h5>
                <p className="text-xs mb-2">Pour une distribution normale :</p>
                <ul className="text-xs space-y-1">
                  <li>• 68% des données dans [μ-σ, μ+σ]</li>
                  <li>• 95% des données dans [μ-2σ, μ+2σ]</li>
                  <li>• 99.7% des données dans [μ-3σ, μ+3σ]</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">🚀 Applications pratiques</h5>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Contrôle qualité :</strong> Détecter les défauts</li>
                  <li>• <strong>Finance :</strong> Mesurer le risque (volatilité)</li>
                  <li>• <strong>Performance :</strong> Évaluer la consistance</li>
                  <li>• <strong>A/B testing :</strong> Valider la significativité</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coefficient de Variation */}
      <Card className="mb-8 border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Coefficient de Variation : Le Comparateur Universel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm">
                Le coefficient de variation (CV) exprime l'écart-type en pourcentage de la moyenne. 
                C'est LE champion pour comparer la variabilité de séries de données différentes !
              </p>

              <CourseEquation latex="CV = \frac{s}{\bar{x}} \times 100\%" />

              <CourseHighlight title="🏆 Le super-pouvoir du CV" type="concept">
                <div className="text-sm space-y-2">
                  <p><strong>Question :</strong> Qui est plus variable ?</p>
                  <ul className="space-y-1">
                    <li>• Salaires : μ=50000€, σ=5000€</li>
                    <li>• Âges : μ=30ans, σ=8ans</li>
                  </ul>
                  <p><strong>Réponse avec CV :</strong></p>
                  <ul className="space-y-1">
                    <li>• CV salaires = 5000/50000 = 10%</li>
                    <li>• CV âges = 8/30 = 26.7%</li>
                  </ul>
                  <p className="bg-purple-100 p-2 rounded">
                    Les âges sont plus variables relativement !
                  </p>
                </div>
              </CourseHighlight>

              <div className="bg-green-50 p-3 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">📊 Interprétation du CV</h5>
                <ul className="text-xs space-y-1">
                  <li>• <strong>CV {"<"} 15% :</strong> Faible variabilité</li>
                  <li>• <strong>15% ≤ CV {"<"} 30% :</strong> Variabilité modérée</li>
                  <li>• <strong>CV ≥ 30% :</strong> Forte variabilité</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">🌟 Cas d'usage du CV</h5>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Comparaison multi-secteurs :</strong> Volatilité actions vs obligations</li>
                  <li>• <strong>Évaluation de risque :</strong> Quel investissement est plus risqué ?</li>
                  <li>• <strong>Contrôle qualité :</strong> Quelle machine est plus précise ?</li>
                  <li>• <strong>Performance sportive :</strong> Qui est plus régulier ?</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">⚠️ Limitations du CV</h5>
                <ul className="text-xs space-y-1">
                  <li>• Ne fonctionne que si moyenne {">"} 0</li>
                  <li>• Sensible aux valeurs proches de zéro</li>
                  <li>• Pas adapté aux échelles avec un zéro arbitraire</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">💡 Astuce de pro</h5>
                <p className="text-xs">
                  En finance, on utilise souvent le CV pour mesurer le ratio rendement/risque. 
                  Un CV faible = investissement intéressant (bon rendement, faible volatilité).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Autres mesures de dispersion */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 La Famille Complète des Mesures de Dispersion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-gray-700">Étendue (Range)</h5>
              <CourseEquation latex="R = x_{\max} - x_{\min}" />
              <p className="text-xs text-gray-600 mt-2">
                Simple mais sensible aux valeurs aberrantes. Parfait pour un premier aperçu.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-blue-700">Écart Interquartile</h5>
              <CourseEquation latex="IQR = Q_3 - Q_1" />
              <p className="text-xs text-blue-600 mt-2">
                Robuste aux aberrantes. Mesure la dispersion des 50% centraux.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-green-700">Écart Absolu Médian</h5>
              <CourseEquation latex="MAD = \text{mediane}(|x_i - \text{mediane}|)" />
              <p className="text-xs text-green-600 mt-2">
                Ultra-robuste. Alternative à l'écart-type pour données avec aberrantes.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-purple-700">Variance Robuste</h5>
              <CourseEquation latex="s_r^2 = 1.4826 \times MAD" />
              <p className="text-xs text-purple-600 mt-2">
                Estimation robuste de la variance, moins sensible aux extrêmes.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <CourseHighlight title="🎯 Guide de choix rapide" type="concept">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold mb-2">✅ Données "propres" (sans aberrantes) :</h5>
                  <ul className="space-y-1">
                    <li>• <strong>Écart-type :</strong> Standard et polyvalent</li>
                    <li>• <strong>Variance :</strong> Pour calculs statistiques</li>
                    <li>• <strong>CV :</strong> Pour comparaisons relatives</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">🛡️ Données "sales" (avec aberrantes) :</h5>
                  <ul className="space-y-1">
                    <li>• <strong>IQR :</strong> Robuste et informatif</li>
                    <li>• <strong>MAD :</strong> Ultra-robuste</li>
                    <li>• <strong>Étendue :</strong> Pour détecter les extrêmes</li>
                  </ul>
                </div>
              </div>
            </CourseHighlight>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Visualizations Section */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
            <Zap className="h-6 w-6" />
            🎮 Laboratoire Interactif : Visualisations Dynamiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Visualization Type Selector */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                variant={selectedVisualization === 'variance' ? 'default' : 'outline'}
                onClick={() => setSelectedVisualization('variance')}
                className="flex items-center gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Animation Variance
              </Button>
              <Button
                variant={selectedVisualization === 'covariance' ? 'default' : 'outline'}
                onClick={() => setSelectedVisualization('covariance')}
                className="flex items-center gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                Covariance Interactive
              </Button>
              <Button
                variant={selectedVisualization === 'correlation' ? 'default' : 'outline'}
                onClick={() => setSelectedVisualization('correlation')}
                className="flex items-center gap-2"
              >
                <Target className="h-4 w-4" />
                Matrice de Corrélation
              </Button>
            </div>

            {/* Variance Animation */}
            {selectedVisualization === 'variance' && (
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-700">📊 Animation : Calcul de la Variance Étape par Étape</h4>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={startAnimation}
                      disabled={isAnimating}
                      className="flex items-center gap-1"
                    >
                      <Play className="h-3 w-3" />
                      Démarrer
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={resetAnimation}
                      className="flex items-center gap-1"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Reset
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" domain={[0, 9]} />
                        <YAxis domain={[5, 16]} />
                        <Tooltip 
                          formatter={(value, name) => [
                            value, 
                            name === 'y' ? 'Valeur' : name === 'mean' ? 'Moyenne' : 'Écart'
                          ]}
                        />
                        
                        {/* Mean line as reference */}
                         <ReferenceLine y={10} stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                        
                        {/* Data points */}
                        <Scatter 
                          data={varianceData.slice(0, animationStep + 1)} 
                          fill="#3b82f6"
                        >
                          {varianceData.slice(0, animationStep + 1).map((_, index) => (
                            <Cell key={`cell-${index}`} fill={index === animationStep ? '#ef4444' : '#3b82f6'} />
                          ))}
                        </Scatter>
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold mb-2">Étape {animationStep + 1}/8</h5>
                      {animationStep < varianceData.length && (
                        <div className="text-sm space-y-2">
                          <p><strong>Point actuel:</strong> ({varianceData[animationStep].x}, {varianceData[animationStep].y})</p>
                          <p><strong>Moyenne:</strong> {varianceData[animationStep].mean}</p>
                          <p><strong>Écart:</strong> {varianceData[animationStep].y} - {varianceData[animationStep].mean} = {varianceData[animationStep].deviation}</p>
                          <p><strong>Écart²:</strong> ({varianceData[animationStep].deviation})² = {Math.pow(varianceData[animationStep].deviation, 2)}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded">
                      <h5 className="font-semibold mb-2">Calcul en cours</h5>
                      <div className="text-sm">
                        <p><strong>Somme des écarts²:</strong> {varianceData.slice(0, animationStep + 1).reduce((sum, item) => sum + Math.pow(item.deviation, 2), 0)}</p>
                        <p><strong>Variance actuelle:</strong> {(varianceData.slice(0, animationStep + 1).reduce((sum, item) => sum + Math.pow(item.deviation, 2), 0) / Math.max(1, animationStep)).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Covariance Interactive Scatter Plot */}
            {selectedVisualization === 'covariance' && (
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">🌡️ Covariance Interactive : Température vs Ventes de Glaces</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="temperature" 
                          domain={[10, 40]}
                          label={{ value: 'Température (°C)', position: 'insideBottom', offset: -10 }}
                        />
                        <YAxis 
                          domain={[50, 250]}
                          label={{ value: 'Ventes (€)', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip 
                          formatter={(value, name) => [
                            value, 
                            name === 'sales' ? 'Ventes (€)' : 'Température (°C)'
                          ]}
                        />
                        
                        <Scatter data={covarianceData} fill="#8b5cf6">
                          {covarianceData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.tempDev * entry.salesDev > 0 ? '#10b981' : '#ef4444'} 
                            />
                          ))}
                        </Scatter>
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded">
                      <h5 className="font-semibold mb-3">🔍 Analyse des Points</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Points verts : Contribution positive à la covariance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span>Points rouges : Contribution négative à la covariance</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-semibold mb-2">📊 Statistiques</h5>
                      <div className="text-sm space-y-1">
                        <p><strong>Température moyenne:</strong> {(covarianceData.reduce((sum, item) => sum + item.temperature, 0) / covarianceData.length).toFixed(1)}°C</p>
                        <p><strong>Ventes moyennes:</strong> {(covarianceData.reduce((sum, item) => sum + item.sales, 0) / covarianceData.length).toFixed(0)}€</p>
                        <p><strong>Covariance:</strong> {(covarianceData.reduce((sum, item) => sum + (item.tempDev * item.salesDev), 0) / (covarianceData.length - 1)).toFixed(1)}</p>
                        <p><strong>Corrélation:</strong> 0.89 (forte corrélation positive)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Correlation Matrix Heatmap */}
            {selectedVisualization === 'correlation' && (
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="text-lg font-semibold text-indigo-700 mb-4">🔥 Heatmap : Matrice de Corrélation des Notes</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="grid grid-cols-5 gap-1 mb-4">
                      <div></div>
                      {['Maths', 'Physique', 'Chimie', 'Histoire'].map(subject => (
                        <div key={subject} className="text-xs font-semibold text-center p-2">
                          {subject}
                        </div>
                      ))}
                      
                      {correlationMatrix.map((row, _) => (
                        <React.Fragment key={row.variable}>
                          <div className="text-xs font-semibold p-2 flex items-center">
                            {row.variable}
                          </div>
                          {['Maths', 'Physique', 'Chimie', 'Histoire'].map(col => {
                            const value = row[col as keyof typeof row] as number;
                            return (
                              <div 
                                key={`${row.variable}-${col}`}
                                className="h-12 flex items-center justify-center text-xs font-semibold text-white rounded"
                                style={{ backgroundColor: getCorrelationColor(value) }}
                              >
                                {value.toFixed(2)}
                              </div>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span>Corrélation faible</span>
                      <div className="flex gap-1">
                        {[0.2, 0.4, 0.6, 0.8, 1.0].map(val => (
                          <div 
                            key={val}
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: getCorrelationColor(val) }}
                          ></div>
                        ))}
                      </div>
                      <span>Corrélation forte</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded">
                      <h5 className="font-semibold mb-3">🎯 Interprétations</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong>Maths ↔ Physique (0.85):</strong> Très forte corrélation - les compétences mathématiques aident en physique</p>
                        <p><strong>Physique ↔ Chimie (0.78):</strong> Forte corrélation - sciences expérimentales liées</p>
                        <p><strong>Sciences ↔ Histoire (0.38-0.45):</strong> Corrélation modérée - compétences générales d'étude</p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded">
                      <h5 className="font-semibold mb-2">💡 Applications Pratiques</h5>
                      <div className="text-sm space-y-1">
                        <p>• <strong>Orientation scolaire:</strong> Prédire la réussite dans une matière</p>
                        <p>• <strong>Détection d'anomalies:</strong> Identifier des profils atypiques</p>
                        <p>• <strong>Réduction de dimensionnalité:</strong> Grouper les matières similaires</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Section Covariance et Matrices de Covariance */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-ds-purple-600 flex items-center gap-2">
          <TrendingUp className="h-6 w-6" />
          Covariance et Matrices de Covariance
        </h3>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-purple-800">🔗 Comprendre les Relations entre Variables</h4>
          <p className="text-gray-700 mb-4">
            Alors que la variance mesure la dispersion d'une seule variable, la <strong>covariance</strong> mesure 
            comment deux variables varient ensemble. C'est la fondation de l'analyse multivariée et de l'apprentissage automatique.
          </p>
        </div>

        {/* Covariance - Définition et Formule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-purple-700">📊 Covariance : Mesurer la Relation Linéaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-purple-600">Formule de la Covariance</h5>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="text-lg font-mono mb-2">Cov(X,Y) = E[(X - μₓ)(Y - μᵧ)]</div>
                    <div className="text-sm text-gray-600">ou pour un échantillon :</div>
                    <div className="text-lg font-mono mt-2">Cov(X,Y) = Σ(xᵢ - x̄)(yᵢ - ȳ) / (n-1)</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <strong className="text-green-600">Covariance positive :</strong> Les variables augmentent ensemble
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <strong className="text-red-600">Covariance négative :</strong> Une variable augmente quand l'autre diminue
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-600">Covariance nulle :</strong> Pas de relation linéaire
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 text-purple-600">Exemple Pratique : Température et Ventes de Glaces</h5>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm space-y-2">
                    <div className="grid grid-cols-3 gap-2 font-semibold border-b pb-2">
                      <span>Température (°C)</span>
                      <span>Ventes (€)</span>
                      <span>Produit</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>25 (μ=20)</span>
                      <span>150 (μ=120)</span>
                      <span>5 × 30 = 150</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>30 (μ=20)</span>
                      <span>200 (μ=120)</span>
                      <span>10 × 80 = 800</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <span>15 (μ=20)</span>
                      <span>80 (μ=120)</span>
                      <span>(-5) × (-40) = 200</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <strong className="text-blue-700">Covariance = (150 + 800 + 200) / 2 = 575</strong>
                    <p className="text-xs text-blue-600 mt-1">Relation positive forte : plus il fait chaud, plus on vend de glaces !</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Matrice de Covariance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-700">🔢 Matrice de Covariance : L'Analyse Multivariée</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-indigo-600">Structure de la Matrice</h5>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="text-sm mb-2">Pour 3 variables X, Y, Z :</div>
                    <div className="font-mono text-sm">
                      <div>⎡ Var(X)   Cov(X,Y) Cov(X,Z) ⎤</div>
                      <div>⎢ Cov(Y,X) Var(Y)   Cov(Y,Z) ⎥</div>
                      <div>⎣ Cov(Z,X) Cov(Z,Y) Var(Z)   ⎦</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <strong className="text-green-700">Propriétés clés :</strong>
                    <ul className="text-sm text-green-600 mt-2 space-y-1">
                      <li>• Matrice symétrique : Cov(X,Y) = Cov(Y,X)</li>
                      <li>• Diagonale = variances individuelles</li>
                      <li>• Hors-diagonale = covariances entre paires</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 text-indigo-600">Applications en Data Science</h5>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-blue-700 mb-2">🎯 Analyse en Composantes Principales (PCA)</h6>
                    <p className="text-sm text-blue-600">
                      La PCA décompose la matrice de covariance pour identifier les directions 
                      de variance maximale dans les données.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-purple-700 mb-2">📊 Détection d'Anomalies</h6>
                    <p className="text-sm text-purple-600">
                      Les points qui s'écartent significativement de la structure de covariance 
                      peuvent être des anomalies.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h6 className="font-semibold text-orange-700 mb-2">🤖 Machine Learning</h6>
                    <p className="text-sm text-orange-600">
                      Utilisée dans les algorithmes bayésiens, la régression multivariée, 
                      et l'optimisation de portefeuilles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemple Interactif : Matrice de Covariance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-700">🧪 Laboratoire : Analyse de Covariance Multi-Variables</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h5 className="font-semibold mb-4 text-emerald-800">Exemple : Données de Performance d'Étudiants</h5>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold mb-3 text-emerald-700">Données Brutes</h6>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-xs font-mono space-y-1">
                      <div className="grid grid-cols-4 gap-2 font-semibold border-b pb-1">
                        <span>Étudiant</span>
                        <span>Maths</span>
                        <span>Physique</span>
                        <span>Chimie</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2"><span>A</span><span>85</span><span>82</span><span>78</span></div>
                      <div className="grid grid-cols-4 gap-2"><span>B</span><span>92</span><span>88</span><span>85</span></div>
                      <div className="grid grid-cols-4 gap-2"><span>C</span><span>78</span><span>75</span><span>80</span></div>
                      <div className="grid grid-cols-4 gap-2"><span>D</span><span>88</span><span>85</span><span>82</span></div>
                      <div className="grid grid-cols-4 gap-2"><span>E</span><span>95</span><span>92</span><span>88</span></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-3 text-emerald-700">Matrice de Covariance Calculée</h6>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-xs font-mono text-center">
                      <div className="mb-2 text-gray-600">Cov(Maths, Physique, Chimie)</div>
                      <div className="space-y-1">
                        <div>⎡  42.5   38.2   32.1 ⎤</div>
                        <div>⎢  38.2   35.8   29.5 ⎥</div>
                        <div>⎣  32.1   29.5   25.2 ⎦</div>
                      </div>
                    </div>
                    <div className="mt-4 text-xs space-y-2">
                      <div className="bg-green-100 p-2 rounded">
                        <strong>Interprétation :</strong>
                        <ul className="mt-1 space-y-1">
                          <li>• Toutes covariances positives → corrélation positive</li>
                          <li>• Maths-Physique : relation la plus forte (38.2)</li>
                          <li>• Les bonnes notes tendent à aller ensemble</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils Pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-amber-700">💡 Conseils Pratiques pour l'Analyse de Covariance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3 text-amber-600">⚠️ Pièges à Éviter</h5>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                    <strong className="text-red-700">Unités différentes :</strong>
                    <p className="text-sm text-red-600 mt-1">
                      Covariance dépend des unités. Préférer la corrélation (normalisée) pour comparer.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <strong className="text-orange-700">Relations non-linéaires :</strong>
                    <p className="text-sm text-orange-600 mt-1">
                      Covariance nulle ≠ indépendance. Peut masquer des relations courbes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 text-amber-600">✅ Bonnes Pratiques</h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <strong className="text-green-700">Standardisation :</strong>
                    <p className="text-sm text-green-600 mt-1">
                      Centrer et réduire les variables avant calcul de covariance.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <strong className="text-blue-700">Visualisation :</strong>
                    <p className="text-sm text-blue-600 mt-1">
                      Utiliser des heatmaps pour visualiser les matrices de covariance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DispersionSection;
