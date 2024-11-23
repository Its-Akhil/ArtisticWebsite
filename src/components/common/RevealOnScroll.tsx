import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function RevealOnScroll({ 
  children, 
  width = "100%",
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = ""
}: RevealProps) {
  const ref = React.useRef(null);
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
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={controls}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
