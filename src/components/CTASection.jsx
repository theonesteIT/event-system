export default function CTASection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Join Amazing Events?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Sign up today and get access to exclusive events and early bird pricing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Get Started Free
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
