import { useState } from "react";
import { Brain, Shield, Zap, Target, BarChart3, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseHighlight from "@/components/courses/CourseHighlight";
import CourseEquation from "@/components/courses/CourseEquation";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

/**
 * Component for practical applications of probability in data science
 * Demonstrates real-world use cases including ML, A/B testing, risk analysis, and recommendation systems
 */
const PracticalApplicationsSection = () => {
  const [selectedApplication, setSelectedApplication] = useState<'ml' | 'ab-testing' | 'risk' | 'recommendation'>('ml');

  // Classification data for ML example
  const classificationData = [
    { category: 'Spam', probability: 0.85, confidence: 'Haute' },
    { category: 'Important', probability: 0.12, confidence: 'Moyenne' },
    { category: 'Promotion', probability: 0.03, confidence: 'Faible' }
  ];

  // A/B testing data
  const abTestData = [
    { variant: 'Version A', conversions: 245, visitors: 1000, rate: 24.5 },
    { variant: 'Version B', conversions: 287, visitors: 1000, rate: 28.7 }
  ];

  // Risk analysis data
  const riskData = [
    { scenario: 'Optimiste', probability: 0.2, return: 15 },
    { scenario: 'Probable', probability: 0.6, return: 8 },
    { scenario: 'Pessimiste', probability: 0.2, return: -3 }
  ];

  // Recommendation system data
  const recommendationData = [
    { item: 'Produit A', score: 0.92, category: 'Électronique' },
    { item: 'Produit B', score: 0.87, category: 'Électronique' },
    { item: 'Produit C', score: 0.73, category: 'Maison' },
    { item: 'Produit D', score: 0.68, category: 'Sport' },
    { item: 'Produit E', score: 0.45, category: 'Livres' }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  /**
   * Calculate expected return for risk analysis
   */
  const calculateExpectedReturn = () => {
    return riskData.reduce((sum, scenario) => {
      return sum + (scenario.probability * scenario.return);
    }, 0);
  };

  /**
   * Calculate confidence interval for A/B testing
   */
  const calculateConfidenceInterval = (conversions: number, visitors: number) => {
    const p = conversions / visitors;
    const margin = 1.96 * Math.sqrt((p * (1 - p)) / visitors);
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
                Recommandation
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
              🤖 Classification d'Emails - Machine Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Distribution des probabilités</h4>
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
                        {classificationData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, 'Probabilité']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Prédictions du modèle</h4>
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
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">🎯 Décision automatique :</h5>
                  <p className="text-sm">
                    <strong>Classification :</strong> Spam (85% de confiance)<br/>
                    <strong>Action :</strong> Déplacer vers le dossier spam<br/>
                    <strong>Seuil de décision :</strong> 70%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation latex="P(Spam|Email) = \\frac{P(Email|Spam) \\cdot P(Spam)}{P(Email)}" />
              <p className="text-sm text-gray-600 mt-2">
                Théorème de Bayes appliqué à la classification d'emails
              </p>
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
                {abTestData.map((variant) => {
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
                    <li>• <strong>Significativité :</strong> p-value &lt; 0.05</li>
                    <li>• <strong>Recommandation :</strong> Déployer la Version B</li>
                  </ul>
                </div>
              </div>
            </div>
              
            <div className="mt-6">
              <CourseEquation latex="Z = \\frac{p_B - p_A}{\\sqrt{\\frac{p_A(1-p_A)}{n_A} + \\frac{p_B(1-p_B)}{n_B}}}" />
              <p className="text-sm text-gray-600 mt-2">
                Où p_A et p_B sont les taux de conversion, n_A et n_B les tailles d'échantillon
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Risk Analysis */}
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
                <h4 className="font-semibold mb-3">Scénarios de rendement</h4>
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
                      <Bar dataKey="return" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Analyse quantitative</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Rendement Espéré</div>
                    <span className="font-bold text-blue-600">{calculateExpectedReturn().toFixed(2)}%</span>
                  </div>
                </div>
                
                {riskData.map((scenario, index) => (
                  <div key={scenario.scenario} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                    <div>
                      <span className="font-medium">{scenario.scenario}</span>
                      <div className="text-sm text-gray-600">
                        Probabilité: {(scenario.probability * 100).toFixed(0)}%
                      </div>
                    </div>
                    <span className={`text-lg font-bold ${
                      scenario.return > 0 ? 'text-green-600' : scenario.return < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {scenario.return > 0 ? '+' : ''}{scenario.return}%
                    </span>
                  </div>
                ))}
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    💡 Recommandation :
                  </h5>
                  <p className="text-sm">
                    Investissement modérément attractif avec un rendement espéré positif de {calculateExpectedReturn().toFixed(2)}%.
                    Diversifier pour réduire les risques.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation latex={`E[R] = \\sum_{i=1}^n p_i \\cdot r_i = 0.2 \\times 15 + 0.6 \\times 8 + 0.2 \\times (-3) = ${calculateExpectedReturn().toFixed(2)}\\%`} />
              <p className="text-sm text-gray-600 mt-2">
                Calcul de l'espérance mathématique du rendement
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendation System */}
      {selectedApplication === 'recommendation' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              🎯 Système de Recommandation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Scores de recommandation personnalisés</h4>
                <div className="space-y-3">
                  {recommendationData.map((item) => (
                    <div key={item.item} className="bg-gray-50 p-3 rounded flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.item}</span>
                        <Badge className="ml-2" variant="outline">{item.category}</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.score * 100}%` }}
                          />
                        </div>
                        <span className="font-bold text-blue-600">{(item.score * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">🎯 Recommandation Top</h5>
                  <div className="space-y-2">
                    <div><strong>Produit :</strong> {recommendationData[0].item}</div>
                    <div><strong>Score :</strong> {(recommendationData[0].score * 100).toFixed(0)}%</div>
                    <div><strong>Catégorie :</strong> {recommendationData[0].category}</div>
                    <div><strong>Probabilité d'achat :</strong> Très élevée</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">📊 Métriques du système</h5>
                  <div className="space-y-2 text-sm">
                    <div><strong>Précision :</strong> 87.3%</div>
                    <div><strong>Rappel :</strong> 82.1%</div>
                    <div><strong>Taux de clic :</strong> +34%</div>
                    <div><strong>Conversion :</strong> +28%</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <CourseEquation latex="Score(u,i) = \\sum_{j \\in factors} w_j \\cdot P(like_j | user_u, item_i)" />
              <p className="text-sm text-gray-600 mt-2">
                Score de recommandation basé sur les probabilités conditionnelles des préférences utilisateur
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Synthesis */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-green-600" />
            Synthèse : L'Impact des Probabilités en Data Science
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <CourseHighlight title="Points Clés" type="tip">
              Les probabilités permettent de transformer l'incertitude en décisions quantifiées et optimisées.
            </CourseHighlight>
            
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