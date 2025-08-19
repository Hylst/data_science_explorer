
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CourseModuleProps {
  title: string;
  description: string;
  moduleNumber: number;
  isActive?: boolean;
  onClick?: () => void;
}

const CourseModule = ({ 
  title, 
  description, 
  moduleNumber, 
  isActive = false,
  onClick 
}: CourseModuleProps) => {
  return (
    <Card 
      className={cn(
        "p-6 hover:shadow-md transition-all border-l-4 cursor-pointer",
        isActive 
          ? "border-l-ds-blue-500 bg-blue-50" 
          : "border-l-gray-300"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "h-8 w-8 flex items-center justify-center rounded-full font-semibold",
          isActive 
            ? "bg-ds-blue-100 text-ds-blue-800" 
            : "bg-gray-100 text-gray-600"
        )}>
          {moduleNumber}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default CourseModule;
