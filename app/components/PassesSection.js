'use client';

import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const passes = [
  {
    title: "Standard Pass",
    price: "$49",
    features: ["Access to all talks", "Workshop materials", "Certificate"],
    color: "from-emerald-600/20 to-blue-600/20"
  },
  {
    title: "Premium Pass",
    price: "$99",
    features: ["Standard Pass benefits", "VIP seating", "Lunch included", "1-on-1 mentoring"],
    color: "from-emerald-500/30 to-blue-500/30"
  },
  {
    title: "VIP Pass",
    price: "$149",
    features: ["Premium Pass benefits", "Exclusive networking dinner", "Recorded sessions access", "Special merchandise"],
    color: "from-emerald-400/40 to-blue-400/40"
  }
];

export default function PassesSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Passes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-xl bg-gradient-to-br ${pass.color}`}
            >
              <h3 className="text-2xl font-bold mb-4">{pass.title}</h3>
              <div className="text-4xl font-bold mb-6">{pass.price}</div>
              <ul className="space-y-3">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                Get Pass
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}