import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  demoUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-handwritten text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 font-handwritten">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-sm rounded-full font-handwritten"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-handwritten"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-handwritten"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}