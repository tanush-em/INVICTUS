"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const DoublePassPage = () => {
  const pass = {
    title: "Double Pass - 2 People",
    price: "₹ 850",
    description:
      "The Double Pass grants entry for a team of two to experience the best of our symposium. Participate in top-tier technical events and compete for exclusive rewards and cash prizes. Get ready for an exciting and immersive tech fest!",
    features: [
      "Food provided (veg / non-veg)",
      "Access to 4 Technical Events",
      "Win exclusive Rewards and Cash Prizes",
    ],
    whyChoose:
      "This pass is the perfect choice for pairs who want to explore the symposium together. It offers the best value for teams of two, letting you compete, learn, and enjoy the event with your partner.",
    link: "https://forms.gle/ieTfupLpJayFtQnh8",
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white flex flex-col items-center">
      <div className="max-w-3xl bg-gray-800 p-10 rounded-2xl shadow-2xl text-center border border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">{pass.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{pass.description}</p>

        {/* Features List */}
        <div className="text-left space-y-5 mb-8">
          <h2 className="text-2xl font-semibold text-white">Pass Benefits:</h2>
          <ul className="space-y-4">
            {pass.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose This Pass */}
        <div className="text-left space-y-5 mb-8">
          <h2 className="text-2xl font-semibold text-white">Why Choose This Pass?</h2>
          <p className="text-gray-300 text-lg">{pass.whyChoose}</p>
        </div>

        {/* Price & Purchase Button */}
        <div className="mt-10 text-center">
          <p className="text-5xl font-extrabold text-yellow-400 mb-8">{pass.price}</p>
          <Link href={pass.link} target="_blank">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform">
              Purchase Pass Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoublePassPage;
