import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export default function NavLink({ icon, text, active = false }: NavLinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active ? 'bg-gray-100' : 'hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </a>
  );
}