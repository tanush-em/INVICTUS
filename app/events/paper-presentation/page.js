import Image from 'next/image';
import Link from 'next/link';

export default function PaperPresentation() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Paper Presentation</h1>
      
      <p className="mt-4 text-gray-300 text-lg">
        Showcase your research and ideas in AI, ML, and emerging technologies. Compete in two rounds—submit a compelling abstract and present your insights in front of experts. 
        Gain valuable feedback, refine your presentation skills, and stand out in the world of innovation.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/paper-presentation.jpeg" alt="Paper Presentation" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 3-6 members</p>
        <p><strong>Entry Fee:</strong>₹ 200 for 3 Members (₹ 30 for every addtional member)</p>
        <p><strong>Location:</strong> Gallery Hall, Easwari Engineering College</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1 - Abstract Submission (Pre-Event):</strong> Teams submit a 300-word abstract summarizing their research. <strong>Submission Deadline:</strong> One week before the event.</li>
          <li><strong>Round 2 - Presentation Round (6 min + 2 min Q&A):</strong> Teams deliver a structured and engaging presentation. Evaluation based on originality, clarity, research depth, and presentation skills.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Papers must follow the IEEE format (max 8 pages, including references).</li>
          <li>Original research only – plagiarism above 10% will lead to disqualification.</li>
          <li>Presentations must be in English and adhere to the time limit.</li>
          <li>Bring your laptop & charger.</li>
          <li>Judges’ decisions are final.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Kaviya.R.V</p>
        <p><strong>Phone:</strong> 8778575834</p>
        <p className="mt-2"><strong>Name:</strong> Haseena</p>
        <p><strong>Phone:</strong> 9884035664</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScam-ard9BCb7uDk8p_gtcfVYehJJUgpD3i_yQfPZH5M1SuhQ/viewform?usp=sharing" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}