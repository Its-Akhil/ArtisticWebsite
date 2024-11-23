import React from 'react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow pointer-events-auto"
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-black/5 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-handwritten text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-gray-600 font-handwritten text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}