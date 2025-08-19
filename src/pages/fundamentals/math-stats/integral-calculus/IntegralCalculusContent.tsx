import { Calculator, Settings, Target, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseHighlight from "@/components/courses/CourseHighlight";
import CourseEquation from "@/components/courses/CourseEquation";

const IntegralCalculusContent = () => {
  const integrationTechniques = [
    {
      name: "Intégration par substitution",
      formula: "∫ f(g(x))g'(x)dx = ∫ f(u)du",
      description: "Changement de variable pour simplifier l'intégrale",
      example: "∫ 2x(x² + 1)³dx"
    },
    {
      name: "Intégration par parties",
      formula: "∫ udv = uv - ∫ vdu",
      description: "Pour les produits de fonctions",
      example: "∫ x·eˣdx"
    },
    {
      name: "Fractions partielles",
      formula: "∫ P(x)/Q(x)dx",
      description: "Décomposition de fractions rationnelles",
      example: "∫ 1/(x² - 1)dx"
    }
  ];

  const applications = [
    {
      domain: "Statistiques",
      description: "Calcul de probabilités avec des densités continues",
      example: "∫ f(x)dx = P(a ≤ X ≤ b)",
      use_cases: ["Loi normale", "Fonctions de densité", "Espérance mathématique"]
    },
    {
      domain: "Machine Learning",
      description: "Optimisation et fonctions de coût",
      example: "∫ L(θ)dθ minimisation",
      use_cases: ["Gradient descent", "Régularisation", "Fonctions de perte"]
    },
    {
      domain: "Analyse de données",
      description: "Calcul d'aires sous les courbes",
      example: "AUC = ∫ ROC(x)dx",
      use_cases: ["Métriques de performance", "Analyse de tendances", "Intégration numérique"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-24">
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 rounded-xl border border-purple-100">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-yellow-500" />
            🧮 Le Calcul Intégral : L'Art de l'Accumulation
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="text-xl leading-relaxed mb-6">
              Le calcul intégral est l'art de mesurer l'accumulation. Là où les dérivées nous parlent 
              de vitesse de changement, les intégrales nous parlent de quantités totales accumulées. 
              En data science, c'est un outil fondamental pour comprendre les probabilités, 
              optimiser les modèles et analyser les tendances.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 my-6">
              <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                💡 Intuition géométrique
              </h3>
              <p className="mb-4">
                Imaginez que vous voulez mesurer l'aire sous une courbe. Le calcul intégral vous permet 
                de découper cette aire en rectangles infinitésimaux et de les additionner pour obtenir 
                la surface exacte.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <CourseEquation latex="A = \int_a^b f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\Delta x" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts fondamentaux */}
      <section id="concepts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-blue-600" />
          Concepts Fondamentaux
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-blue-400">
            <CardHeader>
              <CardTitle className="text-lg">Intégrale indéfinie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <CourseEquation latex="∫ f(x)dx = F(x) + C" />
              </div>
              <p className="text-sm text-gray-700">
                Famille de fonctions dont la dérivée est f(x). 
                La constante C représente toutes les primitives possibles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-400">
            <CardHeader>
              <CardTitle className="text-lg">Intégrale définie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <CourseEquation latex="∫_a^b f(x)dx = F(b) - F(a)" />
              </div>
              <p className="text-sm text-gray-700">
                Valeur numérique représentant l'aire nette entre la courbe 
                et l'axe x, entre les bornes a et b.
              </p>
            </CardContent>
          </Card>
        </div>

        <CourseHighlight title="🎯 Théorème fondamental du calcul" type="concept">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Première partie</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <CourseEquation latex="\frac{d}{dx}\int_a^x f(t)dt = f(x)" />
              </div>
              <p className="text-sm text-gray-600">
                La dérivée d'une intégrale par rapport à sa borne supérieure 
                est égale à la fonction intégrée.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Seconde partie</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <CourseEquation latex="\int_a^b f'(x)dx = f(b) - f(a)" />
              </div>
              <p className="text-sm text-gray-600">
                L'intégrale d'une dérivée sur un intervalle est égale 
                à la différence des valeurs aux bornes.
              </p>
            </div>
          </div>
        </CourseHighlight>
      </section>

      {/* Techniques d'intégration */}
      <section id="techniques" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Settings className="h-6 w-6 text-purple-600" />
          Techniques d'Intégration
        </h2>

        <div className="space-y-6">
          {integrationTechniques.map((technique, index) => (
            <Card key={index} className="border-l-4 border-purple-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2">Technique {index + 1}</Badge>
                    <CardTitle className="text-lg">{technique.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <CourseEquation latex={technique.formula} />
                </div>
                <p className="text-sm text-gray-700 mb-3">{technique.description}</p>
                <div className="bg-blue-50 p-3 rounded border">
                  <p className="text-sm font-medium text-blue-800">Exemple : {technique.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-green-600" />
          Applications en Data Science
        </h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
          <h3 className="text-xl font-semibold mb-6">Domaines d'application</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  {app.domain}
                </h4>
                <p className="text-sm mb-3">{app.description}</p>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <CourseEquation latex={app.example} />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Cas d'usage</h5>
                  <ul className="text-xs space-y-1">
                    {app.use_cases.map((use_case, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-green-400 rounded-full" />
                        {use_case}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercices pratiques */}
      <section id="exercices" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-orange-600" />
          Exercices Pratiques
        </h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-orange-400">
            <CardHeader>
              <CardTitle className="text-lg">Exercice 1 : Calcul d'aires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Calculez l'aire sous la courbe f(x) = x² entre x = 0 et x = 2</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <CourseEquation latex="A = \int_0^2 x^2 dx" />
              </div>
              <details className="bg-blue-50 p-4 rounded border">
                <summary className="cursor-pointer font-medium text-blue-800">Voir la solution</summary>
                <div className="mt-3 space-y-2">
                  <CourseEquation latex="A = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3}" />
                  <p className="text-sm text-blue-700">L'aire est de 8/3 unités carrées.</p>
                </div>
              </details>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-400">
            <CardHeader>
              <CardTitle className="text-lg">Exercice 2 : Probabilité continue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Pour une loi uniforme sur [0,1], calculez P(0.2 ≤ X ≤ 0.7)</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <CourseEquation latex="P(0.2 \leq X \leq 0.7) = \int_{0.2}^{0.7} 1 dx" />
              </div>
              <details className="bg-blue-50 p-4 rounded border">
                <summary className="cursor-pointer font-medium text-blue-800">Voir la solution</summary>
                <div className="mt-3 space-y-2">
                  <CourseEquation latex="P = [x]_{0.2}^{0.7} = 0.7 - 0.2 = 0.5" />
                  <p className="text-sm text-blue-700">La probabilité est de 0.5 ou 50%.</p>
                </div>
              </details>
            </CardContent>
          </Card>
        </div>
      </section>

      <CourseHighlight title="🎯 Prochaines étapes" type="info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Maîtrisé le calcul intégral, vous êtes prêt pour :</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ Calcul des probabilités continues</li>
              <li>✓ Optimisation de fonctions de coût</li>
              <li>✓ Analyse de performance de modèles</li>
              <li>✓ Méthodes d'intégration numérique</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Ressources pour approfondir :</h4>
            <ul className="space-y-2 text-sm">
              <li>📚 Khan Academy - Calcul intégral</li>
              <li>📊 3Blue1Brown - Essence du calcul</li>
              <li>🎓 MIT OpenCourseWare - Calculus</li>
              <li>💻 SciPy pour l'intégration numérique</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>
    </div>
  );
};

export default IntegralCalculusContent;
