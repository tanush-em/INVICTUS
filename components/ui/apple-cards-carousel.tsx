"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export function EventsCarouselSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const EventDetails = ({ event }) => (
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

  const technicalEvents = [
    {
      category: "Competition",
      title: "Technical Paper Presentation",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      date: "April 15, 2024",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "Present your research papers and innovative ideas in this prestigious technical paper presentation competition. Showcase your research work and win exciting prizes.",
      content: ({ card }) => <EventDetails event={card} />
    },
    {
      category: "Hackathon",
      title: "24-Hour Code Sprint",
      src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
      date: "April 16, 2024",
      time: "9:00 AM",
      venue: "Computer Lab",
      description: "Join our intensive 24-hour coding challenge to solve real-world problems. Work in teams and compete for the top spot.",
      content: ({ card }) => <EventDetails event={card} />
    },
    {
      category: "Workshop",
      title: "AI & Machine Learning Workshop",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      date: "April 17, 2024",
      time: "11:00 AM",
      venue: "Seminar Hall",
      description: "Learn about the latest developments in AI and ML through hands-on workshops led by industry experts.",
      content: ({ card }) => <EventDetails event={card} />
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
      description: "Showcase your musical talent in this epic battle of bands. Get ready to rock the stage!",
      content: ({ card }) => <EventDetails event={card} />
    },
    {
      category: "Sports",
      title: "Inter-College Sports Meet",
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      date: "April 19, 2024",
      time: "8:00 AM",
      venue: "College Ground",
      description: "Compete in various sports events and represent your college in this grand sports meet.",
      content: ({ card }) => <EventDetails event={card} />
    },
    {
      category: "Art",
      title: "Digital Art Exhibition",
      src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912",
      date: "April 20, 2024",
      time: "2:00 PM",
      venue: "Art Gallery",
      description: "Display your digital artwork and witness amazing creations from talented artists.",
      content: ({ card }) => <EventDetails event={card} />
    }
  ];

  const technicalCards = technicalEvents.map((event, index) => (
    <Card key={event.title} card={event} index={index} />
  ));

  const nonTechnicalCards = nonTechnicalEvents.map((event, index) => (
    <Card key={event.title} card={event} index={index} />
  ));

  return (
    <div className="w-full bg-gradient-to-b from-black to-emerald-950/20 py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-5xl font-bold text-neutral-200 mb-12">
        Technical Events
      </h2>
      <Carousel items={technicalCards} />

      <h2 className="max-w-7xl pl-4 mx-auto text-5xl font-bold text-neutral-200 mt-20 mb-12">
        Non-Technical Events
      </h2>
      <Carousel items={nonTechnicalCards} />
    </div>
  );
}

export default EventsCarouselSection;