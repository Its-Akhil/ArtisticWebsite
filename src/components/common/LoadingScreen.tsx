import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 0.5; // Slower progress increment
        });
      }, 30); // Slightly slower update interval

      // Update loading text based on progress
      const textInterval = setInterval(() => {
        setLoadingText(prev => {
          switch(prev) {
            case 'Initializing':
              return 'Loading Dependencies';
            case 'Loading Dependencies':
              return 'Compiling Code';
            case 'Compiling Code':
              return 'Optimizing';
            case 'Optimizing':
              return 'Almost Ready';
            default:
              return 'Almost Ready';
          }
        });
      }, 1200); // Longer interval between text changes

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-50 z-50 flex flex-col items-center justify-center p-4"
        >
          <div className="w-full max-w-md">
            {/* Code brackets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <span className="text-4xl font-mono tracking-tight">
                <span className="text-gray-400">&lt;</span>
                <span className="font-handwritten">Code</span>
                <span className="text-gray-400">/&gt;</span>
              </span>
            </motion.div>

            {/* Progress text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-4"
            >
              <h2 className="font-handwritten text-xl text-gray-800">
                {loadingText}
              </h2>
              <p className="text-gray-600 font-mono mt-2">
                {Math.floor(progress)}%
              </p>
            </motion.div>

            {/* Progress bar container */}
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              {/* Progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-black rounded-full"
              />
            </div>

            {/* Loading messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="mt-4 text-center"
            >
              <p className="text-sm text-gray-500 font-handwritten">
                Building something amazing...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
