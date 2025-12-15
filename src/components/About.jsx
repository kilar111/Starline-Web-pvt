import React from 'react';
import { Code2, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={40} />,
      title: 'Modern Development',
      description: 'We use the latest technologies and best practices to build scalable, maintainable applications.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Lightning Fast',
      description: 'Performance-optimized websites that load instantly and provide exceptional user experience.',
    },
    {
      icon: <Users size={40} />,
      title: 'Client Focused',
      description: 'Your vision is our mission. We work closely with you to bring your ideas to life.',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Starline Web Pvt</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
            With expertise in modern web technologies, we transform your ideas into powerful, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
