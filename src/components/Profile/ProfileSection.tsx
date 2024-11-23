import React from 'react';
import GridBackground from '../Hero/GridBackground';

export default function ProfileSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <GridBackground />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-black/10 shadow-xl">
              <img 
                src="https://via.placeholder.com/128" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-handwritten text-4xl font-bold mb-4">John Doe</h1>
            <p className="font-handwritten text-xl text-gray-600">Full Stack Developer & Designer</p>
          </div>

          {/* About Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="font-handwritten text-2xl font-bold mb-4">About Me</h2>
            <p className="font-handwritten text-gray-600 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful, 
              functional web applications. With expertise in modern web technologies and a background 
              in both front-end and back-end development, I bring ideas to life through clean code 
              and intuitive user experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="font-handwritten text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React', 'TypeScript', 'Node.js',
                'Tailwind CSS', 'MongoDB', 'AWS',
                'Next.js', 'GraphQL', 'Docker'
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-black/5 rounded-lg px-4 py-2 text-center font-handwritten hover:bg-black/10 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="font-handwritten text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a 
                href="mailto:contact@example.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>📧</span>
                <span>contact@example.com</span>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>💻</span>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
