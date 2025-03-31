import Image from 'next/image';
import Link from 'next/link';

export default function SportsEvents() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">IPL Auction Showdown</h1>

      <div className="mt-4 mb-8 flex justify-center">
        <Image src="/ipl-auction.png" alt="IPL Auction Showdown" width={500} height={300} className="rounded-lg shadow-md" />
      </div>
      <div className="max-w-3xl p-2 mt-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mt-12">Mock IPL Auction</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Experience the thrill of bidding in our exciting Mock IPL Auction event!
          Step into the shoes of franchise owners, manage your virtual budget, and build your dream team
          of cricket superstars. Put your cricket knowledge and strategic thinking to the test in this
          immersive simulation of the world's most popular cricket league auction.
        </p>

        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Participation Details</h2>
          <p className="mt-2"><strong>Team Size:</strong> 3-4 members per team</p>
          <p><strong>Entry Fee:</strong>₹ 50 for 2 members (₹ 25 for every additional member)</p>
          <p><strong>Date:</strong> April 12, 2025</p>
          <p><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Event Flow</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li><strong>Round 1:</strong> Quiz Round (Elimination Round) - Test teams on their cricket and IPL knowledge to qualify for the auction round.</li>
            <li><strong>Round 2:</strong> IPL Mock Auction Round - Qualified teams bid for players and build their best 11 squad.</li>
            <li>The most well-balanced 11 with an impact player will be declared the winners.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li><strong>Team Composition & Budget:</strong></li>
            <ul className="ml-6 list-disc">
              <li>Each team must build a squad of 11 players within a budget of ₹25 crores.</li>
              <li>A team must have a balanced squad consisting of:
                <ul className="ml-6 list-disc">
                  <li>4 overseas players (in playing 11)</li>
                  <li>1 wicketkeeper (compulsory)</li>
                  <li>4 bowlers (compulsory)</li>
                  <li>4 batsmen (compulsory)</li>
                  <li>2 all-rounders (compulsory)</li>
                </ul>
              </li>
            </ul>
            <li><strong>Auction Process:</strong></li>
            <ul className="ml-6 list-disc">
              <li>Each team will be given an initial budget of ₹25 crores to bid for players.</li>
              <li>Players will be categorized into different sets (Batsmen, Bowlers, All-rounders, and Wicketkeepers).</li>
              <li>The auctioneer will call out the base price of a player, and teams will place bids in increments of ₹20 lakhs or more.</li>
              <li>If no team bids for a player, they remain unsold.</li>
            </ul>
            <li><strong>Bidding Rules:</strong></li>
            <ul className="ml-6 list-disc">
              <li>Once a team reaches its full squad (11 players) or runs out of budget, they must stop bidding and submit their squad.</li>
              <li>If the squad doesn't consist of 11 players with no budget, they get disqualified with immediate effect.</li>
            </ul>
            <li><strong>Player Categories & Base Prices:</strong> Players will have base prices starting from ₹20 to 50 lakhs.</li>
            <li><strong>Time Limits & Penalties:</strong> Teams get 20 seconds to place a bid. If they fail, the bid moves to the next team.</li>
            <li><strong>Final Squad Submission:</strong> At the end of the auction, each team submits their final playing XI along with their remaining budget.</li>
            <li><strong>Winning Criteria:</strong> The team with the most well-balanced squad will be declared the winner.</li>
          </ul>
        </div>

        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2"><strong>Name:</strong> Sundar</p>
          <p><strong>Phone:</strong> 9940236047</p>
          <p><strong>Email:</strong> rk.sundu21@gmail.com</p>
          <p className="mt-2"><strong>Name:</strong> Sam Jefferson</p>
          <p><strong>Phone:</strong> 8939771980</p>
          <p><strong>Email:</strong> samjefferson2005@gmail.com</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="https://docs.google.com/forms/d/1a9D6rxcK1wjsksyL_lLk65u-oHALSw2Ui1UzF57xFcs/edit" target="_blank">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}