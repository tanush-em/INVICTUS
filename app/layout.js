import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invictus 2025',
  description: 'Join us for an extraordinary academic experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative`}>

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

        <footer className="py-8 px-6 border-t border-gray-800 relative z-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 mb-4 md:mb-0">© 2025 INVICTUS. All rights reserved.</div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <a href="#about" className="text-gray-400 hover:text-emerald-500">About Us</a>
              <a href="#events" className="text-gray-400 hover:text-emerald-500">Events</a>
              <a href="#passes" className="text-gray-400 hover:text-emerald-500">Get Passes</a>
              <a href="#contact" className="text-gray-400 hover:text-emerald-500">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
