
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Brain, Camera, Music, Smartphone } from "lucide-react";

const ApplicationsSection = () => {
  return (
    <section id="applications" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">5. Applications Révolutionnaires</h2>
      
      <CourseHighlight title="🌍 L'algèbre linéaire façonne notre monde quotidien" type="concept">
        <p>
          De votre smartphone qui reconnaît votre visage aux recommandations Netflix, 
          en passant par les voitures autonomes : l'algèbre linéaire est partout !
        </p>
      </CourseHighlight>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-600" />
              Deep Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Chaque couche d'un réseau de neurones = une transformation linéaire + activation
              </p>
              <CourseEquation latex="y = \sigma(Wx + b)" />
              <div className="space-y-2 text-sm">
                <p>• <strong>W :</strong> matrice de poids (à apprendre)</p>
                <p>• <strong>x :</strong> vecteur d'entrée</p>
                <p>• <strong>b :</strong> biais</p>
                <p>• <strong>σ :</strong> fonction d'activation</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Exemple concret : ChatGPT</h4>
                <p className="text-xs text-purple-600">
                  Contient des matrices avec des milliards de paramètres. 
                  Chaque mot que vous tapez déclenche des millions de multiplications matricielles !
                </p>
              </div>

              <Badge className="bg-purple-100 text-purple-800">
                🔥 Application chaude : Transformers, BERT, GPT
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-green-600" />
              Computer Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Transformations géométriques pour manipuler et analyser les images
              </p>
              <CourseEquation latex="\begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta & t_x \\ \sin\theta & \cos\theta & t_y \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix}" />
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Applications réelles :</h4>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• <strong>Face ID :</strong> Reconnaissance faciale en temps réel</li>
                  <li>• <strong>Instagram :</strong> Filtres et effets visuels</li>
                  <li>• <strong>Voitures autonomes :</strong> Détection d'objets</li>
                  <li>• <strong>Médecine :</strong> Analyse d'IRM et scanners</li>
                </ul>
              </div>

              <Badge className="bg-green-100 text-green-800">
                📱 Partout dans votre smartphone !
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-6 w-6 text-blue-600" />
              Systèmes de Recommandation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Factorisation matricielle pour prédire vos goûts
              </p>
              <CourseEquation latex="R \approx UV^T" />
              <div className="space-y-2 text-sm">
                <p>• <strong>R :</strong> matrice utilisateur-item (avec trous !)</p>
                <p>• <strong>U :</strong> profils utilisateurs cachés</p>
                <p>• <strong>V :</strong> caractéristiques items cachées</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Magie en action :</h4>
                <p className="text-xs text-blue-600">
                  Netflix devine que vous aimerez "Stranger Things" sans que vous l'ayez jamais vu, 
                  juste en analysant les patterns de millions d'utilisateurs similaires !
                </p>
              </div>

              <Badge className="bg-blue-100 text-blue-800">
                🎵 Netflix, Spotify, Amazon, YouTube...
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-orange-600" />
              Analyse en Composantes Principales (PCA)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Réduire la complexité tout en gardant l'essentiel
              </p>
              <CourseEquation latex="Y = XW" />
              <p className="text-xs">W contient les vecteurs propres de la matrice de covariance</p>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-700 mb-2">Cas d'usage impressionnants :</h4>
                <ul className="text-xs text-orange-600 space-y-1">
                  <li>• <strong>Génomique :</strong> Analyser 20k gènes → 3 composantes principales</li>
                  <li>• <strong>Finance :</strong> 1000 actions → 5 facteurs de risque</li>
                  <li>• <strong>Marketing :</strong> 50 questions sondage → 3 profils types</li>
                  <li>• <strong>Images :</strong> 1M pixels → 100 caractéristiques</li>
                </ul>
              </div>

              <Badge className="bg-orange-100 text-orange-800">
                📊 L'outil N°1 des data scientists
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <CourseHighlight title="🎯 Exercice intégré : Système de recommandation simplifié" type="example">
        <div className="space-y-4">
          <p><strong>Scenario :</strong> Créer un mini-Netflix avec 3 utilisateurs et 4 films</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Matrice des notes (R) :</h4>
            <div className="overflow-x-auto">
              <table className="text-sm border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2"></th>
                    <th className="border border-gray-300 p-2">Action</th>
                    <th className="border border-gray-300 p-2">Romance</th>
                    <th className="border border-gray-300 p-2">Horreur</th>
                    <th className="border border-gray-300 p-2">Comédie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Alice</td>
                    <td className="border border-gray-300 p-2">5</td>
                    <td className="border border-gray-300 p-2">?</td>
                    <td className="border border-gray-300 p-2">1</td>
                    <td className="border border-gray-300 p-2">4</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Bob</td>
                    <td className="border border-gray-300 p-2">4</td>
                    <td className="border border-gray-300 p-2">2</td>
                    <td className="border border-gray-300 p-2">?</td>
                    <td className="border border-gray-300 p-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Carol</td>
                    <td className="border border-gray-300 p-2">2</td>
                    <td className="border border-gray-300 p-2">5</td>
                    <td className="border border-gray-300 p-2">2</td>
                    <td className="border border-gray-300 p-2">?</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 bg-blue-100 p-3 rounded">
              <p className="text-sm">
                <strong>Objectif :</strong> Prédire les notes manquantes (?) en factorisant R ≈ UV^T
              </p>
              <p className="text-xs mt-1">
                <strong>Intuition :</strong> Alice et Bob aiment l'action → Alice aimera probablement la Romance (note de Bob = 2)
              </p>
            </div>
          </div>
        </div>
      </CourseHighlight>

      <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 p-8 rounded-xl border border-purple-100">
        <h3 className="text-xl font-bold mb-4 text-center">🚀 L'avenir avec l'algèbre linéaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <h4 className="font-semibold">IA Générative</h4>
            <p className="text-sm text-gray-600">
              DALL-E, Midjourney : création d'images par transformations matricielles complexes
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔬</div>
            <h4 className="font-semibold">Sciences</h4>
            <p className="text-sm text-gray-600">
              Découverte de médicaments, prédiction climatique, exploration spatiale
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌐</div>
            <h4 className="font-semibold">Métaverse</h4>
            <p className="text-sm text-gray-600">
              Mondes virtuels en temps réel grâce aux GPU et transformations 3D
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
