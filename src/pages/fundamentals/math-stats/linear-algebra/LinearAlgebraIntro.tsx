
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Lightbulb, Zap, Brain, Target } from "lucide-react";

const LinearAlgebraIntro = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-xl border border-purple-100 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-purple-900">🔬 L'Algèbre Linéaire : Le GPS du Machine Learning</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-xl leading-relaxed mb-6">
            Imaginez que vous êtes un architecte qui conçoit des gratte-ciels dans un monde multidimensionnel. 
            Vos outils ? Les vecteurs et matrices ! Chaque donnée devient un point dans l'espace, 
            chaque algorithme une transformation géométrique élégante.
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 my-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">🌟 Analogie : L'algèbre linéaire comme un langage universel</h3>
            <p>
              Tout comme les mathématiques permettent aux physiciens de décrire l'univers, 
              l'algèbre linéaire permet aux data scientists de décrire et manipuler l'information. 
              Chaque image, chaque mot, chaque donnée devient un vecteur dans un espace mathématique !
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📐</div>
            <h3 className="font-semibold text-gray-800 mb-2">Vecteurs</h3>
            <p className="text-sm text-gray-600">Les coordonnées GPS de vos données</p>
            <Badge className="mt-2 bg-purple-100 text-purple-800">Fondamental</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-gray-800 mb-2">Matrices</h3>
            <p className="text-sm text-gray-600">Les machines à transformer l'espace</p>
            <Badge className="mt-2 bg-blue-100 text-blue-800">Puissant</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Opérations</h3>
            <p className="text-sm text-gray-600">Les règles du jeu mathématique</p>
            <Badge className="mt-2 bg-green-100 text-green-800">Pratique</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Applications</h3>
            <p className="text-sm text-gray-600">La magie en action</p>
            <Badge className="mt-2 bg-amber-100 text-amber-800">Concret</Badge>
          </div>
        </div>

        <CourseHighlight title="💡 Le saviez-vous ?" type="concept">
          <div className="space-y-4">
            <p>
              <strong>Google utilise l'algèbre linéaire chaque seconde !</strong> 
              Quand vous tapez une recherche, l'algorithme PageRank utilise la décomposition en valeurs propres 
              d'une matrice gigantesque pour classer les pages web. C'est de l'algèbre linéaire à l'échelle planétaire !
            </p>
            <div className="bg-purple-100 p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>Fait étonnant :</strong> Une image 1920×1080 pixels est en réalité un vecteur de 2,073,600 dimensions ! 
                L'algèbre linéaire nous permet de manipuler ces "monstres" mathématiques comme s'il s'agissait de simples nombres.
              </p>
            </div>
          </div>
        </CourseHighlight>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-600" />
            Pourquoi l'algèbre linéaire est-elle si importante ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                  Représentation des données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Transforme n'importe quelle information (texte, image, son) en vecteurs mathématiques 
                  que les ordinateurs peuvent comprendre et manipuler.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                  Optimisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Permet de trouver les meilleures solutions dans des espaces multidimensionnels, 
                  comme entraîner un réseau de neurones avec des millions de paramètres.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinearAlgebraIntro;
