
import React from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LinearAlgebraSection = () => {
  return (
    <Card className="border-t-4 border-t-ds-purple-300 hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle>Algèbre linéaire</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Vecteurs, matrices, décompositions matricielles et transformations linéaires essentiels pour de nombreux algorithmes de Machine Learning.</p>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-purple-600">
              <span>Exemple pratique</span>
              <span className="transition group-open:rotate-180">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </summary>
            <div className="mt-3 text-sm bg-purple-50 p-3 rounded-md">
              <p className="mb-2"><strong>Exemple :</strong> Analyse en Composantes Principales (ACP)</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Problème :</strong> Dataset avec 50 variables corrélées</li>
                <li><strong>Solution :</strong> Décomposition en vecteurs propres pour trouver les directions de variance maximale</li>
                <li><strong>Résultat :</strong> Réduction à 5 composantes principales expliquant 85% de la variance</li>
              </ul>
              <p className="mt-2">L'algèbre linéaire permet de réduire la dimensionnalité tout en préservant l'information essentielle.</p>
            </div>
          </details>
        </div>
        
        <div className="mt-6 bg-purple-50 p-4 rounded-md">
          <h4 className="text-purple-700 font-medium mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Exemple de transformation matricielle
          </h4>
          <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
            <div className="border border-purple-200 p-2 bg-white rounded text-center">
              <p className="font-mono mb-1">X</p>
              <div className="flex flex-col">
                <span>[3, 1]</span>
                <span>[4, 2]</span>
              </div>
            </div>
            <div className="text-purple-500 font-bold">×</div>
            <div className="border border-purple-200 p-2 bg-white rounded text-center">
              <p className="font-mono mb-1">Y</p>
              <div className="flex flex-col">
                <span>[2, 5]</span>
                <span>[1, 3]</span>
              </div>
            </div>
            <div className="col-span-3 text-purple-500 font-bold">=</div>
            <div className="col-span-3 border border-purple-300 p-2 bg-white rounded text-center">
              <p className="font-mono mb-1">Résultat</p>
              <div className="flex flex-col">
                <span>[7, 20]</span>
                <span>[10, 26]</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">
            Les multiplications matricielles sont au cœur des transformations linéaires utilisées en ML
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinearAlgebraSection;
