import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-secondary"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Hackathons & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Competitive programming experiences and academic accomplishments
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Hackathons */}
          <AnimatedElement animation="slideInLeft">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                Hackathon Experience
              </h3>
              
              {portfolioData.hackathons.map((hackathon, index) => (
                <div key={hackathon.id} className="mb-8 last:mb-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">{hackathon.name}</h4>
                      <p className="text-primary font-semibold">{hackathon.date} • {hackathon.role}</p>
                    </div>
                    <span className="glass px-3 py-1 rounded-full text-sm font-bold text-accent">
                      {hackathon.achievement}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{hackathon.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="secondary" size="sm">
                    View Certificate
                  </Button>
                </div>
              ))}
            </Card>
          </AnimatedElement>

          {/* Achievements */}
          <AnimatedElement animation="slideInRight" delay={200}>
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">🏆</span>
                Achievements & Goals
              </h3>
              
              <div className="space-y-6">
                {portfolioData.achievements.map((achievement, index) => (
                  <div key={achievement.id} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="text-3xl flex-shrink-0 transform group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          achievement.status === 'Achieved' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {achievement.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{achievement.description}</p>
                      <span className="text-primary text-sm font-semibold">{achievement.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scholarship Progress */}
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <h4 className="font-bold text-white mb-3">MEXT Scholarship Progress</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Application Preparation</span>
                    <span className="text-primary">65%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Language Proficiency</span>
                    <span className="text-primary">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Technical Preparation</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedElement>
        </div>

        {/* Call to Action */}
        <AnimatedElement animation="fadeInUp" delay={400}>
          <div className="text-center">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for the Next Challenge
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always looking for new opportunities to learn, compete, and collaborate. 
                Whether it's a hackathon, coding competition, or innovative project, I'm ready to bring my skills and passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" animated>
                  Invite to Hackathon
                </Button>
                <Button variant="secondary" animated>
                  <a href="https://github.com/Altaseb-Chernet">View GitHub Profile</a>
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