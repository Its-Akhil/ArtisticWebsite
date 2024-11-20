import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing online stores with real-time analytics and inventory management.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication and real-time updates.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2424',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates unique images using machine learning algorithms.',
    technologies: ['Python', 'TensorFlow', 'Flask'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2424',
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-handwritten text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}