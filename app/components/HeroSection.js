'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-04-12').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center z-20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 mt-8 z-20"
      >
        <img src="logo.png" alt="Logo" className="w-[200px] md:w-[250px] lg:w-[300px] h-auto" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text z-20"
      >
        INVICTUS 2025
      </motion.h1>
      <h2 className="text-4xl font-bold text-white mb-2">Department Of Computer Science and Engineering</h2>
      <h2 className="text-3xl font-bold text-white mb-4">(Artificial Intelligence & Machine Learning)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 z-20">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}