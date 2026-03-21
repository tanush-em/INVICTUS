import Image from 'next/image';
import Link from 'next/link';

export default function DataForge() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center">Data Forge: Dataset Cleansing & Processing</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">🧹🔥 Clean. Transform. Prepare.</p>

      <p className="mt-4 text-gray-300 text-lg">
        This round focuses on the backbone of every successful data solution—data preprocessing. Teams will work with raw, unstructured datasets and transform them into clean, usable formats ready for analysis and modeling.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/data-forge.png" alt="Data Forge" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">🧹 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Dataset Provided: Raw and messy dataset</li>
          <li>Challenge Type: Data Cleaning & Preprocessing</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Identify inconsistencies, missing values, and outliers</li>
          <li>Clean and preprocess the dataset effectively</li>
          <li>Perform feature engineering where necessary</li>
          <li>Prepare the dataset for further analysis or modeling</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Handling Missing/Outlier Data – Effectiveness in managing incomplete or abnormal data</li>
          <li>Feature Engineering Quality – Relevance and usefulness of created features</li>
          <li>Efficiency & Correctness – Accuracy and optimization of preprocessing steps</li>
          <li>Data Readiness for Modeling – How well the dataset is prepared for downstream tasks</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Refine the data, refine the outcome 🚀</p>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2 text-gray-300"><strong>To be announced</strong></p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfjGxfMI3lJA-q-5fm8NQc7xGO3QoYXdbG6gf8I5SGcRyJvig/viewform?usp=dialog" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
