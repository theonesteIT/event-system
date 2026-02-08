import { useState, useEffect } from 'react';
import { Calendar, MapPin, DollarSign, Users } from 'lucide-react';

export default function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'conference', 'workshop', 'concert', 'networking'];

  useEffect(() => {
    fetchEvents();
  }, []);

  // ✅ SAMPLE EVENTS (Mock Data)
  const fetchEvents = async () => {
    const demoEvents = [
      {
        id: 1,
        title: 'Tech Innovation Conference 2026',
        description: 'Explore the future of AI, blockchain, and cloud computing.',
        category: 'conference',
        date: '2026-03-15T09:00:00',
        location: 'Kigali Convention Center',
        price: 50,
        capacity: 300,
        image_url: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe'
      },
      {
        id: 2,
        title: 'Web Development Bootcamp',
        description: 'Hands-on workshop covering React, Node.js, and APIs.',
        category: 'workshop',
        date: '2026-02-20T10:00:00',
        location: 'Impact Hub Kigali',
        price: 0,
        capacity: 40,
        image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
      },
      {
        id: 3,
        title: 'Startup Networking Night',
        description: 'Meet founders, investors, and tech leaders.',
        category: 'networking',
        date: '2026-02-28T18:00:00',
        location: 'Norrsken House',
        price: 10,
        capacity: 120,
        image_url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
      },
      {
        id: 4,
        title: 'Live Music & Culture Concert',
        description: 'An unforgettable night of music and African culture.',
        category: 'concert',
        date: '2026-04-05T19:00:00',
        location: 'Amahoro Stadium',
        price: 25,
        capacity: 5000,
        image_url: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2'
      }
    ];

    setTimeout(() => {
      setEvents(demoEvents);
      setLoading(false);
    }, 800); // smooth loading
  };

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600">
            Discover events that match your passion 🚀
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> {event.location}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-1 font-semibold text-gray-800">
                    <DollarSign size={16} />
                    {event.price === 0 ? 'Free' : `$${event.price}`}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users size={16} /> {event.capacity}
                  </div>
                </div>

                <button
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500 mt-16 text-lg">
            No events available in this category.
          </p>
        )}
      </div>
    </section>
  );
}
