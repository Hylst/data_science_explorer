
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { RotateCcw, Calculator, AlertCircle } from "lucide-react";

const OperationsSection = () => {
  const [showDeterminantCalc, setShowDeterminantCalc] = useState(false);
  const [matrix] = useState([[2, 3], [1, 4]]);

  const calculateDeterminant = () => {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  };

  return (
    <section id="operations" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">3. Opérations Matricielles : Les Règles du Jeu</h2>
      
      <CourseHighlight title="🎮 Rappel : Les matrices comme des règles de jeu" type="concept">
        <p>
          Chaque opération matricielle a ses propres règles, comme aux échecs. 
          Comprendre ces règles vous donne le pouvoir de manipuler l'information à volonté !
        </p>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-blue-600" />
              Transposition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                La transposée A^T s'obtient en "retournant" la matrice le long de sa diagonale :
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center">
                  <CourseEquation latex="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
                  <p className="text-sm my-2">⬇️</p>
                  <CourseEquation latex="A^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}" />
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <h5 className="font-semibold text-green-700 mb-2">Applications pratiques :</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Changer l'organisation des données</li>
                  <li>• Calculs de covariance en statistiques</li>
                  <li>• Optimisation en machine learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-purple-600" />
              Déterminant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Le déterminant mesure "l'effet d'échelle" d'une transformation :
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm mb-2">Matrice exemple :</p>
                <CourseEquation latex="\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}" />
              </div>

              <Button 
                onClick={() => setShowDeterminantCalc(!showDeterminantCalc)}
                className="w-full"
              >
                {showDeterminantCalc ? "Masquer" : "Calculer"} le déterminant
              </Button>

              {showDeterminantCalc && (
                <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm">
                    <strong>Formule :</strong> det(A) = ad - bc
                  </p>
                  <p className="text-sm">
                    <strong>Calcul :</strong> (2 × 4) - (3 × 1) = 8 - 3 = {calculateDeterminant()}
                  </p>
                  <div className="bg-white p-2 rounded">
                    <p className="text-xs">
                      <strong>Interprétation :</strong> Cette transformation multiplie les aires par {calculateDeterminant()} !
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🔍 Zoom sur : L'inverse d'une matrice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Concept intuitif</h4>
                <p className="text-sm mb-3">
                  L'inverse A^(-1) "annule" l'effet de A. Si A fait tourner de 90°, 
                  alors A^(-1) fait tourner de -90° !
                </p>
                <CourseEquation latex="A \times A^{-1} = I" />
                <div className="bg-blue-50 p-3 rounded-lg mt-3">
                  <p className="text-xs">
                    Comme 5 × (1/5) = 1, mais pour les matrices !
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Condition d'existence</h4>
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800">
                    det(A) ≠ 0 → Inverse existe ✅
                  </Badge>
                  <Badge className="bg-red-100 text-red-800">
                    det(A) = 0 → Pas d'inverse ❌
                  </Badge>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-xs">
                      <strong>Intuition :</strong> Si le déterminant est 0, la transformation "écrase" 
                      l'espace en une dimension inférieure. Impossible de revenir en arrière !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CourseHighlight title="🎯 Exemple concret : Résoudre un système d'équations" type="example">
              <div className="space-y-3">
                <p><strong>Problème :</strong> Résoudre le système 2x + 3y = 7 et x + 4y = 6</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm mb-2"><strong>En notation matricielle :</strong></p>
                  <CourseEquation latex="\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 \\ 6 \end{pmatrix}" />
                  <p className="text-sm mt-2"><strong>Solution :</strong> x = A^(-1) × b</p>
                  <div className="bg-green-100 p-2 rounded mt-2">
                    <p className="text-xs">En pratique : x = 2, y = 1 → Vérifiez : 2×2 + 3×1 = 7 ✅</p>
                  </div>
                </div>
              </div>
            </CourseHighlight>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Trace d'une matrice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <CourseEquation latex="\text{tr}(A) = \sum_{i=1}^{n} a_{ii}" />
              <p className="text-sm">
                La trace est la somme des éléments diagonaux. Simple mais puissant !
              </p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Propriété magique :</strong> tr(A) = somme des valeurs propres
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-lg">Rang d'une matrice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm">
                Le rang mesure la "dimension effective" de l'information dans la matrice.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Intuition :</strong> Combien de directions indépendantes la matrice peut-elle représenter ?
                </p>
                <p className="text-xs mt-1">
                  <strong>Usage :</strong> Réduction de dimensionnalité, compression de données
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">💡 Astuce de mémorisation</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-lg">
            <p className="font-medium">Transposée</p>
            <p className="text-xs text-gray-600">"Miroir diagonal"</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="font-medium">Déterminant</p>
            <p className="text-xs text-gray-600">"Facteur d'échelle"</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="font-medium">Inverse</p>
            <p className="text-xs text-gray-600">"Marche arrière"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
