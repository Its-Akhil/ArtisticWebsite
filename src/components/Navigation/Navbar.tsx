import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Code, Layout, Search, User, Mail } from 'lucide-react';
import ContactModal from '../Contact/ContactModal';
import SearchModal from '../Search/SearchModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-sm' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-handwritten text-lg md:text-xl">CodeShowcase</span>
          </Link>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 font-handwritten text-sm md:text-base ${
                isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Layout className="w-5 h-5" />
              <span className="hidden sm:inline">Projects</span>
            </Link>

            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-black font-handwritten text-sm md:text-base"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <Link
              to="/profile"
              className={`flex items-center space-x-2 font-handwritten text-sm md:text-base ${
                isActive('/profile') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-black font-handwritten text-sm md:text-base"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">Contact</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from going under navbar */}
      <div className="h-16" />

      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}