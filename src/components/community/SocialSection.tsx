
import React from "react";
import { Twitter, Linkedin, Youtube, Bookmark, Hash, AtSign, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialAccounts = [
    {
      platform: "Twitter",
      accounts: [
        {
          name: "@KirkDBorne",
          handle: "KirkDBorne",
          description: "Expert en data science, IA et big data. Partage quotidien d'articles et ressources.",
          url: "https://twitter.com/KirkDBorne",
          followers: "258K",
          icon: <Twitter className="h-5 w-5 text-sky-500" />
        },
        {
          name: "@StatifyAI",
          handle: "StatifyAI",
          description: "Actualités, tendances et études de cas en data science et IA.",
          url: "https://twitter.com/StatifyAI",
          followers: "125K",
          icon: <Twitter className="h-5 w-5 text-sky-500" />
        }
      ]
    },
    {
      platform: "LinkedIn",
      accounts: [
        {
          name: "Data Science Central",
          handle: "datascience-central",
          description: "Communauté en ligne pour les data scientists, avec des articles, webinaires et forums.",
          url: "https://www.linkedin.com/company/data-science-central/",
          followers: "380K",
          icon: <Linkedin className="h-5 w-5 text-blue-600" />
        },
        {
          name: "AI & Data Science Network",
          handle: "ai-data-science-network",
          description: "Réseau professionnel dédié à l'IA et la data science avec opportunités d'emploi.",
          url: "https://www.linkedin.com/company/ai-data-science-network/",
          followers: "156K",
          icon: <Linkedin className="h-5 w-5 text-blue-600" />
        }
      ]
    },
    {
      platform: "YouTube",
      accounts: [
        {
          name: "Data Science en français",
          handle: "@DataScienceFR",
          description: "Chaîne en français dédiée aux tutoriels et explications de concepts de data science.",
          url: "https://www.youtube.com/@DataScienceFR",
          followers: "45K",
          icon: <Youtube className="h-5 w-5 text-red-600" />
        }
      ]
    }
  ];

  const popularHashtags = [
    "#DataScience", "#MachineLearning", "#BigData", "#DeepLearning", 
    "#Python", "#AIethics", "#DataVisualization", "#NLP"
  ];

  return (
    <div id="social" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Réseaux sociaux</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Comptes et hashtags à suivre sur Twitter, LinkedIn et autres plateformes pour rester connecté.
          Ces ressources vous permettent de suivre les dernières tendances et discussions dans le domaine.
        </p>
      </div>
      
      <div className="space-y-8 mb-10">
        {socialAccounts.map((platform, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              {platform.platform === "Twitter" && <Twitter className="h-5 w-5 text-sky-500" />}
              {platform.platform === "LinkedIn" && <Linkedin className="h-5 w-5 text-blue-600" />}
              {platform.platform === "YouTube" && <Youtube className="h-5 w-5 text-red-600" />}
              {platform.platform}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platform.accounts.map((account, i) => (
                <Card key={i} className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-semibold">{account.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <AtSign className="h-3 w-3" />
                          {account.handle}
                        </CardDescription>
                      </div>
                      {account.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{account.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{account.followers} abonnés</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={account.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          Suivre
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
        <div className="flex items-start gap-4">
          <Hash className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-3">Hashtags populaires à suivre</h3>
            <div className="flex flex-wrap gap-2">
              {popularHashtags.map((hashtag, i) => (
                <span key={i} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-indigo-300 cursor-pointer transition-colors">
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
        <div className="flex items-start gap-4">
          <Bookmark className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Astuce</h3>
            <p className="text-sm mb-4">
              Créez des listes Twitter dédiées à la Data Science pour filtrer le contenu pertinent et ne pas manquer
              les informations importantes dans votre flux.
            </p>
            <Button variant="outline" size="sm">
              En savoir plus sur les listes Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
