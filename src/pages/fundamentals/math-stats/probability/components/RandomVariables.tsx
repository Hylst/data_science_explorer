
import { Target, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const RandomVariables = () => {
  const notificationData = [
    { notifications: 0, probability: 0.05 },
    { notifications: 1, probability: 0.15 },
    { notifications: 2, probability: 0.25 },
    { notifications: 3, probability: 0.30 },
    { notifications: 4, probability: 0.15 },
    { notifications: 5, probability: 0.10 }
  ];

  const temperatureData = Array.from({ length: 50 }, (_, i) => {
    const temp = 15 + i * 0.4; // Température de 15°C à 35°C
    const probability = Math.exp(-Math.pow(temp - 25, 2) / 50) / Math.sqrt(2 * Math.PI * 25);
    return { temperature: temp.toFixed(1), probability: (probability * 10).toFixed(4) };
  });

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

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="temperature" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Densité']} />
                    <Line type="monotone" dataKey="probability" stroke="#F97316" strokeWidth={2} dot={false} />
                  </LineChart>
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            💪 Exercice pratique : Temps d'attente au drive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold mb-2">🚗 Situation :</h4>
              <p className="text-sm">
                Vous étudiez les temps d'attente dans un drive McDonald's. Soit T = "temps d'attente en minutes".
                D'après vos observations, T suit approximativement une distribution avec :
              </p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Temps moyen : E[T] = 4 minutes</li>
                <li>• Écart-type : σ(T) = 2 minutes</li>
                <li>• Temps minimum possible : 1 minute</li>
                <li>• 90% des clients attendent moins de 7 minutes</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">🎯 Questions d'analyse :</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Q1 :</strong> Que signifie concrètement E[T] = 4 minutes ?
                    <details className="mt-2">
                      <summary className="cursor-pointer text-blue-600 text-xs">👆 Réponse</summary>
                      <p className="text-xs mt-1">
                        Si vous venez de nombreuses fois, votre temps d'attente moyen sera proche de 4 minutes. 
                        Certaines fois ce sera 2 min, d'autres fois 6 min, mais la moyenne tend vers 4.
                      </p>
                    </details>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <strong>Q2 :</strong> Un écart-type de 2 minutes, c'est beaucoup ou peu ?
                    <details className="mt-2">
                      <summary className="cursor-pointer text-green-600 text-xs">👆 Analyse</summary>
                      <p className="text-xs mt-1">
                        C'est relativement élevé ! Cela signifie une grande variabilité. La plupart des temps 
                        seront entre 2 et 6 minutes (E[T] ± σ), mais il peut y avoir des attentes surprenantes.
                      </p>
                    </details>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>Q3 :</strong> Comment interpréter "90% des clients attendent moins de 7 min" ?
                    <details className="mt-2">
                      <summary className="cursor-pointer text-purple-600 text-xs">👆 Interprétation</summary>
                      <p className="text-xs mt-1">
                        C'est F(7) = 0.90. Cela signifie que 7 minutes est le 90e percentile. 
                        Seulement 10% des clients ont la malchance d'attendre plus de 7 minutes.
                      </p>
                    </details>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">🔧 Applications business :</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 p-3 rounded border-l-2 border-red-300">
                    <strong>📊 Objectif qualité :</strong>
                    <p className="text-xs mt-1">
                      "95% des clients doivent être servis en moins de 6 minutes"
                      <br/>→ Il faut réduire la variance (écart-type) !
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-300">
                    <strong>💰 Dimensionnement :</strong>
                    <p className="text-xs mt-1">
                      Combien de bornes de commande installer ? 
                      <br/>→ Utiliser E[T] et la loi des files d'attente
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-2 border-green-300">
                    <strong>📱 Communication client :</strong>
                    <p className="text-xs mt-1">
                      "Temps d'attente estimé : 4 ± 2 minutes"
                      <br/>→ Gérer les attentes des clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-700 mb-2">🎓 Points clés à retenir :</h4>
              <ul className="text-sm space-y-1">
                <li>• Les variables aléatoires transforment des situations réelles en modèles mathématiques</li>
                <li>• L'espérance donne la tendance centrale, la variance mesure l'incertitude</li>
                <li>• Ces mesures permettent de prendre des décisions business éclairées</li>
                <li>• En Data Science, on modélise presque tout avec des variables aléatoires !</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RandomVariables;
