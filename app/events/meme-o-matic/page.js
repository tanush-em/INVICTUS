import Image from 'next/image';
import Link from 'next/link';

export default function MemeOMatic() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Meme-O-Matic: AI Meme & Art Challenge</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Unleash your creativity with AI! Teams will generate memes and digital artwork based on a given context using AI tools like image generators.
        Showcase your wit, humor, and artistic flair in this exciting fusion of technology and creativity! 🚀🔥
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/meme-o-matic.jpeg" alt="Meme-O-Matic" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> Solo or Duo</p>
        <p><strong>Entry Fee:</strong> To be announced</p>
        <p><strong>Location:</strong> To be announced</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1 - Meme Mixer (20 mins):</strong> Participants receive a random theme and must generate three AI memes using their best prompts. Judging will be based on creativity and effectiveness of the prompts.</li>
          <li><strong>Round 2 - AI Art Showdown (20 mins):</strong> Shortlisted participants refine and generate an AI artwork based on a new theme. Judging will be based on originality and quality of prompts.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Bring your laptop & charger.</li>
          <li>Only AI-generated memes and art – No manual edits!</li>
          <li>Use provided AI tools only.</li>
          <li>Content must align with the given theme.</li>
          <li>Offensive or inappropriate content leads to disqualification.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Rithanya</p>
        <p><strong>Phone:</strong> 9498480048</p>
        <p className="mt-2"><strong>Name:</strong> Jenelia Gracelyn</p>
        <p><strong>Phone:</strong> 6381290278</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoRzBIO5SvR-ZKHuqLmk8v89QgZbjbzgnQkTknt3OkhfnJDg/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}