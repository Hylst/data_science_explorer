
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Lightbulb } from "lucide-react";

const TrendsSection = () => {
  return (
    <section id="trends" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-8 w-8 text-green-600" />
        <h2 className="text-3xl font-bold">Tendances et Évolutions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle>🚀 Technologies émergentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold">Bases vectorielles</h5>
                <p className="text-xs text-gray-600">Pour l'IA et la recherche sémantique</p>
                <div className="flex gap-1 mt-1">
                  <Badge variant="outline">Pinecone</Badge>
                  <Badge variant="outline">Weaviate</Badge>
                  <Badge variant="outline">Chroma</Badge>
                </div>
              </div>
              <div>
                <h5 className="font-semibold">Serverless</h5>
                <p className="text-xs text-gray-600">Auto-scaling sans gestion serveur</p>
                <div className="flex gap-1 mt-1">
                  <Badge variant="outline">Aurora Serverless</Badge>
                  <Badge variant="outline">Cosmos DB</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              💡 Le saviez-vous ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Les bases vectorielles alimentent ChatGPT et les LLMs</li>
              <li>• Edge computing rapproche les données des utilisateurs</li>
              <li>• Quantum databases pour calculs exponentiels</li>
              <li>• Green IT : optimisation énergétique des datacenters</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrendsSection;
