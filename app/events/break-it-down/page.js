import Image from 'next/image';
import Link from 'next/link';

export default function BreakItDown() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center">Break it Down</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">😂🔥 Simplify. Entertain. Explain.</p>

      <p className="mt-4 text-gray-300 text-lg">
        This round puts your communication skills to the ultimate test. Teams must break down complex technical concepts into simple, relatable, and engaging explanations—just like explaining it to a grandmother with zero tolerance for jargon.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/break-it-down.png" alt="Break it Down" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">👵 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Challenge Type: Humorous Technical Explanation</li>
          <li>Team Size: 2–4 members (One primary speaker)</li>
          <li>Concept: Advanced tech topic will be assigned</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Understand the given technical concept</li>
          <li>Simplify it into an easy-to-understand explanation</li>
          <li>Add humor while keeping it respectful</li>
          <li>Deliver the explanation in a clear and engaging way</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⏱ Time Limit</h2>
        <p className="text-gray-300">2 Minutes per team</p>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Conceptual Clarity – How well the concept is understood and conveyed</li>
          <li>Simplification without Losing Accuracy – Ability to make it simple yet correct</li>
          <li>Creativity & Humor – Engagement and originality in explanation</li>
          <li>Confidence and Communication – Delivery, clarity, and stage presence</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> 2–4</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> ₹200</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Make tech so simple that even grandma enjoys it 😄🚀</p>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+917305278740" className="text-gray-300 hover:text-blue-500 block">Harritha — +91 7305278740</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfwSH8InR6CmFNeKia5kJ3-RLOjupvPA7tDpPbPePeDuG0RqA/viewform?usp=publish-editor" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
