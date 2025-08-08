
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Button } from "@/components/ui/button";

const LanguageComparison = () => {
  const [selectedComparison, setSelectedComparison] = useState("overview");

  const languageData = [
    { 
      name: "Python", 
      popularity: 75, 
      learningCurve: 85, 
      jobMarket: 90, 
      performance: 65,
      ecosystem: 95,
      color: "#3776ab"
    },
    { 
      name: "R", 
      popularity: 45, 
      learningCurve: 60, 
      jobMarket: 65, 
      performance: 55,
      ecosystem: 85,
      color: "#276DC3"
    },
    { 
      name: "SQL", 
      popularity: 90, 
      learningCurve: 75, 
      jobMarket: 95, 
      performance: 80,
      ecosystem: 70,
      color: "#f29111"
    },
    { 
      name: "Julia", 
      popularity: 15, 
      learningCurve: 45, 
      jobMarket: 25, 
      performance: 95,
      ecosystem: 40,
      color: "#9558b2"
    }
  ];

  const useCaseData = [
    { useCase: "Débutant complet", Python: 9, R: 6, SQL: 8, Julia: 4 },
    { useCase: "Analyse statistique", Python: 8, R: 10, SQL: 5, Julia: 8 },
    { useCase: "Big Data", Python: 8, R: 6, SQL: 9, Julia: 7 },
    { useCase: "Machine Learning", Python: 10, R: 7, SQL: 3, Julia: 8 },
    { useCase: "Visualisation", Python: 8, R: 10, SQL: 2, Julia: 6 },
    { useCase: "Performance", Python: 6, R: 4, SQL: 8, Julia: 10 }
  ];

  const CodeComparison = ({ title, pythonCode, rCode, sqlCode }: { title: string, pythonCode: string, rCode: string, sqlCode: string }) => (
    <div className="my-6">
      <h4 className="font-semibold mb-4">{title}</h4>
      <Tabs defaultValue="python" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="python">🐍 Python</TabsTrigger>
          <TabsTrigger value="r">📊 R</TabsTrigger>
          <TabsTrigger value="sql">🗃️ SQL</TabsTrigger>
        </TabsList>
        <TabsContent value="python">
          <div className="bg-gray-900 rounded-md overflow-hidden">
            <div className="px-4 py-2 bg-blue-800 text-white text-sm">Python</div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto"><code>{pythonCode}</code></pre>
          </div>
        </TabsContent>
        <TabsContent value="r">
          <div className="bg-gray-900 rounded-md overflow-hidden">
            <div className="px-4 py-2 bg-blue-600 text-white text-sm">R</div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto"><code>{rCode}</code></pre>
          </div>
        </TabsContent>
        <TabsContent value="sql">
          <div className="bg-gray-900 rounded-md overflow-hidden">
            <div className="px-4 py-2 bg-amber-600 text-white text-sm">SQL</div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto"><code>{sqlCode}</code></pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <section id="language-comparison" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">⚔️ Bataille des Langages : Qui Choisir ?</h2>
      
      <CourseHighlight title="🎭 Analogie : Les langages comme des super-héros" type="concept">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="mb-2">
              <strong>Python = Spider-Man :</strong> Polyvalent, accessible, populaire. 
              Peut faire un peu de tout, parfait pour débuter.
            </p>
            <p className="mb-2">
              <strong>R = Doctor Strange :</strong> Mystique mais puissant. 
              Maître des statistiques et des sorts... euh, des analyses complexes !
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong>SQL = Captain America :</strong> Fiable, indispensable, toujours là. 
              Le fondement de toute équipe de data science.
            </p>
            <p>
              <strong>Julia = Flash :</strong> Super rapide mais moins connu. 
              Parfait quand la vitesse est cruciale.
            </p>
          </div>
        </div>
      </CourseHighlight>

      <Tabs value={selectedComparison} onValueChange={setSelectedComparison} className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
          <TabsTrigger value="overview">📊 Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="code-comparison">💻 Comparaison code</TabsTrigger>
          <TabsTrigger value="use-cases">🎯 Cas d'usage</TabsTrigger>
          <TabsTrigger value="decision-guide">🧭 Guide de choix</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>📈 Popularité et Écosystème</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={languageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
                      <Bar dataKey="popularity" name="Popularité" fill="#3B82F6" />
                      <Bar dataKey="ecosystem" name="Écosystème" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🎯 Profil Radar des Langages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={languageData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis angle={0} domain={[0, 100]} tick={false} />
                      <Radar name="Popularité" dataKey="popularity" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
                      <Radar name="Facilité" dataKey="learningCurve" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
                      <Radar name="Performance" dataKey="performance" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languageData.map((lang) => (
              <Card key={lang.name} className="border-l-4" style={{ borderLeftColor: lang.color }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {lang.name}
                    <Badge style={{ backgroundColor: lang.color, color: 'white' }}>
                      {lang.popularity}% pop.
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Facilité d'apprentissage:</span>
                      <span className="font-semibold">{lang.learningCurve}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Marché de l'emploi:</span>
                      <span className="font-semibold">{lang.jobMarket}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Performance:</span>
                      <span className="font-semibold">{lang.performance}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Écosystème:</span>
                      <span className="font-semibold">{lang.ecosystem}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="code-comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🔍 Même Tâche, Syntaxes Différentes</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeComparison 
                title="📊 Calcul de statistiques descriptives"
                pythonCode={`import pandas as pd

# Chargement des données
df = pd.read_csv('ventes.csv')

# Statistiques descriptives
stats = df['prix'].describe()
print(f"Moyenne: {df['prix'].mean():.2f}€")
print(f"Médiane: {df['prix'].median():.2f}€")
print(f"Écart-type: {df['prix'].std():.2f}€")

# Groupement par catégorie
moyenne_par_cat = df.groupby('categorie')['prix'].mean()
print(moyenne_par_cat)`}
                rCode={`library(dplyr)

# Chargement des données
df <- read.csv('ventes.csv')

# Statistiques descriptives
summary(df$prix)
cat("Moyenne:", mean(df$prix), "€\\n")
cat("Médiane:", median(df$prix), "€\\n")
cat("Écart-type:", sd(df$prix), "€\\n")

# Groupement par catégorie
moyenne_par_cat <- df %>%
  group_by(categorie) %>%
  summarise(prix_moyen = mean(prix))
print(moyenne_par_cat)`}
                sqlCode={`-- Statistiques descriptives avec SQL
SELECT 
    AVG(prix) as prix_moyen,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY prix) as mediane,
    STDDEV(prix) as ecart_type,
    MIN(prix) as prix_min,
    MAX(prix) as prix_max,
    COUNT(*) as nb_ventes
FROM ventes;

-- Moyenne par catégorie
SELECT 
    categorie,
    AVG(prix) as prix_moyen,
    COUNT(*) as nb_ventes
FROM ventes
GROUP BY categorie
ORDER BY prix_moyen DESC;`}
              />

              <CodeComparison 
                title="📈 Création d'un graphique"
                pythonCode={`import matplotlib.pyplot as plt
import seaborn as sns

# Graphique simple
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='categorie', y='prix')
plt.title('Distribution des Prix par Catégorie')
plt.xticks(rotation=45)
plt.show()

# Histogramme
plt.figure(figsize=(8, 5))
plt.hist(df['prix'], bins=20, alpha=0.7, color='skyblue')
plt.title('Distribution des Prix')
plt.xlabel('Prix (€)')
plt.ylabel('Fréquence')
plt.show()`}
                rCode={`library(ggplot2)

# Graphique avec ggplot2
ggplot(df, aes(x = categorie, y = prix)) +
  geom_boxplot(fill = "skyblue", alpha = 0.7) +
  theme_minimal() +
  labs(title = "Distribution des Prix par Catégorie",
       x = "Catégorie", y = "Prix (€)") +
  theme(axis.text.x = element_text(angle = 45))

# Histogramme
ggplot(df, aes(x = prix)) +
  geom_histogram(bins = 20, fill = "skyblue", alpha = 0.7) +
  theme_minimal() +
  labs(title = "Distribution des Prix",
       x = "Prix (€)", y = "Fréquence")`}
                sqlCode={`-- SQL ne fait pas de graphiques directement
-- Mais on peut préparer les données :

-- Données pour histogramme
SELECT 
    FLOOR(prix/100)*100 as tranche_prix,
    COUNT(*) as frequence
FROM ventes
GROUP BY FLOOR(prix/100)*100
ORDER BY tranche_prix;

-- Données pour boxplot (approximation)
SELECT 
    categorie,
    MIN(prix) as q0,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY prix) as q1,
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY prix) as mediane,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY prix) as q3,
    MAX(prix) as q4
FROM ventes
GROUP BY categorie;`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="use-cases" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Quel Langage pour Quel Besoin ?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={useCaseData} layout="horizontal" margin={{ left: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 10]} />
                    <YAxis dataKey="useCase" type="category" width={90} />
                    <Tooltip />
                    <Bar dataKey="Python" fill="#3776ab" name="Python" />
                    <Bar dataKey="R" fill="#276DC3" name="R" />
                    <Bar dataKey="SQL" fill="#f29111" name="SQL" />
                    <Bar dataKey="Julia" fill="#9558b2" name="Julia" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">🥇 Python domine quand :</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Vous débutez en programmation</li>
                    <li>Projets de Machine Learning</li>
                    <li>Automatisation et scripts</li>
                    <li>Intégration avec d'autres systèmes</li>
                    <li>Prototypage rapide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">📊 R excelle pour :</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Analyses statistiques avancées</li>
                    <li>Recherche académique</li>
                    <li>Visualisations sophistiquées</li>
                    <li>Tests statistiques complexes</li>
                    <li>Rapports automatisés (R Markdown)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-amber-700">🗃️ SQL indispensable pour :</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Extraction de données</li>
                    <li>Manipulation de gros volumes</li>
                    <li>Agrégations complexes</li>
                    <li>Jointures entre tables</li>
                    <li>Optimisation des requêtes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">⚡ Julia pour :</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li>Calculs scientifiques intensifs</li>
                    <li>Simulations numériques</li>
                    <li>Algorithmes haute performance</li>
                    <li>Parallélisation native</li>
                    <li>Recherche en IA avancée</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="decision-guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🧭 Guide de Décision Personnalisé</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseHighlight title="🎯 Questionnaire : Trouvez VOTRE langage idéal" type="question">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">1. Quel est votre niveau en programmation ?</h5>
                    <div className="text-sm space-y-1">
                      <p>• <strong>Débutant complet :</strong> Python 🐍</p>
                      <p>• <strong>Quelques bases :</strong> Python ou R selon votre domaine 📊</p>
                      <p>• <strong>Expérimenté :</strong> Julia pour la performance ⚡</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">2. Dans quel secteur travaillez-vous ?</h5>
                    <div className="text-sm space-y-1">
                      <p>• <strong>Tech/Startup :</strong> Python + SQL 🚀</p>
                      <p>• <strong>Recherche/Académique :</strong> R + SQL 🎓</p>
                      <p>• <strong>Finance/Banque :</strong> Python + SQL + R 💰</p>
                      <p>• <strong>Sciences/Ingénierie :</strong> Julia + Python 🔬</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">3. Quel type de projets vous intéresse ?</h5>
                    <div className="text-sm space-y-1">
                      <p>• <strong>Applications web/mobile :</strong> Python 📱</p>
                      <p>• <strong>Analyses statistiques :</strong> R 📈</p>
                      <p>• <strong>Machine Learning :</strong> Python 🤖</p>
                      <p>• <strong>Big Data :</strong> SQL + Python 🗄️</p>
                      <p>• <strong>Calcul scientifique :</strong> Julia ⚡</p>
                    </div>
                  </div>
                </div>
              </CourseHighlight>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">🛤️ Parcours d'Apprentissage Recommandés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-blue-700">🎯 Parcours Débutant (6 mois)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800">Mois 1-2</Badge>
                          <span>Python basics + pandas</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800">Mois 3-4</Badge>
                          <span>SQL + matplotlib/seaborn</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-100 text-blue-800">Mois 5-6</Badge>
                          <span>scikit-learn + projet complet</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="text-purple-700">🚀 Parcours Avancé (3 mois)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-100 text-purple-800">Mois 1</Badge>
                          <span>Spécialisation (R pour stats, Julia pour perf)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-100 text-purple-800">Mois 2</Badge>
                          <span>Frameworks avancés + optimisation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-100 text-purple-800">Mois 3</Badge>
                          <span>Déploiement + bonnes pratiques</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-3">💡 Conseil d'Expert</h4>
                <p className="text-sm mb-3">
                  <strong>Ne tombez pas dans le piège du "langage parfait" !</strong> 
                  Les meilleurs data scientists sont polyvalents. Commencez par un langage, 
                  maîtrisez-le bien, puis ajoutez les autres selon vos besoins.
                </p>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-xs">
                    <strong>Règle des 80/20 :</strong> 80% de votre temps sera passé sur un langage principal, 
                    20% sur les langages complémentaires. Choisissez bien votre 80% !
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default LanguageComparison;
