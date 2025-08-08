
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Zap, Target } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

const DifferentialCalculusIntro = () => {
  return (
    <section id="intro" className="scroll-mt-24">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg border border-orange-100 mb-8">
        <h2 className="text-3xl font-bold mb-4">Le moteur de l'optimisation</h2>
        <p className="text-lg text-gray-700 mb-6">
          Le calcul différentiel révèle comment les fonctions changent. En machine learning, 
          il permet d'optimiser les modèles en trouvant les minima des fonctions de coût.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Badge className="bg-orange-100 text-orange-800 p-3 justify-center flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Taux de variation
          </Badge>
          <Badge className="bg-red-100 text-red-800 p-3 justify-center flex items-center gap-2">
            <Target className="h-4 w-4" />
            Optimisation
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-800 p-3 justify-center flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Gradient descent
          </Badge>
          <Badge className="bg-pink-100 text-pink-800 p-3 justify-center flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Backpropagation
          </Badge>
        </div>

        <CourseHighlight title="🎯 Objectifs d'apprentissage" type="concept">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <li>• Comprendre intuitivement la notion de dérivée</li>
            <li>• Maîtriser les règles de dérivation fondamentales</li>
            <li>• Appliquer les dérivées à l'optimisation</li>
            <li>• Découvrir les gradients et dérivées partielles</li>
            <li>• Implémenter la descente de gradient</li>
            <li>• Comprendre la backpropagation</li>
          </ul>
        </CourseHighlight>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              Fondements mathématiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Découvrez les bases théoriques du calcul différentiel : limites, continuité, 
              et la définition rigoureuse de la dérivée.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Applications pratiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Explorez les applications concrètes en data science : optimisation de modèles, 
              réseaux de neurones, et algorithmes d'apprentissage.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-600" />
              Exercices interactifs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Pratiquez avec des exercices corrigés, des visualisations interactives 
              et des problèmes concrets de machine learning.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DifferentialCalculusIntro;
