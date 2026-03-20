import Image from 'next/image';
import Link from 'next/link';

export default function ResearchRoyale() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Research Royale</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">👑🔥 Present. Prove. Impress.</p>

      <p className="mt-4 text-gray-300 text-lg">
        This round brings your ideas to a formal stage where research meets presentation. Teams will showcase their project work with structured methodology, validated results, and meaningful insights, demonstrating both depth and clarity.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/research-royale.png" alt="Research Royale" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📄 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Research / Project Paper Presentation</li>
          <li>Focus: Methodology, Results, and Insights</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Clearly define the problem and proposed solution</li>
          <li>Present the methodology and technical approach</li>
          <li>Showcase results, analysis, and key findings</li>
          <li>Deliver a structured presentation and handle questions effectively</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Problem Definition & Innovation – Clarity and uniqueness of the proposed idea</li>
          <li>Technical Depth & Methodology – Strength of the approach and implementation</li>
          <li>Results, Analysis & Conclusions – Quality and validity of outcomes and insights</li>
          <li>Presentation Skills & Q&A Handling – Effectiveness in delivery and response to questions</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Showcase your research and stand out with impact 🚀</p>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2 text-gray-300"><strong>To be announced</strong></p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScl5ebazqBwfFoMTCGrTYrOiEjUwl_XmNanmPmEXDu5NtSqlg/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
