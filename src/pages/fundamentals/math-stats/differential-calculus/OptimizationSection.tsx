
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Scatter, ScatterChart } from "recharts";
import { Play, Pause, RotateCcw, Target, TrendingDown } from "lucide-react";

const OptimizationSection = () => {
  const [learningRate, setLearningRate] = useState([0.1]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Données pour la descente de gradient avec différents learning rates
  const generateGradientDescent = (alpha: number) => {
    const steps = [];
    let x = 4; // Point de départ
    for (let i = 0; i <= 20; i++) {
      const fx = (x - 1) * (x - 1); // f(x) = (x-1)²
      const gradient = 2 * (x - 1); // f'(x) = 2(x-1)
      steps.push({ 
        step: i, 
        x: parseFloat(x.toFixed(3)), 
        fx: parseFloat(fx.toFixed(3)),
        gradient: parseFloat(gradient.toFixed(3))
      });
      x = x - alpha * gradient;
      if (Math.abs(gradient) < 0.001) break;
    }
    return steps;
  };

  const gradientData = generateGradientDescent(learningRate[0]);

  // Fonction quadratique pour visualisation
  const functionPoints = Array.from({ length: 100 }, (_, i) => {
    const x = -2 + i * 0.08;
    const fx = (x - 1) * (x - 1);
    return { x: parseFloat(x.toFixed(2)), fx: parseFloat(fx.toFixed(2)) };
  });

  const criticalPointsExamples = [
    {
      function: "f(x) = x³ - 3x",
      derivative: "f'(x) = 3x² - 3",
      criticalPoints: "x = ±1",
      analysis: "f''(-1) = -6 < 0 → maximum local | f''(1) = 6 > 0 → minimum local"
    },
    {
      function: "f(x) = x⁴ - 4x³",
      derivative: "f'(x) = 4x³ - 12x²",
      criticalPoints: "x = 0, x = 3",
      analysis: "f''(0) = 0 → test inconcluant | f''(3) = 36 > 0 → minimum local"
    }
  ];

  return (
    <section id="optimization" className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-bold mb-6">3. Optimisation avec les Dérivées</h2>
      
      <CourseHighlight title="🎯 L'objectif ultime" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              En machine learning, optimiser = <strong>minimiser l'erreur</strong>. 
              Les dérivées nous indiquent dans quelle direction aller !
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Target className="h-4 w-4" />
                Principe fondamental
              </h4>
              <p className="text-sm">Suivre la pente négative pour descendre vers le minimum</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Applications concrètes :</h4>
            <ul className="text-sm space-y-1">
              <li>• Ajuster les poids d'un réseau de neurones</li>
              <li>• Optimiser les hyperparamètres</li>
              <li>• Minimiser la fonction de coût</li>
              <li>• Trouver les meilleurs paramètres de modèle</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Points critiques et extrema</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Les extrema d'une fonction se trouvent aux points où la dérivée s'annule 
              ou n'existe pas.
            </p>
            <CourseEquation latex="f'(x) = 0 \text{ ou } f'(x) \text{ n'existe pas}" />
            
            <div className="space-y-3 mt-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm">Test de la dérivée seconde</h4>
                <ul className="text-xs space-y-1 mt-2">
                  <li>• Si f&apos;&apos;(x) &gt; 0 : minimum local (courbe vers le haut ∪)</li>
                  <li>• Si f&apos;&apos;(x) &lt; 0 : maximum local (courbe vers le bas ∩)</li>
                  <li>• Si f&apos;&apos;(x) = 0 : test inconcluant (point d&apos;inflexion ?)</li>
                </ul>
              </div>
              
              <CourseHighlight title="💡 Astuce visuelle" type="example">
                <p className="text-sm">
                  Imaginez une bille qui roule : elle s'arrête naturellement dans les creux (minima) 
                  et tombe des bosses (maxima) !
                </p>
              </CourseHighlight>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exemples détaillés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalPointsExamples.map((example, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <h5 className="font-semibold text-sm mb-2">Exemple {index + 1}</h5>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold">Fonction :</span> {example.function}
                    </div>
                    <div>
                      <span className="font-semibold">Dérivée :</span> {example.derivative}
                    </div>
                    <div>
                      <span className="font-semibold">Points critiques :</span> {example.criticalPoints}
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="font-semibold">Analyse :</span> {example.analysis}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Simulateur de descente de gradient
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="mb-4">
                Explorez l'effet du taux d'apprentissage (learning rate) sur la convergence 
                pour minimiser f(x) = (x-1)².
              </p>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <CourseEquation latex="x_{n+1} = x_n - \alpha f'(x_n)" />
                <p className="text-sm text-center">
                  α = {learningRate[0]} (taux d'apprentissage)
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold">Taux d'apprentissage (α) :</label>
                  <Slider
                    value={learningRate}
                    onValueChange={setLearningRate}
                    min={0.01}
                    max={0.5}
                    step={0.01}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.01 (lent)</span>
                    <span>0.5 (rapide)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fonction f(x) = (x-1)²</h4>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="x" domain={[-2, 6]} />
                          <YAxis domain={[0, 10]} />
                          <Tooltip />
                          <Line type="monotone" data={functionPoints} dataKey="fx" stroke="#94A3B8" strokeWidth={1} dot={false} />
                          <Scatter data={gradientData.slice(0, Math.min(currentStep + 1, gradientData.length))} fill="#DC2626" />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Convergence</h4>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={gradientData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="step" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="fx" stroke="#DC2626" strokeWidth={2} name="f(x)" />
                          <Line type="monotone" dataKey="x" stroke="#2563EB" strokeWidth={2} name="x" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Résultats de la simulation :</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Point de départ :</span> x₀ = 4
                    </div>
                    <div>
                      <span className="font-semibold">Nombre d'itérations :</span> {gradientData.length}
                    </div>
                    <div>
                      <span className="font-semibold">Point final :</span> x = {gradientData[gradientData.length - 1]?.x}
                    </div>
                    <div>
                      <span className="font-semibold">Erreur finale :</span> {gradientData[gradientData.length - 1]?.fx}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CourseHighlight title="⚠️ Hyperparamètre critique : le learning rate" type="warning">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">α trop grand (&gt; 0.3)</h4>
            <ul className="text-sm space-y-1">
              <li>• Oscillations autour du minimum</li>
              <li>• Risque de divergence</li>
              <li>• Instabilité numérique</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">α optimal (≈ 0.1)</h4>
            <ul className="text-sm space-y-1">
              <li>• Convergence rapide et stable</li>
              <li>• Bon compromis vitesse/stabilité</li>
              <li>• Dépend du problème</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">α trop petit (&lt; 0.01)</h4>
            <ul className="text-sm space-y-1">
              <li>• Convergence très lente</li>
              <li>• Beaucoup d'itérations nécessaires</li>
              <li>• Coût computationnel élevé</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      <CourseHighlight title="🔍 Zoom sur : Variantes de l'optimisation" type="info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Gradient Descent classique</h4>
            <CourseEquation latex="\theta_{t+1} = \theta_t - \alpha \nabla J(\theta_t)" />
            <p className="text-sm text-gray-600">Simple mais peut être lent</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Momentum</h4>
            <CourseEquation latex="v_t = \beta v_{t-1} + (1-\beta) \nabla J(\theta_t)" />
            <p className="text-sm text-gray-600">Accélère la convergence avec &quot;inertie&quot;</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Adam (Adaptive)</h4>
            <CourseEquation latex="\theta_{t+1} = \theta_t - \frac{\alpha}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t" />
            <p className="text-sm text-gray-600">Adapte le learning rate par paramètre</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Stochastic Gradient Descent</h4>
            <CourseEquation latex="\theta_{t+1} = \theta_t - \alpha \nabla J_i(\theta_t)" />
            <p className="text-sm text-gray-600">Utilise un échantillon aléatoire à chaque étape</p>
          </div>
        </div>
      </CourseHighlight>
    </section>
  );
};

export default OptimizationSection;
