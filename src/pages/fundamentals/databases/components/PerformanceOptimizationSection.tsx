
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle, CheckCircle } from "lucide-react";

const PerformanceOptimizationSection = () => {
  return (
    <section id="performance" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="h-8 w-8 text-yellow-600" />
        <h2 className="text-3xl font-bold">Optimisation et Performance</h2>
      </div>

      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle>⚡ Index : La clé de la performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-700">✅ Bonnes pratiques</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Index sur colonnes WHERE fréquentes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Index composés pour requêtes multi-colonnes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Analyser les plans d'exécution
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-700">❌ Pièges à éviter</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  Trop d'index (ralentit les écritures)
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  Index sur colonnes très sélectives
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                  Fonctions dans WHERE (casse l'index)
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🎯 Optimisation requêtes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>• Utiliser EXPLAIN PLAN</li>
              <li>• Éviter SELECT *</li>
              <li>• Optimiser les JOIN</li>
              <li>• Utiliser LIMIT approprié</li>
              <li>• Requêtes préparées</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">🔄 Partitionnement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>• Par plage (dates, IDs)</li>
              <li>• Par hash (distribution)</li>
              <li>• Par liste (catégories)</li>
              <li>• Sharding horizontal</li>
              <li>• Archivage automatique</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">💾 Mise en cache</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>• Query cache</li>
              <li>• Result set cache</li>
              <li>• Redis/Memcached</li>
              <li>• Vues matérialisées</li>
              <li>• CDN pour assets</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceOptimizationSection;
