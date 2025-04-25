import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;