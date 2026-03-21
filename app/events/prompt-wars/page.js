import Image from 'next/image';
import Link from 'next/link';

export default function PromptWars() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center">Prompt Wars: The Art of Engineering AI</h1>
      <p className="text-center text-xl text-emerald-400 font-semibold mt-2">📷🔥 Craft. Refine. Replicate.</p>

      <p className="mt-4 text-gray-300 text-lg">
        Step into the world of prompt engineering where precision meets creativity. This round challenges teams to reverse-engineer visuals by crafting intelligent prompts that guide AI to generate outputs as close as possible to the given image.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/prompt-wars.png" alt="Prompt Wars" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📷 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Input: A reference image will be displayed</li>
          <li>Challenge Type: Prompt Engineering & AI Generation</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Analyze the given image carefully</li>
          <li>Design a prompt that accurately describes the image</li>
          <li>Generate AI output that closely matches the original picture</li>
          <li>Optimize prompts to be precise and effective</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Creativity of Prompt Formulation – How well the prompt captures details and style</li>
          <li>Accuracy of AI Output vs Original Picture – Similarity between generated output and reference image</li>
          <li>Efficiency – Conciseness and precision of the prompt</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300"><strong>Team Size:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Entry Fee:</strong> To be announced</p>
        <p className="text-gray-300"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-lg text-gray-400 italic">Engineer the perfect prompt and recreate the vision 🚀</p>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2 text-gray-300"><strong>To be announced</strong></p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScl5ebazqBwfFoMTCGrTYrOiEjUwl_XmNanmPmEXDu5NtSqlg/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
