import React from 'react';

interface TechBadgeProps {
  text: string;
}

export default function TechBadge({ text }: TechBadgeProps) {
  return (
    <div className="px-6 py-3 border border-gray-200 rounded-lg font-handwritten hover:border-gray-300 transition-colors">
      {text}
    </div>
  );
}