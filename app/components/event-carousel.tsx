"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  title: string;
  description: string;
  date: string;
  venue: string;
  image: string;
  prize?: string;
}

export const EventCarousel = ({
  events,
  category,
}: {
  events: Event[];
  category: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {events.map((event, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative h-[450px] w-[350px] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 h-full w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 grid place-content-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div>
                      <p className="text-sm font-medium uppercase text-primary mb-2">
                        {category}
                      </p>
                      <p className="text-2xl font-bold text-white">{event.title}</p>
                      <p className="text-sm text-white/80 mt-2">
                        {event.description}
                      </p>
                      {event.prize && (
                        <p className="text-lg font-semibold text-primary mt-2">
                          Prize: {event.prize}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{event.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  {event.prize && (
                    <p className="text-lg font-semibold text-primary mb-4">
                      Prize Pool: {event.prize}
                    </p>
                  )}
                  <Button className="w-full">Register Now</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
};