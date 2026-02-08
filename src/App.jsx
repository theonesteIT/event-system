import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import EventsSection from './components/EventsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
