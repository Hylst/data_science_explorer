import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, BookOpen, Play, Code, Share2, Zap } from 'lucide-react';
import PythonInteractiveSchemas from './PythonInteractiveSchemas';

/**
 * PythonModule7 Component - Jupyter Notebook pour la Data Science
 * 
 * This component provides comprehensive coverage of Jupyter Notebook
 * with a focus on data science workflows. It includes:
 * - Introduction to Jupyter ecosystem
 * - Installation and setup
 * - Notebook interface and features
 * - Best practices for data science
 * - Extensions and customization
 * - Collaboration and sharing
 */
const PythonModule7: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Module Introduction */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-l-orange-500">
        <h2 className="text-2xl font-bold text-orange-900 mb-3 flex items-center gap-3">
          <BookOpen className="h-6 w-6" />
          Module 7: Jupyter Notebook - Environnement Interactif
        </h2>
        <p className="text-orange-700 mb-4">
          Découvrez Jupyter Notebook, l'environnement de développement interactif de référence 
          pour la Data Science. Combinez code, visualisations et documentation dans un seul outil.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <div className="text-lg font-bold text-orange-600">40+</div>
            <div className="text-sm text-orange-700">Langages supportés</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <div className="text-lg font-bold text-orange-600">Web</div>
            <div className="text-sm text-orange-700">Interface navigateur</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <div className="text-lg font-bold text-orange-600">Interactif</div>
            <div className="text-sm text-orange-700">Exécution cellule par cellule</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <div className="text-lg font-bold text-orange-600">Partage</div>
            <div className="text-sm text-orange-700">Collaboration facile</div>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction à Jupyter */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-orange-600" />
            <span className="font-semibold text-orange-900">Introduction à l'Écosystème Jupyter</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">Fondamental</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-orange-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-orange-100 rounded-b-lg">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🚀 Qu'est-ce que Jupyter ?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>Notebook interactif:</strong> Code, texte, visualisations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>Multi-langages:</strong> Python, R, Julia, Scala, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>Reproductible:</strong> Recherche et analyse reproductibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span><strong>Collaboration:</strong> Partage et versioning faciles</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🏗️ Écosystème Jupyter</h4>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-sm">
                      <div className="border-b pb-2">
                        <div className="font-semibold text-blue-800">Jupyter Notebook</div>
                        <div className="text-gray-600">Interface web classique</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="font-semibold text-green-800">JupyterLab</div>
                        <div className="text-gray-600">IDE moderne et extensible</div>
                      </div>
                      <div className="border-b pb-2">
                        <div className="font-semibold text-purple-800">JupyterHub</div>
                        <div className="text-gray-600">Déploiement multi-utilisateurs</div>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-800">Voilà</div>
                        <div className="text-gray-600">Applications web interactives</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">💻 Installation et Démarrage</h4>
              <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`# Installation via pip
pip install jupyter

# Installation via conda (recommandé)
conda install jupyter

# Installation complète avec JupyterLab
pip install jupyterlab

# Démarrer Jupyter Notebook
jupyter notebook

# Démarrer JupyterLab
jupyter lab

# Spécifier un port
jupyter notebook --port=8889

# Accès distant (attention sécurité !)
jupyter notebook --ip=0.0.0.0 --no-browser`}
              </pre>
            </div>
            
            {/* Interactive Jupyter Workflow */}
            <div className="mt-6">
              <PythonInteractiveSchemas type="jupyter-workflow" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 2: Interface et Navigation */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <div className="flex items-center gap-3">
            <Code className="h-5 w-5 text-blue-600" />
            <span className="font-semibold text-blue-900">Interface et Navigation</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">Interface</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-blue-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-blue-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Notebook Interface */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Interface du Notebook
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Composants principaux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">📋</span>
                        <div>
                          <div className="font-semibold">Menu Bar</div>
                          <div className="text-gray-600">File, Edit, View, Insert, Cell, Kernel, Help</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">🔧</span>
                        <div>
                          <div className="font-semibold">Toolbar</div>
                          <div className="text-gray-600">Boutons d'actions rapides</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">📝</span>
                        <div>
                          <div className="font-semibold">Cellules</div>
                          <div className="text-gray-600">Code, Markdown, Raw</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">⚡</span>
                        <div>
                          <div className="font-semibold">Kernel</div>
                          <div className="text-gray-600">Moteur d'exécution Python</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Raccourcis clavier essentiels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="font-mono bg-gray-100 p-1 rounded">Shift + Enter</div>
                        <div>Exécuter cellule</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">Ctrl + Enter</div>
                        <div>Exécuter sur place</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">Alt + Enter</div>
                        <div>Exécuter + nouvelle</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">A</div>
                        <div>Insérer au-dessus</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">B</div>
                        <div>Insérer en-dessous</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">DD</div>
                        <div>Supprimer cellule</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">M</div>
                        <div>Mode Markdown</div>
                        <div className="font-mono bg-gray-100 p-1 rounded">Y</div>
                        <div>Mode Code</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cell Types */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Types de Cellules
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">💻 Cellules de Code</h5>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Cellule de code Python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Les variables sont partagées entre cellules
data = pd.DataFrame({
    'x': np.random.randn(100),
    'y': np.random.randn(100)
})

