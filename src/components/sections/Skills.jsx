import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';

const Skills = () => {
  const skillCategories = {
    frontend: 'Frontend Technologies',
    backend: 'Backend & Programming',
    database: 'Database & Tools'
  };

  const getSkillsByCategory = (category) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

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
            style={{ width: '0%' }}
            ref={(el) => {
              if (el) {
                setTimeout(() => {
                  el.style.width = `${skill.level}%`;
                }, delay);
              }
            }}
          ></div>
        </div>
      </div>
    </AnimatedElement>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(skillCategories).map(([key, title], categoryIndex) => (
            <AnimatedElement 
              key={key} 
              animation="fadeInUp" 
              delay={categoryIndex * 200}
            >
              <Card className="h-full transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  {title}
                </h3>
                <div className="space-y-4">
                  {getSkillsByCategory(key).map((skill, index) => (
                    <div key={skill.name} className="text-center group cursor-pointer">
                      <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <div className="text-sm text-gray-400 mt-1">
                        {skill.level}% Proficiency
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Detailed Skill Progress Bars */}
        <AnimatedElement>
          <Card>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Skill <span className="gradient-text">Proficiency</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.skills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  delay={index * 100 + 300}
                />
              ))}
            </div>
          </Card>
        </AnimatedElement>

        {/* Tech Stack */}
        <AnimatedElement animation="fadeInUp" delay={800}>
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-white mb-6">Tech Stack</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="glass px-6 py-3 rounded-full transform hover:scale-110 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 100 + 900}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-white font-medium group-hover:text-primary">
                      {skill.name}
                    </span>
                  </div>
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