import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleArray: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 12 + Math.random() * 8,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute floating-particle"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          <Sparkles
            size={particle.size}
            className="text-[#E7B872] opacity-60"
            fill="#E7B872"
          />
        </div>
      ))}
    </div>
  );
}
