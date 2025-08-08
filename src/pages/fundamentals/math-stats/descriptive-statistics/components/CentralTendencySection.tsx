
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from "recharts";
import { Calculator, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const CentralTendencySection = () => {
  const [selectedExample, setSelectedExample] = useState("salaires");

  // Données d'exemple pour différents scénarios
  const exemples = {
    salaires: {
      title: "💰 Salaires dans une entreprise tech",
      data: [35000, 38000, 42000, 45000, 47000, 50000, 52000, 55000, 58000, 120000],
      description: "10 employés, avec un CEO qui gagne beaucoup plus",
      moyenne: 54200,
      mediane: 48500,
      mode: "Aucun (toutes valeurs uniques)",
      insight: "La médiane est plus représentative ici car le salaire du CEO crée une distorsion"
    },
    notes: {
      title: "📚 Notes d'examen (sur 20)",
      data: [12, 14, 14, 15, 15, 15, 16, 16, 17, 18],
      description: "Notes d'une classe de 10 étudiants",
      moyenne: 15.2,
      mediane: 15,
      mode: "15 (apparaît 3 fois)",
      insight: "Distribution relativement symétrique, moyenne et médiane très proches"
    },
    ventes: {
      title: "🛒 Ventes quotidiennes (en €)",
      data: [1200, 1400, 1500, 1500, 1600, 1700, 1800, 2000, 2200, 8000],
      description: "Ventes sur 10 jours, avec une journée exceptionnelle",
      moyenne: 2290,
      mediane: 1650,
      mode: "1500 (apparaît 2 fois)",
      insight: "La journée exceptionnelle tire la moyenne vers le haut"
    }
  };

  const currentExample = exemples[selectedExample as keyof typeof exemples];

  // Données pour visualisation
  const distributionData = currentExample.data.map((value, index) => ({
    index: index + 1,
    valeur: value
  }));

  const comparaisonData = [
    { mesure: "Moyenne", valeur: currentExample.moyenne, color: "#3B82F6" },
    { mesure: "Médiane", valeur: currentExample.mediane, color: "#10B981" }
  ];

  return (
    <section id="central" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Calculator className="h-8 w-8 text-blue-600" />
        1. Mesures de Tendance Centrale : Trouver le "Centre" de vos Données
      </h2>

      {/* Introduction conceptuelle */}
      <div className="mb-8">
        <CourseHighlight title="🤔 Question fondamentale" type="question">
          <div className="space-y-4">
            <p className="text-lg">
              Si vous deviez résumer 1000 nombres en UN SEUL chiffre qui les représente le mieux, 
              lequel choisiriez-vous ?
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Spoiler :</strong> Il n'y a pas UNE bonne réponse ! Selon le contexte, 
                la moyenne, la médiane ou le mode sera plus pertinent. C'est tout l'art de la statistique descriptive.
              </p>
            </div>
          </div>
        </CourseHighlight>
      </div>

      {/* Sélecteur d'exemples interactifs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>🧪 Laboratoire interactif : Choisissez votre exemple</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.entries(exemples).map(([key, exemple]) => (
              <Button
                key={key}
                variant={selectedExample === key ? "default" : "outline"}
                onClick={() => setSelectedExample(key)}
                className="flex-1 min-w-fit"
              >
                {exemple.title}
              </Button>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">{currentExample.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{currentExample.description}</p>
            <p className="text-sm">
              <strong>Données :</strong> {currentExample.data.join(", ")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3">📊 Visualisation des données</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={distributionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" name="Position" />
                    <YAxis dataKey="valeur" name="Valeur" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value) => [value, 'Valeur']}
                    />
                    <Scatter dataKey="valeur" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">📈 Comparaison des mesures</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparaisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mesure" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valeur" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h5 className="font-semibold text-green-700 mb-2">💡 Insight clé :</h5>
            <p className="text-sm">{currentExample.insight}</p>
          </div>
        </CardContent>
      </Card>

      {/* Moyenne détaillée */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">μ</span>
              </div>
              La Moyenne : Le Centre de Gravité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                La moyenne est comme le centre de gravité d'un balancier. Elle équilibre 
                parfaitement tous les écarts positifs et négatifs.
              </p>
              
              <CourseEquation latex="\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i" />
              
              <CourseHighlight title="🔍 Décryptage de la formule" type="example">
                <div className="space-y-2 text-sm">
                  <p><strong>x̄</strong> = moyenne de l'échantillon</p>
                  <p><strong>n</strong> = nombre total d'observations</p>
                  <p><strong>Σ</strong> = "addition de tous les..."</p>
                  <p><strong>xi</strong> = chaque valeur individuelle</p>
                </div>
              </CourseHighlight>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Avantages
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• Utilise toutes les données</li>
                  <li>• Base de calculs statistiques avancés</li>
                  <li>• Intuitive et familière</li>
                  <li>• Permet les opérations algébriques</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  Inconvénients
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• Sensible aux valeurs aberrantes</li>
                  <li>• Peut ne pas correspondre à une valeur réelle</li>
                  <li>• Inadéquate pour distributions asymétriques</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎯 Quand l'utiliser ?</h5>
                <ul className="text-sm space-y-1">
                  <li>• Distributions normales ou symétriques</li>
                  <li>• Données sans valeurs aberrantes</li>
                  <li>• Variables continues</li>
                  <li>• Calculs statistiques ultérieurs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              La Médiane : Le Juste Milieu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                La médiane divise vos données en deux groupes égaux : 50% en dessous, 50% au-dessus. 
                C'est le vrai "milieu" de votre distribution.
              </p>
              
              <CourseEquation latex="M = \begin{cases} x_{(n+1)/2} & \text{si } n \text{ impair} \\ \frac{x_{n/2} + x_{(n/2)+1}}{2} & \text{si } n \text{ pair} \end{cases}" />

              <CourseHighlight title="👥 Analogie : La file d'attente" type="example">
                <p className="text-sm">
                  Imaginez 11 personnes rangées par taille. La médiane est la taille de la 6ème personne : 
                  5 personnes sont plus petites, 5 sont plus grandes. Simple et intuitif !
                </p>
              </CourseHighlight>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">✨ Super-pouvoirs de la médiane</h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Robuste :</strong> Insensible aux valeurs extrêmes</li>
                  <li>• <strong>Réaliste :</strong> Correspond toujours à une valeur possible</li>
                  <li>• <strong>Intuitive :</strong> "Valeur du milieu"</li>
                  <li>• <strong>Universelle :</strong> Fonctionne avec données ordinales</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🌟 Exemples concrets</h5>
                <div className="text-sm space-y-2">
                  <p><strong>Immobilier :</strong> Prix médian = ce que paie "l'acheteur typique"</p>
                  <p><strong>Salaires :</strong> Salaire médian = seuil où 50% gagnent plus/moins</p>
                  <p><strong>Temps de réponse :</strong> Médiane = expérience utilisateur typique</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Le Mode */}
      <Card className="mb-8 border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">Mo</span>
            </div>
            Le Mode : La Star de vos Données
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm">
                Le mode est la valeur qui apparaît le plus souvent. C'est la "vedette" de votre jeu de données, 
                celle qui vole la vedette par sa fréquence d'apparition.
              </p>

              <CourseEquation latex="\text{Mode} = \arg\max_x f(x)" />

              <CourseHighlight title="🎭 Analogie : La mode vestimentaire" type="example">
                <p className="text-sm">
                  Comme la mode vestimentaire désigne ce que la majorité porte, le mode statistique 
                  désigne ce qui apparaît le plus fréquemment dans vos données.
                </p>
              </CourseHighlight>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🎯 Types de modes</h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Unimodal :</strong> Une seule valeur dominante</li>
                  <li>• <strong>Bimodal :</strong> Deux valeurs ex-aequo</li>
                  <li>• <strong>Multimodal :</strong> Plusieurs valeurs populaires</li>
                  <li>• <strong>Amodal :</strong> Toutes les valeurs sont uniques</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">🚀 Applications modernes</h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>E-commerce :</strong> Taille de vêtement la plus vendue</li>
                  <li>• <strong>Netflix :</strong> Genre de film le plus regardé</li>
                  <li>• <strong>Satisfaction client :</strong> Note la plus fréquente</li>
                  <li>• <strong>Réseaux sociaux :</strong> Heure de pic d'activité</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">⚠️ Attention !</h5>
                <p className="text-sm">
                  Le mode n'existe pas toujours (si toutes les valeurs sont différentes) 
                  et peut être multiple (plusieurs valeurs ex-aequo).
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">✅ Parfait pour :</h5>
                <ul className="text-sm space-y-1">
                  <li>• Variables catégorielles</li>
                  <li>• Variables ordinales</li>
                  <li>• Identifier les tendances populaires</li>
                  <li>• Planification des stocks</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparaison et guide de choix */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Guide de Choix : Quelle Mesure pour Quelle Situation ?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <Badge className="bg-blue-500">Moyenne</Badge>
              </h4>
              <div className="space-y-2 text-sm">
                <p><strong>🎯 Idéale pour :</strong></p>
                <ul className="space-y-1">
                  <li>• Distributions symétriques</li>
                  <li>• Variables continues</li>
                  <li>• Calculs statistiques avancés</li>
                  <li>• Données sans aberrantes</li>
                </ul>
                <p><strong>🚫 Éviter si :</strong></p>
                <ul className="space-y-1">
                  <li>• Valeurs aberrantes présentes</li>
                  <li>• Distribution très asymétrique</li>
                  <li>• Variables ordinales seulement</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <Badge className="bg-green-500">Médiane</Badge>
              </h4>
              <div className="space-y-2 text-sm">
                <p><strong>🎯 Idéale pour :</strong></p>
                <ul className="space-y-1">
                  <li>• Distributions asymétriques</li>
                  <li>• Présence de valeurs aberrantes</li>
                  <li>• Variables ordinales</li>
                  <li>• Données de revenus, prix</li>
                </ul>
                <p><strong>💡 Avantage unique :</strong></p>
                <ul className="space-y-1">
                  <li>• Robuste aux extrêmes</li>
                  <li>• Facile à interpréter</li>
                  <li>• Représentative du "typique"</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <Badge className="bg-purple-500">Mode</Badge>
              </h4>
              <div className="space-y-2 text-sm">
                <p><strong>🎯 Idéale pour :</strong></p>
                <ul className="space-y-1">
                  <li>• Variables catégorielles</li>
                  <li>• Variables nominales</li>
                  <li>• Identifier les préférences</li>
                  <li>• Planification commerciale</li>
                </ul>
                <p><strong>✨ Spécialité :</strong></p>
                <ul className="space-y-1">
                  <li>• Seule mesure pour données nominales</li>
                  <li>• Révèle les tendances populaires</li>
                  <li>• Guide les décisions business</li>
                </ul>
              </div>
            </div>
          </div>

          <CourseHighlight title="🧠 Mémo pour retenir" type="concept">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-blue-600">MOYENNE</p>
                <p>"Le centre de gravité"</p>
                <p className="text-xs">Équilibre mathématique</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-green-600">MÉDIANE</p>
                <p>"Le juste milieu"</p>
                <p className="text-xs">Position centrale</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-purple-600">MODE</p>
                <p>"La star populaire"</p>
                <p className="text-xs">Fréquence maximale</p>
              </div>
            </div>
          </CourseHighlight>
        </CardContent>
      </Card>
    </section>
  );
};

export default CentralTendencySection;