# Affichage automatique du dernier résultat
data.head()

# Utiliser print() pour afficher plusieurs résultats
print(f"Forme du dataset: {data.shape}")
print(f"Colonnes: {list(data.columns)}")
data.describe()`}
                  </pre>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">📝 Cellules Markdown</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-purple-800">Syntaxe Markdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`# Titre Principal
## Sous-titre
### Sous-sous-titre

**Texte en gras**
*Texte en italique*

- Liste à puces
- Élément 2
  - Sous-élément

1. Liste numérotée
2. Élément 2

[Lien](https://jupyter.org)

\`code inline\`

\`\`\`python
# Bloc de code
print("Hello World")
\`\`\`

> Citation

| Col1 | Col2 |
|------|------|
| A    | B    |`}
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-orange-800">LaTeX et Formules</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`# Formules mathématiques

Formule inline: $E = mc^2$

Formule centrée:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

Matrice:
$$\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}$$

Somme:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\ldots + x_n$$

Intégrale:
$$\\int_{a}^{b} f(x) dx$$`}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 3: Workflow Data Science */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <div className="flex items-center gap-3">
            <Play className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-purple-900">Workflow Data Science</span>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">Pratique</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-purple-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-purple-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Project Structure */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📁 Structure de Projet</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-800">Organisation recommandée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`projet-data-science/
