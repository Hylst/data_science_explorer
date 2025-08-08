
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Lock } from "lucide-react";

const SecuritySection = () => {
  return (
    <section id="security" className="scroll-mt-24 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-8 w-8 text-red-600" />
        <h2 className="text-3xl font-bold">Sécurité et Gouvernance</h2>
      </div>

      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            🚨 Injections SQL : Le danger n°1
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="text-sm mb-3">
              <strong>Toujours utiliser des requêtes préparées !</strong> 
              Jamais de concaténation directe avec les inputs utilisateur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-red-800 mb-2">❌ DANGER</h5>
                <code className="bg-white p-2 rounded block text-xs">
                  query = "SELECT * FROM users WHERE id = " + userId
                </code>
              </div>
              <div>
                <h5 className="font-semibold text-green-800 mb-2">✅ SÉCURISÉ</h5>
                <code className="bg-white p-2 rounded block text-xs">
                  query = "SELECT * FROM users WHERE id = ?"
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              🔐 Contrôle d'accès
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h5 className="font-semibold">Principe du moindre privilège</h5>
                <p className="text-xs">Accorder uniquement les droits nécessaires</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h5 className="font-semibold">Authentification forte</h5>
                <p className="text-xs">2FA, certificats, tokens JWT</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h5 className="font-semibold">Audit et logs</h5>
                <p className="text-xs">Traçabilité de tous les accès</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔒 Protection des données</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Chiffrement :</strong> TLS en transit, AES au repos</li>
              <li>• <strong>Anonymisation :</strong> Masquage des PII</li>
              <li>• <strong>Sauvegarde :</strong> Chiffrée et testée</li>
              <li>• <strong>RGPD :</strong> Right to be forgotten</li>
              <li>• <strong>Monitoring :</strong> Détection d'anomalies</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SecuritySection;
