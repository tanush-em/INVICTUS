'use client';

import { motion } from 'framer-motion';
import { Crown, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const PassDetails = () => {
  const pass = {
    title: "Silver Pass",
    price: "₹ 500",
    description: "Your gateway to an unforgettable experience with exclusive benefits and access.",
    features: [
      "Unlimited Event Entry",
      "free food and drinks",
      "free food and drinks",
      "free food and drinks",
      "free food and drinks",
      "free food and drinks",
    ],
    imageUrl: "https://imgs.search.brave.com/uyoVVppBZdu8OQrj5P8iQHBZEeRL2yexxufxWQYMO0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/Mjc1NDYzL3Bob3Rv/L2hvbWUtZGVjb3It/Zmxvb3Itc2FtcGxl/cy1iLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PQzdIRUxa/VjRRczdKZkVpSXZI/SVgtYllQOGhNMHpJ/Nm1XQTB3NVlDcnpN/PQ" 
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Passes</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pass Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <Image 
              src={pass.imageUrl} 
              alt={`${pass.title} Pass`} 
              width={600} 
              height={400} 
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Pass Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{pass.title}</h3>
            
            <p className="text-gray-600 mb-6">{pass.description}</p>
            
            <div className="text-4xl font-bold text-blue-700 mb-6">{pass.price}</div>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Pass Benefits:</h4>
              {pass.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
              Purchase Pass
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PassDetails;