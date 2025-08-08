
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface CareerCardProps {
  title: string;
  acronym: string;
  description: string;
  skills: string;
  fromColor: string;
  toColor: string;
  acronymBg: string;
  acronymText: string;
  titleColor: string;
}

const CareerCard = ({ 
  title, 
  acronym, 
  description, 
  skills,
  fromColor,
  toColor,
  acronymBg,
  acronymText,
  titleColor
}: CareerCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className={`bg-gradient-to-r ${fromColor} ${toColor}`}>
        <CardTitle className="flex items-center gap-2">
          <span className={`${acronymBg} p-1 rounded ${acronymText} text-lg`}>{acronym}</span>
          <span className={titleColor}>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p>{description}</p>
        <div className="mt-3 text-sm text-gray-600">
          <p className={`font-medium ${titleColor}`}>Compétences requises:</p>
          <p>{skills}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const SalaryRangeItem = ({ role, range, level }: { role: string; range: string; level: "junior" | "mid" | "senior" }) => {
  const getBgColor = () => {
    switch(level) {
      case "junior": return "bg-blue-50";
      case "mid": return "bg-blue-100";
      case "senior": return "bg-blue-200";
    }
  };
  
  return (
    <div className={`p-3 rounded-lg ${getBgColor()} flex justify-between items-center`}>
      <span className="font-medium">{role}</span>
      <span className="text-gray-700">{range}</span>
    </div>
  );
};

const CareersSection = () => {
  const careers: CareerCardProps[] = [
    {
      title: "Data Scientist",
      acronym: "DS",
      description: "Expert en algorithmes de Machine Learning et statistiques avancées, le Data Scientist construit des modèles prédictifs et extrait des insights des données.",
      skills: "Statistiques avancées, ML, programmation (Python/R), visualisation",
      fromColor: "from-ds-purple-50",
      toColor: "to-ds-blue-50",
      acronymBg: "bg-ds-purple-100",
      acronymText: "text-ds-purple-500",
      titleColor: "text-ds-purple-600"
    },
    {
      title: "Data Engineer",
      acronym: "DE",
      description: "Spécialiste des infrastructures de données, le Data Engineer construit et maintient les pipelines qui permettent de collecter, stocker et prétraiter les données.",
      skills: "Bases de données, Big Data (Hadoop/Spark), cloud, programmation",
      fromColor: "from-ds-blue-50",
      toColor: "to-ds-purple-50",
      acronymBg: "bg-ds-blue-100",
      acronymText: "text-ds-blue-500",
      titleColor: "text-ds-blue-600"
    },
    {
      title: "Data Analyst",
      acronym: "DA",
      description: "Focalisé sur l'analyse descriptive, le Data Analyst transforme les données en insights actionnables pour les décideurs métier.",
      skills: "SQL, Excel, visualisation, statistiques descriptives",
      fromColor: "from-ds-purple-50",
      toColor: "to-ds-blue-50",
      acronymBg: "bg-ds-purple-100",
      acronymText: "text-ds-purple-500",
      titleColor: "text-ds-purple-600"
    },
    {
      title: "Machine Learning Engineer",
      acronym: "ML",
      description: "À l'intersection entre le Data Scientist et le développeur, le ML Engineer met en production et à l'échelle les modèles d'IA.",
      skills: "DevOps, ML, programmation avancée, architecture système",
      fromColor: "from-ds-blue-50",
      toColor: "to-ds-purple-50",
      acronymBg: "bg-ds-blue-100",
      acronymText: "text-ds-blue-500",
      titleColor: "text-ds-blue-600"
    },
    {
      title: "Business Intelligence Analyst",
      acronym: "BI",
      description: "Spécialiste de la transformation des données en rapports et dashboards pour suivre les KPIs et faciliter les décisions stratégiques.",
      skills: "SQL, outils BI (Tableau, Power BI), data warehousing, business acumen",
      fromColor: "from-ds-purple-50",
      toColor: "to-ds-blue-50",
      acronymBg: "bg-ds-purple-100",
      acronymText: "text-ds-purple-500",
      titleColor: "text-ds-purple-600"
    },
    {
      title: "Chief Data Officer",
      acronym: "CDO",
      description: "Responsable stratégique de la gouvernance des données et de la transformation data-driven de l'organisation au niveau exécutif.",
      skills: "Leadership, stratégie, gouvernance des données, management",
      fromColor: "from-ds-blue-50",
      toColor: "to-ds-purple-50",
      acronymBg: "bg-ds-blue-100",
      acronymText: "text-ds-blue-500",
      titleColor: "text-ds-blue-600"
    }
  ];

  return (
    <div id="careers" className="scroll-mt-24 border-l-4 border-ds-purple-500 pl-6 py-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-ds-purple-100 p-2 rounded-full">
          <Briefcase className="h-6 w-6 text-ds-purple-500" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-ds-purple-500 to-ds-blue-500 bg-clip-text text-transparent">Métiers de la Data Science</h2>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          L'écosystème de la Data Science offre une grande variété de carrières, chacune avec ses compétences spécifiques, 
          ses responsabilités et ses perspectives d'évolution. Découvrez les principaux métiers de ce domaine en pleine expansion.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careers.map((career, idx) => (
            <CareerCard key={idx} {...career} />
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm mt-10">
          <h3 className="text-xl font-semibold mb-4">Perspectives salariales en Data Science (France)</h3>
          
          <div className="space-y-2 mb-6">
            <SalaryRangeItem role="Data Analyst" range="35-45K€" level="junior" />
            <SalaryRangeItem role="Data Scientist" range="45-60K€" level="junior" />
            <SalaryRangeItem role="Data Engineer" range="45-55K€" level="junior" />
            <SalaryRangeItem role="ML Engineer" range="50-65K€" level="junior" />
          </div>
          
          <div className="space-y-2 mb-6">
            <SalaryRangeItem role="Data Analyst Senior" range="50-70K€" level="mid" />
            <SalaryRangeItem role="Data Scientist Senior" range="65-85K€" level="mid" />
            <SalaryRangeItem role="Data Engineer Senior" range="60-80K€" level="mid" />
            <SalaryRangeItem role="ML Engineer Senior" range="70-90K€" level="mid" />
          </div>
          
          <div className="space-y-2">
            <SalaryRangeItem role="Lead Data Scientist" range="80-110K€" level="senior" />
            <SalaryRangeItem role="Head of Data" range="90-130K€" level="senior" />
            <SalaryRangeItem role="Chief Data Officer" range="120K€+" level="senior" />
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Note: Ces fourchettes sont données à titre indicatif et peuvent varier selon la localisation, 
            la taille de l'entreprise, le secteur d'activité et l'expérience spécifique.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold mb-4">Parcours de formation recommandés</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-ds-purple-600 mb-2">Formation académique</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>Master en Data Science / IA / Statistiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>École d'ingénieur avec spécialisation data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>Doctorat pour les postes de recherche</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-ds-blue-600 mb-2">Bootcamps & formations intensives</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-ds-blue-500 font-bold">•</span>
                  <span>Bootcamps spécialisés (3-6 mois)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-blue-500 font-bold">•</span>
                  <span>Formations professionnelles certifiantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-blue-500 font-bold">•</span>
                  <span>Formation continue en entreprise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-ds-purple-600 mb-2">Auto-formation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>MOOCs (Coursera, edX, DataCamp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>Projets personnels & portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ds-purple-500 font-bold">•</span>
                  <span>Compétitions (Kaggle, DrivenData)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSection;
