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
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-8 z-20">
      <div className="w-full flex justify-center items-center px-4 py-2">
        <img
          src="title-logo.png"
          alt="title-logo"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto"
        />
      </div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-4 mt-2 z-20"
      >
        <img src="logo.png" alt="Logo" className="w-48 sm:w-64 md:w-72 lg:w-96 h-auto" />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text z-20"
      >
        INVICTUS 2025
      </motion.h1>
      
      {/* Fixed Timer Component */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-8 px-2">
        <div className="flex justify-between items-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit} 
              className="w-full bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 mx-1"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {value}
              </div>
              <div className="text-xs uppercase">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2 text-center max-w-3xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-300">
          Department Of Computer Science and Engineering
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-300">
          (Artificial Intelligence & Machine Learning)
        </h2>
      </div>
    </section>
  );
}