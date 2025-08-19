
import ProgrammingIntro from "./programming/ProgrammingIntro";
import PythonMasterclass from "./programming/PythonMasterclass";
import LanguageComparison from "./programming/LanguageComparison";
import PracticalExercises from "./programming/PracticalExercises";
import ResourcesSection from "./programming/ResourcesSection";

const ProgrammingSection = () => {
  return (
    <div id="programming" className="space-y-12">
      <ProgrammingIntro />
      <PythonMasterclass />
      <LanguageComparison />
      <PracticalExercises />
      <ResourcesSection />
    </div>
  );
};

export default ProgrammingSection;
