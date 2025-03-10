import Image from 'next/image';
import Link from 'next/link';

export default function SoulOSinging() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Soul’O Singing</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Unleash your vocal prowess in Solo Pitch, the ultimate singing showdown! Whether you’re a professional singer or a bathroom singer, this competition is your chance to captivate the audience and judges alike. Show off your range, stage presence, and musical expression to claim the title of the event!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/solo-singing.jpeg" alt="Solo-Singing" width={500} height={300} className="rounded-lg shadow-md" />
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
          <li>Participants are allowed to sing any song of their choice in any language.</li>
          <li>Foul language or vulgarity is not allowed.</li>
          <li>Participants are strictly allotted a duration of 1-2 minutes to sing.</li>
          <li>Karaoke should be submitted earlier if needed (including karaoke, performance duration shouldn't exceed more than 2 mins).</li>
          <li>Instruments are allowed as long as participants have all the requirements to make proper arrangements.</li>
          <li>Decisions made by judges are final.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Kavitha A</p>
        <p><strong>Email:</strong> Kavitha.arumugamv@gmail.com</p>
        <p><strong>Phone:</strong> 8637650188</p>
        <p className="mt-2"><strong>Name:</strong> Asvika M A</p>
        <p><strong>Email:</strong> asvika003@gmail.com</p>
        <p><strong>Phone:</strong> 8637407824</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfc3Hd3yOGQsOWEz1Yb1V6ZJ1b8vTvPRRSFsMEDdqnlxZt3Ug/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}
