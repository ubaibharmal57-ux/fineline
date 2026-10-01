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

  const seededValue = (seed: number) => ((seed * 9301 + 49297) % 233280) / 233280;

  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededValue(i + 1) * 100,
    y: seededValue(i + 17) * 100,
    size: seededValue(i + 31) * (sizeMap[size].max - sizeMap[size].min) + sizeMap[size].min,
    duration: 15 + seededValue(i + 47) * 20,
    delay: seededValue(i + 61) * 5,
    drift: seededValue(i + 79) * 50 - 25,
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
            x: [0, el.drift, 0],
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
