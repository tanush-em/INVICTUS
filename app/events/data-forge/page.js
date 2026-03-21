import Image from 'next/image';
import Link from 'next/link';

export default function DataForge() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Data Forge: Dataset Cleansing & Processing</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">🧹🔥 Clean. Transform. Prepare.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        This round focuses on the backbone of every successful data solution—data preprocessing. Teams will work with raw, unstructured datasets and transform them into clean, usable formats ready for analysis and modeling.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/data-forge.png" alt="Data Forge" width={500} height={300} className="rounded-lg shadow-md w-full max-w-[500px] h-auto" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🧹 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Dataset Provided: Raw and messy dataset</li>
          <li>Challenge Type: Data Cleaning & Preprocessing</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Identify inconsistencies, missing values, and outliers</li>
          <li>Clean and preprocess the dataset effectively</li>
          <li>Perform feature engineering where necessary</li>
          <li>Prepare the dataset for further analysis or modeling</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Handling Missing/Outlier Data – Effectiveness in managing incomplete or abnormal data</li>
          <li>Feature Engineering Quality – Relevance and usefulness of created features</li>
          <li>Efficiency & Correctness – Accuracy and optimization of preprocessing steps</li>
          <li>Data Readiness for Modeling – How well the dataset is prepared for downstream tasks</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 2</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹100</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">Refine the data, refine the outcome 🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+916380826552" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Pavithra — +91 6380826552</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfjGxfMI3lJA-q-5fm8NQc7xGO3QoYXdbG6gf8I5SGcRyJvig/viewform?usp=dialog" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
