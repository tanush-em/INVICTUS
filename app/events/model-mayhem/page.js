import Image from 'next/image';
import Link from 'next/link';

export default function ModelMayhem() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Model Mayhem: Predictive Model Building</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">🔥 Build. Predict. Excel.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Step into a fast-paced challenge focused purely on data and decision-making. This round tests your ability to analyze datasets, extract meaningful insights, and develop predictive models that solve real-world problems effectively.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/model-mayhem.png" alt="Model Mayhem" width={500} height={300} className="rounded-lg shadow-md w-full max-w-[500px] h-auto" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📊 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Dataset Provided: Teams will be given a real-world dataset</li>
          <li>Challenge Type: Predictive Modeling (Classification / Regression)</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Understand and analyze the given dataset</li>
          <li>Build a predictive model based on the problem statement</li>
          <li>Optimize model performance using suitable techniques</li>
          <li>Provide clear reasoning for your approach and model choice</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Feature Selection & Data Understanding – Effectiveness in exploring data and identifying key features</li>
          <li>Model Choice & Performance Metrics – Selection of appropriate algorithms and evaluation methods</li>
          <li>Innovation in Approach – Creativity and uniqueness in solving the problem</li>
          <li>Interpretability & Justification – Ability to clearly explain the model and decisions made</li>
          <li>Presentation / Explanation Round – Explain approach in 2–5 minutes and answer judge questions</li>
          <li>Teams must complete the task within a fixed duration</li>
          <li>No plagiarism or copying from other teams</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">Ready to prove your ML skills? 🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2 text-gray-300"><strong>To be announced</strong></p>
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
