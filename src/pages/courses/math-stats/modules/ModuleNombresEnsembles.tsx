
import CourseHighlight from '@/components/courses/CourseHighlight';
import CourseImageBlock from '@/components/courses/CourseImageBlock';
import { Card } from '@/components/ui/card';

const ModuleNombresEnsembles = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Nombres et ensembles : les briques élémentaires</h2>
      
      <p className="mb-4">
        Les ensembles et les différents types de nombres forment la base de toute la structure mathématique utilisée en data science.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Ensembles et opérations</h3>
      
      <p className="mb-4">
        Un ensemble est une collection d'objets distincts. En data science, les ensembles nous permettent de structurer les données et d'effectuer des opérations logiques sur celles-ci.
      </p>

      <CourseHighlight title="Opérations sur les ensembles" type="concept">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Union (∪)</strong> - Tous les éléments qui sont dans A OU dans B</li>
          <li><strong>Intersection (∩)</strong> - Les éléments qui sont à la fois dans A ET dans B</li>
          <li><strong>Différence (A \ B)</strong> - Les éléments qui sont dans A mais PAS dans B</li>
          <li><strong>Complément (A')</strong> - Tous les éléments qui ne sont PAS dans A</li>
        </ul>
      </CourseHighlight>

      <CourseImageBlock 
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
        alt="Diagramme de Venn montrant des opérations sur les ensembles" 
        caption="Les diagrammes de Venn visualisent les relations entre les ensembles"
      />

      <h3 className="text-xl font-medium mt-6 mb-3">Types de nombres</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <h4 className="font-medium mb-2">Nombres entiers (ℤ)</h4>
          <p className="text-sm text-gray-700">
            {"-2, -1, 0, 1, 2..."} - Utilisés pour compter et indexer.
          </p>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Nombres rationnels (ℚ)</h4>
          <p className="text-sm text-gray-700">
            Nombres qui peuvent s'exprimer comme des fractions (p/q où p,q ∈ ℤ, q≠0).
          </p>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Nombres réels (ℝ)</h4>
          <p className="text-sm text-gray-700">
            Incluent les rationnels et irrationnels (π, e, √2) - Utilisés pour les mesures continues.
          </p>
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Nombres complexes (ℂ)</h4>
          <p className="text-sm text-gray-700">
            De la forme a+bi où i² = -1 - Utilisés dans le traitement du signal et certains algorithmes avancés.
          </p>
        </Card>
      </div>

      <CourseHighlight title="Application en data science" type="example">
        <p>
          En préparation des données (data preprocessing), nous utilisons souvent des opérations ensemblistes :
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Sélection de caractéristiques</strong> : Utilisation de l'intersection d'ensembles pour trouver les caractéristiques communes à plusieurs modèles performants.</li>
          <li><strong>Détection d'anomalies</strong> : Identification des valeurs qui n'appartiennent pas à l'ensemble "normal" de données.</li>
          <li><strong>Division des données</strong> : Partition de l'ensemble de données en ensembles d'entraînement et de test disjoints.</li>
        </ul>
      </CourseHighlight>
    </>
  );
};

export default ModuleNombresEnsembles;
