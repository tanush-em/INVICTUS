import Image from 'next/image';
import Link from 'next/link';

export default function ResearchRoyale() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Research Royale</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">👑🔥 Present. Prove. Impress.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        This round brings your ideas to a formal stage where research meets presentation. Teams will showcase their project work with structured methodology, validated results, and meaningful insights, demonstrating both depth and clarity.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/research-royale.png" alt="Research Royale" width={500} height={300} className="w-full max-w-[500px] h-auto rounded-lg shadow-md" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📄 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Challenge Type: Research / Project Paper Presentation</li>
          <li>Focus: Methodology, Results, and Insights</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Clearly define the problem and proposed solution</li>
          <li>Present the methodology and technical approach</li>
          <li>Showcase results, analysis, and key findings</li>
          <li>Deliver a structured presentation and handle questions effectively</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Problem Definition & Innovation – Clarity and uniqueness of the proposed idea</li>
          <li>Technical Depth & Methodology – Strength of the approach and implementation</li>
          <li>Results, Analysis & Conclusions – Quality and validity of outcomes and insights</li>
          <li>Presentation Skills & Q&A Handling – Effectiveness in delivery and response to questions</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 1–3</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹150</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">Showcase your research and stand out with impact 🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+919840430187" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Monisha R — +91 9840430187</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeadEmvDOCK9JzS8nqmhD0TGASW5YxrWl8xEKJGOAoAxejxLQ/viewform?usp=publish-editor" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
