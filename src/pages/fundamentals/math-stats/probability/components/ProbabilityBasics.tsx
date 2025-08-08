
import React from "react";
import { Calculator, Dice1, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ProbabilityBasics = () => {
  const diceData = [
    { face: 1, probability: 16.67 },
    { face: 2, probability: 16.67 },
    { face: 3, probability: 16.67 },
    { face: 4, probability: 16.67 },
    { face: 5, probability: 16.67 },
    { face: 6, probability: 16.67 }
  ];

  const weatherData = [
    { condition: 'Soleil', probability: 60, color: '#F59E0B' },
    { condition: 'Nuages', probability: 25, color: '#6B7280' },
    { condition: 'Pluie', probability: 15, color: '#3B82F6' }
  ];

  return (
    <section id="basics" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        📊 1. Les Fondements : Comprendre la Logique du Hasard
      </h2>
      
      <div className="mb-8">
        <CourseHighlight title="🤔 Question fondamentale" type="question">
          <div className="space-y-4">
            <p className="text-lg">
              Si je lance une pièce équilibrée, quelle est la probabilité d'obtenir "Pile" ?
            </p>
            <p className="text-sm">
              Votre intuition dit probablement "50%" ou "une chance sur deux". Mais pourquoi ? 
              Et comment le formaliser mathématiquement de manière rigoureuse ?
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm">
                <strong>💭 Réflexion :</strong> Cette question simple cache en réalité toute la richesse 
                de la théorie des probabilités. Nous allons la décortiquer ensemble !
              </p>
            </div>
          </div>
        </CourseHighlight>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Définition rigoureuse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                La probabilité d'un événement A est le rapport entre le nombre de cas favorables 
                et le nombre total de cas possibles (approche classique de Laplace).
              </p>
              <CourseEquation latex="P(A) = \frac{\text{Nombre de cas favorables}}{\text{Nombre total de cas possibles}}" />
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  🎯 Propriétés essentielles :
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Bornes</Badge>
                    <span>0 ≤ P(A) ≤ 1 (toujours entre 0% et 100%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Impossible</Badge>
                    <span>P(∅) = 0 (ne peut jamais arriver)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Certain</Badge>
                    <span>P(Ω) = 1 (arrive toujours)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Complémentaire</Badge>
                    <span>P(A') = 1 - P(A) ("le contraire")</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">💡 Astuce mnémotechnique</h4>
                <p className="text-sm">
                  Pensez aux probabilités comme des <strong>pourcentages de confiance</strong> :
                  0% = "impossible", 50% = "pile ou face", 100% = "certain"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dice1 className="h-5 w-5" />
              🎲 Exemple concret : Le dé équitable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={diceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="face" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, 'Probabilité']} />
                  <Bar dataKey="probability" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              <CourseEquation latex="P(\text{Face } i) = \frac{1}{6} \approx 16.67\%" />
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-green-700 mb-1">🔍 Analyse détaillée :</p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Cas favorables :</strong> 1 face spécifique</li>
                  <li>• <strong>Cas total :</strong> 6 faces possibles</li>
                  <li>• <strong>Équiprobabilité :</strong> chaque face a la même chance</li>
                  <li>• <strong>Symétrie :</strong> le dé n'est pas truqué</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-yellow-700 mb-1">⚠️ Dans la vraie vie :</p>
                <p className="text-xs">
                  Un vrai dé peut avoir de légers déséquilibres. La probabilité théorique 
                  (16.67%) peut différer de la fréquence observée !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <CourseHighlight title="🔍 Zoom sur : Les trois visions des probabilités" type="concept">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-800">1</Badge>
                Approche classique (Laplace)
              </h4>
              <p className="text-sm mb-2">Cas équiprobables et symétriques</p>
              <CourseEquation latex="P(A) = \frac{|A|}{|\Omega|}" />
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>✅ Avantages :</strong> Simple, intuitif</p>
                <p><strong>❌ Limites :</strong> Nécessite la symétrie</p>
                <p><strong>🎯 Exemples :</strong> Dés, cartes, loteries</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">2</Badge>
                Approche fréquentiste
              </h4>
              <p className="text-sm mb-2">Répétition d'expériences</p>
              <CourseEquation latex="P(A) = \lim_{n \to \infty} \frac{n_A}{n}" />
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>✅ Avantages :</strong> Applicable au monde réel</p>
                <p><strong>❌ Limites :</strong> Nécessite beaucoup de données</p>
                <p><strong>🎯 Exemples :</strong> Météo, tests médicaux, sondages</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <Badge className="bg-purple-100 text-purple-800">3</Badge>
                Approche subjective (Bayésienne)
              </h4>
              <p className="text-sm mb-2">Degré de croyance personnelle</p>
              <CourseEquation latex="P(A) = \text{Croyance subjective}" />
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>✅ Avantages :</strong> Intègre l'expertise humaine</p>
                <p><strong>❌ Limites :</strong> Peut être biaisée</p>
                <p><strong>🎯 Exemples :</strong> Paris sportifs, analyse d'experts</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">🎭 En pratique : Mélange des approches</h4>
            <p className="text-sm">
              Les Data Scientists modernes combinent les trois approches ! Par exemple, pour prédire 
              le succès d'un film : données historiques (fréquentiste) + sondages (classique) + 
              expertise des producteurs (subjective).
            </p>
          </div>
        </CourseHighlight>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            ⚡ Les Règles d'Or des Probabilités
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-blue-100 text-blue-800">Règle 1</Badge>
                Addition (Union d'événements) - "OU"
              </h4>
              <CourseEquation latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
              <CourseHighlight title="💡 Intuition : Le piège du double comptage" type="example">
                <div className="space-y-3">
                  <p>
                    Imaginez compter vos amis qui aiment le football OU le tennis. Si vous additionnez 
                    simplement les deux groupes, vous comptez deux fois ceux qui aiment les deux sports !
                  </p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <strong>📊 Exemple concret :</strong><br/>
                    • Amis qui aiment le foot : 15<br/>
                    • Amis qui aiment le tennis : 10<br/>
                    • Amis qui aiment les deux : 5<br/>
                    • Total qui aiment au moins un sport : 15 + 10 - 5 = 20
                  </div>
                </div>
              </CourseHighlight>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-green-100 text-green-800">Règle 2</Badge>
                Multiplication (Intersection d'événements) - "ET"
              </h4>
              <CourseEquation latex="P(A \cap B) = P(A) \times P(B|A)" />
              <CourseHighlight title="💡 Intuition : L'effet domino" type="example">
                <div className="space-y-3">
                  <p>
                    Pour que deux choses arrivent EN MÊME TEMPS, il faut que la première arrive, 
                    ET que la seconde arrive en tenant compte de ce qui s'est déjà passé.
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <strong>🎯 Exemple pratique :</strong><br/>
                    • Probabilité qu'il pleuve : 30%<br/>
                    • Probabilité d'être en retard s'il pleut : 60%<br/>
                    • Probabilité d'être en retard À CAUSE de la pluie : 30% × 60% = 18%
                  </div>
                </div>
              </CourseHighlight>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Badge className="bg-purple-100 text-purple-800">Cas spécial</Badge>
                Événements indépendants - "Pas d'influence mutuelle"
              </h4>
              <CourseEquation latex="P(A \cap B) = P(A) \times P(B)" />
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm mb-2">
                  <strong>🔑 Définition :</strong> Deux événements sont indépendants quand la réalisation 
                  de l'un n'influence pas la probabilité de l'autre.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <strong>✅ Exemples d'indépendance :</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Lancer deux pièces différentes</li>
                      <li>• Résultats de loteries séparées</li>
                      <li>• Météo aujourd'hui vs notes d'un étudiant</li>
                    </ul>
                  </div>
                  <div>
                    <strong>❌ Exemples de dépendance :</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Tirer deux cartes sans remise</li>
                      <li>• Météo aujourd'hui vs demain</li>
                      <li>• Niveau d'études vs salaire</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🌤️ Exercice pratique : Prévisions météo intelligentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mb-4 text-sm">
                Dans votre ville, l'application météo indique les probabilités suivantes pour demain :
              </p>
              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={weatherData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="probability"
                      label={(entry) => `${entry.condition}: ${entry.probability}%`}
                    >
                      {weatherData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-gray-50 p-3 rounded text-xs">
                <strong>🎯 Rappel important :</strong> Ces probabilités doivent totaliser 100% 
                car il s'agit d'événements mutuellement exclusifs (il ne peut pas y avoir 
                simultanément soleil ET pluie au même moment et endroit).
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">💪 Questions à résoudre :</h4>
              <div className="space-y-4 text-sm">
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <strong>Q1 :</strong> Quelle est la probabilité qu'il ne pleuve PAS ?
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 text-xs">👆 Cliquez pour la solution</summary>
                    <div className="mt-2 text-xs bg-white p-2 rounded">
                      <strong>Réponse :</strong> P(Pas de pluie) = P(Soleil ∪ Nuages) = 60% + 25% = 85%<br/>
                      <em>ou plus simplement : P(Pas de pluie) = 1 - P(Pluie) = 1 - 0.15 = 0.85 = 85%</em>
                    </div>
                  </details>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <strong>Q2 :</strong> Si vous sortez sans parapluie, quelle est la probabilité d'être trempé ?
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 text-xs">👆 Cliquez pour la solution</summary>
                    <div className="mt-2 text-xs bg-white p-2 rounded">
                      <strong>Réponse :</strong> P(Être trempé) = P(Pluie) = 15%<br/>
                      <em>C'est votre tolérance au risque qui détermine si c'est acceptable !</em>
                    </div>
                  </details>
                </div>
                
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                  <strong>Q3 :</strong> Devez-vous prendre un parapluie ? (Question de décision)
                  <details className="mt-2">
                    <summary className="cursor-pointer text-blue-600 text-xs">👆 Cliquez pour l'analyse</summary>
                    <div className="mt-2 text-xs bg-white p-2 rounded space-y-1">
                      <p><strong>Analyse coût/bénéfice :</strong></p>
                      <p>• <strong>Coût de prendre un parapluie :</strong> Encombrement</p>
                      <p>• <strong>Coût d'être trempé :</strong> Inconfort, possible maladie</p>
                      <p>• <strong>Recommandation :</strong> Avec 15% de risque, la plupart des gens prendraient un parapluie.</p>
                      <p><em>🎯 Règle générale : Au-dessus de 10-20% de pluie, emportez un parapluie !</em></p>
                    </div>
                  </details>
                </div>
              </div>
              
              <div className="mt-4 bg-indigo-50 p-3 rounded">
                <h5 className="font-semibold text-indigo-700 text-sm mb-1">🧠 Réflexion avancée</h5>
                <p className="text-xs">
                  Cette situation illustre parfaitement comment les probabilités guident nos décisions 
                  quotidiennes. En Data Science, nous formalisons ce type de raisonnement pour 
                  des décisions business beaucoup plus complexes !
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProbabilityBasics;
