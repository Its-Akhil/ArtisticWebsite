import React from 'react';
import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Hero/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import TechSection from './components/Technologies/TechSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechSection />
    </div>
  );
}

export default App;