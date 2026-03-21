"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const TrinityPassPage = () => {
  const pass = {
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
    whyChoose:
      "This pass is the perfect choice for small teams who want to explore the symposium together. It offers the best value for groups, letting you compete, learn, and enjoy the event with your team.",
    link: "https://forms.gle/ieTfupLpJayFtQnh8",
  };

  return (
    <section className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900 text-white flex flex-col items-center overflow-x-hidden">
      <div className="max-w-3xl w-full bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl text-center border border-gray-700">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white">{pass.title}</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">{pass.description}</p>

        {/* Features List */}
        <div className="text-left space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Pass Benefits:</h2>
          <ul className="space-y-3 sm:space-y-4">
            {pass.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose This Pass */}
        <div className="text-left space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Why Choose This Pass?</h2>
          <p className="text-gray-300 text-sm sm:text-lg">{pass.whyChoose}</p>
        </div>

        {/* Price & Purchase Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 sm:mb-8">{pass.price}</p>
          <Link href={pass.link} target="_blank" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-transform min-h-[44px]">
              Purchase Pass Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrinityPassPage;
