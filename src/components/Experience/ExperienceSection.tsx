import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Calendar } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

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
  const itemRef = useRef<HTMLElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current || !dotRef.current || !contentRef.current || !techRef.current) return;

    const ctx = gsap.context(() => {
      // Item animation
      gsap.from(itemRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Dot animation
      gsap.from(dotRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });

      // Content reveal animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      });

      // Technologies animation
      gsap.from(techRef.current.children, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top bottom-=100',
          end: 'center center',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power3.out'
      });
    }, itemRef);

    return () => ctx.revert();
  }, []);

  return (
    <RevealOnScroll direction="left" width='100%'>
      <div ref={itemRef} className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
        
        {/* Timeline dot */}
        <div ref={dotRef} className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-black" />
        
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
          
          <div ref={contentRef} className="space-y-2 text-gray-600 mb-4">
            <ul className="list-disc list-inside">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div ref={techRef} className="flex flex-wrap gap-2">
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
      </div>
    </RevealOnScroll>
  );
};

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

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from('.experience-heading', {
        scrollTrigger: {
          trigger: '.experience-heading',
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Timeline line animation
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <RevealOnScroll>
          <h2 className="experience-heading text-4xl font-bold mb-12 text-center font-handwritten">
            Work Experience
          </h2>
        </RevealOnScroll>
        <div ref={timelineRef} className="space-y-8 w-full">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
