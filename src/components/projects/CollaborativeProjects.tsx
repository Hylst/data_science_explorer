
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  GitBranch, 
  MessageSquare, 
  Calendar,
  Globe,
  Github,
  Star,
  Eye,
  Clock
} from "lucide-react";

const collaborativeProjects = [
  {
    id: "collab-1",
    title: "Open Data Climate Analysis",
    description: "Projet communautaire d'analyse des données climatiques mondiales avec l'ONU",
    category: "Environnement",
    status: "active",
    priority: "high",
    contributors: 47,
    openIssues: 12,
    language: "Python",
    framework: "Jupyter",
    difficulty: "Intermédiaire",
    createdAt: "2024-01-15",
    lastUpdate: "Il y a 2 heures",
    maintainers: [
      { name: "Dr. Elena Rodriguez", avatar: "", role: "Lead Scientist" },
      { name: "Alex Chen", avatar: "", role: "Data Engineer" },
      { name: "Sarah Kim", avatar: "", role: "ML Engineer" }
    ],
    tags: ["Climate", "OpenData", "UN", "Research"],
    githubUrl: "https://github.com/climate-data/analysis",
    websiteUrl: "https://climate-analysis.org",
    stars: 1247,
    watchers: 89,
    description_long: "Analyse collaborative des données climatiques mondiales pour soutenir les recherches de l'ONU sur le changement climatique. Contribuez à un projet qui a un impact réel sur les politiques environnementales.",
    skills_needed: ["Python", "Pandas", "Matplotlib", "API REST", "Git"],
    impact: "🌍 Impact environnemental global"
  },
  {
    id: "collab-2",
    title: "Medical Data Commons",
    description: "Plateforme open-source pour l'analyse de données médicales anonymisées",
    category: "Santé",
    status: "recruiting",
    priority: "medium",
    contributors: 23,
    openIssues: 8,
    language: "R",
    framework: "Shiny",
    difficulty: "Avancé",
    createdAt: "2024-02-01",
    lastUpdate: "Il y a 1 jour",
    maintainers: [
      { name: "Prof. Michael Johnson", avatar: "", role: "Medical Researcher" },
      { name: "Lisa Wang", avatar: "", role: "Biostatistician" }
    ],
    tags: ["Healthcare", "Anonymization", "Statistics", "Ethics"],
    githubUrl: "https://github.com/medical-commons/platform",
    websiteUrl: "https://medical-commons.org",
    stars: 892,
    watchers: 156,
    description_long: "Développement d'une plateforme collaborative pour l'analyse de données médicales tout en respectant la confidentialité des patients. Rejoignez une équipe de chercheurs médicaux et de data scientists.",
    skills_needed: ["R", "Shiny", "Statistics", "Data Privacy", "Healthcare"],
    impact: "🏥 Amélioration des soins de santé"
  },
  {
    id: "collab-3",
    title: "Educational Analytics Platform",
    description: "Analyse des données d'apprentissage pour améliorer l'éducation en ligne",
    category: "Éducation",
    status: "planning",
    priority: "medium",
    contributors: 15,
    openIssues: 5,
    language: "JavaScript",
    framework: "D3.js",
    difficulty: "Débutant",
    createdAt: "2024-02-15",
    lastUpdate: "Il y a 3 jours",
    maintainers: [
      { name: "Dr. Amanda Foster", avatar: "", role: "Education Researcher" },
      { name: "Tom Rodriguez", avatar: "", role: "Full Stack Developer" }
    ],
    tags: ["Education", "Learning Analytics", "Visualization", "Open Source"],
    githubUrl: "https://github.com/edu-analytics/platform",
    websiteUrl: "https://edu-analytics.org",
    stars: 456,
    watchers: 67,
    description_long: "Créez des visualisations et des analyses pour aider les éducateurs à mieux comprendre comment les étudiants apprennent en ligne. Projet parfait pour débuter dans les projets collaboratifs.",
    skills_needed: ["JavaScript", "D3.js", "Data Visualization", "Education"],
    impact: "📚 Amélioration de l'éducation"
  }
];

export function CollaborativeProjects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "recruiting": return "bg-blue-100 text-blue-800";
      case "planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "🚀 Actif";
      case "recruiting": return "🤝 Recrute";
      case "planning": return "📋 Planification";
      default: return status;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-2">Projets Collaboratifs Open Source</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Rejoignez des projets qui ont un impact réel sur la société. Collaborez avec des experts du monde entier et contribuez à des initiatives open source significatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {collaborativeProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {project.watchers}
                  </div>
                </div>
              </div>
              
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {project.description}
              </CardDescription>
              
              <p className="text-sm text-muted-foreground mt-2">
                {project.description_long}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {project.contributors} contributeurs
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  {project.openIssues} issues ouvertes
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {project.lastUpdate}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Impact */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-900">
                  {project.impact}
                </p>
              </div>

              {/* Mainteneurs */}
              <div>
                <h4 className="text-sm font-medium mb-2">Mainteneurs du projet</h4>
                <div className="flex -space-x-2">
                  {project.maintainers.map((maintainer, index) => (
                    <div key={index} className="flex items-center">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="text-xs">
                          {maintainer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ))}
                </div>
                <div className="mt-2 space-y-1">
                  {project.maintainers.map((maintainer, index) => (
                    <div key={index} className="text-xs text-muted-foreground">
                      <span className="font-medium">{maintainer.name}</span> - {maintainer.role}
                    </div>
                  ))}
                </div>
              </div>

              {/* Compétences requises */}
              <div>
                <h4 className="text-sm font-medium mb-2">Compétences recherchées</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills_needed.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 gap-2">
                  <GitBranch className="h-4 w-4" />
                  Contribuer
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                {project.websiteUrl && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    Site
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
