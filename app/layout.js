import './globals.css';
import { Inter } from 'next/font/google';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invictus 2025',
  description: 'Join us for an extraordinary academic experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative overflow-visible`}>
        <ShootingStars numStars={4} className="absolute top-0 left-0 w-full h-full z-0" />
        <StarsBackground className="absolute top-0 left-0 w-full h-full z-0" />
        {children}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 mb-4 md:mb-0">© 2024 INVICTUS. All rights reserved.</div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a href="#" className="text-gray-400 hover:text-emerald-500">About Us</a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">Events</a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">Get Passes</a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
