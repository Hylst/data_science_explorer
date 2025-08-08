
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Grid3X3, Zap, RotateCcw, Eye } from "lucide-react";

const MatricesSection = () => {
  const [showMatrixDemo, setShowMatrixDemo] = useState(false);
  const [matrixA] = useState([[2, 1], [3, 4]]);
  const [vectorX] = useState([3, 2]);

  const multiplyMatrixVector = () => {
    return [
      matrixA[0][0] * vectorX[0] + matrixA[0][1] * vectorX[1],
      matrixA[1][0] * vectorX[0] + matrixA[1][1] * vectorX[1]
    ];
  };

  return (
    <section id="matrices" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">2. Matrices : Les Machines à Transformer l'Espace</h2>
      
      <CourseHighlight title="🔧 Analogie : La matrice comme une usine" type="concept">
        <p>
          Imaginez une matrice comme une usine : vous entrez un vecteur par un côté, 
          la machine le transforme selon ses "réglages" (les nombres dans la matrice), 
          et vous récupérez un nouveau vecteur de l'autre côté !
        </p>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-purple-600" />
              Anatomie d'une matrice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <CourseEquation latex="A = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}" />
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Lecture intuitive :</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Ligne 1 :</strong> "Recette" pour la première coordonnée du résultat</li>
                  <li>• <strong>Ligne 2 :</strong> "Recette" pour la deuxième coordonnée</li>
                  <li>• <strong>Colonnes :</strong> Influence de chaque variable d'entrée</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">En pratique :</h4>
                <p className="text-sm">
                  Une matrice 2×2 peut représenter une rotation, une mise à l'échelle, 
                  ou même une transformation plus complexe dans le plan !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Transformation en action
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Voyons comment la matrice A transforme le vecteur x = [3, 2] :
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <CourseEquation latex="\begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 3 \\ 2 \end{pmatrix}" />
              </div>

              <Button 
                onClick={() => setShowMatrixDemo(!showMatrixDemo)}
                className="w-full"
              >
                {showMatrixDemo ? "Masquer" : "Voir"} le calcul détaillé
              </Button>

              {showMatrixDemo && (
                <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm"><strong>Ligne 1 :</strong> 2×3 + 1×2 = {2*3 + 1*2}</p>
                  <p className="text-sm"><strong>Ligne 2 :</strong> 3×3 + 4×2 = {3*3 + 4*2}</p>
                  <p className="text-sm font-semibold">
                    <strong>Résultat :</strong> [{multiplyMatrixVector()[0]}, {multiplyMatrixVector()[1]}]
                  </p>
                  <p className="text-xs text-gray-600">
                    Le point (3,2) a été transformé en ({multiplyMatrixVector()[0]},{multiplyMatrixVector()[1]}) !
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🔍 Zoom sur : Types de matrices importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-600">Matrice Identité</h4>
              <CourseEquation latex="I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}" />
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Effet :</strong> Ne change rien ! Comme multiplier par 1.
                </p>
                <p className="text-xs mt-1">
                  <strong>Usage :</strong> Point de référence, initialisation
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">Matrice de Rotation</h4>
              <CourseEquation latex="R = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}" />
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Effet :</strong> Fait tourner les vecteurs de θ degrés
                </p>
                <p className="text-xs mt-1">
                  <strong>Usage :</strong> Computer vision, robotique
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-purple-600">Matrice d'Échelle</h4>
              <CourseEquation latex="S = \begin{pmatrix} s_x & 0 \\ 0 & s_y \end{pmatrix}" />
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Effet :</strong> Étire ou compresse selon x et y
                </p>
                <p className="text-xs mt-1">
                  <strong>Usage :</strong> Normalisation, redimensionnement
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CourseHighlight title="🎯 Exercice corrigé : Transformation d'image" type="example">
        <div className="space-y-4">
          <p><strong>Problème :</strong> Vous voulez faire tourner une image de 90° dans le sens antihoraire. Quelle matrice utiliser ?</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>Solution :</strong></p>
            <p className="text-sm mb-2">Pour θ = 90°, cos(90°) = 0 et sin(90°) = 1</p>
            <CourseEquation latex="R_{90°} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" />
            <p className="text-sm mt-2">
              <strong>Test :</strong> Le point (1,0) devient (0,1) → rotation parfaite ! ✅
            </p>
            <div className="bg-blue-100 p-3 rounded-lg mt-3">
              <p className="text-sm">
                <strong>Dans le code :</strong> Cette matrice est utilisée dans tous les logiciels de retouche photo 
                pour les rotations d'images !
              </p>
            </div>
          </div>
        </div>
      </CourseHighlight>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
        <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Le saviez-vous ? Les matrices en Deep Learning
        </h4>
        <div className="space-y-3 text-sm text-purple-700">
          <p>
            Dans un réseau de neurones, chaque couche est une multiplication matricielle ! 
            Un réseau "dense" avec 1000 neurones d'entrée et 500 de sortie utilise une matrice 500×1000.
          </p>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-xs">
              <strong>Exemple concret :</strong> GPT-3 contient des matrices avec des milliards d'éléments. 
              Chaque fois que vous lui posez une question, ce sont des millions de multiplications matricielles qui se déclenchent !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatricesSection;
