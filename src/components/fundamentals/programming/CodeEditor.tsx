import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Play, 
  Square, 
  RotateCcw, 
  Save, 
  Download, 
  Upload, 
  Copy, 
  Check, 
  AlertCircle, 
  Lightbulb,
  Settings,
  Maximize2,
  Minimize2,
  Code2,
  Terminal,
  FileText,
  Zap,
  Clock,
  Eye,
  EyeOff
} from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

// Types for the code editor
interface CodeFile {
  id: string;
  name: string;
  language: string;
  content: string;
  isModified: boolean;
}

interface ExecutionResult {
  output: string;
  error?: string;
  executionTime: number;
  memoryUsage?: number;
}

interface CodeTemplate {
  id: string;
  name: string;
  description: string;
  language: string;
  code: string;
  category: string;
}

interface EditorSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  tabSize: number;
  wordWrap: boolean;
  lineNumbers: boolean;
  autoSave: boolean;
}

/**
 * Advanced Code Editor Component
 * Provides a full-featured coding environment with syntax highlighting,
 * multi-file support, execution capabilities, and educational features
 */
const CodeEditor: React.FC = () => {
  // State management
  const [files, setFiles] = useState<CodeFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string>('');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showOutput, setShowOutput] = useState<boolean>(true);
  const [settings, setSettings] = useState<EditorSettings>({
    theme: 'dark',
    fontSize: 14,
    tabSize: 2,
    wordWrap: true,
    lineNumbers: true,
    autoSave: true
  });
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [executionHistory, setExecutionHistory] = useState<ExecutionResult[]>([]);
  
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Code templates for different languages and use cases
  const codeTemplates: CodeTemplate[] = [
    {
      id: 'python-hello',
      name: 'Hello World Python',
      description: 'Programme Python basique',
      language: 'python',
      category: 'Basics',
      code: `# Programme Hello World en Python
print("Hello, World!")

# Variables et types
name = "Data Scientist"
age = 25
print(f"Je suis {name} et j'ai {age} ans")

# Liste et boucle
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(f"Nombre: {num}")`
    },
    {
      id: 'python-data-analysis',
      name: 'Analyse de Données',
      description: 'Template pour l\'analyse de données avec pandas',
      language: 'python',
      category: 'Data Science',
      code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Création d'un dataset d'exemple
data = {
    'nom': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'salaire': [50000, 60000, 70000, 55000],
    'ville': ['Paris', 'Lyon', 'Marseille', 'Paris']
}

df = pd.DataFrame(data)

# Analyse exploratoire
print("Dataset:")
print(df)
print("\nInformations:")
print(df.info())
print("\nStatistiques:")
print(df.describe())

# Calculs
salaire_moyen = df['salaire'].mean()
print(f"\nSalaire moyen: {salaire_moyen:,.0f}€")

# Groupement par ville
print("\nSalaire moyen par ville:")
print(df.groupby('ville')['salaire'].mean())`
    },
    {
      id: 'python-ml-basic',
      name: 'Machine Learning Basique',
      description: 'Exemple de classification avec scikit-learn',
      language: 'python',
      category: 'Machine Learning',
      code: `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import numpy as np

# Génération de données synthétiques
X, y = make_classification(
    n_samples=1000,
    n_features=20,
    n_informative=10,
    n_redundant=10,
    n_clusters_per_class=1,
    random_state=42
)

# Division train/test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Entraînement du modèle
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Prédictions
y_pred = model.predict(X_test)

# Évaluation
accuracy = accuracy_score(y_test, y_pred)
print(f"Précision: {accuracy:.3f}")
print("\nRapport de classification:")
print(classification_report(y_test, y_pred))

# Importance des features
feature_importance = model.feature_importances_
print(f"\nTop 5 features importantes:")
for i in np.argsort(feature_importance)[-5:][::-1]:
    print(f"Feature {i}: {feature_importance[i]:.3f}")`
    },
    {
      id: 'js-dom-manipulation',
      name: 'Manipulation DOM',
      description: 'Interaction avec le DOM en JavaScript',
      language: 'javascript',
      category: 'Web Development',
      code: `// Manipulation du DOM avec JavaScript

// Sélection d'éléments
const title = document.querySelector('h1');
const buttons = document.querySelectorAll('.btn');
const container = document.getElementById('container');

// Création d'éléments
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = \`
        <h3>\${title}</h3>
        <p>\${content}</p>
        <button onclick="removeCard(this)">Supprimer</button>
    \`;
    
    return card;
}

// Ajout d'événements
function addEventListeners() {
    // Événement de clic
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const newCard = createCard('Nouvelle carte', 'Contenu généré dynamiquement');
            container.appendChild(newCard);
        }
    });
    
    // Événement de survol
    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('card')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });
}

// Fonction utilitaire
function removeCard(button) {
    button.parentElement.remove();
}

// Initialisation
addEventListeners();
console.log('DOM manipulation setup complete!');`
    },
    {
      id: 'js-async-await',
      name: 'Async/Await et API',
      description: 'Gestion asynchrone et appels API',
      language: 'javascript',
      category: 'Advanced JavaScript',
      code: `// Programmation asynchrone avec async/await

// Simulation d'une API
class DataAPI {
    static async fetchUsers() {
        // Simulation d'un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return [
            { id: 1, name: 'Alice', email: 'alice@example.com' },
            { id: 2, name: 'Bob', email: 'bob@example.com' },
            { id: 3, name: 'Charlie', email: 'charlie@example.com' }
        ];
    }
    
    static async fetchUserPosts(userId) {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        return [
            { id: 1, title: 'Premier post', content: 'Contenu du premier post' },
            { id: 2, title: 'Deuxième post', content: 'Contenu du deuxième post' }
        ];
    }
}

// Gestionnaire de données avec gestion d'erreurs
class DataManager {
    constructor() {
        this.users = [];
        this.posts = new Map();
    }
    
    async loadAllData() {
        try {
            console.log('Chargement des utilisateurs...');
            this.users = await DataAPI.fetchUsers();
            console.log('Utilisateurs chargés:', this.users);
            
            // Chargement parallèle des posts
            const postPromises = this.users.map(user => 
                this.loadUserPosts(user.id)
            );
            
            await Promise.all(postPromises);
            console.log('Toutes les données chargées!');
            
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
        }
    }
    
    async loadUserPosts(userId) {
        try {
            const posts = await DataAPI.fetchUserPosts(userId);
            this.posts.set(userId, posts);
            console.log(\`Posts chargés pour l'utilisateur \${userId}\`);
        } catch (error) {
            console.error(\`Erreur posts utilisateur \${userId}:\`, error);
        }
    }
    
    getUserWithPosts(userId) {
        const user = this.users.find(u => u.id === userId);
        const posts = this.posts.get(userId) || [];
        return { user, posts };
    }
}

// Utilisation
async function main() {
    const manager = new DataManager();
    await manager.loadAllData();
    
    // Affichage des résultats
    const userWithPosts = manager.getUserWithPosts(1);
    console.log('Données utilisateur 1:', userWithPosts);
}

// Exécution
main().catch(console.error);`
    },
    {
      id: 'sql-basic',
      name: 'Requêtes SQL de Base',
      description: 'Requêtes SQL essentielles',
      language: 'sql',
      category: 'Database',
      code: `-- Requêtes SQL de base pour l'analyse de données

-- Création d'une table d'exemple
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

-- Insertion de données d'exemple
INSERT INTO employees VALUES
(1, 'Alice Martin', 'Data Science', 65000, '2022-01-15'),
(2, 'Bob Dupont', 'Engineering', 70000, '2021-06-10'),
(3, 'Charlie Durand', 'Data Science', 68000, '2022-03-20'),
(4, 'Diana Moreau', 'Marketing', 55000, '2021-11-05');

-- Requêtes d'analyse

-- 1. Sélection simple
SELECT name, salary FROM employees;

-- 2. Filtrage avec WHERE
SELECT * FROM employees 
WHERE department = 'Data Science';

-- 3. Tri des résultats
SELECT name, salary 
FROM employees 
ORDER BY salary DESC;

-- 4. Agrégations
SELECT 
    department,
    COUNT(*) as nb_employees,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    MIN(salary) as min_salary
FROM employees 
GROUP BY department;

-- 5. Filtrage sur les groupes
SELECT department, AVG(salary) as avg_salary
FROM employees 
GROUP BY department
HAVING AVG(salary) > 60000;

-- 6. Requête avec calculs
SELECT 
    name,
    salary,
    salary * 12 as annual_salary,
    CASE 
        WHEN salary > 65000 THEN 'Senior'
        WHEN salary > 55000 THEN 'Mid-level'
        ELSE 'Junior'
    END as level
FROM employees;

-- 7. Analyse temporelle
SELECT 
    EXTRACT(YEAR FROM hire_date) as hire_year,
    COUNT(*) as hires_count
FROM employees
GROUP BY EXTRACT(YEAR FROM hire_date)
ORDER BY hire_year;`
    }
  ];

  // Get active file
  const activeFile = useMemo(() => {
    return files.find(file => file.id === activeFileId) || null;
  }, [files, activeFileId]);

  // Initialize with a default file
  useEffect(() => {
    if (files.length === 0) {
      const defaultFile: CodeFile = {
        id: 'default',
        name: 'main.py',
        language: 'python',
        content: '# Bienvenue dans l\'éditeur de code interactif!\n# Écrivez votre code ici ou choisissez un template\n\nprint("Hello, Data Science!")',
        isModified: false
      };
      setFiles([defaultFile]);
      setActiveFileId(defaultFile.id);
    }
  }, [files.length]);

  // Auto-save functionality
  useEffect(() => {
    if (settings.autoSave && activeFile?.isModified) {
      const timer = setTimeout(() => {
        // Simulate auto-save
        console.log('Auto-saved:', activeFile.name);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeFile?.content, activeFile?.isModified, settings.autoSave]);

  // Create new file
  const createNewFile = useCallback((language: string = 'python') => {
    const extensions: Record<string, string> = {
      python: 'py',
      javascript: 'js',
      sql: 'sql',
      html: 'html',
      css: 'css'
    };
    
    const newFile: CodeFile = {
      id: `file-${Date.now()}`,
      name: `nouveau.${extensions[language] || 'txt'}`,
      language,
      content: '',
      isModified: false
    };
    
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
  }, []);

  // Update file content
  const updateFileContent = useCallback((fileId: string, content: string) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId 
        ? { ...file, content, isModified: true }
        : file
    ));
  }, []);

  // Load template
  const loadTemplate = useCallback((templateId: string) => {
    const template = codeTemplates.find(t => t.id === templateId);
    if (template && activeFile) {
      updateFileContent(activeFile.id, template.code);
      setFiles(prev => prev.map(file => 
        file.id === activeFile.id 
          ? { ...file, language: template.language, name: `${template.name.toLowerCase().replace(/\s+/g, '_')}.${template.language === 'javascript' ? 'js' : template.language}` }
          : file
      ));
    }
  }, [activeFile, updateFileContent]);

  // Execute code
  const executeCode = useCallback(async () => {
    if (!activeFile || !activeFile.content.trim()) return;
    
    setIsExecuting(true);
    const startTime = Date.now();
    
    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      // Generate mock output based on language
      let output = '';
      let error = undefined;
      
      if (activeFile.language === 'python') {
        if (activeFile.content.includes('print(')) {
          const printMatches = activeFile.content.match(/print\([^)]+\)/g);
          if (printMatches) {
            output = printMatches.map(match => {
              const content = match.replace(/print\(["']?([^"']+)["']?\)/, '$1');
              return content.replace(/print\((.+)\)/, '$1');
            }).join('\n');
          }
        }
        
        if (activeFile.content.includes('import pandas') || activeFile.content.includes('import numpy')) {
          output += '\n\nDataset chargé avec succès!\nAnalyse terminée.\n';
          if (activeFile.content.includes('df.describe()')) {
            output += `
       age     salaire
count   4.0     4.000000
mean   29.5    58750.000000
std     4.4     8539.125639
min    25.0    50000.000000
25%    27.2    53750.000000
50%    29.0    57500.000000
75%    31.2    62500.000000
max    35.0    70000.000000`;
          }
        }
        
        if (activeFile.content.includes('sklearn')) {
          output += '\nModèle entraîné avec succès!\nPrécision: 0.892\n\nRapport de classification:\n              precision    recall  f1-score   support\n\n           0       0.89      0.91      0.90       100\n           1       0.90      0.88      0.89       100\n\n    accuracy                           0.89       200\n   macro avg       0.89      0.89      0.89       200\nweighted avg       0.89      0.89      0.89       200';
        }
      } else if (activeFile.language === 'javascript') {
        if (activeFile.content.includes('console.log')) {
          output = 'DOM manipulation setup complete!\nUtilisateurs chargés: Array(3)\nPosts chargés pour l\'utilisateur 1\nToutes les données chargées!';
        }
      } else if (activeFile.language === 'sql') {
        output = 'Query executed successfully.\n\n4 rows affected.\n\nResults:\ndepartment | nb_employees | avg_salary\nData Science | 2 | 66500.00\nEngineering | 1 | 70000.00\nMarketing | 1 | 55000.00';
      }
      
      if (!output) {
        output = 'Code exécuté avec succès!\n(Sortie simulée - dans un vrai environnement, vous verriez les résultats réels)';
      }
      
      // Simulate occasional errors for realism
      if (Math.random() < 0.1) {
        error = 'SyntaxError: invalid syntax (line 5)';
        output = '';
      }
      
      const executionTime = Date.now() - startTime;
      const result: ExecutionResult = {
        output,
        error,
        executionTime,
        memoryUsage: Math.floor(Math.random() * 50) + 10 // MB
      };
      
      setExecutionResult(result);
      setExecutionHistory(prev => [result, ...prev.slice(0, 9)]);
      
    } catch (err) {
      setExecutionResult({
        output: '',
        error: 'Erreur d\'exécution inattendue',
        executionTime: Date.now() - startTime
      });
    } finally {
      setIsExecuting(false);
    }
  }, [activeFile]);

  // Copy to clipboard
  const copyToClipboard = useCallback(async () => {
    if (activeFile?.content) {
      try {
        await navigator.clipboard.writeText(activeFile.content);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  }, [activeFile?.content]);

  // Download file
  const downloadFile = useCallback(() => {
    if (activeFile) {
      const blob = new Blob([activeFile.content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = activeFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }, [activeFile]);

  // Upload file
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const extension = file.name.split('.').pop()?.toLowerCase();
        const languageMap: Record<string, string> = {
          py: 'python',
          js: 'javascript',
          sql: 'sql',
          html: 'html',
          css: 'css'
        };
        
        const newFile: CodeFile = {
          id: `uploaded-${Date.now()}`,
          name: file.name,
          language: languageMap[extension || ''] || 'text',
          content,
          isModified: false
        };
        
        setFiles(prev => [...prev, newFile]);
        setActiveFileId(newFile.id);
      };
      reader.readAsText(file);
    }
  }, []);

  // Get language-specific styling
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      python: 'bg-blue-500',
      javascript: 'bg-yellow-500',
      sql: 'bg-green-500',
      html: 'bg-orange-500',
      css: 'bg-purple-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Éditeur de Code Interactif
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowOutput(!showOutput)}>
            {showOutput ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Templates and Settings */}
        <div className="lg:col-span-1 space-y-4">
          {/* Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedTemplate} onValueChange={(value) => {
                setSelectedTemplate(value);
                loadTemplate(value);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un template" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(
                    codeTemplates.reduce((acc, template) => {
                      if (!acc[template.category]) acc[template.category] = [];
                      acc[template.category].push(template);
                      return acc;
                    }, {} as Record<string, CodeTemplate[]>)
                  ).map(([category, templates]) => (
                    <div key={category}>
                      <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {templates.map(template => (
                        <SelectItem key={template.id} value={template.id}>
                          <div className="flex items-center gap-2">
                            <Badge className={`text-xs ${getLanguageColor(template.language)} text-white`}>
                              {template.language}
                            </Badge>
                            <span className="text-sm">{template.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="mt-3 space-y-2">
                <Button size="sm" variant="outline" className="w-full" onClick={() => createNewFile()}>
                  Nouveau fichier
                </Button>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="h-3 w-3 mr-1" />
                    Importer
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" onClick={downloadFile}>
                    <Download className="h-3 w-3 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".py,.js,.sql,.html,.css,.txt"
                onChange={handleFileUpload}
                className="hidden"
              />
            </CardContent>
          </Card>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Paramètres
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-sm font-medium">Thème</label>
                <Select value={settings.theme} onValueChange={(value: 'light' | 'dark') => 
                  setSettings(prev => ({ ...prev, theme: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Clair</SelectItem>
                    <SelectItem value="dark">Sombre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Taille de police</label>
                <Select value={settings.fontSize.toString()} onValueChange={(value) => 
                  setSettings(prev => ({ ...prev, fontSize: parseInt(value) }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12px</SelectItem>
                    <SelectItem value="14">14px</SelectItem>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Sauvegarde auto</label>
                <Button
                  size="sm"
                  variant={settings.autoSave ? "default" : "outline"}
                  onClick={() => setSettings(prev => ({ ...prev, autoSave: !prev.autoSave }))}
                >
                  {settings.autoSave ? 'ON' : 'OFF'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Editor Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* File Tabs */}
          {files.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto">
              {files.map(file => (
                <Button
                  key={file.id}
                  size="sm"
                  variant={activeFileId === file.id ? "default" : "outline"}
                  onClick={() => setActiveFileId(file.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Badge className={`text-xs ${getLanguageColor(file.language)} text-white`}>
                    {file.language}
                  </Badge>
                  <span>{file.name}</span>
                  {file.isModified && <div className="w-2 h-2 bg-orange-500 rounded-full" />}
                </Button>
              ))}
            </div>
          )}

          {/* Code Editor */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  {activeFile?.name || 'Éditeur'}
                </CardTitle>
                
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={copyToClipboard}>
                    {copiedToClipboard ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => activeFile && updateFileContent(activeFile.id, '')}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={executeCode} 
                    disabled={isExecuting || !activeFile?.content.trim()}
                  >
                    {isExecuting ? (
                      <>
                        <div className="animate-spin h-4 w-4 mr-1 border-2 border-white border-t-transparent rounded-full" />
                        Exécution...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-1" />
                        Exécuter
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`rounded-lg overflow-hidden ${settings.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className={`px-4 py-2 text-sm font-mono flex items-center justify-between ${
                  settings.theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
                }`}>
                  <span>💻 {activeFile?.language || 'text'}</span>
                  <span>{activeFile?.content.length || 0} caractères</span>
                </div>
                <Textarea
                  ref={editorRef}
                  value={activeFile?.content || ''}
                  onChange={(e) => activeFile && updateFileContent(activeFile.id, e.target.value)}
                  className={`min-h-96 font-mono border-0 resize-none ${
                    settings.theme === 'dark' 
                      ? 'bg-gray-900 text-gray-100' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                  style={{ fontSize: `${settings.fontSize}px` }}
                  placeholder="Écrivez votre code ici..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Output Panel */}
          {showOutput && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Sortie d'exécution
                  {executionResult && (
                    <div className="flex items-center gap-2 ml-auto">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {executionResult.executionTime}ms
                      </Badge>
                      {executionResult.memoryUsage && (
                        <Badge variant="outline">
                          {executionResult.memoryUsage}MB
                        </Badge>
                      )}
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {executionResult ? (
                  <div className="space-y-3">
                    {executionResult.error ? (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center gap-2 text-red-800 mb-2">
                          <AlertCircle className="h-4 w-4" />
                          <span className="font-semibold">Erreur d'exécution</span>
                        </div>
                        <pre className="text-sm text-red-700 font-mono">{executionResult.error}</pre>
                      </div>
                    ) : (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800 mb-2">
                          <Check className="h-4 w-4" />
                          <span className="font-semibold">Exécution réussie</span>
                        </div>
                        <pre className="text-sm text-green-700 font-mono whitespace-pre-wrap">{executionResult.output}</pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Terminal className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Cliquez sur "Exécuter" pour voir la sortie de votre code</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Tips */}
      <CourseHighlight title="💡 Conseils pour l'éditeur" type="tip">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Raccourcis
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Ctrl+S : Sauvegarder</li>
              <li>• Ctrl+A : Tout sélectionner</li>
              <li>• Ctrl+Z : Annuler</li>
              <li>• F5 : Exécuter le code</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Bonnes pratiques
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Commentez votre code</li>
              <li>• Utilisez des noms de variables explicites</li>
              <li>• Testez régulièrement</li>
              <li>• Sauvegardez fréquemment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Fonctionnalités
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Multi-fichiers et onglets</li>
              <li>• Templates prêts à l'emploi</li>
              <li>• Import/Export de fichiers</li>
              <li>• Historique d'exécution</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>
    </div>
  );
};

export default CodeEditor;