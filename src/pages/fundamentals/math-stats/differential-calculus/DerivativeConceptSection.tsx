
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Play, Pause, RotateCcw } from "lucide-react";

const DerivativeConceptSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Données pour visualiser une fonction et sa dérivée
  const functionData = Array.from({ length: 100 }, (_, i) => {
    const x = -5 + i * 0.1;
    const f = x * x - 2 * x - 3; // f(x) = x² - 2x - 3
    const df = 2 * x - 2; // f'(x) = 2x - 2
    return { x: x.toFixed(1), f: f.toFixed(2), df: df.toFixed(2) };
  });

  const analogies = [
    {
      title: "🚗 Analogie automobile",
      description: "Si votre position est f(t), alors votre vitesse est f'(t) - la dérivée de votre position par rapport au temps.",
      example: "Position : 50m → Vitesse : 10 m/s (variation de position)"
    },
    {
      title: "🏔️ Analogie montagne",
      description: "La dérivée, c'est la pente de la montagne à l'endroit où vous vous trouvez.",
      example: "Pente raide → Dérivée élevée | Plateau → Dérivée nulle"
    },
    {
      title: "💰 Analogie économique",
      description: "Si f(x) est votre capital, f'(x) est votre taux de croissance instantané.",
      example: "Capital croissant → Dérivée positive | Perte → Dérivée négative"
    }
  ];

  return (
    <section id="derivatives" className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-bold mb-6">1. Le Concept de Dérivée</h2>
      
      <CourseHighlight title="🧠 Intuition fondamentale" type="concept">
        <p className="mb-4">
          Imaginez que vous regardez une courbe à la loupe. Plus vous zoomez, plus la courbe 
          ressemble à une ligne droite. La dérivée, c'est la pente de cette ligne droite !
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm font-semibold text-blue-800">
            💡 La dérivée = "À quelle vitesse ça change ?"
          </p>
        </div>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Définition mathématique</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              La dérivée de f(x) en un point x₀ mesure le taux de variation instantané :
            </p>
            <CourseEquation latex="f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}" />
            
            <div className="space-y-3 mt-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-semibold">Interprétation géométrique :</p>
                <p className="text-xs">Pente de la tangente = dérivée</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm font-semibold">Interprétation physique :</p>
                <p className="text-xs">Vitesse instantanée = dérivée de la position</p>
              </div>
            </div>

            <CourseHighlight title="📝 Rappel important" type="info">
              <p className="text-sm">
                La dérivée n'existe que si la fonction est "lisse" au point considéré. 
                Une fonction peut être continue sans être dérivable !
              </p>
            </CourseHighlight>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visualisation interactive : f(x) = x² - 2x - 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={functionData.slice(10, 90)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [value, name === 'f' ? 'f(x)' : "f'(x)"]} />
                  <Line type="monotone" dataKey="f" stroke="#2563EB" strokeWidth={2} name="f" dot={false} />
                  <Line type="monotone" dataKey="df" stroke="#DC2626" strokeWidth={2} name="df" dot={false} />
                  <ReferenceLine x="1" stroke="#059669" strokeDasharray="3 3" label="Min en x=1" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 bg-blue-600"></div>
                <span>f(x) = x² - 2x - 3 (fonction)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-2 bg-red-600"></div>
                <span>f'(x) = 2x - 2 (dérivée)</span>
              </div>
              <p className="text-xs text-gray-600">Le minimum est atteint quand f'(x) = 0, soit x = 1</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <CourseHighlight title="🔍 Zoom sur : Analogies pour comprendre" type="example">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {analogies.map((analogy, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">{analogy.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{analogy.description}</p>
              <div className="bg-gray-50 p-2 rounded text-xs">
                <strong>Exemple :</strong> {analogy.example}
              </div>
            </div>
          ))}
        </div>
      </CourseHighlight>

      <CourseHighlight title="⚠️ Le saviez-vous ?" type="warning">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Fonctions non dérivables</h4>
            <ul className="text-sm space-y-1">
              <li>• |x| en x = 0 (point anguleux)</li>
              <li>• ReLU en x = 0 (utilisée en ML !)</li>
              <li>• √x en x = 0 (tangente verticale)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">En machine learning</h4>
            <ul className="text-sm space-y-1">
              <li>• On utilise des approximations lisses</li>
              <li>• Leaky ReLU, Swish, GELU...</li>
              <li>• Permet la backpropagation</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>

      <Card>
        <CardHeader>
          <CardTitle>Notation et vocabulaire</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Notations courantes</h4>
              <ul className="text-sm space-y-1">
                <li>• f'(x) (Lagrange)</li>
                <li>• df/dx (Leibniz)</li>
                <li>• Df(x) (opérateur)</li>
                <li>• ∂f/∂x (partielles)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ordres de dérivation</h4>
              <ul className="text-sm space-y-1">
                <li>• f'(x) : première</li>
                <li>• f''(x) : seconde</li>
                <li>• f'''(x) : troisième</li>
                <li>• f⁽ⁿ⁾(x) : n-ième</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Différentiabilité</h4>
              <ul className="text-sm space-y-1">
                <li>• Continue ≠ dérivable</li>
                <li>• Dérivable ⟹ continue</li>
                <li>• C¹ : dérivée continue</li>
                <li>• C^∞ : infiniment dérivable</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Applications ML</h4>
              <ul className="text-sm space-y-1">
                <li>• Gradient descent</li>
                <li>• Backpropagation</li>
                <li>• Optimisation</li>
                <li>• Fonctions de coût</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DerivativeConceptSection;
