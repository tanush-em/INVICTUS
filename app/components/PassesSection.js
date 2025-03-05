'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PassDetails = () => {
  const passes = [
    {
      title: "All Pass",
      price: "₹ 350",
      description: "xxxxxxxxxxxxxx",
      features: [
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
      ],
    },
    {
      title: "Single Pass",
      price: "may vary acc to event",
      description: "xxxxxxxxxxxxxx",
      features: [
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
        "xxxxxxxxxxxxxxx",
      ],
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Passes</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-400 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-4xl font-bold mb-4 text-gray-800">{pass.title}</h3>
              <p className="text-gray-600 mb-6">{pass.description}</p>
              <div className="text-4xl font-bold text-blue-700 mb-6">{pass.price}</div>
              
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-700 mb-4">Pass Benefits:</h4>
                {pass.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-3 text-blue-700" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                Purchase Pass
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassDetails;
