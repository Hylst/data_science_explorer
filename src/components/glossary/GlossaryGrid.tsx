
import { CustomCard } from "@/components/ui/custom-card";
import { GlossaryEntry } from "./types";

interface GlossaryGridProps {
  entries: GlossaryEntry[];
  category?: string;
}

const GlossaryGrid = ({ entries, category }: GlossaryGridProps) => {
  const filteredEntries = category 
    ? entries.filter(entry => entry.category === category)
    : entries;

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      {filteredEntries.map((entry, idx) => (
        <CustomCard
          key={`${entry.term}-${idx}`}
          cardTitle={
            <span className="flex items-center gap-3 group">
              {entry.icon}
              <span className="transition-colors group-hover:text-primary">
                {entry.term}
              </span>
            </span>
          }
          description={entry.description}
          className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 card-surface"
          contentClassName="py-0"
          headerClassName="space-y-3"
        />
      ))}
    </div>
  );
};

export default GlossaryGrid;
