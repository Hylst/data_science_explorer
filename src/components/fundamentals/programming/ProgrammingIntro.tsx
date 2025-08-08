
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, Brain, Target } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

const ProgrammingIntro = () => {
  return (
    <section id="intro" className="mb-16">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-8 rounded-xl border border-blue-100 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">🚀 La Programmation : Votre Baguette Magique en Data Science</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-xl leading-relaxed mb-6">
            Imaginez que vous êtes un chef cuisinier dans un restaurant étoilé. Vos ingrédients ? 
            Les données brutes. Vos ustensiles ? Les langages de programmation. Votre objectif ? 
            Transformer ces ingrédients en insights délicieux qui nourrissent les décisions stratégiques !
          </p>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 my-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">🌟 Analogie : La programmation comme un langage universel</h3>
            <p>
              Tout comme vous apprenez l'anglais pour voyager dans le monde, vous apprenez Python, R ou SQL 
              pour voyager dans l'univers des données. Chaque langage a sa "culture" et ses spécialités !
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🐍</div>
            <h3 className="font-semibold text-gray-800 mb-2">Python</h3>
            <p className="text-sm text-gray-600">Le couteau suisse polyvalent</p>
            <Badge className="mt-2 bg-blue-100 text-blue-800">Débutant-friendly</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-gray-800 mb-2">R</h3>
            <p className="text-sm text-gray-600">Le statisticien expert</p>
            <Badge className="mt-2 bg-purple-100 text-purple-800">Statistiques</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🗃️</div>
            <h3 className="font-semibold text-gray-800 mb-2">SQL</h3>
            <p className="text-sm text-gray-600">Le maître des bases de données</p>
            <Badge className="mt-2 bg-amber-100 text-amber-800">Essentiel</Badge>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Julia</h3>
            <p className="text-sm text-gray-600">Le sprinter performant</p>
            <Badge className="mt-2 bg-green-100 text-green-800">Haute performance</Badge>
          </div>
        </div>

        <CourseHighlight title="💡 Le saviez-vous ?" type="concept">
          <div className="space-y-4">
            <p>
              <strong>En 2023, Python était utilisé par 67% des data scientists dans le monde !</strong> 
              Mais ce n'est pas juste une question de popularité : Python a été conçu avec une philosophie 
              de simplicité et de lisibilité qui en fait le langage parfait pour débuter.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>Fait amusant :</strong> Python doit son nom aux "Monty Python's Flying Circus", 
                pas au serpent ! Son créateur, Guido van Rossum, voulait un nom court et mystérieux.
              </p>
            </div>
          </div>
        </CourseHighlight>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Pourquoi apprendre à programmer en Data Science ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code className="h-5 w-5 text-green-600" />
                  Automatisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Transformez 8 heures de travail manuel en 8 minutes d'exécution automatique. 
                  La programmation vous libère des tâches répétitives pour vous concentrer sur l'analyse.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                  Reproductibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Votre code est comme une recette : quelqu'un d'autre peut suivre exactement 
                  vos étapes et obtenir les mêmes résultats. C'est la base de la science !
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingIntro;
