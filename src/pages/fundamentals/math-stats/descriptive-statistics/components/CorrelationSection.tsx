
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, AlertTriangle, Eye, Zap, Heart, Users } from "lucide-react";

const CorrelationSection = () => {
  const [selectedExample, setSelectedExample] = useState("height_weight");

  const correlationExamples = {
    height_weight: {
      title: "📏 Taille vs Poids",
      description: "Relation entre la taille (cm) et le poids (kg) chez 50 personnes",
      data: Array.from({ length: 50 }, () => {
        const height = 160 + Math.random() * 40;
        const weight = 0.8 * height - 80 + Math.random() * 15;
        return { x: height.toFixed(0), y: weight.toFixed(0) };
      }),
      correlation: 0.85,
      interpretation: "Forte corrélation positive : plus on est grand, plus on pèse lourd",
      color: "#10B981"
    },
    temperature_sales: {
      title: "🌡️ Température vs Ventes de glaces",
      description: "Température (°C) et ventes quotidiennes de glaces (€)",
      data: Array.from({ length: 30 }, () => {
        const temp = 15 + Math.random() * 20;
        const sales = 2 * temp + Math.random() * 30 + 20;
        return { x: temp.toFixed(1), y: sales.toFixed(0) };
      }),
      correlation: 0.92,
      interpretation: "Très forte corrélation positive : plus il fait chaud, plus on vend de glaces",
      color: "#F59E0B"
    },
    study_tv: {
      title: "📚 Heures d'étude vs Heures de TV",
      description: "Heures d'étude par semaine vs Heures de télévision",
      data: Array.from({ length: 40 }, () => {
        const study = 5 + Math.random() * 25;
        const tv = 35 - 0.7 * study + Math.random() * 8;
        return { x: study.toFixed(1), y: Math.max(0, tv).toFixed(1) };
      }),
      correlation: -0.73,
      interpretation: "Corrélation négative forte : plus on étudie, moins on regarde la TV",
      color: "#EF4444"
    },
    random: {
      title: "🎲 Variables indépendantes",
      description: "Deux variables totalement indépendantes",
      data: Array.from({ length: 50 }, () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        return { x: x.toFixed(1), y: y.toFixed(1) };
      }),
      correlation: 0.05,
      interpretation: "Corrélation quasi-nulle : aucune relation linéaire",
      color: "#6B7280"
    }
  };

  const currentExample = correlationExamples[selectedExample as keyof typeof correlationExamples];

  // Données pour démonstrer différents types de corrélations
  const correlationTypes = [
    { type: "Parfaite positive", r: 1.0, color: "#10B981", description: "Relation linéaire parfaite croissante" },
    { type: "Forte positive", r: 0.8, color: "#22C55E", description: "Forte tendance croissante avec variabilité" },
    { type: "Modérée positive", r: 0.5, color: "#84CC16", description: "Tendance croissante modérée" },
    { type: "Faible positive", r: 0.2, color: "#EAB308", description: "Légère tendance croissante" },
    { type: "Nulle", r: 0.0, color: "#6B7280", description: "Aucune relation linéaire" },
    { type: "Faible négative", r: -0.2, color: "#F97316", description: "Légère tendance décroissante" },
    { type: "Modérée négative", r: -0.5, color: "#EF4444", description: "Tendance décroissante modérée" },
    { type: "Forte négative", r: -0.8, color: "#DC2626", description: "Forte tendance décroissante" },
    { type: "Parfaite négative", r: -1.0, color: "#B91C1C", description: "Relation linéaire parfaite décroissante" }
  ];

  return (
    <section id="correlation" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Heart className="h-8 w-8 text-red-500" />
        3. Corrélation : Détecter les Relations Secrètes
      </h2>

      {/* Introduction conceptuelle */}
      <div className="mb-8">
        <CourseHighlight title="💕 Analogie : Les relations humaines" type="concept">
          <div className="space-y-4">
            <p className="text-lg">
              La corrélation, c'est comme analyser les relations entre personnes. 
              Certaines sont inséparables (corrélation forte), d'autres s'évitent 
              (corrélation négative), et d'autres sont indépendantes (corrélation nulle).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p><strong>Corrélation positive</strong></p>
                <p>"Quand l'un monte, l'autre monte"</p>
                <p className="text-xs text-gray-600">Ex: Taille et pointure</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">💔</div>
                <p><strong>Corrélation négative</strong></p>
                <p>"Quand l'un monte, l'autre descend"</p>
                <p className="text-xs text-gray-600">Ex: Prix et demande</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤷</div>
                <p><strong>Pas de corrélation</strong></p>
                <p>"Chacun vit sa vie"</p>
                <p className="text-xs text-gray-600">Ex: Pointure et QI</p>
              </div>
            </div>
          </div>
        </CourseHighlight>
      </div>

      {/* Sélecteur d'exemples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>🔬 Explorateur de Corrélations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.entries(correlationExamples).map(([key, example]) => (
              <Button
                key={key}
                variant={selectedExample === key ? "default" : "outline"}
                onClick={() => setSelectedExample(key)}
                className="flex-1 min-w-fit"
              >
                {example.title}
              </Button>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">{currentExample.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{currentExample.description}</p>
            <div className="flex items-center gap-4">
              <Badge 
                className={`text-white ${
                  Math.abs(currentExample.correlation) > 0.7 ? 'bg-green-600' :
                  Math.abs(currentExample.correlation) > 0.3 ? 'bg-yellow-600' : 'bg-gray-600'
                }`}
              >
                r = {currentExample.correlation}
              </Badge>
              <span className="text-sm">{currentExample.interpretation}</span>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={currentExample.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" name="Variable X" />
                <YAxis dataKey="y" name="Variable Y" />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => [value, name === 'y' ? 'Variable Y' : 'Variable X']}
                />
                <Scatter dataKey="y" fill={currentExample.color} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Covariance et Corrélation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Covariance : La Mesure Brute
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                La covariance mesure comment deux variables varient ensemble. 
                Elle indique la direction de la relation, mais pas sa force.
              </p>

              <CourseEquation latex="Cov(X,Y) = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})" />

              <CourseHighlight title="🧮 Décryptage du calcul" type="example">
                <div className="text-sm space-y-2">
                  <p><strong>Étape 1 :</strong> Pour chaque point, calculer les écarts à la moyenne</p>
                  <p><strong>Étape 2 :</strong> Multiplier les écarts de X et Y</p>
                  <p><strong>Étape 3 :</strong> Faire la moyenne de ces produits</p>
                  <div className="bg-blue-100 p-2 rounded mt-2">
                    <p className="text-xs">
                      <strong>Intuition :</strong> Si X et Y bougent dans le même sens, 
                      les produits sont positifs → covariance positive
                    </p>
                  </div>
                </div>
              </CourseHighlight>

              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Cov {">"} 0</h5>
                  <p className="text-xs">Relation positive : quand X augmente, Y tend à augmenter</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Cov {"<"} 0</h5>
                  <p className="text-xs">Relation négative : quand X augmente, Y tend à diminuer</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-sm mb-1">Cov ≈ 0</h5>
                  <p className="text-xs">Pas de relation linéaire entre X et Y</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-3 rounded-lg">
                <h5 className="font-semibold text-sm mb-1 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" />
                  Limitation majeure
                </h5>
                <p className="text-xs">
                  La covariance dépend des unités de mesure. Impossible de comparer 
                  covariance(€, kg) avec covariance(°C, heures) !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Corrélation : La Version Normalisée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Le coefficient de corrélation de Pearson normalise la covariance. 
                C'est la "covariance standardisée", parfaite pour les comparaisons !
              </p>

              <CourseEquation latex="r = \frac{Cov(X,Y)}{s_X \cdot s_Y} = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2 \sum_{i=1}^{n} (y_i - \bar{y})^2}}" />

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">🌟 Super-pouvoirs du coefficient r</h5>
                <ul className="text-xs space-y-1">
                  <li>• <strong>Borné :</strong> -1 ≤ r ≤ 1 (toujours !)</li>
                  <li>• <strong>Sans unité :</strong> Comparable universellement</li>
                  <li>• <strong>Symétrique :</strong> r(X,Y) = r(Y,X)</li>
                  <li>• <strong>Invariant :</strong> Résiste aux transformations linéaires</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between bg-green-100 p-2 rounded">
                  <span className="text-sm font-semibold">r = +1</span>
                  <span className="text-xs">Corrélation parfaite positive</span>
                </div>
                <div className="flex items-center justify-between bg-blue-100 p-2 rounded">
                  <span className="text-sm font-semibold">r = 0</span>
                  <span className="text-xs">Aucune corrélation linéaire</span>
                </div>
                <div className="flex items-center justify-between bg-red-100 p-2 rounded">
                  <span className="text-sm font-semibold">r = -1</span>
                  <span className="text-xs">Corrélation parfaite négative</span>
                </div>
              </div>

              <CourseHighlight title="🎯 Astuce de mémorisation" type="example">
                <p className="text-sm">
                  <strong>r² = coefficient de détermination</strong><br/>
                  Il indique le % de variabilité de Y expliqué par X.<br/>
                  Ex: r = 0.8 → r² = 0.64 → X explique 64% de la variabilité de Y
                </p>
              </CourseHighlight>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Guide d'interprétation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Guide d'Interprétation des Corrélations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {correlationTypes.map((type, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border-l-4"
                style={{borderLeftColor: type.color}}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-sm">{type.type}</h5>
                  <Badge style={{backgroundColor: type.color, color: 'white'}}>
                    {type.r > 0 ? '+' : ''}{type.r}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3">🎯 Règles d'interprétation pratiques</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>|r| ≥ 0.8</span>
                  <span className="font-semibold text-green-600">Corrélation forte</span>
                </div>
                <div className="flex justify-between">
                  <span>0.5 ≤ |r| {"<"} 0.8</span>
                  <span className="font-semibold text-blue-600">Corrélation modérée</span>
                </div>
                <div className="flex justify-between">
                  <span>0.3 ≤ |r| {"<"} 0.5</span>
                  <span className="font-semibold text-yellow-600">Corrélation faible</span>
                </div>
                <div className="flex justify-between">
                  <span>|r| {"<"} 0.3</span>
                  <span className="font-semibold text-gray-600">Corrélation négligeable</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                ⚠️ Pièges à éviter absolument
              </h5>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Corrélation ≠ Causalité</strong><br/>
                    <span className="text-xs">Crème solaire et noyades sont corrélées, mais...</span>
                </li>
                <li>• <strong>Corrélation = relation linéaire uniquement</strong><br/>
                    <span className="text-xs">Une relation courbe parfaite peut avoir r = 0</span>
                </li>
                <li>• <strong>Attention aux variables confondantes</strong><br/>
                    <span className="text-xs">Taille de pied et vocabulaire (âge caché !)</span>
                </li>
                <li>• <strong>Outliers peuvent fausser r</strong><br/>
                    <span className="text-xs">Une seule valeur extrême change tout</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <CourseHighlight title="🚀 Applications modernes de la corrélation" type="concept">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h6 className="font-semibold mb-1">📊 Finance</h6>
                  <p className="text-xs">Diversification de portefeuille, corrélations entre actifs</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h6 className="font-semibold mb-1">🔬 Recherche</h6>
                  <p className="text-xs">Validation d'hypothèses, sélection de variables</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-semibold mb-1">🤖 Machine Learning</h6>
                  <p className="text-xs">Feature selection, détection de multicolinéarité</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h6 className="font-semibold mb-1">📈 Business</h6>
                  <p className="text-xs">KPIs corrélés, optimisation marketing</p>
                </div>
              </div>
            </CourseHighlight>
          </div>
        </CardContent>
      </Card>

      {/* Matrices de Covariance */}
      <Card>
        <CardHeader>
          <CardTitle>🔢 Matrices de Covariance : L'Algèbre de la Dépendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <CourseHighlight title="🎯 Qu'est-ce qu'une matrice de covariance ?" type="concept">
              <p className="mb-4">
                Une matrice de covariance est une matrice carrée qui contient les covariances entre toutes les paires de variables d'un dataset multidimensionnel. 
                Elle généralise le concept de variance à plusieurs dimensions.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">📐 Structure mathématique</h5>
                <CourseEquation latex="\\Sigma = \\begin{pmatrix} \\sigma_{11} & \\sigma_{12} & \\cdots & \\sigma_{1n} \\\\ \\sigma_{21} & \\sigma_{22} & \\cdots & \\sigma_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\sigma_{n1} & \\sigma_{n2} & \\cdots & \\sigma_{nn} \\end{pmatrix}" />
              </div>
            </CourseHighlight>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 text-green-700">✨ Propriétés fondamentales</h5>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Symétrique :</strong> Σᵢⱼ = Σⱼᵢ</li>
                <li>• <strong>Semi-définie positive :</strong> toutes les valeurs propres ≥ 0</li>
                <li>• <strong>Diagonale :</strong> contient les variances des variables</li>
                <li>• <strong>Hors-diagonale :</strong> contient les covariances</li>
                <li>• <strong>Déterminant :</strong> mesure le "volume" de dispersion</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3 text-orange-700">🔍 Exemple concret : 3 variables</h5>
              <div className="text-sm space-y-2">
                <p><strong>Variables :</strong> Taille, Poids, Âge</p>
                <div className="bg-white p-3 rounded border font-mono text-xs">
                  <div>Σ = [  25.0   12.5    8.2  ]</div>
                  <div>    [ 12.5   16.0    6.1  ]</div>
                  <div>    [  8.2    6.1   49.0  ]</div>
                </div>
                <p className="text-xs">
                  • Var(Taille) = 25.0<br/>
                  • Cov(Taille,Poids) = 12.5<br/>
                  • Corrélation positive entre toutes
                </p>
              </div>
            </div>
          </div>

          {/* Valeurs propres et vecteurs propres */}
          <div className="mb-6">
            <CourseHighlight title="🎭 Valeurs propres et Vecteurs propres : Les Directions Principales" type="concept">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3">🔢 Décomposition spectrale</h5>
                  <CourseEquation latex="\\Sigma \\mathbf{v} = \\lambda \\mathbf{v}" />
                  <div className="mt-3 text-sm space-y-2">
                    <p><strong>Valeurs propres (λ) :</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Mesurent la variance dans chaque direction principale</li>
                      <li>• Ordonnées par importance décroissante</li>
                      <li>• Somme = trace de la matrice</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">📐 Vecteurs propres</h5>
                  <div className="text-sm space-y-2">
                    <p><strong>Directions principales :</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Définissent les axes de variation maximale</li>
                      <li>• Orthogonaux entre eux</li>
                      <li>• Normalisés (longueur = 1)</li>
                      <li>• Base pour la transformation PCA</li>
                    </ul>
                    
                    <div className="bg-blue-100 p-3 rounded mt-3">
                      <p className="text-xs font-semibold">💡 Intuition géométrique</p>
                      <p className="text-xs">Les vecteurs propres montrent les "directions naturelles" de dispersion des données, comme les axes d'une ellipse.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CourseHighlight>
          </div>

          {/* Connexion avec PCA */}
          <div className="mb-6">
            <CourseHighlight title="🔗 Connexion avec l'Analyse en Composantes Principales (PCA)" type="example">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3 text-purple-700">🎯 PCA = Diagonalisation de Σ</h5>
                  <div className="text-sm space-y-2">
                    <CourseEquation latex="\\Sigma = P \\Lambda P^T" />
                    <p><strong>Étapes PCA :</strong></p>
                    <ol className="ml-4 space-y-1">
                      <li>1. Calculer la matrice de covariance Σ</li>
                      <li>2. Trouver valeurs/vecteurs propres</li>
                      <li>3. Trier par valeurs propres décroissantes</li>
                      <li>4. Projeter les données sur les nouveaux axes</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3 text-green-700">📊 Réduction de dimensionnalité</h5>
                  <div className="text-sm space-y-2">
                    <p><strong>Variance expliquée :</strong></p>
                    <CourseEquation latex="\\text{Variance expliquée} = \\frac{\\lambda_i}{\\sum_{j=1}^n \\lambda_j}" />
                    
                    <div className="bg-white p-3 rounded border mt-3">
                      <p className="text-xs font-semibold mb-1">Exemple : 3D → 2D</p>
                      <div className="text-xs space-y-1">
                        <div>λ₁ = 15.2 (76% variance)</div>
                        <div>λ₂ = 3.8 (19% variance)</div>
                        <div>λ₃ = 1.0 (5% variance)</div>
                        <div className="font-semibold text-green-600">→ Garder PC1 + PC2 = 95% info</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CourseHighlight>
          </div>

          {/* Applications pratiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-semibold mb-2 text-blue-700">🤖 Machine Learning</h6>
              <ul className="text-xs space-y-1">
                <li>• Feature selection</li>
                <li>• Détection d'anomalies</li>
                <li>• Preprocessing des données</li>
                <li>• Régularisation</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h6 className="font-semibold mb-2 text-green-700">📈 Finance</h6>
              <ul className="text-xs space-y-1">
                <li>• Gestion de portefeuille</li>
                <li>• Mesure du risque</li>
                <li>• Optimisation de Markowitz</li>
                <li>• Value at Risk (VaR)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h6 className="font-semibold mb-2 text-purple-700">🔬 Sciences</h6>
              <ul className="text-xs space-y-1">
                <li>• Analyse multivariée</li>
                <li>• Contrôle qualité</li>
                <li>• Bioinformatique</li>
                <li>• Traitement d'images</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h6 className="font-semibold mb-2 text-orange-700">📊 Business Intelligence</h6>
              <ul className="text-xs space-y-1">
                <li>• Segmentation client</li>
                <li>• Analyse des KPIs</li>
                <li>• Recommandations</li>
                <li>• Prédiction de tendances</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                <div>
                  <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Points d'attention pratiques</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• <strong>Conditionnement :</strong> Matrice mal conditionnée → instabilité numérique</li>
                    <li>• <strong>Singularité :</strong> Déterminant = 0 → variables linéairement dépendantes</li>
                    <li>• <strong>Échelle :</strong> Normaliser les variables avant calcul</li>
                    <li>• <strong>Outliers :</strong> Peuvent dominer la structure de covariance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Corrélations non-linéaires */}
      <Card>
        <CardHeader>
          <CardTitle>🌊 Au-delà de Pearson : Autres Types de Corrélations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-blue-700">Spearman (ρ)</h5>
              <p className="text-sm mb-3">Corrélation de rang, parfaite pour relations monotones non-linéaires</p>
              <div className="text-xs space-y-1">
                <p><strong>Avantage :</strong> Détecte relations courbes</p>
                <p><strong>Usage :</strong> Variables ordinales</p>
                <p><strong>Exemple :</strong> Satisfaction client vs fidélité</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-green-700">Kendall (τ)</h5>
              <p className="text-sm mb-3">Basée sur les paires concordantes/discordantes</p>
              <div className="text-xs space-y-1">
                <p><strong>Avantage :</strong> Robuste aux outliers</p>
                <p><strong>Usage :</strong> Petits échantillons</p>
                <p><strong>Exemple :</strong> Classements, préférences</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-purple-700">Corrélation partielle</h5>
              <p className="text-sm mb-3">Corrélation entre X et Y en contrôlant Z</p>
              <div className="text-xs space-y-1">
                <p><strong>Avantage :</strong> Élimine effet confondant</p>
                <p><strong>Usage :</strong> Analyse causale</p>
                <p><strong>Exemple :</strong> Éducation vs salaire (contrôlé par âge)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CorrelationSection;
