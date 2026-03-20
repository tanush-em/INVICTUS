import Image from 'next/image';
import Link from 'next/link';

export default function Ideathon() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Ideathon – Innovation & Problem Solving Round</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">💡 Think. Create. Present.</p>

      <p className="mt-4 text-gray-300 text-lg">
        Step into a dynamic round where creativity meets critical thinking. The Ideathon challenges participants to develop innovative solutions to real-world problems and present them effectively using a structured presentation.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/ideathon.png" alt="Ideathon" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📊 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Problem Statement: Teams will be given a theme or real-world problem</li>
          <li>Challenge Type: Idea Generation, Concept Development & Presentation</li>
          <li>Presentation Mode: Teams must prepare and present their solution using a PPT</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Understand the given problem or theme clearly</li>
          <li>Brainstorm and develop a unique, feasible solution</li>
          <li>Create a clear implementation plan with expected impact</li>
          <li>Prepare a well-structured PPT covering problem, solution, approach, and benefits</li>
          <li>Present your idea confidently within the given time</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Innovation & Creativity – Originality and uniqueness of the idea</li>
          <li>Feasibility & Practicality – How realistic and implementable the solution is</li>
          <li>Impact & Relevance – Potential to solve the problem and create value</li>
          <li>Presentation & PPT Quality – Clarity, design, and effectiveness of slides</li>
          <li>Communication Skills – Confidence and clarity during the pitch</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">It&apos;s a creative thinking and presentation round where you design solutions and pitch them using a PPT. 🚀</p>

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
