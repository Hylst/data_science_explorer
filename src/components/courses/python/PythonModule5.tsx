import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, Table, Filter, BarChart3, Database, FileSpreadsheet, Zap } from 'lucide-react';
import PythonInteractiveSchemas from './PythonInteractiveSchemas';

/**
 * PythonModule5 Component - Pandas pour la Data Science
 * 
 * This component provides comprehensive coverage of Pandas fundamentals
 * with a focus on data manipulation and analysis. It includes:
 * - Introduction to Pandas and its core data structures
 * - DataFrame and Series operations
 * - Data loading, cleaning, and transformation
 * - Grouping, aggregation, and pivot tables
 * - Time series analysis
 * - Practical data science workflows
 */
const PythonModule5: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Module Introduction */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-l-green-500">
        <h2 className="text-2xl font-bold text-green-900 mb-3 flex items-center gap-3">
          <Table className="h-6 w-6" />
          Module 5: Pandas - Manipulation de Données
        </h2>
        <p className="text-green-700 mb-4">
          Maîtrisez Pandas, la bibliothèque incontournable pour l'analyse et la manipulation de données. 
          Apprenez à nettoyer, transformer et analyser des datasets complexes avec facilité.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg border border-green-200">
            <div className="text-lg font-bold text-green-600">2M+</div>
            <div className="text-sm text-green-700">Téléchargements/mois</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200">
            <div className="text-lg font-bold text-green-600">100+</div>
            <div className="text-sm text-green-700">Formats de fichiers</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200">
            <div className="text-lg font-bold text-green-600">SQL-like</div>
            <div className="text-sm text-green-700">Syntaxe intuitive</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-green-200">
            <div className="text-lg font-bold text-green-600">NumPy</div>
            <div className="text-sm text-green-700">Basé sur NumPy</div>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction à Pandas */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-900">Introduction à Pandas</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Fondamental</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-green-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-green-100 rounded-b-lg">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🐼 Qu'est-ce que Pandas ?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Panel Data:</strong> Manipulation de données structurées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Excel-like:</strong> Opérations familières sur les données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>I/O puissant:</strong> Lecture/écriture de nombreux formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Intégration:</strong> Compatible avec NumPy, Matplotlib, Scikit-learn</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📊 Structures de Données</h4>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-sm">
                      <div className="border-b pb-2">
                        <div className="font-semibold text-blue-800">Series (1D)</div>
                        <div className="text-gray-600">Array indexé avec labels</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="font-semibold text-green-800">DataFrame (2D)</div>
                        <div className="text-gray-600">Table avec lignes et colonnes</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-800">Panel (3D) - Déprécié</div>
                        <div className="text-gray-600">Remplacé par MultiIndex</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
                
            {/* Interactive DataFrame Structure Visualization */}
            <div className="mt-6">
              <PythonInteractiveSchemas type="pandas-dataframe" />
            </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">💻 Installation et Import</h4>
              <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`# Installation
pip install pandas

# Import standard
import pandas as pd
import numpy as np

# Vérifier la version
print(pd.__version__)  # 2.0.3

# Configuration d'affichage
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)`}
              </pre>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 2: Series et DataFrames */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-blue-900">Series et DataFrames</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">Essentiel</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-blue-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-blue-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Series */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Series - Array 1D avec Index
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Création de Series</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# À partir d'une liste
prices = pd.Series([100, 150, 200, 175], 
                   index=['Jan', 'Feb', 'Mar', 'Apr'])
print(prices)
# Jan    100
# Feb    150
# Mar    200
# Apr    175

# À partir d'un dictionnaire
student_grades = pd.Series({
    'Alice': 85,
    'Bob': 92,
    'Charlie': 78,
    'Diana': 96
})
print(student_grades['Alice'])  # 85`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Opérations sur Series</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Statistiques descriptives
print(prices.mean())     # 156.25
print(prices.std())      # 43.01
print(prices.describe()) # Résumé complet

# Filtrage
high_prices = prices[prices > 150]
print(high_prices)
# Feb    150
# Mar    200

