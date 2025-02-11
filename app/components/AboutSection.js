import { Calendar, MapPin, Crown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About the Event</h2>
        <p className="text-lg text-gray-300 mb-8">
          Join us for an extraordinary three-day symposium featuring cutting-edge technical presentations,
          workshops, and networking opportunities. Connect with industry experts, showcase your talents,
          and be part of the future of technology.
        </p>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-900/20 to-blue-900/20">
            <Calendar className="w-8 h-8 mb-4 mx-auto text-emerald-500" />
            <h3 className="font-bold mb-2">3 Days</h3>
            <p className="text-sm text-gray-400">Of Amazing Content</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-900/20 to-blue-900/20">
            <MapPin className="w-8 h-8 mb-4 mx-auto text-blue-500" />
            <h3 className="font-bold mb-2">Multiple Venues</h3>
            <p className="text-sm text-gray-400">Across Campus</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-emerald-900/20 to-blue-900/20">
            <Crown className="w-8 h-8 mb-4 mx-auto text-emerald-500" />
            <h3 className="font-bold mb-2">Expert Speakers</h3>
            <p className="text-sm text-gray-400">Industry Leaders</p>
          </div>
        </div>
      </div>
    </section>
  );
}