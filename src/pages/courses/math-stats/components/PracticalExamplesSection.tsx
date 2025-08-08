
import React from "react";
import { Target, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";

const PracticalExamplesSection = () => {
  const practicalExamples = [
    {
      domain: "Machine Learning",
      example: "Régression Linéaire",
      description: "Prédire le prix des maisons en fonction de leurs caractéristiques",
      math: "y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_n x_n + \\varepsilon",
      explanation: "L'algèbre linéaire résout ce système d'équations pour trouver les meilleurs coefficients β.",
      mathConcepts: ["Algèbre Linéaire", "Statistiques"],
      realWorldSteps: [
        "Collecter données : surface, chambres, quartier, prix",
        "Représenter sous forme matricielle X (features) et y (prix)",
        "Résoudre β = (X'X)⁻¹X'y par décomposition matricielle",
        "Valider avec R², p-values, intervalles de confiance"
      ]
    },
    {
      domain: "Probabilités",
      example: "Classification Bayésienne",
      description: "Classifier des emails comme spam ou non-spam",
      math: "P(\\text{spam}|\\text{mots}) = \\frac{P(\\text{mots}|\\text{spam}) \\times P(\\text{spam})}{P(\\text{mots})}",
      explanation: "Le théorème de Bayes combine probabilités a priori et vraisemblances pour classifier.",
      mathConcepts: ["Probabilités", "Statistiques"],
      realWorldSteps: [
        "Entraîner sur corpus d'emails étiquetés",
        "Calculer P(mot|spam) et P(mot|non-spam) pour chaque mot",
        "Pour nouvel email, appliquer Bayes avec indépendance naïve",
        "Décider selon seuil de probabilité optimal"
      ]
    },
    {
      domain: "Optimisation",
      example: "Descente de Gradient",
      description: "Entraîner un réseau de neurones pour reconnaître des images",
      math: "\\theta_{t+1} = \\theta_t - \\alpha \\nabla_\\theta J(\\theta_t)",
      explanation: "Le calcul différentiel guide l'algorithme vers le minimum de la fonction de coût.",
      mathConcepts: ["Calcul Différentiel", "Algèbre Linéaire"],
      realWorldSteps: [
        "Initialiser poids θ aléatoirement",
        "Forward pass : calculer prédictions avec multiplications matricielles",
        "Calculer coût J (cross-entropy, MSE...)",
        "Backward pass : calculer gradients ∇J par chain rule",
        "Mettre à jour poids et répéter"
      ]
    },
    {
      domain: "Analyse Exploratoire",
      example: "Détection d'Outliers",
      description: "Identifier des transactions frauduleuses dans un système bancaire",
      math: "z = \\frac{x - \\mu}{\\sigma}, \\quad |z| > 3 \\Rightarrow \\text{outlier suspect}",
      explanation: "Les statistiques descriptives révèlent les valeurs anormalement éloignées de la distribution normale.",
      mathConcepts: ["Statistiques Descriptives", "Probabilités"],
      realWorldSteps: [
        "Calculer moyenne μ et écart-type σ des montants normaux",
        "Standardiser chaque transaction : z-score",
        "Flaguer transactions avec |z| > 3 (probabilité < 0.3%)",
        "Analyser contextuellement : heure, localisation, historique"
      ]
    }
  ];

  const interactiveScenarios = [
    {
      title: "🏠 Prédiction Prix Immobilier",
      context: "Startup PropTech veut estimer automatiquement les prix",
      challenge: "Données complexes : localisation, surface, âge, prestations...",
      mathSolution: "Régression multiple avec sélection de features",
      businessImpact: "Estimation précise → meilleure valorisation → plus de transactions"
    },
    {
      title: "📱 Recommandation Personnalisée",
      context: "App de streaming veut recommander du contenu pertinent",
      challenge: "Millions d'utilisateurs × milliers de contenus = matrice énorme",
      mathSolution: "Factorisation matricielle (SVD) + filtrage collaboratif",
      businessImpact: "Engagement ↑ 25% → temps d'écran ↑ → revenus publicitaires ↑"
    },
    {
      title: "🛒 Optimisation Inventaire",
      context: "E-commerce veut minimiser ruptures de stock sans sur-stocker",
      challenge: "Demande incertaine, saisonnalité, coûts de stockage",
      mathSolution: "Modèles probabilistes (Poisson) + optimisation sous contraintes",
      businessImpact: "Coûts ↓ 15% + satisfaction client ↑ → marge bénéficiaire ↑"
    }
  ];

  return (
    <section id="applications" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Target className="h-6 w-6 text-green-600" />
        Applications Pratiques : Des Maths aux Solutions Business
      </h2>

      {/* Exemples détaillés */}
      <div className="space-y-8 mb-12">
        {practicalExamples.map((example, index) => (
          <Card key={index} className="border-l-4 border-blue-400 bg-gradient-to-r from-blue-50/50 to-white">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-blue-100">{example.domain}</Badge>
                  <CardTitle className="text-lg">{example.example}</CardTitle>
                </div>
                <div className="flex gap-1">
                  {example.mathConcepts.map((concept, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {concept}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{example.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    Formule mathématique clé
                  </h4>
                  <CourseEquation latex={example.math} />
                </div>
                
                <CourseHighlight title="💡 Pourquoi ça marche" type="concept">
                  {example.explanation}
                </CourseHighlight>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-green-600" />
                    Étapes de mise en œuvre
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {example.realWorldSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="bg-green-200 text-green-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scénarios interactifs business */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6 text-center">🎯 Scénarios Business : Math Impact Réel</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interactiveScenarios.map((scenario, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg text-purple-800">{scenario.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Contexte</h4>
                  <p className="text-sm text-gray-700">{scenario.context}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Défi</h4>
                  <p className="text-sm text-gray-600">{scenario.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Solution Mathématique</h4>
                  <p className="text-sm text-blue-700 font-medium">{scenario.mathSolution}</p>
                </div>
                <div className="bg-white/60 p-3 rounded border-l-4 border-green-400">
                  <h4 className="text-xs font-semibold text-green-700 uppercase mb-1">Impact Business</h4>
                  <p className="text-sm text-green-800">{scenario.businessImpact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section méta-apprentissage */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
        <h3 className="text-xl font-semibold mb-4 text-indigo-800 text-center">
          🧠 Comment Aborder un Nouveau Problème de Data Science
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-700 text-sm mb-2">1️⃣ Comprendre</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Quel est l'objectif business ?</li>
              <li>• Quelles données disponibles ?</li>
              <li>• Contraintes temporelles/techniques ?</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-700 text-sm mb-2">2️⃣ Modéliser</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Classification ou régression ?</li>
              <li>• Supervisé ou non-supervisé ?</li>
              <li>• Quelles features importantes ?</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-purple-700 text-sm mb-2">3️⃣ Implémenter</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Choisir algorithmes adaptés</li>
              <li>• Valider avec métriques appropriées</li>
              <li>• Optimiser hyperparamètres</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-semibold text-orange-700 text-sm mb-2">4️⃣ Déployer</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Monitoring des performances</li>
              <li>• A/B test des résultats</li>
              <li>• Réentraînement périodique</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <CourseHighlight title="🔑 Le secret du succès" type="info">
            <p className="text-sm">
              Chaque étape s'appuie sur des concepts mathématiques solides. Plus votre compréhension 
              mathématique est profonde, plus vos solutions seront robustes et innovantes.
            </p>
            <p className="text-sm mt-2 font-medium">
              Math solides → Intuition développée → Meilleurs choix → Résultats supérieurs
            </p>
          </CourseHighlight>
        </div>
      </div>
    </section>
  );
};

export default PracticalExamplesSection;
