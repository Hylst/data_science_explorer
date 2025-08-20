
import { useState, useMemo } from "react";
import { Target, TrendingUp, BarChart3, Zap, Calculator, Dice6, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart, ScatterChart, Scatter } from "recharts";

/**
 * Composant pour la section Variables Aléatoires
 * Présente les concepts avec des exemples interactifs et des visualisations dynamiques
 */
const RandomVariables = () => {
  const [selectedExample, setSelectedExample] = useState<'notifications' | 'temperature' | 'sales'>('notifications');
  const [lambdaParam, setLambdaParam] = useState([3]);
  const [muParam, setMuParam] = useState([25]);
  const [sigmaParam, setSigmaParam] = useState([5]);

  // Données pour les notifications (distribution de Poisson)
  const notificationData = useMemo(() => {
    const lambda = lambdaParam[0];
    const data = [];
    for (let k = 0; k <= 10; k++) {
      const probability = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
      data.push({ notifications: k, probability: probability.toFixed(4) });
    }
    return data;
  }, [lambdaParam]);

  // Données pour la température (distribution normale)
  const temperatureData = useMemo(() => {
    const mu = muParam[0];
    const sigma = sigmaParam[0];
    return Array.from({ length: 100 }, (_, i) => {
      const temp = mu - 3*sigma + i * (6*sigma/99);
      const probability = (1/(sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((temp - mu)/sigma, 2));
      return { 
        temperature: temp.toFixed(1), 
        probability: probability.toFixed(4),
        cumulative: normalCDF(temp, mu, sigma).toFixed(4)
      };
    });
  }, [muParam, sigmaParam]);

  // Données pour les ventes (exemple mixte)
  const salesData = [
    { day: 'Lun', sales: 45, type: 'Faible' },
    { day: 'Mar', sales: 52, type: 'Faible' },
    { day: 'Mer', sales: 48, type: 'Faible' },
    { day: 'Jeu', sales: 67, type: 'Moyen' },
    { day: 'Ven', sales: 89, type: 'Élevé' },
    { day: 'Sam', sales: 134, type: 'Très élevé' },
    { day: 'Dim', sales: 98, type: 'Élevé' }
  ];

  /**
   * Calcule la factorielle d'un nombre
   */
  function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  /**
   * Approximation de la fonction de répartition normale
   */
  function normalCDF(x: number, mu: number, sigma: number): number {
    const z = (x - mu) / sigma;
    return 0.5 * (1 + erf(z / Math.sqrt(2)));
  }

  /**
   * Approximation de la fonction d'erreur
   */
  function erf(x: number): number {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;
    
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  }

  /**
   * Calcule les statistiques descriptives
   */
  const calculateStats = (data: number[]) => {
    const n = data.length;
    const mean = data.reduce((sum, x) => sum + x, 0) / n;
    const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);
    const sortedData = [...data].sort((a, b) => a - b);
    const median = n % 2 === 0 
      ? (sortedData[n/2 - 1] + sortedData[n/2]) / 2 
      : sortedData[Math.floor(n/2)];
    
    return { mean, variance, stdDev, median, min: Math.min(...data), max: Math.max(...data) };
  };

  const salesStats = calculateStats(salesData.map(d => d.sales));

  return (
    <section id="random-variables" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        🎯 2. Variables Aléatoires : Transformer le Hasard en Nombres
      </h2>
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-100">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            🧠 Analogie : Le traducteur universel du hasard
          </h3>
          <p className="text-lg mb-4">
            Imaginez un traducteur magique qui transforme tout événement aléatoire en nombre précis. 
            "Pile ou Face" devient "0 ou 1". "Très chaud, tiède, froid" devient "30°C, 20°C, 10°C". 
            "Beaucoup de clients, peu de clients" devient "150, 50"...
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <CourseEquation latex="X: \text{Monde du hasard} \rightarrow \text{Monde des nombres}" />
          </div>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>🎯 Pourquoi c'est génial ?</strong> Une fois que le hasard devient des nombres, 
              on peut faire des calculs, des graphiques, des prédictions... Bref, de la vraie Data Science !
            </p>
          </div>
          
          {/* Sélecteur d'exemples interactifs */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Button 
              variant={selectedExample === 'notifications' ? 'default' : 'outline'}
              onClick={() => setSelectedExample('notifications')}
              className="flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              Notifications
            </Button>
            <Button 
              variant={selectedExample === 'temperature' ? 'default' : 'outline'}
              onClick={() => setSelectedExample('temperature')}
              className="flex items-center gap-2"
            >
              <TrendingUp className="h-4 w-4" />
              Température
            </Button>
            <Button 
              variant={selectedExample === 'sales' ? 'default' : 'outline'}
              onClick={() => setSelectedExample('sales')}
              className="flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              Ventes
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              🔢 Variables Discrètes : Les Compteurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Elles comptent des choses : nombre de clients, d'erreurs, de ventes, de likes...
                Ce sont des nombres entiers qu'on peut énumérer.
              </p>
              
              <CourseHighlight title="📱 Exemple moderne : Notifications smartphone" type="example">
                <div className="space-y-3">
                  <p className="text-sm">Soit X = "nombre de notifications reçues en 1 heure"</p>
                  <div className="bg-purple-50 p-3 rounded text-xs space-y-1">
                    <p>• X peut valoir 0, 1, 2, 3, 4, 5... (valeurs distinctes et dénombrables)</p>
                    <p>• P(X = 3) = probabilité de recevoir exactement 3 notifications</p>
                    <p>• P(X ≤ 2) = probabilité de recevoir au maximum 2 notifications</p>
                    <p>• P(X ≥ 1) = probabilité de recevoir au moins 1 notification</p>
                  </div>
                </div>
              </CourseHighlight>

              {/* Contrôle interactif pour lambda */}
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-4 mb-3">
                  <label className="text-sm font-medium">Paramètre λ (moyenne) :</label>
                  <span className="text-lg font-bold text-purple-600">{lambdaParam[0]}</span>
                </div>
                <Slider
                  value={lambdaParam}
                  onValueChange={setLambdaParam}
                  max={8}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Ajustez λ pour voir comment la distribution change
                </p>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={notificationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="notifications" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Probabilité']} />
                    <Bar dataKey="probability" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-purple-50 p-3 rounded text-sm">
                <strong>📊 Fonction de masse :</strong>
                <CourseEquation latex="P(X = k) = \text{probabilité d'avoir exactement } k \text{ notifications}" />
              </div>

              <div className="space-y-2 text-xs">
                <h5 className="font-semibold">🎯 Autres exemples de variables discrètes :</h5>
                <ul className="space-y-1 ml-4">
                  <li>• Nombre de défauts dans un produit</li>
                  <li>• Nombre de visiteurs sur un site web</li>
                  <li>• Nombre de pannes par mois</li>
                  <li>• Score d'un match de football</li>
                  <li>• Nombre de clics sur une pub</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              📏 Variables Continues : Les Mesureurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Elles mesurent des quantités : température, poids, temps, distance, prix...
                Ce sont des nombres réels qui peuvent prendre n'importe quelle valeur dans un intervalle.
              </p>
              
              <CourseHighlight title="🌡️ Exemple concret : Température extérieure" type="example">
                <div className="space-y-3">
                  <p className="text-sm">Soit Y = "température à 14h demain"</p>
                  <div className="bg-orange-50 p-3 rounded text-xs space-y-1">
                    <p>• Y peut valoir 20.5°C, 20.51°C, 20.512°C... (infinité de valeurs possibles)</p>
                    <p>• P(Y = 25.0°C exactement) = 0 (probabilité nulle pour une valeur précise)</p>
                    <p>• P(20°C ≤ Y ≤ 30°C) = probabilité d'une température entre 20 et 30°C</p>
                    <p>• On travaille toujours avec des intervalles !</p>
                  </div>
                </div>
              </CourseHighlight>

              {/* Contrôles interactifs pour μ et σ */}
              <div className="bg-white p-4 rounded-lg border space-y-4">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <label className="text-sm font-medium">Moyenne μ :</label>
                    <span className="text-lg font-bold text-orange-600">{muParam[0]}°C</span>
                  </div>
                  <Slider
                    value={muParam}
                    onValueChange={setMuParam}
                    max={35}
                    min={15}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <label className="text-sm font-medium">Écart-type σ :</label>
                    <span className="text-lg font-bold text-orange-600">{sigmaParam[0]}°C</span>
                  </div>
                  <Slider
                    value={sigmaParam}
                    onValueChange={setSigmaParam}
                    max={10}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-gray-600">
                  Modifiez μ et σ pour voir l'impact sur la distribution normale
                </p>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="temperature" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Densité']} />
                    <Area type="monotone" dataKey="probability" stroke="#F97316" fill="#FED7AA" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-orange-50 p-3 rounded text-sm">
                <strong>📊 Fonction de densité :</strong>
                <CourseEquation latex="f(y) = \text{densité de probabilité en } y" />
                <p className="text-xs mt-1">
                  L'aire sous la courbe dans un intervalle = probabilité de cet intervalle
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <h5 className="font-semibold">🎯 Autres exemples de variables continues :</h5>
                <ul className="space-y-1 ml-4">
                  <li>• Temps d'attente dans une file</li>
                  <li>• Poids d'un colis</li>
                  <li>• Prix d'une action en bourse</li>
                  <li>• Vitesse d'une voiture</li>
                  <li>• Revenus annuels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            🎯 Caractéristiques importantes d'une variable aléatoire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-800">1</Badge>
                Espérance (moyenne) - E[X]
              </h4>
              <CourseEquation latex="E[X] = \sum x_i \cdot P(X = x_i) \text{ (discret)}" />
              <CourseEquation latex="E[X] = \int x \cdot f(x) dx \text{ (continu)}" />
              <div className="bg-blue-50 p-3 rounded text-sm">
                <p><strong>💡 Intuition :</strong> La valeur "typique" qu'on s'attend à observer.</p>
                <p className="text-xs mt-1">
                  Exemple : Si en moyenne vous recevez 3 notifications/heure, E[X] = 3
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">2</Badge>
                Variance - Var(X)
              </h4>
              <CourseEquation latex="Var(X) = E[(X - E[X])^2]" />
              <CourseEquation latex="= E[X^2] - (E[X])^2" />
              <div className="bg-green-50 p-3 rounded text-sm">
                <p><strong>💡 Intuition :</strong> Mesure la "dispersion" autour de la moyenne.</p>
                <p className="text-xs mt-1">
                  Exemple : Grande variance = notifications très variables (parfois 0, parfois 10)
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-purple-100 text-purple-800">3</Badge>
                Écart-type - σ(X)
              </h4>
              <CourseEquation latex="\sigma(X) = \sqrt{Var(X)}" />
              <div className="bg-purple-50 p-3 rounded text-sm">
                <p><strong>💡 Intuition :</strong> Variance dans la même unité que X.</p>
                <p className="text-xs mt-1">
                  Exemple : Si E[X] = 3 notifications et σ = 1.5, la plupart des valeurs sont entre 1.5 et 4.5
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-800">4</Badge>
                Fonction de répartition - F(x)
              </h4>
              <CourseEquation latex="F(x) = P(X \leq x)" />
              <div className="bg-orange-50 p-3 rounded text-sm">
                <p><strong>💡 Intuition :</strong> Probabilité d'être "en dessous" d'une valeur.</p>
                <p className="text-xs mt-1">
                  Exemple : F(2) = probabilité de recevoir 2 notifications ou moins
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exemple interactif basé sur la sélection */}
      {selectedExample === 'sales' && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              📊 Analyse des ventes hebdomadaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Données de ventes</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Statistiques calculées</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span>Moyenne :</span>
                    <span className="font-bold">{salesStats.mean.toFixed(1)} €</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded flex justify-between">
                    <span>Médiane :</span>
                    <span className="font-bold">{salesStats.median.toFixed(1)} €</span>
                  </div>
                  <div className="bg-purple-50 p-3 rounded flex justify-between">
                    <span>Écart-type :</span>
                    <span className="font-bold">{salesStats.stdDev.toFixed(1)} €</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded flex justify-between">
                    <span>Min - Max :</span>
                    <span className="font-bold">{salesStats.min} - {salesStats.max} €</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Applications en Data Science */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            🔬 Applications en Data Science
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Machine Learning</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <h5 className="font-medium">Classification</h5>
                  <p className="text-sm text-gray-600">Les variables aléatoires modélisent l'incertitude des prédictions</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="font-medium">Régression</h5>
                  <p className="text-sm text-gray-600">Estimation des intervalles de confiance</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <h5 className="font-medium">Clustering</h5>
                  <p className="text-sm text-gray-600">Modélisation de la variabilité des groupes</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Analyse de données</h4>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded">
                  <h5 className="font-medium">A/B Testing</h5>
                  <p className="text-sm text-gray-600">Comparaison statistique de variantes</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <h5 className="font-medium">Détection d'anomalies</h5>
                  <p className="text-sm text-gray-600">Identification des valeurs aberrantes</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <h5 className="font-medium">Prévisions</h5>
                  <p className="text-sm text-gray-600">Modélisation de l'incertitude future</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercice pratique interactif */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dice6 className="h-5 w-5" />
            🎯 Exercice Interactif : Simulation Monte Carlo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-gray-700">
              Simulons le lancement de deux dés et analysons la distribution de leur somme.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Résultats théoriques vs simulés</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-gray-600">Somme la plus probable</div>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl font-bold text-green-600">16.67%</div>
                  <div className="text-sm text-gray-600">Probabilité de 7</div>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl font-bold text-purple-600">7</div>
                  <div className="text-sm text-gray-600">Espérance</div>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <div className="text-2xl font-bold text-orange-600">2.42</div>
                  <div className="text-sm text-gray-600">Écart-type</div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">💡 Concepts clés à retenir :</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Loi des grands nombres :</strong> Plus on simule, plus on se rapproche de la théorie</li>
                <li>• <strong>Convergence :</strong> Les résultats se stabilisent avec le nombre d'essais</li>
                <li>• <strong>Variabilité :</strong> Chaque simulation donne des résultats légèrement différents</li>
                <li>• <strong>Distribution :</strong> La forme de la courbe révèle les propriétés de la variable</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🚀 Applications pratiques :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium">Finance</h5>
                  <p className="text-sm text-gray-600">Évaluation des risques d'investissement</p>
                </div>
                <div>
                  <h5 className="font-medium">Ingénierie</h5>
                  <p className="text-sm text-gray-600">Tests de fiabilité des systèmes</p>
                </div>
                <div>
                  <h5 className="font-medium">Marketing</h5>
                  <p className="text-sm text-gray-600">Prédiction du comportement client</p>
                </div>
                <div>
                  <h5 className="font-medium">Santé</h5>
                  <p className="text-sm text-gray-600">Modélisation épidémiologique</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RandomVariables;
