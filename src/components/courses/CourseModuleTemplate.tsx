
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Play, FileText, Code, Calculator } from 'lucide-react';

interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  level?: 'beginner' | 'intermediate' | 'advanced';
  type?: 'theory' | 'practice' | 'project';
}

interface CourseModuleTemplateProps {
  modules: CourseModule[];
  primaryColor: string;
  onModuleStart: (moduleId: string) => void;
  onModuleNotes: (moduleId: string) => void;
}

const CourseModuleTemplate: React.FC<CourseModuleTemplateProps> = ({
  modules,
  primaryColor,
  onModuleStart,
  onModuleNotes
}) => {
  const getIconForType = (type?: string) => {
    switch (type) {
      case 'practice':
        return <Code className="h-4 w-4" />;
      case 'project':
        return <Calculator className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-700',
      green: 'bg-green-100 text-green-600 hover:bg-green-700',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Card key={module.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(primaryColor).split(' ')[0]} ${getColorClasses(primaryColor).split(' ')[1]}`}>
                  {module.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                <div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                  {module.level && (
                    <Badge variant="outline" className="mt-1">
                      {module.level}
                    </Badge>
                  )}
                </div>
              </div>
              <Badge variant="outline">{module.duration}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button 
                className={`flex items-center gap-2 px-4 py-2 text-white rounded transition-colors bg-${primaryColor}-600 hover:bg-${primaryColor}-700`}
                onClick={() => onModuleStart(module.id)}
              >
                {getIconForType(module.type)}
                Commencer
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition-colors"
                onClick={() => onModuleNotes(module.id)}
              >
                <FileText className="h-4 w-4" />
                Notes
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseModuleTemplate;
