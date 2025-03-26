import Image from 'next/image';
import Link from 'next/link';

export default function HackNova2025() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">HackNova 2025</h1>
      
      <p className="mt-4 text-gray-300 text-lg">
        Get ready to innovate, collaborate, and build at HackNova 2025! Participants will work in teams to develop creative and impactful solutions to predefined problem statements using cutting-edge technology and out-of-the-box thinking. Showcase your problem-solving skills, collaborate with like-minded individuals, and create technology-driven solutions that can make a difference.
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/hacknova-2025.jpeg" alt="HackNova 2025" width={700} height={500} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 3 - 6 members</p>
        <p><strong>Registration Fee:</strong> ₹ 300 for 3 members (₹ 50 for every additional member)</p>
        <p><strong>Duration:</strong> 7 - 8 Hours</p>
        <p><strong>Date and Time:</strong> 12th April, 2025 / 9:30 AM</p>
        <p><strong>Location:</strong> To Be Announced</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>9:00 AM - 10:00 AM:</strong> Inauguration & Issue of problem statements</li>
          <li><strong>10:00 AM - 01:00 PM:</strong> Hacking Phase I</li>
          <li><strong>01:00 PM - 01:30 PM:</strong> Lunch and Refreshments</li>
          <li><strong>01:30 PM - 04:00 PM:</strong> Hacking Phase II</li>
          <li><strong>4:00 PM - 4:30 PM:</strong> Project Submission Evaluation and Final Presentation</li>
          <li><strong>4:30 PM - 5:00 PM:</strong> Winner Announcement & Closing Ceremony</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Problem Statements</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Showcase your own ideas in the Open Track.</li>
          <li>Other problem statements to be revealed later...</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Each team must consist of 3 - 6 members.</li>
          <li>All participants must register online before the event.</li>
          <li>Respect and inclusivity are mandatory—harassment will not be tolerated.</li>
          <li>Teams must submit final projects before the deadline.</li>
          <li>Projects will be judged on creativity, execution, and impact.</li>
          <li>Participants retain ownership of their projects but allow organizers to use materials for promotion.</li>
          <li>Teams violating rules may be disqualified.</li>
          <li>No refund of registeration fee will be issued for any reason.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Judging Criteria</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Innovation & Creativity (30%)</strong> – How unique and creative is the solution?</li>
          <li><strong>Technical Implementation (25%)</strong> – How well is the solution implemented?</li>
          <li><strong>Impact & Feasibility (20%)</strong> – How practical and impactful is the solution?</li>
          <li><strong>Presentation & Clarity (15%)</strong> – How well is the project communicated?</li>
          <li><strong>Team Collaboration (10%)</strong> – How effectively did the team work together?</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Naveen Karthik R</p>
        <p><strong>Phone:</strong> 7397315409</p>
        <p className="mt-2"><strong>Name:</strong> Kavitha A</p>
        <p><strong>Phone:</strong> 8637650188</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdMhu4JNirXop56Uw-YS5fgASBrOmHL1uayMglrs4GF7Tt48Q/viewform" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div> 
    </div>
  );
}
