import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C1A2B] relative overflow-hidden">
      <FloatingParticles />

      <HeroSection />

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;
