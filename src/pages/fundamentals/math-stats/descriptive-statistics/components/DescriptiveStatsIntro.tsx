
import React from "react";
import { Brain, ChartBar, Target, Lightbulb, Eye, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CourseHighlight from "@/components/courses/CourseHighlight";

const DescriptiveStatsIntro = () => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-100">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          L'art de résumer les données
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-6">
          <p className="text-xl leading-relaxed mb-4">
            Imaginez que vous devez expliquer à votre patron l'état de santé de votre entreprise 
            en regardant 10 000 lignes de données de ventes. Mission impossible ? 
            Pas avec les statistiques descriptives !
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              🎯 Analogie : Le GPS de vos données
            </h3>
            <p className="mb-3">
              Les statistiques descriptives sont comme un GPS pour vos données. Au lieu de vous perdre 
              dans un océan de chiffres, elles vous donnent instantanément :
            </p>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Votre position actuelle</strong> (où en êtes-vous ?)</li>
              <li>• <strong>La destination typique</strong> (que se passe-t-il normalement ?)</li>
              <li>• <strong>La variabilité du trajet</strong> (y a-t-il des surprises ?)</li>
              <li>• <strong>Les routes alternatives</strong> (quels sont les autres scénarios ?)</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6">
            <h3 className="text-lg font-semibold text-amber-700 mb-3">🚨 Pourquoi c'est crucial en 2024 ?</h3>
            <p className="mb-3">
              Nous sommes submergés par les données. Chaque clic, chaque achat, chaque interaction 
              génère des informations. Sans statistiques descriptives :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>❌ Problèmes sans statistiques :</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Paralysie par l'excès de données</li>
                  <li>• Décisions basées sur des impressions</li>
                  <li>• Impossible de communiquer les insights</li>
                  <li>• Risque de passer à côté de tendances</li>
                </ul>
              </div>
              <div>
                <strong>✅ Solutions avec statistiques :</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Synthèse claire et actionnable</li>
                  <li>• Décisions basées sur des faits</li>
                  <li>• Communication efficace aux équipes</li>
                  <li>• Détection rapide d'anomalies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <ChartBar className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Tendance centrale</h3>
            <p className="text-sm text-gray-600">Quelle est la valeur "typique" ?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Dispersion</h3>
            <p className="text-sm text-gray-600">Les données sont-elles prévisibles ?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <Eye className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Distribution</h3>
            <p className="text-sm text-gray-600">Comment les valeurs se répartissent ?</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform hover:scale-105 transition-transform">
            <Target className="h-8 w-8 text-orange-600 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Relations</h3>
            <p className="text-sm text-gray-600">Quels liens entre les variables ?</p>
          </div>
        </div>

        <CourseHighlight title="🌟 L'impact révolutionnaire des statistiques descriptives" type="concept">
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Révolution #1 :</strong> De l'intuition à la précision. Avant, on disait 
              "nos ventes vont bien". Maintenant : "nos ventes ont augmenté de 15% avec un écart-type 
              de 3%, ce qui indique une croissance stable et prévisible."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">📈 Business Intelligence</h4>
                <ul className="text-sm space-y-1">
                  <li>• KPIs et tableaux de bord</li>
                  <li>• Analyse des performances</li>
                  <li>• Détection d'anomalies</li>
                  <li>• Benchmarking concurrentiel</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">🔬 Recherche Scientifique</h4>
                <ul className="text-sm space-y-1">
                  <li>• Description des échantillons</li>
                  <li>• Contrôle qualité des données</li>
                  <li>• Communication des résultats</li>
                  <li>• Hypothèses pour tests statistiques</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">🤖 Intelligence Artificielle</h4>
                <ul className="text-sm space-y-1">
                  <li>• Exploration des datasets</li>
                  <li>• Feature engineering</li>
                  <li>• Validation des modèles</li>
                  <li>• Détection de biais</li>
                </ul>
              </div>
            </div>
          </div>
        </CourseHighlight>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center gap-2">
            🎯 Ce que vous allez maîtriser
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-indigo-700">📊 Compétences techniques :</h4>
              <ul className="space-y-1">
                <li>✓ Calculer moyenne, médiane, mode avec discernement</li>
                <li>✓ Interpréter variance et écart-type intuitivement</li>
                <li>✓ Utiliser les quartiles pour segmenter</li>
                <li>✓ Mesurer et interpréter les corrélations</li>
                <li>✓ Créer des visualisations percutantes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-purple-700">🧠 Compétences stratégiques :</h4>
              <ul className="space-y-1">
                <li>✓ Transformer des données en insights business</li>
                <li>✓ Communiquer efficacement avec les données</li>
                <li>✓ Détecter les patterns et anomalies</li>
                <li>✓ Prendre des décisions data-driven</li>
                <li>✓ Valider ou invalider des hypothèses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptiveStatsIntro;
