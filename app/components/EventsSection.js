'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from 'react';

const events = [
  {
    title: "Technical Paper Presentation",
    description: "Present your research papers and innovative ideas",
    date: "April 15, 2024",
    time: "10:00 AM",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
  },
  {
    title: "Hackathon",
    description: "24-hour coding challenge to solve real-world problems",
    date: "April 16, 2024",
    time: "9:00 AM",
    venue: "Computer Lab",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop"
  },
  {
    title: "Workshop on AI",
    description: "Learn about the latest developments in Artificial Intelligence",
    date: "April 17, 2024",
    time: "11:00 AM",
    venue: "Seminar Hall",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop"
  }
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-black to-emerald-950/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border-0">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-black/95 border-gray-800">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={selectedEvent?.image}
              alt={selectedEvent?.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-gray-300">{selectedEvent?.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {selectedEvent?.date} at {selectedEvent?.time}
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedEvent?.venue}
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
              Register for Event
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}