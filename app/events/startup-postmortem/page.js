"use client";

import Link from 'next/link';

export default function StartupPostmortem() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Startup Postmortem: Why Did It Die?</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">🔍🔥 Analyze. Diagnose. Conclude.</p>

      <p className="mt-4 text-gray-300 text-lg">
        Step into the role of tech investigators and uncover the reasons behind a startup&apos;s downfall. This round challenges teams to critically analyze failures, identify key mistakes, and present a compelling postmortem backed by technical and strategic reasoning.
      </p>

      <div className="mt-4 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/startup-postmortem.png" alt="Startup Postmortem" className="w-full max-w-[500px] h-[300px] object-cover rounded-lg shadow-md mx-auto" onError={(e) => { e.target.src = 'https://placehold.co/600x400/334155/94a3b8?text=Startup+Postmortem'; }} />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📉 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Satirical Technical Analysis</li>
          <li>Mode: Team-based investigation and presentation</li>
          <li>Scenario: Fictional failed startup with given background details</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Analyze the startup&apos;s idea, tech stack, users, and funding</li>
          <li>Identify technical and strategic flaws</li>
          <li>Explain the reasons behind the failure</li>
          <li>Present a structured and insightful postmortem analysis</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">💡 Example Failure Reasons</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Overfitting in machine learning models</li>
          <li>Poor scalability planning</li>
          <li>Data privacy and security issues</li>
          <li>Misuse of technologies (e.g., using blockchain unnecessarily)</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⏱ Presentation Time</h2>
        <p className="text-gray-300">3 Minutes + 1 Minute Q&A</p>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Technical Realism – Accuracy and practicality of the analysis</li>
          <li>Depth of Failure Analysis – Thoroughness in identifying issues</li>
          <li>Logical Reasoning – Clarity and coherence of conclusions</li>
          <li>Presentation & Storytelling – Effectiveness in delivering the analysis</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Break down the failure and uncover what went wrong 🔍🚀</p>

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
