
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, PlayCircle, Lock, BookOpen, Calculator, Brain, Target, TrendingUp } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  duration?: string;
  exercises?: number;
  isCompleted?: boolean;
  isActive?: boolean;
}

interface CourseModulesProps {
  modules: Module[];
  activeModule: number;
  onModuleSelect: (moduleId: number) => void;
}

const CourseModules = ({ modules, activeModule, onModuleSelect }: CourseModulesProps) => {
  const moduleIcons = {
    1: <Brain className="h-5 w-5" />,
    2: <Calculator className="h-5 w-5" />,
    3: <TrendingUp className="h-5 w-5" />,
    4: <Target className="h-5 w-5" />,
    5: <BookOpen className="h-5 w-5" />
  };

  const getModuleStatus = (moduleId: number) => {
    if (moduleId < activeModule) return 'completed';
    if (moduleId === activeModule) return 'active';
    return 'locked';
  };

  const getStatusIcon = (moduleId: number) => {
    const status = getModuleStatus(moduleId);
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'active':
        return <PlayCircle className="h-5 w-5 text-blue-600" />;
      default:
        return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getModuleProgress = (moduleId: number) => {
    if (moduleId < activeModule) return 100;
    if (moduleId === activeModule) return 25;
    return 0;
  };

  const canAccessModule = (moduleId: number) => {
    return moduleId <= activeModule;
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Modules du cours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {modules.map((module) => {
              const canAccess = canAccessModule(module.id);
              const isActive = module.id === activeModule;
              const progress = getModuleProgress(module.id);
              
              return (
                <div
                  key={module.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : canAccess
                      ? 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      : 'border-gray-100 bg-gray-50 cursor-not-allowed'
                  }`}
                  onClick={() => canAccess && onModuleSelect(module.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {moduleIcons[module.id as keyof typeof moduleIcons]}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-semibold text-sm ${
                          canAccess ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          Module {module.id}: {module.title}
                        </h3>
                        {getStatusIcon(module.id)}
                      </div>
                      
                      <p className={`text-xs mb-3 ${
                        canAccess ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {module.description}
                      </p>
                      
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {module.duration || '45 min'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">
                            {module.exercises || 3} exercices
                          </span>
                        </div>
                      </div>
                      
                      {progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-600">Progression</span>
                            <span className="text-xs text-gray-600">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-1" />
                        </div>
                      )}
                      
                      {isActive && (
                        <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">
                          En cours
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Résumé de progression */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Votre progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Modules complétés</span>
              <span className="font-semibold">{activeModule - 1}/{modules.length}</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Progression totale</span>
                <span className="text-sm">{Math.round(((activeModule - 1) / modules.length) * 100)}%</span>
              </div>
              <Progress value={((activeModule - 1) / modules.length) * 100} className="h-2" />
            </div>
            
            <div className="pt-2 border-t">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Temps estimé restant : {(modules.length - activeModule + 1) * 45} minutes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseModules;
