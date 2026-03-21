import Image from 'next/image';
import Link from 'next/link';

export default function Ideathon() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Ideathon – Innovation & Problem Solving Round</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">💡 Think. Create. Present.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Step into a dynamic round where creativity meets critical thinking. The Ideathon challenges participants to develop innovative solutions to real-world problems and present them effectively using a structured presentation.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/ideathon.png" alt="Ideathon" width={500} height={300} className="rounded-lg shadow-md w-full max-w-[500px] h-auto" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📊 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Problem Statement: Teams will be given a theme or real-world problem</li>
          <li>Challenge Type: Idea Generation, Concept Development & Presentation</li>
          <li>Presentation Mode: Teams must prepare and present their solution using a PPT</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Understand the given problem or theme clearly</li>
          <li>Brainstorm and develop a unique, feasible solution</li>
          <li>Create a clear implementation plan with expected impact</li>
          <li>Prepare a well-structured PPT covering problem, solution, approach, and benefits</li>
          <li>Present your idea confidently within the given time</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Innovation & Creativity – Originality and uniqueness of the idea</li>
          <li>Feasibility & Practicality – How realistic and implementable the solution is</li>
          <li>Impact & Relevance – Potential to solve the problem and create value</li>
          <li>Presentation & PPT Quality – Clarity, design, and effectiveness of slides</li>
          <li>Communication Skills – Confidence and clarity during the pitch</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 3–4</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹200</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">It&apos;s a creative thinking and presentation round where you design solutions and pitch them using a PPT. 🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+919342755379" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Kavya — +91 9342755379</a>
          <a href="tel:+919043351402" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Manish R — +91 9043351402</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSehkg9tsXfh9Nw8VuTUW240HShAMBQ0bYsQzX3z0CXVv-bw8A/viewform?usp=sharing&ouid=107016111243850562059" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
