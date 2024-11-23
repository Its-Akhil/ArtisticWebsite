import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import GridBackground from '../Hero/GridBackground';
import { CONTACT_INFO } from '../../constants/contact';

gsap.registerPlugin(TextPlugin);

export default function ProfileSection() {
  const bioRef = useRef(null);

  useEffect(() => {
    // Bio text typing effect
    gsap.to(bioRef.current, {
      duration: 2,
      text: {
        value: "I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional web applications. With expertise in modern web technologies and a background in both front-end and back-end development, I bring ideas to life through clean code and intuitive user experiences.",
      },
      ease: "none"
    });

    // Cleanup
    return () => {
      gsap.killTweensOf('*');
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0">
        <GridBackground />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-16">
            <div className="group w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-black/10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105">
              <img 
                src="https://via.placeholder.com/160" 
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
              />
            </div>
            <h1 className="font-handwritten text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">{CONTACT_INFO.name}</h1>
            <p className="font-handwritten text-2xl text-gray-600">Full Stack Developer & Designer</p>
          </div>

          {/* About Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <h2 className="font-handwritten text-3xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">About Me</h2>
            <p ref={bioRef} className="font-handwritten text-gray-600 leading-relaxed text-lg"></p>
          </div>

          {/* Skills Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <h2 className="font-handwritten text-3xl font-bold mb-8 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Skills</h2>
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <h2 className="font-handwritten text-3xl font-bold mb-8 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Get in Touch</h2>
            <div className="space-y-4">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>📧</span>
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a 
                href={CONTACT_INFO.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>💻</span>
                <span>{CONTACT_INFO.social.github.label}</span>
              </a>
              <a 
                href={CONTACT_INFO.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors font-handwritten"
              >
                <span>🔗</span>
                <span>{CONTACT_INFO.social.linkedin.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
