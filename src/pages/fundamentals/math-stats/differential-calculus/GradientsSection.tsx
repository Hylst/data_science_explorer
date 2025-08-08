
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Brain, Layers, Zap, ArrowRight } from "lucide-react";

const GradientsSection = () => {
  const [selectedExample, setSelectedExample] = useState("basic");

  const partialDerivativeExamples = [
    {
      function: "f(x,y) = x²y + 3xy²",
      partialX: "∂f/∂x = 2xy + 3y²",
      partialY: "∂f/∂y = x² + 6xy",
      interpretation: "Comment f change quand on varie x (y fixe) ou y (x fixe)"
    },
    {
      function: "f(x,y,z) = e^(xyz)",
      partialX: "∂f/∂x = yze^(xyz)",
      partialY: "∂f/∂y = xze^(xyz)",
      partialZ: "∂f/∂z = xye^(xyz)",
      interpretation: "Dérivées partielles d'une fonction exponentielle à 3 variables"
    }
  ];

  const backpropagationSteps = [
    {
      step: 1,
      title: "Forward Pass",
      description: "Calcul des activations couche par couche",
      equations: ["z_1 = W_1 x + b_1", "a_1 = \\sigma(z_1)", "z_2 = W_2 a_1 + b_2", "\\hat{y} = \\sigma(z_2)"],
      color: "blue"
    },
    {
      step: 2,
      title: "Loss Calculation",
      description: "Calcul de la fonction de coût",
      equations: ["L = \\frac{1}{2}(\\hat{y} - y)^2"],
      color: "red"
    },
    {
      step: 3,
      title: "Backward Pass",
      description: "Calcul des gradients par la règle de la chaîne",
      equations: [
        "\\frac{\\partial L}{\\partial W_2} = \\frac{\\partial L}{\\partial \\hat{y}} \\frac{\\partial \\hat{y}}{\\partial z_2} \\frac{\\partial z_2}{\\partial W_2}",
        "\\frac{\\partial L}{\\partial W_1} = \\frac{\\partial L}{\\partial \\hat{y}} \\frac{\\partial \\hat{y}}{\\partial z_2} \\frac{\\partial z_2}{\\partial a_1} \\frac{\\partial a_1}{\\partial z_1} \\frac{\\partial z_1}{\\partial W_1}"
      ],
      color: "green"
    },
    {
      step: 4,
      title: "Parameters Update",
      description: "Mise à jour des poids avec les gradients",
      equations: ["W_1 := W_1 - \\alpha \\frac{\\partial L}{\\partial W_1}", "W_2 := W_2 - \\alpha \\frac{\\partial L}{\\partial W_2}"],
      color: "purple"
    }
  ];

  const mlApplications = [
    {
      name: "Régression Logistique",
      gradient: "\\frac{\\partial L}{\\partial w} = -\\sum_{i=1}^{n} (y_i - \\sigma(w^T x_i)) x_i",
      description: "Gradient de la log-vraisemblance pour classification binaire",
      use: "Classification, probabilités de classe"
    },
    {
      name: "Support Vector Machines",
      gradient: "\\frac{\\partial L}{\\partial w} = w + C\\sum_{i=1}^{n} \\alpha_i y_i x_i",
      description: "Gradient de la fonction objective avec régularisation",
      use: "Classification avec marge maximale"
    },
    {
      name: "K-Means",
      gradient: "\\frac{\\partial J}{\\partial \\mu_k} = \\sum_{i \\in C_k} (x_i - \\mu_k)",
      description: "Gradient pour mise à jour des centroïdes",
      use: "Clustering, segmentation"
    }
  ];

  return (
    <section id="gradients" className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-bold mb-6">4. Gradients et Dérivées Partielles</h2>
      
      <CourseHighlight title="🌟 Le gradient : votre boussole mathématique" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              Dans un paysage de montagnes et vallées (votre fonction), le gradient vous indique 
              toujours la direction de la <strong>montée la plus raide</strong>.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🧭 Analogie GPS</h4>
              <p className="text-sm">
                Le gradient = flèche GPS qui pointe vers la montée.
                Pour descendre (optimisation), on va dans le sens opposé !
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Propriétés clés :</h4>
            <ul className="text-sm space-y-1">
              <li>• Direction de montée maximale</li>
              <li>• Perpendiculaire aux courbes de niveau</li>
              <li>• Magnitude = vitesse de changement</li>
              <li>• Null au sommet/minimum</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Dérivées partielles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour une fonction de plusieurs variables f(x,y), la dérivée partielle 
              mesure le taux de variation par rapport à une variable, les autres étant fixes.
            </p>
            <CourseEquation latex="\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h,y) - f(x,y)}{h}" />
            
            <div className="space-y-4 mt-4">
              {partialDerivativeExamples.map((example, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Exemple {index + 1}</h5>
                  <div className="space-y-1 text-xs">
                    <p><strong>Fonction :</strong> {example.function}</p>
                    <p><strong>∂f/∂x :</strong> {example.partialX}</p>
                    <p><strong>∂f/∂y :</strong> {example.partialY}</p>
                    {example.partialZ && <p><strong>∂f/∂z :</strong> {example.partialZ}</p>}
                    <p className="text-gray-600 italic">{example.interpretation}</p>
                  </div>
                </div>
              ))}
            </div>

            <CourseHighlight title="💡 Astuce de calcul" type="example">
              <p className="text-sm">
                Pour calculer ∂f/∂x, traitez toutes les autres variables comme des constantes 
                et dérivez normalement par rapport à x !
              </p>
            </CourseHighlight>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Le gradient vectoriel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Le gradient est le vecteur de toutes les dérivées partielles. 
              Il pointe dans la direction de la plus forte augmentation.
            </p>
            <CourseEquation latex="\nabla f = \begin{pmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{pmatrix}" />
            
            <div className="space-y-3 mt-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm">Propriétés géométriques :</h4>
                <ul className="text-xs space-y-1 mt-2">
                  <li>• Direction de montée la plus raide</li>
                  <li>• Perpendiculaire aux courbes de niveau</li>
                  <li>• Magnitude = taux de variation maximal</li>
                  <li>• Gradient nul aux points critiques</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm">En optimisation :</h4>
                <ul className="text-xs space-y-1 mt-2">
                  <li>• Gradient descent : θ := θ - α∇f(θ)</li>
                  <li>• Direction opposée pour minimiser</li>
                  <li>• Magnitude indique la "urgence" du changement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Backpropagation : La règle de la chaîne en action
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            La backpropagation utilise massivement la règle de la chaîne pour calculer 
            efficacement les gradients dans les réseaux de neurones.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {backpropagationSteps.map((step, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 border-l-${step.color}-500 bg-${step.color}-50`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-full bg-${step.color}-500 text-white text-xs flex items-center justify-center font-bold`}>
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                </div>
                <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                <div className="space-y-1">
                  {step.equations.map((eq, idx) => (
                    <CourseEquation key={idx} latex={eq} displayMode={false} className="text-xs" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <CourseHighlight title="🔥 La magie de la règle de la chaîne" type="warning">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Principe fondamental :</h4>
                <CourseEquation latex="\frac{\partial L}{\partial w_1} = \frac{\partial L}{\partial y} \frac{\partial y}{\partial h} \frac{\partial h}{\partial w_1}" />
                <p className="text-sm">
                  Chaque gradient se décompose en produit de gradients locaux.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Avantages computationnels :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Calcul efficace des gradients</li>
                  <li>• Réutilisation des calculs intermédiaires</li>
                  <li>• Complexité linéaire O(n)</li>
                  <li>• Parallélisation possible</li>
                </ul>
              </div>
            </div>
          </CourseHighlight>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Applications en Machine Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedExample} onValueChange={setSelectedExample} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="algorithms">Algorithmes ML</TabsTrigger>
              <TabsTrigger value="deep">Deep Learning</TabsTrigger>
              <TabsTrigger value="optimization">Optimiseurs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="algorithms" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {mlApplications.map((app, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CourseEquation latex={app.gradient} />
                      <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                      <div className="bg-blue-50 p-2 rounded text-xs">
                        <strong>Usage :</strong> {app.use}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="deep" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Réseaux Convolutifs (CNN)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="\frac{\partial L}{\partial K} = \sum_{i,j} \frac{\partial L}{\partial Y_{i,j}} \star X_{i,j}" />
                    <p className="text-sm">Gradients des filtres de convolution pour la vision par ordinateur.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Attention Mechanisms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="\frac{\partial}{\partial Q} \text{softmax}(QK^T/\sqrt{d_k})V" />
                    <p className="text-sm">Gradients des mécanismes d'attention dans les transformers.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Generative Adversarial Networks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="\min_G \max_D V(D,G) = \mathbb{E}[\log D(x)] + \mathbb{E}[\log(1-D(G(z)))]" />
                    <p className="text-sm">Optimisation simultanée avec gradients antagonistes.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Reinforcement Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) A(s,a)]" />
                    <p className="text-sm">Gradient de politique pour optimiser les stratégies d'action.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="optimization" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardHeader>
                    <CardTitle className="text-lg">Adam Optimizer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t" />
                    <CourseEquation latex="v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2" />
                    <CourseEquation latex="\theta_{t+1} = \theta_t - \frac{\alpha}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t" />
                    <p className="text-sm">Adapte le learning rate individuellement pour chaque paramètre.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100">
                  <CardHeader>
                    <CardTitle className="text-lg">RMSprop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CourseEquation latex="v_t = \beta v_{t-1} + (1-\beta) g_t^2" />
                    <CourseEquation latex="\theta_{t+1} = \theta_t - \frac{\alpha}{\sqrt{v_t} + \epsilon} g_t" />
                    <p className="text-sm">Normalise les gradients par leur magnitude récente.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <CourseHighlight title="🎓 Le saviez-vous ? Gradient vanishing/exploding" type="info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">🌊 Gradient Vanishing</h4>
            <p className="text-sm mb-2">
              Dans les réseaux profonds, les gradients peuvent devenir très petits 
              en se propageant vers les premières couches.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-xs"><strong>Solutions :</strong> ResNet, LSTM, batch normalization</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">💥 Gradient Exploding</h4>
            <p className="text-sm mb-2">
              À l'inverse, les gradients peuvent exploser et devenir trop grands, 
              causant une instabilité d'entraînement.
            </p>
            <div className="bg-red-50 p-3 rounded">
              <p className="text-xs"><strong>Solutions :</strong> Gradient clipping, learning rate adaptatif</p>
            </div>
          </div>
        </div>
      </CourseHighlight>
    </section>
  );
};

export default GradientsSection;
