'use client';

import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FloatingElements({
  count = 20,
  color = 'rgba(212, 175, 55, 0.15)',
  size = 'md'
}: FloatingElementsProps) {
  const sizeMap = {
    sm: { min: 20, max: 40 },
    md: { min: 40, max: 80 },
    lg: { min: 80, max: 150 }
  };

  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (sizeMap[size].max - sizeMap[size].min) + sizeMap[size].min,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            background: color,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
