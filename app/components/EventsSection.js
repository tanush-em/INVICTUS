import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Card = ({ card, isActive, onClick }) => {
  return (
    <div
      className={`relative flex-shrink-0 w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform
        ${isActive ? 'scale-100 opacity-100 -translate-y-2' : 'scale-95 opacity-70'}
        hover:opacity-100 hover:scale-[0.98] hover:-translate-y-1`}
      onClick={() => onClick(card)}
    >
      <div className="relative w-full h-full">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
          <p className="line-clamp-2 text-sm text-gray-300">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const centerFirstCard = () => {
      if (scrollRef.current && window.innerWidth >= 1024) {
        const container = scrollRef.current;
        const containerWidth = container.offsetWidth;
        const cardWidth = 300;
        const scrollPosition = (cardWidth / 2) + ((containerWidth - cardWidth) / 2) - cardWidth;
        container.scrollLeft = scrollPosition;
      }
    };

    centerFirstCard();
    window.addEventListener('resize', centerFirstCard);
    return () => window.removeEventListener('resize', centerFirstCard);
  }, []);

  const handleCardClick = (event) => {
    if (event.redirectLink) {
      // Using window.location for client-side navigation
      window.location.href = event.redirectLink;
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (container) {
      const newScroll = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-4 md:px-0 py-8 scroll-smooth hide-scrollbar relative"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="hidden lg:block flex-shrink-0 w-[calc(65vw-150px)]" />

        {items.map((card, index) => (
          <Card
            key={index}
            card={card}
            isActive={activeIndex === index}
            onClick={handleCardClick}
          />
        ))}

        <div className="hidden lg:block flex-shrink-0 w-[calc(65vw-150px)]" />
      </div>

      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-600 text-black p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-600 text-black p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export const EventsCarouselSection = () => {
  const technicalEvents = [
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
      title: "Battle of Bands",
      src: "https://images.unsplash.com/photo-1561489413-985b06da5bee",
      description: "Showcase your musical talent in this epic battle of bands.",
      redirectLink: "/events/battle-of-bands"
    },
    {
      title: "Inter-College Sports Meet",
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description: "Compete in various sports events and represent your college.",
      redirectLink: "/events/sports-meet"
    },
    {
      title: "Digital Art Exhibition",
      src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
      description: "Display your digital artwork and witness amazing creations.",
      redirectLink: "/events/digital-art"
    }
  ];

  return (
    <div className="w-full py-20">
      <h2 className="text-5xl font-bold mb-8 text-center">Events</h2>
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl font-bold text-neutral-200 mb-2">
        Technical Events
      </h2>
      <Carousel items={technicalEvents} />

      <h2 className="max-w-7xl pl-4 mx-auto text-4xl font-bold text-neutral-200 mt-20 mb-2">
        Non-Technical Events
      </h2>
      <Carousel items={nonTechnicalEvents} />
    </div>
  );
};

export default EventsCarouselSection;