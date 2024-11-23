import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <RevealOnScroll direction="left" width='100%'>
      <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
        
        {/* Timeline dot */}
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-black" />
        
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold font-handwritten">{title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Building2 className="w-4 h-4" />
                <span>{company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          </div>
          
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
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
    </RevealOnScroll>
  );
};

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: [
        'Led a team of 5 developers in building a modern SaaS platform',
        'Improved application performance by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client projects',
        'Integrated third-party APIs and services',
        'Mentored junior developers',
      ],
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Software Engineer',
      company: 'StartUp Co.',
      period: '2017 - 2019',
      description: [
        'Built real-time collaboration features',
        'Implemented responsive designs',
        'Optimized database queries improving response time by 50%',
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 text-center font-handwritten">
            Work Experience
          </h2>
        </RevealOnScroll>
        <div className="space-y-8 w-full">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
