import React from 'react';
import { Calendar, MapPin, UtensilsCrossed, Users, Clock, Trophy } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Calendar,
      title: "12th April 2025",
      subtitle: "Saturday",
      color: "text-yellow-500",
      description: "Join us for a full day of innovation and enjoyment."
    },
    {
      icon: MapPin,
      title: "SRM Easwari Engineering College",
      subtitle: "Within the Campus and Turfs",
      color: "text-yellow-500",
      description: "Events to be held within campus, Sports events in the turf."
    },
    {
      icon: Clock,
      title: "8:30 AM",
      subtitle: "Inauguration and Proceedings Start",
      color: "text-yellow-500",
      description: "Be there on time to not miss out on anything"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Included",
      subtitle: "Lunch provided for Passes",
      color: "text-yellow-500",
      description: "Enjoy a delicious meal during the event"
    },
    {
      icon: Users,
      title: "500+ Attendees",
      subtitle: "From Across the City",
      color: "text-yellow-500",
      description: "Network with peers and professionals"
    },
    {
      icon: Trophy,
      title: "Prizes and Swags",  
      subtitle: "Competitions and Giveaways",
      color: "text-yellow-500",
      description: "Grab amazing gifts and prizes"
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
                <feature.icon className={`w-12 h-12 mb-2 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm  text-gray-300 mb-1">{feature.subtitle}</p>
                <p className="text-sm text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}