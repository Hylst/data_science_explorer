import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, AlertTriangle, Shield, FileText, BarChart3, Settings } from "lucide-react";
import CourseHighlight from "@/components/courses/CourseHighlight";

/**
 * Validation Section Component
 * Provides comprehensive data quality validation and testing tools
 */
export const ValidationSection: React.FC = () => {
  const [activeTest, setActiveTest] = useState<string>("quality");
  const [validationResults, setValidationResults] = useState<any>(null);

  /**
   * Data quality test categories
   */
  const testCategories = [
    {
      id: "quality",
      name: "Tests de Qualité",
      icon: CheckCircle,
      description: "Complétude, exactitude, cohérence"
    },
    {
      id: "metrics",
      name: "Métriques",
      icon: BarChart3,
      description: "KPIs et indicateurs de performance"
    },
    {
      id: "compliance",
      name: "Conformité",
      icon: Shield,
      description: "Respect des règles et standards"
    },
    {
      id: "business",
      name: "Cohérence Métier",
      icon: Settings,
      description: "Règles business et logique métier"
    }
  ];

  /**
   * Sample validation test results
   */
  const qualityTests = [
    {
      name: "Complétude des données",
      status: "success",
      score: 97.3,
      details: "356 valeurs manquantes sur 15,420 enregistrements",
      critical: false
    },
    {
      name: "Validité des formats",
      status: "warning",
      score: 89.1,
      details: "23 emails invalides, 12 codes postaux incorrects",
      critical: false
    },
    {
      name: "Cohérence temporelle",
      status: "error",
      score: 76.8,
      details: "45 dates de fin antérieures aux dates de début",
      critical: true
    },
    {
      name: "Unicité des identifiants",
      status: "success",
      score: 99.9,
      details: "2 doublons détectés sur les IDs clients",
      critical: true
    }
  ];

  /**
   * Business rules validation
   */
  const businessRules = [
    {
      rule: "Âge entre 0 et 120 ans",
      passed: 15418,
      failed: 2,
      status: "success"
    },
    {
      rule: "Montant vente {'>'} 0",
      passed: 15401,
      failed: 19,
      status: "warning"
    },
    {
      rule: "Date livraison ≥ Date commande",
      passed: 15375,
      failed: 45,
      status: "error"
    },
    {
      rule: "Code produit dans catalogue",
      passed: 15420,
      failed: 0,
      status: "success"
    }
  ];

  /**
   * Get status icon based on test result
   */
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  /**
   * Run validation tests simulation
   */
  const runValidation = () => {
    setValidationResults({
      timestamp: new Date().toLocaleString(),
      overallScore: 90.8,
      testsRun: 24,
      passed: 18,
      warnings: 4,
      errors: 2
    });
  };

  return (
    <section id="validation" className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Shield className="h-8 w-8 text-green-500" />
          Validation des Données
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          La validation garantit que vos données respectent les standards de qualité, 
          les règles métier et les exigences de conformité avant utilisation.
        </p>
      </div>

      <CourseHighlight type="concept" title="Framework de Validation Complet">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {testCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  activeTest === category.id ? 'ring-2 ring-green-500 bg-green-50' : ''
                }`}
                onClick={() => setActiveTest(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <h4 className="font-semibold mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CourseHighlight>

      {/* Validation Dashboard */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Tableau de Bord Validation
            </span>
            <Button onClick={runValidation} className="bg-green-600 hover:bg-green-700">
              <CheckCircle className="h-4 w-4 mr-1" />
              Lancer Validation
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {validationResults && (
            <div className="grid md:grid-cols-4 gap-4 p-4 bg-white rounded-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{validationResults.overallScore}%</div>
                <div className="text-sm text-muted-foreground">Score Global</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{validationResults.passed}</div>
                <div className="text-sm text-muted-foreground">Tests Réussis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{validationResults.warnings}</div>
                <div className="text-sm text-muted-foreground">Avertissements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{validationResults.errors}</div>
                <div className="text-sm text-muted-foreground">Erreurs</div>
              </div>
            </div>
          )}

          <Tabs value={activeTest} onValueChange={setActiveTest}>
            <TabsList className="grid w-full grid-cols-4">
              {testCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="quality" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">🔍 Tests de Qualité des Données</h4>
                <div className="space-y-4">
                  {qualityTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(test.status)}
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {test.name}
                            {test.critical && (
                              <Badge variant="destructive" className="text-xs">Critique</Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{test.details}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          test.status === 'success' ? 'text-green-600' :
                          test.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {test.score}%
                        </div>
                        <Progress 
                          value={test.score} 
                          className="w-20 h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">📊 Métriques de Validation</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      category: "Complétude",
                      metrics: [
                        { name: "Taux de remplissage", value: "97.3%", trend: "+0.2%" },
                        { name: "Champs obligatoires", value: "99.1%", trend: "+0.1%" },
                        { name: "Valeurs nulles", value: "2.7%", trend: "-0.2%" }
                      ]
                    },
                    {
                      category: "Exactitude",
                      metrics: [
                        { name: "Formats valides", value: "89.1%", trend: "-1.2%" },
                        { name: "Plages de valeurs", value: "94.7%", trend: "+0.5%" },
                        { name: "Cohérence référentielle", value: "98.2%", trend: "0%" }
                      ]
                    },
                    {
                      category: "Cohérence",
                      metrics: [
                        { name: "Règles métier", value: "91.4%", trend: "+1.1%" },
                        { name: "Contraintes temporelles", value: "76.8%", trend: "-2.3%" },
                        { name: "Dépendances logiques", value: "95.6%", trend: "+0.8%" }
                      ]
                    }
                  ].map((category, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {category.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="flex items-center justify-between">
                            <span className="text-sm">{metric.name}</span>
                            <div className="text-right">
                              <div className="font-semibold">{metric.value}</div>
                              <div className={`text-xs ${
                                metric.trend.startsWith('+') ? 'text-green-600' :
                                metric.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                              }`}>
                                {metric.trend}
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">🛡️ Rapports de Conformité</h4>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-blue-50 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-blue-700 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          RGPD Compliance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Données personnelles identifiées</span>
                          <Badge className="bg-blue-600">8 champs</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Consentement documenté</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Droit à l'oubli</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Chiffrement en transit</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-700 flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Standards Qualité
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">ISO 8000 (Qualité données)</span>
                          <Badge className="bg-green-600">Conforme</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">DAMA-DMBOK</span>
                          <Badge className="bg-green-600">Conforme</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Documentation métadonnées</span>
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Traçabilité des modifications</span>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h5 className="font-medium text-yellow-800 mb-2">⚠️ Actions Requises</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Compléter la documentation des métadonnées pour 3 tables</li>
                      <li>• Mettre à jour les politiques de rétention des données</li>
                      <li>• Effectuer l'audit de sécurité trimestriel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-4">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold mb-4">⚙️ Contrôles de Cohérence Métier</h4>
                <div className="space-y-4">
                  {businessRules.map((rule, index) => {
                    const total = rule.passed + rule.failed;
                    const successRate = (rule.passed / total) * 100;
                    
                    return (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(rule.status)}
                            <span className="font-medium">{rule.rule}</span>
                          </div>
                          <Badge 
                            variant={rule.status === 'success' ? 'default' : 
                                   rule.status === 'warning' ? 'secondary' : 'destructive'}
                          >
                            {successRate.toFixed(1)}%
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center p-2 bg-green-50 rounded">
                            <div className="font-semibold text-green-600">{rule.passed.toLocaleString()}</div>
                            <div className="text-green-700">Conformes</div>
                          </div>
                          <div className="text-center p-2 bg-red-50 rounded">
                            <div className="font-semibold text-red-600">{rule.failed.toLocaleString()}</div>
                            <div className="text-red-700">Non-conformes</div>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded">
                            <div className="font-semibold text-gray-600">{total.toLocaleString()}</div>
                            <div className="text-gray-700">Total</div>
                          </div>
                        </div>
                        <Progress value={successRate} className="mt-3" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-3">💡 Recommandations d'Amélioration</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium mb-2">Priorité Haute:</h6>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Corriger les 45 incohérences temporelles</li>
                        <li>• Valider les 19 montants négatifs</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium mb-2">Priorité Moyenne:</h6>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Automatiser la validation des âges</li>
                        <li>• Implémenter des contrôles en temps réel</li>
                      </ul>
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

export default ValidationSection;