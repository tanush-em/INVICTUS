import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const passes = [
  {
    name: "Standard Pass",
    price: "₹499",
    features: ["Access to all talks", "Workshop materials", "Lunch included", "Certificate"]
  },
  {
    name: "Standard Pass",
    price: "₹499",
    features: ["Access to all talks", "Workshop materials", "Lunch included", "Certificate"]
  },
  {
    name: "Standard Pass",
    price: "₹499",
    features: ["Access to all talks", "Workshop materials", "Lunch included", "Certificate"]
  }
];

const PassesSection = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Event Passes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -10 }}
              className="pass-card"
            >
              <h3 className="text-2xl font-bold mb-4">{pass.name}</h3>
              <p className="text-4xl font-bold mb-6">{pass.price}</p>
              <Separator className="mb-6" />
              <ul className="space-y-4">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8">Get Pass</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassesSection;