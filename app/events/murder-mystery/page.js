import Image from 'next/image';
import Link from 'next/link';

export default function MurderMystery() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Murder Mystery</h1>
      
      <p className="mt-4 text-gray-300 text-lg">
        Step into the world of mystery and intrigue in Murder Mystery! Work as a team to crack puzzles, solve riddles, and hunt for clues across four thrilling rounds—from decoding crosswords and crime riddles to unmasking the murderer. Race against the clock, follow strict rules, and use your detective skills to crack the case!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/murder-mystery.jpeg" alt="Escape Logic Event" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 2-4 members</p>
        <p><strong>Entry Fee:</strong> ₹150 per team</p>
        <p><strong>Location:</strong> Main Block Classroom</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1: The Case Begins</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Crossword Puzzle (10 crosswords)</li>
            <li>Stage 2: Crime Riddle (3 riddles)</li>
          </ul>
          <li><strong>Round 2: Unraveling Clues</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Puzzle</li>
            <li>Stage 2: Drive to the Clue</li>
            <li>Stage 3: Anonymous Letter</li>
          </ul>
          <li><strong>Round 3: Weapons and Evidence</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Weapon Enigma</li>
            <li>Stage 2: Weapon Hunt</li>
          </ul>
          <li><strong>Round 4: Final Countdown</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Guess Crime Timeline</li>
            <li>Stage 2: Identify the Murderer</li>
          </ul>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Teams must adhere to the time limits set for each stage.</li>
          <li>The use of mobile phones or any external help is strictly prohibited.</li>
          <li>All players must respect the game actors and follow their instructions.</li>
          <li>Any team caught cheating will be immediately disqualified.</li>
          <li>In the event of a tie, the decision of the event coordinators will be final.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Sundar</p>
        <p><strong>Phone:</strong> 9940236047</p>
        <p><strong>Email:</strong> rk.sundu21@gmail.com</p>
        <p className="mt-2"><strong>Name:</strong> Sam</p>
        <p><strong>Phone:</strong> 8939771980</p>
        <p><strong>Email:</strong> samjefferson2005@gmail.com</p>
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
