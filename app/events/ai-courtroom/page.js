import Image from 'next/image';
import Link from 'next/link';

export default function AICourtroom() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">AI Courtroom</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">💬🔥 Argue. Defend. Convince.</p>

      <p className="mt-4 text-gray-300 text-lg">
        Step into a high-stakes debate arena where logic meets technology. This round tests your ability to analyze emerging tech topics, construct strong arguments, and defend your stance with clarity and precision.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/ai-courtroom.png" alt="AI Courtroom" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">💬 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Structured Technical Debate</li>
          <li>Topic: Emerging technology topic assigned on the spot</li>
          <li>Stance: Teams will argue For or Against</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Understand the assigned topic and stance</li>
          <li>Build strong, evidence-based arguments</li>
          <li>Counter opposing arguments with effective rebuttals</li>
          <li>Present your points with clarity and confidence</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Technical Depth & Accuracy – Strength and correctness of technical knowledge</li>
          <li>Logical Reasoning & Rebuttals – Ability to construct and counter arguments effectively</li>
          <li>Team Coordination – How well the team collaborates during the debate</li>
          <li>Communication Clarity – Clear, confident, and structured delivery</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Make your case and own the courtroom 🚀</p>

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
