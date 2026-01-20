import React, { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import AnimatedElement from "../ui/AnimatedElement";
import Card from "../ui/Card";
import Button from "../ui/Button";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const ProjectCard = ({ project, index }) => (
    <AnimatedElement animation="fadeInUp" delay={index * 200}>
      <Card
        className={`h-full transform transition-all duration-500 ${
          activeProject === index
            ? "scale-105 shadow-2xl border-primary/50"
            : "hover:scale-102"
        }`}
      >
        <div
          className="relative group cursor-pointer"
          onClick={() => setActiveProject(index)}
        >
          {/* Project Image */}
          <div className="relative h-52 rounded-xl mb-6 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all"></div>
            <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm font-semibold text-white">
              {project.status}
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
            {project.technologies.map((tech) => (
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
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center text-sm text-gray-400"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="primary" size="sm" className="flex-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </Button>
            <Button variant="secondary" size="sm" className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/60"></div>
      <div className="container-custom px-6 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of full-stack and modern web applications I’ve built
            </p>
          </div>
        </AnimatedElement>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Highlights */}
        <AnimatedElement animation="fadeInUp" delay={600}>
          <Card>
            <div className="text-center px-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project <span className="gradient-text">Highlights</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Every project represents problem-solving, design thinking, and
                full-stack development experience.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <h4 className="font-bold text-white mb-2">
                    Production Ready
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Real-world deployments with scalability in mind.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💡</div>
                  <h4 className="font-bold text-white mb-2">
                    Innovative Solutions
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Solving unique challenges with modern tech.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <h4 className="font-bold text-white mb-2">
                    Full-Stack Expertise
                  </h4>
                  <p className="text-gray-400 text-sm">
                    From frontend design to backend architecture.
                  </p>
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
