
import React from "react";
import { EducationalCard, ExerciseCard, QuizCard } from "@/components/ui/educational-cards";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Play, Copy, Download, ExternalLink, Lightbulb, Target, Zap } from "lucide-react";

const PracticalExercisesSection = () => {
  const [activeCode, setActiveCode] = React.useState(0);
  const [copiedCode, setCopiedCode] = React.useState<number | null>(null);

  const codeExamples = [
    {
      title: "Classification avec Scikit-learn",
      description: "Exemple complet de classification d'iris avec analyse détaillée",
      difficulty: "Débutant",
      estimatedTime: "20 min",
      code: `# Classification des fleurs d'Iris - Exemple complet et commenté
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler

# 1. 📊 CHARGEMENT ET EXPLORATION DES DONNÉES
print("🌸 Analyse du dataset Iris")
print("=" * 50)

iris = load_iris()
X, y = iris.data, iris.target

# Création d'un DataFrame pour faciliter l'analyse
df = pd.DataFrame(X, columns=iris.feature_names)
df['target'] = y
df['species'] = df['target'].map({0: 'setosa', 1: 'versicolor', 2: 'virginica'})

print(f"📈 Forme du dataset: {df.shape}")
print(f"🎯 Classes: {iris.target_names}")
print(f"📊 Répartition des classes:")
print(df['species'].value_counts())

# Statistiques descriptives
print("\\n📊 Statistiques descriptives:")
print(df.describe())

# 2. 🎨 VISUALISATION EXPLORATOIRE
plt.figure(figsize=(15, 10))

# Distribution des features
plt.subplot(2, 3, 1)
df[iris.feature_names].boxplot()
plt.title('📊 Distribution des caractéristiques')
plt.xticks(rotation=45)

# Matrice de corrélation
plt.subplot(2, 3, 2)
correlation_matrix = df[iris.feature_names].corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('🔗 Matrice de corrélation')

# Pairplot pour visualiser les relations
plt.subplot(2, 3, 3)
# Note: en pratique, utilisez sns.pairplot(df, hue='species')
plt.scatter(df['sepal length (cm)'], df['petal length (cm)'], c=df['target'], cmap='viridis')
plt.xlabel('Longueur sépale (cm)')
plt.ylabel('Longueur pétale (cm)')
plt.title('🌺 Relation longueur sépale vs pétale')

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION DES DONNÉES
print("\\n⚙️ Préparation des données")
print("=" * 30)

# Division stratifiée pour garder la proportion des classes
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"📈 Taille entraînement: {X_train.shape[0]} échantillons")
print(f"📊 Taille test: {X_test.shape[0]} échantillons")

# Standardisation des données (importante pour SVM et Logistic Regression)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. 🤖 COMPARAISON DE PLUSIEURS MODÈLES
print("\\n🤖 Comparaison des modèles")
print("=" * 35)

models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Logistic Regression': LogisticRegression(random_state=42, max_iter=1000),
    'SVM': SVC(random_state=42)
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    # Utiliser les données standardisées pour Logistic Regression et SVM
    if name in ['Logistic Regression', 'SVM']:
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_test_scaled)
        # Validation croisée
        cv_scores = cross_val_score(model, X_train_scaled, y_train, cv=5)
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        cv_scores = cross_val_score(model, X_train, y_train, cv=5)
    
    # Métriques
    accuracy = accuracy_score(y_test, y_pred)
    
    results[name] = {
        'model': model,
        'accuracy': accuracy,
        'cv_mean': cv_scores.mean(),
        'cv_std': cv_scores.std(),
        'predictions': y_pred
    }
    
    print(f"✅ Précision test: {accuracy:.3f}")
    print(f"📊 CV Score: {cv_scores.mean():.3f} (+/- {cv_scores.std() * 2:.3f})")

# 5. 🏆 SÉLECTION DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['accuracy'])
best_model = results[best_model_name]['model']

print(f"\\n🏆 Meilleur modèle: {best_model_name}")
print(f"🎯 Précision: {results[best_model_name]['accuracy']:.3f}")

# 6. 📊 ANALYSE DÉTAILLÉE DU MEILLEUR MODÈLE
print(f"\\n📊 Analyse détaillée - {best_model_name}")
print("=" * 45)

# Rapport de classification détaillé
y_pred_best = results[best_model_name]['predictions']
print("\\n📋 Rapport de classification:")
print(classification_report(y_test, y_pred_best, target_names=iris.target_names))

# Matrice de confusion
cm = confusion_matrix(y_test, y_pred_best)
print("\\n🎯 Matrice de confusion:")
print(cm)

# Visualisation de la matrice de confusion
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=iris.target_names, 
            yticklabels=iris.target_names)
plt.title(f'Matrice de confusion - {best_model_name}')
plt.ylabel('Vraie classe')
plt.xlabel('Classe prédite')
plt.show()

# 7. 🔮 PRÉDICTIONS SUR DE NOUVEAUX EXEMPLES
print("\\n🔮 Test sur de nouveaux exemples")
print("=" * 40)

# Exemples de nouvelles fleurs (features: sepal_length, sepal_width, petal_length, petal_width)
nouvelles_fleurs = [
    [5.1, 3.5, 1.4, 0.2],  # Ressemble à setosa
    [6.2, 2.9, 4.3, 1.3],  # Ressemble à versicolor  
    [7.3, 2.9, 6.3, 1.8]   # Ressemble à virginica
]

for i, fleur in enumerate(nouvelles_fleurs):
    if best_model_name in ['Logistic Regression', 'SVM']:
        fleur_scaled = scaler.transform([fleur])
        prediction = best_model.predict(fleur_scaled)[0]
        probabilities = best_model.predict_proba(fleur_scaled)[0] if hasattr(best_model, 'predict_proba') else None
    else:
        prediction = best_model.predict([fleur])[0]
        probabilities = best_model.predict_proba([fleur])[0]
    
    espece_predite = iris.target_names[prediction]
    
    print(f"\\n🌸 Fleur {i+1}: {fleur}")
    print(f"🎯 Prédiction: {espece_predite}")
    
    if probabilities is not None:
        print("📊 Probabilités:")
        for j, (espece, prob) in enumerate(zip(iris.target_names, probabilities)):
            print(f"   {espece}: {prob:.3f} ({prob*100:.1f}%)")

# 8. 💡 IMPORTANCE DES FEATURES (si Random Forest est le meilleur)
if best_model_name == 'Random Forest':
    print("\\n💡 Importance des caractéristiques")
    print("=" * 40)
    
    feature_importance = pd.DataFrame({
        'feature': iris.feature_names,
        'importance': best_model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    print(feature_importance)
    
    # Visualisation
    plt.figure(figsize=(10, 6))
    plt.barh(feature_importance['feature'], feature_importance['importance'])
    plt.title('🎯 Importance des caractéristiques')
    plt.xlabel('Importance')
    plt.tight_layout()
    plt.show()

print("\\n✅ Analyse terminée ! Votre modèle est prêt à classifier de nouvelles fleurs 🌸")`,
      language: "python",
      outputs: [
        "Précision finale: 96.7%",
        "Meilleur modèle: Random Forest",
        "Features importantes: petal length > petal width > sepal length"
      ]
    },
    {
      title: "Régression avec visualisation avancée",
      description: "Prédiction de prix immobiliers avec analyse complète et visualisations",
      difficulty: "Intermédiaire",
      estimatedTime: "35 min",
      code: `# Régression pour prédire les prix immobiliers - Analyse complète
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from sklearn.pipeline import Pipeline
import warnings
warnings.filterwarnings('ignore')

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

print("🏠 PRÉDICTION DE PRIX IMMOBILIERS")
print("=" * 50)

# 1. 🎲 GÉNÉRATION DE DONNÉES RÉALISTES
print("\\n📊 Génération du dataset...")
np.random.seed(42)
n_samples = 2000

# Variables explicatives avec corrélations réalistes
surface = np.random.normal(120, 40, n_samples)
surface = np.clip(surface, 30, 300)  # Limiter les valeurs aberrantes

chambres = np.random.poisson(3, n_samples)
chambres = np.clip(chambres, 1, 8)

# Âge avec distribution plus réaliste
age = np.random.exponential(15, n_samples)
age = np.clip(age, 0, 100)

# Localisation (score de 1 à 10)
localisation = np.random.choice([1,2,3,4,5,6,7,8,9,10], n_samples, 
                               p=[0.05,0.08,0.12,0.15,0.2,0.15,0.12,0.08,0.03,0.02])

# Étage (0 = RDC, puis étages)
etage = np.random.choice(range(0, 20), n_samples, 
                        p=[0.3] + [0.7/19]*19)

# Garage (binaire)
garage = np.random.choice([0, 1], n_samples, p=[0.4, 0.6])

# Formule réaliste pour le prix avec interactions
prix_base = (
    surface * 2500 +                    # 2500€/m²
    chambres * 12000 +                  # Bonus par chambre
    localisation * 8000 +               # Impact localisation
    garage * 15000 +                    # Bonus garage
    (etage > 0) * 5000 +               # Bonus étage
    -age * 800                          # Dépréciation
)

# Ajout d'interactions et de non-linéarités
prix_interactions = (
    surface * localisation * 30 +       # Interaction surface-localisation
    (surface > 150) * 20000 +           # Bonus grandes surfaces
    (age > 50) * -15000 +               # Malus vieilles constructions
    np.random.normal(0, 25000, n_samples)  # Bruit réaliste
)

prix = prix_base + prix_interactions
prix = np.clip(prix, 50000, 800000)  # Prix réalistes

# Création du DataFrame
df = pd.DataFrame({
    'surface': surface,
    'chambres': chambres,
    'age': age,
    'localisation': localisation,
    'etage': etage,
    'garage': garage,
    'prix': prix
})

print(f"✅ Dataset créé: {df.shape[0]} biens immobiliers")
print(f"💰 Prix moyen: {df['prix'].mean():,.0f}€")
print(f"📊 Prix médian: {df['prix'].median():,.0f}€")

# 2. 🔍 ANALYSE EXPLORATOIRE APPROFONDIE
print("\\n🔍 Analyse exploratoire des données")
print("=" * 40)

# Statistiques descriptives
print("📊 Statistiques descriptives:")
print(df.describe().round(2))

# Vérification des valeurs manquantes
print(f"\\n❌ Valeurs manquantes: {df.isnull().sum().sum()}")

# Création de nouvelles features
df['prix_par_m2'] = df['prix'] / df['surface']
df['surface_par_chambre'] = df['surface'] / df['chambres']

# Visualisations complètes
fig, axes = plt.subplots(3, 3, figsize=(20, 18))
fig.suptitle('🏠 Analyse Exploratoire Complète du Marché Immobilier', fontsize=16, fontweight='bold')

# Distribution des prix
axes[0,0].hist(df['prix'], bins=50, alpha=0.7, color='skyblue', edgecolor='black')
axes[0,0].set_title('📊 Distribution des Prix')
axes[0,0].set_xlabel('Prix (€)')
axes[0,0].set_ylabel('Fréquence')

# Prix vs Surface avec régression
axes[0,1].scatter(df['surface'], df['prix'], alpha=0.6, color='coral')
z = np.polyfit(df['surface'], df['prix'], 1)
p = np.poly1d(z)
axes[0,1].plot(df['surface'], p(df['surface']), "r--", alpha=0.8, linewidth=2)
axes[0,1].set_title('🏠 Prix vs Surface')
axes[0,1].set_xlabel('Surface (m²)')
axes[0,1].set_ylabel('Prix (€)')

# Prix par nombre de chambres
df.boxplot(column='prix', by='chambres', ax=axes[0,2])
axes[0,2].set_title('💰 Prix par Nombre de Chambres')
axes[0,2].set_xlabel('Nombre de chambres')

# Impact de l'âge
axes[1,0].scatter(df['age'], df['prix'], alpha=0.6, color='green')
axes[1,0].set_title('📅 Impact de l\\'Âge sur le Prix')
axes[1,0].set_xlabel('Âge (années)')
axes[1,0].set_ylabel('Prix (€)')

# Impact localisation
prix_par_localisation = df.groupby('localisation')['prix'].mean()
axes[1,1].bar(prix_par_localisation.index, prix_par_localisation.values, color='purple', alpha=0.7)
axes[1,1].set_title('🌍 Prix Moyen par Score de Localisation')
axes[1,1].set_xlabel('Score Localisation')
axes[1,1].set_ylabel('Prix Moyen (€)')

# Matrice de corrélation
correlation_matrix = df.corr()
im = axes[1,2].imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
axes[1,2].set_xticks(range(len(correlation_matrix.columns)))
axes[1,2].set_yticks(range(len(correlation_matrix.columns)))
axes[1,2].set_xticklabels(correlation_matrix.columns, rotation=45)
axes[1,2].set_yticklabels(correlation_matrix.columns)
axes[1,2].set_title('🔗 Matrice de Corrélation')

# Ajout des valeurs dans la matrice
for i in range(len(correlation_matrix.columns)):
    for j in range(len(correlation_matrix.columns)):
        axes[1,2].text(j, i, f'{correlation_matrix.iloc[i, j]:.2f}', 
                      ha='center', va='center', fontsize=8)

# Prix par m² selon localisation
axes[2,0].scatter(df['localisation'], df['prix_par_m2'], alpha=0.6, color='orange')
axes[2,0].set_title('💎 Prix au m² selon Localisation')
axes[2,0].set_xlabel('Score Localisation')
axes[2,0].set_ylabel('Prix/m² (€)')

# Impact garage
prix_avec_sans_garage = df.groupby('garage')['prix'].mean()
axes[2,1].bar(['Sans garage', 'Avec garage'], prix_avec_sans_garage.values, 
             color=['lightcoral', 'lightgreen'], alpha=0.8)
axes[2,1].set_title('🚗 Impact du Garage')
axes[2,1].set_ylabel('Prix Moyen (€)')

# Relation surface/chambres
axes[2,2].scatter(df['surface_par_chambre'], df['prix'], alpha=0.6, color='teal')
axes[2,2].set_title('📐 Prix vs Surface par Chambre')
axes[2,2].set_xlabel('Surface par chambre (m²)')
axes[2,2].set_ylabel('Prix (€)')

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation avancée des données")
print("=" * 40)

# Features et target
features_base = ['surface', 'chambres', 'age', 'localisation', 'etage', 'garage']
X = df[features_base].copy()
y = df['prix'].copy()

# Création de features polynomiales pour capturer les non-linéarités
poly_features = PolynomialFeatures(degree=2, include_bias=False, interaction_only=True)
X_poly = poly_features.fit_transform(X)

# Division train/test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

X_train_poly, X_test_poly, _, _ = train_test_split(
    X_poly, y, test_size=0.2, random_state=42
)

print(f"📈 Features originales: {X.shape[1]}")
print(f"🔄 Features polynomiales: {X_poly.shape[1]}")
print(f"📊 Taille train: {X_train.shape[0]}")
print(f"🎯 Taille test: {X_test.shape[0]}")

# 4. 🤖 COMPARAISON DE MODÈLES AVANCÉS
print("\\n🤖 Entraînement et comparaison des modèles")
print("=" * 50)

# Définition des modèles avec pipelines
models = {
    'Linear Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', LinearRegression())
    ]),
    'Ridge Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Ridge(alpha=1.0))
    ]),
    'Lasso Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Lasso(alpha=100))
    ]),
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Polynomial Ridge': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Ridge(alpha=10))
    ])
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    # Utiliser features polynomiales pour le modèle polynomial
    if name == 'Polynomial Ridge':
        model.fit(X_train_poly, y_train)
        y_pred = model.predict(X_test_poly)
        cv_scores = cross_val_score(model, X_train_poly, y_train, cv=5, scoring='r2')
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring='r2')
    
    # Calcul des métriques
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    results[name] = {
        'model': model,
        'rmse': rmse,
        'mae': mae,
        'r2': r2,
        'cv_mean': cv_scores.mean(),
        'cv_std': cv_scores.std(),
        'predictions': y_pred
    }
    
    print(f"✅ R² Score: {r2:.3f}")
    print(f"📊 RMSE: {rmse:,.0f}€")
    print(f"📈 MAE: {mae:,.0f}€")
    print(f"🎯 CV R²: {cv_scores.mean():.3f} (+/- {cv_scores.std() * 2:.3f})")

# 5. 🏆 ANALYSE DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['r2'])
best_model = results[best_model_name]['model']
best_pred = results[best_model_name]['predictions']

print(f"\\n🏆 MEILLEUR MODÈLE: {best_model_name}")
print("=" * 50)
print(f"🎯 R² Score: {results[best_model_name]['r2']:.3f}")
print(f"📊 RMSE: {results[best_model_name]['rmse']:,.0f}€")
print(f"📈 MAE: {results[best_model_name]['mae']:,.0f}€")

# 6. 📊 VISUALISATIONS AVANCÉES
print("\\n📊 Création des visualisations avancées...")

fig, axes = plt.subplots(2, 3, figsize=(20, 12))
fig.suptitle(f'📈 Analyse Complète du Modèle {best_model_name}', fontsize=16, fontweight='bold')

# Prédictions vs Réalité
axes[0,0].scatter(y_test, best_pred, alpha=0.6, color='blue')
min_val, max_val = min(y_test.min(), best_pred.min()), max(y_test.max(), best_pred.max())
axes[0,0].plot([min_val, max_val], [min_val, max_val], 'r--', linewidth=2)
axes[0,0].set_xlabel('Prix Réels (€)')
axes[0,0].set_ylabel('Prix Prédits (€)')
axes[0,0].set_title('🎯 Prédictions vs Réalité')

# Résidus
residus = y_test - best_pred
axes[0,1].scatter(best_pred, residus, alpha=0.6, color='green')
axes[0,1].axhline(y=0, color='r', linestyle='--')
axes[0,1].set_xlabel('Prix Prédits (€)')
axes[0,1].set_ylabel('Résidus (€)')
axes[0,1].set_title('📉 Analyse des Résidus')

# Distribution des résidus
axes[0,2].hist(residus, bins=30, alpha=0.7, color='orange', edgecolor='black')
axes[0,2].set_xlabel('Résidus (€)')
axes[0,2].set_ylabel('Fréquence')
axes[0,2].set_title('📊 Distribution des Résidus')

# Comparaison des modèles
model_names = list(results.keys())
r2_scores = [results[name]['r2'] for name in model_names]
rmse_scores = [results[name]['rmse'] for name in model_names]

axes[1,0].barh(model_names, r2_scores, color='lightblue', alpha=0.8)
axes[1,0].set_xlabel('R² Score')
axes[1,0].set_title('🏆 Comparaison R² des Modèles')

axes[1,1].barh(model_names, rmse_scores, color='lightcoral', alpha=0.8)
axes[1,1].set_xlabel('RMSE (€)')
axes[1,1].set_title('📊 Comparaison RMSE des Modèles')

# Erreur absolue par gamme de prix
price_ranges = pd.cut(y_test, bins=5, labels=['Très bas', 'Bas', 'Moyen', 'Haut', 'Très haut'])
error_by_range = pd.DataFrame({'range': price_ranges, 'error': np.abs(residus)}).groupby('range')['error'].mean()

axes[1,2].bar(error_by_range.index, error_by_range.values, color='purple', alpha=0.7)
axes[1,2].set_xlabel('Gamme de Prix')
axes[1,2].set_ylabel('Erreur Absolue Moyenne (€)')
axes[1,2].set_title('📈 Erreur par Gamme de Prix')
axes[1,2].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# 7. 🔮 PRÉDICTIONS SUR DE NOUVEAUX BIENS
print("\\n🔮 Test sur de nouveaux biens immobiliers")
print("=" * 50)

nouveaux_biens = [
    {'surface': 80, 'chambres': 3, 'age': 5, 'localisation': 8, 'etage': 2, 'garage': 1},
    {'surface': 120, 'chambres': 4, 'age': 15, 'localisation': 6, 'etage': 0, 'garage': 1},
    {'surface': 200, 'chambres': 6, 'age': 30, 'localisation': 9, 'etage': 5, 'garage': 0}
]

for i, bien in enumerate(nouveaux_biens):
    bien_df = pd.DataFrame([bien])
    
    if best_model_name == 'Polynomial Ridge':
        bien_poly = poly_features.transform(bien_df)
        prix_predit = best_model.predict(bien_poly)[0]
    else:
        prix_predit = best_model.predict(bien_df)[0]
    
    print(f"\\n🏠 Bien {i+1}:")
    print(f"   📐 Surface: {bien['surface']}m²")
    print(f"   🛏️  Chambres: {bien['chambres']}")
    print(f"   📅 Âge: {bien['age']} ans")
    print(f"   🌍 Localisation: {bien['localisation']}/10")
    print(f"   🏢 Étage: {bien['etage']}")
    print(f"   🚗 Garage: {'Oui' if bien['garage'] else 'Non'}")
    print(f"   💰 Prix prédit: {prix_predit:,.0f}€")
    print(f"   💎 Prix/m²: {prix_predit/bien['surface']:,.0f}€/m²")

print("\\n✅ Analyse complète terminée !")
print("🎯 Votre modèle peut maintenant estimer des prix immobiliers avec précision!")`,
      language: "python",
      outputs: [
        "R² Score: 0.892",
        "RMSE: 42,150€",
        "Meilleur modèle: Random Forest"
      ]
    },
    {
      title: "Clustering K-means avancé",
      description: "Segmentation client sophistiquée avec optimisation et analyse métier",
      difficulty: "Avancé",
      estimatedTime: "45 min",
      code: `# Clustering K-means avancé pour segmentation client - Analyse métier complète
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.preprocessing import StandardScaler, RobustScaler
from sklearn.metrics import silhouette_score, calinski_harabasz_score, davies_bouldin_score
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from scipy import stats
import warnings
warnings.filterwarnings('ignore')

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("Set2")

print("🛍️ SEGMENTATION CLIENT AVANCÉE")
print("=" * 50)

# 1. 🎲 GÉNÉRATION DE DONNÉES CLIENT RÉALISTES
print("\\n📊 Génération du dataset client...")
np.random.seed(42)
n_clients = 2000

# Définition de 4 segments clients réalistes
segments = {
    'Économes': {'size': 400, 'revenus': (25, 8), 'fidelite': (30, 12), 'freq_achat': (2, 1), 'panier_moyen': (25, 8)},
    'Moyens': {'size': 800, 'revenus': (45, 12), 'fidelite': (55, 15), 'freq_achat': (6, 2), 'panier_moyen': (65, 20)},
    'Fidèles': {'size': 600, 'revenus': (55, 15), 'fidelite': (80, 10), 'freq_achat': (12, 3), 'panier_moyen': (85, 25)},
    'VIP': {'size': 200, 'revenus': (90, 20), 'fidelite': (85, 8), 'freq_achat': (20, 5), 'panier_moyen': (150, 40)}
}

# Génération des données pour chaque segment
clients_data = []
true_labels = []

for segment_name, params in segments.items():
    size = params['size']
    
    # Revenus (en k€)
    revenus = np.random.normal(params['revenus'][0], params['revenus'][1], size)
    revenus = np.clip(revenus, 15, 150)
    
    # Score de fidélité (0-100)
    fidelite = np.random.normal(params['fidelite'][0], params['fidelite'][1], size)
    fidelite = np.clip(fidelite, 0, 100)
    
    # Fréquence d'achat mensuelle
    freq_achat = np.random.normal(params['freq_achat'][0], params['freq_achat'][1], size)
    freq_achat = np.clip(freq_achat, 0.5, 30)
    
    # Panier moyen (€)
    panier_moyen = np.random.normal(params['panier_moyen'][0], params['panier_moyen'][1], size)
    panier_moyen = np.clip(panier_moyen, 10, 300)
    
    # Ajout de corrélations réalistes
    # Plus de revenus = panier plus élevé
    panier_moyen = panier_moyen + revenus * 0.3 + np.random.normal(0, 5, size)
    panier_moyen = np.clip(panier_moyen, 10, 300)
    
    # Clients fidèles achètent plus souvent
    freq_achat = freq_achat + fidelite * 0.05 + np.random.normal(0, 1, size)
    freq_achat = np.clip(freq_achat, 0.5, 30)
    
    for i in range(size):
        clients_data.append([revenus[i], fidelite[i], freq_achat[i], panier_moyen[i]])
        true_labels.append(segment_name)

# Création du DataFrame
df = pd.DataFrame(clients_data, columns=['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen'])
df['segment_reel'] = true_labels

# Ajout de features dérivées métier
df['ca_mensuel'] = df['freq_achat_mensuelle'] * df['panier_moyen']
df['ca_annuel'] = df['ca_mensuel'] * 12
df['ratio_fidelite_revenus'] = df['score_fidelite'] / df['revenus_annuels']

print(f"✅ Dataset créé: {len(df)} clients")
print(f"💰 CA annuel moyen: {df['ca_annuel'].mean():,.0f}€")
print(f"📊 Répartition des vrais segments:")
print(df['segment_reel'].value_counts())

# 2. 🔍 ANALYSE EXPLORATOIRE MÉTIER APPROFONDIE
print("\\n🔍 Analyse exploratoire métier")
print("=" * 35)

# Statistiques par segment réel
print("📊 Statistiques par segment réel:")
stats_by_segment = df.groupby('segment_reel').agg({
    'revenus_annuels': ['mean', 'std'],
    'score_fidelite': ['mean', 'std'],
    'freq_achat_mensuelle': ['mean', 'std'],
    'panier_moyen': ['mean', 'std'],
    'ca_annuel': ['mean', 'std']
}).round(2)

print(stats_by_segment)

# Visualisations métier complètes
fig, axes = plt.subplots(3, 4, figsize=(24, 18))
fig.suptitle('🛍️ Analyse Exploratoire Complète - Segmentation Client', fontsize=16, fontweight='bold')

# Distribution des variables principales
variables = ['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen']
for i, var in enumerate(variables):
    axes[0, i].hist(df[var], bins=30, alpha=0.7, edgecolor='black')
    axes[0, i].set_title(f'📊 Distribution {var}')
    axes[0, i].set_xlabel(var)
    axes[0, i].set_ylabel('Fréquence')

# Box plots par segment réel
for i, var in enumerate(variables):
    df.boxplot(column=var, by='segment_reel', ax=axes[1, i])
    axes[1, i].set_title(f'📦 {var} par segment')
    axes[1, i].set_xlabel('Segment')

# Matrices de corrélation et scatter plots
correlation_matrix = df[variables + ['ca_annuel']].corr()
im = axes[2, 0].imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
axes[2, 0].set_xticks(range(len(correlation_matrix.columns)))
axes[2, 0].set_yticks(range(len(correlation_matrix.columns)))
axes[2, 0].set_xticklabels(correlation_matrix.columns, rotation=45)
axes[2, 0].set_yticklabels(correlation_matrix.columns)
axes[2, 0].set_title('🔗 Matrice de Corrélation')

# Scatter plots métier
scatter_plots = [
    ('revenus_annuels', 'panier_moyen', '💰 Revenus vs Panier'),
    ('score_fidelite', 'freq_achat_mensuelle', '❤️ Fidélité vs Fréquence'),
    ('ca_annuel', 'score_fidelite', '📈 CA vs Fidélité')
]

for i, (x, y, title) in enumerate(scatter_plots):
    scatter = axes[2, i+1].scatter(df[x], df[y], c=df['segment_reel'].astype('category').cat.codes, 
                                  cmap='Set1', alpha=0.6)
    axes[2, i+1].set_xlabel(x)
    axes[2, i+1].set_ylabel(y)
    axes[2, i+1].set_title(title)

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation avancée des données")
print("=" * 40)

# Sélection des features pour le clustering
features_clustering = ['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen', 'ca_annuel']
X = df[features_clustering].copy()

print(f"📊 Features sélectionnées: {features_clustering}")
print(f"📈 Forme des données: {X.shape}")

# Détection et traitement des outliers avec méthode IQR
def detect_outliers_iqr(data, factor=1.5):
    Q1 = data.quantile(0.25)
    Q3 = data.quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - factor * IQR
    upper_bound = Q3 + factor * IQR
    outliers = (data < lower_bound) | (data > upper_bound)
    return outliers

outliers_mask = pd.DataFrame(index=X.index)
for col in X.columns:
    outliers_mask[col] = detect_outliers_iqr(X[col])

total_outliers = outliers_mask.any(axis=1).sum()
print(f"🚨 Outliers détectés: {total_outliers} ({total_outliers/len(X)*100:.1f}%)")

# Option: supprimer les outliers extrêmes ou les conserver pour l'analyse
# X_clean = X[~outliers_mask.any(axis=1)]
X_clean = X.copy()  # Conserver tous les points pour cet exemple

# Standardisation avec RobustScaler (moins sensible aux outliers)
scaler = RobustScaler()
X_scaled = scaler.fit_transform(X_clean)
X_scaled_df = pd.DataFrame(X_scaled, columns=features_clustering, index=X_clean.index)

print(f"✅ Données standardisées: {X_scaled.shape}")

# 4. 🔍 DÉTERMINATION OPTIMALE DU NOMBRE DE CLUSTERS
print("\\n🔍 Optimisation du nombre de clusters")
print("=" * 45)

# Méthodes multiples pour déterminer k optimal
k_range = range(2, 12)
metrics = {
    'inertia': [],
    'silhouette': [],
    'calinski_harabasz': [],
    'davies_bouldin': []
}

print("🔄 Test de différentes valeurs de k...")
for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    cluster_labels = kmeans.fit_predict(X_scaled)
    
    metrics['inertia'].append(kmeans.inertia_)
    metrics['silhouette'].append(silhouette_score(X_scaled, cluster_labels))
    metrics['calinski_harabasz'].append(calinski_harabasz_score(X_scaled, cluster_labels))
    metrics['davies_bouldin'].append(davies_bouldin_score(X_scaled, cluster_labels))

# Visualisation des métriques
fig, axes = plt.subplots(2, 2, figsize=(15, 10))
fig.suptitle('📊 Optimisation du Nombre de Clusters', fontsize=14, fontweight='bold')

# Méthode du coude (Elbow)
axes[0,0].plot(k_range, metrics['inertia'], 'bo-', linewidth=2, markersize=8)
axes[0,0].set_xlabel('Nombre de clusters (k)')
axes[0,0].set_ylabel('Inertie')
axes[0,0].set_title('📐 Méthode du Coude')
axes[0,0].grid(True, alpha=0.3)

# Score de silhouette (plus élevé = mieux)
axes[0,1].plot(k_range, metrics['silhouette'], 'ro-', linewidth=2, markersize=8)
axes[0,1].set_xlabel('Nombre de clusters (k)')
axes[0,1].set_ylabel('Score de Silhouette')
axes[0,1].set_title('🎯 Score de Silhouette')
axes[0,1].grid(True, alpha=0.3)

# Calinski-Harabasz (plus élevé = mieux)
axes[1,0].plot(k_range, metrics['calinski_harabasz'], 'go-', linewidth=2, markersize=8)
axes[1,0].set_xlabel('Nombre de clusters (k)')
axes[1,0].set_ylabel('Score Calinski-Harabasz')
axes[1,0].set_title('📈 Score Calinski-Harabasz')
axes[1,0].grid(True, alpha=0.3)

# Davies-Bouldin (plus faible = mieux)
axes[1,1].plot(k_range, metrics['davies_bouldin'], 'mo-', linewidth=2, markersize=8)
axes[1,1].set_xlabel('Nombre de clusters (k)')
axes[1,1].set_ylabel('Score Davies-Bouldin')
axes[1,1].set_title('📉 Score Davies-Bouldin')
axes[1,1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Détermination automatique du k optimal
k_optimal_silhouette = k_range[np.argmax(metrics['silhouette'])]
k_optimal_ch = k_range[np.argmax(metrics['calinski_harabasz'])]
k_optimal_db = k_range[np.argmin(metrics['davies_bouldin'])]

print(f"🎯 K optimal selon Silhouette: {k_optimal_silhouette}")
print(f"📊 K optimal selon Calinski-Harabasz: {k_optimal_ch}")
print(f"📉 K optimal selon Davies-Bouldin: {k_optimal_db}")

# Utilisation de la moyenne des recommandations
k_optimal = int(np.mean([k_optimal_silhouette, k_optimal_ch, k_optimal_db]))
print(f"\\n🏆 K optimal choisi: {k_optimal}")

# 5. 🤖 COMPARAISON D'ALGORITHMES DE CLUSTERING
print("\\n🤖 Comparaison des algorithmes de clustering")
print("=" * 50)

algorithms = {
    'K-Means': KMeans(n_clusters=k_optimal, random_state=42, n_init=10),
    'DBSCAN': DBSCAN(eps=0.5, min_samples=5),
    'Agglomerative': AgglomerativeClustering(n_clusters=k_optimal)
}

clustering_results = {}

for name, algorithm in algorithms.items():
    print(f"\\n🔧 Test {name}...")
    
    if name == 'DBSCAN':
        # Optimisation automatique d'epsilon pour DBSCAN
        from sklearn.neighbors import NearestNeighbors
        neighbors = NearestNeighbors(n_neighbors=4)
        neighbors_fit = neighbors.fit(X_scaled)
        distances, indices = neighbors_fit.kneighbors(X_scaled)
        distances = np.sort(distances[:, 3], axis=0)
        
        # Heuristique pour epsilon (peut nécessiter ajustement)
        eps_optimal = distances[int(0.95 * len(distances))]
        algorithm.set_params(eps=eps_optimal)
    
    cluster_labels = algorithm.fit_predict(X_scaled)
    
    # Calcul des métriques (si plus d'un cluster)
    n_clusters = len(np.unique(cluster_labels))
    if n_clusters > 1 and -1 not in cluster_labels:  # Pas de points de bruit
        silhouette = silhouette_score(X_scaled, cluster_labels)
        ch_score = calinski_harabasz_score(X_scaled, cluster_labels)
        db_score = davies_bouldin_score(X_scaled, cluster_labels)
    else:
        silhouette = ch_score = db_score = np.nan
    
    clustering_results[name] = {
        'algorithm': algorithm,
        'labels': cluster_labels,
        'n_clusters': n_clusters,
        'silhouette': silhouette,
        'calinski_harabasz': ch_score,
        'davies_bouldin': db_score
    }
    
    print(f"   🎯 Nombre de clusters: {n_clusters}")
    if not np.isnan(silhouette):
        print(f"   📊 Silhouette: {silhouette:.3f}")
        print(f"   📈 Calinski-Harabasz: {ch_score:.2f}")
        print(f"   📉 Davies-Bouldin: {db_score:.3f}")

# Sélection du meilleur algorithme
valid_algorithms = {k: v for k, v in clustering_results.items() if not np.isnan(v['silhouette'])}
best_algorithm_name = max(valid_algorithms.keys(), key=lambda x: valid_algorithms[x]['silhouette'])
best_clusters = clustering_results[best_algorithm_name]['labels']

print(f"\\n🏆 Meilleur algorithme: {best_algorithm_name}")
print(f"🎯 Score silhouette: {clustering_results[best_algorithm_name]['silhouette']:.3f}")

# 6. 📊 VISUALISATION AVANCÉE DES CLUSTERS
print("\\n📊 Création des visualisations avancées...")

# Réduction de dimensionnalité pour visualisation
pca = PCA(n_components=2, random_state=42)
X_pca = pca.fit_transform(X_scaled)

tsne = TSNE(n_components=2, random_state=42, perplexity=30)
X_tsne = tsne.fit_transform(X_scaled)

# Graphiques de visualisation
fig, axes = plt.subplots(2, 3, figsize=(20, 12))
fig.suptitle(f'🎯 Visualisation Avancée - {best_algorithm_name}', fontsize=16, fontweight='bold')

# PCA
scatter = axes[0,0].scatter(X_pca[:, 0], X_pca[:, 1], c=best_clusters, cmap='Set1', alpha=0.7)
axes[0,0].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
axes[0,0].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)')
axes[0,0].set_title('📊 Visualisation PCA')

# t-SNE
axes[0,1].scatter(X_tsne[:, 0], X_tsne[:, 1], c=best_clusters, cmap='Set1', alpha=0.7)
axes[0,1].set_xlabel('t-SNE 1')
axes[0,1].set_ylabel('t-SNE 2')
axes[0,1].set_title('🔍 Visualisation t-SNE')

# Comparaison avec vrais segments
true_labels_encoded = pd.Categorical(df['segment_reel']).codes
axes[0,2].scatter(X_pca[:, 0], X_pca[:, 1], c=true_labels_encoded, cmap='Set2', alpha=0.7)
axes[0,2].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
axes[0,2].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%% variance)')
axes[0,2].set_title('🎯 Vrais Segments (Référence)')

# Analyse par paires de variables
axes[1,0].scatter(df['revenus_annuels'], df['score_fidelite'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,0].set_xlabel('Revenus Annuels (k€)')
axes[1,0].set_ylabel('Score Fidélité')
axes[1,0].set_title('💰 Revenus vs Fidélité')

axes[1,1].scatter(df['freq_achat_mensuelle'], df['panier_moyen'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,1].set_xlabel('Fréquence Achat Mensuelle')
axes[1,1].set_ylabel('Panier Moyen (€)')
axes[1,1].set_title('🛒 Fréquence vs Panier')

axes[1,2].scatter(df['ca_annuel'], df['score_fidelite'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,2].set_xlabel('CA Annuel (€)')
axes[1,2].set_ylabel('Score Fidélité')
axes[1,2].set_title('📈 CA vs Fidélité')

plt.tight_layout()
plt.show()

# 7. 🧾 ANALYSE MÉTIER APPROFONDIE DES SEGMENTS
print("\\n🧾 ANALYSE MÉTIER DES SEGMENTS DÉCOUVERTS")
print("=" * 55)

# Ajout des clusters au DataFrame
df['cluster'] = best_clusters

# Analyse détaillée par cluster
cluster_analysis = df.groupby('cluster').agg({
    'revenus_annuels': ['count', 'mean', 'std', 'min', 'max'],
    'score_fidelite': ['mean', 'std'],
    'freq_achat_mensuelle': ['mean', 'std'],
    'panier_moyen': ['mean', 'std'],
    'ca_annuel': ['mean', 'std', 'sum']
}).round(2)

print("📊 Analyse détaillée par cluster:")
print(cluster_analysis)

# Caractérisation métier de chaque segment
print("\\n🎯 CARACTÉRISATION MÉTIER DES SEGMENTS:")
print("=" * 50)

for cluster_id in sorted(df['cluster'].unique()):
    if cluster_id == -1:  # Points de bruit DBSCAN
        continue
        
    cluster_data = df[df['cluster'] == cluster_id]
    size = len(cluster_data)
    
    print(f"\\n🏷️  CLUSTER {cluster_id} ({size} clients - {size/len(df)*100:.1f}%)")
    print("-" * 40)
    
    # Statistiques principales
    stats = cluster_data[features_clustering].mean()
    print(f"💰 Revenus moyens: {stats['revenus_annuels']:.0f}k€")
    print(f"❤️  Fidélité moyenne: {stats['score_fidelite']:.0f}/100")
    print(f"🛒 Fréquence d'achat: {stats['freq_achat_mensuelle']:.1f}/mois")
    print(f"🛍️  Panier moyen: {stats['panier_moyen']:.0f}€")
    print(f"📈 CA annuel moyen: {stats['ca_annuel']:,.0f}€")
    print(f"💎 CA total du segment: {cluster_data['ca_annuel'].sum():,.0f}€")
    
    # Recommandations stratégiques
    ca_moyen = stats['ca_annuel']
    fidelite_moyenne = stats['score_fidelite']
    revenus_moyens = stats['revenus_annuels']
    
    print(f"\\n🎯 STRATÉGIE RECOMMANDÉE:")
    if ca_moyen > 15000 and fidelite_moyenne > 75:
        print("   🌟 SEGMENT VIP - Programme privilège, services exclusifs")
    elif ca_moyen > 8000 and fidelite_moyenne > 60:
        print("   💎 SEGMENT FIDÈLE - Récompenses fidélité, offres personnalisées")
    elif revenus_moyens > 50 and fidelite_moyenne < 50:
        print("   🎯 SEGMENT POTENTIEL - Campagnes d'engagement, améliorer expérience")
    else:
        print("   📢 SEGMENT BASIQUE - Promotions attractives, acquisition")

# 8. 📊 COMPARAISON AVEC LES VRAIS SEGMENTS
print("\\n📊 COMPARAISON AVEC LES SEGMENTS RÉELS")
print("=" * 45)

# Matrice de contingence
contingency_matrix = pd.crosstab(df['segment_reel'], df['cluster'], margins=True)
print("📋 Matrice de contingence (Réel vs Prédit):")
print(contingency_matrix)

# Calcul de la pureté des clusters
purity_scores = []
for cluster_id in sorted(df['cluster'].unique()):
    if cluster_id == -1:
        continue
    cluster_data = df[df['cluster'] == cluster_id]
    most_common_segment = cluster_data['segment_reel'].mode()[0]
    purity = (cluster_data['segment_reel'] == most_common_segment).mean()
    purity_scores.append(purity)
    print(f"🎯 Pureté Cluster {cluster_id}: {purity:.2f} (majoritairement {most_common_segment})")

average_purity = np.mean(purity_scores)
print(f"\\n🏆 Pureté moyenne: {average_purity:.2f}")

print("\\n✅ ANALYSE COMPLÈTE TERMINÉE!")
print("🎯 Vos segments clients sont prêts pour les actions marketing!")`,
      language: "python",
      outputs: [
        "4 clusters détectés",
        "Score silhouette: 0.687",
        "Pureté moyenne: 0.83"
      ]
    }
  ];

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="practical-exercises" className="space-y-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Exercices Pratiques et Exemples de Code
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Maîtrisez le Machine Learning par la pratique avec des projets concrets, des défis progressifs et des exemples détaillés
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Badge className="bg-purple-100 text-purple-800 px-4 py-2">💻 Code Complet</Badge>
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2">📊 Analyses Détaillées</Badge>
          <Badge className="bg-green-100 text-green-800 px-4 py-2">🎯 Applications Métier</Badge>
        </div>
      </div>

      {/* Code Examples */}
      <EducationalCard title="💻 Laboratoire de Code Interactif" type="exemple">
        <div className="space-y-8">
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Explorez des implémentations complètes avec analyses détaillées et recommandations métier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {codeExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveCode(index)}
                className={`p-6 rounded-xl text-left transition-all duration-500 border-2 hover:scale-105 ${
                  activeCode === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-blue-500"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg">{example.title}</h4>
                  <Badge className={`${activeCode === index ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-700'}`}>
                    {example.difficulty}
                  </Badge>
                </div>
                <p className={`text-sm mb-3 ${activeCode === index ? 'text-blue-100' : 'text-gray-600'}`}>
                  {example.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${activeCode === index ? 'text-blue-200' : 'text-gray-500'}`}>
                    ⏱️ {example.estimatedTime}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <Card className="border-2 hover:shadow-2xl transition-all duration-500">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{codeExamples[activeCode].title}</CardTitle>
                    <CardDescription className="text-lg mt-1">{codeExamples[activeCode].description}</CardDescription>
                    <div className="flex items-center gap-4 mt-3">
                      <Badge className="bg-blue-100 text-blue-800">
                        🎯 {codeExamples[activeCode].difficulty}
                      </Badge>
                      <Badge className="bg-green-100 text-green-800">
                        ⏱️ {codeExamples[activeCode].estimatedTime}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(codeExamples[activeCode].code, activeCode)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    {copiedCode === activeCode ? (
                      <>
                        <span className="text-green-300">✓</span>
                        Copié !
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copier le code
                      </>
                    )}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg">
                    <Download className="h-4 w-4" />
                    Télécharger
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gray-950 text-gray-100 p-8 overflow-x-auto">
                <pre className="text-sm leading-relaxed">
                  <code>{codeExamples[activeCode].code}</code>
                </pre>
              </div>
              
              {/* Outputs section */}
              <div className="bg-green-50 p-6 border-t-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Résultats attendus :
                </h4>
                <div className="space-y-2">
                  {codeExamples[activeCode].outputs.map((output, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-green-200">
                      <code className="text-sm text-green-700">{output}</code>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </EducationalCard>

      {/* Practical Exercises */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ExerciseCard
          title="🎬 Système de Recommandation de Films"
          difficulty="intermédiaire"
          estimatedTime="25 min"
          problem="Vous travaillez pour une plateforme de streaming qui souhaite améliorer son système de recommandation. Créez un système qui recommande des films basé sur les ratings des utilisateurs et les métadonnées des films (genre, acteurs, réalisateur). Le dataset contient 10,000 utilisateurs, 5,000 films et 1 million de ratings."
          hints={[
            "Commencez par une approche de filtrage collaboratif avec la similarité cosinus",
            "Utilisez la factorisation matricielle (SVD) pour capturer les patterns latents",
            "Intégrez les métadonnées avec un modèle hybride (collaboratif + contenu)",
            "Évaluez avec RMSE, précision@K et diversité des recommandations",
            "Gérez le problème de démarrage à froid pour les nouveaux utilisateurs"
          ]}
          solution={`# Système de Recommandation de Films - Solution Complète
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import mean_squared_error
from scipy.sparse import csr_matrix
import matplotlib.pyplot as plt

# 1. PRÉPARATION DES DONNÉES
print("🎬 Système de Recommandation de Films")
print("=" * 40)

# Simulation de données (en pratique, vous chargeriez vos datasets)
np.random.seed(42)

# Génération de données réalistes
n_users, n_movies = 1000, 500  # Réduit pour l'exemple
n_ratings = 50000

users = np.random.randint(0, n_users, n_ratings)
movies = np.random.randint(0, n_movies, n_ratings)
ratings = np.random.choice([1,2,3,4,5], n_ratings, p=[0.1,0.1,0.2,0.4,0.2])

# DataFrame des ratings
ratings_df = pd.DataFrame({
    'user_id': users,
    'movie_id': movies,
    'rating': ratings
})

# Suppression des doublons (un user peut noter un film qu'une fois)
ratings_df = ratings_df.drop_duplicates(['user_id', 'movie_id'])

print(f"📊 Dataset: {len(ratings_df)} ratings")
print(f"👥 Utilisateurs: {ratings_df['user_id'].nunique()}")
print(f"🎬 Films: {ratings_df['movie_id'].nunique()}")

# 2. CRÉATION DE LA MATRICE USER-ITEM
print("\\n🔧 Création de la matrice utilisateur-film...")

# Matrice pivot
user_item_matrix = ratings_df.pivot(index='user_id', columns='movie_id', values='rating').fillna(0)
print(f"📏 Forme de la matrice: {user_item_matrix.shape}")

# Conversion en matrice sparse pour l'efficacité
user_item_sparse = csr_matrix(user_item_matrix.values)

# 3. FILTRAGE COLLABORATIF - SIMILARITÉ UTILISATEURS
print("\\n👥 Filtrage collaboratif basé utilisateurs...")

def collaborative_filtering_users(user_id, user_item_matrix, n_recommendations=10):
    # Calcul de similarité entre utilisateurs
    user_similarity = cosine_similarity(user_item_matrix)
    
    # Obtenir l'index de l'utilisateur
    user_idx = list(user_item_matrix.index).index(user_id)
    
    # Trouver les utilisateurs similaires
    similar_users = user_similarity[user_idx]
    similar_users_idx = np.argsort(similar_users)[::-1][1:11]  # Top 10 (excluant lui-même)
    
    # Films déjà vus par l'utilisateur
    user_ratings = user_item_matrix.iloc[user_idx]
    seen_movies = user_ratings[user_ratings > 0].index
    
    # Calculer les scores de recommandation
    recommendations = {}
    for movie in user_item_matrix.columns:
        if movie not in seen_movies:
            score = 0
            similarity_sum = 0
            
            for similar_user_idx in similar_users_idx:
                similar_user_id = user_item_matrix.index[similar_user_idx]
                similarity = similar_users[similar_user_idx]
                rating = user_item_matrix.loc[similar_user_id, movie]
                
                if rating > 0:  # Si l'utilisateur similaire a noté ce film
                    score += similarity * rating
                    similarity_sum += similarity
            
            if similarity_sum > 0:
                recommendations[movie] = score / similarity_sum
    
    # Trier et retourner top N
    sorted_recommendations = sorted(recommendations.items(), key=lambda x: x[1], reverse=True)
    return sorted_recommendations[:n_recommendations]

# 4. FACTORISATION MATRICIELLE (SVD)
print("\\n🧮 Factorisation matricielle avec SVD...")

# SVD pour capturer les facteurs latents
svd = TruncatedSVD(n_components=50, random_state=42)
user_factors = svd.fit_transform(user_item_sparse)
movie_factors = svd.components_.T

print(f"✅ SVD terminée: {user_factors.shape[1]} facteurs latents")

def svd_recommendations(user_id, user_item_matrix, user_factors, movie_factors, n_recommendations=10):
    user_idx = list(user_item_matrix.index).index(user_id)
    
    # Films déjà vus
    user_ratings = user_item_matrix.iloc[user_idx]
    seen_movies = user_ratings[user_ratings > 0].index
    
    # Prédiction pour tous les films
    user_vector = user_factors[user_idx]
    predicted_ratings = np.dot(user_vector, movie_factors.T)
    
    # Créer dataframe des prédictions
    predictions = pd.DataFrame({
        'movie_id': user_item_matrix.columns,
        'predicted_rating': predicted_ratings
    })
    
    # Filtrer les films déjà vus
    unseen_predictions = predictions[~predictions['movie_id'].isin(seen_movies)]
    
    # Trier et retourner top N
    top_recommendations = unseen_predictions.nlargest(n_recommendations, 'predicted_rating')
    
    return list(zip(top_recommendations['movie_id'], top_recommendations['predicted_rating']))

# 5. ÉVALUATION DU SYSTÈME
print("\\n📊 Évaluation du système...")

# Division train/test
def train_test_split_ratings(ratings_df, test_ratio=0.2):
    # Pour chaque utilisateur, garder quelques ratings pour le test
    train_list, test_list = [], []
    
    for user_id in ratings_df['user_id'].unique():
        user_ratings = ratings_df[ratings_df['user_id'] == user_id]
        
        if len(user_ratings) >= 5:  # Au moins 5 ratings
            n_test = max(1, int(len(user_ratings) * test_ratio))
            test_indices = np.random.choice(user_ratings.index, n_test, replace=False)
            
            test_list.append(user_ratings.loc[test_indices])
            train_list.append(user_ratings.drop(test_indices))
        else:
            train_list.append(user_ratings)
    
    train_df = pd.concat(train_list, ignore_index=True)
    test_df = pd.concat(test_list, ignore_index=True) if test_list else pd.DataFrame()
    
    return train_df, test_df

train_df, test_df = train_test_split_ratings(ratings_df)
print(f"📈 Train: {len(train_df)} ratings")
print(f"🎯 Test: {len(test_df)} ratings")

# Recréer la matrice avec données d'entraînement
train_matrix = train_df.pivot(index='user_id', columns='movie_id', values='rating').fillna(0)

# 6. SYSTÈME HYBRIDE (Exemple simplifié)
print("\\n🔄 Système hybride...")

def hybrid_recommendations(user_id, train_matrix, user_factors, movie_factors, 
                          alpha=0.7, n_recommendations=10):
    try:
        # Recommandations SVD
        svd_recs = dict(svd_recommendations(user_id, train_matrix, user_factors, movie_factors, 20))
        
        # Recommandations collaboratives
        collab_recs = dict(collaborative_filtering_users(user_id, train_matrix, 20))
        
        # Combinaison hybride
        all_movies = set(svd_recs.keys()) | set(collab_recs.keys())
        hybrid_scores = {}
        
        for movie in all_movies:
            svd_score = svd_recs.get(movie, 0)
            collab_score = collab_recs.get(movie, 0)
            
            # Normalisation simple (en pratique, plus sophistiquée)
            hybrid_scores[movie] = alpha * svd_score + (1 - alpha) * collab_score
        
        # Retourner top N
        sorted_hybrid = sorted(hybrid_scores.items(), key=lambda x: x[1], reverse=True)
        return sorted_hybrid[:n_recommendations]
    
    except:
        # Fallback si erreur
        return []

# 7. TEST ET DÉMONSTRATION
print("\\n🎬 Test du système de recommandation...")

# Choisir un utilisateur test
test_users = [u for u in test_df['user_id'].unique() if u in train_matrix.index]
if test_users:
    test_user = test_users[0]
    
    print(f"\\n🎯 Recommandations pour l'utilisateur {test_user}:")
    
    # SVD recommandations
    svd_recs = svd_recommendations(test_user, train_matrix, user_factors, movie_factors, 5)
    print("\\n📊 Top 5 - SVD:")
    for i, (movie, score) in enumerate(svd_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")
    
    # Collaboratif
    collab_recs = collaborative_filtering_users(test_user, train_matrix, 5)
    print("\\n👥 Top 5 - Collaboratif:")
    for i, (movie, score) in enumerate(collab_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")
    
    # Hybride
    hybrid_recs = hybrid_recommendations(test_user, train_matrix, user_factors, movie_factors, 0.7, 5)
    print("\\n🔄 Top 5 - Hybride:")
    for i, (movie, score) in enumerate(hybrid_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")

# 8. MÉTRIQUES D'ÉVALUATION
print("\\n📈 Calcul des métriques d'évaluation...")

def calculate_precision_at_k(recommended_items, relevant_items, k):
    recommended_at_k = recommended_items[:k]
    relevant_and_recommended = set(recommended_at_k) & set(relevant_items)
    
    if len(recommended_at_k) == 0:
        return 0
    
    return len(relevant_and_recommended) / len(recommended_at_k)

# Exemple de calcul de précision@5
if test_users and len(test_df) > 0:
    test_user = test_users[0]
    user_test_movies = test_df[test_df['user_id'] == test_user]
    relevant_movies = user_test_movies[user_test_movies['rating'] >= 4]['movie_id'].tolist()
    
    if hybrid_recs:
        recommended_movies = [movie for movie, score in hybrid_recs]
        precision_5 = calculate_precision_at_k(recommended_movies, relevant_movies, 5)
        print(f"🎯 Précision@5: {precision_5:.2f}")

print("\\n✅ Système de recommandation opérationnel!")
print("🚀 Prêt pour la production avec monitoring et A/B testing!")`}
        />

        <ExerciseCard
          title="🔍 Détection d'Anomalies dans les Transactions"
          difficulty="avancé"
          estimatedTime="35 min"
          problem="Une banque vous demande de créer un système de détection de fraude en temps réel. Analysez 100,000 transactions avec 30 features (montant, localisation, heure, type de marchande, historique client...). Seules 0.1% des transactions sont frauduleuses. Créez un modèle capable de détecter 95% des fraudes tout en minimisant les faux positifs."
          hints={[
            "Le dataset est très déséquilibré - utilisez des techniques de rééquilibrage (SMOTE, undersampling)",
            "Testez plusieurs algorithmes : Isolation Forest, One-Class SVM, Random Forest",
            "Créez des features d'ingénierie : fréquence, patterns temporels, géolocalisation",
            "Optimisez pour le rappel (catch frauds) tout en contrôlant la précision",
            "Utilisez la validation temporelle (pas de data leakage temporel)"
          ]}
          solution={`# Détection d'Anomalies - Fraude Bancaire - Solution Complète
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier, IsolationForest
from sklearn.svm import OneClassSVM
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, precision_recall_curve
from sklearn.metrics import average_precision_score, roc_curve
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from imblearn.pipeline import Pipeline as ImbPipeline
import warnings
warnings.filterwarnings('ignore')

print("🔍 DÉTECTION DE FRAUDE BANCAIRE")
print("=" * 40)

# 1. GÉNÉRATION DE DONNÉES RÉALISTES
print("\\n📊 Génération du dataset de transactions...")
np.random.seed(42)

n_transactions = 50000  # Réduit pour l'exemple
fraud_rate = 0.002      # 0.2% de fraudes (très déséquilibré)

# Génération des transactions normales (99.8%)
n_normal = int(n_transactions * (1 - fraud_rate))
n_fraud = n_transactions - n_normal

print(f"💳 Transactions normales: {n_normal}")
print(f"🚨 Transactions frauduleuses: {n_fraud}")

# Features pour transactions normales
normal_data = {
    'montant': np.random.lognormal(3, 1, n_normal),  # Distribution log-normale réaliste
    'heure': np.random.normal(14, 4, n_normal) % 24, # Pic à 14h
    'jour_semaine': np.random.choice(range(7), n_normal, p=[0.12,0.14,0.14,0.14,0.14,0.16,0.16]),
    'nb_trans_jour': np.random.poisson(3, n_normal),
    'nb_trans_semaine': np.random.poisson(20, n_normal),
    'solde_compte': np.random.normal(5000, 3000, n_normal),
    'age_compte_jours': np.random.exponential(500, n_normal),
    '
_merchant_category': np.random.choice(range(20), n_normal, p=[0.15,0.12,0.1,0.08,0.06,0.05,0.05,0.04,0.04,0.03,0.03,0.03,0.03,0.03,0.02,0.02,0.02,0.02,0.01,0.08]),
    'pays_merchant': np.random.choice(range(5), n_normal, p=[0.7,0.15,0.08,0.04,0.03]),
    'montant_moy_30j': np.random.lognormal(3, 0.8, n_normal)
}

# Features pour transactions frauduleuses (patterns différents)
fraud_data = {
    'montant': np.random.lognormal(4.5, 1.5, n_fraud),  # Montants plus élevés
    'heure': np.random.choice(range(24), n_fraud, p=[0.08,0.09,0.1,0.12,0.08,0.06,0.04,0.03,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.04,0.05,0.04,0.03,0.03,0.04,0.06,0.07]),  # Plus la nuit
    'jour_semaine': np.random.choice(range(7), n_fraud),  # Répartition uniforme
    'nb_trans_jour': np.random.poisson(8, n_fraud),  # Plus de transactions
    'nb_trans_semaine': np.random.poisson(45, n_fraud),
    'solde_compte': np.random.normal(3000, 4000, n_fraud),  # Soldes plus variables
    'age_compte_jours': np.random.exponential(200, n_fraud),  # Comptes plus récents
    'merchant_category': np.random.choice(range(20), n_fraud),  # Répartition différente
    'pays_merchant': np.random.choice(range(5), n_fraud, p=[0.4,0.2,0.2,0.1,0.1]),  # Plus d'international
    'montant_moy_30j': np.random.lognormal(2.8, 1.2, n_fraud)
}

# Création du DataFrame combiné
transactions_data = []
labels = []

for key in normal_data.keys():
    if key not in transactions_data:
        transactions_data.append([])
    transactions_data[-1] = list(normal_data[key]) + list(fraud_data[key])

# Transposer pour avoir la bonne structure
df_data = {}
for i, key in enumerate(normal_data.keys()):
    df_data[key] = list(normal_data[key]) + list(fraud_data[key])

df = pd.DataFrame(df_data)
df['is_fraud'] = [0] * n_normal + [1] * n_fraud

# Ajout de features d'ingénierie
df['montant_log'] = np.log1p(df['montant'])
df['ratio_montant_solde'] = df['montant'] / (df['solde_compte'] + 1)
df['ratio_montant_moyenne'] = df['montant'] / (df['montant_moy_30j'] + 1)
df['is_weekend'] = (df['jour_semaine'] >= 5).astype(int)
df['is_night'] = ((df['heure'] >= 22) | (df['heure'] <= 6)).astype(int)
df['freq_trans_day_high'] = (df['nb_trans_jour'] > 10).astype(int)

print(f"✅ Dataset créé: {len(df)} transactions")
print(f"📊 Taux de fraude: {df['is_fraud'].mean():.3%}")

# 2. ANALYSE EXPLORATOIRE SPÉCIALISÉE
print("\\n🔍 Analyse exploratoire des patterns de fraude...")

# Statistiques par classe
fraud_stats = df.groupby('is_fraud').agg({
    'montant': ['mean', 'std', 'median'],
    'heure': ['mean', 'std'],
    'nb_trans_jour': ['mean', 'std'],
    'solde_compte': ['mean', 'std'],
    'is_night': 'mean',
    'is_weekend': 'mean'
}).round(3)

print("📊 Statistiques par classe:")
print(fraud_stats)

# Visualisations spécialisées
fig, axes = plt.subplots(3, 3, figsize=(20, 15))
fig.suptitle('🔍 Analyse des Patterns de Fraude', fontsize=16, fontweight='bold')

# Distribution des montants
axes[0,0].hist(df[df['is_fraud']==0]['montant_log'], bins=50, alpha=0.7, label='Normal', density=True)
axes[0,0].hist(df[df['is_fraud']==1]['montant_log'], bins=50, alpha=0.7, label='Fraude', density=True)
axes[0,0].set_title('💰 Distribution Montants (log)')
axes[0,0].legend()

# Répartition par heure
hour_fraud = df.groupby(['heure', 'is_fraud']).size().unstack().fillna(0)
hour_fraud_rate = hour_fraud[1] / (hour_fraud[0] + hour_fraud[1])
axes[0,1].plot(hour_fraud_rate.index, hour_fraud_rate.values * 100, 'r-o')
axes[0,1].set_title('🕐 Taux de Fraude par Heure')
axes[0,1].set_ylabel('Taux de fraude (%)')

# Répartition par jour de la semaine
day_fraud = df.groupby(['jour_semaine', 'is_fraud']).size().unstack().fillna(0)
day_fraud_rate = day_fraud[1] / (day_fraud[0] + day_fraud[1])
axes[0,2].bar(range(7), day_fraud_rate.values * 100, color='orange', alpha=0.7)
axes[0,2].set_title('📅 Taux de Fraude par Jour')
axes[0,2].set_xticks(range(7))
axes[0,2].set_xticklabels(['L','M','M','J','V','S','D'])

# Corrélation avec la fraude
correlation_with_fraud = df.corr()['is_fraud'].sort_values(key=abs, ascending=False)[1:]
axes[1,0].barh(range(len(correlation_with_fraud)), correlation_with_fraud.values)
axes[1,0].set_yticks(range(len(correlation_with_fraud)))
axes[1,0].set_yticklabels(correlation_with_fraud.index, rotation=0)
axes[1,0].set_title('🔗 Corrélation avec Fraude')

# Box plot montants
df.boxplot(column='montant_log', by='is_fraud', ax=axes[1,1])
axes[1,1].set_title('📦 Montants par Classe')

# Scatter plot multidimensionnel
scatter = axes[1,2].scatter(df['ratio_montant_solde'], df['nb_trans_jour'], 
                           c=df['is_fraud'], cmap='RdYlBu', alpha=0.6)
axes[1,2].set_title('🎯 Ratio Montant/Solde vs Nb Trans')
axes[1,2].set_xlabel('Ratio Montant/Solde')
axes[1,2].set_ylabel('Nb Trans Jour')

# Matrice de corrélation
features_corr = ['montant_log', 'nb_trans_jour', 'solde_compte', 'age_compte_jours', 'ratio_montant_solde']
corr_matrix = df[features_corr + ['is_fraud']].corr()
im = axes[2,0].imshow(corr_matrix, cmap='coolwarm', aspect='auto')
axes[2,0].set_xticks(range(len(corr_matrix.columns)))
axes[2,0].set_yticks(range(len(corr_matrix.columns)))
axes[2,0].set_xticklabels(corr_matrix.columns, rotation=45)
axes[2,0].set_yticklabels(corr_matrix.columns)
axes[2,0].set_title('🔗 Matrice de Corrélation')

# Distribution des ratios
axes[2,1].hist(df[df['is_fraud']==0]['ratio_montant_moyenne'], bins=50, alpha=0.7, label='Normal', density=True)
axes[2,1].hist(df[df['is_fraud']==1]['ratio_montant_moyenne'], bins=50, alpha=0.7, label='Fraude', density=True)
axes[2,1].set_title('📊 Ratio Montant/Moyenne')
axes[2,1].legend()

# Analyse temporelle
night_fraud = df.groupby('is_night')['is_fraud'].mean()
axes[2,2].bar(['Jour', 'Nuit'], [night_fraud[0]*100, night_fraud[1]*100], 
             color=['lightblue', 'darkblue'], alpha=0.7)
axes[2,2].set_title('🌙 Fraude Jour vs Nuit')
axes[2,2].set_ylabel('Taux de fraude (%)')

plt.tight_layout()
plt.show()

# 3. PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation des données pour la modélisation...")

# Sélection des features
features = ['montant_log', 'heure', 'jour_semaine', 'nb_trans_jour', 'nb_trans_semaine',
           'solde_compte', 'age_compte_jours', 'merchant_category', 'pays_merchant',
           'ratio_montant_solde', 'ratio_montant_moyenne', 'is_weekend', 'is_night',
           'freq_trans_day_high']

X = df[features].copy()
y = df['is_fraud'].copy()

print(f"📊 Features sélectionnées: {len(features)}")
print(f"🎯 Distribution des classes: {y.value_counts().to_dict()}")

# Division temporelle (important pour éviter le data leakage)
# Simuler une division temporelle
split_index = int(0.7 * len(df))
X_temp_train, X_temp_test = X[:split_index], X[split_index:]
y_temp_train, y_temp_test = y[:split_index], y[split_index:]

# Division train/validation sur la partie temporelle d'entraînement
X_train, X_val, y_train, y_val = train_test_split(
    X_temp_train, y_temp_train, test_size=0.2, random_state=42, stratify=y_temp_train
)

print(f"📈 Train: {len(X_train)} (fraude: {y_train.sum()}/{len(y_train)})")
print(f"📊 Validation: {len(X_val)} (fraude: {y_val.sum()}/{len(y_val)})")
print(f"🎯 Test temporel: {len(X_temp_test)} (fraude: {y_temp_test.sum()}/{len(y_temp_test)})")

# Standardisation
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val)
X_temp_test_scaled = scaler.transform(X_temp_test)

# 4. GESTION DU DÉSÉQUILIBRE
print("\\n⚖️ Gestion du déséquilibre des classes...")

# SMOTE pour l'over-sampling
smote = SMOTE(random_state=42, k_neighbors=3)
X_train_smote, y_train_smote = smote.fit_resample(X_train_scaled, y_train)

print(f"✅ Après SMOTE: {len(X_train_smote)} échantillons")
print(f"📊 Distribution: {pd.Series(y_train_smote).value_counts().to_dict()}")

# 5. MODÉLISATION AVEC MULTIPLES ALGORITHMES
print("\\n🤖 Test de multiple algorithmes de détection...")

models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42, 
                                          class_weight='balanced'),
    'Random Forest SMOTE': RandomForestClassifier(n_estimators=100, random_state=42),
    'Isolation Forest': IsolationForest(contamination=0.002, random_state=42),
    'One-Class SVM': OneClassSVM(nu=0.002, kernel='rbf')
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    if name == 'Random Forest SMOTE':
        # Utiliser les données SMOTE
        model.fit(X_train_smote, y_train_smote)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_proba_val = model.predict_proba(X_val_scaled)[:, 1]
        
    elif name in ['Isolation Forest', 'One-Class SVM']:
        # Algorithmes non-supervisés - entraîner sur données normales uniquement
        X_train_normal = X_train_scaled[y_train == 0]
        model.fit(X_train_normal)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_val = [1 if x == -1 else 0 for x in y_pred_val]  # Conversion -1/1 vers 0/1
        y_pred_proba_val = model.decision_function(X_val_scaled)
        # Normaliser les scores de décision pour avoir des pseudo-probabilités
        y_pred_proba_val = (y_pred_proba_val - y_pred_proba_val.min()) / (y_pred_proba_val.max() - y_pred_proba_val.min())
        
    else:
        # Random Forest standard
        model.fit(X_train_scaled, y_train)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_proba_val = model.predict_proba(X_val_scaled)[:, 1]
    
    # Métriques
    if name not in ['Isolation Forest', 'One-Class SVM']:
        auc_score = roc_auc_score(y_val, y_pred_proba_val)
        avg_precision = average_precision_score(y_val, y_pred_proba_val)
    else:
        auc_score = roc_auc_score(y_val, y_pred_proba_val)
        avg_precision = average_precision_score(y_val, y_pred_proba_val)
    
    results[name] = {
        'model': model,
        'predictions': y_pred_val,
        'probabilities': y_pred_proba_val,
        'auc': auc_score,
        'avg_precision': avg_precision
    }
    
    print(f"   🎯 AUC: {auc_score:.3f}")
    print(f"   📊 Average Precision: {avg_precision:.3f}")
    
    # Rapport de classification
    print(f"   📋 Classification Report:")
    print(classification_report(y_val, y_pred_val, target_names=['Normal', 'Fraude']))

# 6. SÉLECTION DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['auc'])
best_model = results[best_model_name]['model']

print(f"\\n🏆 MEILLEUR MODÈLE: {best_model_name}")
print(f"🎯 AUC: {results[best_model_name]['auc']:.3f}")
print(f"📊 Average Precision: {results[best_model_name]['avg_precision']:.3f}")

# 7. ANALYSE APPROFONDIE DU MEILLEUR MODÈLE
print("\\n📊 Analyse approfondie du meilleur modèle...")

best_pred = results[best_model_name]['predictions']
best_proba = results[best_model_name]['probabilities']

# Matrice de confusion
cm = confusion_matrix(y_val, best_pred)
print("\\n🎯 Matrice de confusion:")
print(cm)

# Visualisations avancées
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle(f'📈 Analyse du Modèle {best_model_name}', fontsize=14, fontweight='bold')

# ROC Curve
fpr, tpr, _ = roc_curve(y_val, best_proba)
axes[0,0].plot(fpr, tpr, linewidth=2, label=f'AUC = {results[best_model_name]["auc"]:.3f}')
axes[0,0].plot([0, 1], [0, 1], 'k--', alpha=0.5)
axes[0,0].set_xlabel('Taux de Faux Positifs')
axes[0,0].set_ylabel('Taux de Vrais Positifs')
axes[0,0].set_title('📈 Courbe ROC')
axes[0,0].legend()
axes[0,0].grid(True, alpha=0.3)

# Precision-Recall Curve
precision, recall, _ = precision_recall_curve(y_val, best_proba)
axes[0,1].plot(recall, precision, linewidth=2, label=f'AP = {results[best_model_name]["avg_precision"]:.3f}')
axes[0,1].set_xlabel('Rappel')
axes[0,1].set_ylabel('Précision')
axes[0,1].set_title('🎯 Courbe Précision-Rappel')
axes[0,1].legend()
axes[0,1].grid(True, alpha=0.3)

# Distribution des scores
axes[1,0].hist(best_proba[y_val == 0], bins=50, alpha=0.7, label='Normal', density=True)
axes[1,0].hist(best_proba[y_val == 1], bins=50, alpha=0.7, label='Fraude', density=True)
axes[1,0].set_xlabel('Score de Fraude')
axes[1,0].set_ylabel('Densité')
axes[1,0].set_title('📊 Distribution des Scores')
axes[1,0].legend()

# Matrice de confusion heatmap
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=axes[1,1])
axes[1,1].set_title('🎯 Matrice de Confusion')
axes[1,1].set_xlabel('Prédiction')
axes[1,1].set_ylabel('Réalité')

plt.tight_layout()
plt.show()

# 8. OPTIMISATION DU SEUIL
print("\\n🎯 Optimisation du seuil de décision...")

# Calcul des métriques pour différents seuils
thresholds = np.arange(0.1, 0.9, 0.05)
metrics_by_threshold = []

for threshold in thresholds:
    y_pred_thresh = (best_proba >= threshold).astype(int)
    
    tn, fp, fn, tp = confusion_matrix(y_val, y_pred_thresh).ravel()
    
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0
    false_positive_rate = fp / (fp + tn) if (fp + tn) > 0 else 0
    
    metrics_by_threshold.append({
        'threshold': threshold,
        'precision': precision,
        'recall': recall,
        'f1': f1,
        'fpr': false_positive_rate
    })

metrics_df = pd.DataFrame(metrics_by_threshold)

# Trouver le seuil optimal (maximiser F1 ou selon critère métier)
optimal_threshold = metrics_df.loc[metrics_df['f1'].idxmax(), 'threshold']
print(f"🎯 Seuil optimal (F1): {optimal_threshold:.2f}")

# Appliquer le seuil optimal
y_pred_optimal = (best_proba >= optimal_threshold).astype(int)
print("\\n📋 Performance avec seuil optimal:")
print(classification_report(y_val, y_pred_optimal, target_names=['Normal', 'Fraude']))

# 9. TEST SUR DONNÉES TEMPORELLES
print("\\n🕐 Test sur données temporelles (simulation production)...")

if best_model_name == 'Random Forest SMOTE':
    y_pred_temporal = best_model.predict(X_temp_test_scaled)
    y_proba_temporal = best_model.predict_proba(X_temp_test_scaled)[:, 1]
elif best_model_name in ['Isolation Forest', 'One-Class SVM']:
    y_pred_temporal_raw = best_model.predict(X_temp_test_scaled)
    y_pred_temporal = [1 if x == -1 else 0 for x in y_pred_temporal_raw]
    y_proba_temporal = best_model.decision_function(X_temp_test_scaled)
    y_proba_temporal = (y_proba_temporal - y_proba_temporal.min()) / (y_proba_temporal.max() - y_proba_temporal.min())
else:
    y_pred_temporal = best_model.predict(X_temp_test_scaled)
    y_proba_temporal = best_model.predict_proba(X_temp_test_scaled)[:, 1]

# Appliquer le seuil optimal
y_pred_temporal_optimal = (y_proba_temporal >= optimal_threshold).astype(int)

print("📊 Performance sur données temporelles:")
print(classification_report(y_temp_test, y_pred_temporal_optimal, target_names=['Normal', 'Fraude']))

temporal_auc = roc_auc_score(y_temp_test, y_proba_temporal)
print(f"🎯 AUC temporel: {temporal_auc:.3f}")

print("\\n✅ SYSTÈME DE DÉTECTION DE FRAUDE OPÉRATIONNEL!")
print("🚀 Prêt pour le déploiement en temps réel avec monitoring!")`}
        />
      </div>

      {/* Quiz avancés */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <QuizCard
          question="Dans un problème de classification avec des classes très déséquilibrées (99% classe A, 1% classe B), quelle stratégie d'évaluation est la plus appropriée ?"
          options={[
            "Utiliser uniquement l'accuracy globale",
            "Se concentrer sur la précision de la classe majoritaire",
            "Utiliser l'AUC-ROC et l'Average Precision avec validation stratifiée",
            "Équilibrer artificiellement le dataset de test"
          ]}
          correctAnswer={2}
          explanation="Pour les classes déséquilibrées, l'AUC-ROC et l'Average Precision sont les métriques les plus robustes car elles évaluent la capacité du modèle à distinguer les classes indépendamment du seuil de décision. La validation stratifiée preserve la proportion des classes dans chaque fold."
          difficulty="difficile"
        />

        <QuizCard
          question="Qu'est-ce qui caractérise le mieux le surapprentissage (overfitting) dans un modèle de Machine Learning ?"
          options={[
            "Le modèle a une faible précision sur les données d'entraînement et de test",
            "Le modèle a une haute précision sur l'entraînement mais faible sur le test",
            "Le modèle prend trop de temps à s'entraîner",
            "Le modèle a besoin de plus de données d'entraînement"
          ]}
          correctAnswer={1}
          explanation="Le surapprentissage se caractérise par un modèle qui 'mémorise' les données d'entraînement au lieu d'apprendre des patterns généralisables. Il obtient donc d'excellents résultats sur les données qu'il a vues (entraînement) mais échoue sur de nouvelles données (test). C'est le signe d'un modèle trop complexe pour la quantité de données disponible."
          difficulty="moyen"
        />
      </div>

      <EducationalCard title="🎯 Projet Guidé : Système de Recommandation E-commerce" type="exercice">
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl font-medium mb-4">
              🚀 Créons ensemble un système de recommandation complet pour une plateforme e-commerce !
            </p>
            <p className="text-gray-600">
              Projet fil rouge avec données réelles, défis techniques et impact business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl mb-3">📊</div>
              <h4 className="font-bold text-blue-800 mb-2">Étape 1 : Analyse des Données</h4>
              <div className="text-sm space-y-2">
                <p><strong>Données :</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>1M+ interactions utilisateur-produit</li>
                  <li>100k utilisateurs, 50k produits</li>
                  <li>Métadonnées : catégories, prix, marques</li>
                  <li>Historique temporel sur 2 ans</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl mb-3">🔧</div>
              <h4 className="font-bold text-green-800 mb-2">Étape 2 : Feature Engineering</h4>
              <div className="text-sm space-y-2">
                <p><strong>Features avancées :</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Embeddings produits (Word2Vec)</li>
                  <li>Patterns temporels saisonniers</li>
                  <li>Similarité collaborative</li>
                  <li>Profils comportementaux</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl mb-3">🤖</div>
              <h4 className="font-bold text-purple-800 mb-2">Étape 3 : Modélisation</h4>
              <div className="text-sm space-y-2">
                <p><strong>Approches :</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Matrix Factorization (SVD++)</li>
                  <li>Deep Learning (Neural CF)</li>
                  <li>Ensemble hybride</li>
                  <li>Real-time serving</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl mb-3">📈</div>
              <h4 className="font-bold text-red-800 mb-2">Étape 4 : Évaluation Business</h4>
              <div className="text-sm space-y-2">
                <p><strong>Métriques :</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>CTR (Click-Through Rate)</li>
                  <li>Conversion rate</li>
                  <li>Revenue lift</li>
                  <li>A/B testing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-6 text-xl text-center">🎯 Défis Techniques à Résoudre</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h5 className="font-bold text-red-600 mb-3">🚨 Cold Start Problem</h5>
                <p className="text-sm mb-3">Comment recommander à un nouvel utilisateur sans historique ?</p>
                <div className="bg-red-50 p-3 rounded">
                  <p className="text-xs"><strong>Solution :</strong> Utiliser les métadonnées, données démographiques et popularity-based recommendations</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h5 className="font-bold text-blue-600 mb-3">⚡ Scalabilité</h5>
                <p className="text-sm mb-3">Servir 10k+ requêtes/seconde en temps réel ?</p>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs"><strong>Solution :</strong> Pre-computing, caching, approximate algorithms (LSH)</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h5 className="font-bold text-green-600 mb-3">🎭 Diversité vs Précision</h5>
                <p className="text-sm mb-3">Équilibrer recommendations précises et découverte ?</p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs"><strong>Solution :</strong> Multi-objective optimization, exploration vs exploitation</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h5 className="font-bold text-purple-600 mb-3">📊 Données Sparse</h5>
                <p className="text-sm mb-3">99%+ de la matrice user-item est vide ?</p>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs"><strong>Solution :</strong> Matrix factorization, implicit feedback, side information</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border-2 border-yellow-200">
            <h4 className="font-bold text-orange-800 mb-4 text-center">🎊 Challenge Bonus : Impact Business</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">+23%</div>
                <p className="text-sm text-gray-600">Augmentation des ventes</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">+35%</div>
                <p className="text-sm text-gray-600">Engagement utilisateur</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">€2.1M</div>
                <p className="text-sm text-gray-600">Revenue supplémentaire annuel</p>
              </div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-700">
              <strong>Objectif :</strong> Implémenter et déployer un système qui génère un ROI mesurable ! 🚀
            </p>
          </div>
        </div>
      </EducationalCard>

      <EducationalCard title="🛠️ Ressources et Outils Professionnels" type="rappel">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300">
            <h4 className="font-bold text-blue-600 mb-3 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Notebooks Jupyter
            </h4>
            <p className="text-sm text-gray-600 mb-3">Environnement interactif pour l'expérimentation</p>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-blue-500" />
              <a href="https://jupyter.org" className="text-blue-500 text-sm hover:underline">jupyter.org</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300">
            <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
              <Target className="h-5 w-5" />
              MLflow
            </h4>
            <p className="text-sm text-gray-600 mb-3">Suivi et gestion des expériences ML</p>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-green-500" />
              <a href="https://mlflow.org" className="text-green-500 text-sm hover:underline">mlflow.org</a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300">
            <h4 className="font-bold text-purple-600 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              TensorBoard
            </h4>
            <p className="text-sm text-gray-600 mb-3">Visualisation des métriques d'entraînement</p>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 text-purple-500" />
              <a href="https://tensorboard.dev" className="text-purple-500 text-sm hover:underline">tensorboard.dev</a>
            </div>
          </div>
        </div>
      </EducationalCard>
    </section>
  );
};

export default PracticalExercisesSection;
