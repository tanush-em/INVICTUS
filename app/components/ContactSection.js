import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-8">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          <div className="space-y-8">

            <div className="p-4 rounded-xl bg-black/30 hover:bg-black/40 transition shadow-lg border border-gray-600">
              <div className="flex items-center mb-0">
                <Mail className="w-10 h-10 text-emerald-500" />
                <h3 className="ml-4 text-xl font-semibold">Email Us</h3>
              </div>
              <a href="mailto:aimlatlas.visionary@gmail.com"
                className="text-gray-300 text-lg hover:text-emerald-300 transition block ml-12">
                aimlatlas.visionary@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-xl bg-black/30 hover:bg-black/40 transition shadow-lg border border-gray-600">
              <div className="flex items-center mb-0">
                <Phone className="w-10 h-10 text-blue-500" />
                <h3 className="ml-4 text-xl font-semibold">Call Us</h3>
              </div>
              <div className="space-y-1 ml-12">
                <a href="tel:+1234567890"
                  className="text-gray-300 text-lg hover:text-blue-500 transition block">
                  +91 98765 45321
                </a>
                <a href="tel:+1234567890"
                  className="text-gray-300 text-lg hover:text-blue-500 transition block">
                  +91 98765 45321
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "75px", margin: "50px",paddingLeft: "75px" }}>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={60}
                  height={60}
                />
              </Link>

              <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedin.png"
                  alt="Instagram"
                  width={60}
                  height={60}
                />
              </Link>

              <Link href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/whatsapp.png"
                  alt="Instagram"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>

          <div className="space-y-4">

            <div className="h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <a href="https://maps.app.goo.gl/6ZARi62AQNcT76UZ6" target="_blank" rel="noopener noreferrer">
                <img
                  src="clg.png"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </a>

            </div>

            <div className="p-6 rounded-xl bg-black/30 border border-gray-600 shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-10 h-10 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-1">Event Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    SRM Easwari Engineering College<br />
                    162, Bharathi Salai,<br />
                    Ramapuram, Chennai,<br />
                    Tamil Nadu - 600089.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;