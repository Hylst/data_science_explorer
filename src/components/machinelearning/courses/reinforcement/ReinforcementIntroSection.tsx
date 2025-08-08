
import { EducationalCard, QuizCard } from "@/components/ui/educational-cards";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Brain, Target, Zap, Users } from "lucide-react";
import { useState } from "react";

const ReinforcementIntroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Introduction humaine et accessible */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Brain className="h-8 w-8 text-purple-600" />
            Bienvenue dans l'Apprentissage par Renforcement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Imaginez que vous apprenez à conduire : vous essayez différentes actions, 
            vous recevez des retours (positifs ou négatifs), et vous ajustez votre comportement. 
            C'est exactement ainsi que fonctionne l'apprentissage par renforcement ! 🚗
          </p>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-4 text-purple-800">🎯 Ce que vous allez découvrir :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium">Les fondamentaux</h4>
                  <p className="text-sm text-gray-600">Agent, environnement, récompenses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium">Les algorithmes</h4>
                  <p className="text-sm text-gray-600">Q-Learning, Policy Gradient, DQN</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium">Applications réelles</h4>
                  <p className="text-sm text-gray-600">Jeux, robotique, finance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium">Projets pratiques</h4>
                  <p className="text-sm text-gray-600">Implémentations concrètes</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analogie du dressage d'un chien */}
      <EducationalCard title="🐕 Analogie : Dresser un chien intelligent" type="analogie">
        <div className="space-y-4">
          <p>
            L'apprentissage par renforcement, c'est comme dresser un chien très intelligent :
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🐕 Dressage traditionnel</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Chien</strong> : apprend par essai-erreur</li>
                  <li>• <strong>Maître</strong> : donne récompenses/punitions</li>
                  <li>• <strong>Environnement</strong> : la maison, le parc</li>
                  <li>• <strong>Objectif</strong> : maximiser les friandises</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">🤖 Apprentissage par renforcement</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Agent</strong> : apprend par essai-erreur</li>
                  <li>• <strong>Fonction de récompense</strong> : donne des signaux</li>
                  <li>• <strong>Environnement</strong> : le système à contrôler</li>
                  <li>• <strong>Objectif</strong> : maximiser la récompense cumulative</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </EducationalCard>

      {/* Schéma SVG du cycle RL */}
      <Card className="border-2 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-center">Le Cycle de l'Apprentissage par Renforcement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <svg width="600" height="400" viewBox="0 0 600 400" className="max-w-full h-auto">
              {/* Environnement */}
              <rect x="50" y="50" width="150" height="100" rx="15" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2"/>
              <text x="125" y="90" textAnchor="middle" className="font-semibold" fill="#0369a1">Environnement</text>
              <text x="125" y="110" textAnchor="middle" className="text-sm" fill="#0369a1">État s(t)</text>
              
              {/* Agent */}
              <rect x="400" y="250" width="150" height="100" rx="15" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2"/>
              <text x="475" y="290" textAnchor="middle" className="font-semibold" fill="#7c3aed">Agent</text>
              <text x="475" y="310" textAnchor="middle" className="text-sm" fill="#7c3aed">Politique π</text>
              
              {/* Flèches et labels */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                </marker>
              </defs>
              
              {/* État vers Agent */}
              <path d="M 200 100 Q 300 50 400 280" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
              <text x="280" y="140" textAnchor="middle" className="text-sm font-medium" fill="#374151">État s(t)</text>
              
              {/* Action Agent vers Environnement */}
              <path d="M 400 300 Q 300 350 200 120" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
              <text x="320" y="320" textAnchor="middle" className="text-sm font-medium" fill="#374151">Action a(t)</text>
              
              {/* Récompense */}
              <path d="M 180 150 Q 250 200 380 280" stroke="#dc2626" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
              <text x="280" y="220" textAnchor="middle" className="text-sm font-bold" fill="#dc2626">Récompense r(t+1)</text>
              
              {/* Légende */}
              <rect x="50" y="320" width="300" height="60" rx="10" fill="#f9fafb" stroke="#d1d5db"/>
              <text x="60" y="340" className="text-sm font-semibold" fill="#374151">Cycle d'apprentissage :</text>
              <text x="60" y="355" className="text-xs" fill="#6b7280">1. L'agent observe l'état</text>
              <text x="60" y="370" className="text-xs" fill="#6b7280">2. Il choisit une action selon sa politique</text>
              <text x="200" y="355" className="text-xs" fill="#6b7280">3. L'environnement change d'état</text>
              <text x="200" y="370" className="text-xs" fill="#6b7280">4. Une récompense est donnée</text>
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Quiz enrichi */}
      <QuizCard
        question="Dans l'analogie du dressage du chien, qu'est-ce qui correspond à la 'politique' en apprentissage par renforcement ?"
        options={[
          "Les friandises données au chien",
          "La stratégie que le chien développe pour obtenir des récompenses",
          "L'environnement dans lequel évolue le chien",
          "Le maître qui dresse le chien"
        ]}
        correctAnswer={1}
        explanation="La politique correspond à la stratégie développée par le chien (l'agent) pour décider quelles actions entreprendre dans chaque situation afin de maximiser ses récompenses. C'est son 'plan d'action' appris au fil du temps."
        difficulty="moyen"
      />

      {/* Contenu repliable sur l'histoire */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  📚 Histoire fascinante de l'Apprentissage par Renforcement
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="pt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">🕰️ Chronologie clé</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-amber-400 pl-4">
                      <Badge className="mb-1">1950s</Badge>
                      <p className="text-sm">Richard Bellman développe la programmation dynamique</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <Badge className="mb-1">1980s</Badge>
                      <p className="text-sm">Sutton & Barto formalisent le Q-Learning</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <Badge className="mb-1">2013</Badge>
                      <p className="text-sm">DeepMind révolutionne avec DQN (Atari)</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-4">
                      <Badge className="mb-1">2016</Badge>
                      <p className="text-sm">AlphaGo bat le champion mondial de Go</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">💡 Anecdotes passionnantes</h4>
                  <div className="space-y-3 text-sm">
                    <p><strong>🎮 Les jeux Atari :</strong> DeepMind a utilisé de vieux jeux des années 80 pour prouver que l'IA pouvait apprendre sans règles prédéfinies !</p>
                    <p><strong>🐁 Les souris de laboratoire :</strong> Les expériences de Skinner sur les rats ont inspiré les algorithmes de récompense moderne.</p>
                    <p><strong>🚁 Hélicoptères autonomes :</strong> Stanford a fait voler des hélicoptères RC en 3D grâce au RL dès 2007 !</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ReinforcementIntroSection;
