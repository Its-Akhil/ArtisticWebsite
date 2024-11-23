import React from 'react';
import { ChevronRight, Monitor, Database, Layers } from 'lucide-react';
import CategoryCard from './CategoryCard';
import GridBackground from './GridBackground';
import RevealOnScroll from '../common/RevealOnScroll';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-64px)]">
      <div className="absolute inset-0">
        <GridBackground />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          <div className="relative space-y-6 md:space-y-8">
            <RevealOnScroll direction="up" delay={0.2}>
              <h1 className="font-handwritten text-4xl md:text-5xl font-bold leading-tight pointer-events-none">
                Showcase Your Coding Skills with CodeShowcase
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.4}>
              <p className="text-gray-600 text-base md:text-lg font-handwritten pointer-events-none">
                Welcome to CodeShowcase, a platform dedicated to showcasing your coding projects in a minimalist and impressive way.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.6}>
              <div className="flex items-center space-x-4 pointer-events-none">
                <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 font-handwritten text-sm md:text-base pointer-events-auto">
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:gap-6 pointer-events-none">
            <RevealOnScroll direction="left" delay={0.4}>
              <CategoryCard
                icon={<Monitor className="w-6 h-6" />}
                title="ML Engineer"
                description="Data-driven insights and predictive models"
              />
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={0.6}>
              <CategoryCard
                icon={<Database className="w-6 h-6" />}
                title="Web3 Developer"
                description="Blockchain and decentralized applications"
              />
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={0.8}>
              <CategoryCard
                icon={<Layers className="w-6 h-6" />}
                title="Full Stack Developer"
                description="End-to-end web development solutions"
              />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}