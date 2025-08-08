
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, Users, Trophy, Target, BookOpen, Calculator, Brain, TrendingUp } from 'lucide-react';

const CourseOverview = () => {
  const courseStats = {
    duration: "4 semaines",
    modules: 5,
    exercises: 15,
    students: 2847,
    difficulty: "Débutant",
    rating: 4.8,
    completion: 0
  };

  const skillsAcquired = [
    { name: "Fondements mathématiques", level: 85, color: "bg-blue-500" },
    { name: "Pensée analytique", level: 78, color: "bg-green-500" },
    { name: "Résolution de problèmes", level: 82, color: "bg-purple-500" },
    { name: "Préparation ML", level: 75, color: "bg-orange-500" }
  ];

  const prerequisites = [
    "Mathématiques de niveau lycée",
    "Curiosité pour les sciences des données",
    "Aucune expérience préalable requise"
  ];

  const learningOutcomes = [
    "Comprendre l'importance des mathématiques en data science",
    "Maîtriser les concepts fondamentaux d'ensembles et de fonctions",
    "Appliquer le calcul différentiel et intégral",
    "Résoudre des problèmes mathématiques concrets",
    "Préparer le terrain pour le machine learning"
  ];

  return (
    <div className="space-y-8">
      {/* En-tête du cours */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">
                Introduction aux Mathématiques pour la Data Science
              </CardTitle>
              <p className="text-blue-100 text-lg">
                Construisez des fondations solides pour votre parcours en data science
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5" />
                <span className="text-2xl font-bold">{courseStats.rating}</span>
              </div>
              <p className="text-blue-100 text-sm">sur 5.0</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge className="bg-white text-blue-600 px-3 py-1">
              <Calculator className="h-4 w-4 mr-2" />
              {courseStats.difficulty}
            </Badge>
            <Badge className="bg-white text-blue-600 px-3 py-1">
              <Clock className="h-4 w-4 mr-2" />
              {courseStats.duration}
            </Badge>
            <Badge className="bg-white text-blue-600 px-3 py-1">
              <Users className="h-4 w-4 mr-2" />
              {courseStats.students.toLocaleString()} étudiants
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Statistiques du cours */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">{courseStats.modules}</h3>
            <p className="text-gray-600">Modules</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">{courseStats.exercises}</h3>
            <p className="text-gray-600">Exercices</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Brain className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-gray-600">Pratique</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">4.8/5</h3>
            <p className="text-gray-600">Satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Compétences acquises */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Compétences que vous allez acquérir
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillsAcquired.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prérequis et objectifs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prérequis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {prerequisites.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Objectifs d'apprentissage</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Progression du cours */}
      {courseStats.completion > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Votre progression</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Progression du cours</span>
                <span>{courseStats.completion}%</span>
              </div>
              <Progress value={courseStats.completion} className="h-3" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CourseOverview;
