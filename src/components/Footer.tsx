import { useRef } from 'react';
import { Play } from 'lucide-react';

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0C1A2B] to-[#050D16] py-16 md:py-24 border-t border-[#E7B872]/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E7B872] mb-6">
          Hoje
        </h2>

        <p className="text-[#F2F2F2] text-lg md:text-xl leading-relaxed mb-10 italic font-light max-w-2xl mx-auto">
          Hoje celebramos tudo o que você é, e tudo o que ainda será.
          Obrigado por trazer luz aos meus dias, inspirando e tornando cada momento incrível.
        </p>

        <button
          onClick={handlePlayMusic}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#E7B872] to-[#D4A562] text-[#0C1A2B] font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#E7B872]/30 hover:shadow-[#E7B872]/50 hover:scale-105 transition-all duration-300"
        >
          <Play size={20} className="group-hover:scale-110 transition-transform" fill="#0C1A2B" />
          <span>Taylor Swift - 22 🎵</span>
        </button>

        {/* 🎵 Player invisível */}
        <audio ref={audioRef} src="/musica.mp3" />

        <div className="mt-16 pt-8 border-t border-[#E7B872]/10">
          <p className="text-[#F2F2F2]/50 text-sm">
            Feito pelo seu amor Carlos ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
