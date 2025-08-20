import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Square, 
  RotateCcw, 
  Copy, 
  Download, 
  Save, 
  FolderOpen,
  Code2, 
  Terminal, 
  BookOpen, 
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  Settings,
  Eye,
  EyeOff
} from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

// Types for the playground
interface CodeTemplate {
  id: string;
  name: string;
  language: string;
  code: string;
  description: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

interface ExecutionResult {
  output: string;
  error?: string;
  executionTime: number;
  memoryUsage?: string;
}

interface PlaygroundSettings {
  theme: 'light' | 'dark';
  fontSize: number;
  autoRun: boolean;
  showLineNumbers: boolean;
  wordWrap: boolean;
}

/**
 * Interactive Code Playground Component
 * Provides a comprehensive coding environment with multiple language support,
 * templates, execution simulation, and educational features
 */
const CodePlayground: React.FC = () => {
  // State management
  const [activeLanguage, setActiveLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionHistory, setExecutionHistory] = useState<ExecutionResult[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [settings, setSettings] = useState<PlaygroundSettings>({
    theme: 'dark',
    fontSize: 14,
    autoRun: false,
    showLineNumbers: true,
    wordWrap: true
  });
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [savedCodes, setSavedCodes] = useState<{[key: string]: string}>({});
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Supported languages configuration
  const languages = [
    { id: 'python', name: 'Python', icon: '🐍', color: 'bg-blue-500' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨', color: 'bg-yellow-500' },
    { id: 'r', name: 'R', icon: '📊', color: 'bg-blue-600' },
    { id: 'sql', name: 'SQL', icon: '🗄️', color: 'bg-green-600' },
    { id: 'bash', name: 'Bash', icon: '💻', color: 'bg-gray-600' }
  ];

  // Code templates for different languages and skill levels
  const codeTemplates: CodeTemplate[] = [
    {
      id: 'python-hello',
      name: 'Hello World',
      language: 'python',
      category: 'beginner',
      tags: ['basics', 'print'],
      description: 'Premier programme Python',
      code: `# Mon premier programme Python
print("Hello, World!")
print("Bienvenue dans le monde de la programmation!")

# Variables et types
nom = "Data Scientist"
age = 25
print(f"Je suis {nom} et j'ai {age} ans")`
    },
    {
      id: 'python-data-analysis',
      name: 'Analyse de Données',
      language: 'python',
      category: 'intermediate',
      tags: ['pandas', 'numpy', 'data-science'],
      description: 'Analyse basique avec pandas',
      code: `import pandas as pd
import numpy as np

# Création d'un dataset d'exemple
data = {
    'nom': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'salaire': [50000, 60000, 70000, 55000],
    'departement': ['IT', 'Finance', 'IT', 'Marketing']
}

df = pd.DataFrame(data)
print("Dataset:")
print(df)
print("\nStatistiques descriptives:")
print(df.describe())
print(f"\nSalaire moyen: {df['salaire'].mean():.2f}€")`
    },
    {
      id: 'python-ml-basic',
      name: 'Machine Learning Simple',
      language: 'python',
      category: 'advanced',
      tags: ['machine-learning', 'scikit-learn', 'regression'],
      description: 'Régression linéaire avec scikit-learn',
      code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Génération de données synthétiques
np.random.seed(42)
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.1

# Division train/test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Entraînement du modèle
model = LinearRegression()
model.fit(X_train, y_train)

# Prédictions
score = model.score(X_test, y_test)
print(f"Score R²: {score:.3f}")
print(f"Coefficient: {model.coef_[0]:.3f}")
print(f"Intercept: {model.intercept_:.3f}")`
    },
    {
      id: 'js-dom-manipulation',
      name: 'Manipulation DOM',
      language: 'javascript',
      category: 'intermediate',
      tags: ['dom', 'web', 'interactive'],
      description: 'Interaction avec le DOM',
      code: `// Manipulation du DOM pour créer une interface interactive
const createDataDashboard = () => {
  const data = [
    { name: 'Ventes', value: 12500, color: '#3498db' },
    { name: 'Profits', value: 8300, color: '#2ecc71' },
    { name: 'Coûts', value: 4200, color: '#e74c3c' }
  ];
  
  const container = document.createElement('div');
  container.className = 'dashboard';
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.innerHTML = \`
      <h3>\${item.name}</h3>
      <p style="color: \${item.color}; font-size: 2em; font-weight: bold;">
        \${item.value.toLocaleString()}€
      </p>
    \`;
    container.appendChild(card);
  });
  
  return container;
};

console.log('Dashboard créé avec succès!');
console.log('Données traitées:', data.length, 'éléments');`
    },
    {
      id: 'r-statistics',
      name: 'Statistiques avec R',
      language: 'r',
      category: 'intermediate',
      tags: ['statistics', 'analysis', 'visualization'],
      description: 'Analyse statistique basique',
      code: `# Analyse statistique avec R
# Génération de données
set.seed(123)
data <- data.frame(
  x = rnorm(100, mean = 50, sd = 10),
  y = rnorm(100, mean = 30, sd = 5),
  group = sample(c("A", "B", "C"), 100, replace = TRUE)
)

# Statistiques descriptives
print("Résumé des données:")
summary(data)

# Corrélation
correlation <- cor(data$x, data$y)
cat("Corrélation x-y:", round(correlation, 3), "\n")

# Test t
t_test <- t.test(data$x, data$y)
cat("P-value du test t:", round(t_test$p.value, 4), "\n")

# Moyennes par groupe
aggregate(x ~ group, data, mean)`
    },
    {
      id: 'sql-queries',
      name: 'Requêtes SQL',
      language: 'sql',
      category: 'intermediate',
      tags: ['database', 'queries', 'joins'],
      description: 'Requêtes SQL pour analyse de données',
      code: `-- Analyse des ventes par région et période
-- Table: sales (id, product_id, region, amount, sale_date)

-- 1. Ventes totales par région
SELECT 
    region,
    COUNT(*) as nb_ventes,
    SUM(amount) as total_amount,
    AVG(amount) as avg_amount
FROM sales 
WHERE sale_date >= '2023-01-01'
GROUP BY region
ORDER BY total_amount DESC;

-- 2. Top 5 des produits les plus vendus
SELECT 
    p.product_name,
    COUNT(s.id) as nb_ventes,
    SUM(s.amount) as revenue
FROM sales s
JOIN products p ON s.product_id = p.id
GROUP BY p.product_name
ORDER BY revenue DESC
LIMIT 5;

-- 3. Évolution mensuelle des ventes
SELECT 
    DATE_FORMAT(sale_date, '%Y-%m') as mois,
    SUM(amount) as ventes_mensuelles
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY mois;`
    }
  ];

  // Filter templates based on selected language
  const filteredTemplates = useMemo(() => {
    return codeTemplates.filter(template => template.language === activeLanguage);
  }, [activeLanguage]);

  // Simulate code execution with realistic delays and outputs
  const executeCode = useCallback(async () => {
    if (!code.trim()) {
      setOutput('❌ Aucun code à exécuter');
      return;
    }

    setIsExecuting(true);
    setOutput('🔄 Exécution en cours...');
    
    // Simulate execution delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    try {
      let simulatedOutput = '';
      const executionTime = Math.random() * 500 + 100;
      
      // Generate realistic output based on language and code content
      if (activeLanguage === 'python') {
        if (code.includes('print')) {
          simulatedOutput = '✅ Exécution réussie\n\n';
          if (code.includes('Hello')) {
            simulatedOutput += 'Hello, World!\nBienvenue dans le monde de la programmation!\n';
          }
          if (code.includes('pandas') || code.includes('DataFrame')) {
            simulatedOutput += 'Dataset:\n     nom  age  salaire departement\n0   Alice   25    50000          IT\n1     Bob   30    60000     Finance\n2 Charlie   35    70000          IT\n3   Diana   28    55000   Marketing\n\nSalaire moyen: 58750.00€\n';
          }
          if (code.includes('LinearRegression')) {
            simulatedOutput += 'Score R²: 0.987\nCoefficient: 1.998\nIntercept: 1.003\n';
          }
        } else {
          simulatedOutput = '✅ Code exécuté avec succès\n(Aucune sortie console)';
        }
      } else if (activeLanguage === 'javascript') {
        simulatedOutput = '✅ Exécution JavaScript réussie\n\nDashboard créé avec succès!\nDonnées traitées: 3 éléments\n';
      } else if (activeLanguage === 'r') {
        simulatedOutput = '✅ Exécution R réussie\n\nRésumé des données:\n       x               y          group\nMin.   :23.16   Min.   :18.45   A:34\n1st Qu.:43.67   1st Qu.:26.89   B:33\nMean   :50.11   Mean   :29.87   C:33\n\nCorrélation x-y: 0.123\n';
      } else if (activeLanguage === 'sql') {
        simulatedOutput = '✅ Requête SQL exécutée\n\n| region | nb_ventes | total_amount | avg_amount |\n|--------|-----------|--------------|------------|\n| Nord   | 245       | 125000       | 510.20     |\n| Sud    | 198       | 98500        | 497.47     |\n\n(2 lignes retournées)';
      } else {
        simulatedOutput = '✅ Commande exécutée avec succès';
      }
      
      const result: ExecutionResult = {
        output: simulatedOutput,
        executionTime: Math.round(executionTime),
        memoryUsage: `${Math.round(Math.random() * 50 + 10)}MB`
      };
      
      setOutput(simulatedOutput);
      setExecutionHistory(prev => [result, ...prev.slice(0, 9)]); // Keep last 10 executions
      
    } catch (error) {
      const errorOutput = `❌ Erreur d'exécution:\n${error instanceof Error ? error.message : 'Erreur inconnue'}`;
      setOutput(errorOutput);
    } finally {
      setIsExecuting(false);
    }
  }, [code, activeLanguage]);

  // Load template code
  const loadTemplate = useCallback((templateId: string) => {
    const template = codeTemplates.find(t => t.id === templateId);
    if (template) {
      setCode(template.code);
      setSelectedTemplate(templateId);
      setOutput('');
    }
  }, []);

  // Save current code
  const saveCode = useCallback(() => {
    const timestamp = new Date().toISOString();
    const key = `${activeLanguage}-${timestamp}`;
    setSavedCodes(prev => ({ ...prev, [key]: code }));
    setOutput(`💾 Code sauvegardé: ${key}`);
  }, [code, activeLanguage]);

  // Copy code to clipboard
  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setOutput('📋 Code copié dans le presse-papiers');
    } catch (error) {
      setOutput('❌ Erreur lors de la copie');
    }
  }, [code]);

