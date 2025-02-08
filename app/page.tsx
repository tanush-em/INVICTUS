"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Calendar, MapPin, Users, Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { EventCarousel } from './components/event-carousel';
import { technicalEvents, nonTechnicalEvents } from './data/events';

const passes = [
  {
    name: "Standard Pass",
    price: "₹499",
    features: ["Access to all talks", "Workshop materials", "Lunch included", "Certificate"]
  },
  {
    name: "Pro Pass",
    price: "₹999",
    features: ["Standard Pass benefits", "Priority seating", "Exclusive networking session", "Recorded sessions access"]
  },
  {
    name: "VIP Pass",
    price: "₹1999",
    features: ["Pro Pass benefits", "One-on-one mentoring", "Special dinner event", "Swag kit"]
  }
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-03-15').getTime();

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
      {/* Hero Section */}
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

      {/* About Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About The Event</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for an extraordinary three-day celebration of technology, innovation, and creativity. 
            Our annual symposium brings together brilliant minds from across the country to share ideas, 
            learn from industry experts, and showcase their talents.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">March 15-17, 2024</h3>
              <p className="text-muted-foreground">Mark your calendar</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">College Campus</h3>
              <p className="text-muted-foreground">Main Auditorium</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">1000+ Participants</h3>
              <p className="text-muted-foreground">Expected attendance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Events</h2>
          <EventCarousel events={technicalEvents} category="Technical" />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Non-Technical Events</h2>
          <EventCarousel events={nonTechnicalEvents} category="Non-Technical" />
        </div>
      </section>

      {/* Passes Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Event Passes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passes.map((pass, index) => (
              <motion.div
                key={index}
                whileHover={{ translateY: -10 }}
                className="pass-card"
              >
                <h3 className="text-2xl font-bold mb-4">{pass.name}</h3>
                <p className="text-4xl font-bold mb-6">{pass.price}</p>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  {pass.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Get Pass</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <p>symposium@college.edu</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-primary mb-4" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <p>www.college.edu/symposium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Crown className="w-6 h-6 text-primary" />
            <span className="font-bold">SYMPOSIUM 2024</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© 2024 College Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}