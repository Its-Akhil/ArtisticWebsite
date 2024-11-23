import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import GridBackground from '../Hero/GridBackground';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      inputRef.current?.focus();
      setSearchQuery('');
      setResults([]);
      setIsExpanded(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Mock search results - replace with actual search logic
    const mockResults = [
      {
        title: 'ML Engineer Projects',
        description: 'Collection of machine learning and AI projects',
        type: 'category'
      },
      {
        title: 'Web3 Development',
        description: 'Blockchain and DApp development showcase',
        type: 'category'
      },
      {
        title: 'Full Stack Applications',
        description: 'End-to-end application development projects',
        type: 'category'
      }
    ];
    setResults(mockResults);
    setIsExpanded(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      handleSearch(e as any);
    } else {
      setResults([]);
      setIsExpanded(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0">
        <GridBackground />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-lg" />
      </div>
      
      <div 
        className="relative h-full flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div 
          className={`bg-white shadow-2xl rounded-2xl transition-all duration-300 ease-out ${
            isExpanded ? 'w-full max-w-2xl' : 'w-full max-w-xl'
          } mx-4`}
        >
          <div className="relative">
            <form onSubmit={handleSearch} className="relative">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Type to search..."
                className="w-full pl-16 pr-12 py-6 bg-transparent border-none focus:outline-none focus:ring-0 font-handwritten text-lg placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setResults([]);
                    setIsExpanded(false);
                    inputRef.current?.focus();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </form>

            {isExpanded && (
              <div className="border-t border-gray-200">
                {results.length > 0 ? (
                  <div className="max-h-[60vh] overflow-y-auto">
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="p-6 hover:bg-black/5 transition-colors cursor-pointer"
                      >
                        <h3 className="font-handwritten text-lg font-semibold">{result.title}</h3>
                        <p className="text-gray-600 font-handwritten mt-1">{result.description}</p>
                        <span className="inline-block mt-2 text-sm text-gray-500 font-handwritten">
                          {result.type}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-600 font-handwritten">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