  // Clear everything
  const clearAll = useCallback(() => {
    setCode('');
    setOutput('');
    setSelectedTemplate('');
    setExecutionHistory([]);
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`playground-${activeLanguage}`);
    if (saved && !code) {
      setCode(saved);
    }
  }, [activeLanguage]);

  useEffect(() => {
    if (code) {
      localStorage.setItem(`playground-${activeLanguage}`, code);
    }
  }, [code, activeLanguage]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Code2 className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Code Playground Interactif
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Expérimentez avec du code en temps réel ! Choisissez un langage, utilisez nos templates 
          ou écrivez votre propre code pour apprendre en pratiquant.
        </p>
      </div>

      {/* Language Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Environnement de Développement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map(lang => (
              <Button
                key={lang.id}
                variant={activeLanguage === lang.id ? "default" : "outline"}
                onClick={() => setActiveLanguage(lang.id)}
                className="flex items-center gap-2"
              >
                <span>{lang.icon}</span>
                {lang.name}
              </Button>
            ))}
          </div>
          
          {/* Template Selection */}
          <div className="flex items-center gap-4 mb-4">
            <Select value={selectedTemplate} onValueChange={loadTemplate}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Choisir un template" />
              </SelectTrigger>
              <SelectContent>
                {filteredTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    <div className="flex items-center gap-2">
                      <Badge variant={template.category === 'beginner' ? 'secondary' : 
                                   template.category === 'intermediate' ? 'default' : 'destructive'}>
                        {template.category}
                      </Badge>
                      {template.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <Card className="mb-4">
              <CardContent className="pt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium">Thème</label>
                    <Select value={settings.theme} onValueChange={(value: 'light' | 'dark') => 
                      setSettings(prev => ({ ...prev, theme: value }))}>
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
                    <label className="text-sm font-medium">Taille police</label>
                    <Select value={settings.fontSize.toString()} onValueChange={(value) => 
                      setSettings(prev => ({ ...prev, fontSize: parseInt(value) }))}>
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
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="lineNumbers"
                      checked={settings.showLineNumbers}
                      onChange={(e) => setSettings(prev => ({ ...prev, showLineNumbers: e.target.checked }))}
                    />
                    <label htmlFor="lineNumbers" className="text-sm font-medium">Numéros de ligne</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="wordWrap"
                      checked={settings.wordWrap}
                      onChange={(e) => setSettings(prev => ({ ...prev, wordWrap: e.target.checked }))}
                    />
                    <label htmlFor="wordWrap" className="text-sm font-medium">Retour à la ligne</label>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Main Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Éditeur de Code
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={copyCode}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={saveCode}>
                  <Save className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={clearAll}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`relative ${settings.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg overflow-hidden`}>
              {settings.showLineNumbers && (
                <div className={`absolute left-0 top-0 bottom-0 w-12 ${settings.theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'} text-xs font-mono flex flex-col`}>
                  {code.split('\n').map((_, index) => (
                    <div key={index} className="px-2 py-1 text-right">
                      {index + 1}
                    </div>
                  ))}
                </div>
              )}
              <Textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`Écrivez votre code ${activeLanguage.toUpperCase()} ici...`}
                className={`min-h-96 font-mono resize-none border-0 ${settings.showLineNumbers ? 'pl-14' : 'pl-4'} ${settings.theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
                style={{ 
                  fontSize: `${settings.fontSize}px`,
                  whiteSpace: settings.wordWrap ? 'pre-wrap' : 'pre'
                }}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <Button 
                  onClick={executeCode} 
                  disabled={isExecuting || !code.trim()}
                  className="flex items-center gap-2"
                >
                  {isExecuting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Exécution...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Exécuter
                    </>
                  )}
                </Button>
                
                {isExecuting && (
                  <Button variant="outline" onClick={() => setIsExecuting(false)}>
                    <Square className="h-4 w-4 mr-2" />
                    Arrêter
                  </Button>
                )}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {code.length} caractères • {code.split('\n').length} lignes
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Console de Sortie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm min-h-96 overflow-auto">
              <pre className="whitespace-pre-wrap">{output || '💡 Cliquez sur "Exécuter" pour voir le résultat de votre code...'}</pre>
            </div>
            
            {/* Execution Stats */}
            {executionHistory.length > 0 && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Dernière exécution
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Temps:</span>
                    <span className="ml-2 font-mono">{executionHistory[0].executionTime}ms</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Mémoire:</span>
                    <span className="ml-2 font-mono">{executionHistory[0].memoryUsage}</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Templates Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Galerie de Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map(template => (
              <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => loadTemplate(template.id)}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{template.name}</h4>
                    <Badge variant={template.category === 'beginner' ? 'secondary' : 
                                 template.category === 'intermediate' ? 'default' : 'destructive'}>
                      {template.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      <CourseHighlight title="💡 Conseils pour bien utiliser le Playground" type="tip">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Pour débuter
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Commencez par les templates "beginner"</li>
              <li>• Modifiez une ligne à la fois</li>
              <li>• Utilisez les commentaires pour comprendre</li>
              <li>• N'hésitez pas à expérimenter !</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Fonctionnalités avancées
            </h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Sauvegardez vos codes favoris</li>
              <li>• Personnalisez l'éditeur dans les paramètres</li>
              <li>• Consultez l'historique d'exécution</li>
              <li>• Copiez le code pour l'utiliser ailleurs</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>
    </div>
  );
};

export default CodePlayground;