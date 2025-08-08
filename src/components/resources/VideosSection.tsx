
import React from "react";
import { Video, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VideosSection = () => {
  const videoResources = [
    {
      title: "3Blue1Brown",
      creator: "Grant Sanderson",
      url: "https://www.youtube.com/c/3blue1brown",
      description: "Explications visuelles des concepts mathématiques derrière le machine learning et la data science.",
      topics: ["Mathématiques", "Visualisation", "Deep Learning"],
      subscribers: "5.3M",
      thumbnailColor: "bg-gradient-to-r from-blue-400 to-indigo-600"
    },
    {
      title: "StatQuest with Josh Starmer",
      creator: "Josh Starmer",
      url: "https://www.youtube.com/c/joshstarmer",
      description: "Explications claires et concises des concepts statistiques et d'apprentissage automatique.",
      topics: ["Statistiques", "Machine Learning", "Bioinformatique"],
      subscribers: "1.2M",
      thumbnailColor: "bg-gradient-to-r from-green-400 to-emerald-600"
    },
    {
      title: "Krish Naik",
      creator: "Krish Naik",
      url: "https://www.youtube.com/user/krishnaik06",
      description: "Tutoriels pratiques sur les projets de data science et les techniques de ML/DL.",
      topics: ["Projets", "Machine Learning", "Carrière"],
      subscribers: "850K",
      thumbnailColor: "bg-gradient-to-r from-amber-400 to-orange-600"
    },
    {
      title: "Two Minute Papers",
      creator: "Károly Zsolnai-Fehér",
      url: "https://www.youtube.com/c/KárolyZsolnai",
      description: "Résumés de recherches récentes en IA et apprentissage automatique en seulement quelques minutes.",
      topics: ["IA", "Recherche", "Actualités"],
      subscribers: "1.5M",
      thumbnailColor: "bg-gradient-to-r from-red-400 to-pink-600"
    }
  ];

  return (
    <div id="videos" className="scroll-mt-24 mt-16">
      <h2 className="text-3xl font-bold mb-6">Vidéos et chaînes</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Les meilleures chaînes YouTube et ressources vidéo pour apprendre visuellement.
          Ces créateurs de contenu expliquent des concepts complexes de façon accessible et engageante.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {videoResources.map((channel, index) => (
          <Card key={index} className="hover:shadow-lg transition-all overflow-hidden">
            <div className="flex flex-col h-full">
              <div className={`${channel.thumbnailColor} p-6 flex justify-center items-center`}>
                <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-bold">{channel.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">par {channel.creator}</p>
                  </div>
                  <Video className="h-5 w-5 text-red-600" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm mb-4">{channel.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {channel.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{channel.subscribers} abonnés</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full" asChild>
                  <a href={channel.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Regarder
                  </a>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideosSection;
