"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const PassDetails = () => {
  const passes = [
    {
      title: "Trinity Pass - 3 Person Pass",
      price: "₹ 1000",
      description: "The Trinity Pass grants entry for a team of three to experience the best of our symposium. Enjoy delicious meals, participate in top-tier technical and non-technical events, and compete for exclusive rewards and cash prizes. Get ready for an exciting and immersive tech fest!",
      features: [
        "Food provided (veg / non-veg)",
        "Access to 2 Technical Events (except Hacknova 2025)",
        "Access to 1 non Technical Event (except Corporate Walk, Turf Showdown Event)",
        "Win exclusive Rewards and Cash Prizes",
      ]
    },
  ];

  return (
    <section id="passes" className="py-20 px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Passes</h2>

        <div className="">
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
                  <div key={i} className="flex items-center gap-2 flex-wrap text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-700" />
                    <span className="flex-1">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7gOZpz36GAeD2V9fjAq1SeGmz_o2jzJntgxbcABDlVJNaBg/viewform" target="_blank">
                  <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Purchase Pass
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassDetails;