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
    <>
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-white text-center">
              About the Event
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className={`w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-bold text-lg md:text-xl mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-1">{feature.subtitle}</p>
                  <p className="text-sm md:text-base text-white leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}