import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'React', color: 'from-blue-400 to-blue-600', emoji: '⚛️' },
    { name: 'Node.js', color: 'from-green-400 to-green-600', emoji: '🟢' },
    { name: '.NET', color: 'from-purple-400 to-purple-600', emoji: '🔷' },
    { name: 'PHP', color: 'from-indigo-400 to-indigo-600', emoji: '🐘' },
    { name: 'MongoDB', color: 'from-emerald-400 to-emerald-600', emoji: '🍃' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600', emoji: '🎨' },
    { name: 'Notion', color: 'from-gray-400 to-gray-600', emoji: '📝' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700', emoji: '💎' },
  ];

  return (
    <section id="technologies" className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We leverage the most powerful and modern technologies to build exceptional web solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.emoji}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
