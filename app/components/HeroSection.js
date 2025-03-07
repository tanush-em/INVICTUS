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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center z-20">

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8 mt-0">
        <div className="w-20 h-20 flex items-center justify-center">
          <img src="atlas-logo.png" alt="atlas-logo" className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="w-52 h-52 sm:w-52 sm:h-52 md:w-56 md:h-56 flex items-center justify-center">
          <img src="eec-logo.png" alt="eec-logo" className="max-w-full max-h-full object-contain" />
        </div>
        
        <div className="w-20 h-20 flex items-center justify-center">
          <img src="adeptus-logo.png" alt="adeptus-logo" className="max-w-full max-h-full object-contain" />
        </div>
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-4 z-20"
      >
        <img src="logo.png" alt="Logo" className="w-64 sm:w-64 md:w-72 lg:w-96 h-auto" />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text z-20"
      >
        INVICTUS 2025
      </motion.h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 z-20 mb-8 w-full max-w-xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-3">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{value}</div>
            <div className="text-xs sm:text-sm uppercase">{unit}</div>
          </div>
        ))}
      </div>
      
      <div className="space-y-2 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-normal text-gray-300">
          Department Of Computer Science and Engineering
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-300">
          (Artificial Intelligence & Machine Learning)
        </h2>
      </div>
    </section>
  );
}