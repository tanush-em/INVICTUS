import Image from 'next/image';
import Link from 'next/link';

export default function CipherMind() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">CipherMind: Tech Quiz Challenge</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Get ready for an exciting tech quiz competition that tests your problem-solving and technical knowledge!
        The event consists of two thrilling rounds – a fast-paced buzzer round with riddles and picture hints,
        followed by a spin-the-wheel challenge where teams tackle topic-based technical questions.
        A dynamic leaderboard will keep track of scores in real-time, adding to the excitement!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/cipher-mind.jpeg" alt="Cipher Mind" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 2-4 members per team</p>
        <p><strong>Entry Fee:</strong>₹ 100 for 2 members (₹ 30 for every additional member)</p>
        <p><strong>Location:</strong> To be announced</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1 - Buzzer Round:</strong> Teams will be presented with technical riddles and visual hints. The first team to press the buzzer gets a chance to answer. Correct answers earn points; incorrect answers pass the chance to the next team.</li>
          <li><strong>Round 2 - Spin the Wheel:</strong> Each team spins the wheel to select a topic. Questions will be based on the selected topic. Teams can use lifelines (discussion with teammates) once or twice, but excessive hint usage will affect scoring.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Teams must adhere to the given time limits for answering.</li>
          <li>Only one response per team is allowed per question.</li>
          <li>Use of external resources (internet, books, etc.) is strictly prohibited.</li>
          <li>The decision of the quizmaster/judges is final.</li>
          <li>Points will be awarded based on accuracy, with deductions for excessive hint usage.</li>
          <li>No refund of registeration fee will be issued for any reason.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Keerti</p>
        <p><strong>Phone:</strong> 9150521729</p>
        <p className="mt-2"><strong>Name:</strong> Arya</p>
        <p><strong>Phone:</strong> 7305666539</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd9A01wI7yCAtlrqq4Xua6Mflu2Z6KxBOcW9cO9gZFtwAFL9A/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