├── data/
│   ├── raw/              # Données brutes
│   ├── processed/        # Données nettoyées
│   └── external/         # Données externes
├── notebooks/
│   ├── 01-exploration.ipynb
│   ├── 02-cleaning.ipynb
│   ├── 03-analysis.ipynb
│   └── 04-modeling.ipynb
├── src/
│   ├── data/            # Scripts de données
│   ├── features/        # Feature engineering
│   ├── models/          # Modèles
│   └── visualization/   # Visualisations
├── reports/
│   ├── figures/         # Graphiques
│   └── final_report.html
├── requirements.txt
└── README.md`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Bonnes pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• <strong>Nommage:</strong> Préfixes numériques pour l'ordre</div>
                    <div>• <strong>Documentation:</strong> Markdown pour expliquer</div>
                    <div>• <strong>Modularité:</strong> Fonctions réutilisables</div>
                    <div>• <strong>Versioning:</strong> Git avec .gitignore adapté</div>
                    <div>• <strong>Environnement:</strong> requirements.txt ou environment.yml</div>
                    <div>• <strong>Nettoyage:</strong> Supprimer les outputs avant commit</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Science Workflow */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🔄 Workflow Type</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# ============================================================================
# NOTEBOOK: 01-exploration-donnees.ipynb
# OBJECTIF: Exploration initiale du dataset
# ============================================================================

# 1. IMPORTS ET CONFIGURATION
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path

# Configuration
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")
pd.set_option('display.max_columns', None)

# 2. CHARGEMENT DES DONNÉES
data_path = Path('../data/raw/dataset.csv')
df = pd.read_csv(data_path)

print(f"📊 Dataset chargé: {df.shape[0]} lignes, {df.shape[1]} colonnes")

# 3. EXPLORATION INITIALE
## 3.1 Aperçu général
df.head()

## 3.2 Informations sur les colonnes
df.info()

## 3.3 Statistiques descriptives
df.describe()

## 3.4 Valeurs manquantes
missing_data = df.isnull().sum()
missing_percent = 100 * missing_data / len(df)
missing_table = pd.DataFrame({
    'Manquantes': missing_data,
    'Pourcentage': missing_percent
})
print(missing_table[missing_table['Manquantes'] > 0].sort_values('Pourcentage', ascending=False))

# 4. VISUALISATIONS EXPLORATOIRES
## 4.1 Distribution des variables numériques
numeric_cols = df.select_dtypes(include=[np.number]).columns
fig, axes = plt.subplots(2, 2, figsize=(15, 10))
for i, col in enumerate(numeric_cols[:4]):
    ax = axes[i//2, i%2]
    df[col].hist(bins=30, ax=ax, alpha=0.7)
    ax.set_title(f'Distribution de {col}')
    ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

## 4.2 Matrice de corrélation
corr_matrix = df[numeric_cols].corr()
plt.figure(figsize=(10, 8))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('Matrice de Corrélation')
plt.show()

# 5. INSIGHTS PRÉLIMINAIRES
print("\n🔍 INSIGHTS PRÉLIMINAIRES:")
print("- [À compléter après analyse]")
print("- [Patterns identifiés]")
print("- [Problèmes de qualité des données]")
print("- [Prochaines étapes]")`}
              </pre>
            </div>

            {/* Magic Commands */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">✨ Commandes Magiques</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-800">Commandes utiles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Mesurer le temps d'exécution
%time df.groupby('category').sum()
%timeit df.groupby('category').sum()

# Profiling de performance
%prun df.groupby('category').sum()

# Afficher les variables
%who
%whos

# Historique des commandes
%history

# Exécuter un script externe
%run script.py

# Charger du code depuis un fichier
%load script.py

# Sauvegarder cellules dans un fichier
%save script.py 1-10

# Configuration matplotlib
%matplotlib inline
%matplotlib widget  # Interactif`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-orange-800">Commandes système</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Commandes shell
!ls -la
!pwd
!pip install package

# Variables d'environnement
!echo $PATH

# Capturer sortie dans variable
files = !ls *.csv
print(files)

# Écrire dans un fichier
%%writefile script.py
import pandas as pd
print("Hello from script!")

# Exécuter du HTML
%%html
<h1>Titre HTML</h1>
<p>Paragraphe</p>

# Exécuter du JavaScript
%%javascript
alert('Hello from JS!');

# Bash dans une cellule
%%bash
echo "Hello from bash"
ls -la`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 4: Extensions et Personnalisation */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-900">Extensions et Personnalisation</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Avancé</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-green-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-green-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Popular Extensions */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🔌 Extensions Populaires</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">Extensions essentielles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# Jupyter Extensions
pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install --user
jupyter nbextension enable --py widgetsnbextension

# Extensions populaires:
# - Table of Contents (TOC)
# - Variable Inspector
# - Code Folding
# - Collapsible Headings
# - ExecuteTime
# - Autopep8

# JupyterLab Extensions
jupyter labextension install @jupyterlab/toc
jupyter labextension install @lckr/jupyterlab_variableinspector
jupyter labextension install @jupyterlab/git

# Widgets interactifs
pip install ipywidgets
jupyter nbextension enable --py widgetsnbextension`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Widgets interactifs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`import ipywidgets as widgets
from IPython.display import display
import matplotlib.pyplot as plt

# Slider interactif
def plot_function(a, b):
    x = np.linspace(-10, 10, 100)
    y = a * x + b
    plt.figure(figsize=(8, 4))
    plt.plot(x, y)
    plt.grid(True)
    plt.title(f'y = {a}x + {b}')
    plt.show()

# Interface interactive
widgets.interact(plot_function,
                a=widgets.FloatSlider(min=-5, max=5, step=0.1, value=1),
                b=widgets.FloatSlider(min=-10, max=10, step=0.5, value=0))

# Dropdown et boutons
dropdown = widgets.Dropdown(
    options=['Option 1', 'Option 2', 'Option 3'],
    value='Option 1',
    description='Choix:'
)

button = widgets.Button(description='Cliquez-moi!')

def on_button_click(b):
    print(f"Bouton cliqué! Choix: {dropdown.value}")

button.on_click(on_button_click)
display(dropdown, button)`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customization */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🎨 Personnalisation</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Configuration Jupyter (~/.jupyter/jupyter_notebook_config.py)
c.NotebookApp.ip = '0.0.0.0'
c.NotebookApp.port = 8888
c.NotebookApp.open_browser = False
c.NotebookApp.notebook_dir = '/path/to/notebooks'

# CSS personnalisé (~/.jupyter/custom/custom.css)
.CodeMirror {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.4;
}

.rendered_html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
}

# Thèmes avec jupyterthemes
pip install jupyterthemes

# Lister les thèmes disponibles
jt -l

# Appliquer un thème
jt -t onedork -fs 12 -altp -tfs 14 -nfs 14 -cellw 90% -T

