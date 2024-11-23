import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Code, Layout, Search, User, Mail } from 'lucide-react';
import ContactModal from '../Contact/ContactModal';
import SearchModal from '../Search/SearchModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="border-b border-gray-100 py-4 px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="w-6 h-6" />
            <span className="font-handwritten text-xl">CodeShowcase</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 font-handwritten ${
                isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              <Layout className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center space-x-2 font-handwritten text-gray-600 hover:text-black"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <Link 
              to="/profile"
              className={`flex items-center space-x-2 font-handwritten ${
                isActive('/profile') ? 'text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-handwritten"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </nav>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
}