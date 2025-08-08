/**
 * About page component - Presents information about the Data Science Explorer project
 * and its creator Geoffroy Streit
 */
import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Heart, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>À propos - Data Science Explorer</title>
        <meta name="description" content="Découvrez l'histoire et la mission de Data Science Explorer, un projet éducatif créé par Geoffroy Streit pour démocratiser l'apprentissage de la data science en français." />
      </Helmet>
      
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            À propos de Data Science Explorer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un projet personnel et éducatif pour démocratiser l'apprentissage de la data science 
            en français, créé avec passion par un apprenant pour d'autres apprenants.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Rendre la data science accessible à tous les francophones, 
                en proposant un contenu structuré et progressif adapté aux débutants.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Philosophie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Apprendre en enseignant. Ce site me permet de structurer mes connaissances 
                tout en les partageant gratuitement avec la communauté.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Communauté</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Créer un espace d'apprentissage bienveillant où chacun peut progresser 
                à son rythme dans l'univers passionnant de la data science.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Creator Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Le créateur</h2>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Geoffroy Streit</h3>
                <p className="text-muted-foreground mb-4">
                  Passionné de data science et actuellement en apprentissage, je développe ce site 
                  comme un moyen de consolider mes connaissances tout en créant une ressource 
                  utile pour la communauté francophone.
                </p>
                <p className="text-muted-foreground mb-4">
                  En tant qu'apprenant, je comprends les défis rencontrés lors de l'apprentissage 
                  de concepts complexes. C'est pourquoi je m'efforce de présenter l'information 
                  de manière claire, progressive et accessible.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Apprenant en Data Science</Badge>
                  <Badge variant="secondary">Développeur Web</Badge>
                  <Badge variant="secondary">Pédagogie</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Motivation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      "Enseigner, c'est apprendre deux fois. En créant ce contenu, 
                      je renforce ma propre compréhension tout en aidant d'autres apprenants."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Contenu Éducatif</CardTitle>
              <CardDescription>
                Une approche structurée de l'apprentissage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Cours progressifs et interactifs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Exemples pratiques et cas d'usage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Visualisations interactives</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Glossaire technique complet</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Technologies</CardTitle>
              <CardDescription>
                Stack technique moderne et performante
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">React 18 avec TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Tailwind CSS pour le design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Vite pour le développement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Architecture modulaire</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Nos valeurs</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Accessibilité</h3>
              <p className="text-sm text-muted-foreground">
                Contenu gratuit et accessible à tous, sans barrières financières
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Bienveillance</h3>
              <p className="text-sm text-muted-foreground">
                Un environnement d'apprentissage respectueux et encourageant
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Utilisation de technologies modernes pour une expérience optimale
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Rejoignez l'aventure</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Data Science Explorer est un projet en constante évolution. 
            Chaque visite, chaque retour contribue à améliorer cette ressource éducative.
          </p>
          <p className="text-sm text-muted-foreground">
            Merci de faire partie de cette communauté d'apprenants passionnés ! 🚀
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;