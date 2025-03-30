import Image from 'next/image';
import Link from 'next/link';

export default function SportsEvents() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">IPL Auction Showdown</h1>

      <div className="mt-4 mb-8 flex justify-center">
        <Image src="/ipl-auction.jpeg" alt="IPL Auction Showdown" width={500} height={300} className="rounded-lg shadow-md" />
      </div>
      <div className="max-w-3xl bg-gray-800 p-2 mt-8 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-4xl font-bold text-center mt-12">Mock IPL Auction</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Experience the thrill of bidding in our exciting Mock IPL Auction event!
          Step into the shoes of franchise owners, manage your virtual budget, and build your dream team
          of cricket superstars. Put your cricket knowledge and strategic thinking to the test in this
          immersive simulation of the world's most popular cricket league auction.
        </p>

        <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Participation Details</h2>
          <p className="mt-2"><strong>Team Size:</strong> 3-4 members per franchise</p>
          <p><strong>Entry Fee:</strong> ₹ 500 per franchise</p>
          <p><strong>Location:</strong> <Link href="https://maps.app.goo.gl/UjK3zErpRCWWijas8?g_st=aw" className='text-sky-500 hover:text-sky-700'>Phoenix Event Hub, Manapakkam</Link></p>
          <p><strong>Date:</strong>April 12, 2025</p>
          <p><strong>Time:</strong>9:00 AM - 5:00 PM</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Event Flow</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li><strong>Phase 1:</strong> Franchise orientation and virtual budget allocation.</li>
            <li><strong>Phase 2:</strong> Marquee players auction featuring top international and Indian stars.</li>
            <li><strong>Phase 3:</strong> Main auction with categorized player pools (batsmen, bowlers, all-rounders, etc.).</li>
            <li><strong>Phase 4:</strong> Team analysis and awards ceremony for best strategy, value picks, and overall team.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Each franchise will have a virtual budget of ₹100 crore.</li>
            <li>Teams must purchase a minimum of 18 and maximum of 25 players.</li>
            <li>Each team must include at least 5 international players and 3 uncapped players.</li>
            <li>Minimum bid increment is ₹5 lakh for uncapped players and ₹10 lakh for others.</li>
            <li>RTM (Right To Match) cards will be available as per official IPL auction rules.</li>
            <li>Teams must maintain salary cap compliance throughout the auction.</li>
            <li>Auction decisions by the auctioneer are final and binding.</li>
            <li>Use of mobile phones for external assistance is prohibited during bidding.</li>
            <li>No refund of registration fee will be issued for any reason.</li>
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