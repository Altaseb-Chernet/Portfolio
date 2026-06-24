import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/60"></div>
      <div className="container-custom px-6 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn more about my journey, skills, and goals as a full stack developer.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - My Story */}
          <AnimatedElement animation="slideInLeft">
            <Card hoverable={false} className="h-full">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm <strong>{portfolioData.personalInfo.name}</strong>, a 
                  <strong> Software Engineering student</strong> at{' '}
                  <strong>{portfolioData.personalInfo.university}</strong>, 
                  passionate about solving problems through technology.
                </p>
                <p>
                  My main focus is on building scalable, responsive, and user-friendly
                  web applications using modern tools and frameworks such as{' '}
                  <strong>React, Next.js, Node.js, and Tailwind CSS</strong>.
                </p>
                <p>
                  I love participating in hackathons, working on open-source projects, 
                  and continuously exploring new technologies that enhance web development 
                  and improve user experience.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary">Age:</h4>
                  <p className="text-gray-300">{portfolioData.personalInfo.age}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Education:</h4>
                  <p className="text-gray-300">BSc Software Engineering</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location:</h4>
                  <p className="text-gray-300">{portfolioData.personalInfo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Status:</h4>
                  <p className="text-gray-300">Full Stack Developer</p>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          {/* Right Side - Interests & Focus */}
          <AnimatedElement animation="slideInRight" delay={200}>
            <Card hoverable={false}>
              <h3 className="text-2xl font-bold text-white mb-6">Interests & Goals</h3>
              <div className="space-y-4">
                {portfolioData.interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-primary mb-4">What I Bring</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Frontend", icon: "🎨" },
                    { label: "Backend", icon: "⚙️" },
                    { label: "Database Design", icon: "🗄️" },
                    { label: "Clean Code", icon: "✨" },
                    { label: "Problem Solving", icon: "🧠" },
                    { label: "Team Player", icon: "🤝" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
