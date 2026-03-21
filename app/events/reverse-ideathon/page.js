import Image from 'next/image';
import Link from 'next/link';

export default function ReverseIdeathon() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Pitch the Pointless: Pitch the Worst* 🎤🔥</h1>
      <p className="text-center text-lg sm:text-xl text-emerald-400 font-semibold mt-2">🎯 Be Ridiculous. Stay Serious. Entertain.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        This round flips innovation on its head. Teams must present the most absurd, impractical, and illogical tech ideas—while maintaining a completely serious pitch. The challenge lies in delivering nonsense with confidence and convincing flair.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/pitch-the-pointless.png" alt="Pitch the Pointless" width={500} height={300} className="rounded-lg shadow-md w-full max-w-[500px] h-auto" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🤡 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li><strong>Challenge Type:</strong> Satirical Ideathon / Parody Pitch</li>
          <li><strong>Mode:</strong> Team-based presentation</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Create a deliberately bad or useless tech idea</li>
          <li>Pitch it as if it&apos;s a revolutionary startup</li>
          <li>Use convincing (yet ridiculous) technical explanations</li>
          <li>Stay in character throughout the presentation</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">💡 Example Ideas</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>AI that predicts your past</li>
          <li>Blockchain-based alarm clocks</li>
          <li>IoT-enabled stone that tracks happiness</li>
          <li>ML model that decides what you should&apos;ve eaten yesterday</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⏱ Pitch Time</h2>
        <p className="text-gray-300 text-sm sm:text-base">2 – 3 Minutes + Q&A</p>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li><strong>Absurdity & Originality</strong> – How creative and ridiculous the idea is</li>
          <li><strong>Commitment to the Pitch</strong> – Staying in character without breaking</li>
          <li><strong>Fake Technical Jargon Mastery</strong> – Use of believable yet humorous tech language</li>
          <li><strong>Entertainment Value & Audience Engagement</strong> – Ability to captivate and amuse the audience</li>
        </ul>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-emerald-400 font-semibold italic">Pitch the worst idea… in the best way possible 😂🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 2–4</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹200</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+918122876731" className="text-gray-300 hover:text-blue-500 block text-sm sm:text-base">Manish Varma — +91 8122876731</a>
          <a href="tel:+917569821736" className="text-gray-300 hover:text-blue-500 block text-sm sm:text-base">Harinisree — +91 7569821736</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcsl5O0vXBY8urlqFwHWRvbxHlINjaqfntG-i0s5whPhc91A/viewform?usp=dialog" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
