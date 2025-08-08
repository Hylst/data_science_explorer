
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface CourseQuizProps {
  questions: QuizQuestion[];
  title?: string;
}

const CourseQuiz = ({ questions, title = "Quiz d'évaluation" }: CourseQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (value: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = parseInt(value);
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    // Check if all questions have been answered
    const unanswered = selectedAnswers.findIndex(answer => answer === -1);
    if (unanswered !== -1) {
      toast({
        title: "Réponses incomplètes",
        description: `La question ${unanswered + 1} n'a pas été répondue.`,
        variant: "destructive"
      });
      setCurrentQuestion(unanswered);
      return;
    }

    setSubmitted(true);
    setShowResults(true);
    
    // Calculate score
    const correctAnswers = selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    toast({
      title: "Quiz terminé !",
      description: `Votre score : ${correctAnswers}/${questions.length}`,
      variant: correctAnswers / questions.length >= 0.7 ? "default" : "destructive"
    });
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
  };

  return (
    <div className="space-y-6 py-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      
      {!showResults ? (
        <Card className="p-6">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm font-medium">
              {Math.round(((selectedAnswers.filter(a => a !== -1).length) / questions.length) * 100)}% complété
            </span>
          </div>

          <div className="h-2 w-full bg-gray-200 rounded-full mb-6">
            <div 
              className="h-2 bg-ds-blue-500 rounded-full" 
              style={{ width: `${(selectedAnswers.filter(a => a !== -1).length / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>
            <RadioGroup 
              value={selectedAnswers[currentQuestion] !== -1 ? selectedAnswers[currentQuestion].toString() : undefined} 
              onValueChange={handleOptionSelect}
            >
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                    <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                    <Label htmlFor={`option-${idx}`} className="flex-grow cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Précédent
            </Button>
            
            {currentQuestion < questions.length - 1 ? (
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === -1}
              >
                Suivant
              </Button>
            ) : (
              <Button 
                onClick={handleSubmitQuiz}
                disabled={selectedAnswers.includes(-1)}
              >
                Terminer le quiz
              </Button>
            )}
          </div>
        </Card>
      ) : (
        <Card className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Résultats</h3>
            <p className="text-lg">
              Votre score: <span className="font-bold">{calculateScore()}/{questions.length}</span>
              {" "}({Math.round((calculateScore() / questions.length) * 100)}%)
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, idx) => (
              <div key={idx} className="border-b pb-4 last:border-b-0">
                <div className="flex items-start gap-2">
                  {selectedAnswers[idx] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <div>
                    <h4 className="font-medium mb-2">Question {idx + 1}: {question.question}</h4>
                    <div className="space-y-1 mb-2">
                      {question.options.map((option, optIdx) => (
                        <div 
                          key={optIdx} 
                          className={`p-2 rounded-md ${
                            optIdx === question.correctAnswer 
                              ? 'bg-green-100 border border-green-200' 
                              : optIdx === selectedAnswers[idx] && optIdx !== question.correctAnswer
                                ? 'bg-red-100 border border-red-200'
                                : ''
                          }`}
                        >
                          {option}
                          {optIdx === question.correctAnswer && (
                            <span className="ml-2 text-xs text-green-700 font-medium">(Réponse correcte)</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm bg-gray-50 p-3 rounded-md mt-2">
                      <span className="font-medium">Explication:</span> {question.explanation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-6 w-full" onClick={() => {
            setSubmitted(false);
            setShowResults(false);
            setSelectedAnswers(Array(questions.length).fill(-1));
            setCurrentQuestion(0);
          }}>
            Recommencer le quiz
          </Button>
        </Card>
      )}
    </div>
  );
};

export default CourseQuiz;
