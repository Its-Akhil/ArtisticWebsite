import React from 'react';
import { Code2, Database, Globe, Cpu, Palette, Terminal } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <RevealOnScroll>
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-black text-white rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-bold font-handwritten">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-5 h-5" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'WebGL'],
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-5 h-5" />,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Rust'],
    },
    {
      title: 'Machine Learning',
      icon: <Cpu className="w-5 h-5" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'NLP'],
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-5 h-5" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping', 'User Research'],
    },
    {
      title: 'DevOps & Tools',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Kubernetes'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 text-center font-handwritten">
            Skills & Expertise
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={0.2 * (index + 1)} direction="up">
              <SkillCategory {...category} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
