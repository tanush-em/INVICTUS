import Image from 'next/image';
import Link from 'next/link';

export default function ReverseIdeathon() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Reverse Ideathon: Problem First, Solution Later</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">🎤🔥 Think Backwards. Solve For a Given Problem. Deliver With Precision.</p>

      <p className="mt-4 text-gray-300 text-lg">
        This round tests structured thinking under constraints. Teams are given a fixed problem statement and must build a feasible, well-reasoned solution within limited time. No creativity-for-the-sake-of-it. The constraint is the filter.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/reverse-ideathon.png" alt="Reverse Ideathon" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">🔄 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Reverse Ideathon (Problem → Solution)</li>
          <li>Mode: Team-based presentation</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>You will be assigned a real-world problem statement</li>
          <li>Analyze constraints, stakeholders, and failure points</li>
          <li>Build a practical, implementable solution</li>
          <li>Justify with clear logic, architecture, and trade-offs</li>
          <li>Present it as a structured startup or product pitch</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">💡 Example Problem Statements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Reduce ambulance response time in congested urban areas</li>
          <li>Improve attendance tracking in large universities</li>
          <li>Minimize crop loss due to unpredictable weather</li>
          <li>Detect and prevent small-scale digital payment fraud</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⏱ Pitch Time</h2>
        <p className="text-gray-300">3 – 5 Minutes + Q&A</p>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Problem Understanding – Depth of analysis and clarity of assumptions</li>
          <li>Solution Feasibility – Realistic execution, not fantasy</li>
          <li>Technical Depth – Architecture, scalability, and system thinking</li>
          <li>Trade-offs & Constraints – Awareness of limitations and decisions</li>
          <li>Clarity of Pitch – Structured, concise, no fluff</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-red-900/30 rounded-lg shadow-md border border-red-800/50">
        <h2 className="text-2xl font-semibold mb-3">🚫 What Fails Immediately</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Generic ideas with no link to the given problem</li>
          <li>Over-engineered nonsense with no deployment path</li>
          <li>Buzzword stacking without architecture</li>
          <li>Ignoring constraints provided in the problem</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">🧠 Core Principle</h2>
        <p className="text-gray-300">Reverse ideathon is not about creativity alone. It&apos;s about constraint-driven problem solving under pressure. Build something that can survive reality, not just slides.</p>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

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
