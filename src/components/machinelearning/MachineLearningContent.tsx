
import { useMachineLearning } from "./MachineLearningContext";
import IntroSection from "./sections/IntroSection";
import SupervisedSection from "./sections/SupervisedSection";
import UnsupervisedSection from "./sections/UnsupervisedSection";
import EvaluationSection from "./sections/EvaluationSection";
import DeepLearningSection from "./sections/DeepLearningSection";

const MachineLearningContent = () => {
  const { activeSection } = useMachineLearning();

  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <div className={activeSection === "introduction" ? "block" : "block"}>
        <IntroSection />
      </div>

      {/* Supervised Learning Section */}
      <div className={activeSection === "supervised" ? "block" : "block"}>
        <SupervisedSection />
      </div>

      {/* Unsupervised Learning Section */}
      <div className={activeSection === "unsupervised" ? "block" : "block"}>
        <UnsupervisedSection />
      </div>

      {/* Model Evaluation Section */}
      <div className={activeSection === "evaluation" ? "block" : "block"}>
        <EvaluationSection />
      </div>

      {/* Deep Learning Section */}
      <div className={activeSection === "deep-learning" ? "block" : "block"}>
        <DeepLearningSection />
      </div>
    </div>
  );
};

export default MachineLearningContent;
