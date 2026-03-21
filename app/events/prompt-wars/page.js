import Image from 'next/image';
import Link from 'next/link';

export default function PromptWars() {
  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Prompt Wars: The Art of Engineering AI</h1>
      <p className="text-center text-base sm:text-lg md:text-xl text-emerald-400 font-semibold mt-2">📷🔥 Craft. Refine. Replicate.</p>

      <p className="mt-4 text-gray-300 text-base sm:text-lg">
        Step into the world of prompt engineering where precision meets creativity. This round challenges teams to reverse-engineer visuals by crafting intelligent prompts that guide AI to generate outputs as close as possible to the given image.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/prompt-wars.png" alt="Prompt Wars" width={500} height={300} className="w-full max-w-[500px] h-auto rounded-lg shadow-md" />
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📷 Round Format</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Input: A reference image will be displayed</li>
          <li>Challenge Type: Prompt Engineering & AI Generation</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">📝 Task</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Analyze the given image carefully</li>
          <li>Design a prompt that accurately describes the image</li>
          <li>Generate AI output that closely matches the original picture</li>
          <li>Optimize prompts to be precise and effective</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">⚖️ Judging Criteria</h2>
        <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
          <li>Creativity of Prompt Formulation – How well the prompt captures details and style</li>
          <li>Accuracy of AI Output vs Original Picture – Similarity between generated output and reference image</li>
          <li>Efficiency – Conciseness and precision of the prompt</li>
        </ul>
      </div>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base"><strong>Team Size:</strong> 1–3</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Entry Fee:</strong> ₹150</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong>Location:</strong> To be announced</p>
      </div>

      <p className="mt-6 text-center text-base sm:text-lg text-gray-400 italic">Engineer the perfect prompt and recreate the vision 🚀</p>

      <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Contact Information</h2>
        <div className="mt-2 space-y-1">
          <a href="tel:+916381961971" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Nelash U — +91 6381961971</a>
          <a href="tel:+919043351402" className="text-gray-300 hover:text-blue-500 block py-2 text-sm sm:text-base">Manish R — +91 9043351402</a>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoZilKDBwi-qc6aCd5XLx3gjSFt834fazWuXwrQNvCmcxBtg/viewform?usp=sharing&ouid=107016111243850562059" target="_blank" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95 min-h-[44px]">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
