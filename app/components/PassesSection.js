"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PassDetails = () => {
  const passes = [
    {
      title: "Solo Pass - Individual Pass",
      price: "₹ 399",
      description:
        "The Solo Pass is perfect for individual participants looking to make the most of our symposium. Gain entry to select technical and non-technical events, savor delicious meals, and compete for fantastic prizes! Experience innovation at its finest!",
      features: [
        "Food provided (veg / non-veg)",
        "Access to 2 Technical Events (except Hacknova 2025)",
        "Access to 2 Non-Tech Event (except Corporate Walk, Turf Showdown Event)",
        "Win exciting Rewards and Cash Prizes",
      ],
      link: "passes/solo-pass/",
    },
    {
      title: "Trinity Pass - 3 Person Pass",
      price: "₹ 999",
      description:
        "The Trinity Pass grants entry for a team of three to experience the best of our symposium. Enjoy delicious meals, participate in top-tier technical and non-technical events, and compete for exclusive rewards and cash prizes. Get ready for an exciting and immersive tech fest!",
      features: [
        "Food provided (veg / non-veg)",
        "Access to 2 Technical Events (except Hacknova 2025)",
        "Access to 1 Non-Tech Event (except Corporate Walk, Turf Showdown Event)",
        "Win exclusive Rewards and Cash Prizes",
      ],
      link: "passes/trinity-pass/",
    },
  ];

  return (
    <section id="passes" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Passes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {passes.map((pass, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-100 p-6 md:p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{pass.title}</h3>
            <p className="text-gray-600 mb-6">{pass.description}</p>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-gray-700">Pass Benefits:</h4>
              <ul className="space-y-3">
                {pass.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-blue-700 shrink-0" />
                    <span className="text-gray-700 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <Link href={pass.link}>
                <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
