'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import PassesSection from './components/PassesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
      <main className="min-h-screen z-10 text-white overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PassesSection />
        <EventsSection />
        <ContactSection />
      </main>
  );
}