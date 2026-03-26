"use client";

import Link from "next/link";

export default function IPLAuction() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">IPL Auction</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">
        Play smart. Bid wisely. Build your champion squad! 🏆
      </p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Step into the thrill of an IPL-style auction where strategy, squad balance, and budget management decide the
        winner. Teams compete in an open bidding format to build the strongest possible squad under strict rules.
      </p>

      <div className="mt-4 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ipl-auction.png"
          alt="IPL Auction"
          className="rounded-lg shadow-md w-full max-w-[500px] h-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/334155/94a3b8?text=IPL+Auction";
          }}
        />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">👥 Team Composition</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Each team must consist of 2–4 members.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">💰 Auction Budget</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Every team will receive a fixed virtual budget (e.g., 100 Cr).</li>
          <li>No overspending is allowed under any circumstances.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📋 Player Pool</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>A predefined list of players will be provided.</li>
          <li>Only listed players are eligible for auction.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🔨 Auction Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Open bidding system.</li>
          <li>Participants are shortlisted via a quiz round before entering the auction.</li>
          <li>Auctioneer&apos;s decision is final.</li>
          <li>Each player will have a minimum base price.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📢 Bidding Rules</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Bids must increase in fixed increments (pre-decided).</li>
          <li>No withdrawal once a bid is placed.</li>
          <li>Silent or unclear bids will not be accepted.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⏱️ Time Limit</h2>
        <p className="text-gray-300 text-sm sm:text-base">Each player will be auctioned within 30–60 seconds.</p>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🧑‍🤝‍🧑 Squad Limit</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Teams must build a squad of 18–25 players.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🧩 Category Constraints</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Teams must maintain proper squad balance with minimum required batsmen, bowlers, and all-rounders.</li>
          <li>Overseas player rules: max 8 in squad, max 4 in Playing XI.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🔁 Unsold Players</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Unsold players may return in a second auction round.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">🤝 Fair Play</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>No collusion between teams.</li>
          <li>No intentional disruption.</li>
          <li>Misconduct may lead to penalties or disqualification.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Tie Situations</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>In case of simultaneous bids, the auctioneer decides the valid bid.</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">✅ Final Validation</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
          <li>Teams must ensure budget compliance.</li>
          <li>Teams must ensure proper squad balance.</li>
          <li>Final squads must meet all rules before submission.</li>
        </ul>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJvS5Xj-E6ds0b8fTImbPtfAWkJ4wx7nwFSJT8E_1w5iJZgg/viewform?usp=header"
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
