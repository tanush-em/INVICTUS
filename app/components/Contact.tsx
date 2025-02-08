import { Mail, Phone, Globe } from 'lucide-react';
import { Calendar, MapPin, Users } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 px-8 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join us for an extraordinary three-day celebration of technology, innovation, and creativity.
          Our annual symposium brings together brilliant minds from across the city to share ideas,
          learn from industry experts, and showcase their talents.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p>SRM EEC, Ramapuram</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <p>kvnkdsnv@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-12 h-12 text-primary mb-4" />
            <p>+91 xxxxx xxxxx</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 text-primary mb-4" />
            <p>invictus.netlify.in</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;