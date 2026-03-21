"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PassDetails = () => {
  const passes = [
    {
      title: "Solo Pass",
      price: "₹ 500",
      description:
        "The Solo Pass is perfect for individual participants looking to make the most of our symposium. Gain entry to select technical events and compete for fantastic prizes! Experience innovation at its finest!",
      features: [
        "Food provided (veg / non-veg)",
        "Access to 3 Events",
        "Win exciting Rewards and Cash Prizes",
      ],
      link: "passes/solo-pass/",
    },
    {
      title: "Double Pass - 2 People",
      price: "₹ 850",
      description:
        "The Double Pass grants entry for a team of two to experience the best of our symposium. Participate in top-tier technical events and compete for exclusive rewards and cash prizes. Get ready for an exciting and immersive tech fest!",
      features: [
        "Food provided (veg / non-veg)",
        "Access to 6 Events",
        "Win exclusive Rewards and Cash Prizes",
      ],
      link: "passes/double-pass/",
    },
  ];

  return (
    <section id="passes" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">Passes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {passes.map((pass, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">{pass.title}</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{pass.description}</p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200">Pass Benefits:</h4>
              <ul className="space-y-2 sm:space-y-3">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-start sm:items-center gap-2">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <Link href={pass.link}>
                <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 min-h-[44px]">
                  Purchase Pass
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PassDetails;
