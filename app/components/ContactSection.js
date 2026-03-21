import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-x-hidden">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">

          <div className="space-y-4">

            <div className="p-4 sm:p-5 rounded-xl bg-black/30 hover:bg-black/40 transition shadow-lg border border-gray-600">
              <div className="flex items-center mb-2">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500 flex-shrink-0" />
                <h3 className="ml-3 text-base sm:text-lg font-semibold">Email Us</h3>
              </div>
              <a
                href="mailto:aimlatlas.visionary@gmail.com"
                className="text-gray-300 hover:text-emerald-300 transition block break-words text-sm sm:text-base"
              >
                aimlatlas.visionary@gmail.com
              </a>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-black/30 hover:bg-black/40 transition shadow-lg border border-gray-600">
              <div className="flex items-start sm:items-center mb-2">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 flex-shrink-0 mt-1 sm:mt-0" />
                <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-semibold">Call Us</h3>
              </div>
              <div className="space-y-2 ml-0 sm:ml-12 pl-11 sm:pl-0">
                <a href="tel:+918637650188"
                  className="text-gray-300 text-base sm:text-lg hover:text-blue-500 transition block py-1">
                  KAVITHA A — +91 8637650188
                </a>
                <a href="tel:+919361493926"
                  className="text-gray-300 text-base sm:text-lg hover:text-blue-500 transition block py-1">
                  SANGAMITHRA — +91 9361493926
                </a>
                <a href="tel:+917569821736"
                  className="text-gray-300 text-base sm:text-lg hover:text-blue-500 transition block py-1">
                  HARINISREE — +91 7569821736
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-black/30 border border-gray-600 shadow-lg">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">Event Location</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    SRM Easwari Engineering College<br />
                    162, Bharathi Salai,<br />
                    Ramapuram, Chennai,<br />
                    Tamil Nadu - 600089.
                  </p>
                </div>
              </div>
            </div>


          </div>

          <div className="space-y-4">

            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <a href="https://maps.app.goo.gl/6ZARi62AQNcT76UZ6" target="_blank" rel="noopener noreferrer">
                <img
                  src="clg.png"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </a>

            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-10">
              <Link href="https://www.instagram.com/invictus.eec/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2">
                <Image src="/insta.png" alt="Instagram" width={72} height={72} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </Link>

              <Link href="https://www.linkedin.com/in/atlas-aiml-eec" target="_blank" rel="noopener noreferrer" className="p-2 -m-2">
                <Image src="/linkedin.png" alt="LinkedIn" width={72} height={72} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </Link>

              <Link href="https://adeptus.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2">
                <Image src="/adeptus.png" alt="Adeptus" width={72} height={72} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;