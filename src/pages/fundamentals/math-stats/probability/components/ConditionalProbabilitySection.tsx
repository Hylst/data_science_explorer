import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TreePine, AlertTriangle } from "lucide-react";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

/**
 * Composant pour la section sur la probabilité conditionnelle
 * Présente les concepts avec des diagrammes en arbre et des exemples interactifs
 */
const ConditionalProbabilitySection = () => {
  const [selectedScenario, setSelectedScenario] = useState<'medical' | 'weather' | 'marketing'>('medical');
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  // Données pour l'exemple médical
  const medicalScenario = {
    title: "🏥 Test Médical",
    description: "Diagnostic d'une maladie avec un test",
    initialEvent: "Population",
    branches: [
      {
        condition: "Malade",
        probability: 0.01,
        color: "#EF4444",
        outcomes: [
          { result: "Test +", probability: 0.95, joint: 0.01 * 0.95 },
          { result: "Test -", probability: 0.05, joint: 0.01 * 0.05 }
        ]
      },
      {
        condition: "Sain",
        probability: 0.99,
        color: "#10B981",
        outcomes: [
          { result: "Test +", probability: 0.02, joint: 0.99 * 0.02 },
          { result: "Test -", probability: 0.98, joint: 0.99 * 0.98 }
        ]
      }
    ]
  };

  // Données pour l'exemple météo
  const weatherScenario = {
    title: "🌤️ Prévision Météo",
    description: "Prédiction de pluie selon les nuages",
    initialEvent: "Journée",
    branches: [
      {
        condition: "Nuageux",
        probability: 0.4,
        color: "#6B7280",
        outcomes: [
          { result: "Pluie", probability: 0.7, joint: 0.4 * 0.7 },
          { result: "Sec", probability: 0.3, joint: 0.4 * 0.3 }
        ]
      },
      {
        condition: "Dégagé",
        probability: 0.6,
        color: "#F59E0B",
        outcomes: [
          { result: "Pluie", probability: 0.1, joint: 0.6 * 0.1 },
          { result: "Sec", probability: 0.9, joint: 0.6 * 0.9 }
        ]
      }
    ]
  };

  // Données pour l'exemple marketing
  const marketingScenario = {
    title: "📧 Email Marketing",
    description: "Taux d'ouverture selon le segment",
    initialEvent: "Clients",
    branches: [
      {
        condition: "VIP",
        probability: 0.2,
        color: "#8B5CF6",
        outcomes: [
          { result: "Ouvre", probability: 0.6, joint: 0.2 * 0.6 },
          { result: "Ignore", probability: 0.4, joint: 0.2 * 0.4 }
        ]
      },
      {
        condition: "Standard",
        probability: 0.8,
        color: "#3B82F6",
        outcomes: [
          { result: "Ouvre", probability: 0.25, joint: 0.8 * 0.25 },
          { result: "Ignore", probability: 0.75, joint: 0.8 * 0.75 }
        ]
      }
    ]
  };

  const scenarios = {
    medical: medicalScenario,
    weather: weatherScenario,
    marketing: marketingScenario
  };

  const currentScenario = scenarios[selectedScenario];



  /**
   * Génère les données pour le graphique en barres
   */
  const generateBarData = () => {
    const data: any[] = [];
    currentScenario.branches.forEach(branch => {
      branch.outcomes.forEach(outcome => {
        data.push({
          path: `${branch.condition} → ${outcome.result}`,
          probability: (outcome.joint * 100).toFixed(2),
          conditional: (outcome.probability * 100).toFixed(1),
          color: branch.color
        });
      });
    });
    return data;
  };

  const barData = generateBarData();

  return (
    <section id="conditional-probability" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        🌳 5. Probabilité Conditionnelle : Quand l'Information Change Tout
      </h2>

      {/* Introduction conceptuelle */}
      <div className="mb-8">
        <CourseHighlight title="🔍 Le pouvoir de l'information" type="concept">
          <div className="space-y-4">
            <p className="text-lg">
              Imaginez que vous jouez aux cartes. La probabilité de tirer un As est de 4/52 ≈ 7.7%. 
              Mais si je vous dis "la carte que vous allez tirer est rouge", cette probabilité change ! 
              Elle devient 2/26 ≈ 7.7%... Attendez, c'est pareil ?
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm">
                <strong>🤔 Réflexion :</strong> Et si je vous dis "la carte est un cœur" ? 
                Maintenant P(As|Cœur) = 1/13 ≈ 7.7%... Toujours pareil !
              </p>
              <p className="text-sm mt-2">
                <strong>🎯 Mais si je dis "la carte est une figure" ?</strong> 
                Alors P(As|Figure) = 0% car un As n'est pas une figure !
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">💡 L'essence de la probabilité conditionnelle :</h4>
              <p className="text-sm text-blue-700">
                Chaque nouvelle information <strong>restreint l'espace des possibles</strong> et peut 
                drastiquement changer les probabilités. C'est le fondement de l'apprentissage automatique !
              </p>
            </div>
          </div>
        </CourseHighlight>
      </div>

      {/* Définition mathématique */}
      <Card className="mb-8 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Définition Mathématique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4 text-center">Probabilité Conditionnelle</h4>
              <CourseEquation latex="P(A|B) = \frac{P(A \cap B)}{P(B)}" />
              <p className="text-center text-sm mt-2 text-gray-600">"Probabilité de A sachant que B s'est produit"</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-blue-700 mb-2">P(A|B)</h5>
                <p className="text-sm">Probabilité conditionnelle de A sachant B</p>
                <p className="text-xs text-gray-500 mt-1">Ce qu'on cherche à calculer</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-green-700 mb-2">P(A ∩ B)</h5>
                <p className="text-sm">Probabilité que A ET B se produisent</p>
                <p className="text-xs text-gray-500 mt-1">Intersection des événements</p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h5 className="font-semibold text-purple-700 mb-2">P(B)</h5>
                <p className="text-sm">Probabilité que B se produise</p>
                <p className="text-xs text-gray-500 mt-1">Notre nouvelle information</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-800 mb-2">🧠 Intuition :</h5>
              <p className="text-sm text-indigo-700">
                On "zoome" sur les cas où B s'est produit, puis on regarde quelle fraction 
                de ces cas contient aussi A. C'est comme regarder à travers un filtre !
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diagrammes en arbre interactifs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5" />
            Diagrammes en Arbre Interactifs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Sélecteur de scénario */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <Button
                  key={key}
                  variant={selectedScenario === key ? "default" : "outline"}
                  onClick={() => {
                    setSelectedScenario(key as typeof selectedScenario);
                    setSelectedPath(null);
                  }}
                  className="text-sm"
                >
                  {scenario.title}
                </Button>
              ))}
            </div>

            {/* Description du scénario */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{currentScenario.title}</h4>
              <p className="text-sm text-gray-600">{currentScenario.description}</p>
            </div>

            {/* Diagramme en arbre */}
            <div className="bg-white border rounded-lg p-6">
              <h5 className="font-semibold mb-4 text-center">🌳 Diagramme en Arbre</h5>
              
              <div className="flex flex-col items-center space-y-8">
                {/* Nœud racine */}
                <div className="bg-gray-100 px-4 py-2 rounded-lg font-semibold">
                  {currentScenario.initialEvent}
                </div>

                {/* Première couche de branches */}
                <div className="flex justify-center space-x-12">
                  {currentScenario.branches.map((branch, branchIndex) => (
                    <div key={branchIndex} className="flex flex-col items-center space-y-4">
                      {/* Ligne de connexion */}
                      <div className="w-px h-8 bg-gray-300"></div>
                      
                      {/* Probabilité de la branche */}
                      <div className="text-xs bg-white border rounded px-2 py-1">
                        {(branch.probability * 100).toFixed(0)}%
                      </div>
                      
                      {/* Nœud de la condition */}
                      <div 
                        className="px-3 py-2 rounded-lg text-white font-medium cursor-pointer transition-transform hover:scale-105"
                        style={{ backgroundColor: branch.color }}
                      >
                        {branch.condition}
                      </div>

                      {/* Deuxième couche */}
                      <div className="flex space-x-6">
                        {branch.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex flex-col items-center space-y-2">
                            {/* Ligne de connexion */}
                            <div className="w-px h-6 bg-gray-300"></div>
                            
                            {/* Probabilité conditionnelle */}
                            <div className="text-xs bg-yellow-50 border border-yellow-200 rounded px-2 py-1">
                              {(outcome.probability * 100).toFixed(0)}%
                            </div>
                            
                            {/* Résultat final */}
                            <div 
                              className={`px-2 py-1 rounded text-xs border-2 cursor-pointer transition-all ${
                                selectedPath === `${branch.condition}-${outcome.result}` 
                                  ? 'bg-blue-100 border-blue-500 shadow-md' 
                                  : 'bg-white border-gray-200 hover:border-gray-400'
                              }`}
                              onClick={() => setSelectedPath(`${branch.condition}-${outcome.result}`)}
                            >
                              {outcome.result}
                            </div>
                            
                            {/* Probabilité jointe */}
                            <div className="text-xs text-gray-500">
                              P = {(outcome.joint * 100).toFixed(1)}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculs détaillés pour le chemin sélectionné */}
              {selectedPath && (
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h6 className="font-semibold text-blue-800 mb-2">🧮 Calculs pour : {selectedPath}</h6>
                  {(() => {
                    const [condition, result] = selectedPath.split('-');
                    const branch = currentScenario.branches.find(b => b.condition === condition);
                    const outcome = branch?.outcomes.find(o => o.result === result);
                    
                    if (branch && outcome) {
                      return (
                        <div className="space-y-2 text-sm">
                          <div>P({condition}) = {(branch.probability * 100).toFixed(1)}%</div>
                          <div>P({result}|{condition}) = {(outcome.probability * 100).toFixed(1)}%</div>
                          <div className="font-semibold text-blue-700">
                            P({condition} ∩ {result}) = {(branch.probability * 100).toFixed(1)}% × {(outcome.probability * 100).toFixed(1)}% = {(outcome.joint * 100).toFixed(2)}%
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>
              )}
            </div>

            {/* Graphique en barres */}
            <div className="space-y-3">
              <h5 className="font-semibold">📊 Probabilités Jointes</h5>
              <div className="h-64 bg-white rounded border">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="path" 
                      fontSize={10} 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip 
                      formatter={(value, name) => [
                        `${value}%`, 
                        name === 'probability' ? 'Probabilité Jointe' : 'Probabilité Conditionnelle'
                      ]} 
                    />
                    <Bar dataKey="probability" fill="#3B82F6" name="probability" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Règles importantes */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Règles et Propriétés Importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">✅ Propriétés fondamentales :</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                  <strong>Règle de multiplication :</strong><br/>
                  <CourseEquation latex="P(A \cap B) = P(A|B) \cdot P(B)" />
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <strong>Loi des probabilités totales :</strong><br/>
                  <CourseEquation latex="P(A) = \sum_i P(A|B_i) \cdot P(B_i)" />
                </div>
                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                  <strong>Indépendance :</strong><br/>
                  Si A et B indépendants : P(A|B) = P(A)
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">⚠️ Pièges courants :</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                  <strong>Confusion P(A|B) ≠ P(B|A) :</strong><br/>
                  P(Malade|Test+) ≠ P(Test+|Malade)
                </div>
                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                  <strong>Division par zéro :</strong><br/>
                  P(A|B) n'existe que si P(B) &gt; 0
                </div>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                  <strong>Biais de base rate :</strong><br/>
                  Ignorer P(B) mène à des erreurs
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications pratiques */}
      <CourseHighlight title="🚀 Applications en Data Science" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">🤖 Machine Learning :</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded border">
                <strong>Classification :</strong> P(Classe|Features)
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Naive Bayes :</strong> Hypothèse d'indépendance conditionnelle
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Réseaux Bayésiens :</strong> Modélisation de dépendances
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">📊 Analytics :</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-white p-3 rounded border">
                <strong>Segmentation :</strong> P(Achat|Segment)
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Attribution :</strong> P(Conversion|Canal)
              </div>
              <div className="bg-white p-3 rounded border">
                <strong>Prédiction :</strong> P(Churn|Comportement)
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-indigo-100 p-4 rounded-lg">
          <h5 className="font-semibold text-indigo-800 mb-2">💡 Pourquoi c'est crucial ?</h5>
          <div className="text-sm text-indigo-700 space-y-1">
            <p>• <strong>Prise de décision :</strong> Intégrer de nouvelles informations</p>
            <p>• <strong>Personnalisation :</strong> Adapter selon le contexte utilisateur</p>
            <p>• <strong>Diagnostic :</strong> Identifier les causes probables</p>
            <p>• <strong>Optimisation :</strong> Cibler les actions les plus efficaces</p>
          </div>
        </div>
      </CourseHighlight>
    </section>
  );
};

export default ConditionalProbabilitySection;