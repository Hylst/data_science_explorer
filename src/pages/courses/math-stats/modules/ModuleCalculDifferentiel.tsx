
import React from 'react';
import CourseHighlight from '@/components/courses/CourseHighlight';
import CourseImageBlock from '@/components/courses/CourseImageBlock';
import CourseEquation from '@/components/courses/CourseEquation';
import { Card } from '@/components/ui/card';

const ModuleCalculDifferentiel = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Introduction au calcul différentiel</h2>
      
      <p className="mb-4">
        Le calcul différentiel étudie comment les fonctions changent lorsque leurs entrées changent. C'est un outil essentiel pour l'optimisation des modèles en machine learning.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">La notion de dérivée</h3>
      
      <p className="mb-4">
        La dérivée d'une fonction en un point mesure son taux de variation instantané à ce point.
      </p>

      <CourseHighlight title="Définition de la dérivée" type="concept">
        <p>
          La dérivée de f(x) en x₀ est définie comme la limite:
        </p>
        <CourseEquation latex="f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}" />
        <p className="mt-2">
          Géométriquement, c'est la pente de la tangente à la courbe de f au point x₀.
        </p>
      </CourseHighlight>

      <CourseImageBlock 
        src="https://images.unsplash.com/photo-1617781567688-711e106bfd9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
        alt="Graphique montrant la dérivée d'une fonction" 
        caption="La dérivée représente la pente de la tangente à la courbe"
      />

      <h3 className="text-xl font-medium mt-6 mb-3">Règles de dérivation</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <h4 className="font-medium mb-2">Règle de la somme</h4>
          <CourseEquation latex="(f + g)' = f' + g'" />
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Règle du produit</h4>
          <CourseEquation latex="(f \cdot g)' = f' \cdot g + f \cdot g'" />
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Règle de la chaîne</h4>
          <CourseEquation latex="(f \circ g)' = (f' \circ g) \cdot g'" />
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Dérivée d'une fonction exponentielle</h4>
          <CourseEquation latex="\frac{d}{dx}(e^x) = e^x" />
        </Card>
      </div>

      <CourseHighlight title="Application en optimisation" type="example">
        <p>
          Dans l'algorithme de descente de gradient, nous utilisons les dérivées pour minimiser une fonction de coût J(θ):
        </p>
        <CourseEquation latex="\theta_{new} = \theta_{old} - \alpha \frac{\partial J(\theta)}{\partial \theta}" />
        <p className="mt-2">
          Où α est le taux d'apprentissage et ∂J(θ)/∂θ est le gradient (vecteur des dérivées partielles) de la fonction de coût par rapport aux paramètres θ.
        </p>
      </CourseHighlight>

      <h3 className="text-xl font-medium mt-6 mb-3">Dérivées partielles et gradient</h3>

      <p className="mb-4">
        Pour les fonctions à plusieurs variables, nous calculons les dérivées partielles par rapport à chaque variable. Le gradient est le vecteur de toutes ces dérivées partielles.
      </p>

      <CourseHighlight title="Pourquoi est-ce important en data science ?" type="info">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Optimisation</strong> : Les dérivées indiquent la direction de la plus forte pente, utilisée dans la descente de gradient</li>
          <li><strong>Rétropropagation</strong> : L'entraînement des réseaux de neurones repose sur le calcul de dérivées grâce à la règle de la chaîne</li>
          <li><strong>Sensibilité</strong> : Les dérivées montrent comment les prédictions changent lorsque les entrées varient légèrement</li>
        </ul>
      </CourseHighlight>
    </>
  );
};

export default ModuleCalculDifferentiel;
