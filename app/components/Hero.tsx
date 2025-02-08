import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const HeroSection = ({ timeLeft }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Crown className="w-32 h-32 text-primary mb-8" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-6xl font-bold mb-4 text-center"
      >
        SYMPOSIUM 2024
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-muted-foreground mb-12"
      >
        Where Innovation Meets Excellence
      </motion.p>
      <div className="grid grid-cols-4 gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-4xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;