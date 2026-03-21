import Image from 'next/image';
import Link from 'next/link';

export default function ModelMayhem() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Model Mayhem: A Quiz Battle</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">🔥 Test. Answer. Win.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        A fast-paced AI quiz battle testing teams on machine learning, deep learning, and real-world concepts through MCQs, rapid-fire, and scenario-based challenges.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/model-mayhem.png" alt="Model Mayhem" width={500} height={300} className="rounded-lg shadow-md w-full max-w-[500px] h-auto" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📊 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>MCQs</li>
          <li>Rapid-fire</li>
          <li>Scenario-based questions</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 2</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹100</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+919550405105" className="text-gray-300 hover:text-blue-500 block text-sm sm:text-base">Julie — +91 9550405105</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block text-sm sm:text-base">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSegu4Dzw-8BEt41kguP01ItIqjpDhHL9xqPEhbSf2iWsJRdVQ/viewform?usp=sharing&ouid=107016111243850562059" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
