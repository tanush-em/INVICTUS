import { Mail, Phone, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 px-8 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <p>symposium@college.edu</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-12 h-12 text-primary mb-4" />
            <p>+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 text-primary mb-4" />
            <p>www.college.edu/symposium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;