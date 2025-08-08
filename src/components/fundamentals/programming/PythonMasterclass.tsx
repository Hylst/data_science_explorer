
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Play, BookOpen, Lightbulb } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PythonMasterclass = () => {
  const [activeExercise, setActiveExercise] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  const toggleExercise = (exerciseId: number) => {
    setActiveExercise(activeExercise === exerciseId ? null : exerciseId);
  };

  const markCompleted = (exerciseId: number) => {
    setCompletedExercises(prev => new Set([...prev, exerciseId]));
  };

  const CodeExample = ({ title, code, language = "python" }: { title: string, code: string, language?: string }) => (
    <div className="my-4">
      <h4 className="font-medium mb-2 flex items-center gap-2">
        <Code className="h-4 w-4" />
        {title}
      </h4>
      <div className="bg-gray-900 rounded-md overflow-hidden">
        <div className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-mono flex items-center justify-between">
          <span>{language}</span>
          <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
            <Play className="h-3 w-3 mr-1" />
            Exécuter
          </Button>
        </div>
        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <section id="python-masterclass" className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          🐍 Python : Votre Premier Allié en Data Science
          <Badge className="bg-blue-100 text-blue-800">Cours Complet</Badge>
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-8">
          <h3 className="text-xl font-bold mb-4">🎯 Objectifs de cette masterclass</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Maîtriser les bases de Python</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Manipuler des données avec pandas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm">Créer des visualisations</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="fundamentals" className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
          <TabsTrigger value="fundamentals">🏗️ Fondamentaux</TabsTrigger>
          <TabsTrigger value="pandas">🐼 Pandas</TabsTrigger>
          <TabsTrigger value="visualization">📊 Visualisation</TabsTrigger>
          <TabsTrigger value="ml">🤖 Machine Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="fundamentals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Les Bases : Votre Première Ligne de Code</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseHighlight title="💡 Rappel : Qu'est-ce qu'une variable ?" type="concept">
                <p className="mb-2">
                  Une variable est comme une boîte étiquetée où vous rangez des informations. 
                  En Python, vous n'avez même pas besoin de dire quel type d'objet vous mettez dedans !
                </p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>Analogie :</strong> Si votre cerveau était un entrepôt, les variables seraient 
                  les étagères étiquetées où vous stockez vos souvenirs.
                </div>
              </CourseHighlight>

              <CodeExample 
                title="Variables et types de données"
                code={`# Python comprend automatiquement le type !
nom = "Alice"                    # Chaîne de caractères (string)
age = 28                        # Nombre entier (integer)
taille = 1.65                   # Nombre décimal (float)
est_data_scientist = True       # Booléen (True/False)

# Affichage intelligent
print(f"{nom} a {age} ans et mesure {taille}m")
# Résultat : Alice a 28 ans et mesure 1.65m

# Python devine le type
print(type(nom))        # <class 'str'>
print(type(age))        # <class 'int'>
print(type(taille))     # <class 'float'>`}
              />

              <div className="mt-6">
                <h4 className="font-semibold mb-3">🏃‍♀️ Exercice Pratique #1</h4>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="mb-3">
                    <strong>Défi :</strong> Créez un "profil data scientist" avec vos informations personnelles
                  </p>
                  <Button 
                    onClick={() => toggleExercise(1)}
                    variant="outline"
                    size="sm"
                    className="mb-3"
                  >
                    {activeExercise === 1 ? "Masquer la solution" : "Voir la solution"}
                  </Button>
                  {activeExercise === 1 && (
                    <CodeExample 
                      title="Solution de l'exercice #1"
                      code={`# Créez votre profil
prenom = "Votre prénom"
langages_preferes = ["Python", "SQL", "R"]
annees_experience = 2
specialite = "Machine Learning"
salaire_souhaite = 45000

# Affichage du profil
print("=== MON PROFIL DATA SCIENTIST ===")
print(f"👋 Je m'appelle {prenom}")
print(f"💻 Je maîtrise : {', '.join(langages_preferes)}")
print(f"📈 Expérience : {annees_experience} ans")
print(f"🎯 Spécialité : {specialite}")
print(f"💰 Salaire souhaité : {salaire_souhaite}€")`}
                    />
                  )}
                  <Button 
                    onClick={() => markCompleted(1)}
                    size="sm"
                    variant={completedExercises.has(1) ? "default" : "outline"}
                    className="mt-2"
                  >
                    {completedExercises.has(1) ? "✅ Terminé" : "Marquer comme terminé"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📚 Structures de Données : Vos Outils d'Organisation</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseHighlight title="🎯 Zoom sur : Choisir la bonne structure" type="info">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">📋 Liste (list)</h5>
                    <p className="text-sm">Pour des collections ordonnées et modifiables</p>
                    <code className="text-xs">scores = [85, 92, 78, 96]</code>
                  </div>
                  <div>
                    <h5 className="font-semibold">📖 Dictionnaire (dict)</h5>
                    <p className="text-sm">Pour associer des clés à des valeurs</p>
                    <code className="text-xs">{"student = {'nom': 'Alice', 'note': 95}"}</code>
                  </div>
                </div>
              </CourseHighlight>

              <CodeExample 
                title="Structures de données en action"
                code={`# 1. LISTES : Collections ordonnées
ventes_mensuelles = [15000, 18000, 22000, 17000, 25000]

# Opérations courantes
print(f"Total des ventes : {sum(ventes_mensuelles)}€")
print(f"Moyenne : {sum(ventes_mensuelles) / len(ventes_mensuelles):.0f}€")
print(f"Meilleur mois : {max(ventes_mensuelles)}€")

# 2. DICTIONNAIRES : Données structurées
employe = {
    "nom": "Marie Dupont",
    "poste": "Data Analyst", 
    "salaire": 42000,
    "competences": ["Python", "SQL", "Tableau"]
}

# Accès et modification
print(f"Salaire de {employe['nom']} : {employe['salaire']}€")
employe["salaire"] = 45000  # Augmentation !
employe["competences"].append("Machine Learning")

# 3. COMPRÉHENSIONS DE LISTES : Élégance pythonique
# Au lieu de :
resultats = []
for vente in ventes_mensuelles:
    if vente > 20000:
        resultats.append(vente)

# Écrivez simplement :
bons_mois = [vente for vente in ventes_mensuelles if vente > 20000]
print(f"Mois avec > 20k€ : {bons_mois}")`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pandas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🐼 Pandas : Excel sous Stéroïdes</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <Lightbulb className="h-4 w-4" />
                <AlertDescription>
                  <strong>Analogie :</strong> Si Excel est une calculatrice, pandas est un supercalculateur. 
                  Imaginez pouvoir traiter des millions de lignes aussi facilement qu'une feuille Excel !
                </AlertDescription>
              </Alert>

              <CodeExample 
                title="Votre premier DataFrame"
                code={`import pandas as pd
import numpy as np

# Création d'un DataFrame - comme une table Excel
data = {
    'Nom': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Ville': ['Paris', 'Lyon', 'Marseille', 'Paris', 'Nice'],
    'Salaire': [45000, 52000, 48000, 51000, 49000],
    'Experience': [2, 5, 8, 3, 6]
}

df = pd.DataFrame(data)

# Exploration rapide - Les 5 commandements du data scientist
print("=== EXPLORATION INITIALE ===")
print("📊 Aperçu des données :")
print(df.head())

print("\\n🔍 Informations générales :")
print(df.info())

print("\\n📈 Statistiques descriptives :")
print(df.describe())

print("\\n🎯 Vérification des valeurs manquantes :")
print(df.isnull().sum())

print("\\n🏷️ Types de données :")
print(df.dtypes)`}
              />

              <div className="mt-6">
                <h4 className="font-semibold mb-3">🎯 Exercice Pratique #2</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="mb-3">
                    <strong>Mission :</strong> Analysez les salaires de l'équipe et trouvez des insights !
                  </p>
                  <Button 
                    onClick={() => toggleExercise(2)}
                    variant="outline"
                    size="sm"
                    className="mb-3"
                  >
                    {activeExercise === 2 ? "Masquer la solution" : "Voir la solution"}
                  </Button>
                  {activeExercise === 2 && (
                    <CodeExample 
                      title="Solution : Analyse des salaires"
                      code={`# Suite du DataFrame précédent...

# 1. FILTRAGE : Qui gagne plus de 50k€ ?
hauts_salaires = df[df['Salaire'] > 50000]
print("💰 Employés avec salaire > 50k€ :")
print(hauts_salaires[['Nom', 'Salaire']])

# 2. GROUPEMENT : Salaire moyen par ville
salaire_par_ville = df.groupby('Ville')['Salaire'].mean().round(0)
print("\\n🏙️ Salaire moyen par ville :")
print(salaire_par_ville)

# 3. CORRELATION : Relation âge/salaire/expérience
correlation = df[['Age', 'Salaire', 'Experience']].corr()
print("\\n🔗 Matrice de corrélation :")
print(correlation)

# 4. NOUVELLE COLONNE : Calcul du salaire par année d'expérience
df['Salaire_par_exp'] = df['Salaire'] / df['Experience']
print("\\n📊 Salaire par année d'expérience :")
print(df[['Nom', 'Salaire_par_exp']].sort_values('Salaire_par_exp', ascending=False))`}
                    />
                  )}
                  <Button 
                    onClick={() => markCompleted(2)}
                    size="sm"
                    variant={completedExercises.has(2) ? "default" : "outline"}
                    className="mt-2"
                  >
                    {completedExercises.has(2) ? "✅ Terminé" : "Marquer comme terminé"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visualization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>📊 Visualisation : Faire Parler les Données</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseHighlight title="🎨 Philosophie : Une image vaut mille données" type="concept">
                <p className="mb-3">
                  Votre cerveau traite les images 60 000 fois plus rapidement que le texte ! 
                  Une bonne visualisation peut révéler des patterns invisibles dans un tableau de chiffres.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <strong>Règle d'or :</strong> Vos graphiques doivent raconter une histoire claire en 5 secondes maximum.
                </div>
              </CourseHighlight>

              <CodeExample 
                title="Matplotlib & Seaborn : Vos pinceaux numériques"
                code={`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

# Données d'exemple
df_ventes = pd.DataFrame({
    'Mois': ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    'Ventes': [15000, 18000, 22000, 17000, 25000, 28000],
    'Publicité': [2000, 2500, 3000, 2200, 3500, 4000]
})

# 1. GRAPHIQUE LINÉAIRE : Évolution dans le temps
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(df_ventes['Mois'], df_ventes['Ventes'], 
         marker='o', linewidth=3, color='#2E86C1')
plt.title('📈 Évolution des Ventes', fontsize=14, fontweight='bold')
plt.ylabel('Ventes (€)')
plt.grid(True, alpha=0.3)

# 2. GRAPHIQUE DE CORRÉLATION
plt.subplot(1, 2, 2)
plt.scatter(df_ventes['Publicité'], df_ventes['Ventes'], 
           s=100, color='#E74C3C', alpha=0.7)
plt.title('💰 Publicité vs Ventes', fontsize=14, fontweight='bold')
plt.xlabel('Budget Publicité (€)')
plt.ylabel('Ventes (€)')

# Ligne de tendance
z = np.polyfit(df_ventes['Publicité'], df_ventes['Ventes'], 1)
p = np.poly1d(z)
plt.plot(df_ventes['Publicité'], p(df_ventes['Publicité']), 
         "--", color='gray', alpha=0.8)

plt.tight_layout()
plt.show()

# 3. GRAPHIQUE AVANCÉ avec Seaborn
plt.figure(figsize=(10, 6))
sns.regplot(data=df_ventes, x='Publicité', y='Ventes', 
           scatter_kws={'s': 100}, line_kws={'color': 'red'})
plt.title('🎯 Relation Publicité-Ventes avec Tendance', 
          fontsize=16, fontweight='bold')
plt.show()`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ml" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🤖 Machine Learning : Votre Premier Modèle</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseHighlight title="🧠 Zoom sur : Qu'est-ce que le Machine Learning ?" type="concept">
                <p className="mb-3">
                  Imaginez enseigner à un enfant à reconnaître des chats en lui montrant 1000 photos. 
                  Le Machine Learning fait pareil : il "apprend" des patterns à partir d'exemples.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>1. Apprentissage</strong><br />
                    Le modèle voit des exemples
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <strong>2. Généralisation</strong><br />
                    Il trouve des patterns
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <strong>3. Prédiction</strong><br />
                    Il devine sur du nouveau
                  </div>
                </div>
              </CourseHighlight>

              <CodeExample 
                title="Votre premier modèle prédictif"
                code={`from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd
import numpy as np

# 1. CRÉATION DES DONNÉES
# Simulons la relation entre budget pub et ventes
np.random.seed(42)
budget_pub = np.random.uniform(1000, 5000, 100)
# Les ventes dépendent du budget (avec un peu de bruit)
ventes = budget_pub * 2.5 + np.random.normal(0, 1000, 100)

df_ml = pd.DataFrame({
    'Budget_Publicite': budget_pub,
    'Ventes': ventes
})

print("📊 Aperçu des données :")
print(df_ml.head())

# 2. PRÉPARATION DES DONNÉES
X = df_ml[['Budget_Publicite']]  # Variable explicative
y = df_ml['Ventes']              # Variable à prédire

# Division train/test (70% / 30%)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

print(f"\\n📚 Données d'entraînement : {len(X_train)} exemples")
print(f"🧪 Données de test : {len(X_test)} exemples")

# 3. ENTRAÎNEMENT DU MODÈLE
model = LinearRegression()
model.fit(X_train, y_train)

print(f"\\n🎯 Modèle entraîné !")
print(f"Coefficient : {model.coef_[0]:.2f}")
print(f"Intercept : {model.intercept_:.2f}")
print(f"Équation : Ventes = {model.coef_[0]:.2f} * Budget + {model.intercept_:.2f}")

# 4. PRÉDICTIONS ET ÉVALUATION
y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"\\n📈 Performance du modèle :")
print(f"R² Score : {r2:.3f} ({r2*100:.1f}% de la variance expliquée)")
print(f"MSE : {mse:.0f}")

# 5. PRÉDICTION SUR DE NOUVELLES DONNÉES
nouveaux_budgets = [[3000], [4500], [2000]]
predictions = model.predict(nouveaux_budgets)

print(f"\\n🔮 Prédictions :")
for budget, pred in zip(nouveaux_budgets, predictions):
    print(f"Budget {budget[0]}€ → Ventes prédites : {pred:.0f}€")`}
              />

              <div className="mt-6">
                <h4 className="font-semibold mb-3">🏆 Exercice Final : Votre Modèle Complet</h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="mb-3">
                    <strong>Défi ultime :</strong> Créez un modèle pour prédire les salaires basé sur l'expérience et l'âge !
                  </p>
                  <Button 
                    onClick={() => toggleExercise(3)}
                    variant="outline"
                    size="sm"
                    className="mb-3"
                  >
                    {activeExercise === 3 ? "Masquer la solution" : "Voir la solution complète"}
                  </Button>
                  {activeExercise === 3 && (
                    <CodeExample 
                      title="Solution : Modèle de prédiction de salaires"
                      code={`# PROJET COMPLET : Prédiction de salaires
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# 1. DONNÉES ENRICHIES
np.random.seed(42)
data_salaires = {
    'Experience': np.random.randint(0, 15, 200),
    'Age': np.random.randint(22, 55, 200),
    'Formation': np.random.choice(['Bac+3', 'Bac+5', 'PhD'], 200),
    'Ville': np.random.choice(['Paris', 'Lyon', 'Marseille'], 200)
}

# Calcul réaliste du salaire
base_salaire = 30000
df_salaires = pd.DataFrame(data_salaires)
df_salaires['Salaire'] = (
    base_salaire + 
    df_salaires['Experience'] * 2000 +  # 2k€ par an d'expérience
    (df_salaires['Age'] - 22) * 500 +   # 500€ par an d'âge
    np.where(df_salaires['Formation'] == 'PhD', 10000, 
             np.where(df_salaires['Formation'] == 'Bac+5', 5000, 0)) +
    np.where(df_salaires['Ville'] == 'Paris', 8000, 0) +  # Prime Paris
    np.random.normal(0, 3000, 200)  # Variabilité
)

# 2. ENCODAGE DES VARIABLES CATÉGORIELLES
df_encoded = pd.get_dummies(df_salaires, columns=['Formation', 'Ville'])

# 3. MODÉLISATION AVANCÉE
X = df_encoded.drop('Salaire', axis=1)
y = df_encoded['Salaire']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Random Forest pour capturer les interactions
rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# 4. ÉVALUATION COMPLÈTE
y_pred_rf = rf_model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred_rf)
r2_rf = r2_score(y_test, y_pred_rf)

print(f"🎯 Performance Random Forest :")
print(f"R² Score : {r2_rf:.3f}")
print(f"Erreur moyenne : {mae:.0f}€")

# 5. IMPORTANCE DES VARIABLES
importances = rf_model.feature_importances_
features = X.columns

plt.figure(figsize=(10, 6))
indices = np.argsort(importances)[::-1]
plt.bar(range(len(importances)), importances[indices])
plt.title('🔍 Importance des Variables pour Prédire le Salaire')
plt.xticks(range(len(importances)), [features[i] for i in indices], rotation=45)
plt.tight_layout()
plt.show()

print("\\n🏆 Félicitations ! Vous avez créé votre premier modèle ML complet !")`}
                    />
                  )}
                  <Button 
                    onClick={() => markCompleted(3)}
                    size="sm"
                    variant={completedExercises.has(3) ? "default" : "outline"}
                    className="mt-2"
                  >
                    {completedExercises.has(3) ? "✅ Projet terminé !" : "Valider le projet"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold mb-4">🎉 Récapitulatif de vos accomplissements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">✅ Ce que vous maîtrisez maintenant :</h4>
            <ul className="text-sm space-y-1">
              <li>• Variables, listes et dictionnaires Python</li>
              <li>• Manipulation de données avec pandas</li>
              <li>• Création de visualisations</li>
              <li>• Construction d'un modèle ML</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🚀 Prochaines étapes suggérées :</h4>
            <ul className="text-sm space-y-1">
              <li>• Approfondir NumPy pour le calcul scientifique</li>
              <li>• Explorer d'autres algorithmes ML</li>
              <li>• Apprendre les API et scraping web</li>
              <li>• Découvrir les frameworks deep learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PythonMasterclass;
