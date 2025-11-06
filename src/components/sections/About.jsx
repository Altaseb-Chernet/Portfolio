import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      <div className="container-custom px-6 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn more about my journey, skills, and goals as a full stack developer.
              My main focus is on building scalable, responsive, and user-friendly web applications using modern tools and frameworks such as React, Next.js, Node.js, and Tailwind CSS.
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
                <h4 className="font-semibold text-primary mb-4">Current Focus</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Frontend Development</span>
                    <span className="text-primary">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Backend Development</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Data Structures & Algorithms</span>
                    <span className="text-primary">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
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
