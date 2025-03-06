import Image from 'next/image';
import Link from 'next/link';

export default function TurfCricketShowdown() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Turf Cricket Showdown</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Get ready to showcase your cricketing skills in an exciting 5-a-side Turf Cricket tournament!
        Experience fast-paced action, strategic gameplay, and thrilling moments as teams compete for glory.
        Whether you're an amateur or a seasoned player, this is your chance to shine on the turf!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/turf-cricket.jpeg" alt="Turf Cricket Showdown" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 5 players per team (2 substitutes)</p>
        <p><strong>Entry Fee:</strong> ₹___ per team (to be decided)</p>
        <p><strong>Location:</strong> [Specify Venue]</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1:</strong> League Stage or Knockout game based on maximum team registrations.</li>
          <li><strong>Round 2:</strong> Semi-finals and Finals - The last four teams will play in semis, and the winners will advance to the finals.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Each match will be 4 overs per side.</li>
          <li>Chucking inside the box (as per venue guidelines).</li>
          <li>No LBW rule, but direct stump hits count as an out.</li>
          <li>Wides and No-balls will result in an extra run and a free hit.</li>
          <li>Teams must report 15 minutes before the match; late arrivals may face disqualification.</li>
          <li>Umpire’s decision is final – arguing with the umpire can result in penalties.</li>
          <li>Use of abusive language or misconduct will lead to immediate disqualification.</li>
          <li>Players must wear sports attire and non-marking shoes.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Email:</strong> [Provide Email]</p>
        <p><strong>Phone:</strong> [Provide Phone Number]</p>
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="https://www.invictus-eec.site" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}