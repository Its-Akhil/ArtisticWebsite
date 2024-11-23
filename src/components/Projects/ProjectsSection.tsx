import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
    <div className="relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 font-handwritten">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing online stores with real-time analytics and inventory management.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication and real-time updates.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2424',
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates unique images using machine learning algorithms.',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2424',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 font-handwritten text-center">
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={project.title}
              direction="up"
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}