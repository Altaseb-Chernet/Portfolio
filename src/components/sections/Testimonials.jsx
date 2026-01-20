import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === portfolioData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/60"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Recommendations & <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What mentors and colleagues say about my work and dedication
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatedElement animation="fadeInUp">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="text-center p-8">
                <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  {portfolioData.testimonials[activeTestimonial].avatar}
                </div>
                
                <div className="text-2xl text-gray-300 mb-6 leading-relaxed italic">
                  "{portfolioData.testimonials[activeTestimonial].content}"
                </div>
                
                <div className="mb-2">
                  <h4 className="text-xl font-bold text-white">
                    {portfolioData.testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-primary font-semibold">
                    {portfolioData.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          {/* Testimonial Navigation */}
          <AnimatedElement animation="fadeInUp" delay={200}>
            <div className="flex justify-center space-x-3 mt-8">
              {portfolioData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-primary scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </AnimatedElement>

          {/* All Testimonials Grid */}
          <AnimatedElement animation="fadeInUp" delay={400}>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {portfolioData.testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className={`transform transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'scale-105 border-primary/50' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-start space-x-4 cursor-pointer">
                    <div className="text-4xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-sm mb-2">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-400 text-sm italic">
                        "{testimonial.content.substring(0, 100)}..."
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedElement>

          {/* Future Testimonials Placeholder */}
          <AnimatedElement animation="fadeInUp" delay={600}>
            <Card className="text-center mt-8">
              <h3 className="text-xl font-bold text-white mb-3">
                My Testimonial Could Be Here
              </h3>
              <p className="text-gray-400 mb-4">
                I'm always looking for new opportunities to collaborate and create amazing projects together.
              </p>
              <div className="text-4xl mb-3">🌟</div>
              <p className="text-primary font-semibold">
                Let's build something great together!
              </p>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;