# Opérations mathématiques
prices_with_tax = prices * 1.2
print(prices_with_tax)`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* DataFrames */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                DataFrame - Table 2D
              </h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-green-800">Création de DataFrame</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# À partir d'un dictionnaire
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'City': ['Paris', 'Lyon', 'Marseille', 'Nice'],
    'Salary': [50000, 60000, 55000, 52000]
}
df = pd.DataFrame(data)
print(df)

# À partir de listes
df2 = pd.DataFrame([
    ['Alice', 25, 'Paris'],
    ['Bob', 30, 'Lyon']
], columns=['Name', 'Age', 'City'])`}
                      </pre>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-purple-800">Exploration des données</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Informations générales
print(df.shape)        # (4, 4)
print(df.info())       # Types et mémoire
print(df.describe())   # Stats numériques

# Premières/dernières lignes
print(df.head(2))      # 2 premières
print(df.tail(2))      # 2 dernières

# Colonnes et index
print(df.columns)      # Index(['Name', 'Age', ...])
print(df.index)        # RangeIndex(start=0, stop=4)`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Sélection et Indexation</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Sélection de colonnes
names = df['Name']              # Series
subset = df[['Name', 'Age']]    # DataFrame

# Sélection de lignes
first_row = df.iloc[0]          # Par position
alice_row = df.loc[0]           # Par label (ici identique)

# Sélection conditionnelle
young_employees = df[df['Age'] < 30]
high_earners = df[df['Salary'] > 55000]

# Sélection complexe
result = df[(df['Age'] > 25) & (df['City'] == 'Paris')]

# Modification de valeurs
df.loc[df['Age'] > 30, 'Category'] = 'Senior'
df.loc[df['Age'] <= 30, 'Category'] = 'Junior'`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 3: Chargement et Nettoyage des Données */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-purple-900">Chargement et Nettoyage des Données</span>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">Pratique</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-purple-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-purple-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Data Loading */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📁 Chargement de Données</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Formats courants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# CSV (le plus courant)
df = pd.read_csv('data.csv')
df = pd.read_csv('data.csv', sep=';', encoding='utf-8')

# Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# JSON
df = pd.read_json('data.json')

# SQL
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql('SELECT * FROM table', conn)

# Parquet (format optimisé)
df = pd.read_parquet('data.parquet')`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Options de lecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Options utiles pour CSV
df = pd.read_csv('data.csv',
    sep=',',                    # Séparateur
    header=0,                   # Ligne d'en-tête
    index_col=0,               # Colonne index
    usecols=['A', 'B', 'C'],   # Colonnes à lire
    dtype={'A': 'str'},        # Types de données
    parse_dates=['date_col'],  # Parser les dates
    na_values=['N/A', ''],     # Valeurs manquantes
    nrows=1000,                # Nombre de lignes
    skiprows=2                 # Ignorer lignes
)`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Cleaning */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🧹 Nettoyage des Données</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Gestion des Valeurs Manquantes</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Créer des données avec valeurs manquantes
data = {
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, 4, np.nan],
    'C': [1, 2, 3, 4, 5]
}
df = pd.DataFrame(data)

# Détecter les valeurs manquantes
print(df.isnull().sum())        # Nombre de NaN par colonne
print(df.isnull().any())        # Colonnes avec NaN

# Supprimer les lignes/colonnes avec NaN
df_clean = df.dropna()          # Supprimer lignes avec NaN
df_clean = df.dropna(axis=1)    # Supprimer colonnes avec NaN
df_clean = df.dropna(thresh=2)  # Garder si >= 2 valeurs non-NaN

# Remplacer les valeurs manquantes
df_filled = df.fillna(0)                    # Remplacer par 0
df_filled = df.fillna(df.mean())           # Remplacer par moyenne
df_filled = df.fillna(method='ffill')      # Forward fill
df_filled = df.fillna(method='bfill')      # Backward fill`}
                  </pre>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Détection et Traitement des Doublons</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Données avec doublons
data = {
    'Name': ['Alice', 'Bob', 'Alice', 'Charlie'],
    'Age': [25, 30, 25, 35],
    'City': ['Paris', 'Lyon', 'Paris', 'Nice']
}
df = pd.DataFrame(data)

# Détecter les doublons
print(df.duplicated())                    # Boolean mask
print(df.duplicated().sum())              # Nombre de doublons

# Supprimer les doublons
df_unique = df.drop_duplicates()          # Supprimer tous doublons
df_unique = df.drop_duplicates(['Name'])  # Basé sur colonne Name
df_unique = df.drop_duplicates(keep='last')  # Garder le dernier

