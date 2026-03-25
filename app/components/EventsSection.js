import React, { useState } from 'react';

const FlipCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[280px] sm:h-[300px] w-full min-w-0 relative [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full rounded-xl overflow-hidden">  
            <img
              src={event.src}
              alt={event.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/334155/94a3b8?text=${encodeURIComponent(event.title.split(':')[0])}`;
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white line-clamp-2">{event.title}</h3>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col justify-between h-full p-4 sm:p-6">
            <div className="min-h-0 overflow-y-auto flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4 line-clamp-2">{event.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{event.description}</p>
            </div>
            <a
              href={event.redirectLink}
              className="block w-full bg-white hover:bg-blue-500 text-slate-800 font-semibold py-3 px-4 rounded text-center transition-colors text-sm sm:text-base shrink-0"
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

const eventCategories = [
  {
    name: "Technical & Coding",
    events: [
        { title: "HackNova 2.0", src: "/hacknova.png", description: "8-hour hackathon (teams of 2–4). Tackle real-world challenges with cutting-edge tech across Healthcare, AI, Cybersecurity, FinTech & Open Innovation.", redirectLink: "/events/hacknova" },
        { title: "Model Mayhem: A Quiz Battle", src: "/model-mayhem.png", description: "A fast-paced AI quiz battle testing teams on ML, deep learning, and real-world concepts through MCQs, rapid-fire, and scenario-based challenges.", redirectLink: "/events/model-mayhem" },
        { title: "Data Forge: Dataset Cleansing", src: "/data-forge.png", description: "Teams clean, preprocess, and feature-engineer a raw, messy dataset to make it ready for analysis.", redirectLink: "/events/data-forge" },
        { title: "Debug Dash: Code Under Pressure", src: "/debug-dash.png", description: "A buzzer-based challenge to correctly fix buggy code snippets (C/Java/Python) under a time limit.", redirectLink: "/events/debug-dash" },
        { title: "Prompt Wars: Art of Engineering AI", src: "/prompt-wars.png", description: "Teams must craft the most efficient AI prompt to generate an output that matches a given picture.", redirectLink: "/events/prompt-wars" }
    ]
  },
  {
    name: "Presentation & Strategy",
    events: [
        { title: "Ideathon: From Thought to Pitch", src: "/ideathon.png", description: "Rapid ideation where teams propose and pitch a tech-driven solution to a specific problem statement.", redirectLink: "/events/ideathon" },
        { title: "Research Royale", src: "/research-royale.png", description: "Formal presentation of a research or project paper including methodology, results, and insights.", redirectLink: "/events/research-royale" },
        { title: "AI Courtroom", src: "/ai-courtroom.png", description: "A structured technical debate where teams argue \"For\" or \"Against\" an emerging technology topic.", redirectLink: "/events/ai-courtroom" },
        { title: "Startup Postmortem: Why Did It Die?", src: "/startup-postmartum.png", description: "Teams analyze a fictional failed startup and present the technical and strategic reasons for its failure.", redirectLink: "/events/startup-postmortem" }
    ]
  },
  {
    name: "Fun & Creative",
    events: [
        { title: "Break it Down", src: "/break-it-down.png", description: "Explain a complex technical concept simply and humorously to a non-technical \"grandmother\" persona.", redirectLink: "/events/break-it-down" },
        { title: "Pitch the Pointless", src: "/pitch-the-pointless.png", description: "Present the most absurd, impractical tech ideas with a completely serious pitch. Deliver nonsense with confidence and convincing flair!", redirectLink: "/events/reverse-ideathon" },
        { title: "AI Dumb Charades: Act the Algorithm", src: "/ai-dumb-charades.png", description: "Teams communicate AI and tech concepts without words—only actions. Act, guess, and win!", redirectLink: "/events/ai-dumb-charades" }
    ]
  }
];

const EventsSection = () => {
  return (
    <div id="events" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center">Events</h2>
      <p className='text-gray-400 mb-6 text-center font-semibold text-sm sm:text-base px-2'>ON SPOT Registration available for selective events.</p>
      <div className="max-w-7xl mx-auto">
        {eventCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={categoryIndex < eventCategories.length - 1 ? "mb-12 sm:mb-16" : ""}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-200 mb-6 sm:mb-8">{category.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {category.events.map((event, index) => (
                <FlipCard key={index} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