# Restaurer le thème par défaut
jt -r

# Configuration startup (~/.ipython/profile_default/startup/)
# Fichier 00-imports.py
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Configuration par défaut
pd.set_option('display.max_columns', None)
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

print("📚 Bibliothèques chargées automatiquement!")`}
              </pre>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Section 5: Collaboration et Partage */}
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
          <div className="flex items-center gap-3">
            <Share2 className="h-5 w-5 text-teal-600" />
            <span className="font-semibold text-teal-900">Collaboration et Partage</span>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">Partage</Badge>
          </div>
          <ChevronDown className="h-4 w-4 text-teal-600" />
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4 bg-white border border-teal-100 rounded-b-lg">
          <div className="space-y-6">
            {/* Version Control */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📝 Contrôle de Version</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-teal-800">Git avec Notebooks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`# .gitignore pour notebooks
# Ignorer les checkpoints
.ipynb_checkpoints/

# Ignorer les outputs (optionnel)
*.ipynb

# Garder seulement le code source
# Utiliser nbstripout
pip install nbstripout

# Installer le hook git
nbstripout --install

# Nettoyer un notebook manuellement
nbstripout notebook.ipynb

# Convertir notebook en script Python
jupyter nbconvert --to script notebook.ipynb

# Diff notebooks avec nbdime
pip install nbdime
nbdime config-git --enable

# Voir les différences
nbdiff notebook1.ipynb notebook2.ipynb

# Merge de notebooks
nbmerge base.ipynb local.ipynb remote.ipynb`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-800">Bonnes pratiques Git</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• <strong>Nettoyer outputs:</strong> Avant chaque commit</div>
                    <div>• <strong>Commits atomiques:</strong> Une fonctionnalité par commit</div>
                    <div>• <strong>Messages clairs:</strong> Décrire les changements</div>
                    <div>• <strong>Branches:</strong> Feature branches pour expérimentations</div>
                    <div>• <strong>Tags:</strong> Marquer les versions importantes</div>
                    <div>• <strong>README:</strong> Documenter le projet</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sharing Options */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">🌐 Options de Partage</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-800">GitHub/GitLab</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Rendu automatique des notebooks</div>
                    <div>• Collaboration via Pull Requests</div>
                    <div>• GitHub Pages pour publication</div>
                    <div>• Actions CI/CD pour tests</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-800">NBViewer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Rendu public de notebooks</div>
                    <div>• URL: nbviewer.org</div>
                    <div>• Supporte GitHub, Gist</div>
                    <div>• Pas d'exécution, juste affichage</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-orange-800">Binder</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div>• Notebooks interactifs en ligne</div>
                    <div>• Environnement reproductible</div>
                    <div>• Gratuit via mybinder.org</div>
                    <div>• Nécessite requirements.txt</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Export Options */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">📤 Options d'Export</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# Conversion avec nbconvert

# HTML (pour partage web)
jupyter nbconvert --to html notebook.ipynb
jupyter nbconvert --to html --no-input notebook.ipynb  # Sans code

# PDF (nécessite LaTeX)
jupyter nbconvert --to pdf notebook.ipynb

# Slides (présentation)
jupyter nbconvert --to slides notebook.ipynb
jupyter nbconvert --to slides --post serve notebook.ipynb  # Servir

# Script Python
jupyter nbconvert --to script notebook.ipynb

# Markdown
jupyter nbconvert --to markdown notebook.ipynb

# LaTeX
jupyter nbconvert --to latex notebook.ipynb

# Avec template personnalisé
jupyter nbconvert --to html --template custom_template.tpl notebook.ipynb

# Batch conversion
jupyter nbconvert --to html *.ipynb

# Configuration personnalisée
jupyter nbconvert --to html --config myconfig.py notebook.ipynb`}
              </pre>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Exercices Pratiques */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-l-amber-500">
        <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Projets Jupyter
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-amber-800">📊 Projet 1: Rapport d'Analyse</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">Créez un rapport complet d'analyse de données:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Structure avec table des matières</li>
                <li>• Sections Markdown documentées</li>
                <li>• Visualisations intégrées</li>
                <li>• Export HTML professionnel</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-orange-800">🎮 Projet 2: Dashboard Interactif</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">Développez un dashboard avec widgets:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Sliders pour paramètres</li>
                <li>• Dropdowns pour sélection</li>
                <li>• Graphiques mis à jour en temps réel</li>
                <li>• Interface utilisateur intuitive</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PythonModule7;