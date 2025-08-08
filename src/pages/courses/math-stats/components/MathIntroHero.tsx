
import React from "react";
import { Lightbulb, Brain, Calculator, Target, TrendingUp } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

const MathIntroHero = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-xl border border-blue-100 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900 flex items-center gap-3">
          🧮 Introduction : Les Mathématiques, Langage Universel de la Data Science
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-xl leading-relaxed mb-6">
            Imaginez que vous essayez de comprendre une conversation dans une langue étrangère. 
            Sans maîtriser cette langue, même les concepts les plus simples vous échappent. 
            Les mathématiques sont cette langue universelle qui permet aux data scientists 
            de "converser" avec les données et les algorithmes.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500 my-6">
            <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              💡 Analogie : Les mathématiques comme GPS mental
            </h3>
            <p className="mb-4">
              Tout comme un GPS vous guide dans une ville inconnue, les mathématiques vous guident 
              à travers la complexité des données. Elles vous donnent les outils pour :
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Navigator</strong> dans l'espace multidimensionnel des données</li>
              <li>• <strong>Optimiser</strong> vos trajets algorithmiques</li>
              <li>• <strong>Mesurer</strong> les distances entre les concepts</li>
              <li>• <strong>Prédire</strong> les destinations probables</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
            <h3 className="text-lg font-semibold text-amber-700 mb-3">🚨 Pourquoi c'est crucial maintenant ?</h3>
            <p className="mb-3">
              Avec l'explosion de l'IA et du Big Data, les mathématiques ne sont plus optionnelles :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Sans mathématiques :</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Utilisation "boîte noire" des outils</li>
                  <li>• Impossibilité de déboguer les modèles</li>
                  <li>• Résultats inexpliqués et non fiables</li>
                </ul>
              </div>
              <div>
                <strong>Avec mathématiques :</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Maîtrise complète des algorithmes</li>
                  <li>• Capacité d'innovation et d'adaptation</li>
                  <li>• Explications rigoureuses des résultats</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Schéma conceptuel */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 my-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-4 text-center">
              🎯 Écosystème Mathématique de la Data Science
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-blue-700">Algèbre Linéaire</h4>
                <p className="text-xs text-gray-600 mt-1">Matrices, Vecteurs, Transformations</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-green-700">Probabilités</h4>
                <p className="text-xs text-gray-600 mt-1">Incertitude, Distributions, Bayes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-orange-700">Optimisation</h4>
                <p className="text-xs text-gray-600 mt-1">Gradients, Minimisation, SGD</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-purple-700">Statistiques</h4>
                <p className="text-xs text-gray-600 mt-1">Inférence, Tests, Validation</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-sm text-purple-700 font-medium">↓ Convergent vers ↓</div>
              <div className="bg-indigo-100 p-3 rounded-lg mt-2">
                <span className="text-lg font-bold text-indigo-800">🤖 Machine Learning & IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MathIntroHero;
