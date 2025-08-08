
import { EducationalCard, QuizCard, ExerciseCard } from "@/components/ui/educational-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Zap, Target, Brain, Gamepad2 } from "lucide-react";
import { useState } from "react";

const ConceptsSection = () => {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-8">
      {/* Introduction aux concepts */}
      <EducationalCard title="🧩 Les Pièces du Puzzle RL" type="concept">
        <p className="mb-4">
          Comme un jeu vidéo, l'apprentissage par renforcement a ses "règles du jeu". 
          Découvrons les 4 éléments essentiels qui constituent ce monde fascinant !
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-800 mb-2">🤖 Agent</h4>
            <p className="text-sm">Le "joueur" qui prend des décisions et apprend</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Environnement</h4>
            <p className="text-sm">Le "terrain de jeu" dans lequel évolue l'agent</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-purple-800 mb-2">⚡ Actions</h4>
            <p className="text-sm">Les "mouvements" possibles de l'agent</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-semibold text-orange-800 mb-2">🎁 Récompenses</h4>
            <p className="text-sm">Les "points" gagnés ou perdus après chaque action</p>
          </div>
        </div>
      </EducationalCard>

      {/* Schéma détaillé de l'Agent */}
      <Collapsible open={openSections.agent} onOpenChange={() => toggleSection('agent')}>
        <CollapsibleTrigger className="w-full">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-600" />
                  L'Agent : Le Cerveau de l'Opération
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.agent ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="pt-6 space-y-6">
              <div className="text-center">
                <svg width="500" height="300" viewBox="0 0 500 300" className="max-w-full h-auto mx-auto">
                  {/* Agent central */}
                  <circle cx="250" cy="150" r="60" fill="#3b82f6" stroke="#1e40af" strokeWidth="3"/>
                  <text x="250" y="155" textAnchor="middle" className="font-bold text-white" fontSize="16">AGENT</text>
                  
                  {/* Composants de l'agent */}
                  <rect x="100" y="50" width="80" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
                  <text x="140" y="75" textAnchor="middle" className="text-sm font-medium" fill="#1e40af">Perception</text>
                  
                  <rect x="320" y="50" width="80" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
                  <text x="360" y="75" textAnchor="middle" className="text-sm font-medium" fill="#1e40af">Politique</text>
                  
                  <rect x="100" y="230" width="80" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
                  <text x="140" y="255" textAnchor="middle" className="text-sm font-medium" fill="#1e40af">Mémoire</text>
                  
                  <rect x="320" y="230" width="80" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
                  <text x="360" y="255" textAnchor="middle" className="text-sm font-medium" fill="#1e40af">Apprentissage</text>
                  
                  {/* Flèches */}
                  <defs>
                    <marker id="blueArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                    </marker>
                  </defs>
                  
                  <line x1="180" y1="70" x2="220" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#blueArrow)"/>
                  <line x1="280" y1="120" x2="320" y2="70" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#blueArrow)"/>
                  <line x1="220" y1="190" x2="180" y2="230" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#blueArrow)"/>
                  <line x1="280" y1="190" x2="320" y2="230" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#blueArrow)"/>
                </svg>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">🧠 Composants de l'Agent</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border">
                      <strong>Perception :</strong> Comment l'agent "voit" son environnement
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <strong>Politique :</strong> Sa stratégie pour choisir les actions
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <strong>Mémoire :</strong> Ce qu'il retient de ses expériences
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <strong>Apprentissage :</strong> Comment il améliore sa politique
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">🎮 Exemple : Pac-Man IA</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Perception :</strong> Position des fantômes, des pastilles</p>
                    <p><strong>Politique :</strong> "Si fantôme proche → fuir, sinon → chercher pastilles"</p>
                    <p><strong>Mémoire :</strong> Quelles stratégies ont fonctionné</p>
                    <p><strong>Apprentissage :</strong> Ajuster la stratégie après chaque partie</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Types d'environnements */}
      <EducationalCard title="🌍 Safari des Environnements RL" type="saviez-vous">
        <p className="mb-4">
          Tous les environnements ne se ressemblent pas ! Comme les animaux s'adaptent à leur habitat, 
          les agents RL doivent s'adapter à différents types d'environnements.
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🎯 Déterministe vs Stochastique</h4>
              <p className="text-sm mb-2"><strong>Déterministe :</strong> Même action = même résultat (échecs)</p>
              <p className="text-sm"><strong>Stochastique :</strong> Résultat avec probabilités (poker)</p>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">👁️ Observable vs Partiel</h4>
              <p className="text-sm mb-2"><strong>Observable :</strong> On voit tout (Tetris)</p>
              <p className="text-sm"><strong>Partiel :</strong> Information limitée (Bataille navale)</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300">
            <h4 className="font-semibold mb-2">🏆 Challenge : Classez ces jeux !</h4>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <Badge variant="outline">🎮 Super Mario</Badge>
              <Badge variant="outline">♠️ Blackjack</Badge>
              <Badge variant="outline">🚗 Conduite autonome</Badge>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Réponse : Mario (déterministe, observable), Blackjack (stochastique, partiel), 
              Conduite (stochastique, partiel)
            </p>
          </div>
        </div>
      </EducationalCard>

      {/* Quiz sur les concepts */}
      <QuizCard
        question="Un robot aspirateur qui nettoie une maison inconnue évolue dans quel type d'environnement ?"
        options={[
          "Déterministe et complètement observable",
          "Stochastique et partiellement observable", 
          "Déterministe et partiellement observable",
          "Stochastique et complètement observable"
        ]}
        correctAnswer={1}
        explanation="L'environnement est stochastique (objets qui bougent, efficacité variable du nettoyage) et partiellement observable (capteurs limités, ne peut pas voir derrière les meubles). Le robot doit composer avec l'incertitude sur deux niveaux !"
        difficulty="difficile"
      />

      {/* Exercice pratique */}
      <ExerciseCard
        title="🎮 Concevoir un Agent pour Frogger"
        problem="Vous devez créer un agent RL pour le jeu Frogger (la grenouille qui traverse la route). Définissez précisément : l'espace d'états, l'espace d'actions, la fonction de récompense, et le type d'environnement."
        solution={`**Espace d'états :**
- Position (x, y) de la grenouille
- Positions et vitesses des voitures sur chaque voie
- Positions des troncs d'arbres flottants
- Temps restant (optionnel)

**Espace d'actions :**
- HAUT, BAS, GAUCHE, DROITE, RESTER_IMMOBILE

**Fonction de récompense :**
- +1000 : Atteindre l'autre côté
- -1000 : Collision avec voiture ou eau
- -1 : Chaque pas de temps (encourage la vitesse)
- +10 : Avancer vers l'objectif
- -10 : Reculer

**Type d'environnement :**
- Déterministe (mouvements prévisibles)
- Complètement observable (on voit tout l'écran)
- Séquentiel (actions successives importantes)
- Dynamique (l'environnement change même sans action)`}
        hints={[
          "Pensez à tous les objets mobiles qui affectent la grenouille",
          "La récompense doit encourager à la fois la vitesse et la sécurité",
          "Observez un vrai jeu Frogger pour comprendre la prévisibilité"
        ]}
        difficulty="intermédiaire"
        estimatedTime="20 min"
      />

      {/* Exploration vs Exploitation */}
      <Collapsible open={openSections.exploration} onOpenChange={() => toggleSection('exploration')}>
        <CollapsibleTrigger className="w-full">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-purple-600" />
                  Le Dilemme Exploration vs Exploitation
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.exploration ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="pt-6 space-y-6">
              <EducationalCard title="🍕 Le Dilemme du Restaurant" type="exemple">
                <div className="space-y-4">
                  <p>
                    Imaginez que vous êtes dans une nouvelle ville avec plein de restaurants. 
                    Vous avez trouvé une pizzeria correcte, mais devez-vous :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800">🍕 EXPLOITER</h4>
                      <p className="text-sm">Retourner à la pizzeria connue</p>
                      <p className="text-xs text-green-600">Sûr mais limité</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800">🌟 EXPLORER</h4>
                      <p className="text-sm">Essayer un nouveau restaurant</p>
                      <p className="text-xs text-blue-600">Risqué mais potentiellement meilleur</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">💡 Stratégies équilibrées :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>ε-greedy :</strong> 90% pizzeria, 10% exploration</li>
                      <li>• <strong>UCB :</strong> Essayer les restaurants peu testés</li>
                      <li>• <strong>Décroissant :</strong> Explorer beaucoup au début, puis se stabiliser</li>
                    </ul>
                  </div>
                </div>
              </EducationalCard>
              
              <div className="text-center">
                <svg width="400" height="200" viewBox="0 0 400 200" className="max-w-full h-auto mx-auto">
                  {/* Balance */}
                  <line x1="200" y1="50" x2="200" y2="120" stroke="#374151" strokeWidth="4"/>
                  <circle cx="200" cy="120" r="8" fill="#374151"/>
                  
                  {/* Plateaux */}
                  <line x1="120" y1="80" x2="280" y2="80" stroke="#374151" strokeWidth="3"/>
                  
                  {/* Côté Exploration */}
                  <rect x="80" y="60" width="80" height="40" rx="8" fill="#3b82f6" stroke="#1e40af"/>
                  <text x="120" y="85" textAnchor="middle" className="font-bold text-white" fontSize="12">EXPLORER</text>
                  
                  {/* Côté Exploitation */}
                  <rect x="240" y="60" width="80" height="40" rx="8" fill="#059669" stroke="#047857"/>
                  <text x="280" y="85" textAnchor="middle" className="font-bold text-white" fontSize="12">EXPLOITER</text>
                  
                  {/* Labels */}
                  <text x="120" y="130" textAnchor="middle" className="text-sm" fill="#3b82f6">Découvrir</text>
                  <text x="120" y="145" textAnchor="middle" className="text-sm" fill="#3b82f6">de nouvelles</text>
                  <text x="120" y="160" textAnchor="middle" className="text-sm" fill="#3b82f6">stratégies</text>
                  
                  <text x="280" y="130" textAnchor="middle" className="text-sm" fill="#059669">Utiliser les</text>
                  <text x="280" y="145" textAnchor="middle" className="text-sm" fill="#059669">meilleures</text>
                  <text x="280" y="160" textAnchor="middle" className="text-sm" fill="#059669">connues</text>
                </svg>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ConceptsSection;
