/**
 * Terms of Service page component - Presents the terms of service for the Data Science Explorer project
 */
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, AlertTriangle, Scale, BookOpen, Shield } from "lucide-react";

/**
 * TermsOfService component - Displays comprehensive terms of service information
 * @returns JSX element containing the terms of service page
 */
const TermsOfService = () => {
  return (
    <Layout>
      <Helmet>
        <title>Conditions d'utilisation - Data Science Explorer</title>
        <meta
          name="description"
          content="Conditions d'utilisation du site Data Science Explorer - Règles et conditions d'usage du contenu éducatif"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <FileText className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions d'utilisation
          </h1>
          <p className="text-xl text-gray-600">
            Règles d'usage de Data Science Explorer
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Présentation du service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Data Science Explorer est un site web éducatif personnel créé par Geoffroy Streit, 
                dédié à l'apprentissage et au partage de connaissances en science des données. 
                Le site propose du contenu éducatif gratuit, des ressources pédagogiques et des 
                outils d'apprentissage dans le domaine de la data science.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Acceptation des conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions 
                d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site. 
                Nous nous réservons le droit de modifier ces conditions à tout moment sans préavis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Propriété intellectuelle
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contenu du site :</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tout le contenu présent sur ce site (textes, images, graphiques, logos, 
                    code source, etc.) est la propriété de Geoffroy Streit ou utilisé avec 
                    autorisation. Le contenu est protégé par les lois sur le droit d'auteur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation autorisée :</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Consultation personnelle et éducative</li>
                    <li>Partage de liens vers le contenu</li>
                    <li>Citation avec attribution appropriée</li>
                    <li>Utilisation dans un cadre pédagogique non commercial</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation interdite :</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Reproduction intégrale sans autorisation</li>
                    <li>Utilisation commerciale sans accord préalable</li>
                    <li>Modification du contenu sans permission</li>
                    <li>Redistribution sous votre propre nom</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Utilisation responsable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  En utilisant ce site, vous vous engagez à :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Utiliser le site de manière légale et éthique</li>
                  <li>Ne pas tenter de compromettre la sécurité du site</li>
                  <li>Ne pas surcharger les serveurs par des requêtes excessives</li>
                  <li>Respecter les autres utilisateurs</li>
                  <li>Ne pas publier de contenu offensant ou illégal</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Limitation de responsabilité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contenu éducatif :</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Le contenu de ce site est fourni à des fins éducatives uniquement. 
                    Bien que nous nous efforcions de fournir des informations précises et à jour, 
                    nous ne garantissons pas l'exactitude, la complétude ou l'actualité du contenu.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation des informations :</h3>
                  <p className="text-gray-700 leading-relaxed">
                    L'utilisation des informations présentes sur ce site se fait à vos propres 
                    risques. Nous ne saurions être tenus responsables des dommages directs ou 
                    indirects résultant de l'utilisation de ces informations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Disponibilité du service :</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous efforçons de maintenir le site accessible 24h/24, mais nous ne 
                    garantissons pas une disponibilité continue. Le site peut être temporairement 
                    indisponible pour maintenance ou pour des raisons techniques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Liens externes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Ce site peut contenir des liens vers des sites web externes. Nous ne sommes pas 
                responsables du contenu, des politiques de confidentialité ou des pratiques de 
                ces sites tiers. L'inclusion de liens ne constitue pas une approbation de ces sites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications du service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie 
                du service à tout moment, avec ou sans préavis. Nous ne serons pas responsables 
                envers vous ou envers des tiers de toute modification, suspension ou interruption 
                du service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Droit applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Ces conditions d'utilisation sont régies par le droit français. Tout litige 
                relatif à l'utilisation de ce site sera soumis à la compétence des tribunaux français.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Pour toute question concernant ces conditions d'utilisation, veuillez nous 
                contacter via la page de contact du site.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;