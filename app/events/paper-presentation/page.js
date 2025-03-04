export default function PaperPresentation() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Paper Presentation</h1>
        
        <p className="mt-4 text-gray-300 text-lg">
          Showcase your research and innovative ideas in front of an esteemed panel of judges. 
          Bring out your best research and analysis!
        </p>
  
        {/* Event Details */}
        <div className="mt-6 p-5 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Event Details</h2>
          <p className="mt-2"><strong>Date:</strong> March 10, 2025</p>
          <p><strong>Venue:</strong> Auditorium Hall A</p>
          <p><strong>Time:</strong> 10:00 AM - 1:00 PM</p>
        </div>
  
        {/* Rules Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Rules & Guidelines</h2>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Maximum 2 participants per team.</li>
            <li>Presentation time: 10 minutes + Q&A.</li>
            <li>Only original research and review papers are allowed.</li>
          </ul>
        </div>
  
        {/* Contact Section */}
        <div className="mt-6 p-5 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-2"><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
      </div>
    );
  }
  