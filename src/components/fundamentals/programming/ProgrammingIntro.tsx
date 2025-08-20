
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Target, Zap, Database, Globe, Cpu } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { useState, useEffect } from "react";

/**
 * Enhanced Programming Introduction Component with ES6 features
 * Provides comprehensive overview of programming languages for data science
 * Features interactive elements and modern JavaScript concepts
 */
const ProgrammingIntro = () => {
  // Modern ES6 state management with hooks
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  // ES6 Array of objects with enhanced language data
  const programmingLanguages = [
    {
      id: 'python',
      name: 'Python',
      emoji: '🐍',
      description: 'Le couteau suisse polyvalent',
      badge: { text: 'Débutant-friendly', color: 'bg-blue-100 text-blue-800' },
      popularity: 95,
      useCases: ['Machine Learning', 'Data Analysis', 'Web Scraping', 'Automation'],
      pros: ['Syntaxe simple', 'Écosystème riche', 'Communauté active'],
      cons: ['Performance limitée', 'GIL pour le multithreading']
    },
    {
      id: 'r',
      name: 'R',
      emoji: '📊',
      description: 'Le statisticien expert',
      badge: { text: 'Statistiques', color: 'bg-purple-100 text-purple-800' },
      popularity: 75,
      useCases: ['Statistical Analysis', 'Data Visualization', 'Bioinformatics', 'Research'],
      pros: ['Excellent pour stats', 'Visualisations avancées', 'Packages spécialisés'],
      cons: ['Courbe d\'apprentissage', 'Syntaxe parfois complexe']
    },
    {
      id: 'sql',
      name: 'SQL',
      emoji: '🗃️',
      description: 'Le maître des bases de données',
      badge: { text: 'Essentiel', color: 'bg-amber-100 text-amber-800' },
      popularity: 98,
      useCases: ['Database Queries', 'Data Extraction', 'ETL Processes', 'Reporting'],
      pros: ['Standard universel', 'Performance optimisée', 'Déclaratif'],
      cons: ['Limité aux données relationnelles', 'Variations entre SGBD']
    },
    {
      id: 'julia',
      name: 'Julia',
      emoji: '⚡',
      description: 'Le sprinter performant',
      badge: { text: 'Haute performance', color: 'bg-green-100 text-green-800' },
      popularity: 45,
      useCases: ['Scientific Computing', 'Numerical Analysis', 'HPC', 'Finance'],
      pros: ['Performance native', 'Syntaxe mathématique', 'Parallélisme'],
      cons: ['Écosystème jeune', 'Communauté plus petite']
    }
  ];

  // ES6 useEffect hook for animations
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // ES6 Arrow function with destructuring
  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(selectedLanguage === languageId ? null : languageId);
  };

  // ES6 Template literals and array methods
  const getSelectedLanguageDetails = () => {
    if (!selectedLanguage) return null;
    return programmingLanguages.find(lang => lang.id === selectedLanguage);
  };
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

        {/* Enhanced interactive language grid using ES6 map and modern features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programmingLanguages.map((language, index) => {
            const isSelected = selectedLanguage === language.id;
            const isAnimated = animationStep === index;
            
            return (
              <div 
                key={language.id}
                className={`
                  bg-white p-6 rounded-lg shadow-sm border transition-all duration-300 cursor-pointer
                  ${isSelected ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-100 hover:border-gray-300'}
                  ${isAnimated ? 'animate-pulse' : ''}
                `}
                onClick={() => handleLanguageSelect(language.id)}
              >
                <div className="text-3xl mb-3 transition-transform duration-200 hover:scale-110">
                  {language.emoji}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{language.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{language.description}</p>
                <Badge className={`mt-2 ${language.badge.color}`}>
                  {language.badge.text}
                </Badge>
                
                {/* Popularity indicator */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Popularité</span>
                    <span>{language.popularity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${language.popularity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced language details section using ES6 conditional rendering */}
        {(() => {
          const selectedLang = getSelectedLanguageDetails();
          if (!selectedLang) return null;
          
          return (
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{selectedLang.emoji}</span>
                Détails sur {selectedLang.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                    <Zap className="h-4 w-4" /> Cas d'usage
                  </h4>
                  <ul className="space-y-1">
                    {selectedLang.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-gray-600">• {useCase}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-1">
                    <Target className="h-4 w-4" /> Avantages
                  </h4>
                  <ul className="space-y-1">
                    {selectedLang.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-gray-600">✅ {pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-1">
                    <Brain className="h-4 w-4" /> Défis
                  </h4>
                  <ul className="space-y-1">
                    {selectedLang.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-gray-600">⚠️ {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })()}


        {/* Enhanced knowledge section with ES6 features */}
        <CourseHighlight title="💡 Le saviez-vous ?" type="concept">
          <div className="space-y-4">
            <p>
              <strong>En 2024, Python était utilisé par 72% des data scientists dans le monde !</strong> 
              Mais ce n'est pas juste une question de popularité : Python a été conçu avec une philosophie 
              de simplicité et de lisibilité qui en fait le langage parfait pour débuter.
            </p>
            
            {/* ES6 Array with map for fun facts */}
            {[
              {
                title: "Origine du nom Python",
                content: "Python doit son nom aux 'Monty Python's Flying Circus', pas au serpent ! Son créateur, Guido van Rossum, voulait un nom court et mystérieux.",
                icon: "🐍"
              },
              {
                title: "Performance moderne",
                content: "Avec PyPy et les nouvelles optimisations, Python peut être jusqu'à 7x plus rapide qu'avant, rivalisant avec des langages compilés pour certaines tâches.",
                icon: "⚡"
              },
              {
                title: "Écosystème en croissance",
                content: "Plus de 400,000 packages disponibles sur PyPI, avec des ajouts quotidiens dans l'IA, la blockchain, et l'IoT.",
                icon: "📦"
              }
            ].map((fact, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{fact.icon}</span>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-1">{fact.title}</h4>
                    <p className="text-sm text-gray-700">{fact.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CourseHighlight>

        {/* Enhanced benefits section with ES6 destructuring and modern features */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            Pourquoi apprendre à programmer en Data Science ?
          </h3>
          
          {/* ES6 Array of benefits with destructuring */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Automatisation",
                description: "Transformez 8 heures de travail manuel en 8 minutes d'exécution automatique. La programmation vous libère des tâches répétitives pour vous concentrer sur l'analyse.",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                examples: ["Scripts ETL", "Rapports automatiques", "Monitoring"]
              },
              {
                icon: Brain,
                title: "Reproductibilité",
                description: "Votre code est comme une recette : quelqu'un d'autre peut suivre exactement vos étapes et obtenir les mêmes résultats. C'est la base de la science !",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                examples: ["Version control", "Documentation", "Tests unitaires"]
              },
              {
                icon: Database,
                title: "Scalabilité",
                description: "Gérez des téraoctets de données avec la même facilité qu'un fichier Excel. La programmation vous permet de passer à l'échelle sans effort.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                examples: ["Big Data", "Cloud computing", "Parallélisation"]
              },
              {
                icon: Globe,
                title: "Collaboration",
                description: "Partagez vos analyses avec des équipes mondiales. Git, notebooks, et APIs facilitent le travail collaboratif à distance.",
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
                examples: ["GitHub", "Jupyter Hub", "API REST"]
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Créez de nouveaux algorithmes, explorez des techniques cutting-edge, et contribuez à l'avancement de la data science.",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200",
                examples: ["ML custom", "Visualisations", "Prototypage"]
              },
              {
                icon: Cpu,
                title: "Efficacité",
                description: "Optimisez les performances, réduisez les coûts de calcul, et maximisez l'utilisation des ressources disponibles.",
                color: "text-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
                examples: ["Optimisation", "Caching", "Profiling"]
              }
            ].map(({ icon: Icon, title, description, color, bgColor, borderColor, examples }, index) => (
              <Card key={index} className={`${bgColor} ${borderColor} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-lg ${color}`}>
                    <Icon className="h-5 w-5" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{description}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-gray-600">Exemples :</p>
                    <div className="flex flex-wrap gap-1">
                      {examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Modern ES6 learning path section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl border border-indigo-200">
            <h4 className="text-lg font-bold mb-4 text-indigo-800">🚀 Votre parcours d'apprentissage recommandé</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 1, title: "Bases Python", duration: "2-3 semaines", topics: ["Syntaxe", "Variables", "Fonctions"] },
                { step: 2, title: "Data Manipulation", duration: "3-4 semaines", topics: ["Pandas", "NumPy", "Matplotlib"] },
                { step: 3, title: "Machine Learning", duration: "4-6 semaines", topics: ["Scikit-learn", "TensorFlow", "PyTorch"] },
                { step: 4, title: "Production", duration: "2-3 semaines", topics: ["APIs", "Docker", "Cloud"] }
              ].map(({ step, title, duration, topics }) => (
                <div key={step} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {step}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">{title}</h5>
                  <p className="text-xs text-gray-600 mb-2">{duration}</p>
                  <div className="space-y-1">
                    {topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mr-1">{topic}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingIntro;
