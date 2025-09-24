import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const ProjectCard = ({ project, index }) => (
    <AnimatedElement animation="fadeInUp" delay={index * 200}>
      <Card className={`h-full transform transition-all duration-500 ${
        activeProject === index ? 'scale-105 shadow-2xl border-primary/50' : 'hover:scale-102'
      }`}>
        <div className="relative group cursor-pointer" onClick={() => setActiveProject(index)}>
          {/* Project Image/Placeholder */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">📱</span>
            </div>
            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm font-semibold text-white">
              {project.status}
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="text-4xl">{index === 0 ? '🍕' : index === 1 ? '🏍️' : '🔍'}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {project.features.map((feature, featureIndex) => (
              <div key={feature} className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="primary" size="sm" className="flex-1">
              View Demo
            </Button>
            <Button variant="secondary" size="sm" className="flex-1">
              <a href="https://github.com/Altaseb-Chernet/">GitHub</a>
            </Button>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Some of the projects I've built to solve real-world problems
            </p>
          </div>
        </AnimatedElement>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Showcase */}
        <AnimatedElement animation="fadeInUp" delay={600}>
          <Card>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project <span className="gradient-text">Highlights</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Each project represents a unique challenge and learning opportunity
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <h4 className="font-bold text-white mb-2">Production Ready</h4>
                  <p className="text-gray-400 text-sm">Real-world applications with user feedback</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💡</div>
                  <h4 className="font-bold text-white mb-2">Innovative Solutions</h4>
                  <p className="text-gray-400 text-sm">Creative approaches to complex problems</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔧</div>
                  <h4 className="font-bold text-white mb-2">Full Stack</h4>
                  <p className="text-gray-400 text-sm">End-to-end development experience</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Projects;