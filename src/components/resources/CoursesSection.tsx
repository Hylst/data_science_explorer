
import React from "react";
import { GraduationCap, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  const onlineCourses = [
    {
      title: "Machine Learning par Stanford University",
      platform: "Coursera",
      instructor: "Andrew Ng",
      description: "Un cours fondamental qui couvre les concepts clés du Machine Learning, des algorithmes supervisés et non supervisés.",
      link: "https://www.coursera.org/learn/machine-learning",
      duration: "11 semaines",
      rating: 4.9,
      free: true,
      certificate: true
    },
    {
      title: "Python pour la Data Science et le Machine Learning Bootcamp",
      platform: "Udemy",
      instructor: "Jose Portilla",
      description: "Une formation complète de A à Z sur Python, NumPy, Pandas, Seaborn, Matplotlib, et les principales bibliothèques ML.",
      link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      duration: "25 heures",
      rating: 4.6,
      free: false,
      certificate: true
    },
    {
      title: "Deep Learning Specialization",
      platform: "DeepLearning.AI",
      instructor: "Andrew Ng",
      description: "Une spécialisation en 5 cours qui vous apprend les fondamentaux du deep learning et à construire des réseaux de neurones.",
      link: "https://www.deeplearning.ai/deep-learning-specialization/",
      duration: "3 mois",
      rating: 4.8,
      free: false,
      certificate: true
    },
  ];

  return (
    <div id="courses" className="scroll-mt-24 mt-16">
      <h2 className="text-3xl font-bold mb-6">Cours en ligne</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Les meilleurs MOOC et cours en ligne pour apprendre la Data Science, de débutant à expert.
          Ces formations offrent un contenu structuré et souvent des projets pratiques pour mettre en application vos connaissances.
        </p>
      </div>

      <div className="space-y-6 mb-10">
        {onlineCourses.map((course, index) => (
          <Card key={index} className="hover:shadow-md transition-all overflow-hidden border-l-4 border-l-emerald-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold">{course.title}</CardTitle>
                      <CardDescription>
                        <span className="font-medium">{course.platform}</span> • {course.instructor}
                      </CardDescription>
                    </div>
                    <GraduationCap className="h-5 w-5 text-emerald-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{course.description}</p>
                </CardContent>
              </div>
              <div className="md:w-1/3 bg-gray-50 p-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Durée:</span> {course.duration}
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Évaluation:</span> 
                    <div className="flex items-center">
                      {course.rating} 
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Accès:</span> 
                    <span className={course.free ? "text-green-600" : "text-amber-600"}>
                      {course.free ? "Gratuit" : "Payant"}
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">Certificat:</span> 
                    <span className={course.certificate ? "text-green-600" : "text-gray-500"}>
                      {course.certificate ? "Oui" : "Non"}
                    </span>
                  </div>
                </div>
                <Button variant="default" size="sm" className="mt-4 w-full" asChild>
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Découvrir
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
