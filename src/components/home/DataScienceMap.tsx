import React from "react";
import {
  Database,
  BarChart,
  Network,
  Layers,
  ChartPie,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

interface DataScienceMapProps {
  className?: string;
}

const DataScienceMap: React.FC<DataScienceMapProps> = ({ className }) => {
  const topics = [
    {
      id: "stats",
      gridArea: "col-start-1 row-start-1",
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Statistiques",
      link: "/fundamentals/math-stats",
      color: "blue",
      description: "Probabilités, statistiques et algèbre linéaire",
    },
    {
      id: "ml",
      gridArea: "col-start-3 row-start-1",
      icon: <Network className="w-6 h-6 text-purple-500" />,
      title: "Machine Learning",
      link: "/machine-learning",
      color: "purple",
      description: "Algorithmes, modèles et Deep Learning",
    },
    {
      id: "db",
      gridArea: "col-start-1 row-start-3",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: "Bases de données",
      link: "/fundamentals/databases",
      color: "emerald",
      description: "SQL, NoSQL et gestion des données",
    },
    {
      id: "viz",
      gridArea: "col-start-3 row-start-3",
      icon: <LayoutDashboard className="w-6 h-6 text-amber-500" />,
      title: "Visualisation",
      link: "/fundamentals/dataviz",
      color: "amber",
      description: "Dashboards et Data Storytelling",
    },
    {
      id: "engineering",
      gridArea: "col-start-3 row-start-2",
      icon: <Layers className="w-6 h-6 text-rose-500" />,
      title: "Data Engineering",
      link: "/tools",
      color: "rose",
      description: "ETL, pipelines et infrastructure",
    },
  ];

  return (
    <div
      className={`
        relative aspect-video 
        bg-gradient-to-br from-ds-blue-500/10 to-ds-purple-500/10 
        rounded-lg shadow-xl overflow-hidden p-12
        ${className || ""}
      `}
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />

      <div className="relative z-10 w-full h-full grid grid-cols-3 grid-rows-3 gap-12">
        {/* Bulle centrale */}
        <Link
          to="/introduction"
          className="col-start-2 row-start-2 flex flex-col items-center"
        >
          <div className="w-20 h-20 flex items-center justify-center bg-background rounded-full shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
            <ChartPie className="w-10 h-10 text-primary" />
          </div>
          <span className="mt-2 font-semibold">Data Science</span>
        </Link>

        {/* Les autres topics */}
        {topics.map((t) => (
          <Link
            key={t.id}
            to={t.link}
            className={`${t.gridArea} flex flex-col items-center transform hover:scale-105 transition-transform`}
          >
            <div
              className={`
                w-16 h-16 flex items-center justify-center 
                bg-background rounded-full shadow-lg 
                border-2 border-${t.color}-500/20 hover:border-${t.color}-500/50 
                transition-all
              `}
            >
              {t.icon}
            </div>
            <div className="mt-2 text-center">
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {t.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lignes de connexion (optionnel) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Vous pouvez recalculer x2/y2 si besoin */}
        {/* ... */}
      </svg>
    </div>
  );
};

export default DataScienceMap;
