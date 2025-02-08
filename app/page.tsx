"use client";

import { useEffect, useState } from 'react';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import EventsSection from './components/Events';
import PassesSection from './components/Passes';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import { technicalEvents, nonTechnicalEvents } from './data/events';

export default function Home() {
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
    <main className="min-h-screen">
      <HeroSection timeLeft={timeLeft} />
      <AboutSection /> 
      <EventsSection 
        technicalEvents={technicalEvents}
        nonTechnicalEvents={nonTechnicalEvents}
      />
      <PassesSection />
      <ContactSection />
      <Footer /> 
    </main>
  );
}