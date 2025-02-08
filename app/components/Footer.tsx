import { Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Crown className="w-6 h-6 text-primary" />
          <span className="font-bold">INVICTUS 2025</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-muted-foreground">© 2024 Atlas Student Committee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;