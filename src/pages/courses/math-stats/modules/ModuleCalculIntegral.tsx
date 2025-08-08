
import React from 'react';
import CourseHighlight from '@/components/courses/CourseHighlight';
import CourseImageBlock from '@/components/courses/CourseImageBlock';
import CourseEquation from '@/components/courses/CourseEquation';
import { Card } from '@/components/ui/card';

const ModuleCalculIntegral = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Introduction au calcul intégral</h2>
      
      <p className="mb-4">
        Le calcul intégral est l'inverse du calcul différentiel. Il permet de calculer des aires sous des courbes, des volumes, et est essentiel en statistiques pour calculer des probabilités.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Qu'est-ce qu'une intégrale ?</h3>
      
      <CourseHighlight title="Définition de l'intégrale définie" type="concept">
        <p>
          L'intégrale définie de f(x) sur l'intervalle [a,b] représente l'aire sous la courbe de f entre a et b:
        </p>
        <CourseEquation latex="\int_a^b f(x) dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \Delta x" />
        <p className="mt-2">
          C'est la limite d'une somme de Riemann qui divise l'intervalle en n sous-intervalles.
        </p>
      </CourseHighlight>

      <CourseImageBlock 
        src="https://images.unsplash.com/photo-1643741903627-c6ea241d27cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
        alt="Illustration de l'intégrale comme aire sous une courbe" 
        caption="L'intégrale représente l'aire sous la courbe d'une fonction"
      />

      <h3 className="text-xl font-medium mt-6 mb-3">Théorème fondamental du calcul</h3>
      
      <p className="mb-4">
        Le théorème fondamental du calcul établit le lien entre dérivation et intégration:
      </p>
      
      <CourseEquation latex="\int_a^b f(x) dx = F(b) - F(a)" />
      
      <p className="mb-4">
        où F est une primitive de f, c'est-à-dire F'(x) = f(x).
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3">Applications en statistiques et probabilités</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <h4 className="font-medium mb-2">Calcul de probabilités</h4>
          <p className="text-sm text-gray-700">
            Pour une variable aléatoire continue X avec densité de probabilité f(x), la probabilité que X se trouve entre a et b est:
          </p>
          <CourseEquation latex="P(a \leq X \leq b) = \int_a^b f(x) dx" />
        </Card>
        
        <Card className="p-4">
          <h4 className="font-medium mb-2">Espérance et variance</h4>
          <p className="text-sm text-gray-700">
            L'espérance d'une variable aléatoire continue:
          </p>
          <CourseEquation latex="E[X] = \int_{-\infty}^{\infty} x f(x) dx" />
        </Card>
      </div>

      <CourseHighlight title="Application en machine learning" type="example">
        <p>
          En apprentissage bayésien, l'intégrale est utilisée pour calculer la probabilité a posteriori:
        </p>
        <CourseEquation latex="P(A|B) = \frac{P(B|A)P(A)}{\int P(B|A')P(A') dA'}" />
        <p className="mt-2">
          Ce qui nous permet de mettre à jour nos croyances sur A après avoir observé B.
        </p>
      </CourseHighlight>

      <CourseHighlight title="À retenir" type="info">
        <ul className="list-disc pl-5 space-y-1">
          <li>Le calcul intégral est fondamental pour comprendre les distributions de probabilités</li>
          <li>Il permet de calculer des aires, volumes et autres quantités cumulatives</li>
          <li>Il est l'opération inverse de la dérivation, comme le théorème fondamental le montre</li>
          <li>En data science, il est particulièrement important en statistiques et en apprentissage bayésien</li>
        </ul>
      </CourseHighlight>
    </>
  );
};

export default ModuleCalculIntegral;
