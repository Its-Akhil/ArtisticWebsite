import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <div className="backdrop-blur-[2px] bg-white/20 border border-white/20 rounded-xl p-6 hover:bg-white/25 transition-all shadow-[2px_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[3px_3px_15px_rgb(0,0,0,0.08)]">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-white/30 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-handwritten text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-gray-600 font-handwritten">{description}</p>
        </div>
      </div>
    </div>
  );
}