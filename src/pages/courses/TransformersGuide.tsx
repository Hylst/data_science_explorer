import ContentLayout from "@/components/layout/ContentLayout";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Scale, Minimize2, BarChart2, CheckCircle, XCircle, Code, Lightbulb, Target, ArrowRight, Layers, Zap, Eye, MessageSquare, Image, Network } from "lucide-react";

/**
 * TransformersGuide - Comprehensive course page for Data Transformers in Machine Learning
 * Covers standardization, normalization, uniformization with practical examples and analogies
 */
const TransformersGuide = () => {
  return (
    <ContentLayout 
      title="Transformers en Machine Learning" 
      backLink={{ href: "/courses", label: "Retour aux cours" }}
      sidebar={{
          items: [
            { title: "Introduction", href: "#introduction" },
            { title: "I. Transformers de Données", href: "#data-transformers" },
            { title: "Standardisation", href: "#standardization" },
            { title: "Normalisation", href: "#normalization" },
            { title: "Uniformisation", href: "#uniformization" },
            { title: "Autres Transformers", href: "#other-transformers" },
            { title: "Workflow Données", href: "#workflow" },
            { title: "II. Architecture Transformer", href: "#transformer-architecture" },
            { title: "Mécanisme d'Attention", href: "#attention-mechanism" },
            { title: "Types de Transformers", href: "#transformer-types" },
            { title: "BERT vs GPT", href: "#bert-vs-gpt" },
            { title: "Vision Transformers", href: "#vision-transformers" }
          ]
        }}
    >
      <section className="py-8">
        <UnifiedHeroSection
          variant="course"
          title="Transformers en Machine Learning"
          description="Maîtrisez la standardisation, normalisation et uniformisation des données. Apprenez quand et comment utiliser chaque transformer pour optimiser vos modèles de machine learning."
        />
        
        {/* Introduction Section */}
        <div id="introduction" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Introduction : Les Deux Univers des "Transformers"</h2>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                Comprendre la Distinction Fondamentale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-2">Attention : Deux Concepts Différents !</h3>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Le terme "Transformer" peut prêter à confusion car il désigne deux concepts distincts en Machine Learning :
                        <strong> les transformers de données (preprocessing)</strong> et <strong>l'architecture Transformer (neural networks)</strong>.
                        Cette page couvre les deux pour vous donner une vision complète.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Pourquoi Cette Page Est Unique
                  </h4>
                  <p className="text-purple-700 mb-3">
                    Contrairement à d'autres ressources qui traitent ces sujets séparément, cette page vous offre 
                    une vision complète des deux univers "Transformer" avec des exemples pratiques, des comparaisons 
                    détaillées et des guides d'utilisation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-600">
                    <div>
                      <strong>Partie I:</strong> Transformers de données (preprocessing)
                      <br />Standardisation, normalisation, encodage
                    </div>
                    <div>
                      <strong>Partie II:</strong> Architecture Transformer (neural networks)
                      <br />Attention, BERT, GPT, applications modernes
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Standardisation Section */}
        <div id="standardization" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Standardisation (StandardScaler)</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-blue-600" />
                Standardisation (StandardScaler) : La Base de la Normalisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-blue-800">🎯 Principe Fondamental</h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  La standardisation transforme vos données pour qu'elles aient une <strong>moyenne de 0</strong> et un <strong>écart-type de 1</strong>. 
                  C'est comme "recentrer" toutes vos variables sur la même échelle, permettant une comparaison équitable.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 p-4 rounded-r-lg my-4">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Formule Mathématique Détaillée
                  </h4>
                  <div className="bg-white p-4 rounded border shadow-sm">
                    <div className="font-mono text-lg text-center mb-2">z = (x - μ) / σ</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>x</strong> = valeur originale à transformer</p>
                      <p><strong>μ</strong> = moyenne arithmétique de l'échantillon</p>
                      <p><strong>σ</strong> = écart-type de l'échantillon</p>
                      <p><strong>z</strong> = valeur standardisée (Z-score)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-green-800">💡 Analogie Pédagogique</h4>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-green-700 text-sm leading-relaxed">
                    <strong>Imaginez un concours de cuisine</strong> : Un chef français note sur 20, un chef italien sur 100, 
                    et un chef japonais sur 5. Comment comparer équitablement leurs performances ? 
                    La standardisation transforme toutes ces notes sur une échelle commune où :
                  </p>
                  <ul className="mt-2 text-green-700 text-sm space-y-1">
                    <li>• <strong>0</strong> = performance moyenne</li>
                    <li>• <strong>+1</strong> = 1 écart-type au-dessus de la moyenne (très bon)</li>
                    <li>• <strong>-1</strong> = 1 écart-type en-dessous (en difficulté)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">🔧 Implémentation Pratique</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-green-600" />
                    Exemple Complet avec Analyse
                  </h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`from sklearn.preprocessing import StandardScaler
import numpy as np
import pandas as pd

# 📊 Données réelles : caractéristiques de maisons
data = pd.DataFrame({
    'surface_m2': [45, 120, 80, 200, 65, 150],
    'prix_euros': [150000, 450000, 280000, 800000, 200000, 600000],
    'nb_pieces': [2, 5, 3, 8, 3, 6]
})

print("📈 AVANT standardisation:")
print(f"Surface - Moyenne: {data['surface_m2'].mean():.1f}m², Écart-type: {data['surface_m2'].std():.1f}")
print(f"Prix - Moyenne: {data['prix_euros'].mean():.0f}€, Écart-type: {data['prix_euros'].std():.0f}")

# 🔄 Application de la standardisation
scaler = StandardScaler()
data_standardized = pd.DataFrame(
    scaler.fit_transform(data),
    columns=data.columns
)

print("\n📉 APRÈS standardisation:")
for col in data_standardized.columns:
    mean_val = data_standardized[col].mean()
    std_val = data_standardized[col].std()
    print(f"{col} - Moyenne: {mean_val:.3f}, Écart-type: {std_val:.3f}")

# 🎯 Interprétation des Z-scores
print("\n🔍 Interprétation des premières valeurs:")
for i, row in data_standardized.head(3).iterrows():
    print(f"Maison {i+1}: Surface Z-score = {row['surface_m2']:.2f}")
    if row['surface_m2'] > 0:
        print(f"  → Surface au-dessus de la moyenne")
    else:
        print(f"  → Surface en-dessous de la moyenne")`}
                  </pre>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-orange-800">⚡ Astuces d'Expert</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">🎯 Quand l'utiliser ?</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• <strong>SVM, KNN, K-means</strong> : Obligatoire !</li>
                      <li>• <strong>Réseaux de neurones</strong> : Accélère l'entraînement</li>
                      <li>• <strong>PCA, LDA</strong> : Évite la dominance d'une variable</li>
                      <li>• <strong>Régression logistique</strong> : Améliore la convergence</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Pièges à éviter</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• <strong>Valeurs aberrantes</strong> : Utilisez RobustScaler</li>
                      <li>• <strong>Données catégorielles</strong> : Ne pas standardiser !</li>
                      <li>• <strong>Test set</strong> : Utilisez fit() du train uniquement</li>
                      <li>• <strong>Distribution asymétrique</strong> : Considérez PowerTransformer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    ✅ Avantages Détaillés
                  </h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Égalité des variables</strong> : Aucune variable ne domine par son échelle</li>
                    <li>• <strong>Convergence rapide</strong> : Les algorithmes d'optimisation convergent plus vite</li>
                    <li>• <strong>Distribution préservée</strong> : Garde la forme de la distribution originale</li>
                    <li>• <strong>Interprétabilité</strong> : Les Z-scores ont une signification statistique claire</li>
                    <li>• <strong>Réversibilité</strong> : Transformation facilement inversible</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    ❌ Limitations à Connaître
                  </h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Sensibilité aux outliers</strong> : Une valeur extrême affecte μ et σ</li>
                    <li>• <strong>Pas de bornes</strong> : Les valeurs peuvent être très négatives/positives</li>
                    <li>• <strong>Hypothèse de normalité</strong> : Fonctionne mieux avec des distributions gaussiennes</li>
                    <li>• <strong>Perte d'interprétation</strong> : Les unités originales disparaissent</li>
                    <li>• <strong>Données sparse</strong> : Peut créer de la densité artificielle</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  🎓 Cas d'Usage Recommandés
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm text-indigo-700">Machine Learning</h5>
                    <p className="text-xs text-gray-600 mt-1">SVM, KNN, clustering, réseaux de neurones</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm text-indigo-700">Analyse Statistique</h5>
                    <p className="text-xs text-gray-600 mt-1">PCA, analyse factorielle, tests statistiques</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-semibold text-sm text-indigo-700">Comparaison de Variables</h5>
                    <p className="text-xs text-gray-600 mt-1">Variables d'unités différentes, benchmarking</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Normalisation Section */}
        <div id="normalization" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Normalisation (MinMaxScaler)</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Minimize2 className="h-5 w-5 text-green-600" />
                Normalisation (MinMaxScaler) : Mise à l'Échelle Proportionnelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-green-800">🎯 Principe Fondamental</h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  La normalisation MinMax transforme vos données pour qu'elles soient comprises entre <strong>0 et 1</strong>. 
                  Elle préserve parfaitement les <strong>relations proportionnelles</strong> entre les valeurs originales, 
                  ce qui en fait un choix idéal pour de nombreux algorithmes.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-4 rounded-r-lg my-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Formule Mathématique Détaillée
                  </h4>
                  <div className="bg-white p-4 rounded border shadow-sm">
                    <div className="font-mono text-lg text-center mb-2">X_norm = (X - X_min) / (X_max - X_min)</div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>X</strong> = valeur originale à transformer</p>
                      <p><strong>X_min</strong> = valeur minimale dans l'échantillon</p>
                      <p><strong>X_max</strong> = valeur maximale dans l'échantillon</p>
                      <p><strong>X_norm</strong> = valeur normalisée ∈ [0, 1]</p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-green-100 rounded">
                    <p className="text-sm text-green-800 font-medium">📏 Propriété clé : X_min → 0 et X_max → 1</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-yellow-800">💡 Analogie Pédagogique</h4>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    <strong>Imaginez un thermomètre universel</strong> : Vous avez des températures de différentes planètes 
                    (Mars: -80°C, Terre: 15°C, Vénus: 460°C). La normalisation crée un "thermomètre universel" où :
                  </p>
                  <ul className="mt-2 text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Mars (-80°C)</strong> → 0.0 (la plus froide)</li>
                    <li>• <strong>Terre (15°C)</strong> → 0.18 (relativement froide)</li>
                    <li>• <strong>Vénus (460°C)</strong> → 1.0 (la plus chaude)</li>
                  </ul>
                  <p className="mt-2 text-yellow-700 text-sm font-medium">
                    Les proportions sont préservées : Vénus est toujours 5.8x plus chaude que la Terre !
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">🔧 Implémentation Pratique</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-green-600" />
                    Exemple Complet avec Analyse
                  </h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`from sklearn.preprocessing import MinMaxScaler
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# 📊 Données réelles : performances d'employés
data = pd.DataFrame({
    'ventes_mensuelles': [5000, 12000, 8000, 25000, 15000, 3000],
    'heures_travaillees': [35, 45, 40, 55, 48, 30],
    'satisfaction_client': [3.2, 4.8, 4.1, 4.9, 4.5, 2.8]
})

print("📈 AVANT normalisation:")
for col in data.columns:
    print(f"{col}: Min={data[col].min()}, Max={data[col].max()}, Étendue={data[col].max()-data[col].min()}")

# 🔄 Application de la normalisation
scaler = MinMaxScaler()
data_normalized = pd.DataFrame(
    scaler.fit_transform(data),
    columns=data.columns
)

print("\n📉 APRÈS normalisation:")
for col in data_normalized.columns:
    print(f"{col}: Min={data_normalized[col].min():.3f}, Max={data_normalized[col].max():.3f}")

# 🎯 Vérification des proportions
print("\n🔍 Vérification des proportions (employé 1 vs 4):")
original_ratio = data.loc[3, 'ventes_mensuelles'] / data.loc[0, 'ventes_mensuelles']
normalized_ratio = data_normalized.loc[3, 'ventes_mensuelles'] / data_normalized.loc[0, 'ventes_mensuelles']
print(f"Ratio original: {original_ratio:.2f}")
print(f"Ratio normalisé: {normalized_ratio:.2f}")
print(f"Proportions préservées: {abs(original_ratio - normalized_ratio) < 0.01}")

# 🎨 Transformation inverse
data_restored = pd.DataFrame(
    scaler.inverse_transform(data_normalized),
    columns=data.columns
)
print(f"\n🔄 Données restaurées identiques: {np.allclose(data, data_restored)}")`}
                  </pre>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-orange-800">⚡ Astuces d'Expert</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">🎯 Cas d'usage idéaux</h5>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• <strong>Réseaux de neurones</strong> : Activation sigmoid/tanh</li>
                      <li>• <strong>Algorithmes génétiques</strong> : Fitness normalisée</li>
                      <li>• <strong>Visualisation</strong> : Couleurs, tailles proportionnelles</li>
                      <li>• <strong>Systèmes de recommandation</strong> : Scores [0,1]</li>
                      <li>• <strong>Images</strong> : Pixels déjà dans [0,255]</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">⚠️ Pièges critiques</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• <strong>Outliers extrêmes</strong> : Compriment 99% des données</li>
                      <li>• <strong>Nouvelles données</strong> : Peuvent sortir de [0,1]</li>
                      <li>• <strong>Distribution uniforme</strong> : Perd l'info de densité</li>
                      <li>• <strong>Données constantes</strong> : Division par zéro !</li>
                      <li>• <strong>Données négatives</strong> : Changent de signe relatif</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-indigo-800">🔬 Comparaison avec StandardScaler</h4>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-indigo-700 mb-2">📊 MinMaxScaler</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>✅ Bornes garanties [0,1]</li>
                        <li>✅ Proportions préservées</li>
                        <li>✅ Interprétation intuitive</li>
                        <li>❌ Très sensible aux outliers</li>
                        <li>❌ Perd l'info de distribution</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-semibold text-indigo-700 mb-2">📈 StandardScaler</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>✅ Préserve la distribution</li>
                        <li>✅ Moins sensible aux outliers</li>
                        <li>✅ Signification statistique</li>
                        <li>❌ Pas de bornes fixes</li>
                        <li>❌ Valeurs négatives possibles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    ✅ Avantages Détaillés
                  </h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Bornes garanties</strong> : Toujours dans [0, 1], idéal pour certains algorithmes</li>
                    <li>• <strong>Proportions préservées</strong> : Les rapports entre valeurs restent identiques</li>
                    <li>• <strong>Interprétation intuitive</strong> : 0 = minimum, 1 = maximum, 0.5 = milieu</li>
                    <li>• <strong>Réversibilité parfaite</strong> : Transformation facilement inversible</li>
                    <li>• <strong>Stabilité numérique</strong> : Pas de problème de convergence</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    ❌ Limitations Critiques
                  </h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Outliers catastrophiques</strong> : Un seul outlier comprime toutes les autres valeurs</li>
                    <li>• <strong>Perte d'information</strong> : La forme de la distribution disparaît</li>
                    <li>• <strong>Nouvelles données problématiques</strong> : Peuvent sortir de [0,1]</li>
                    <li>• <strong>Données constantes</strong> : Division par zéro si min = max</li>
                    <li>• <strong>Biais vers les extrêmes</strong> : Les valeurs moyennes perdent de l'importance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  🎓 Guide de Décision : Quand Utiliser MinMaxScaler ?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-white p-3 rounded border border-green-300">
                    <h5 className="font-semibold text-sm text-green-700">✅ Utilisez si :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Pas d'outliers extrêmes</li>
                      <li>• Besoin de bornes [0,1]</li>
                      <li>• Proportions importantes</li>
                      <li>• Réseaux de neurones</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-300">
                    <h5 className="font-semibold text-sm text-red-700">❌ Évitez si :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Présence d'outliers</li>
                      <li>• Distribution importante</li>
                      <li>• Données très étalées</li>
                      <li>• SVM, clustering</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <h5 className="font-semibold text-sm text-yellow-700">🤔 Alternative :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• RobustScaler (outliers)</li>
                      <li>• StandardScaler (distribution)</li>
                      <li>• QuantileTransformer (uniforme)</li>
                      <li>• PowerTransformer (gaussien)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Uniformisation Section */}
        <div id="uniformization" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Uniformisation (QuantileTransformer)</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-purple-600" />
                Uniformisation (QuantileTransformer) : Maîtriser les Distributions Complexes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">🎯 Principe Révolutionnaire</h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  L'uniformisation transforme vos données pour qu'elles suivent une <strong>distribution uniforme</strong> parfaite. 
                  Cette technique révolutionnaire utilise les <strong>quantiles</strong> pour redistribuer équitablement 
                  toutes les valeurs, peu importe la complexité de la distribution originale.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-400 p-4 rounded-r-lg my-4">
                  <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Principe Mathématique des Quantiles
                  </h4>
                  <div className="bg-white p-4 rounded border shadow-sm">
                    <div className="text-sm text-gray-700 space-y-2">
                      <p><strong>Étape 1</strong> : Calcul de la fonction de répartition empirique F(x)</p>
                      <p><strong>Étape 2</strong> : Pour chaque valeur x, calcul de son rang percentile</p>
                      <p><strong>Étape 3</strong> : Transformation : x → F(x) ∈ [0, 1]</p>
                      <p><strong>Résultat</strong> : Distribution parfaitement uniforme</p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-purple-100 rounded">
                    <p className="text-sm text-purple-800 font-medium">🎲 Propriété magique : Toutes les valeurs sont équiprobables !</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-orange-800">💡 Analogie Pédagogique</h4>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                  <p className="text-orange-700 text-sm leading-relaxed">
                    <strong>Imaginez un concours de talents déséquilibré</strong> : 90% des participants sont débutants (score 1-3), 
                    9% sont bons (score 4-7), et 1% sont exceptionnels (score 8-10). L'uniformisation redistribue 
                    équitablement tous les participants :
                  </p>
                  <ul className="mt-2 text-orange-700 text-sm space-y-1">
                    <li>• <strong>33% obtiennent</strong> → 0.0-0.33 (anciens débutants)</li>
                    <li>• <strong>33% obtiennent</strong> → 0.33-0.66 (anciens moyens)</li>
                    <li>• <strong>33% obtiennent</strong> → 0.66-1.0 (anciens experts)</li>
                  </ul>
                  <p className="mt-2 text-orange-700 text-sm font-medium">
                    Résultat : Une distribution parfaitement équilibrée où chaque niveau est représenté équitablement !
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-indigo-800">🔧 Implémentation Avancée</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-green-600" />
                    Exemple Complet : Données Financières Asymétriques
                  </h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`from sklearn.preprocessing import QuantileTransformer
import numpy as np
import pandas as pd
from scipy import stats

# 📊 Simulation de données financières réelles (très asymétriques)
np.random.seed(42)
# Distribution log-normale (typique des revenus, prix d'actions)
revenues = np.random.lognormal(mean=10, sigma=1, size=1000)
# Quelques outliers extrêmes
revenues = np.append(revenues, [1000000, 2000000, 5000000])

print("📈 AVANT uniformisation (distribution log-normale):")
print(f"Moyenne: {revenues.mean():.0f}€")
print(f"Médiane: {np.median(revenues):.0f}€")
print(f"Écart-type: {revenues.std():.0f}€")
print(f"Skewness (asymétrie): {stats.skew(revenues):.2f}")

# 🔄 Application de l'uniformisation
transformer = QuantileTransformer(
    output_distribution='uniform',
    n_quantiles=1000,  # Précision élevée
    random_state=42
)
revenues_uniform = transformer.fit_transform(revenues.reshape(-1, 1)).flatten()

print("\n📉 APRÈS uniformisation:")
print(f"Moyenne: {revenues_uniform.mean():.3f}")
print(f"Médiane: {np.median(revenues_uniform):.3f}")
print(f"Écart-type: {revenues_uniform.std():.3f}")
print(f"Skewness: {stats.skew(revenues_uniform):.6f}")

# 🎯 Test d'uniformité (Kolmogorov-Smirnov)
ks_stat, p_value = stats.kstest(revenues_uniform, 'uniform')
print(f"\n🔍 Distribution uniforme: {p_value > 0.05}")`}
                  </pre>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3 text-teal-800">⚡ Techniques Avancées</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-teal-800 mb-2">🎯 Paramètres Critiques</h5>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• <strong>n_quantiles</strong> : Plus élevé = plus précis</li>
                      <li>• <strong>subsample</strong> : Pour gros datasets ({'>'}1M)</li>
                      <li>• <strong>output_distribution</strong> : 'uniform' ou 'normal'</li>
                      <li>• <strong>ignore_implicit_zeros</strong> : Pour données sparse</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-amber-800 mb-2">⚠️ Pièges Techniques</h5>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• <strong>Données dupliquées</strong> : Créent des plateaux</li>
                      <li>• <strong>Échantillon trop petit</strong> : Quantiles instables</li>
                      <li>• <strong>Nouvelles données</strong> : Peuvent sortir de [0,1]</li>
                      <li>• <strong>Données temporelles</strong> : Attention au data leakage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    ✅ Avantages Révolutionnaires
                  </h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Robustesse extrême</strong> : Immunisé contre tous les outliers</li>
                    <li>• <strong>Universalité</strong> : Fonctionne avec toute distribution</li>
                    <li>• <strong>Égalité parfaite</strong> : Chaque valeur a la même probabilité</li>
                    <li>• <strong>Préservation d'ordre</strong> : Le classement reste intact</li>
                    <li>• <strong>Stabilité</strong> : Résultats reproductibles</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    ❌ Limitations Importantes
                  </h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Perte de métrique</strong> : Les distances originales disparaissent</li>
                    <li>• <strong>Plateaux artificiels</strong> : Valeurs identiques → même quantile</li>
                    <li>• <strong>Complexité</strong> : Plus lent que les autres méthodes</li>
                    <li>• <strong>Interprétation difficile</strong> : Signification moins intuitive</li>
                    <li>• <strong>Overfitting potentiel</strong> : Mémorise la distribution d'entraînement</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  🎓 Guide Expert : Quand Utiliser QuantileTransformer ?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-white p-3 rounded border border-green-300">
                    <h5 className="font-semibold text-sm text-green-700">✅ Parfait pour :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Données financières (log-normale)</li>
                      <li>• Distributions multimodales</li>
                      <li>• Présence d'outliers extrêmes</li>
                      <li>• Algorithmes sensibles à la distribution</li>
                      <li>• Données très asymétriques</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-red-300">
                    <h5 className="font-semibold text-sm text-red-700">❌ Évitez si :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Distances importantes (clustering)</li>
                      <li>• Données déjà normales</li>
                      <li>• Interprétabilité cruciale</li>
                      <li>• Échantillon très petit ({'<'}100)</li>
                      <li>• Performance critique</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-300">
                    <h5 className="font-semibold text-sm text-blue-700">🎯 Cas d'usage :</h5>
                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                      <li>• Gradient Boosting</li>
                      <li>• Réseaux de neurones profonds</li>
                      <li>• Analyse de survie</li>
                      <li>• Traitement d'images médicales</li>
                      <li>• Données de capteurs IoT</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Transformers Section */}
        <div id="other-transformers" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Arsenal Complet des Transformers Avancés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* RobustScaler */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Zap className="h-5 w-5" />
                  RobustScaler : Le Gardien Anti-Outliers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-blue-700 leading-relaxed">
                    <strong>Mission :</strong> Standardisation immunisée contre les valeurs aberrantes grâce à la médiane et l'IQR.
                  </p>
                  <div className="bg-blue-100 p-3 rounded border">
                    <p className="text-xs text-blue-800 font-mono">
                      X_scaled = (X - médiane) / IQR
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-100 p-2 rounded">
                      <strong className="text-green-800">✅ Parfait pour :</strong>
                      <ul className="text-green-700 mt-1 space-y-1">
                        <li>• Données financières</li>
                        <li>• Mesures physiques</li>
                        <li>• Capteurs IoT</li>
                      </ul>
                    </div>
                    <div className="bg-amber-100 p-2 rounded">
                      <strong className="text-amber-800">⚡ Astuce :</strong>
                      <p className="text-amber-700 mt-1">
                        Utilisez <code>quantile_range=(5,95)</code> pour une robustesse extrême.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PowerTransformer */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Zap className="h-5 w-5" />
                  PowerTransformer : Magicien de la Gaussianité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700 leading-relaxed">
                    <strong>Mission :</strong> Transforme toute distribution en parfaite gaussienne via Box-Cox ou Yeo-Johnson.
                  </p>
                  <div className="bg-green-100 p-3 rounded border">
                    <p className="text-xs text-green-800">
                      <strong>Box-Cox :</strong> données {'>'} 0 | <strong>Yeo-Johnson :</strong> toutes données
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-blue-100 p-2 rounded">
                      <strong className="text-blue-800">🎯 Idéal pour :</strong>
                      <ul className="text-blue-700 mt-1 space-y-1">
                        <li>• Distributions log-normales</li>
                        <li>• Régression linéaire</li>
                        <li>• SVM</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 p-2 rounded">
                      <strong className="text-red-800">⚠️ Attention :</strong>
                      <p className="text-red-700 mt-1">
                        Peut créer des artefacts sur petits échantillons.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OneHotEncoder */}
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Layers className="h-5 w-5" />
                  OneHotEncoder : Maître des Catégories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-purple-700 leading-relaxed">
                    <strong>Mission :</strong> Transforme variables catégorielles en vecteurs binaires, évitant l'ordre artificiel.
                  </p>
                  <div className="bg-purple-100 p-3 rounded border">
                    <p className="text-xs text-purple-800">
                      ['Rouge', 'Vert', 'Bleu'] → [[1,0,0], [0,1,0], [0,0,1]]
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-100 p-2 rounded">
                      <strong className="text-green-800">✅ Essentiel pour :</strong>
                      <ul className="text-green-700 mt-1 space-y-1">
                        <li>• Variables nominales</li>
                        <li>• Réseaux de neurones</li>
                        <li>• Régression logistique</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-2 rounded">
                      <strong className="text-orange-800">💡 Pro-tip :</strong>
                      <p className="text-orange-700 mt-1">
                        Utilisez <code>drop='first'</code> pour éviter la multicolinéarité.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PCA */}
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-rose-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <Target className="h-5 w-5" />
                  PCA : Réducteur de Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-red-700 leading-relaxed">
                    <strong>Mission :</strong> Réduit la dimensionnalité en préservant le maximum de variance via composantes principales.
                  </p>
                  <div className="bg-red-100 p-3 rounded border">
                    <p className="text-xs text-red-800">
                      1000 features → 50 composantes (95% variance préservée)
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-blue-100 p-2 rounded">
                      <strong className="text-blue-800">🚀 Parfait pour :</strong>
                      <ul className="text-blue-700 mt-1 space-y-1">
                        <li>• Haute dimensionnalité</li>
                        <li>• Visualisation</li>
                        <li>• Compression</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded">
                      <strong className="text-yellow-800">⚡ Astuce :</strong>
                      <p className="text-yellow-700 mt-1">
                        Standardisez AVANT PCA pour éviter la domination d'échelle.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Transformers */}
          <Card className="mb-8 border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <Brain className="h-5 w-5" />
                Transformers Spécialisés : Les Outils d'Expert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2 flex items-center gap-1">
                    <Minimize2 className="h-4 w-4" />
                    Normalizer
                  </h4>
                  <p className="text-sm text-teal-700 mb-2">
                    Normalise <strong>par échantillon</strong> (ligne par ligne). Transforme chaque observation en vecteur unitaire.
                  </p>
                  <div className="bg-teal-50 p-2 rounded text-xs">
                    <strong>Cas d'usage :</strong> NLP, analyse de sentiments, cosine similarity
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-1">
                    <BarChart2 className="h-4 w-4" />
                    MaxAbsScaler
                  </h4>
                  <p className="text-sm text-orange-700 mb-2">
                    Divise par la valeur absolue maximale. <strong>Préserve parfaitement la sparsité</strong> (0 reste 0).
                  </p>
                  <div className="bg-orange-50 p-2 rounded text-xs">
                    <strong>Cas d'usage :</strong> Matrices sparse, systèmes de recommandation
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-violet-200">
                  <h4 className="font-semibold text-violet-800 mb-2 flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    FunctionTransformer
                  </h4>
                  <p className="text-sm text-violet-700 mb-2">
                    Applique une <strong>fonction personnalisée</strong>. Parfait pour transformations sur mesure.
                  </p>
                  <div className="bg-violet-50 p-2 rounded text-xs">
                    <strong>Cas d'usage :</strong> log, sqrt, transformations métier spécifiques
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  🎓 Règle d'Or du Data Scientist Expert
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>1. Analysez d'abord :</strong> Distribution, outliers, sparsité, corrélations
                    </p>
                    <p className="text-gray-700">
                      <strong>2. Testez plusieurs :</strong> Comparez les performances sur validation croisée
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">
                      <strong>3. Pipeline cohérent :</strong> Même transformation train/test
                    </p>
                    <p className="text-gray-700">
                      <strong>4. Documentez :</strong> Justifiez vos choix pour la reproductibilité
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workflow Section */}
        <div id="workflow" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Workflow Expert : De l'Analyse à la Production</h2>
          
          <div className="mb-8">
            <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-800">
                  <ArrowRight className="h-5 w-5" />
                  Méthodologie Professionnelle en 7 Étapes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Étape 1 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 mb-2">🔍 Analyse Exploratoire Approfondie (EDA)</h4>
                      <p className="text-sm text-blue-700 mb-3">La fondation de tout projet ML réussi. Une EDA rigoureuse évite 80% des erreurs futures.</p>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <h5 className="font-semibold text-xs text-blue-800 mb-2">🔧 Checklist Technique :</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-blue-700">
                          <ul className="space-y-1">
                            <li>• <code>df.info()</code> : Types et valeurs manquantes</li>
                            <li>• <code>df.describe()</code> : Statistiques descriptives</li>
                            <li>• <code>df.skew()</code> : Asymétrie des distributions</li>
                          </ul>
                          <ul className="space-y-1">
                            <li>• Histogrammes et boxplots</li>
                            <li>• Matrice de corrélation</li>
                            <li>• Détection d'outliers (IQR, Z-score)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Étape 2 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-800 mb-2">🧹 Nettoyage Intelligent des Données</h4>
                      <p className="text-sm text-green-700 mb-3">Stratégies avancées pour préserver l'information tout en éliminant le bruit.</p>
                      <div className="bg-white p-3 rounded border border-green-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div>
                            <h6 className="font-semibold text-green-800">Valeurs Manquantes</h6>
                            <ul className="text-green-700 space-y-1">
                              <li>• {'<'}5% : Suppression</li>
                              <li>• 5-15% : Imputation</li>
                              <li>• {'>'}15% : Feature engineering</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-green-800">Outliers</h6>
                            <ul className="text-green-700 space-y-1">
                              <li>• IQR method</li>
                              <li>• Isolation Forest</li>
                              <li>• Domain expertise</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-green-800">Doublons</h6>
                            <ul className="text-green-700 space-y-1">
                              <li>• Exact duplicates</li>
                              <li>• Fuzzy matching</li>
                              <li>• Business rules</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Étape 3 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-purple-800 mb-2">🏷️ Encodage Stratégique des Variables</h4>
                      <p className="text-sm text-purple-700 mb-3">Chaque type de variable nécessite une approche spécifique pour préserver l'information.</p>
                      <div className="bg-white p-3 rounded border border-purple-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div className="bg-blue-50 p-2 rounded">
                            <h6 className="font-semibold text-blue-800">Variables Nominales</h6>
                            <p className="text-blue-700"><strong>OneHotEncoder</strong></p>
                            <p className="text-blue-600">Ex: Couleur, Ville, Marque</p>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <h6 className="font-semibold text-green-800">Variables Ordinales</h6>
                            <p className="text-green-700"><strong>OrdinalEncoder</strong></p>
                            <p className="text-green-600">Ex: Taille (S,M,L), Note (A,B,C)</p>
                          </div>
                          <div className="bg-orange-50 p-2 rounded">
                            <h6 className="font-semibold text-orange-800">Haute Cardinalité</h6>
                            <p className="text-orange-700"><strong>Target Encoding</strong></p>
                            <p className="text-orange-600">Ex: Code postal, User ID</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Étape 4 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-orange-800 mb-2">⚡ Sélection du Transformer Optimal</h4>
                      <p className="text-sm text-orange-700 mb-3">Arbre de décision pour choisir la transformation parfaite selon vos données.</p>
                      <div className="bg-white p-3 rounded border border-orange-200">
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span className="text-gray-700"><strong>Distribution normale + pas d'outliers</strong> → StandardScaler</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span className="text-gray-700"><strong>Bornes fixes nécessaires [0,1]</strong> → MinMaxScaler</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-500 rounded"></div>
                            <span className="text-gray-700"><strong>Distribution asymétrique/outliers</strong> → QuantileTransformer</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span className="text-gray-700"><strong>Outliers extrêmes</strong> → RobustScaler</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-teal-500 rounded"></div>
                            <span className="text-gray-700"><strong>Données sparse</strong> → MaxAbsScaler</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Étape 5 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-teal-800 mb-2">🔧 Construction du Pipeline</h4>
                      <p className="text-sm text-teal-700 mb-3">Pipeline robuste pour éviter le data leakage et assurer la reproductibilité.</p>
                      <div className="bg-white p-3 rounded border border-teal-200">
                        <pre className="text-xs text-gray-800 overflow-x-auto">
{`from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# Pipeline pour variables numériques
numeric_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

# Pipeline pour variables catégorielles
categorical_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('encoder', OneHotEncoder(drop='first', sparse=False))
])

# Pipeline complet
preprocessor = ColumnTransformer([
    ('num', numeric_pipeline, numeric_features),
    ('cat', categorical_pipeline, categorical_features)
])`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Étape 6 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-800 mb-2">🎯 Validation Croisée Rigoureuse</h4>
                      <p className="text-sm text-red-700 mb-3">Testez plusieurs transformations pour identifier la meilleure stratégie.</p>
                      <div className="bg-white p-3 rounded border border-red-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div>
                            <h6 className="font-semibold text-red-800 mb-1">Métriques à Surveiller</h6>
                            <ul className="text-red-700 space-y-1">
                              <li>• Accuracy/F1-score</li>
                              <li>• Temps d'entraînement</li>
                              <li>• Stabilité des résultats</li>
                              <li>• Interprétabilité</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-red-800 mb-1">Stratégies de Test</h6>
                            <ul className="text-red-700 space-y-1">
                              <li>• K-Fold Cross Validation</li>
                              <li>• Stratified sampling</li>
                              <li>• Time series split</li>
                              <li>• Hold-out validation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Étape 7 */}
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">7</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-indigo-800 mb-2">🚀 Déploiement et Monitoring</h4>
                      <p className="text-sm text-indigo-700 mb-3">Surveillance continue pour détecter le data drift et maintenir les performances.</p>
                      <div className="bg-white p-3 rounded border border-indigo-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div className="bg-yellow-50 p-2 rounded">
                            <h6 className="font-semibold text-yellow-800">Versioning</h6>
                            <ul className="text-yellow-700 space-y-1">
                              <li>• Modèles</li>
                              <li>• Transformers</li>
                              <li>• Données</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 p-2 rounded">
                            <h6 className="font-semibold text-blue-800">Monitoring</h6>
                            <ul className="text-blue-700 space-y-1">
                              <li>• Data drift</li>
                              <li>• Performance</li>
                              <li>• Latence</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <h6 className="font-semibold text-green-800">Maintenance</h6>
                            <ul className="text-green-700 space-y-1">
                              <li>• Re-entraînement</li>
                              <li>• A/B testing</li>
                              <li>• Rollback</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exemple Pratique Complet */}
          <Card className="mb-8 border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-800">
                <Code className="h-5 w-5" />
                💼 Cas Pratique : Prédiction de Prix Immobilier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded border border-emerald-200">
                <pre className="text-sm text-gray-800 overflow-x-auto">
{`# 🏠 Dataset immobilier avec défis réels
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# 📊 Chargement et analyse
df = pd.read_csv('house_prices.csv')
print(f"Shape: {df.shape}")
print(f"Missing values: {df.isnull().sum().sum()}")
print(f"Numerical features: {df.select_dtypes(include=['number']).columns.tolist()}")
print(f"Categorical features: {df.select_dtypes(include=['object']).columns.tolist()}")

# 🎯 Séparation features/target
X = df.drop('price', axis=1)
y = df['price']

# 📝 Identification des types de colonnes
numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
categorical_features = X.select_dtypes(include=['object']).columns

print(f"\n🔢 Numeric features ({len(numeric_features)}): {list(numeric_features)}")
print(f"🏷️ Categorical features ({len(categorical_features)}): {list(categorical_features)}")

# 🔧 Construction du pipeline de preprocessing
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),  # Robuste aux outliers
    ('scaler', StandardScaler())  # Standardisation
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(drop='first', sparse=False))  # Évite multicolinéarité
])

# 🎭 Assemblage du preprocessor
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

# 🤖 Pipeline ML complet
ml_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# 📊 Train/Test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 🚀 Entraînement
ml_pipeline.fit(X_train, y_train)

# 📈 Évaluation
y_pred = ml_pipeline.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)
print(f"\n🎯 Mean Absolute Error: {mae:,.0f}€")

# 🔍 Analyse des transformations
X_transformed = preprocessor.fit_transform(X_train)
print(f"\n📐 Shape après transformation: {X_transformed.shape}")
print(f"📊 Features créées: {X_transformed.shape[1]} (vs {X.shape[1]} originales)")`}
                </pre>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  🎓 Points Clés de cet Exemple
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-700">
                  <ul className="space-y-1">
                    <li>• <strong>Pipeline intégré</strong> : Évite le data leakage</li>
                    <li>• <strong>Imputation intelligente</strong> : Médiane pour numérique, constante pour catégoriel</li>
                    <li>• <strong>Encodage optimisé</strong> : drop='first' évite la multicolinéarité</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• <strong>Scalabilité</strong> : Fonctionne sur nouveaux datasets</li>
                    <li>• <strong>Reproductibilité</strong> : random_state fixé</li>
                    <li>• <strong>Monitoring</strong> : Métriques claires pour évaluation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformer Architecture Section */}
        <div id="transformer-architecture" className="mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">II. Architecture Transformer (Neural Networks)</h2>
            <p className="text-indigo-700">
              Passons maintenant au deuxième univers des "Transformers" : l'architecture révolutionnaire qui a transformé 
              le traitement du langage naturel et bien d'autres domaines de l'IA.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                Qu'est-ce que l'Architecture Transformer ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'architecture Transformer, introduite dans le paper "Attention Is All You Need" (2017), est un modèle de réseau de neurones 
                basé entièrement sur des mécanismes d'attention. Elle a révolutionné le traitement séquentiel en éliminant le besoin de récurrence.
              </p>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg my-4">
                <h4 className="font-semibold text-indigo-800 mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Innovation Clé
                </h4>
                <p className="text-indigo-700 text-sm">
                  Contrairement aux RNN et LSTM qui traitent les séquences de manière séquentielle, les Transformers peuvent 
                  traiter tous les éléments d'une séquence en parallèle grâce au mécanisme d'attention.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attention Mechanism Section */}
        <div id="attention-mechanism" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Mécanisme d'Attention</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Self-Attention : Le Cœur du Transformer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Le mécanisme d'attention permet au modèle de "faire attention" à différentes parties de la séquence d'entrée 
                lors du traitement de chaque élément. C'est comme si le modèle pouvait regarder tous les mots d'une phrase 
                simultanément pour comprendre le contexte.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-blue-600" />
                  Formule de l'Attention
                </h4>
                <div className="bg-white p-3 rounded border font-mono text-sm">
                  Attention(Q, K, V) = softmax(QK^T / √d_k)V
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Où : Q = Queries, K = Keys, V = Values, d_k = dimension des keys
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Analogie Simple
                </h4>
                <p className="text-blue-700 text-sm">
                  Imaginez que vous lisez un livre dans une bibliothèque. Au lieu de lire mot par mot séquentiellement, 
                  vous pouvez instantanément "voir" et comprendre les relations entre tous les mots de la page. 
                  C'est exactement ce que fait l'attention dans un Transformer.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4 text-green-600" />
                  Exemple Conceptuel Python
                </h4>
                <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`import torch
import torch.nn.functional as F

# Exemple simplifié d'attention
def simple_attention(query, key, value):
    # Calcul des scores d'attention
    scores = torch.matmul(query, key.transpose(-2, -1))
    
    # Normalisation par la racine de la dimension
    d_k = key.size(-1)
    scores = scores / torch.sqrt(torch.tensor(d_k, dtype=torch.float32))
    
    # Application de softmax
    attention_weights = F.softmax(scores, dim=-1)
    
    # Application des poids aux valeurs
    output = torch.matmul(attention_weights, value)
    
    return output, attention_weights`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformer Types Section */}
        <div id="transformer-types" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Types de Transformers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Layers className="h-5 w-5" />
                  Encoder-Only
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Modèles qui n'utilisent que la partie encodeur du Transformer original.</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-800 text-sm">Exemples :</p>
                  <ul className="text-xs text-blue-700 mt-1">
                    <li>• BERT</li>
                    <li>• RoBERTa</li>
                    <li>• DeBERTa</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600 mt-2">Idéal pour : Classification, analyse de sentiment, NER</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <MessageSquare className="h-5 w-5" />
                  Decoder-Only
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Modèles qui n'utilisent que la partie décodeur, optimisés pour la génération.</p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-800 text-sm">Exemples :</p>
                  <ul className="text-xs text-green-700 mt-1">
                    <li>• GPT-3/4</li>
                    <li>• LLaMA</li>
                    <li>• PaLM</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600 mt-2">Idéal pour : Génération de texte, chatbots, completion</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Network className="h-5 w-5" />
                  Encoder-Decoder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Architecture complète avec encodeur et décodeur pour les tâches de transformation.</p>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-800 text-sm">Exemples :</p>
                  <ul className="text-xs text-purple-700 mt-1">
                    <li>• T5</li>
                    <li>• BART</li>
                    <li>• mT5</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600 mt-2">Idéal pour : Traduction, résumé, question-réponse</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* BERT vs GPT Section */}
        <div id="bert-vs-gpt" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">BERT vs GPT : Deux Approches Complémentaires</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Eye className="h-5 w-5" />
                  BERT (Bidirectional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 text-sm mb-2">Principe :</h4>
                    <p className="text-xs text-blue-700">Lit le texte dans les deux directions simultanément (bidirectionnel)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Entraînement :</h4>
                    <p className="text-xs text-gray-700">Masked Language Modeling (MLM) - prédit les mots masqués</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">Forces :</h4>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Excellent pour la compréhension</li>
                      <li>• Contexte bidirectionnel riche</li>
                      <li>• Performant en classification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <MessageSquare className="h-5 w-5" />
                  GPT (Autoregressive)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">Principe :</h4>
                    <p className="text-xs text-green-700">Génère le texte mot par mot de gauche à droite (autorégressif)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">Entraînement :</h4>
                    <p className="text-xs text-gray-700">Next Token Prediction - prédit le prochain mot</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 text-sm mb-2">Forces :</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Excellent pour la génération</li>
                      <li>• Créativité et fluidité</li>
                      <li>• Versatilité (few-shot learning)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision Transformers Section */}
        <div id="vision-transformers" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Vision Transformers (ViT)</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5 text-purple-600" />
                Au-delà du Texte : Transformers pour la Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les Vision Transformers appliquent l'architecture Transformer aux images en les découpant en patches 
                et en les traitant comme une séquence de tokens visuels.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg my-4">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Innovation
                </h4>
                <p className="text-purple-700 text-sm">
                  Une image 224x224 est découpée en patches 16x16, créant une séquence de 196 patches. 
                  Chaque patch est traité comme un "mot" dans une "phrase visuelle".
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Avantages
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Pas de biais inductif spatial</li>
                    <li>• Scalabilité avec les données</li>
                    <li>• Attention globale sur l'image</li>
                    <li>• Transfer learning efficace</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Limitations
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Besoin de beaucoup de données</li>
                    <li>• Coût computationnel élevé</li>
                    <li>• Moins efficace sur petites images</li>
                    <li>• Perte d'information spatiale locale</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Conseils d'Expert */}
        <div id="expert-tips" className="mt-12">
          <h2 className="text-3xl font-bold mb-6">🎓 Conseils d'Expert & Pièges à Éviter</h2>
          
          {/* Matrice de Décision Avancée */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-600" />
                Matrice de Décision : Quel Transformer Choisir ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Contexte</th>
                      <th className="border border-gray-300 p-2 text-center">Distribution</th>
                      <th className="border border-gray-300 p-2 text-center">Outliers</th>
                      <th className="border border-gray-300 p-2 text-center">Taille Dataset</th>
                      <th className="border border-gray-300 p-2 text-center">Transformer Recommandé</th>
                      <th className="border border-gray-300 p-2 text-center">Justification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">ML Classique</td>
                      <td className="border border-gray-300 p-2 text-center">Normale</td>
                      <td className="border border-gray-300 p-2 text-center">Peu</td>
                      <td className="border border-gray-300 p-2 text-center">Moyen</td>
                      <td className="border border-gray-300 p-2 text-center bg-blue-50"><strong>StandardScaler</strong></td>
                      <td className="border border-gray-300 p-2 text-xs">Préserve la forme, optimal pour SVM/NN</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">Deep Learning</td>
                      <td className="border border-gray-300 p-2 text-center">Quelconque</td>
                      <td className="border border-gray-300 p-2 text-center">Beaucoup</td>
                      <td className="border border-gray-300 p-2 text-center">Grand</td>
                      <td className="border border-gray-300 p-2 text-center bg-green-50"><strong>MinMaxScaler</strong></td>
                      <td className="border border-gray-300 p-2 text-xs">Bornes fixes [0,1] pour activation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">Données Financières</td>
                      <td className="border border-gray-300 p-2 text-center">Asymétrique</td>
                      <td className="border border-gray-300 p-2 text-center">Extrêmes</td>
                      <td className="border border-gray-300 p-2 text-center">Variable</td>
                      <td className="border border-gray-300 p-2 text-center bg-purple-50"><strong>QuantileTransformer</strong></td>
                      <td className="border border-gray-300 p-2 text-xs">Robuste aux outliers, distribution uniforme</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">IoT/Capteurs</td>
                      <td className="border border-gray-300 p-2 text-center">Variable</td>
                      <td className="border border-gray-300 p-2 text-center">Fréquents</td>
                      <td className="border border-gray-300 p-2 text-center">Très Grand</td>
                      <td className="border border-gray-300 p-2 text-center bg-red-50"><strong>RobustScaler</strong></td>
                      <td className="border border-gray-300 p-2 text-xs">Médiane/IQR résistent aux pannes capteurs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">NLP/Sparse</td>
                      <td className="border border-gray-300 p-2 text-center">Sparse</td>
                      <td className="border border-gray-300 p-2 text-center">Peu</td>
                      <td className="border border-gray-300 p-2 text-center">Grand</td>
                      <td className="border border-gray-300 p-2 text-center bg-teal-50"><strong>MaxAbsScaler</strong></td>
                      <td className="border border-gray-300 p-2 text-xs">Préserve la sparsité, pas de shift</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Bonnes Pratiques vs Erreurs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle className="h-5 w-5" />
                  ✅ Bonnes Pratiques de Pro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <div>
                        <div className="font-semibold text-green-800">📊 EDA Systématique</div>
                        <div className="text-sm text-green-700">Histogrammes + boxplots + statistiques descriptives avant tout choix</div>
                        <div className="text-xs text-gray-600 mt-1 font-mono bg-gray-100 p-1 rounded">df.hist(), df.boxplot(), df.describe()</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <div>
                        <div className="font-semibold text-green-800">🔧 Pipeline-First Approach</div>
                        <div className="text-sm text-green-700">Toujours utiliser sklearn.pipeline pour éviter le data leakage</div>
                        <div className="text-xs text-gray-600 mt-1 font-mono bg-gray-100 p-1 rounded">fit_transform(train) → transform(test)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <div>
                        <div className="font-semibold text-green-800">🎯 A/B Testing des Transformers</div>
                        <div className="text-sm text-green-700">Comparer 2-3 transformers avec validation croisée</div>
                        <div className="text-xs text-gray-600 mt-1">StandardScaler vs RobustScaler vs QuantileTransformer</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <div>
                        <div className="font-semibold text-green-800">💾 Versioning des Transformers</div>
                        <div className="text-sm text-green-700">Sauvegarder avec joblib/pickle pour la production</div>
                        <div className="text-xs text-gray-600 mt-1 font-mono bg-gray-100 p-1 rounded">joblib.dump(scaler, 'scaler_v1.pkl')</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <XCircle className="h-5 w-5" />
                  ❌ Erreurs Critiques à Éviter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                      <div>
                        <div className="font-semibold text-red-800">🚨 Data Leakage Classique</div>
                        <div className="text-sm text-red-700">fit() sur tout le dataset avant split train/test</div>
                        <div className="text-xs text-gray-600 mt-1 bg-red-100 p-1 rounded">❌ scaler.fit(X) puis train_test_split(X)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                      <div>
                        <div className="font-semibold text-red-800">🎯 Ignorer les Outliers</div>
                        <div className="text-sm text-red-700">Ne pas analyser si outliers = erreurs ou vraies valeurs</div>
                        <div className="text-xs text-gray-600 mt-1">Outliers métier ≠ erreurs de saisie</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                      <div>
                        <div className="font-semibold text-red-800">🔧 One-Size-Fits-All</div>
                        <div className="text-sm text-red-700">Même transformer pour features numériques ET catégorielles</div>
                        <div className="text-xs text-gray-600 mt-1">Utiliser ColumnTransformer pour traiter différemment</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                      <div>
                        <div className="font-semibold text-red-800">🚀 Oubli en Production</div>
                        <div className="text-sm text-red-700">Ne pas appliquer les mêmes transformations aux nouvelles données</div>
                        <div className="text-xs text-gray-600 mt-1 bg-red-100 p-1 rounded">❌ Nouveau fit() au lieu de transform()</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checklist Production */}
          <Card className="mb-8 border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <Zap className="h-5 w-5" />
                🚀 Checklist Production-Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">📋 Avant Déploiement</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Pipeline testé sur données de validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Transformers sauvegardés (joblib/pickle)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Documentation des choix techniques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Tests unitaires sur transformations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Gestion des valeurs manquantes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">🔍 Monitoring Continu</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Alertes sur data drift (min/max/mean)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Logs des transformations appliquées</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Métriques de performance en temps réel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Backup des versions de transformers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Plan de rollback en cas d'erreur</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ressources Avancées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600" />
                📚 Ressources pour Aller Plus Loin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">📖 Documentation</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Scikit-learn User Guide</li>
                    <li>• Pandas Profiling</li>
                    <li>• Feature-engine Library</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">🛠️ Outils Avancés</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Optuna (hyperparameter tuning)</li>
                    <li>• MLflow (experiment tracking)</li>
                    <li>• Great Expectations (data quality)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">🎓 Formation Continue</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Kaggle Learn (Feature Engineering)</li>
                    <li>• Fast.ai Practical ML</li>
                    <li>• Papers With Code</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </ContentLayout>
  );
};

export default TransformersGuide;