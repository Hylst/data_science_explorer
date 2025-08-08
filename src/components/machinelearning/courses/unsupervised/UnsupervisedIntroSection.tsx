
import { EducationalCard, QuizCard } from "@/components/ui/educational-cards";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Search, GitBranch, Sparkles, Eye } from "lucide-react";
import { useState } from "react";

const UnsupervisedIntroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Introduction humaine et accessible */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Search className="h-8 w-8 text-green-600" />
            Bienvenue dans l'Apprentissage Non Supervisé
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Imaginez que vous découvrez une nouvelle planète pleine de créatures inconnues. 
            Sans guide ni manuel, vous devez identifier les espèces, leurs habitats, 
            et leurs comportements. C'est exactement ce que fait l'apprentissage non supervisé ! 🌍✨
          </p>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-4 text-green-800">🎯 Votre Mission d'Explorateur :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <GitBranch className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium">Clustering</h4>
                  <p className="text-sm text-gray-600">Regrouper les créatures similaires</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium">Réduction de dimension</h4>
                  <p className="text-sm text-gray-600">Simplifier les données complexes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium">Détection d'anomalies</h4>
                  <p className="text-sm text-gray-600">Repérer les spécimens uniques</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-medium">Découverte de motifs</h4>
                  <p className="text-sm text-gray-600">Révéler les structures cachées</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analogie de la bibliothèque désorganisée */}
      <EducationalCard title="📚 Analogie : La Bibliothèque Mystérieuse" type="analogie">
        <div className="space-y-4">
          <p>
            Vous entrez dans une immense bibliothèque où tous les livres sont éparpillés au sol, 
            sans étiquettes ni classification. Votre mission : organiser cette bibliothèque !
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">📚 Organisation de Bibliothèque</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Clustering</strong> : Regrouper par genre (romans, sciences, histoire)</li>
                  <li>• <strong>Réduction</strong> : Créer un système de classification simple</li>
                  <li>• <strong>Anomalies</strong> : Repérer les livres rares ou endommagés</li>
                  <li>• <strong>Motifs</strong> : Découvrir les thèmes récurrents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🤖 Apprentissage Non Supervisé</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>K-means</strong> : Grouper les données similaires</li>
                  <li>• <strong>PCA</strong> : Simplifier en gardant l'essentiel</li>
                  <li>• <strong>Isolation Forest</strong> : Détecter les outliers</li>
                  <li>• <strong>Association Rules</strong> : Trouver les corrélations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-700">
                💡 <strong>Point clé :</strong> Dans les deux cas, nous devons découvrir 
                l'organisation cachée sans connaître à l'avance les catégories !
              </p>
            </div>
          </div>
        </div>
      </EducationalCard>

      {/* Schéma SVG des techniques d'apprentissage non supervisé */}
      <Card className="border-2 border-green-200">
        <CardHeader>
          <CardTitle className="text-center">L'Univers de l'Apprentissage Non Supervisé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <svg width="700" height="500" viewBox="0 0 700 500" className="max-w-full h-auto">
              {/* Centre : Données brutes */}
              <circle cx="350" cy="250" r="60" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3"/>
              <text x="350" y="245" textAnchor="middle" className="font-bold" fill="#0369a1" fontSize="14">DONNÉES</text>
              <text x="350" y="260" textAnchor="middle" className="text-sm" fill="#0369a1" fontSize="12">NON ÉTIQUETÉES</text>
              
              {/* Clustering */}
              <g>
                <rect x="80" y="80" width="120" height="80" rx="15" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
                <text x="140" y="110" textAnchor="middle" className="font-semibold" fill="#16a34a" fontSize="14">CLUSTERING</text>
                <text x="140" y="130" textAnchor="middle" className="text-sm" fill="#16a34a" fontSize="11">K-means</text>
                <text x="140" y="145" textAnchor="middle" className="text-sm" fill="#16a34a" fontSize="11">Hierarchical</text>
                
                {/* Sous-groupes de clustering */}
                <circle cx="50" cy="200" r="15" fill="#22c55e" stroke="#16a34a"/>
                <circle cx="100" cy="200" r="15" fill="#22c55e" stroke="#16a34a"/>
                <circle cx="140" cy="200" r="15" fill="#22c55e" stroke="#16a34a"/>
                <circle cx="180" cy="200" r="15" fill="#22c55e" stroke="#16a34a"/>
                <text x="115" y="230" textAnchor="middle" className="text-xs" fill="#16a34a">Groupes découverts</text>
              </g>
              
              {/* Réduction de dimension */}
              <g>
                <rect x="500" y="80" width="120" height="80" rx="15" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
                <text x="560" y="105" textAnchor="middle" className="font-semibold" fill="#d97706" fontSize="13">RÉDUCTION</text>
                <text x="560" y="120" textAnchor="middle" className="font-semibold" fill="#d97706" fontSize="13">DIMENSION</text>
                <text x="560" y="135" textAnchor="middle" className="text-sm" fill="#d97706" fontSize="11">PCA</text>
                <text x="560" y="150" textAnchor="middle" className="text-sm" fill="#d97706" fontSize="11">t-SNE</text>
                
                {/* Visualisation 3D vers 2D */}
                <rect x="520" y="180" width="30" height="20" fill="#fbbf24" stroke="#d97706"/>
                <text x="535" y="195" textAnchor="middle" className="text-xs" fill="white">3D</text>
                <path d="M 550 190 L 580 190" stroke="#d97706" strokeWidth="2" markerEnd="url(#orangeArrow)"/>
                <rect x="590" y="185" width="20" height="10" fill="#fbbf24" stroke="#d97706"/>
                <text x="600" y="193" textAnchor="middle" className="text-xs" fill="white">2D</text>
              </g>
              
              {/* Détection d'anomalies */}
              <g>
                <rect x="80" y="350" width="120" height="80" rx="15" fill="#fce7f3" stroke="#be185d" strokeWidth="2"/>
                <text x="140" y="375" textAnchor="middle" className="font-semibold" fill="#be185d" fontSize="13">DÉTECTION</text>
                <text x="140" y="390" textAnchor="middle" className="font-semibold" fill="#be185d" fontSize="13">ANOMALIES</text>
                <text x="140" y="405" textAnchor="middle" className="text-sm" fill="#be185d" fontSize="11">Isolation Forest</text>
                <text x="140" y="420" textAnchor="middle" className="text-sm" fill="#be185d" fontSize="11">One-Class SVM</text>
                
                {/* Points normaux et anomalie */}
                <circle cx="60" cy="320" r="8" fill="#ec4899"/>
                <circle cx="100" cy="325" r="8" fill="#ec4899"/>
                <circle cx="140" cy="318" r="8" fill="#ec4899"/>
                <circle cx="180" cy="322" r="8" fill="#ec4899"/>
                <circle cx="210" cy="300" r="12" fill="#dc2626" stroke="#be185d" strokeWidth="2"/>
                <text x="225" y="305" className="text-xs font-bold" fill="#dc2626">!</text>
              </g>
              
              {/* Association Rules */}
              <g>
                <rect x="500" y="350" width="120" height="80" rx="15" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2"/>
                <text x="560" y="375" textAnchor="middle" className="font-semibold" fill="#4f46e5" fontSize="13">RÈGLES</text>
                <text x="560" y="390" textAnchor="middle" className="font-semibold" fill="#4f46e5" fontSize="13">ASSOCIATION</text>
                <text x="560" y="405" textAnchor="middle" className="text-sm" fill="#4f46e5" fontSize="11">Apriori</text>
                <text x="560" y="420" textAnchor="middle" className="text-sm" fill="#4f46e5" fontSize="11">FP-Growth</text>
                
                {/* Exemple de règle */}
                <text x="560" y="310" textAnchor="middle" className="text-xs" fill="#4f46e5">A + B → C</text>
                <text x="560" y="325" textAnchor="middle" className="text-xs" fill="#4f46e5">(Pain + Beurre → Confiture)</text>
              </g>
              
              {/* Flèches de connexion */}
              <defs>
                <marker id="greenArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#16a34a" />
                </marker>
                <marker id="orangeArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#d97706" />
                </marker>
                <marker id="pinkArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#be185d" />
                </marker>
                <marker id="blueArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5" />
                </marker>
              </defs>
              
              <path d="M 300 200 Q 220 140 200 140" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#greenArrow)"/>
              <path d="M 400 200 Q 480 140 500 140" stroke="#d97706" strokeWidth="2" fill="none" markerEnd="url(#orangeArrow)"/>
              <path d="M 300 300 Q 220 360 200 380" stroke="#be185d" strokeWidth="2" fill="none" markerEnd="url(#pinkArrow)"/>
              <path d="M 400 300 Q 480 360 500 380" stroke="#4f46e5" strokeWidth="2" fill="none" markerEnd="url(#blueArrow)"/>
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Quiz introductif */}
      <QuizCard
        question="Quelle est la principale différence entre l'apprentissage supervisé et non supervisé ?"
        options={[
          "L'apprentissage non supervisé est plus rapide",
          "L'apprentissage non supervisé n'utilise pas de données d'entraînement",
          "L'apprentissage non supervisé ne dispose pas d'étiquettes de réponses correctes",
          "L'apprentissage non supervisé utilise plus d'algorithmes"
        ]}
        correctAnswer={2}
        explanation="Exactement ! L'apprentissage non supervisé travaille avec des données sans étiquettes. Comme un explorateur qui découvre un nouveau territoire sans carte, l'algorithme doit découvrir les structures et motifs cachés par lui-même. C'est ce qui rend cette approche si fascinante et parfois imprévisible !"
        difficulty="facile"
      />

      {/* Contenu repliable sur les applications */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  🌟 Applications Révolutionnaires de l'Apprentissage Non Supervisé
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </Card>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardContent className="pt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-800 mb-3">🏥 Révolutions Médicales</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <Badge className="mb-1 bg-indigo-100 text-indigo-800">Diagnostic</Badge>
                      <p className="text-sm">Détecter des maladies rares dans les scans médicaux</p>
                    </div>
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <Badge className="mb-1 bg-indigo-100 text-indigo-800">Génomique</Badge>
                      <p className="text-sm">Identifier des sous-types de cancer par clustering</p>
                    </div>
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <Badge className="mb-1 bg-indigo-100 text-indigo-800">Épidémiologie</Badge>
                      <p className="text-sm">Traquer la propagation de maladies</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3">💼 Business Intelligence</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-purple-400 pl-4">
                      <Badge className="mb-1 bg-purple-100 text-purple-800">E-commerce</Badge>
                      <p className="text-sm">Systèmes de recommandation personnalisés</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <Badge className="mb-1 bg-purple-100 text-purple-800">Finance</Badge>
                      <p className="text-sm">Détection de fraudes et analyses de risque</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <Badge className="mb-1 bg-purple-100 text-purple-800">Marketing</Badge>
                      <p className="text-sm">Segmentation automatique de clientèle</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-indigo-300">
                <h4 className="font-semibold text-indigo-800 mb-2">🚀 Cas d'Usage Innovants</h4>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <p><strong>🎵 Spotify :</strong> Clustering pour créer des playlists automatiques</p>
                  <p><strong>🛡️ Cybersécurité :</strong> Détection d'intrusions par analyse comportementale</p>
                  <p><strong>🌿 Écologie :</strong> Classification automatique d'espèces animales</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default UnsupervisedIntroSection;
