import { Github, Mail, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import BinaryBackground from "./BinaryBackground";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center gap-8 py-12 px-4 bg-[#1A1F2C]">
      <BinaryBackground />
      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative z-10">
        <div className="mb-6 flex items-center gap-2">
          <Code className="h-8 w-8 text-[#00FF00]" />
          <span className="text-[#00FF00] font-mono">Currently building something amazing...</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Computer Science Student
          <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
            RWTH Aachen University
          </span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Passionate about software development, algorithms, and building innovative solutions.
          Currently pursuing Computer Science at one of Germany's leading technical universities
          while working on my own startup project - a revolutionary app that aims to transform
          how students collaborate on campus.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 flex items-center gap-2"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00]/10 flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Contact
          </Button>
        </div>

        <div className="mt-12 p-4 bg-black/30 rounded-lg border border-[#00FF00]/20">
          <h3 className="text-[#00FF00] font-mono mb-2">Current Project Status:</h3>
          <p className="text-gray-300">
            Building a collaborative platform for students. 
            Tech stack: React, Node.js, TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;