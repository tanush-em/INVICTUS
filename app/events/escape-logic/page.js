import Image from 'next/image';
import Link from 'next/link';

export default function EscapeLogic() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Escape Logic: The Ultimate Coding Quest</h1>

      <p className="mt-4 text-gray-300 text-lg">
        Do you have what it takes to escape? Join this thrilling Escape Room-Themed Coding Event, where logic and programming skills unlock your freedom!
        Solve mystery-driven coding challenges and navigate the Escape Matrix using your problem-solving expertise. Only the smartest minds will escape!
      </p>

      <div className="mt-4 flex justify-center">
        <Image src="/escape-logic.jpeg" alt="Escape Logic" width={500} height={300} className="rounded-lg shadow-md" />
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Participation Details</h2>
        <p className="mt-2"><strong>Team Size:</strong> 1-3 members</p>
        <p><strong>Entry Fee:</strong>₹ 150</p>
        <p><strong>Location:</strong> In Campus premises (will be intimated later)</p>
        <p><strong>Date & Time:</strong> 12th April, 2024 / 12:00 PM (tentative)</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Event Flow</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li><strong>Round 1: The Mystery Code:</strong> Participants will solve coding challenges embedded in gripping mystery-driven scenarios. Unlock the next level by cracking the codes!</li>
          <li><strong>Round 2: The Escape Matrix:</strong> A high-stakes logic and problem-solving round where teams navigate through an Escape Matrix using programming prowess and critical thinking. Only the best will break free!</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Rules & Regulations</h2>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Team Size: 1-3 members.</li>
          <li><strong>Coding Language:</strong> Any standard programming language can be used.</li>
          <li><strong>Time Limits:</strong> Each round will have a fixed duration to complete the tasks.</li>
          <li><strong>Fair Play:</strong> No external help, AI-generated solutions, or plagiarism is allowed.</li>
          <li><strong>Judging Criteria:</strong> Based on accuracy, efficiency, and logical approach to solving challenges.</li>
          <li><strong>Disqualification:</strong> Any violation of rules will lead to immediate disqualification.</li>
          <li>No refund of registeration fee will be issued for any reason.</li>
        </ul>
      </div>

      <div className="mt-6 p-5 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-2"><strong>Name:</strong> Megala.P</p>
        <p><strong>Phone:</strong> 6381873100</p>
        <p className="mt-2"><strong>Name:</strong> Harsha Varthini</p>
        <p><strong>Phone:</strong> 9080387954</p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdKKOb_6296XTraHuiXmgcGB2GSdqoEJCLCzPw7Uha36s66sQ%2Fviewform%3Fusp%3Dsharing%27&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdKKOb_6296XTraHuiXmgcGB2GSdqoEJCLCzPw7Uha36s66sQ%2Fviewform%3Fusp%3Dsharing%27&ifkv=ASSHykqPnt9Y6Eg8bmOWSi4UsTM-LoRBrjtWHNncgaJyQG92D9mf07sjZzvfZSSlapCH45faDy9M&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S621464906%3A1741612836052831&ddm=1" target="_blank">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}