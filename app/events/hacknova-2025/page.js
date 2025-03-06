import Image from 'next/image';
import Link from 'next/link';

export default function PaperPresentation() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Paper Presentation</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Showcase your research and innovative ideas in front of panel of judges.
        howcase your research and innovative ideas in front of panel of judges.
        howcase your research and innovative ideas in front of panel of judges.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/hackathon-2025.jpeg" alt="Escape Logic" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Event Details</h2>
        <p className="mt-2"><strong>Date:</strong> March 10, 2025</p>
        <p><strong>Venue:</strong> Auditorium Hall A</p>
        <p><strong>Time:</strong> 10:00 AM - 1:00 PM</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Guidelines</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Maximum 2 participants per team.</li>
          <li>Presentation time: 10 minutes + Q&A.</li>
          <li>Only original research and review papers are allowed.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Vignesh</p>
        <p><strong>Email:</strong> vignesh@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
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
