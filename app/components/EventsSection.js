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
              <h3 className="text-3xl font-bold text-white">{event.title}</h3>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-between h-full p-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
              <p className="text-gray-300 text-sm">{event.description}</p>
            </div>
            <a
              href={event.redirectLink}
              className="block w-full bg-white hover:bg-gray-100 text-slate-800 font-semibold py-2 px-4 rounded text-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Register Now
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
      description: "Join this thrilling Escape Room-Themed Coding Event, where logic and programming skills unlock your freedom! 🧩🔓",
      redirectLink: "/events/escape-logic"
    },
    {
      title: "Paper presentation",
      src: "paper-presentation.jpeg",
      description: "Showcase your research and ideas in AI, ML, and emerging technologies. Gain valuable feedback, refine your presentation skills, and stand out in the world of innovation. 📝🎙️",
      redirectLink: "/events/paper-presentation"
    },
    {
      title: "Cipher Mind",
      src: "cipher-mind.jpeg",
      description: "Get ready for an exciting tech quiz competition that tests your problem-solving and technical knowledge! Teams tackle topic-based technical questions. 🧠🎲",
      redirectLink: "/events/cipher-mind"
    },
    {
      title: "Meme-O-Matic",
      src: "meme-o-matic.jpeg",
      description: "Generate memes and digital artwork based on a given context using AI tools like image generators. Showcase your wit, humor, and artistic flair in this exciting fusion of technology and creativity! 🚀🔥",
      redirectLink: "/events/meme-o-matic"
    },
    {
      title: "HackNova 2025",
      src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems.",
      redirectLink: "/events/hacknova-2025"
    }
  ];

  const nonTechnicalEvents = [
    {
      title: "Cricket - Football",
      src: "turf.jpeg",
      description: "Get ready for the ultimate showdown in Cricket Clash & Football Frenzy, where passion meets skill—whether you're smashing sixes or scoring goals, showcase your game and lead your team to victory!",
      redirectLink: "/events/cricket-football"
    },
    {
      title: "Soul’O Singing",
      src: "solo-singing.jpeg",
      description: "Unleash your vocal prowess in Solo Pitch, the ultimate singing showdown! Whether you’re a professional singer or a bathroom singer ,this competition is your chance to captivate the audience and judges alike. Show off your range, stage presence, and musical expression to claim the title of the event!",
      redirectLink: "/events/solo-singing"
    },
    {
      title: "Murder Mystery",
      src: "murder-mystery.jpeg",
      description: "Step into the world of mystery and intrigue in Murder Mystery! Work as a team to crack puzzles, solve riddles, and hunt for clues across four thrilling rounds—from decoding crosswords and crime riddles to unmasking the murderer !",
      redirectLink: "/events/murder-mystery"
    },
    {
      title: "Dance Arena",
      src: "dance-arena.jpeg",
      description: "Take center stage and let your passion for dance shine in the Solo Dance competition! This is your moment to mesmerize the audience with your rhythm, expression, and creativity.",
      redirectLink: "/events/dance-arena"
    },
    {

      title: "Corporate Walk",
      src: "corporate-walk.jpeg",
      description: "Step into professionalism with Corporate Walk, where confidence meets charisma! Stride with elegance, showcase your presence, and embody corporate excellence. Whether you’re a seasoned professional or a budding leader, this is your chance to leave a lasting impression and walk your way to success!",
      redirectLink: "/events/corporate-walk"
    },
    {
      title: "Kollywood Trivia",
      src: "kollywood-trivia.jpeg",
      description: "Step into the vibrant world of Kollywwood Trivia, where your passion for films takes center stage! Test your knowledge with challenging questions and clever clues that celebrate iconic movies, memorable tunes, and behind-the-scenes secrets.",
      redirectLink: "/events/kollywood-trivia"
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
