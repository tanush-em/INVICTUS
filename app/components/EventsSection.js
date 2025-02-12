"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CardContent = ({ event }) => (
  <div className="bg-neutral-800/50 p-8 md:p-14 rounded-3xl mb-4">
    <div className="space-y-4">
      <p className="text-neutral-400 text-base md:text-xl">
        {event.description}
      </p>
      <div className="space-y-3">
        <div className="flex items-center text-neutral-400">
          <Calendar className="w-5 h-5 mr-3" />
          {event.date}
        </div>
        <div className="flex items-center text-neutral-400">
          <Clock className="w-5 h-5 mr-3" />
          {event.time}
        </div>
        <div className="flex items-center text-neutral-400">
          <MapPin className="w-5 h-5 mr-3" />
          {event.venue}
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
        Register Now
      </Button>
    </div>
  </div>
);

export const Card = ({
  card,
  index,
  selected = false,
  onClick,
}) => {
  return (
    <motion.div
      className={cn(
        "relative h-[450px] w-full shrink-0 cursor-pointer overflow-hidden rounded-xl bg-neutral-800",
        selected ? "w-full" : "w-[300px]"
      )}
      animate={{
        opacity: selected ? 1 : 0.7,
        scale: selected ? 1 : 0.9,
      }}
      whileHover={{ opacity: 1, scale: 0.95 }}
      onClick={onClick}
    >
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
    </motion.div>
  );
};

export const Carousel = ({ items }) => {
  const [selected, setSelected] = useState(0);
  
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-4 px-4 py-8">
      {items.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          selected={selected === index}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );
};

export function EventsCarouselSection() {
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
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-black to-emerald-950/20 py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-5xl font-bold text-neutral-200 mb-12">
        Technical Events
      </h2>
      <Carousel items={technicalEvents} />

      <h2 className="max-w-7xl pl-4 mx-auto text-5xl font-bold text-neutral-200 mt-20 mb-12">
        Non-Technical Events
      </h2>
      <Carousel items={nonTechnicalEvents} />
    </div>
  );
}

export default EventsCarouselSection;