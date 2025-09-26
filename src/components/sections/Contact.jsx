import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import AnimatedElement from '../ui/AnimatedElement';
import Card from '../ui/Card';
import Button from '../ui/Button';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // EmailJS configuration - replace with your actual credentials
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Check if EmailJS credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || 
        SERVICE_ID === 'your_service_id' || 
        TEMPLATE_ID === 'your_template_id' || 
        PUBLIC_KEY === 'your_public_key') {
      setStatusMessage('Email service is not configured. Please contact me directly.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: portfolioData.personalInfo?.name || 'Portfolio Owner',
        reply_to: formData.email,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('Email sent successfully!', response);
      
      // Success message
      setStatusMessage('success');
      
      // Show success alert
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('error');
      alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get appropriate icon for each social link
  const getSocialIcon = (linkName) => {
    const name = linkName.toLowerCase();
    if (name.includes('github')) return '📧';
    if (name.includes('linkedin')) return '📧';
    if (name.includes('email')) return '📧';
    if (name.includes('twitter')) return '📧';
    if (name.includes('instagram')) return '📧';
    return '📧'; // Default icon
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedElement animation="slideInLeft">
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                {portfolioData.socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glass rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <h4 className="font-bold text-white mb-4">Quick Response</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Average Response Time:</span>
                    <span className="text-primary">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-green-400">Available for projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-accent">{portfolioData.personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement animation="slideInRight" delay={200}>
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 glass border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 glass border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 glass border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 glass border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {statusMessage === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm text-center">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                )}

                {statusMessage === 'success' && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                {/* Configuration Note */}
                <div className="text-xs text-gray-500 text-center mt-4">
                  {SERVICE_ID === 'your_service_id' ? (
                    <p>⚠️ Email service not configured. Please set up EmailJS credentials.</p>
                  ) : (
                    <p>✓ Email service is configured and ready</p>
                  )}
                </div>
              </form>
            </Card>
          </AnimatedElement>
        </div>

        {/* Call to Action */}
        <AnimatedElement animation="fadeInUp" delay={400}>
          <div className="text-center mt-12">
            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm currently available for freelance work, internships, and collaborative projects. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" animated>
                  <a href={`mailto:${portfolioData.personalInfo.email}?subject=Project Inquiry`}>
                    Schedule a Call
                  </a>
                </Button>
                <Button variant="secondary" size="lg" animated>
                  <a href="https://github.com/Altaseb-Chernet" target="_blank" rel="noopener noreferrer">
                    View My GitHub
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

export default Contact;