import React from 'react';
import { Calendar, MapPin, Crown, Users, Clock, Trophy } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Calendar,
      title: "12th April 2025",
      subtitle: "Saturday",
      color: "text-green-500",
      description: "Join us for a full day of innovation and learning"
    },
    {
      icon: MapPin,
      title: "Multiple Venues",
      subtitle: "Across Campus and Turfs",
      color: "text-blue-500",
      description: "Explore different locations with unique experiences"
    },
    {
      icon: Crown,
      title: "Expert Speakers",
      subtitle: "Industry Leaders",
      color: "text-emerald-500",
      description: "Learn from the best in their fields"
    },
    {
      icon: Users,
      title: "1000+ Attendees",
      subtitle: "Global Community",
      color: "text-purple-500",
      description: "Network with professionals worldwide"
    },
    {
      icon: Clock,
      title: "48 Sessions",
      subtitle: "Parallel Tracks",
      color: "text-amber-500",
      description: "Customize your learning journey"
    },
    {
      icon: Trophy,
      title: "Live Workshops",
      subtitle: "Hands-on Experience",
      color: "text-pink-500",
      description: "Practice what you learn in real-time"
    }
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-white">
            About the Event
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className={`w-12 h-12 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{feature.subtitle}</p>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}