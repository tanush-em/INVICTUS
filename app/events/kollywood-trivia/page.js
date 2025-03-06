import Image from 'next/image';
import Link from 'next/link';

export default function KollywoodTrivia() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Kollywood Trivia</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Step into the vibrant world of Kollywood Trivia, where your passion for films takes center stage! Test your knowledge with challenging questions and clever clues that celebrate iconic movies, memorable tunes, and behind-the-scenes secrets.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/kollywood-trivia.jpeg" alt="Kollywood Trivia" width={500} height={300} className="rounded-lg shadow-md" />
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
          <li><strong>Round 1:</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Normal Q&A</li>
            <li>Stage 2: Description About the Movie</li>
          </ul>
          <li><strong>Round 2:</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Connections</li>
            <li>Stage 2: Guess the Movie</li>
          </ul>
          <li><strong>Round 3:</strong></li>
          <ul className="list-disc list-inside ml-6">
            <li>Stage 1: Guess the Tune</li>
            <li>Stage 2: Mystery Clues</li>
          </ul>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Each team consists of 2–4 members.</li>
          <li>The team that presses the buzzer first gets the chance to answer.</li>
          <li>Team members may discuss the answer before responding.</li>
          <li>If a team cannot answer within 15 seconds, the question is passed to the next team.</li>
          <li>The top three teams will advance to the next round.</li>
          <li>The judges’ decisions are final.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Narendran</p>
        <p><strong>Phone:</strong> 93452 88655</p>
        <p><strong>Email:</strong> gtnarendran15@gmail.com</p>
        <p className="mt-2"><strong>Name:</strong> Asvika</p>
        <p><strong>Phone:</strong> 8637407824</p>
        <p><strong>Email:</strong> asvika003@gmail.com</p>
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