
import { EducationalCard, QuizCard, ExerciseCard, ProgressiveDisclosure } from "@/components/ui/educational-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Zap, Brain, Code, Trophy } from "lucide-react";
import { useState } from "react";

const AlgorithmsSection = () => {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-8">
      {/* Introduction aux algorithmes */}
      <EducationalCard title="🎯 L'Arsenal des Algorithmes RL" type="concept">
        <p className="mb-4">
          Comme un chef cuisinier a différents ustensiles, l'apprentissage par renforcement 
          dispose de plusieurs algorithmes, chacun adapté à des situations particulières !
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">🏁 Basés sur la Valeur</h4>
            <p className="text-sm">Q-Learning, SARSA</p>
            <p className="text-xs text-blue-600">Apprennent la valeur des actions</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">🎪 Basés sur la Politique</h4>
            <p className="text-sm">REINFORCE, A3C</p>
            <p className="text-xs text-green-600">Apprennent directement la stratégie</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">⚖️ Acteur-Critique</h4>
            <p className="text-sm">A2C, PPO, SAC</p>
            <p className="text-xs text-purple-600">Combinent les deux approches</p>
          </div>
        </div>
      </EducationalCard>

      {/* Q-Learning détaillé */}
      <Collapsible open={openSections.qlearning} onOpenChange={() => toggleSection('qlearning')}>
        <CollapsibleTrigger className="w-full">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  Q-Learning : Le Roi des Algorithmes
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openSections.qlearning ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="pt-6 space-y-6">
              <EducationalCard title="🗺️ La Table Q : GPS de l'Agent" type="analogie">
                <div className="space-y-4">
                  <p>
                    Imaginez Q-Learning comme un GPS intelligent qui apprend les meilleurs chemins 
                    en explorant la ville. Chaque intersection (état) a une table qui indique 
                    la "valeur" de chaque direction possible !
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl border-2 border-dashed border-yellow-400">
                    <h4 className="font-semibold mb-4 text-center">📊 Table Q Simplifiée - Pac-Man</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-yellow-100">
                            <th className="border p-2">État</th>
                            <th className="border p-2">⬆️ Haut</th>
                            <th className="border p-2">⬇️ Bas</th>
                            <th className="border p-2">⬅️ Gauche</th>
                            <th className="border p-2">➡️ Droite</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2 font-medium">Couloir libre</td>
                            <td className="border p-2 text-green-600">+0.8</td>
                            <td className="border p-2 text-red-600">-0.2</td>
                            <td className="border p-2 text-blue-600">+0.5</td>
                            <td className="border p-2 text-green-600">+0.9</td>
                          </tr>
                          <tr>
                            <td className="border p-2 font-medium">Fantôme proche</td>
                            <td className="border p-2 text-red-600">-0.9</td>
                            <td className="border p-2 text-green-600">+0.7</td>
                            <td className="border p-2 text-red-600">-0.8</td>
                            <td className="border p-2 text-yellow-600">+0.1</td>
                          </tr>
                          <tr>
                            <td className="border p-2 font-medium">Près pastille</td>
                            <td className="border p-2 text-green-600">+1.2</td>
                            <td className="border p-2 text-blue-600">+0.3</td>
                            <td className="border p-2 text-blue-600">+0.4</td>
                            <td className="border p-2 text-yellow-600">+0.2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      💡 Plus la valeur est élevée, plus l'action est recommandée dans cette situation !
                    </p>
                  </div>
                </div>
              </EducationalCard>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">⚡ Formule Magique de Q-Learning</h4>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="text-center mb-4">
                      <code className="text-lg font-mono bg-gray-100 p-2 rounded">
                        Q(s,a) = Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]
                      </code>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>α</strong> : Taux d'apprentissage (vitesse d'adaptation)</p>
                      <p><strong>γ</strong> : Facteur d'escompte (importance du futur)</p>
                      <p><strong>r</strong> : Récompense immédiate</p>
                      <p><strong>max Q(s',a')</strong> : Meilleure action future possible</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">🎯 Algorithme Pas à Pas</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <strong>1.</strong> Observer l'état actuel
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <strong>2.</strong> Choisir action (ε-greedy)
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                      <strong>3.</strong> Exécuter l'action
                    </div>
                    <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                      <strong>4.</strong> Recevoir récompense
                    </div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <strong>5.</strong> Mettre à jour Q(s,a)
                    </div>
                    <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400">
                      <strong>6.</strong> Répéter jusqu'à convergence
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Comparaison d'algorithmes */}
      <ProgressiveDisclosure
        title="⚔️ Bataille des Algorithmes : Qui Gagne Quoi ?"
        levels={[
          {
            title: "Débutant : Les Bases",
            difficulty: "basic",
            content: (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🏆 Q-Learning</h4>
                    <p className="text-sm mb-2"><strong>Points forts :</strong> Simple, robuste, bien compris</p>
                    <p className="text-sm"><strong>Idéal pour :</strong> Environnements discrets, apprentissage</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🎪 REINFORCE</h4>
                    <p className="text-sm mb-2"><strong>Points forts :</strong> Actions continues, simple</p>
                    <p className="text-sm"><strong>Idéal pour :</strong> Problèmes de contrôle, robotique</p>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Intermédiaire : Les Nuances",
            difficulty: "intermediate", 
            content: (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-3">📊 Tableau Comparatif Détaillé</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Algorithme</th>
                          <th className="p-2">Convergence</th>
                          <th className="p-2">Stabilité</th>
                          <th className="p-2">Efficacité</th>
                          <th className="p-2">Complexité</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 font-medium">Q-Learning</td>
                          <td className="p-2">⭐⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐</td>
                          <td className="p-2">⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">SARSA</td>
                          <td className="p-2">⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐</td>
                          <td className="p-2">⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">DQN</td>
                          <td className="p-2">⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">PPO</td>
                          <td className="p-2">⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐</td>
                          <td className="p-2">⭐⭐⭐⭐⭐</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Avancé : Les Secrets",
            difficulty: "advanced",
            content: (
              <div className="space-y-4">
                <EducationalCard title="🔬 Analyse Approfondie des Trade-offs" type="zoom">
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">⚠️ Pièges Courants</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Q-Learning :</strong> Surestimation des valeurs Q</li>
                        <li>• <strong>Policy Gradient :</strong> Variance élevée des gradients</li>
                        <li>• <strong>DQN :</strong> Instabilité due aux réseaux de neurones</li>
                        <li>• <strong>A3C :</strong> Coordination difficile entre acteurs</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">💡 Solutions Modernes</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Double DQN :</strong> Réduit la surestimation</li>
                        <li>• <strong>Dueling Networks :</strong> Sépare valeur d'état et avantage</li>
                        <li>• <strong>Rainbow :</strong> Combine plusieurs améliorations</li>
                        <li>• <strong>SAC :</strong> Stabilité via l'entropie maximale</li>
                      </ul>
                    </div>
                  </div>
                </EducationalCard>
              </div>
            )
          }
        ]}
      />

      {/* Quiz avancé sur les algorithmes */}
      <QuizCard
        question="Pourquoi SARSA est-il considéré comme plus 'prudent' que Q-Learning dans un environnement dangereux ?"
        options={[
          "SARSA converge plus rapidement",
          "SARSA utilise la politique actuelle pour estimer les valeurs futures",
          "SARSA a une complexité computationnelle plus faible",
          "SARSA ne nécessite pas de facteur d'escompte"
        ]}
        correctAnswer={1}
        explanation="SARSA est 'on-policy' : il évalue les actions selon la politique qu'il suit réellement (incluant l'exploration). Q-Learning est 'off-policy' et suppose toujours qu'on prendra la meilleure action, ce qui peut être dangereux si on explore encore. Dans un environnement avec des 'falaises', SARSA apprend à éviter les bords même pendant l'exploration !"
        difficulty="difficile"
      />

      {/* Exercice de codage */}
      <ExerciseCard
        title="🎮 Implémentation Q-Learning pour Grid World"
        problem="Implémentez un agent Q-Learning simple pour naviguer dans une grille 4x4. L'agent commence en (0,0) et doit atteindre (3,3). Les cases (1,1) et (2,2) sont des obstacles. Implémentez la table Q, la politique ε-greedy, et la mise à jour des valeurs."
        solution={`import numpy as np
import random

class QLearningAgent:
    def __init__(self, state_size=16, action_size=4, lr=0.1, gamma=0.95, epsilon=0.1):
        self.q_table = np.zeros((state_size, action_size))
        self.lr = lr  # Taux d'apprentissage
        self.gamma = gamma  # Facteur d'escompte
        self.epsilon = epsilon  # Exploration
        
        # Actions: 0=haut, 1=bas, 2=gauche, 3=droite
        self.actions = [(0,-1), (0,1), (-1,0), (1,0)]
    
    def state_to_index(self, row, col):
        """Convertit (row, col) en index 1D"""
        return row * 4 + col
    
    def index_to_state(self, index):
        """Convertit index 1D en (row, col)"""
        return index // 4, index % 4
    
    def is_valid_state(self, row, col):
        """Vérifie si l'état est valide"""
        if row < 0 or row >= 4 or col < 0 or col >= 4:
            return False
        if (row, col) in [(1,1), (2,2)]:  # Obstacles
            return False
        return True
    
    def choose_action(self, state):
        """Politique ε-greedy"""
        if random.random() < self.epsilon:
            return random.randint(0, 3)  # Exploration
        else:
            return np.argmax(self.q_table[state])  # Exploitation
    
    def update_q_table(self, state, action, reward, next_state):
        """Mise à jour Q-Learning"""
        current_q = self.q_table[state, action]
        max_next_q = np.max(self.q_table[next_state])
        
        # Formule Q-Learning
        new_q = current_q + self.lr * (reward + self.gamma * max_next_q - current_q)
        self.q_table[state, action] = new_q
    
    def get_next_state(self, current_state, action):
        """Calcule le prochain état"""
        row, col = self.index_to_state(current_state)
        d_row, d_col = self.actions[action]
        new_row, new_col = row + d_row, col + d_col
        
        if self.is_valid_state(new_row, new_col):
            return self.state_to_index(new_row, new_col)
        else:
            return current_state  # Reste en place si mouvement invalide
    
    def get_reward(self, state):
        """Fonction de récompense"""
        row, col = self.index_to_state(state)
        if (row, col) == (3, 3):  # Objectif atteint
            return 10
        elif (row, col) in [(1,1), (2,2)]:  # Obstacles
            return -5
        else:
            return -0.1  # Coût de déplacement

# Exemple d'utilisation
agent = QLearningAgent()
episodes = 1000

for episode in range(episodes):
    state = 0  # Position de départ (0,0)
    
    while state != 15:  # Jusqu'à atteindre (3,3)
        action = agent.choose_action(state)
        next_state = agent.get_next_state(state, action)
        reward = agent.get_reward(next_state)
        
        agent.update_q_table(state, action, reward, next_state)
        state = next_state
        
        # Éviter les boucles infinies
        if episode > 50 and random.random() < 0.01:
            break

print("Entraînement terminé !")
print("Table Q finale (premiers états):")
print(agent.q_table[:8])`}
        hints={[
          "Commencez par définir la représentation des états (grille 4x4 = 16 états)",
          "Pensez à la fonction de récompense : +10 pour l'objectif, -5 pour obstacles, -0.1 par pas",
          "Implémentez d'abord la politique ε-greedy simple",
          "N'oubliez pas de gérer les mouvements invalides (rester en place)"
        ]}
        difficulty="avancé"
        estimatedTime="45 min"
      />
    </div>
  );
};

export default AlgorithmsSection;
