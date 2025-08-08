
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CourseModuleContentProps {
  moduleId: number;
  onPrevious: () => void;
  onNext: () => void;
  isFirstModule?: boolean;
  isLastModule?: boolean;
  children?: React.ReactNode;
}

const CourseModuleContent: React.FC<CourseModuleContentProps> = ({
  moduleId,
  onPrevious,
  onNext,
  isFirstModule = false,
  isLastModule = false,
  children
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      {children}

      <div className="flex justify-between mt-8">
        {!isFirstModule && (
          <Button variant="outline" onClick={onPrevious}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Module précédent
          </Button>
        )}
        {!isLastModule ? (
          <Button onClick={onNext} className={isFirstModule ? "ml-auto" : ""}>
            Module suivant <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={onNext} className={isFirstModule ? "ml-auto" : ""}>
            Passer au quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default CourseModuleContent;
