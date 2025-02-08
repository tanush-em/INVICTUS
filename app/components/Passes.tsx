import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const passes = [
  {
    name: "Platinum Pass",
    price: "₹999",
    features: ["blah blah", "blah blah", "blah blah", "blah blah", "blah blah", "blah blah"]
  },
  {
    name: "Gold Pass",
    price: "₹499",
    features: ["blah blah", "blah blah", "blah blah", "blah blah", "blah blah", "blah blah"]
  },
  {
    name: "Silver Pass",
    price: "₹299",
    features: ["blah blah", "blah blah", "blah blah", "blah blah", "blah blah", "blah blah"]
  }
];

const PassesSection = () => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 text-center">Our Passes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -12 }}
              className="pass-card"
            >
              <h2 className="text-2xl font-bold mb-4">{pass.name}</h2>
              <p className="text-4xl font-bold mb-6">{pass.price}</p>
              <Separator className="mb-4" />
              <ul className="space-y-4">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Get Pass</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassesSection;