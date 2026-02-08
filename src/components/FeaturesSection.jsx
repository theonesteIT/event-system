import { Search, Ticket, Bell, Users } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Discover Events',
    description: 'Find events that match your interests from our curated collection'
  },
  {
    icon: Ticket,
    title: 'Easy Booking',
    description: 'Secure your spot with our simple and fast registration process'
  },
  {
    icon: Bell,
    title: 'Get Notified',
    description: 'Receive updates about your events and never miss important information'
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Network with attendees and build meaningful connections'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless event discovery and registration with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
