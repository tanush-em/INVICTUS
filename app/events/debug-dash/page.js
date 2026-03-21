import Image from 'next/image';
import Link from 'next/link';

export default function DebugDash() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center">Debug Dash: Code Under Pressure</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">⚡🔥 Detect. Fix. Win.</p>

      <p className="mt-4 text-gray-300 text-lg">
        This high-intensity round challenges your debugging skills under pressure. Teams must quickly identify and fix errors in code while competing in a fast-paced, buzzer-based environment.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/debug-dash.png" alt="Debug Dash" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">💻 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Debugging (C / Java / Python)</li>
          <li>Mode: Buzzer-based response system</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Analyze the given buggy code snippet</li>
          <li>Identify errors and fix them correctly</li>
          <li>Respond quickly using the buzzer system</li>
          <li>Provide the correct solution within the time limit</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⏳ Twist</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>First team to hit the buzzer gets the answering chance</li>
          <li>Incorrect answer passes the chance to the next team</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Speed of Debugging – How quickly the issue is identified and resolved</li>
          <li>Accuracy of Solution – Correctness of the fixed code</li>
          <li>Efficient Coding Practices – Clean, optimized, and logical fixes</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> 2</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> ₹100</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Stay sharp, debug fast, and beat the clock 🚀</p>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+918610301544" className="text-gray-300 hover:text-blue-500 block">Soujhenya — +91 8610301544</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcdimKe8ASC2MPUeO_yXyQtVofY6BVKntIEl0la_TBdfelzA/viewform?usp=dialog" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
