import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Cpu, Palette, Terminal } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

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

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !skillsRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from('.skills-heading', {
        scrollTrigger: {
          trigger: '.skills-heading',
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Skills stagger animation
      const skillItems = skillsRef.current.children;
      gsap.from(skillItems, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Progress bar animations
      const progressBars = document.querySelectorAll('.skill-progress-fill');
      progressBars.forEach((bar) => {
        const level = bar.getAttribute('data-level');
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top bottom-=100',
              end: 'bottom center',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Hover animations
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="skills-heading text-4xl font-bold mb-12 text-center font-handwritten">
            Skills & Expertise
          </h2>
        </RevealOnScroll>
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={category.title} delay={0.2 * (index + 1)} direction="up">
              <SkillCategory {...category} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
