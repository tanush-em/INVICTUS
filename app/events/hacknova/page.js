"use client";

import Link from 'next/link';

export default function Hacknova() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">HackNova 2.0</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">🚀 Innovate. Collaborate. Build.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Get ready to innovate, collaborate, and build at HackNova 2.0! Whether you&apos;re a developer, designer, or problem-solver, this 8-hour hackathon invites you to push your limits and create impactful solutions to real-world challenges.
      </p>
      <p className="mt-2 text-gray-300 text-base sm:text-lg">
        Participants will work in teams in an intense, time-bound environment to develop creative and practical solutions while collaborating with like-minded peers.
      </p>

      <div className="mt-4 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hacknova.png"
          alt="HackNova 2.0"
          className="rounded-lg shadow-md w-full max-w-[500px] h-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400/334155/94a3b8?text=HackNova+2.0';
          }}
        />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📅 Event Details</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li><strong>Date:</strong> 27th March 2026</li>
          <li><strong>Time:</strong> 9:00 AM onwards</li>
          <li><strong>Location:</strong> Library, Easwari Engineering College</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🧠 What to Expect</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>A fast-paced 8-hour hacking experience</li>
          <li>Real-world challenges across multiple domains</li>
          <li>Opportunity to build innovative solutions</li>
          <li>Collaboration and teamwork</li>
          <li>Evaluation by expert judges</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🧩 Domains</h2>
        <p className="text-gray-300 text-sm sm:text-base mb-2">Participants will build solutions in the following domains:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>🏥 Healthcare &amp; Well-being</li>
          <li>🤖 AI / Machine Learning</li>
          <li>🔐 Cybersecurity</li>
          <li>💰 FinTech</li>
          <li>🌍 Open Innovation</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⏳ Schedule</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>🕘 9:00 AM – 10:00 AM: Inauguration &amp; Briefing</li>
          <li>💻 10:00 AM – 01:00 PM: Hacking Phase I</li>
          <li>🍴 01:00 PM – 01:30 PM: Lunch Break</li>
          <li>💻 01:30 PM – 04:00 PM: Hacking Phase II</li>
          <li>📤 04:00 PM – 04:30 PM: Project Submission &amp; Presentations</li>
          <li>🏁 04:30 PM – 05:00 PM: Closing Ceremony</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">👥 Team &amp; Participation</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li><strong>Team Size:</strong> 2 – 4 members</li>
          <li><strong>Mode:</strong> Offline</li>
          <li><strong>Registration:</strong> Online registration only</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📋 Rules &amp; Regulations</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Teams must consist of 2 to 4 members</li>
          <li>All participants must complete registration</li>
          <li>Maintain discipline, respect, and teamwork</li>
          <li>Submissions must be completed within the given time</li>
          <li>Any form of plagiarism will lead to disqualification</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🏆 Evaluation Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Innovation &amp; Creativity – 30%</li>
          <li>Technical Implementation – 25%</li>
          <li>Impact &amp; Feasibility – 20%</li>
          <li>Presentation &amp; Clarity – 15%</li>
          <li>Team Collaboration – 10%</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base mb-2">For queries and support:</p>
        <div className="space-y-1">
          <a href="tel:+917550131840" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Saidakshin S — +91 7550131840</a>
          <a href="tel:+918838573345" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Mokitha S — +91 8838573345</a>
        </div>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-emerald-400 font-semibold italic">HackNova 2.0 is not just a competition — it&apos;s a platform to innovate, collaborate, and build under pressure. Bring your ideas to life and make your mark.</p>

      <div className="mt-8 flex justify-center px-4">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdBgqQRqpgnG866_q42JwIPbQXkJmzGJ08hD0HsqFuutCG0Fw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
