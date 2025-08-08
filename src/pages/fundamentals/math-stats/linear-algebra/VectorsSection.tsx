
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Calculator, Eye, Lightbulb } from "lucide-react";

const VectorsSection = () => {
  const [showVectorCalculation, setShowVectorCalculation] = useState(false);
  const [vectorA, setVectorA] = useState([3, 4]);
  const [vectorB, setVectorB] = useState([1, 2]);

  const calculateDotProduct = () => {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
  };

  const calculateMagnitude = (vector: number[]) => {
    return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
  };

  return (
    <section id="vectors" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">1. Vecteurs : Les Coordonnées de Vos Données</h2>
      
      <CourseHighlight title="🧭 Rappel fondamental" type="concept">
        <p>
          Un vecteur, c'est comme l'adresse GPS d'un point dans l'espace. 
          Au lieu de dire "123 rue de la Paix", on dit "3 unités vers la droite, 4 unités vers le haut".
        </p>
      </CourseHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              Visualisation intuitive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Imaginez un vecteur comme une flèche dans l'espace :
              </p>
              <CourseEquation latex="\vec{v} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}" />
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">En pratique :</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Position d'un robot :</strong> [x=3m, y=4m]</li>
                  <li>• <strong>Caractéristiques client :</strong> [âge=30, salaire=50k€]</li>
                  <li>• <strong>Pixel d'image :</strong> [rouge=255, vert=128, bleu=0]</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-green-600" />
              Calculateur interactif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Vecteur A: [{vectorA[0]}, {vectorA[1]}]</label>
                <div className="flex gap-2 mt-1">
                  <input 
                    type="number" 
                    value={vectorA[0]} 
                    onChange={(e) => setVectorA([parseInt(e.target.value) || 0, vectorA[1]])}
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <input 
                    type="number" 
                    value={vectorA[1]} 
                    onChange={(e) => setVectorA([vectorA[0], parseInt(e.target.value) || 0])}
                    className="w-16 px-2 py-1 border rounded"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Vecteur B: [{vectorB[0]}, {vectorB[1]}]</label>
                <div className="flex gap-2 mt-1">
                  <input 
                    type="number" 
                    value={vectorB[0]} 
                    onChange={(e) => setVectorB([parseInt(e.target.value) || 0, vectorB[1]])}
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <input 
                    type="number" 
                    value={vectorB[1]} 
                    onChange={(e) => setVectorB([vectorB[0], parseInt(e.target.value) || 0])}
                    className="w-16 px-2 py-1 border rounded"
                  />
                </div>
              </div>

              <Button 
                onClick={() => setShowVectorCalculation(!showVectorCalculation)}
                className="w-full"
              >
                {showVectorCalculation ? "Masquer" : "Calculer"} les opérations
              </Button>

              {showVectorCalculation && (
                <div className="bg-green-50 p-3 rounded-lg space-y-2">
                  <p className="text-sm"><strong>Produit scalaire :</strong> {calculateDotProduct()}</p>
                  <p className="text-sm"><strong>Magnitude A :</strong> {calculateMagnitude(vectorA).toFixed(2)}</p>
                  <p className="text-sm"><strong>Magnitude B :</strong> {calculateMagnitude(vectorB).toFixed(2)}</p>
                  <p className="text-sm"><strong>Addition :</strong> [{vectorA[0] + vectorB[0]}, {vectorA[1] + vectorB[1]}]</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🔍 Zoom sur : Le produit scalaire</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Formule mathématique</h4>
              <CourseEquation latex="\vec{u} \cdot \vec{v} = \sum_{i=1}^{n} u_i v_i = u_1v_1 + u_2v_2 + ... + u_nv_n" />
              <div className="bg-blue-50 p-3 rounded-lg mt-3">
                <p className="text-sm">
                  <strong>Interprétation :</strong> Plus le produit scalaire est grand, 
                  plus les vecteurs "pointent dans la même direction".
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Applications concrètes</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Similarité :</strong> Comparer deux documents texte</li>
                <li>• <strong>Recommendations :</strong> "Les utilisateurs qui aiment A aiment aussi B"</li>
                <li>• <strong>Computer Vision :</strong> Détecter des formes dans les images</li>
                <li>• <strong>Machine Learning :</strong> Calculer la "distance" entre données</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CourseHighlight title="🎯 Exercice corrigé : Système de recommandation simple" type="example">
        <div className="space-y-4">
          <p><strong>Problème :</strong> Alice aime les films [Action: 5, Comédie: 2, Drame: 1] et Bob aime [Action: 4, Comédie: 3, Drame: 2]. Sont-ils compatibles ?</p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><strong>Solution :</strong></p>
            <CourseEquation latex="\vec{Alice} \cdot \vec{Bob} = 5 \times 4 + 2 \times 3 + 1 \times 2 = 20 + 6 + 2 = 28" />
            <p className="text-sm mt-2">
              Avec une magnitude d'Alice = √(5²+2²+1²) = √30 ≈ 5.48 et Bob = √(4²+3²+2²) = √29 ≈ 5.39
            </p>
            <p className="text-sm">
              <strong>Similarité cosinus :</strong> 28 / (5.48 × 5.39) ≈ 0.95 → Très compatibles ! 🎬
            </p>
          </div>
        </div>
      </CourseHighlight>

      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
          <Lightbulb className="h-4 w-4" />
          Astuce de pro
        </h4>
        <p className="text-sm text-yellow-700">
          En Data Science, on normalise souvent les vecteurs (magnitude = 1) pour comparer uniquement les "directions" 
          sans être influencé par les "intensités". C'est comme comparer des boussoles plutôt que des distances !
        </p>
      </div>
    </section>
  );
};

export default VectorsSection;
