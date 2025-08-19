
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, BarChart3, AlertCircle, Target, Zap } from "lucide-react";

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
    </section>
  );
};

export default DispersionSection;
