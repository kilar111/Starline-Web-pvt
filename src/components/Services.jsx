import React from 'react';
import { Globe, Smartphone, Database, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={48} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with React, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible'],
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Frontend Development',
      description: 'Beautiful, interactive user interfaces using React, Tailwind CSS, and cutting-edge UI libraries.',
      features: ['Modern UI/UX', 'Component-based', 'Accessibility', 'Performance'],
    },
    {
      icon: <Database size={48} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, .NET, PHP, and database management.',
      features: ['RESTful APIs', 'Authentication', 'Database Design', 'Security'],
    },
    {
      icon: <Cloud size={48} />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development services from concept to deployment and maintenance.',
      features: ['Cloud Hosting', 'CI/CD Pipeline', 'Monitoring', 'Support'],
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group"
            >
              <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
