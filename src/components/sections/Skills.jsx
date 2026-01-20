import React from "react";
import { portfolioData } from "../../data/portfolioData";
import AnimatedElement from "../ui/AnimatedElement";
import Card from "../ui/Card";

const Skills = () => {
  const skillCategories = {
    frontend: "Frontend Technologies",
    backend: "Backend & Programming",
    database: "Database Management",
    tools: "Tools & Methodologies",
  };

  const getSkillsByCategory = (category) =>
    portfolioData.skills.filter((skill) => skill.category === category);

  const SkillBar = ({ skill, delay }) => (
    <AnimatedElement animation="fadeInUp" delay={delay}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold text-white text-lg">{skill.name}</span>
          </div>
          <span className="text-primary font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </AnimatedElement>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 to-slate-900/60"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to design, develop, and deploy modern
              web applications.
            </p>
          </div>
        </AnimatedElement>

        {/* --- Technical Skills Section --- */}
<div className="grid md:grid-cols-2 gap-10 mb-16">
  {Object.entries(skillCategories).map(([key, title], i) => (
    <AnimatedElement key={key} animation="fadeInUp" delay={i * 200}>
      <Card className="h-full p-8 hover:scale-105 transition-transform duration-300 border border-primary/20 rounded-2xl shadow-lg">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-3">
          <span className="w-3 h-3 bg-primary rounded-full"></span>
          {title}
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 place-items-center">
          {getSkillsByCategory(key).map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center text-center hover:scale-110 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-800/70 rounded-xl shadow-md mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-4xl text-primary group-hover:text-secondary transition-colors">
                  {skill.icon}
                </span>
              </div>
              <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-primary transition-colors leading-tight">
                {skill.name}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>
      </Card>
    </AnimatedElement>
  ))}
</div>


        {/* --- Skill Proficiency Bars --- */}
        <AnimatedElement>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Skill <span className="gradient-text">Proficiency</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              {portfolioData.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={index * 100 + 200}
                />
              ))}
            </div>
          </Card>
        </AnimatedElement>

        {/* --- Tech Stack Section --- */}
        <AnimatedElement animation="fadeInUp" delay={600}>
          <div className="text-center mt-16">
            <h4 className="text-2xl font-bold text-white mb-8">
              Tech <span className="gradient-text">Stack</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
              {portfolioData.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass py-4 rounded-2xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Skills;
