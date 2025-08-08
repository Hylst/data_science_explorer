
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseHighlight from "@/components/courses/CourseHighlight";
import { Building2, TrendingUp, Stethoscope, ShoppingCart, Gamepad2, Zap, Target, Brain, Lightbulb } from "lucide-react";

const PracticalApplicationsSection = () => {
  const applications = [
    {
      domain: "Business Intelligence",
      icon: <Building2 className="h-6 w-6" />,
      color: "blue",
      cases: [
        {
          title: "Analyse des ventes",
          metrics: ["Moyenne mobile", "Médiane des commandes", "CV des revenus"],
          insight: "Identifier tendances et saisonnalité",
          example: "E-commerce: médiane panier = 45€, CV = 120% → forte variabilité client"
        },
        {
          title: "Performance RH",
          metrics: ["Écart-type des évaluations", "Corrélation expérience/salaire", "Quartiles de productivité"],
          insight: "Optimiser recrutement et rétention",
          example: "Tech: corrélation (années d'expérience, salaire) = 0.73"
        }
      ]
    },
    {
      domain: "Finance & Trading",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "green", 
      cases: [
        {
          title: "Gestion des risques",
          metrics: ["Volatilité (écart-type)", "VaR (percentiles)", "Corrélation actifs"],
          insight: "Construire portefeuilles diversifiés",
          example: "Actions tech: σ = 25%, obligations: σ = 5%, r = 0.2 → diversification efficace"
        },
        {
          title: "Trading algorithmique",
          metrics: ["Sharpe ratio", "Corrélations glissantes", "Écart-type des rendements"],
          insight: "Détecter anomalies et opportunités",
          example: "Stratégie momentum: si CV > 30% → réduire exposition"
        }
      ]
    },
    {
      domain: "Santé & Recherche",
      icon: <Stethoscope className="h-6 w-6" />,
      color: "red",
      cases: [
        {
          title: "Épidémiologie",
          metrics: ["Incidence moyenne", "Corrélation âge/maladie", "Écart-type géographique"],
          insight: "Suivre évolution et cibler prévention",
          example: "COVID: r(densité population, contamination) = 0.65"
        },
        {
          title: "Essais cliniques",
          metrics: ["Moyenne ± écart-type", "Médiane de survie", "Corrélation dose/effet"],
          insight: "Valider efficacité traitements",
          example: "Nouveau médicament: réduction moyenne = 15% ± 8%"
        }
      ]
    },
    {
      domain: "E-commerce & Marketing",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "purple",
      cases: [
        {
          title: "Comportement client",
          metrics: ["LTV médiane", "Corrélation prix/demande", "Segmentation par quartiles"],
          insight: "Optimiser pricing et ciblage",
          example: "Mode panier = 3 articles, mais médiane = 1 → beaucoup d'achats uniques"
        },
        {
          title: "A/B Testing",
          metrics: ["Différence des moyennes", "Test de corrélation", "IC de conversion"],
          insight: "Valider impact des changements",
          example: "Version B: +12% conversion, p < 0.05 → déploiement validé"
        }
      ]
    },
    {
      domain: "Gaming & UX",
      icon: <Gamepad2 className="h-6 w-6" />,
      color: "yellow",
      cases: [
        {
          title: "Expérience utilisateur",
          metrics: ["Temps de session médian", "CV temps de chargement", "Corrélation bugs/satisfaction"],
          insight: "Améliorer rétention et engagement",
          example: "Temps chargement: μ = 2.1s, σ = 0.8s → optimisation nécessaire si > 3s"
        },
        {
          title: "Monétisation",
          metrics: ["ARPU moyen", "Corrélation niveau/achat", "Distribution des dépenses"],
          insight: "Maximiser revenus par utilisateur",
          example: "Whale detection: P95 dépenses = 500€/mois (vs médiane = 0€)"
        }
      ]
    },
    {
      domain: "IoT & Manufacturing",
      icon: <Zap className="h-6 w-6" />,
      color: "orange",
      cases: [
        {
          title: "Contrôle qualité",
          metrics: ["Cartes de contrôle (μ ± 3σ)", "Cpk process", "Corrélation paramètres"],
          insight: "Maintenir qualité et réduire défauts",
          example: "Machine: μ = 10.0mm, σ = 0.1mm, spécifications ± 0.3mm → processus capable"
        },
        {
          title: "Maintenance prédictive",
          metrics: ["Tendance vibrations", "Corrélation température/usure", "Seuils d'alerte"],
          insight: "Anticiper pannes et optimiser maintenance",
          example: "Vibration > μ + 2σ depuis 3 jours → maintenance préventive"
        }
      ]
    }
  ];

  const colorClasses = {
    blue: "border-blue-500 bg-blue-50 text-blue-700",
    green: "border-green-500 bg-green-50 text-green-700",
    red: "border-red-500 bg-red-50 text-red-700",
    purple: "border-purple-500 bg-purple-50 text-purple-700",
    yellow: "border-yellow-500 bg-yellow-50 text-yellow-700",
    orange: "border-orange-500 bg-orange-50 text-orange-700"
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Target className="h-8 w-8 text-blue-600" />
        4. Applications Pratiques : La Statistique Descriptive en Action
      </h2>

      {/* Introduction */}
      <div className="mb-8">
        <CourseHighlight title="🚀 De la théorie à l'impact réel" type="concept">
          <p className="text-lg mb-4">
            Les statistiques descriptives ne sont pas qu'un exercice académique. 
            Elles sont l'épine dorsale de TOUTES les décisions data-driven modernes. 
            Voici comment les plus grandes entreprises du monde les utilisent au quotidien.
          </p>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm">
              <strong>💡 Insight clé :</strong> Chaque géant tech (Google, Amazon, Netflix, Uber...) 
              base ses décisions milliardaires sur ces mêmes concepts que vous apprenez ici !
            </p>
          </div>
        </CourseHighlight>
      </div>

      {/* Applications par domaine */}
      <div className="space-y-8">
        {applications.map((app, index) => (
          <Card key={index} className={`border-l-4 ${colorClasses[app.color as keyof typeof colorClasses].split(' ')[0]}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colorClasses[app.color as keyof typeof colorClasses]}`}>
                  {app.icon}
                </div>
                {app.domain}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.cases.map((useCase, caseIndex) => (
                  <div key={caseIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-3 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-gray-600" />
                      {useCase.title}
                    </h5>
                    
                    <div className="space-y-3">
                      <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-2">🔧 Métriques clés :</h6>
                        <div className="flex flex-wrap gap-1">
                          {useCase.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h6 className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1">
                          <Lightbulb className="h-3 w-3" />
                          Objectif :
                        </h6>
                        <p className="text-sm text-gray-600">{useCase.insight}</p>
                      </div>
                      
                      <div className={`p-3 rounded-lg ${colorClasses[app.color as keyof typeof colorClasses]}`}>
                        <h6 className="text-sm font-semibold mb-1">📊 Exemple concret :</h6>
                        <p className="text-xs">{useCase.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guide de mise en pratique */}
      <Card className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-indigo-600" />
            🎯 Votre Feuille de Route Pratique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-indigo-700">📋 Checklist de l'analyste data</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <p className="font-semibold text-sm">Explorer les données</p>
                    <p className="text-xs text-gray-600">Moyenne, médiane, étendue, outliers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <p className="font-semibold text-sm">Mesurer la variabilité</p>
                    <p className="text-xs text-gray-600">Écart-type, CV, quartiles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <p className="font-semibold text-sm">Chercher les relations</p>
                    <p className="text-xs text-gray-600">Corrélations, patterns cachés</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <p className="font-semibold text-sm">Visualiser les insights</p>
                    <p className="text-xs text-gray-600">Graphiques adaptés au message</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                  <div>
                    <p className="font-semibold text-sm">Communiquer les résultats</p>
                    <p className="text-xs text-gray-600">Histoire data-driven claire</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-purple-700">🛠️ Outils recommandés par niveau</h4>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg border">
                  <h5 className="font-semibold text-sm text-green-700 mb-2">🌱 Débutant</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Excel/Google Sheets : Fonctions statistiques de base</li>
                    <li>• Tableau Public : Visualisations drag & drop</li>
                    <li>• JASP/jamovi : Interface graphique pour stats</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded-lg border">
                  <h5 className="font-semibold text-sm text-blue-700 mb-2">🚀 Intermédiaire</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Python : pandas, seaborn, scipy.stats</li>
                    <li>• R : dplyr, ggplot2, corrplot</li>
                    <li>• Power BI : Analytics avancées</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded-lg border">
                  <h5 className="font-semibold text-sm text-purple-700 mb-2">⚡ Expert</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Spark : Big Data statistics</li>
                    <li>• TensorFlow : Stats pour ML</li>
                    <li>• Custom dashboards : APIs temps réel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              🎯 Prochaines étapes recommandées
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold">Cette semaine :</p>
                <ul className="text-xs space-y-1">
                  <li>• Analyser un dataset personnel</li>
                  <li>• Calculer corrélations principales</li>
                  <li>• Créer 3 visualisations</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Ce mois-ci :</p>
                <ul className="text-xs space-y-1">
                  <li>• Automatiser un rapport</li>
                  <li>• Maîtriser Python/R stats</li>
                  <li>• Présenter insights à l'équipe</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">D'ici 3 mois :</p>
                <ul className="text-xs space-y-1">
                  <li>• Dashboard temps réel</li>
                  <li>• Modèle prédictif simple</li>
                  <li>• Formation équipe métier</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PracticalApplicationsSection;
