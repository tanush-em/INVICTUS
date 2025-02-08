import { EventCarousel } from './event-carousel';

const EventsSection = ({ technicalEvents, nonTechnicalEvents }) => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Events</h2>
          <EventCarousel events={technicalEvents} category="Technical" />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Non-Technical Events</h2>
          <EventCarousel events={nonTechnicalEvents} category="Non-Technical" />
        </div>
      </section>
    </>
  );
};

export default EventsSection;