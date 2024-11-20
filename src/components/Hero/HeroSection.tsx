import React from 'react';
import { ChevronRight, Monitor, Database, Layers } from 'lucide-react';
import CategoryCard from './CategoryCard';
import GridBackground from './GridBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-screen overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-handwritten text-5xl font-bold leading-tight">
              Showcase Your Coding Skills with CodeShowcase
            </h1>
            <p className="mt-6 text-gray-600 text-lg font-handwritten">
              Welcome to CodeShowcase, a platform dedicated to showcasing your coding projects in a minimalist and impressive way. Explore featured projects, filter by technology stack or category and dive into detailed project descriptions, code snippets, and demos.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 font-handwritten">
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <CategoryCard
              icon={<Monitor className="w-6 h-6" />}
              title="ML Engineer"
              description="Data-driven insights and predictive models"
            />
            <CategoryCard
              icon={<Database className="w-6 h-6" />}
              title="Web3 Developer"
              description="Blockchain and decentralized applications"
            />
            <CategoryCard
              icon={<Layers className="w-6 h-6" />}
              title="Full Stack"
              description="End-to-end application development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}