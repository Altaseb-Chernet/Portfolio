import React from "react";
import { portfolioData } from "../../data/portfolioData";
import AnimatedElement from "../ui/AnimatedElement";
import Card from "../ui/Card";
import Button from "../ui/Button";

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/60 to-slate-900/60"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-secondary"></div>

      <div className="container-custom px-6 relative z-10">
        {/* Section Header */}
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hackathons & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Competitive programming experiences, teamwork, and project-based
              accomplishments
            </p>
          </div>
        </AnimatedElement>

        {/* ✅ Hackathon Grid Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center lg:justify-start">
            <span className="text-4xl mr-3">⚡</span>
            Hackathon Experience
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.hackathons.map((hackathon, index) => (
              <AnimatedElement key={hackathon.id} animation="fadeInUp" delay={index * 150}>
                <Card className="h-full hover:shadow-xl transition-all duration-500">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {hackathon.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {hackathon.date} • {hackathon.role}
                  </p>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {hackathon.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  {hackathon.achievement && (
                    <span className="glass px-3 py-1 rounded-full text-sm font-bold text-accent inline-block mb-3">
                      {hackathon.achievement}
                    </span>
                  )}

                  {/* Certificate Button */}
                  {hackathon.certificate && (
                    <Button
                      variant="secondary"
                      size="sm"
                      as="a"
                      href={hackathon.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </Button>
                  )}
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* ✅ Achievements Section */}
        <AnimatedElement animation="fadeInUp" delay={200}>
          <Card>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">🏆</span>
              Achievements & Goals
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-start space-x-4 group"
                >
                  <div className="text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          achievement.status === "Achieved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {achievement.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">
                      {achievement.description}
                    </p>
                    <span className="text-primary text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedElement>

        {/* ✅ Call To Action */}
        <AnimatedElement animation="fadeInUp" delay={400}>
          <div className="text-center mt-16">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I’m always looking for opportunities to collaborate, innovate,
                and compete. Whether it’s a hackathon, coding competition, or
                creative project — I’m ready to contribute and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" animated>
                  Invite to Hackathon
                </Button>
                <Button variant="secondary" animated>
                  <a
                    href="https://github.com/Altaseb-Chernet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hackathons;
