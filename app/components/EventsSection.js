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
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full rounded-xl overflow-hidden">  
            <img src={event.src} alt={event.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-3xl font-bold text-white">{event.title}</h3>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-between h-full p-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
              <p className="text-gray-300 text-sm">{event.description}</p>
            </div>
            <a
              href={event.redirectLink}
              className="block w-full bg-white hover:bg-blue-500 text-slate-800 font-semibold py-2 px-4 rounded text-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Register
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
      title: "Escape Logic",
      src: "escape-logic.jpeg",
      description: "Do you have what it takes to escape? Join this thrilling Escape Room-Themed Coding Event, where logic and programming skills unlock your freedom!",
      redirectLink: "/events/escape-logic"
    },
    {
      title: "Paper Presentation",
      src: "paper-presentation.jpeg",
      description: "Showcase your research and ideas in AI, ML, and emerging technologies. Compete in two rounds—submit a compelling abstract and present your insights in front of experts.",
      redirectLink: "/events/paper-presentation"
    },
    {
      title: "Cipher Mind",
      src: "cipher-mind.jpeg",
      description: "Get ready for an exciting tech quiz competition that tests your problem-solving and technical knowledge! A dynamic leaderboard will keep track of scores in real-time, adding to the excitement!",
      redirectLink: "/events/cipher-mind"
    },
    {
      title: "Meme-O-Matic",
      src: "meme-o-matic.jpeg",
      description: "Unleash your creativity with AI! Teams will generate memes and digital artwork based on a given context using AI tools. Showcase your wit, humor, and artistic flair !",
      redirectLink: "/events/meme-o-matic"
    },
    {
      title: "HackNova 2025",
      src: "hacknova-2025.jpeg",
      description: "Get ready for the ultimate coding showdown! Our Hackathon challenges you to innovate, collaborate, and push the boundaries of technology. Whether you're a coding prodigy or a creative thinker, this is your chance to build something extraordinary in a high-energy environment.",
      redirectLink: "/events/hacknova-2025"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "IPL Auction",
      src: "ipl-auction.png",
      description: "Experience the thrill of bidding in our exciting Mock IPL Auction event! Step into the shoes of franchise owners, manage your virtual budget, and build your dream team of cricket superstars.",
      redirectLink: "/events/ipl-auction"
    },
    {
      title: "Soul’O Singing",
      src: "solo-singing.jpeg",
      description: "Unleash your vocal prowess in Solo Pitch, the ultimate singing showdown! Show off your range, stage presence, and musical expression to claim the title of the event!",
      redirectLink: "/events/solo-singing"
    },
    {
      title: "Murder Mystery",
      src: "murder-mystery.jpeg",
      description: "Step into the world of mystery and intrigue in Murder Mystery! Work as a team to crack puzzles, solve riddles, and hunt for clues across campus !",
      redirectLink: "/events/murder-mystery"
    },
    {
      title: "Dance Arena",
      src: "dance-arena.jpeg",
      description: "Take center stage and let your passion for dance shine in the Solo Dance competition! This is your moment to mesmerize the audience with your rhythm and expressions.",
      redirectLink: "/events/dance-arena"
    },
    {

      title: "Corporate Walk",
      src: "corporate-walk.jpeg",
      description: "Step into professionalism with Corporate Walk, where confidence meets charisma! Stride with elegance, showcase your presence, and embody corporate excellence.",
      redirectLink: "/events/corporate-walk"
    },
    {
      title: "Kollywood Trivia",
      src: "kollywood-trivia.jpeg",
      description: "Step into the vibrant world of Kollywwood Trivia, where your passion for films takes center stage! Test your knowledge with challenging questions and clever clues.",
      redirectLink: "/events/kollywood-trivia"
    }
  ];

  return (
    <div id="events" className="w-full py-20 px-4 md:px-8">
      <h2 className="text-5xl font-bold mb-16 text-center">Events</h2>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-neutral-200 mb-8">Technical Events</h3>
        <div className="grid grid-cols-1 gap-6 mb-16">
          <FlipCard event={technicalEvents[4]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalEvents.slice(0, 4).map((event, index) => (
              <FlipCard key={index} event={event} />
            ))}
          </div>
        </div>
        <h3 className="text-4xl font-bold text-neutral-200 mb-8">Non-Technical Events</h3>
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
