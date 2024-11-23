import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (matching the progress bar duration)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500); // Extended duration for longer loading experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-white overflow-hidden">
        <LoadingScreen isLoading={isLoading} />
        <div className={isLoading ? 'hidden' : ''}>
          <Navbar />
          <main className="relative overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfileSection />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;