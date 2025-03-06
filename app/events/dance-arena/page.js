import Image from 'next/image';
import Link from 'next/link';

export default function DanceArena() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Dance Arena</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Take center stage and let your passion for dance shine in the Solo Dance competition! Whether you’re a trained performer or a freestyle enthusiast, this is your moment to mesmerize the audience with your rhythm, expression, and creativity. From graceful contemporary moves to electrifying hip-hop beats, showcase your unique style, technique, and stage presence. Dance your heart out and compete for the title of the ultimate solo performer!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/dance-arena.jpeg" alt="Dance-Arena" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> Solo participation only</p>
        <p><strong>Entry Fee:</strong> ₹50</p>
        <p><strong>Location:</strong> Hi-Tech Hall</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Each participant will get 2 minutes to perform.</li>
          <li>Audio tracks must be submitted one hour prior to the event.</li>
          <li>If the time limit is exceeded, the audio will be paused.</li>
          <li>Profanity and vulgarity will lead to immediate disqualification.</li>
          <li>Decision of the judges will be final and up for no discussion.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Asvika M A</p>
        <p><strong>Email:</strong> asvika003@gmail.com</p>
        <p><strong>Phone:</strong> 8637407824</p>
        <p className="mt-2"><strong>Name:</strong> Harini V</p>
        <p><strong>Email:</strong> harinisai2115@gmail.com</p>
        <p><strong>Phone:</strong> 8838422248</p>
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
