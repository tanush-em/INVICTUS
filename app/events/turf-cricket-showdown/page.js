import { color } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SportsEvents() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Cricket - Football Showdown</h1>

      <div className="mt-4 mb-8 flex justify-center">
        <Image src="/turf-cricket.jpeg" alt="Turf Cricket Showdown" width={500} height={300} className="rounded-lg shadow-md" />
      </div>
      <div className="max-w-3xl bg-gray-800 p-2 mt-8 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-bold text-center mt-12">Turf Cricket</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Get ready to showcase your cricketing skills in an exciting 5-a-side Turf Cricket tournament!
          Experience fast-paced action, strategic gameplay, and thrilling moments as teams compete for glory.
          Whether you're an amateur or a seasoned player, this is your chance to shine on the turf!
        </p>

        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Participation Details</h2>
          <p className="mt-2"><strong>Team Size:</strong> 6 players per team (+1 substitutes)</p>
          <p><strong>Entry Fee:</strong> ₹ 300 per team (to be decided)</p>
          <p><strong>Location:</strong> <Link href="https://maps.app.goo.gl/UjK3zErpRCWWijas8?g_st=aw" className='text-sky-500 hover:text-sky-700'>Turfvolution, Manapakkam</Link></p>
          <p><strong>Date:</strong>March 28, 2025</p>
          <p><strong>Time:</strong>10:00 AM - 3:00 PM</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Event Flow</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li><strong>Round 1:</strong> Knockout game based on maximum team registrations.</li>
            <li><strong>Round 2:</strong> Semi-finals and Finals - The last four teams will play in semis, and the winners will advance to the finals.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Each match will be 4 overs per side.</li>
            <li>Chucking inside the box (as per venue guidelines).</li>
            <li>No LBW rule, but direct stump hits count as an out.</li>
            <li>Wides and No-balls will result in an extra run and a free hit.</li>
            <li>Teams must report 15 minutes before the match; late arrivals may face disqualification.</li>
            <li>Umpire’s decision is final – arguing with the umpire can result in penalties.</li>
            <li>Use of abusive language or misconduct will lead to immediate disqualification.</li>
            <li>Players must wear sports attire.</li>
            <li>No refund of registeration fee will be issued for any reason.</li>
          </ul>
        </div>

        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2"><strong>Name:</strong> Sundar</p>
          <p><strong>Phone:</strong> 9940236047</p>
          <p><strong>Email:</strong> rk.sundu21@gmail.com</p>
          <p className="mt-2"><strong>Name:</strong> Sam Jefferson</p>
          <p><strong>Phone:</strong> 8939771980</p>
          <p><strong>Email:</strong> samjefferson2005@gmail.com</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeQ_SkuS9fS8fHklEdShF4Uq1mGdBeOgEQ7uIsDv1j39OGrKw/viewform" target="_blank">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