# Identifier les doublons
duplicates = df[df.duplicated(keep=False)]
print(duplicates)`}
                  </pre>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Transformation des Types de Données</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Vérifier les types
print(df.dtypes)

# Convertir les types
df['Age'] = df['Age'].astype('int32')           # Entier 32-bit
df['Name'] = df['Name'].astype('category')      # Catégorie (économise mémoire)
df['Date'] = pd.to_datetime(df['Date'])         # Date
df['Price'] = pd.to_numeric(df['Price'], errors='coerce')  # Numérique

# Conversion automatique
df = df.convert_dtypes()  # Types optimaux automatiquement

# Traitement des chaînes
df['Name'] = df['Name'].str.lower()             # Minuscules
df['Name'] = df['Name'].str.strip()             # Supprimer espaces
df['Name'] = df['Name'].str.replace(' ', '_')   # Remplacer espaces`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 4: Analyse et Agrégation */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-orange-600" />
            <span className="font-semibold text-orange-900">Analyse et Agrégation</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">Avancé</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-orange-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-orange-100 rounded-b-lg">
          <div className="space-y-6">
            {/* GroupBy Operations */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🔄 Opérations GroupBy</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Groupement simple</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Données de ventes
sales_data = pd.DataFrame({
    'Region': ['North', 'South', 'North', 'East', 'South'],
    'Product': ['A', 'B', 'A', 'C', 'B'],
    'Sales': [100, 150, 120, 200, 180],
    'Quantity': [10, 15, 12, 20, 18]
})

# Grouper par région
region_stats = sales_data.groupby('Region').agg({
    'Sales': ['sum', 'mean', 'count'],
    'Quantity': 'sum'
})
print(region_stats)

# Groupement multiple
multi_group = sales_data.groupby(['Region', 'Product'])['Sales'].sum()
print(multi_group)`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Agrégations avancées</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Fonctions d'agrégation personnalisées
def sales_range(x):
    return x.max() - x.min()

# Appliquer fonction personnalisée
result = sales_data.groupby('Region')['Sales'].agg([
    'sum', 'mean', 'std', sales_range
])

# Transform (garde la forme originale)
sales_data['Sales_Mean_Region'] = sales_data.groupby('Region')['Sales'].transform('mean')

# Filter (filtrer les groupes)
high_sales_regions = sales_data.groupby('Region').filter(lambda x: x['Sales'].sum() > 200)`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pivot Tables */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📊 Tables Pivot</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Données de ventes étendues
sales_extended = pd.DataFrame({
    'Date': pd.date_range('2023-01-01', periods=12, freq='M'),
    'Region': ['North', 'South'] * 6,
    'Product': ['A', 'B', 'C'] * 4,
    'Sales': np.random.randint(100, 500, 12),
    'Quantity': np.random.randint(10, 50, 12)
})

# Table pivot simple
pivot_simple = sales_extended.pivot_table(
    values='Sales',
    index='Region',
    columns='Product',
    aggfunc='sum'
)

# Table pivot avec plusieurs agrégations
pivot_multi = sales_extended.pivot_table(
    values=['Sales', 'Quantity'],
    index='Region',
    columns='Product',
    aggfunc={'Sales': 'sum', 'Quantity': 'mean'},
    fill_value=0,
    margins=True  # Ajouter totaux
)

# Crosstab (table de contingence)
crosstab = pd.crosstab(
    sales_extended['Region'],
    sales_extended['Product'],
    values=sales_extended['Sales'],
    aggfunc='sum'
)`}
              </pre>
            </div>

            {/* Time Series */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📅 Analyse de Séries Temporelles</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-800">Manipulation des dates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Créer des données temporelles
dates = pd.date_range('2023-01-01', periods=365, freq='D')
ts_data = pd.DataFrame({
    'Date': dates,
    'Value': np.random.randn(365).cumsum()
})
ts_data.set_index('Date', inplace=True)

# Extraction d'informations temporelles
ts_data['Year'] = ts_data.index.year
ts_data['Month'] = ts_data.index.month
ts_data['Weekday'] = ts_data.index.day_name()

# Filtrage par date
q1_data = ts_data['2023-01':'2023-03']
january = ts_data[ts_data.index.month == 1]`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-orange-800">Rééchantillonnage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Rééchantillonnage mensuel
monthly = ts_data.resample('M').agg({
    'Value': ['mean', 'sum', 'std']
})

# Rééchantillonnage hebdomadaire
weekly = ts_data.resample('W').mean()

# Moyennes mobiles
ts_data['MA_7'] = ts_data['Value'].rolling(window=7).mean()
ts_data['MA_30'] = ts_data['Value'].rolling(window=30).mean()

# Décalages temporels
ts_data['Value_Lag1'] = ts_data['Value'].shift(1)
ts_data['Value_Lead1'] = ts_data['Value'].shift(-1)`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 5: Cas Pratiques Data Science */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-indigo-600" />
            <span className="font-semibold text-indigo-900">Cas Pratiques Data Science</span>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Projet</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-indigo-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-indigo-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Real-world Example */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🏪 Analyse de Données E-commerce</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Simulation de données e-commerce
np.random.seed(42)
n_orders = 10000

ecommerce_data = pd.DataFrame({
    'order_id': range(1, n_orders + 1),
    'customer_id': np.random.randint(1, 2000, n_orders),
    'product_category': np.random.choice(['Electronics', 'Clothing', 'Books', 'Home'], n_orders),
    'order_amount': np.random.exponential(50, n_orders),
    'order_date': pd.date_range('2023-01-01', periods=n_orders, freq='H'),
    'customer_age': np.random.randint(18, 70, n_orders),
    'customer_city': np.random.choice(['Paris', 'Lyon', 'Marseille', 'Toulouse'], n_orders)
})

# 1. Analyse des ventes par catégorie
category_analysis = ecommerce_data.groupby('product_category').agg({
    'order_amount': ['sum', 'mean', 'count'],
    'customer_id': 'nunique'
}).round(2)

print("Analyse par catégorie:")
print(category_analysis)

# 2. Analyse temporelle des ventes
ecommerce_data['order_month'] = ecommerce_data['order_date'].dt.to_period('M')
monthly_sales = ecommerce_data.groupby('order_month')['order_amount'].sum()

# 3. Segmentation des clients
customer_segments = ecommerce_data.groupby('customer_id').agg({
    'order_amount': ['sum', 'count', 'mean'],
    'order_date': ['min', 'max']
}).round(2)

# Aplatir les colonnes multi-niveaux
customer_segments.columns = ['total_spent', 'order_count', 'avg_order', 'first_order', 'last_order']

# Créer des segments
customer_segments['segment'] = pd.cut(
    customer_segments['total_spent'],
    bins=[0, 100, 500, 1000, float('inf')],
    labels=['Low', 'Medium', 'High', 'VIP']
)

print("\nDistribution des segments clients:")
print(customer_segments['segment'].value_counts())`}
              </pre>
            </div>

            {/* Performance Tips */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">⚡ Optimisation des Performances</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-green-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">✅ Bonnes Pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Utilisez <code>dtype='category'</code> pour les chaînes répétitives</div>
                    <div>• Préférez <code>query()</code> pour les filtres complexes</div>
                    <div>• Utilisez <code>pd.read_parquet()</code> pour les gros datasets</div>
                    <div>• Évitez les boucles, utilisez les opérations vectorisées</div>
                    <div>• Utilisez <code>chunksize</code> pour les gros fichiers</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-red-800">❌ À Éviter</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Boucles for sur les DataFrames</div>
                    <div>• <code>apply()</code> quand une fonction vectorisée existe</div>
                    <div>• Concaténation répétée de DataFrames</div>
                    <div>• Chargement complet de très gros fichiers</div>
                    <div>• Copies inutiles avec <code>copy=True</code></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Exercices Pratiques */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-l-teal-500">
        <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
          <Database className="h-5 w-5" />
          Projets Pratiques
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-teal-800">🛒 Projet 1: Analyse de Panier</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">Analysez les habitudes d'achat des clients:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Identifier les produits les plus vendus</li>
                <li>• Calculer la valeur moyenne du panier</li>
                <li>• Analyser la saisonnalité des ventes</li>
                <li>• Segmenter les clients par comportement</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-800">📈 Projet 2: Analyse Financière</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">Analysez les données boursières:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Calculer les rendements et volatilités</li>
                <li>• Créer des moyennes mobiles</li>
                <li>• Analyser les corrélations entre actions</li>
                <li>• Détecter les anomalies de prix</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PythonModule5;