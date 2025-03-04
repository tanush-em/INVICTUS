import React, { useState } from 'react';

const FlipCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[300px] w-full relative [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full rounded-xl overflow-hidden">
            <img
              src={event.src}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-between h-full p-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
              <p className="text-gray-300 text-sm">{event.description}</p>
            </div>
            <a
              href={event.redirectLink}
              className="block w-full bg-white hover:bg-gray-100 text-slate-800 font-semibold py-2 px-4 rounded text-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Book Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const technicalEvents = [
    {
      title: "Escape Room as a coding event",
      src: "escape-room.jpeg",
      description: "Present your research papers and innovative ideas in this prestigious technical paper presentation competition.",
      redirectLink: "/events/sample"
    },
    {
      title: "Paper presentation",
      src: "paper-presentation.jpeg",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems.",
      redirectLink: "/events/code-sprint"
    },
    {
      title: "AI & Machine Learning Workshop",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "Learn about the latest developments in AI and ML through hands-on workshops.",
      redirectLink: "/events/ai-ml-workshop"
    },
    {
      title: "Technical Paper Presentation",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      description: "Present your research papers and innovative ideas in this prestigious technical paper presentation competition.",
      redirectLink: "/events/technical-paper-presentation"
    },
    {
      title: "24-Hour Code Sprint",
      src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems.",
      redirectLink: "/events/code-sprint"
    },
    {
      title: "AI & Machine Learning Workshop",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      description: "Learn about the latest developments in AI and ML through hands-on workshops.",
      redirectLink: "/events/ai-ml-workshop"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Cricket - Football",
      src: "turf.jpeg",
      description: "Display your digital artwork and witness amazing creations.",
      redirectLink: "/events/digital-art"
    },
    {
      title: "Solo Singing",
      src: "solo-singing.jpeg",
      description: "Showcase your musical talent in this epic battle of bands.",
      redirectLink: "/events/battle-of-bands"
    },
    {
      title: "Murder Mystery",
      src: "murder-mystery.jpeg",
      description: "Compete in various sports events and represent your college.",
      redirectLink: "/events/sports-meet"
    },
    {
      title: "Solo Dance",
      src: "solo-dance.jpeg",
      description: "Display your digital artwork and witness amazing creations.",
      redirectLink: "/events/digital-art"
    },
    {

      title: "Corporate Walk",
      src: "ramp-walk.jpeg",
      description: "Showcase your musical talent in this epic battle of bands.",
      redirectLink: "/events/battle-of-bands"
    },
    {
      title: "Cine Verse",
      src: "cineverse.jpeg",
      description: "Compete in various sports events and represent your college.",
      redirectLink: "/events/sports-meet"
    }
  ];

  return (
    <div className="w-full py-20 px-4 md:px-8">
      <h2 className="text-5xl font-bold mb-16 text-center">Events</h2>

      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-neutral-200 mb-8">
          Technical Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {technicalEvents.map((event, index) => (
            <FlipCard key={index} event={event} />
          ))}
        </div>

        <h3 className="text-4xl font-bold text-neutral-200 mb-8">
          Non-Technical Events
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nonTechnicalEvents.map((event, index) => (
            <FlipCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
