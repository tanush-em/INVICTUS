import Image from 'next/image';
import Link from 'next/link';

export default function AIDumbCharades() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">AI Dumb Charades: Act the Algorithm</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">🤖🔥 Act. Guess. Win.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Get ready for a fun-filled, high-energy round where technology meets creativity. Teams must communicate complex AI and tech concepts without words—only actions—making this a true test of expression, teamwork, and quick thinking.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/ai-dumb-charades.png" alt="AI Dumb Charades" width={500} height={300} className="w-full max-w-[500px] h-auto rounded-lg shadow-md" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🎭 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Challenge Type: Non-verbal Guessing Game</li>
          <li>Mode: Head-to-head team competition</li>
          <li>Concepts: AI & Technology-related terms</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>One team member acts out the given term</li>
          <li>No speaking, writing, or use of props allowed</li>
          <li>Teammates must guess the correct term</li>
          <li>Complete the task within the given time limit</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⏱ Time Limit</h2>
        <p className="text-gray-300 text-sm sm:text-base">60 – 90 seconds per term</p>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Accuracy of the Guessed Term – Correctness of the final answer</li>
          <li>Speed of Correct Response – How quickly the team arrives at the answer</li>
          <li>Creativity & Clarity of Acting – Effectiveness of non-verbal communication</li>
          <li>Team Coordination – Collaboration and understanding within the team</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 2–4</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹200</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">Express without words and decode the algorithm 🎯🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+919080431594" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Vignesh — +91 9080431594</a>
          <a href="tel:+919043351402" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Manish R — +91 9043351402</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeGoBL-qvgeBZNqCneFqRuoJgxAND-OY2lvobTgGpqe3jhuFQ/viewform?usp=sharing&ouid=107016111243850562059" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
