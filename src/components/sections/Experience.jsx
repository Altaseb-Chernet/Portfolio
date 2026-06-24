import React from "react";
import { portfolioData } from "../../data/portfolioData";
import AnimatedElement from "../ui/AnimatedElement";
import Card from "../ui/Card";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/60"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional experience building real-world software solutions
            </p>
          </div>
        </AnimatedElement>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-10">
              {portfolioData.experience.map((exp, index) => (
                <AnimatedElement
                  key={exp.id}
                  animation="fadeInUp"
                  delay={index * 200}
                >
                  <div className="relative md:pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-8 w-5 h-5 bg-primary rounded-full border-4 border-slate-900 shadow-lg shadow-primary/30 hidden md:block"></div>

                    <Card className="p-8 border border-white/10 hover:border-primary/30 transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold text-lg">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 glass rounded-full text-xs font-bold text-secondary border border-secondary/30">
                            {exp.type}
                          </span>
                          <span className="px-3 py-1 glass rounded-full text-xs font-bold text-gray-400">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-accent font-medium mb-3">
                        {exp.duration}
                      </p>

                      <p className="text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certification */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          {/* Education */}
          <AnimatedElement animation="slideInLeft" delay={400}>
            <Card className="h-full p-8 border border-white/10 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎓</span>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">
                {portfolioData.education.degree}
              </h4>
              <p className="text-primary font-semibold mb-1">
                {portfolioData.education.institution}
              </p>
              <p className="text-accent text-sm font-medium mb-4">
                {portfolioData.education.duration}
              </p>

              <div className="space-y-2">
                {portfolioData.education.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedElement>

          {/* Certifications */}
          <AnimatedElement animation="slideInRight" delay={500}>
            <Card className="h-full p-8 border border-white/10 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📜</span>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>

              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="group">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-secondary font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-accent text-sm font-medium">
                    {cert.date}
                  </p>
                </div>
              ))}
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Experience;
