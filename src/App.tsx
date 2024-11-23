import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import HeroSection from './components/Hero/HeroSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import SkillsSection from './components/Skills/SkillsSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import ContactSection from './components/Contact/ContactSection';
import ProfileSection from './components/Profile/ProfileSection';
import LoadingScreen from './components/common/LoadingScreen';

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  return (
    <Router>
      <div className="relative bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfileSection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;