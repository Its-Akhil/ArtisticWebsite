import React from 'react';
import { ChevronRight, Monitor, Database, Layers } from 'lucide-react';
import CategoryCard from './CategoryCard';
import GridBackground from './GridBackground';
import RevealOnScroll from '../common/RevealOnScroll';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-64px)] flex items-center">
      <div className="absolute inset-0">
        <GridBackground />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-6">
            <RevealOnScroll direction="up" delay={0.2}>
              <h1 className="font-handwritten text-5xl font-bold leading-tight">
                Showcase Your Coding Skills with CodeShowcase
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.4}>
              <p className="text-gray-600 text-lg font-handwritten">
                Welcome to CodeShowcase, a platform dedicated to showcasing your coding projects in a minimalist and impressive way. Explore featured projects, filter by technology stack or category and dive into detailed project descriptions, code snippets, and demos.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.6}>
              <div className="flex items-center space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 font-handwritten">
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
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