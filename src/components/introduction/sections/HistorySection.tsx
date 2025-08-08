
import React from "react";
import { History } from "lucide-react";

interface HistoryEventProps {
  period: string;
  event: string;
  color?: string;
}

const HistoryEvent = ({ period, event, color = "text-ds-purple-500" }: HistoryEventProps) => (
  <li className="flex items-start gap-2">
    <span className={`inline-block w-24 font-bold ${color}`}>{period}</span>
    <span>{event}</span>
  </li>
);

const HistorySection = () => {
  return (
    <div id="history" className="scroll-mt-24 border-l-4 border-ds-purple-500 pl-6 py-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-ds-purple-100 p-2 rounded-full">
          <History className="h-6 w-6 text-ds-purple-500" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-ds-purple-500 to-ds-blue-500 bg-clip-text text-transparent">Histoire et évolution</h2>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg">
          L'histoire de la Data Science commence bien avant l'ère numérique. Ses racines remontent aux statistiques classiques du 17ème siècle, mais c'est l'explosion des données numériques et la puissance de calcul croissante qui ont véritablement permis son essor.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-ds-purple-600">Les débuts historiques</h3>
            <ul className="space-y-2">
              <HistoryEvent period="17ème siècle" event="Développement des premiers concepts statistiques" />
              <HistoryEvent period="1800-1900" event="Avancées majeures en probabilités et statistiques" />
              <HistoryEvent period="1960-1970" event="Émergence de l'analyse de données assistée par ordinateur" />
              <HistoryEvent period="1990" event="Introduction du terme 'Data Science' dans la littérature académique" />
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-ds-blue-600">Ère moderne</h3>
            <ul className="space-y-2">
              <HistoryEvent period="2000" event="Le Big Data devient un enjeu majeur avec l'avènement du web" color="text-ds-blue-500" />
              <HistoryEvent period="2010" event="Explosion des applications d'intelligence artificielle et démocratisation des outils" color="text-ds-blue-500" />
              <HistoryEvent period="2015" event="Adoption généralisée du Deep Learning et des techniques de Machine Learning avancées" color="text-ds-blue-500" />
              <HistoryEvent period="Aujourd'hui" event="Intégration profonde dans tous les secteurs d'activité et développement de l'IA générative" color="text-ds-blue-500" />
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold mb-3">Moments clés dans l'évolution de la Data Science</h3>
          <div className="relative border-l-2 border-ds-purple-300 pl-6 ml-4 space-y-10 py-4">
            {[
              { year: "1974", event: "Peter Naur utilise le terme 'Data Science' dans son livre", highlight: false },
              { year: "1996", event: "Le terme 'Data Science' apparaît pour la première fois dans un contexte statistique", highlight: false },
              { year: "2001", event: "William S. Cleveland publie 'Data Science: An Action Plan'", highlight: true },
              { year: "2008", event: "Création du titre 'Data Scientist' par DJ Patil et Jeff Hammerbacher", highlight: false },
              { year: "2011", event: "McKinsey publie un rapport sur la pénurie de talents en Data Science", highlight: true },
              { year: "2015", event: "Explosion de l'utilisation des frameworks de Deep Learning", highlight: false },
              { year: "2020", event: "La Data Science devient essentielle face à la pandémie mondiale", highlight: true }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`absolute -left-10 w-4 h-4 rounded-full ${item.highlight ? 'bg-ds-purple-500' : 'bg-ds-purple-200'}`}></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">{item.year}</span>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
