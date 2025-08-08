
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseEquation from "@/components/courses/CourseEquation";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { CheckCircle, XCircle, Lightbulb, Brain, Target } from "lucide-react";

const ExercisesSection = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showSolutions, setShowSolutions] = useState<boolean[]>([]);
  const [scores, setScores] = useState<{ [key: number]: boolean }>({});

  const exercises = [
    {
      level: "Débutant",
      question: "Calculez la dérivée de f(x) = 3x² + 2x - 5",
      hint: "Utilisez la règle de la puissance et la linéarité de la dérivée",
      solution: "f'(x) = 6x + 2",
      explanation: "On applique la règle de la puissance : d/dx[x²] = 2x, donc d/dx[3x²] = 6x. Pour 2x, la dérivée est 2. La constante -5 a une dérivée nulle.",
      steps: [
        "f(x) = 3x² + 2x - 5",
        "f'(x) = 3 × 2x^(2-1) + 2 × 1x^(1-1) - 0",
        "f'(x) = 6x + 2"
      ]
    },
    {
      level: "Intermédiaire",
      question: "Dérivez g(x) = (x² + 1)(x - 3) en utilisant la règle du produit",
      hint: "Règle du produit : (uv)' = u'v + uv'",
      solution: "g'(x) = 3x² - 6x + 1",
      explanation: "Posons u = x² + 1 et v = x - 3. Alors u' = 2x et v' = 1. Par la règle du produit : g'(x) = 2x(x-3) + (x²+1)(1) = 2x² - 6x + x² + 1 = 3x² - 6x + 1",
      steps: [
        "u = x² + 1, v = x - 3",
        "u' = 2x, v' = 1",
        "g'(x) = u'v + uv' = 2x(x-3) + (x²+1)(1)",
        "g'(x) = 2x² - 6x + x² + 1 = 3x² - 6x + 1"
      ]
    },
    {
      level: "Avancé",
      question: "Calculez la dérivée de h(x) = sin(x²) en utilisant la règle de la chaîne",
      hint: "Règle de la chaîne : si h = f∘g, alors h' = (f'∘g) × g'",
      solution: "h'(x) = 2x cos(x²)",
      explanation: "Posons f(u) = sin(u) et g(x) = x². Alors h(x) = f(g(x)) = sin(x²). f'(u) = cos(u) et g'(x) = 2x. Par la règle de la chaîne : h'(x) = f'(g(x)) × g'(x) = cos(x²) × 2x = 2x cos(x²)",
      steps: [
        "h(x) = sin(x²) = f(g(x)) où f(u) = sin(u) et g(x) = x²",
        "f'(u) = cos(u), g'(x) = 2x",
        "h'(x) = f'(g(x)) × g'(x) = cos(x²) × 2x",
        "h'(x) = 2x cos(x²)"
      ]
    }
  ];

  const practicalProblems = [
    {
      title: "Optimisation de la fonction de coût",
      context: "Vous entraînez un modèle de régression linéaire",
      problem: "Soit J(w) = (1/2m) ∑(h(x) - y)² où h(x) = wx. Calculez ∂J/∂w",
      solution: "∂J/∂w = (1/m) ∑(wx - y)x",
      application: "Ce gradient est utilisé dans l'algorithme de gradient descent pour ajuster les poids"
    },
    {
      title: "Backpropagation simple",
      context: "Réseau à une couche cachée avec activation sigmoïde",
      problem: "Calculez ∂L/∂w₁ pour L = (1/2)(ŷ - y)² où ŷ = σ(w₂σ(w₁x))",
      solution: "∂L/∂w₁ = (ŷ - y) × ŷ(1-ŷ) × w₂ × σ(w₁x)(1-σ(w₁x)) × x",
      application: "Principe fondamental de l'entraînement des réseaux de neurones"
    }
  ];

  const handleAnswerSubmit = (exerciseIndex: number, answer: string) => {
    const exercise = exercises[exerciseIndex];
    const isCorrect = answer.toLowerCase().replace(/\s/g, '') === exercise.solution.toLowerCase().replace(/\s/g, '');
    setScores(prev => ({ ...prev, [exerciseIndex]: isCorrect }));
  };

  const toggleSolution = (index: number) => {
    setShowSolutions(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id="exercises" className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-bold mb-6">5. Exercices Interactifs</h2>
      
      <CourseHighlight title="🎯 Mode d'emploi des exercices" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h4 className="font-semibold">1. Réfléchissez</h4>
            <p className="text-sm">Prenez le temps d'analyser le problème</p>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <h4 className="font-semibold">2. Tentez</h4>
            <p className="text-sm">Essayez de résoudre par vous-même</p>
          </div>
          <div className="text-center">
            <Lightbulb className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <h4 className="font-semibold">3. Apprenez</h4>
            <p className="text-sm">Consultez la solution détaillée</p>
          </div>
        </div>
      </CourseHighlight>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Exercices de base</TabsTrigger>
          <TabsTrigger value="applied">Problèmes appliqués</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="space-y-6">
          {exercises.map((exercise, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Exercice {index + 1}</CardTitle>
                  <Badge 
                    variant={exercise.level === "Débutant" ? "secondary" : exercise.level === "Intermédiaire" ? "default" : "destructive"}
                  >
                    {exercise.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Question :</h4>
                    <p className="text-sm">{exercise.question}</p>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-yellow-600" />
                      <span className="font-semibold text-sm">Indice :</span>
                    </div>
                    <p className="text-xs">{exercise.hint}</p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Input
                      placeholder="Votre réponse (ex: 2x + 1)"
                      value={userAnswers[index] || ''}
                      onChange={(e) => {
                        const newAnswers = [...userAnswers];
                        newAnswers[index] = e.target.value;
                        setUserAnswers(newAnswers);
                      }}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => handleAnswerSubmit(index, userAnswers[index] || '')}
                      disabled={!userAnswers[index]}
                    >
                      Vérifier
                    </Button>
                  </div>

                  {scores[index] !== undefined && (
                    <div className={`flex items-center gap-2 p-3 rounded-lg ${
                      scores[index] ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {scores[index] ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      <span className="font-semibold">
                        {scores[index] ? 'Correct ! Excellente réponse.' : 'Incorrect. Consultez la solution pour comprendre.'}
                      </span>
                    </div>
                  )}

                  <Button 
                    variant="outline" 
                    onClick={() => toggleSolution(index)}
                    className="w-full"
                  >
                    {showSolutions[index] ? 'Masquer la solution' : 'Voir la solution détaillée'}
                  </Button>

                  {showSolutions[index] && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Solution :</h4>
                        <CourseEquation latex={exercise.solution} displayMode={false} />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Étapes de résolution :</h4>
                        <ol className="space-y-2">
                          {exercise.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-sm">
                              <span className="font-semibold">{stepIndex + 1}.</span> {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Explication :</h4>
                        <p className="text-sm">{exercise.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="applied" className="space-y-6">
          {practicalProblems.map((problem, index) => (
            <Card key={index} className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <p className="text-sm text-gray-600">{problem.context}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Problème :</h4>
                    <p className="text-sm">{problem.problem}</p>
                  </div>

                  <Button 
                    variant="outline" 
                    onClick={() => toggleSolution(index + 100)}
                    className="w-full"
                  >
                    {showSolutions[index + 100] ? 'Masquer la solution' : 'Voir la solution'}
                  </Button>

                  {showSolutions[index + 100] && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Solution :</h4>
                        <CourseEquation latex={problem.solution} displayMode={false} />
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Application pratique :</h4>
                        <p className="text-sm">{problem.application}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          <CourseHighlight title="🚀 Projet pratique : Implémentez votre gradient descent" type="example">
            <div className="bg-white p-6 rounded-lg border">
              <h4 className="font-semibold mb-4">Défi : Codez un optimiseur simple</h4>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>Objectif :</strong> Implémentez l'algorithme de gradient descent pour minimiser f(x) = x² + 2x + 1
                </p>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono">
                  {`def gradient_descent(f, df, x0, lr=0.1, iterations=100):
    x = x0
    for i in range(iterations):
        grad = df(x)
        x = x - lr * grad
        if abs(grad) < 1e-6:
            break
    return x

# Votre mission : définissez f(x) et df(x) !`}
                </div>
                <p className="text-sm">
                  <strong>Indice :</strong> Si f(x) = x² + 2x + 1, alors f'(x) = ?
                </p>
              </div>
            </div>
          </CourseHighlight>
        </TabsContent>
      </Tabs>

      <CourseHighlight title="📈 Suivez vos progrès" type="info">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {Object.values(scores).filter(Boolean).length}
            </div>
            <p className="text-sm">Exercices réussis</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {Object.keys(scores).length}
            </div>
            <p className="text-sm">Exercices tentés</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Object.keys(scores).length > 0 ? Math.round((Object.values(scores).filter(Boolean).length / Object.keys(scores).length) * 100) : 0}%
            </div>
            <p className="text-sm">Taux de réussite</p>
          </div>
        </div>
      </CourseHighlight>
    </section>
  );
};

export default ExercisesSection;
