'use client';

import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const passes = [
  {
    title: "Silver Pass",
    price: "₹ 500",
    features: ["xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx"],
    color: "from-gray-600 to-gray-900"
  },
  {
    title: "Gold Pass",
    price: "₹ 999",
    features: ["xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx"],
    color: "from-gray-600 to-gray-900"
  },
  {
    title: "Platinum Pass",
    price: "₹ 1499",
    features: ["xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx"],
    color: "from-gray-600 to-gray-900"
  }
];

export default function PassesSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Passes</h2>
        <p className="text-center mb-16">sample text sample text sample text sample textsample text sample text sample text sample text sample text sample text sample text sample text</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.10 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${pass.color}`}
            >
              <h3 className="text-4xl text-center font-bold mb-4">{pass.title}</h3>
              <div className="text-4xl text-center font-bold mb-6">{pass.price}</div>
              <ul className="space-y-3">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8 bg-blue-700 hover:bg-green-600">
                Get Pass
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}