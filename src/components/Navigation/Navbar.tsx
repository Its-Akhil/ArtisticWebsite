import React from 'react';
import { Code, Layout, Search, User, Mail } from 'lucide-react';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="w-6 h-6" />
          <span className="font-handwritten text-xl">CodeShowcase</span>
        </div>
        <div className="flex items-center space-x-6">
          <NavLink icon={<Layout className="w-4 h-4" />} text="Home" active />
          <NavLink icon={<Code className="w-4 h-4" />} text="Projects" />
          <NavLink icon={<Search className="w-4 h-4" />} text="Search" />
          <NavLink icon={<User className="w-4 h-4" />} text="Profile" />
          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-handwritten">
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
}