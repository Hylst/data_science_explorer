
import React from "react";
import { Target, BarChart3, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";

const StatisticsProbabilityFoundations = () => {
  const descriptiveStats = [
    {
      name: "Moyenne (μ, x̄)",
      formula: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i",
      intuition: "Centre de gravité des données",
      usage: "Tendance centrale, mais sensible aux valeurs extrêmes"
    },
    {
      name: "Médiane",
      formula: "\\text{Médiane} = \\text{valeur du milieu (données triées)}",
      intuition: "Valeur qui sépare en deux moitiés égales",
      usage: "Robuste aux outliers, meilleure que la moyenne si données asymétriques"
    },
    {
      name: "Variance (σ²)",
      formula: "\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2",
      intuition: "Mesure de l'étalement autour de la moyenne",
      usage: "Quantifie la variabilité, base pour écart-type"
    },
    {
      name: "Écart-type (σ)",
      formula: "\\sigma = \\sqrt{\\sigma^2}",
      intuition: "Dispersion moyenne autour de la moyenne",
      usage: "Même unité que les données originales, règle des 68-95-99.7%"
    }
  ];

  const distributions = [
    {
      name: "Distribution Normale",
      symbol: "N(μ, σ²)",
      formula: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
      properties: [
        "Forme de cloche, symétrique",
        "Définie par moyenne μ et variance σ²",
        "68% des données dans [μ-σ, μ+σ]",
        "Théorème central limite"
      ],
      applications: ["Erreurs de mesure", "Tailles, poids humains", "Résidus de régression"]
    },
    {
      name: "Distribution Binomiale",
      symbol: "B(n, p)",
      formula: "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}",
      properties: [
        "n essais indépendants",
        "Probabilité p de succès",
        "k succès parmi n essais",
        "Moyenne = np, Variance = np(1-p)"
      ],
      applications: ["A/B testing", "Taux de conversion", "Contrôle qualité"]
    },
    {
      name: "Distribution de Poisson",
      symbol: "Poisson(λ)",
      formula: "P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}",
      properties: [
        "Événements rares sur interval fixe",
        "Paramètre λ = moyenne = variance",
        "Approximation binomiale si n grand, p petit",
        "Additivité"
      ],
      applications: ["Nombre de visiteurs/heure", "Pannes système", "Emails reçus"]
    }
  ];

  const inferenceTopics = [
    {
      title: "Test d'Hypothèses",
      description: "Méthode pour prendre des décisions basées sur des échantillons",
      concepts: [
        "H₀ (hypothèse nulle) vs H₁ (hypothèse alternative)",
        "Erreur Type I (α) : rejeter H₀ vraie",
        "Erreur Type II (β) : ne pas rejeter H₀ fausse",
        "Puissance = 1 - β"
      ],
      formula: "p\\text{-value} = P(\\text{observer résultat}|H_0 \\text{ vraie})"
    },
    {
      title: "Intervalles de Confiance",
      description: "Estimation de l'incertitude autour d'un paramètre",
      concepts: [
        "Niveau de confiance 95% ≠ probabilité 95%",
        "Largeur dépend de n (taille échantillon)",
        "Plus n grand → intervalle plus étroit",
        "Compromis précision vs certitude"
      ],
      formula: "IC_{95\\%} = \\bar{x} \\pm 1.96 \\times \\frac{\\sigma}{\\sqrt{n}}"
    },
    {
      title: "Théorème de Bayes",
      description: "Mise à jour des croyances avec nouvelles preuves",
      concepts: [
        "Probabilité a priori × Vraisemblance = A posteriori",
        "Base de l'apprentissage bayésien",
        "Classification naïve bayésienne",
        "Mise à jour séquentielle"
      ],
      formula: "P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}"
    }
  ];

  return (
    <section id="statistiques-probabilites" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Target className="h-6 w-6 text-green-600" />
        Statistiques & Probabilités : Cœur de l'Analyse Prédictive
      </h2>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 mb-8">
        
        {/* Introduction pédagogique */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-green-800">
            📊 Pourquoi les Statistiques sont-elles Cruciales ?
          </h3>
          <div className="bg-white/80 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-4">
              Les statistiques transforment des observations brutes en insights actionnables. 
              Elles vous permettent de quantifier l'incertitude, détecter des tendances significatives, 
              et prendre des décisions éclairées malgré le bruit dans les données.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-700 text-sm mb-2">🔍 Décrire</h4>
                <p className="text-xs text-gray-600">Résumer les caractéristiques principales des données</p>
              </div>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-700 text-sm mb-2">🎯 Inférer</h4>
                <p className="text-xs text-gray-600">Généraliser de l'échantillon à la population</p>
              </div>
              <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-700 text-sm mb-2">🔮 Prédire</h4>
                <p className="text-xs text-gray-600">Estimer les valeurs futures ou manquantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques Descriptives */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Statistiques Descriptives : Les Bases Essentielles
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {descriptiveStats.map((stat, index) => (
              <Card key={index} className="bg-white/80">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{stat.name}</CardTitle>
                  <div className="bg-gray-50 p-3 rounded">
                    <CourseEquation latex={stat.formula} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Intuition</h5>
                      <p className="text-sm text-gray-700">{stat.intuition}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Usage pratique</h5>
                      <p className="text-sm text-gray-600">{stat.usage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Exemple pratique */}
          <div className="mt-6 bg-white/60 p-6 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-3">📈 Exemple : Analyse des Ventes E-commerce</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h6 className="text-sm font-semibold mb-2">Données brutes (€)</h6>
                <p className="text-xs font-mono">120, 95, 200, 85, 150, 300, 110, 90, 180, 95</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h6 className="text-sm font-semibold mb-2">Statistiques calculées</h6>
                <div className="text-xs space-y-1">
                  <p>• Moyenne : 142.5€</p>
                  <p>• Médiane : 115€ (moins influencée par 300€)</p>
                  <p>• Écart-type : 66.8€</p>
                  <p>• Interprétation : Ventes très variables</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distributions de Probabilité */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Distributions de Probabilité : Modéliser l'Incertitude
          </h4>
          
          <div className="space-y-6">
            {distributions.map((dist, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-center gap-3 mb-3">
                  <h5 className="text-lg font-semibold text-purple-700">{dist.name}</h5>
                  <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">{dist.symbol}</span>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <CourseEquation latex={dist.formula} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">Propriétés clés</h6>
                    <ul className="space-y-1">
                      {dist.properties.map((prop, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">Applications</h6>
                    <ul className="space-y-1">
                      {dist.applications.map((app, idx) => (
                        <li key={idx} className="text-xs text-green-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-green-400 rounded-full" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inférence Statistique */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-green-800 mb-4">🔬 Inférence Statistique : De l'Échantillon à la Population</h4>
          
          <div className="space-y-6">
            {inferenceTopics.map((topic, index) => (
              <div key={index} className="bg-white/80 p-6 rounded-lg">
                <h5 className="text-lg font-semibold text-blue-700 mb-2">{topic.title}</h5>
                <p className="text-sm text-gray-700 mb-4">{topic.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">Concepts clés</h6>
                    <ul className="space-y-1">
                      {topic.concepts.map((concept, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                          {concept}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h6 className="text-xs font-semibold text-gray-500 uppercase mb-2">Formule clé</h6>
                    <CourseEquation latex={topic.formula} displayMode={false} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Pratiques */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-800 mb-4">🎯 Applications Concrètes en Data Science</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <h5 className="font-semibold text-sm mb-2">🧪 A/B Testing</h5>
              <p className="text-xs text-gray-600 mb-2">
                Tester si une nouvelle fonctionnalité améliore significativement les conversions.
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p>H₀: Pas de différence</p>
                <p>H₁: Amélioration significative</p>
                <p>α = 0.05, Puissance = 80%</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
              <h5 className="font-semibold text-sm mb-2">📊 Détection d'Anomalies</h5>
              <p className="text-xs text-gray-600 mb-2">
                Identifier des valeurs suspectes en utilisant la règle des 3-sigma.
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p>Anomalie si |x - μ| {">"} 3σ</p>
                <p>Probabilité {"<"} 0.3%</p>
                <p>Applications : fraude, maintenance</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-orange-400">
              <h5 className="font-semibold text-sm mb-2">🎯 Validation de Modèles</h5>
              <p className="text-xs text-gray-600 mb-2">
                Évaluer la performance avec intervalles de confiance.
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p>Précision: 85% ± 3%</p>
                <p>IC 95%: [82%, 88%]</p>
                <p>Validation croisée k-fold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsProbabilityFoundations;
