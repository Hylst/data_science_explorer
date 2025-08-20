import { useState } from "react";
import { Brain, TrendingUp, Shield, Users, Zap, Target, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

/**
 * Composant pour les applications pratiques des probabilités en Data Science
 * Présente des cas d'usage réels avec des exemples interactifs
 */
const PracticalApplicationsSection = () => {
  const [selectedApplication, setSelectedApplication] = useState<'ml' | 'ab-testing' | 'risk' | 'recommendation'>('ml');

  // Données pour l'exemple de classification
  const classificationData = [
    { category: 'Spam', probability: 0.85, confidence: 'Haute' },
    { category: 'Important', probability: 0.12, confidence: 'Moyenne' },
    { category: 'Promotion', probability: 0.03, confidence: 'Faible' }
  ];

  // Données pour l'A/B testing
  const abTestData = [
    { variant: 'Version A', conversions: 245, visitors: 1000, rate: 24.5 },
    { variant: 'Version B', conversions: 287, visitors: 1000, rate: 28.7 }
  ];

  // Données pour l'analyse de risque
  const riskData = [
    { scenario: 'Optimiste', probability: 0.2, return: 15 },
    { scenario: 'Probable', probability: 0.6, return: 8 },
    { scenario: 'Pessimiste', probability: 0.2, return: -3 }
  ];

  // Données pour le système de recommandation
  const recommendationData = [
    { item: 'Produit A', score: 0.92, category: 'Électronique' },
    { item: 'Produit B', score: 0.87, category: 'Électronique' },
    { item: 'Produit C', score: 0.73, category: 'Maison' },
    { item: 'Produit D', score: 0.68, category: 'Sport' },
    { item: 'Produit E', score: 0.45, category: 'Livres' }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  /**
   * Calcule l'espérance de rendement pour l'analyse de risque
   */
  const calculateExpectedReturn = () => {
    return riskData.reduce((sum, scenario) => sum + (scenario.probability * scenario.return), 0);
  };

  /**
   * Calcule l'intervalle de confiance pour l'A/B test
   */
  const calculateConfidenceInterval = (conversions: number, visitors: number) => {
    const p = conversions / visitors;
    const se = Math.sqrt((p * (1 - p)) / visitors);
    const margin = 1.96 * se; // 95% de confiance
    return {
      lower: ((p - margin) * 100).toFixed(2),
      upper: ((p + margin) * 100).toFixed(2)
    };
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            Applications Pratiques des Probabilités en Data Science
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <CourseHighlight title="Applications Pratiques" type="concept">
              Les probabilités sont au cœur de la Data Science moderne. Elles permettent de quantifier 
              l'incertitude, d'évaluer les risques et de prendre des décisions éclairées basées sur les données.
            </CourseHighlight>
            
            <p className="text-gray-700">
              De la classification automatique d'emails à l'optimisation de campagnes marketing, 
              en passant par l'analyse de risques financiers, les probabilités transforment 
              l'incertitude en opportunités d'affaires.
            </p>

            {/* Navigation des applications */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Button 
                variant={selectedApplication === 'ml' ? 'default' : 'outline'}
                onClick={() => setSelectedApplication('ml')}
                className="flex items-center gap-2"
              >
                <Brain className="h-4 w-4" />
                Machine Learning
              </Button>
              <Button 
                variant={selectedApplication === 'ab-testing' ? 'default' : 'outline'}
                onClick={() => setSelectedApplication('ab-testing')}
                className="flex items-center gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                A/B Testing
              </Button>
              <Button 
                variant={selectedApplication === 'risk' ? 'default' : 'outline'}
                onClick={() => setSelectedApplication('risk')}
                className="flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                Analyse de Risque
              </Button>
              <Button 
                variant={selectedApplication === 'recommendation' ? 'default' : 'outline'}
                onClick={() => setSelectedApplication('recommendation')}
                className="flex items-center gap-2"
              >
                <Target className="h-4 w-4" />
                Recommandations
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Machine Learning */}
      {selectedApplication === 'ml' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              🤖 Classification Probabiliste - Détection de Spam
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Probabilités de classification</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={classificationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, probability }) => `${category}: ${(probability * 100).toFixed(1)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="probability"
                      >
                        {classificationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, 'Probabilité']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Interprétation des résultats</h4>
                <div className="space-y-3">
                  {classificationData.map((item, index) => (
                    <div key={item.category} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.category}</span>
                        <Badge className="ml-2" variant={item.confidence === 'Haute' ? 'default' : item.confidence === 'Moyenne' ? 'secondary' : 'outline'}>
                          {item.confidence}
                        </Badge>
                      </div>
                      <span className="text-lg font-bold" style={{ color: COLORS[index] }}>
                        {(item.probability * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">💡 Concepts clés :</h5>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Probabilité a posteriori :</strong> P(Spam|Email) = 85%</li>
                    <li>• <strong>Seuil de décision :</strong> Si P(Spam) > 0.5, classer comme spam</li>
                    <li>• <strong>Incertitude :</strong> Plus la probabilité est proche de 50%, plus l'incertitude est grande</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🔬 Applications en entreprise :</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded shadow">
                  <h5 className="font-medium text-purple-600">Email Marketing</h5>
                  <p className="text-sm text-gray-600">Optimisation de la délivrabilité</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h5 className="font-medium text-blue-600">Sécurité IT</h5>
                  <p className="text-sm text-gray-600">Détection d'intrusions</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <h5 className="font-medium text-green-600">Support Client</h5>
                  <p className="text-sm text-gray-600">Classification automatique des tickets</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* A/B Testing */}
      {selectedApplication === 'ab-testing' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              📊 A/B Testing - Optimisation de Conversion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Comparaison des variantes</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={abTestData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="variant" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Taux de conversion']} />
                      <Bar dataKey="rate" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Analyse statistique</h4>
                {abTestData.map((variant, index) => {
                  const ci = calculateConfidenceInterval(variant.conversions, variant.visitors);
                  return (
                    <div key={variant.variant} className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{variant.variant}</span>
                        <span className="text-lg font-bold text-green-600">{variant.rate}%</span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Conversions: {variant.conversions}/{variant.visitors}</div>
                        <div>IC 95%: [{ci.lower}% - {ci.upper}%]</div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">📈 Résultats :</h5>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Amélioration :</strong> +4.2 points de pourcentage</li>
                    <li>• <strong>Lift relatif :</strong> +17.1%</li>
                    <li>• <strong>Significativité :</strong> p-value < 0.05</li>
                    <li>• <strong>Recommandation :</strong> Déployer la Version B</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation>
                Test statistique: Z = \frac{{p_B - p_A}}{{\sqrt{{\frac{{p_A(1-p_A)}}{{n_A}} + \frac{{p_B(1-p_B)}}{{n_B}}}}}}
              </CourseEquation>
              <p className="text-sm text-gray-600 mt-2">
                Où p_A et p_B sont les taux de conversion, n_A et n_B les tailles d'échantillon
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analyse de Risque */}
      {selectedApplication === 'risk' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              ⚖️ Analyse de Risque Financier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Distribution des scénarios</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={riskData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="scenario" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [
                        name === 'probability' ? `${(Number(value) * 100).toFixed(0)}%` : `${value}%`,
                        name === 'probability' ? 'Probabilité' : 'Rendement'
                      ]} />
                      <Bar dataKey="probability" fill="#3B82F6" name="probability" />
                      <Bar dataKey="return" fill="#10B981" name="return" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Métriques de risque</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded flex justify-between">
                    <span>Rendement espéré :</span>
                    <span className="font-bold text-blue-600">{calculateExpectedReturn().toFixed(2)}%</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded flex justify-between">
                    <span>Probabilité de gain :</span>
                    <span className="font-bold text-green-600">80%</span>
                  </div>
                  <div className="bg-red-50 p-3 rounded flex justify-between">
                    <span>Perte maximale :</span>
                    <span className="font-bold text-red-600">-3%</span>
                  </div>
                  <div className="bg-purple-50 p-3 rounded flex justify-between">
                    <span>Ratio Sharpe :</span>
                    <span className="font-bold text-purple-600">1.24</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Interprétation :
                  </h5>
                  <ul className="text-sm space-y-1">
                    <li>• Investissement attractif avec rendement espéré positif</li>
                    <li>• Risque limité (perte max de 3%)</li>
                    <li>• 80% de chances de gains</li>
                    <li>• Ratio risque/rendement favorable</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation>
                E[R] = \sum_{{i=1}}^n p_i \cdot r_i = 0.2 \times 15 + 0.6 \times 8 + 0.2 \times (-3) = {calculateExpectedReturn().toFixed(2)}\%
              </CourseEquation>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Système de Recommandation */}
      {selectedApplication === 'recommendation' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              🎯 Système de Recommandation Probabiliste
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Scores de recommandation</h4>
                <div className="space-y-2">
                  {recommendationData.map((item, index) => (
                    <div key={item.item} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.item}</span>
                        <Badge className="ml-2" variant="outline">{item.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${item.score * 100}%` }}
                          />
                        </div>
                        <span className="font-bold text-blue-600">{(item.score * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Algorithme de recommandation</h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Facteurs pris en compte :</h5>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span><strong>Historique d'achat :</strong> 40%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span><strong>Similarité utilisateurs :</strong> 30%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span><strong>Popularité produit :</strong> 20%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span><strong>Contexte temporel :</strong> 10%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">📊 Performance du système :</h5>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">23.4%</div>
                      <div className="text-sm text-gray-600">Taux de clic</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">8.7%</div>
                      <div className="text-sm text-gray-600">Taux de conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation>
                Score(u,i) = \sum_{{j \in factors}} w_j \cdot P(like_j | user_u, item_i)
              </CourseEquation>
              <p className="text-sm text-gray-600 mt-2">
                Où w_j sont les poids des facteurs et P(like_j) les probabilités conditionnelles
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Synthèse */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-indigo-600" />
            🚀 Impact Business des Probabilités
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">+25%</div>
              <div className="text-sm text-gray-600">Amélioration des conversions</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
              <div className="text-sm text-gray-600">Réduction des risques</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">+60%</div>
              <div className="text-sm text-gray-600">Précision des prédictions</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">€2M+</div>
              <div className="text-sm text-gray-600">Économies annuelles</div>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg">
            <h4 className="font-semibold mb-3">🎯 Prochaines étapes pour maîtriser les probabilités :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• Pratiquer avec des datasets réels</li>
                <li>• Implémenter des modèles probabilistes</li>
                <li>• Maîtriser les tests statistiques</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• Comprendre les biais cognitifs</li>
                <li>• Apprendre l'inférence bayésienne</li>
                <li>• Développer l'intuition statistique</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticalApplicationsSection;