import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  width?: 'full' | 'auto';
}

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  width = 'auto'
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 75 };
      case 'down':
        return { opacity: 0, y: -75 };
      case 'left':
        return { opacity: 0, x: 75 };
      case 'right':
        return { opacity: 0, x: -75 };
      default:
        return { opacity: 0, y: 75 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getFinalPosition());
    }
  }, [isInView, controls, direction]);

  return (
    <div ref={ref} className={`w-${width} ${className}`}>
      <motion.div
        initial={getInitialPosition()}
        animate={controls}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
