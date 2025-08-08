
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  FileText, 
  BarChart3, 
  Lightbulb,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Brain
} from "lucide-react";

const DatabasesIntroSection = () => {
  const [activeAnalogy, setActiveAnalogy] = useState("library");

  const analogies = {
    library: {
      title: "📚 La Bibliothèque",
      description: "Une base de données, c'est comme une bibliothèque géante et ultra-organisée",
      details: [
        "Les tables = les rayonnages thématiques",
        "Les lignes = les livres individuels", 
        "Les colonnes = les caractéristiques (titre, auteur, année...)",
        "L'index = le catalogue pour trouver rapidement",
        "Le bibliothécaire = le SGBD qui gère tout"
      ]
    },
    city: {
      title: "🏙️ La Ville",
      description: "Pensez à une base de données comme une ville bien planifiée",
      details: [
        "Les quartiers = les schémas/bases de données",
        "Les bâtiments = les tables",
        "Les appartements = les enregistrements",
        "Les adresses = les clés primaires",
        "Les routes = les relations entre tables"
      ]
    },
    excel: {
      title: "📊 Excel... mais en mieux !",
      description: "Si vous connaissez Excel, vous comprenez déjà les bases",
      details: [
        "Feuille Excel = Table de base de données",
        "Ligne Excel = Enregistrement (row)",
        "Colonne Excel = Champ (field/column)", 
        "Mais avec des MILLIONS de lignes",
        "Et des relations complexes entre feuilles"
      ]
    }
  };

  return (
    <section id="databases-intro" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Introduction aux Bases de Données</h2>
      </div>

      {/* Définition avec analogies */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Qu'est-ce qu'une base de données ? (Avec analogies)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-lg mb-4">
                Une <strong>base de données</strong> est un système organisé pour stocker, 
                gérer et récupérer des informations de manière efficace et sécurisée.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Définition simple</h4>
                <p className="text-sm">
                  C'est comme un classeur géant, mais digital, qui peut contenir des millions 
                  d'informations organisées de façon à les retrouver en quelques millisecondes !
                </p>
              </div>

              <div className="flex gap-2 mb-4">
                {Object.entries(analogies).map(([key, analogy]) => (
                  <Button
                    key={key}
                    variant={activeAnalogy === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveAnalogy(key)}
                  >
                    {analogy.title.split(' ')[0]}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{analogies[activeAnalogy].title}</h4>
                <p className="text-sm mb-3">{analogies[activeAnalogy].description}</p>
                <ul className="text-sm space-y-1">
                  {analogies[activeAnalogy].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pourquoi c'est crucial en Data Science */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Pourquoi crucial en Data Science ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🎯 Les données sont partout</h4>
                <p className="text-sm">
                  90% du travail d'un Data Scientist consiste à collecter, nettoyer 
                  et préparer les données. Sans base de données, impossible !
                </p>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Volume :</strong> Gestion de téraoctets de données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Vitesse :</strong> Accès en temps réel aux informations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Variété :</strong> Différents types de données (texte, images, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>Véracité :</strong> Qualité et fiabilité des données</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-orange-600" />
              Pipeline Data Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <span className="font-semibold">Collecte</span>
                  <p className="text-xs text-gray-600">Ingestion des données sources</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <span className="font-semibold">Stockage</span>
                  <p className="text-xs text-gray-600">Base de données structurée</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <span className="font-semibold">Préparation</span>
                  <p className="text-xs text-gray-600">Nettoyage et transformation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                <div>
                  <span className="font-semibold">Analyse</span>
                  <p className="text-xs text-gray-600">Machine Learning et insights</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Le saviez-vous */}
      <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-cyan-600" />
            💡 Le saviez-vous ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🌍 Données mondiales</h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>2.5 quintillions</strong> d'octets de données créés chaque jour</li>
                <li>• <strong>90%</strong> des données mondiales ont été créées ces 2 dernières années</li>
                <li>• <strong>Google</strong> traite plus de 40 000 recherches par seconde</li>
                <li>• <strong>Facebook</strong> stocke plus de 300 pétaoctets de données</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏢 Impact business</h4>
              <ul className="text-sm space-y-1">
                <li>• Les entreprises <strong>data-driven</strong> sont 23x plus susceptibles d'acquérir des clients</li>
                <li>• <strong>Netflix</strong> économise 1 milliard $ par an grâce à ses algorithmes</li>
                <li>• <strong>Amazon</strong> génère 35% de ses revenus via ses recommendations</li>
                <li>• Les mauvaises données coûtent <strong>3.1 trillions $</strong> par an aux USA</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types de données */}
      <Card>
        <CardHeader>
          <CardTitle>🗂️ Types de données à gérer</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="structured" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="structured">Structurées</TabsTrigger>
              <TabsTrigger value="semi-structured">Semi-structurées</TabsTrigger>
              <TabsTrigger value="unstructured">Non-structurées</TabsTrigger>
            </TabsList>
            
            <TabsContent value="structured" className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📊 Données Structurées (20%)</h4>
                <p className="text-sm mb-3">
                  Données organisées en tables avec des colonnes et des types définis
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Exemples :</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Tables SQL</li>
                      <li>• Fichiers CSV</li>
                      <li>• Feuilles Excel</li>
                      <li>• Données transactionnelles</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Technologies :</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">Oracle</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="semi-structured" className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔗 Données Semi-structurées (10%)</h4>
                <p className="text-sm mb-3">
                  Données avec une structure flexible, souvent avec des métadonnées
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Exemples :</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Fichiers JSON</li>
                      <li>• Documents XML</li>
                      <li>• APIs REST</li>
                      <li>• Logs d'applications</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Technologies :</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Elasticsearch</Badge>
                      <Badge variant="secondary">CouchDB</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="unstructured" className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📝 Données Non-structurées (70%)</h4>
                <p className="text-sm mb-3">
                  Données sans format prédéfini, nécessitant un traitement spécialisé
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Exemples :</h5>
                    <ul className="text-xs space-y-1">
                      <li>• Textes et documents</li>
                      <li>• Images et vidéos</li>
                      <li>• Emails et réseaux sociaux</li>
                      <li>• Audio et capteurs IoT</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Technologies :</h5>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary">Hadoop</Badge>
                      <Badge variant="secondary">Spark</Badge>
                      <Badge variant="secondary">S3</Badge>
                    </div>
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

export default DatabasesIntroSection;
