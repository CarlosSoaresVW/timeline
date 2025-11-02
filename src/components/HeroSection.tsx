import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0C1A2B] transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#E7B872]/20 via-transparent to-transparent" />

      <div className="relative text-center px-6">
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#E7B872]/30 shadow-2xl shadow-[#E7B872]/20">
          <div className="w-full h-full bg-gradient-to-br from-[#E7B872]/30 to-[#0C1A2B] flex items-center justify-center">
            <span className="text-6xl">✨</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#0C1A2B]/60 backdrop-blur-sm rounded-lg" />
          <h1 className="relative text-4xl md:text-5xl font-bold text-[#F2F2F2] px-8 py-4 italic font-light">
            Em comemoração ao seu dia.
          </h1>
        </div>
      </div>
    </div>
  );
}
