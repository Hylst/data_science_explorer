
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const FundamentalsIntro = () => {
  return (
    <div className="border-l-4 border-gradient-to-r from-ds-blue-500 to-ds-purple-500 pl-6 py-2">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ds-blue-500 to-ds-purple-500 bg-clip-text text-transparent flex items-center gap-2">
        <BookOpen className="h-8 w-8" />
        Commencer votre parcours en Data Science
      </h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-4">
          La Data Science repose sur plusieurs piliers fondamentaux qui constituent la base de tout projet d'analyse de données.
          Comprendre ces fondamentaux est essentiel pour maîtriser cette discipline en constante évolution.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-6 border border-blue-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Pourquoi étudier les fondamentaux ?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2 font-medium text-gray-800">Les fondamentaux vous permettent de :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comprendre les principes théoriques derrière les algorithmes</li>
                <li>Interpréter correctement les résultats d'analyse</li>
                <li>Évaluer la pertinence des méthodes pour vos données</li>
                <li>Communiquer efficacement avec d'autres experts</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium text-gray-800">Progression recommandée :</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Bases en mathématiques et statistiques</li>
                <li>Compétences en programmation (Python, R)</li>
                <li>Techniques de visualisation de données</li>
                <li>Méthodes de traitement et préparation des données</li>
              </ol>
            </div>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full my-6 border rounded-lg shadow-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-4 text-lg font-medium">Comment utiliser cette section</AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <p className="mb-3">
                Cette section est organisée en quatre parties principales, chacune couvrant un aspect fondamental de la Data Science. 
                Vous pouvez les parcourir dans l'ordre ou vous concentrer sur celles qui vous intéressent particulièrement.
              </p>
              <p className="mb-3">
                Chaque section contient :
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Une introduction au concept</li>
                <li>Des exemples pratiques et cas d'usage</li>
                <li>Des sections "En savoir plus" avec des ressources complémentaires</li>
                <li>Des astuces et bonnes pratiques</li>
              </ul>
              <p>
                Utilisez la barre de navigation latérale pour vous déplacer rapidement entre les sections.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FundamentalsIntro;
