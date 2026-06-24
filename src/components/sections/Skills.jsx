import React from "react";
import { portfolioData } from "../../data/portfolioData";
import AnimatedElement from "../ui/AnimatedElement";
import Card from "../ui/Card";

const Skills = () => {
  const skillCategories = {
    frontend: { title: "Frontend", emoji: "🎨" },
    backend: { title: "Backend & Languages", emoji: "⚙️" },
    database: { title: "Databases & ORM", emoji: "🗄️" },
    tools: { title: "Tools & Methods", emoji: "🛠️" },
  };

  const getSkillsByCategory = (category) =>
    portfolioData.skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillCategories).map(([key, { title, emoji }], i) => (
            <AnimatedElement key={key} animation="fadeInUp" delay={i * 150}>
              <Card className="h-full p-8 border border-white/10 rounded-2xl hover:border-primary/40 transition-all duration-500 group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {getSkillsByCategory(key).map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group/skill flex flex-col items-center text-center p-4 rounded-xl bg-white/5 hover:bg-primary/15 border border-transparent hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      <div className="text-3xl mb-3 text-gray-300 group-hover/skill:text-primary transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-sm text-gray-300 group-hover/skill:text-white transition-colors leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Tech Stack Marquee-Style Section */}
        <AnimatedElement animation="fadeInUp" delay={600}>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-8">
              Full <span className="gradient-text">Tech Stack</span>
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 px-5 py-3 glass rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-xl text-gray-400 group-hover:text-primary transition-colors">
                    {skill.icon}
                  </span>
                  <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
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
