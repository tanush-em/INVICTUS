'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import PassesSection from './components/PassesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <h2 className="text-5xl font-bold mb-8 text-center">Event Passes</h2>
      <EventsSection />
      <PassesSection />
      <ContactSection />
    </main>
  );
}