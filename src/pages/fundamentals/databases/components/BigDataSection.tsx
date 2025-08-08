
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Cloud, Zap } from "lucide-react";

const BigDataSection = () => {
  return (
    <section id="big-data" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="h-8 w-8 text-orange-600" />
        <h2 className="text-3xl font-bold">Big Data et Écosystème Moderne</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Data Lakes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">Stockage de données brutes multi-formats</p>
            <div className="space-y-2">
              <Badge variant="secondary">Amazon S3</Badge>
              <Badge variant="secondary">Azure Data Lake</Badge>
              <Badge variant="secondary">Google Cloud Storage</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">Traitement distribué temps réel</p>
            <div className="space-y-2">
              <Badge variant="secondary">Apache Spark</Badge>
              <Badge variant="secondary">Kafka</Badge>
              <Badge variant="secondary">Hadoop</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">Analyse et requêtes sur pétaoctets</p>
            <div className="space-y-2">
              <Badge variant="secondary">Snowflake</Badge>
              <Badge variant="secondary">BigQuery</Badge>
              <Badge variant="secondary">Redshift</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BigDataSection;
