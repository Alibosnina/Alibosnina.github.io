import { Card } from "@/components/ui/card";
import BinaryBackground from "./BinaryBackground";

const skills = [
  { category: "Languages", items: ["C++", "PHP", "Java", "JavaScript"] },
  { category: "Web Technologies", items: ["React", "Node.js", "HTML/CSS" , "Laravel"] },
{ category: "Databases", items: ["MySQL", "PostgreSQL", "MariaDB"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "Firebase"] },
  { category: "Areas", items: ["Algorithms", "Data Structures", "Web design"] },
];

const SkillsSection = () => {
  return (
    <div className="relative">
      <BinaryBackground />
    <section className="py-16 px-4 bg-[#1A1F2C]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#00FF00]">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skillGroup) => (
          <Card 
            key={skillGroup.category} 
            className="p-6 bg-[#222831] border border-[#00FF00]/20 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-shadow"
          >
            <h3 className="font-semibold text-xl mb-4 text-[#00FF00]">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SkillsSection;