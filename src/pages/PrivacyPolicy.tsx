/**
 * Privacy Policy page component - Presents the privacy policy for the Data Science Explorer project
 */
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Lock, Mail, Calendar } from "lucide-react";

/**
 * PrivacyPolicy component - Displays comprehensive privacy policy information
 * @returns JSX element containing the privacy policy page
 */
const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Politique de confidentialité - Data Science Explorer</title>
        <meta
          name="description"
          content="Politique de confidentialité du site Data Science Explorer - Protection des données personnelles et respect de la vie privée"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <Shield className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Votre vie privée est importante pour nous
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Data Science Explorer est un projet personnel et éducatif créé par Geoffroy Streit. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos informations personnelles lorsque vous utilisez notre site web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Données collectées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Données automatiquement collectées :</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et temps passé sur le site</li>
                    <li>Données de navigation (cookies techniques)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Données volontairement fournies :</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Informations de contact (si vous nous contactez)</li>
                    <li>Commentaires ou suggestions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Utilisation des données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons vos données uniquement pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Améliorer l'expérience utilisateur du site</li>
                <li>Analyser le trafic et l'utilisation du site</li>
                <li>Répondre à vos questions ou commentaires</li>
                <li>Assurer la sécurité et le bon fonctionnement du site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers.</strong>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Protection des données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Chiffrement des données en transit (HTTPS)</li>
                  <li>Accès limité aux données personnelles</li>
                  <li>Surveillance régulière de la sécurité</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Conservation des données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
                aux finalités pour lesquelles elles ont été collectées. Les données de navigation 
                sont généralement conservées pendant 13 mois maximum.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Vos droits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous via la page de contact.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications de cette politique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Si vous avez des questions concernant cette politique de confidentialité, 
                n'hésitez pas à nous contacter via la page de contact du site.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;