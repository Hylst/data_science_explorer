
import { MessageSquare, Users, MessageCircle, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForumsSection = () => {
  const forums = [
    {
      title: "Stack Overflow - Tag Data Science",
      url: "https://stackoverflow.com/questions/tagged/data-science",
      description: "Posez vos questions techniques et recevez des réponses de la communauté.",
      members: "105K+",
      activity: "Très active",
      type: "Q&A",
      icon: <MessageSquare className="h-5 w-5 text-ds-blue-500" />
    },
    {
      title: "Reddit - r/datascience",
      url: "https://www.reddit.com/r/datascience/",
      description: "Discussions, actualités et tendances dans le domaine de la data science.",
      members: "850K+",
      activity: "Très active",
      type: "Forum",
      icon: <MessageCircle className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Kaggle Forums",
      url: "https://www.kaggle.com/discussion",
      description: "Échangez autour des compétitions, datasets et techniques d'analyse.",
      members: "450K+",
      activity: "Active",
      type: "Forum",
      icon: <MessageCircle className="h-5 w-5 text-cyan-500" />
    },
    {
      title: "Discord - Data Science",
      url: "https://discord.gg/data-science",
      description: "Discussions en temps réel, aide et événements communautaires.",
      members: "230K+",
      activity: "Très active",
      type: "Chat",
      icon: <MessageCircle className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Data Science France",
      url: "https://www.linkedin.com/groups/8458406/",
      description: "Groupe LinkedIn pour les professionnels francophones de la data science.",
      members: "42K+",
      activity: "Modérée",
      type: "Groupe professionnel",
      icon: <Users className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Hugging Face Forums",
      url: "https://discuss.huggingface.co/",
      description: "Communauté active pour discuter de NLP, modèles de language et IA générative.",
      members: "195K+",
      activity: "Très active",
      type: "Forum",
      icon: <MessageCircle className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Forums et groupes</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Les forums et groupes de discussion où vous pouvez poser vos questions et échanger avec d'autres data scientists.
          Ces espaces communautaires sont précieux pour résoudre des problèmes, partager des connaissances et rester connecté.
        </p>
      </div>
      
      <div className="mb-6 relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="Rechercher un forum ou un groupe..." 
          className="pl-9 w-full"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {forums.map((forum, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold">{forum.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline">{forum.type}</Badge>
                    <span>•</span>
                    <span>{forum.members} membres</span>
                  </CardDescription>
                </div>
                {forum.icon}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{forum.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">Activité:</span>
                  <Badge 
                    variant="secondary" 
                    className={
                      forum.activity === "Très active" ? "bg-green-100 text-green-800" : 
                      forum.activity === "Active" ? "bg-blue-100 text-blue-800" : 
                      "bg-amber-100 text-amber-800"
                    }
                  >
                    {forum.activity}
                  </Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={forum.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Rejoindre
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <div className="bg-white p-3 rounded-full">
            <MessageSquare className="h-6 w-6 text-blue-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p className="text-sm mb-4">
              Notre communauté peut vous aider à trouver le forum ou groupe qui correspond le mieux à vos besoins.
              N'hésitez pas à poser votre question directement sur notre forum dédié.
            </p>
            <Button size="sm" asChild>
              <a href="https://community.datascience.fr" target="_blank" rel="noopener noreferrer">
                Consulter notre forum communautaire
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumsSection;
