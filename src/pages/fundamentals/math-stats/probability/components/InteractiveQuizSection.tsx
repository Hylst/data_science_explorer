import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import CourseHighlight from "@/components/courses/CourseHighlight";

/**
 * Interface pour une question de quiz
 */
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  concept: string;
}

/**
 * Composant pour les exercices interactifs et quiz sur les probabilités
 */
const InteractiveQuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);


  /**
   * Questions du quiz sur les probabilités
   */
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Quelle est la probabilité d'obtenir au moins un 6 en lançant deux dés ?",
      options: [
        "1/6",
        "2/6 = 1/3",
        "11/36",
        "1/36"
      ],
      correctAnswer: 2,
      explanation: "P(au moins un 6) = 1 - P(aucun 6) = 1 - (5/6)² = 1 - 25/36 = 11/36",
      difficulty: 'moyen',
      concept: 'Probabilité complémentaire'
    },
    {
      id: 2,
      question: "Dans un test médical, P(Maladie) = 0.01 et P(Test+|Maladie) = 0.95. Si P(Test+|Sain) = 0.05, quelle est P(Maladie|Test+) ?",
      options: [
        "0.95",
        "0.16",
        "0.05",
        "0.01"
      ],
      correctAnswer: 1,
      explanation: "Utilisant Bayes: P(M|T+) = P(T+|M)×P(M) / P(T+) = (0.95×0.01) / (0.95×0.01 + 0.05×0.99) ≈ 0.16",
      difficulty: 'difficile',
      concept: 'Théorème de Bayes'
    },
    {
      id: 3,
      question: "Une variable aléatoire X suit une loi normale N(100, 15²). Quelle est approximativement P(85 < X < 115) ?",
      options: [
        "0.68",
        "0.95",
        "0.99",
        "0.50"
      ],
      correctAnswer: 0,
      explanation: "85 et 115 sont à ±1 écart-type de la moyenne (100±15). Dans une loi normale, ~68% des valeurs sont dans [μ-σ, μ+σ]",
      difficulty: 'moyen',
      concept: 'Distribution normale'
    },
    {
      id: 4,
      question: "Dans un A/B test, Version A: 200/1000 conversions, Version B: 250/1000 conversions. Quelle est la différence de taux ?",
      options: [
        "5%",
        "25%",
        "5 points de pourcentage",
        "20%"
      ],
      correctAnswer: 2,
      explanation: "Taux A = 20%, Taux B = 25%. La différence absolue est 25% - 20% = 5 points de pourcentage.",
      difficulty: 'facile',
      concept: 'A/B Testing'
    },
    {
      id: 5,
      question: "Si P(A) = 0.3, P(B) = 0.4 et P(A∩B) = 0.1, les événements A et B sont-ils indépendants ?",
      options: [
        "Oui, car P(A∩B) = P(A)×P(B)",
        "Non, car P(A∩B) ≠ P(A)×P(B)",
        "Impossible à déterminer",
        "Oui, car P(A∩B) > 0"
      ],
      correctAnswer: 1,
      explanation: "Pour l'indépendance, il faut P(A∩B) = P(A)×P(B). Ici: 0.1 ≠ 0.3×0.4 = 0.12, donc ils ne sont pas indépendants.",
      difficulty: 'moyen',
      concept: 'Indépendance'
    }
  ];

  /**
   * Gère la sélection d'une réponse
   */
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  /**
   * Passe à la question suivante
   */
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {

      setShowResults(true);
    }
  };

  /**
   * Remet à zéro le quiz
   */
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);

  };

  /**
   * Calcule le score du quiz
   */
  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  /**
   * Obtient la couleur selon la difficulté
   */
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-green-600" />
            Quiz Interactif - Testez vos Connaissances
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CourseHighlight title="Quiz Interactif" type="concept">
            Mettez en pratique vos connaissances sur les probabilités avec ce quiz interactif. 
            Chaque question teste un concept clé et fournit des explications détaillées.
          </CourseHighlight>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-blue-600">{questions.length}</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="bg-green-50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Concepts clés</div>
            </div>
            <div className="bg-purple-50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-purple-600">~10</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz */}
      {!showResults ? (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Question {currentQuestion + 1} sur {questions.length}
              </CardTitle>
              <Badge className={getDifficultyColor(currentQ.difficulty)}>
                {currentQ.difficulty}
              </Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Badge variant="outline" className="mb-3">{currentQ.concept}</Badge>
                <h3 className="text-lg font-semibold mb-4">{currentQ.question}</h3>
              </div>
              
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <Button 
                  variant="outline" 
                  onClick={resetQuiz}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer
                </Button>
                <Button 
                  onClick={nextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="flex items-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
                  <Target className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Résultats */
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-600" />
              Résultats du Quiz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Score global */}
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">
                  {calculateScore().percentage}%
                </div>
                <div className="text-lg text-gray-600">
                  {calculateScore().correct} sur {calculateScore().total} bonnes réponses
                </div>
                <div className="mt-4">
                  {calculateScore().percentage >= 80 ? (
                    <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                      🎉 Excellent ! Vous maîtrisez bien les probabilités
                    </Badge>
                  ) : calculateScore().percentage >= 60 ? (
                    <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
                      👍 Bien ! Quelques révisions et ce sera parfait
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
                      📚 À revoir ! Reprenez les concepts de base
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Détail des réponses */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Détail des réponses :</h4>
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">Question {index + 1}</span>
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline">{question.concept}</Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{question.question}</p>
                          
                          <div className="text-sm space-y-1">
                            <div className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              <strong>Votre réponse :</strong> {question.options[userAnswer]}
                            </div>
                            {!isCorrect && (
                              <div className="text-green-600">
                                <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                              </div>
                            )}
                            <div className="bg-blue-50 p-2 rounded mt-2">
                              <div className="flex items-start gap-2">
                                <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-800 text-sm">{question.explanation}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Actions */}
              <div className="flex justify-center gap-4 pt-6">
                <Button onClick={resetQuiz} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Refaire le quiz
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Conseils d'apprentissage */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-purple-600" />
            💡 Conseils pour Maîtriser les Probabilités
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">🎯 Stratégies d'apprentissage :</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Visualisez :</strong> Dessinez des diagrammes et des arbres de probabilité</li>
                <li>• <strong>Pratiquez :</strong> Résolvez des problèmes variés régulièrement</li>
                <li>• <strong>Connectez :</strong> Reliez les concepts à des situations réelles</li>
                <li>• <strong>Vérifiez :</strong> Utilisez l'intuition pour valider vos calculs</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">🔧 Outils recommandés :</h4>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Python :</strong> NumPy, SciPy, Pandas pour les calculs</li>
                <li>• <strong>R :</strong> Excellent pour les statistiques</li>
                <li>• <strong>Simulateurs :</strong> Monte Carlo pour l'intuition</li>
                <li>• <strong>Visualisation :</strong> Matplotlib, Seaborn, ggplot2</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 Prochaines étapes :</h4>
            <p className="text-sm text-gray-700">
              Continuez votre apprentissage en explorant les statistiques inférentielles, 
              l'apprentissage automatique probabiliste, et les applications avancées comme 
              les réseaux bayésiens et les processus stochastiques.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveQuizSection;