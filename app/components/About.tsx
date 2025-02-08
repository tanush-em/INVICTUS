import { Calendar, MapPin, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About The Event</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join us for an extraordinary three-day celebration of technology, innovation, and creativity. 
          Our annual symposium brings together brilliant minds from across the country to share ideas, 
          learn from industry experts, and showcase their talents.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">March 15-17, 2024</h3>
            <p className="text-muted-foreground">Mark your calendar</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">College Campus</h3>
            <p className="text-muted-foreground">Main Auditorium</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">1000+ Participants</h3>
            <p className="text-muted-foreground">Expected attendance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;