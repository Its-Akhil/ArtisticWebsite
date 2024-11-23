import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TypographySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      // Create text animation sequence
      const phrases = [
        'Modern Typography',
        'Creative Design',
        'Elegant Solutions',
        'Innovative Styles'
      ];

      const textElements = Array.from(textContainerRef.current?.children || []);
      
      textElements.forEach((element, index) => {
        // Split text animation
        const text = element as HTMLElement;
        const chars = text.textContent?.split('') || [];
        text.textContent = '';
        
        chars.forEach((char, charIndex) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          text.appendChild(span);

          gsap.to(span, {
            scrollTrigger: {
              trigger: text,
              start: 'top center+=100',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay: charIndex * 0.02,
            ease: 'power2.out'
          });
        });

        // Hover effect
        text.addEventListener('mouseenter', () => {
          gsap.to(text.children, {
            y: -5,
            scale: 1.1,
            stagger: 0.02,
            ease: 'power2.out'
          });
        });

        text.addEventListener('mouseleave', () => {
          gsap.to(text.children, {
            y: 0,
            scale: 1,
            stagger: 0.02,
            ease: 'power2.out'
          });
        });
      });

      // Floating animation for decorative elements
      gsap.to('.typography-decor', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="typography-decor absolute top-1/4 left-1/4 text-8xl font-bold text-white">A</div>
        <div className="typography-decor absolute top-1/3 right-1/4 text-8xl font-bold text-white">B</div>
        <div className="typography-decor absolute bottom-1/4 left-1/3 text-8xl font-bold text-white">C</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl font-bold text-white text-center mb-16 font-handwritten"
        >
          Typography in Motion
        </h2>

        <div
          ref={textContainerRef}
          className="grid gap-8 md:gap-12"
        >
          <p className="text-3xl md:text-4xl text-white font-light text-center cursor-pointer hover:text-primary transition-colors">
            Modern Typography
          </p>
          <p className="text-3xl md:text-4xl text-white font-bold text-center cursor-pointer hover:text-secondary transition-colors">
            Creative Design
          </p>
          <p className="text-3xl md:text-4xl text-white font-extrabold text-center cursor-pointer hover:text-primary transition-colors">
            Elegant Solutions
          </p>
          <p className="text-3xl md:text-4xl text-white font-black text-center cursor-pointer hover:text-secondary transition-colors">
            Innovative Styles
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Font Weights</h3>
            <div className="space-y-4">
              <p className="text-lg text-white font-thin">Thin Text (100)</p>
              <p className="text-lg text-white font-light">Light Text (300)</p>
              <p className="text-lg text-white font-normal">Regular Text (400)</p>
              <p className="text-lg text-white font-medium">Medium Text (500)</p>
              <p className="text-lg text-white font-bold">Bold Text (700)</p>
              <p className="text-lg text-white font-black">Black Text (900)</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-4">Font Styles</h3>
            <div className="space-y-4">
              <p className="text-lg text-white italic">Italic Text</p>
              <p className="text-lg text-white underline">Underlined Text</p>
              <p className="text-lg text-white line-through">Strikethrough Text</p>
              <p className="text-lg text-white uppercase">Uppercase Text</p>
              <p className="text-lg text-white lowercase">Lowercase Text</p>
              <p className="text-lg text-white capitalize">Capitalized Text</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;
