import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invictus 2026',
  description: 'Join us for an extraordinary academic experience',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${inter.className} relative overflow-x-hidden min-w-0`}>

        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-0 min-h-screen">
          {children}
        </div>

        <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800 relative z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
            <div className="text-gray-400 text-sm sm:text-base order-2 md:order-1">© 2026 INVICTUS. All rights reserved.</div>
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-6 order-1 md:order-2">
              <a href="#about" className="text-gray-400 hover:text-emerald-500 py-3 px-3 text-sm sm:text-base">About Us</a>
              <a href="#events" className="text-gray-400 hover:text-emerald-500 py-3 px-3 text-sm sm:text-base">Events</a>
              <a href="#passes" className="text-gray-400 hover:text-emerald-500 py-3 px-3 text-sm sm:text-base">Get Passes</a>
              <a href="#contact" className="text-gray-400 hover:text-emerald-500 py-3 px-3 text-sm sm:text-base">Contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
