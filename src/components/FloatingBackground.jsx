import React from 'react';

const FloatingBackground = () => {
  const shapes = [
    { icon: '⚛️', size: 'text-6xl', delay: '0s', duration: '20s', left: '10%', top: '20%' },
    { icon: '🟢', size: 'text-8xl', delay: '2s', duration: '25s', left: '80%', top: '10%' },
    { icon: '💻', size: 'text-7xl', delay: '4s', duration: '30s', left: '20%', top: '70%' },
    { icon: '🔷', size: 'text-6xl', delay: '1s', duration: '22s', left: '70%', top: '60%' },
    { icon: '🎨', size: 'text-5xl', delay: '3s', duration: '27s', left: '50%', top: '30%' },
    { icon: '🐘', size: 'text-7xl', delay: '5s', duration: '24s', left: '15%', top: '50%' },
    { icon: '🍃', size: 'text-6xl', delay: '2.5s', duration: '26s', left: '85%', top: '75%' },
    { icon: '📝', size: 'text-5xl', delay: '4.5s', duration: '23s', left: '40%', top: '80%' },
    { icon: '💎', size: 'text-8xl', delay: '1.5s', duration: '28s', left: '60%', top: '40%' },
    { icon: '🔧', size: 'text-6xl', delay: '3.5s', duration: '21s', left: '30%', top: '15%' },
    { icon: '🚀', size: 'text-7xl', delay: '0.5s', duration: '29s', left: '90%', top: '50%' },
    { icon: '🎯', size: 'text-5xl', delay: '2.8s', duration: '25s', left: '5%', top: '85%' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.size} opacity-10 hover:opacity-20 transition-opacity`}
          style={{
            left: shape.left,
            top: shape.top,
            animation: `float ${shape.duration} ease-in-out infinite`,
            animationDelay: shape.delay,
          }}
        >
          {shape.icon}
        </div>
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default FloatingBackground;
