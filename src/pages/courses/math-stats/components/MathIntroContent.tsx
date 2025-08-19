
import MathIntroHero from "./MathIntroHero";
import LinearAlgebraFoundations from "./LinearAlgebraFoundations";
import StatisticsProbabilityFoundations from "./StatisticsProbabilityFoundations";
import PracticalExamplesSection from "./PracticalExamplesSection";
import LearningPathSection from "./LearningPathSection";
import CourseHighlight from "@/components/courses/CourseHighlight";

const MathIntroContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Introduction */}
      <MathIntroHero />

      {/* Algèbre Linéaire */}
      <LinearAlgebraFoundations />

      {/* Statistiques & Probabilités */}
      <StatisticsProbabilityFoundations />

      {/* Applications pratiques */}
      <PracticalExamplesSection />

      {/* Parcours d'apprentissage */}
      <LearningPathSection />

      {/* Conclusion et prochaines étapes */}
      <CourseHighlight title="🎯 Prochaines étapes" type="info">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Après ce cours, vous serez prêt pour :</h4>
            <ul className="space-y-2 text-sm">
              <li>✓ Algèbre Linéaire Avancée</li>
              <li>✓ Statistiques Inférentielles</li>
              <li>✓ Théorie des Probabilités</li>
              <li>✓ Calcul Différentiel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources recommandées :</h4>
            <ul className="space-y-2 text-sm">
              <li>📚 Khan Academy - Mathématiques</li>
              <li>📊 3Blue1Brown - Essence of Linear Algebra</li>
              <li>🎓 MIT OpenCourseWare</li>
              <li>💻 Jupyter notebooks d'exercices</li>
            </ul>
          </div>
        </div>
      </CourseHighlight>
    </div>
  );
};

export default MathIntroContent;
