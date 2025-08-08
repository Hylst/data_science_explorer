
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, FileText, Network, Key, Lightbulb, Zap, AlertCircle } from "lucide-react";

const NoSQLSection = () => {
  const [selectedType, setSelectedType] = useState("document");

  const nosqlTypes = {
    document: {
      icon: <FileText className="h-5 w-5" />,
      title: "Document Stores",
      description: "Stockage de documents JSON/BSON flexibles",
      examples: ["MongoDB", "CouchDB", "Amazon DocumentDB"],
      useCases: [
        "Applications web modernes",
        "Catalogues de produits",
        "Gestion de contenu",
        "Profils utilisateurs"
      ],
      structure: `{
  "_id": "507f1f77bcf86cd799439011",
  "nom": "Alice Dupont",
  "age": 28,
  "competences": ["Python", "SQL", "Machine Learning"],
  "projets": [
    {
      "nom": "Analyse sentiment",
      "statut": "terminé",
      "technologies": ["NLP", "TensorFlow"]
    }
  ],
  "adresse": {
    "rue": "123 rue de la Data",
    "ville": "Paris",
    "cp": "75001"
  }
}`,
      advantages: [
        "Schema flexible et évolutif",
        "Requêtes riches et expressives", 
        "Scaling horizontal naturel",
        "Performance sur lectures"
      ],
      disadvantages: [
        "Pas de transactions ACID complètes",
        "Risque de duplication des données",
        "Courbe d'apprentissage"
      ]
    },
    keyvalue: {
      icon: <Key className="h-5 w-5" />,
      title: "Key-Value Stores", 
      description: "Stockage simple clé-valeur ultra-rapide",
      examples: ["Redis", "Amazon DynamoDB", "Riak"],
      useCases: [
        "Cache et sessions",
        "Compteurs en temps réel",
        "Configuration d'applications",
        "Queues de messages"
      ],
      structure: `# Cache utilisateur
user:1234 -> {"nom": "Alice", "derniere_connexion": "2024-01-15"}

# Compteurs temps réel  
page_views:accueil -> 156789
active_users:now -> 1547

# Session web
session:abc123 -> {"user_id": 1234, "panier": [1, 5, 12]}

# Configuration
app:maintenance_mode -> false
app:max_upload_size -> 10485760`,
      advantages: [
        "Performance exceptionnelle",
        "Simplicité extrême",
        "Scaling linéaire",
        "Faible latence"
      ],
      disadvantages: [
        "Modèle de données très simple",
        "Pas de requêtes complexes",
        "Pas de relations entre entités"
      ]
    },
    columnar: {
      icon: <Network className="h-5 w-5" />,
      title: "Column Family",
      description: "Stockage orienté colonnes pour Big Data",
      examples: ["Cassandra", "HBase", "Amazon SimpleDB"],
      useCases: [
        "Analytics et reporting",
        "Logs et métriques",
        "IoT et capteurs",
        "Time series data"
      ],
      structure: `# Famille de colonnes : user_activity
Row Key: user_1234_2024-01-15

Column Family: actions
  login:09:30:00 -> "success"
  page_view:09:31:15 -> "/dashboard" 
  click:09:32:45 -> "button_analytics"
  logout:10:45:20 -> "manual"

Column Family: metrics  
  session_duration -> 4500
  pages_visited -> 12
  actions_count -> 27`,
      advantages: [
        "Très performant sur gros volumes",
        "Compression excellente",
        "Distribution automatique",
        "Écriture ultra-rapide"
      ],
      disadvantages: [
        "Complexité de modélisation",
        "Requêtes limitées",
        "Courbe d'apprentissage élevée"
      ]
    },
    graph: {
      icon: <Network className="h-5 w-5" />,
      title: "Graph Databases",
      description: "Gestion des relations et réseaux complexes",
      examples: ["Neo4j", "Amazon Neptune", "ArangoDB"],
      useCases: [
        "Réseaux sociaux",
        "Détection de fraude",
        "Moteurs de recommandation",
        "Analyse de dépendances"
      ],
      structure: `// Cypher Query (Neo4j)
CREATE (alice:User {nom: "Alice", age: 28})
CREATE (bob:User {nom: "Bob", age: 32})
CREATE (python:Skill {nom: "Python"})
CREATE (ml:Skill {nom: "Machine Learning"})

CREATE (alice)-[:KNOWS {since: 2020}]->(bob)
CREATE (alice)-[:HAS_SKILL {level: "expert"}]->(python)
CREATE (alice)-[:HAS_SKILL {level: "intermediate"}]->(ml)

// Recommandation : amis des amis avec compétences similaires
MATCH (user:User {nom: "Alice"})
      -[:KNOWS]->()-[:KNOWS]->(recommendation:User)
WHERE NOT (user)-[:KNOWS]->(recommendation)
  AND (user)-[:HAS_SKILL]->()<-[:HAS_SKILL]-(recommendation)
RETURN recommendation`,
      advantages: [
        "Requêtes de traversée naturelles",
        "Performance sur relations complexes",
        "Modélisation intuitive",
        "ACID complet"
      ],
      disadvantages: [
        "Courbe d'apprentissage spécifique",
        "Pas optimal pour données tabulaires",
        "Écosystème plus restreint"
      ]
    }
  };

  return (
    <section id="nosql" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Cloud className="h-8 w-8 text-purple-600" />
        <h2 className="text-3xl font-bold">Bases NoSQL - Au-delà du relationnel</h2>
      </div>

      {/* Introduction NoSQL */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Pourquoi NoSQL ? L'évolution nécessaire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                <strong>NoSQL</strong> (Not Only SQL) répond aux limites du relationnel face aux défis modernes :
                volumes massifs, variété des données, scaling horizontal.
              </p>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🚀 Les 3V du Big Data</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Volume :</strong> Téraoctets → Pétaoctets</li>
                  <li>• <strong>Vitesse :</strong> Temps réel, millions de requêtes/sec</li>
                  <li>• <strong>Variété :</strong> JSON, XML, images, logs, graphes...</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-1">❌ Limites SQL classique</h5>
                <ul className="text-xs space-y-1">
                  <li>• Schema rigide difficile à faire évoluer</li>
                  <li>• Scaling vertical limité et coûteux</li>
                  <li>• Jointures complexes sur gros volumes</li>
                  <li>• Inadapté aux données semi-structurées</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-1">✅ Avantages NoSQL</h5>
                <ul className="text-xs space-y-1">
                  <li>• Flexibilité du schema</li>
                  <li>• Scaling horizontal natif</li>
                  <li>• Performance sur gros volumes</li>
                  <li>• Adapté aux données modernes</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sélecteur de types */}
      <Card>
        <CardHeader>
          <CardTitle>🗂️ Les 4 familles NoSQL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {Object.entries(nosqlTypes).map(([key, type]) => (
              <Button
                key={key}
                variant={selectedType === key ? "default" : "outline"}
                onClick={() => setSelectedType(key)}
                className="h-auto py-3 flex flex-col items-center gap-2"
              >
                {type.icon}
                <span className="text-xs font-medium">{type.title}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {/* En-tête du type sélectionné */}
            <div className="flex items-center gap-3 mb-4">
              {nosqlTypes[selectedType].icon}
              <div>
                <h3 className="text-xl font-bold">{nosqlTypes[selectedType].title}</h3>
                <p className="text-gray-600">{nosqlTypes[selectedType].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Détails et cas d'usage */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🎯 Cas d'usage typiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {nosqlTypes[selectedType].useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🏢 Technologies populaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {nosqlTypes[selectedType].examples.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Exemple de structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">📋 Structure des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs">
                      <code>{nosqlTypes[selectedType].structure}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Avantages et inconvénients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">✅ Avantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nosqlTypes[selectedType].advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">⚠️ Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {nosqlTypes[selectedType].disadvantages.map((disadvantage, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span className="text-sm">{disadvantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Théorème CAP */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            📐 Théorème CAP : Choisir ses compromis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Le théorème CAP stipule qu'un système distribué ne peut garantir simultanément 
            que 2 des 3 propriétés suivantes :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-blue-800 mb-2">🔒 Consistency</h4>
              <p className="text-sm">
                Tous les nœuds voient les mêmes données au même moment
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-green-800 mb-2">🌐 Availability</h4>
              <p className="text-sm">
                Le système reste opérationnel même en cas de panne
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-purple-800 mb-2">📡 Partition tolerance</h4>
              <p className="text-sm">
                Le système continue de fonctionner malgré les coupures réseau
              </p>
            </div>
          </div>

          <Tabs defaultValue="cp" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cp">CP (Consistency + Partition)</TabsTrigger>
              <TabsTrigger value="ap">AP (Availability + Partition)</TabsTrigger>
              <TabsTrigger value="ca">CA (Consistency + Availability)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cp" className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔒 Systèmes CP</h4>
                <p className="text-sm mb-3">
                  Privilégient la cohérence : en cas de partition réseau, certains nœuds 
                  deviennent indisponibles pour maintenir la cohérence.
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-sm">Exemples :</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">HBase</Badge>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Cas d'usage :</span>
                    <span className="text-sm"> Systèmes financiers, inventaires</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ap" className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🌐 Systèmes AP</h4>
                <p className="text-sm mb-3">
                  Privilégient la disponibilité : le système reste accessible même si 
                  les données peuvent être temporairement incohérentes.
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-sm">Exemples :</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary">Cassandra</Badge>
                      <Badge variant="secondary">DynamoDB</Badge>
                      <Badge variant="secondary">CouchDB</Badge>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Cas d'usage :</span>
                    <span className="text-sm"> Réseaux sociaux, catalogues produits</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ca" className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🏢 Systèmes CA</h4>
                <p className="text-sm mb-3">
                  Garantissent cohérence et disponibilité mais ne tolèrent pas les partitions.
                  Principalement les SGBD relationnels traditionnels.
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-sm">Exemples :</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Oracle</Badge>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Limitation :</span>
                    <span className="text-sm"> Ne sont pas vraiment distribués</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default NoSQLSection;
