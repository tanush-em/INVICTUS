import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const EventModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-neutral-900 text-white border-neutral-800">
        <DialogTitle className="sr-only">
          {event.title} - Event Details
        </DialogTitle>
        <div className="relative w-full h-[200px] mb-4">
          <Image
            src={event.src}
            alt={event.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm mb-4">
          {event.category}
        </span>
        <p className="text-neutral-300 mb-6">{event.description}</p>
        <div className="space-y-3">
          <div className="flex items-center text-neutral-300">
            <Calendar className="w-5 h-5 mr-3" />
            {event.date}
          </div>
          <div className="flex items-center text-neutral-300">
            <Clock className="w-5 h-5 mr-3" />
            {event.time}
          </div>
          <div className="flex items-center text-neutral-300">
            <MapPin className="w-5 h-5 mr-3" />
            {event.venue}
          </div>
        </div>
        <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
          Register Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

const Card = ({ card, isActive, onClick }) => {
  return (
    <div
      className={`relative flex-shrink-0 w-[300px] h-[450px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform
        ${isActive ? 'scale-100 opacity-100 -translate-y-2' : 'scale-95 opacity-70'}
        hover:opacity-100 hover:scale-[0.98] hover:-translate-y-1`}
      onClick={() => onClick(card)} // Pass the card data to the onClick handler
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
          <p className="text-sm font-medium text-emerald-400">{card.category}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{card.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-gray-300">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const centerFirstCard = () => {
      if (scrollRef.current && window.innerWidth >= 1024) {
        const container = scrollRef.current;
        const containerWidth = container.offsetWidth;
        const cardWidth = 300; // Match this with the card width in the Card component
        const scrollPosition = (cardWidth / 2) + ((containerWidth - cardWidth) / 2) - cardWidth;
        container.scrollLeft = scrollPosition;
      }
    };

    centerFirstCard();
    window.addEventListener('resize', centerFirstCard);
    return () => window.removeEventListener('resize', centerFirstCard);
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320; // Card width + gap

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
            onClick={handleCardClick} // Pass the handleCardClick function
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

      <EventModal
        event={selectedEvent}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

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
      category: "Competition",
      title: "Technical Paper Presentation",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      date: "April 15, 2024",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "Present your research papers and innovative ideas in this prestigious technical paper presentation competition. Showcase your research work and win exciting prizes."
    },
    {
      category: "Hackathon",
      title: "24-Hour Code Sprint",
      src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      date: "April 16, 2024",
      time: "9:00 AM",
      venue: "Computer Lab",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems. Work in teams and compete for the top spot."
    },
    {
      category: "Workshop",
      title: "AI & Machine Learning Workshop",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      date: "April 17, 2024",
      time: "11:00 AM",
      venue: "Seminar Hall",
      description: "Learn about the latest developments in AI and ML through hands-on workshops led by industry experts."
    },
    {
      category: "Competition",
      title: "Technical Paper Presentation",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      date: "April 15, 2024",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "Present your research papers and innovative ideas in this prestigious technical paper presentation competition. Showcase your research work and win exciting prizes."
    },
    {
      category: "Hackathon",
      title: "24-Hour Code Sprint",
      src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      date: "April 16, 2024",
      time: "9:00 AM",
      venue: "Computer Lab",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems. Work in teams and compete for the top spot."
    },
    {
      category: "Workshop",
      title: "AI & Machine Learning Workshop",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      date: "April 17, 2024",
      time: "11:00 AM",
      venue: "Seminar Hall",
      description: "Learn about the latest developments in AI and ML through hands-on workshops led by industry experts."
    }
  ];

  const nonTechnicalEvents = [
    {
      category: "Cultural",
      title: "Battle of Bands",
      src: "https://images.unsplash.com/photo-1561489413-985b06da5bee",
      date: "April 18, 2024",
      time: "5:00 PM",
      venue: "Open Air Theater",
      description: "Showcase your musical talent in this epic battle of bands. Get ready to rock the stage!"
    },
    {
      category: "Sports",
      title: "Inter-College Sports Meet",
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      date: "April 19, 2024",
      time: "8:00 AM",
      venue: "College Ground",
      description: "Compete in various sports events and represent your college in this grand sports meet."
    },
    {
      category: "Art",
      title: "Digital Art Exhibition",
      src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
      date: "April 20, 2024",
      time: "2:00 PM",
      venue: "Art Gallery",
      description: "Display your digital artwork and witness amazing creations from talented artists."
    },
    {
      category: "Cultural",
      title: "Battle of Bands",
      src: "https://images.unsplash.com/photo-1561489413-985b06da5bee",
      date: "April 18, 2024",
      time: "5:00 PM",
      venue: "Open Air Theater",
      description: "Showcase your musical talent in this epic battle of bands. Get ready to rock the stage!"
    },
    {
      category: "Sports",
      title: "Inter-College Sports Meet",
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      date: "April 19, 2024",
      time: "8:00 AM",
      venue: "College Ground",
      description: "Compete in various sports events and represent your college in this grand sports meet."
    },
    {
      category: "Art",
      title: "Digital Art Exhibition",
      src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
      date: "April 20, 2024",
      time: "2:00 PM",
      venue: "Art Gallery",
      description: "Display your digital artwork and witness amazing creations from talented artists."
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
