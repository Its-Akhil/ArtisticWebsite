import React from 'react';
import TechBadge from './TechBadge';

const technologies = ['React', 'Python', 'Java', 'Node.js', 'Ruby'];

export default function TechSection() {
  return (
    <section className="border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech) => (
            <TechBadge key={tech} text={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}