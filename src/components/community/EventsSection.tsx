
import React from "react";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Data Science Summit Paris 2025",
      date: "12-14 Juin 2025",
      location: "Paris, France",
      description: "Conférence internationale sur les dernières avancées en data science et intelligence artificielle.",
      url: "https://datasciencesummit.paris",
      type: "Conférence",
      attendees: 1200,
      featured: true
    },
    {
      title: "AI for Climate Action Hackathon",
      date: "24-26 Mai 2025",
      location: "Lyon, France & En ligne (hybride)",
      description: "48h pour développer des solutions d'IA pour lutter contre le changement climatique.",
      url: "https://aipourleplanete.fr/hackathon",
      type: "Hackathon",
      attendees: 650,
      featured: true
    },
    {
      title: "Data Visualization Meetup",
      date: "15 Mai 2025",
      location: "Toulouse, France",
      description: "Présentation et discussion autour des techniques avancées de visualisation de données.",
      url: "https://meetup.com/data-viz-toulouse",
      type: "Meetup",
      attendees: 80,
      featured: false
    },
    {
      title: "NLP & LLMs Congress 2025",
      date: "8-10 Juillet 2025",
      location: "Bordeaux, France",
      description: "Congrès dédié au traitement du langage naturel et aux grands modèles de langage.",
      url: "https://nlp-congress.fr",
      type: "Conférence",
      attendees: 750,
      featured: false
    }
  ];

  const handleEventRegistration = (eventTitle: string) => {
    toast({
      title: "Inscription à l'événement",
      description: `Dans une version complète, vous seriez redirigé vers la page d'inscription pour ${eventTitle}`,
    });
  };

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Événements</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p className="text-amber-700 bg-amber-50 p-4 rounded-md border border-amber-200">
          <strong>Note:</strong> Voici une liste d'événements fictifs représentatifs du type de conférences, meetups et hackathons 
          qui se déroulent régulièrement dans le domaine de la Data Science. Ces exemples sont présentés à titre d'illustration 
          pour vous donner une idée des opportunités de networking et d'apprentissage disponibles dans la communauté.
        </p>
      </div>
      
      <div className="space-y-6 mb-10">
        {upcomingEvents.map((event, index) => (
          <Card 
            key={index} 
            className={`hover:shadow-lg transition-all overflow-hidden ${
              event.featured ? "border-2 border-ds-purple-500" : ""
            }`}
          >
            {event.featured && (
              <div className="bg-ds-purple-500 text-white text-xs py-1 px-3 text-center">
                Événement à ne pas manquer
              </div>
            )}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 bg-gray-50 p-4 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-200">
                <Calendar className="h-8 w-8 text-ds-purple-500 mb-2" />
                <p className="text-center font-medium">{event.date}</p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPin className="h-3 w-3 mr-1" />
                  {event.location}
                </div>
              </div>
              
              <div className="md:w-3/4 p-4">
                <CardHeader className="p-0 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                    <Badge 
                      className={
                        event.type === "Conférence" ? "bg-blue-100 text-blue-800" : 
                        event.type === "Meetup" ? "bg-green-100 text-green-800" : 
                        "bg-orange-100 text-orange-800"
                      }
                    >
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0 py-2">
                  <p className="text-sm mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.attendees} participants attendus</span>
                  </div>
                </CardContent>
                
                <CardFooter className="p-0 pt-4 flex justify-end">
                  <Button variant="default" onClick={() => handleEventRegistration(event.title)}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    S'inscrire
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-ds-purple-50 to-ds-blue-50 p-6 rounded-lg border border-ds-purple-100 my-8">
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-full">
            <Clock className="h-6 w-6 text-ds-purple-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Organisez un événement</h3>
            <p className="text-sm mb-4">
              Vous souhaitez organiser votre propre meetup ou événement autour de la Data Science ?
              Nous pouvons vous aider à le promouvoir auprès de notre communauté.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toast({
                title: "Proposer un événement",
                description: "Dans une version complète, vous pourriez soumettre votre événement pour le faire promouvoir."
              })}
            >
              Soumettre un événement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
