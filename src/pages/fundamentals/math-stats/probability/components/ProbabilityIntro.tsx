
import React from "react";
import { Lightbulb, Target, Eye, Zap } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

const ProbabilityIntro = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-xl border border-indigo-100 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900 flex items-center gap-3">
          🎲 Introduction : Le Langage de l'Incertitude
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-xl leading-relaxed mb-6">
            Imaginez que vous êtes un détective face à un mystère. Vous n'avez pas toutes les preuves, 
            mais vous devez quand même prendre des décisions. Les probabilités sont votre loupe : 
            elles vous permettent de voir clair dans l'incertitude et de quantifier vos intuitions.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500 my-6">
            <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              🌟 Analogie : La météo de votre esprit
            </h3>
            <p className="mb-4">
              Quand vous regardez le ciel le matin, votre cerveau fait automatiquement des probabilités :
              "Il y a 80% de chances qu'il pleuve", "J'ai 30% de chances d'être en retard si je prends cette route".
            </p>
            <p className="text-sm bg-indigo-50 p-3 rounded">
              <strong>💡 Révélation :</strong> Les mathématiques des probabilités formalisent simplement 
              ce que votre intuition fait déjà ! Elles donnent juste une structure rigoureuse à votre raisonnement.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
            <h3 className="text-lg font-semibold text-amber-700 mb-3">🚨 Pourquoi c'est crucial aujourd'hui ?</h3>
            <p className="mb-3">
              Nous vivons dans un monde d'<strong>explosion de données</strong> où chaque décision important 
              implique de l'incertitude :
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Médecine :</strong> "Quelle est la probabilité que ce traitement fonctionne ?"</li>
              <li>• <strong>Finance :</strong> "Quel est le risque de perdre mon investissement ?"</li>
              <li>• <strong>IA :</strong> "Avec quelle confiance cette voiture autonome peut-elle tourner ?"</li>
              <li>• <strong>Business :</strong> "Quelle est la probabilité de succès de ce nouveau produit ?"</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <Target className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Prédiction</h3>
            <p className="text-sm text-gray-600">Anticiper l'avenir avec des données incomplètes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <div className="text-2xl mb-3">⚖️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Décision</h3>
            <p className="text-sm text-gray-600">Choisir la meilleure option face à l'incertitude</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <Eye className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Analyse</h3>
            <p className="text-sm text-gray-600">Comprendre les patterns cachés dans les données</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <Zap className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Optimisation</h3>
            <p className="text-sm text-gray-600">Maximiser les chances de succès</p>
          </div>
        </div>

        <CourseHighlight title="🚀 Pourquoi les probabilités sont-elles révolutionnaires ?" type="concept">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">❌ Avant les probabilités :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Décisions basées sur l'intuition pure</li>
                  <li>• Superstitions et croyances</li>
                  <li>• Impossibilité de quantifier les risques</li>
                  <li>• Gestion émotionnelle de l'incertitude</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">✅ Après les probabilités :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Quantification rigoureuse de l'incertitude</li>
                  <li>• Optimisation basée sur les données</li>
                  <li>• Prédictions avec marges d'erreur mesurables</li>
                  <li>• Gestion rationnelle des risques</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">🌍 Impact concret dans votre quotidien :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>GPS :</strong> Calcul du trajet optimal en temps réel<br/>
                  <strong>Netflix :</strong> Recommandations personnalisées<br/>
                  <strong>Météo :</strong> Prévisions à 7 jours avec précision
                </div>
                <div>
                  <strong>Médecine :</strong> Diagnostic assisté par IA<br/>
                  <strong>Finance :</strong> Détection automatique de fraudes<br/>
                  <strong>E-commerce :</strong> Prix dynamiques et stock optimisé
                </div>
              </div>
            </div>
          </div>
        </CourseHighlight>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">🎯 Objectifs de ce chapitre</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Vous saurez :</h4>
              <ul className="space-y-1">
                <li>✓ Calculer des probabilités dans la vraie vie</li>
                <li>✓ Comprendre l'indépendance et la corrélation</li>
                <li>✓ Appliquer le théorème de Bayes</li>
                <li>✓ Modéliser l'incertitude avec les distributions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Vous pourrez :</h4>
              <ul className="space-y-1">
                <li>✓ Prendre de meilleures décisions</li>
                <li>✓ Évaluer les risques rationnellement</li>
                <li>✓ Comprendre les statistiques dans les médias</li>
                <li>✓ Construire vos premiers modèles prédictifs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProbabilityIntro;
