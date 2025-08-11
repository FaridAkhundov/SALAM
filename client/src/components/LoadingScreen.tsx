import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'expanding' | 'revealing' | 'complete'>('initial');
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, direction: number}>>([]);

  useEffect(() => {
    // Generate random particles for premium background effect
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      direction: Math.random() > 0.5 ? 1 : -1
    }));
    setParticles(newParticles);

    // Stage 1: Initial FA fade-in with glow (1.5 seconds)
    const timer1 = setTimeout(() => {
      setStage('expanding');
    }, 1500);

    // Stage 2: Expand and transform (1 second)
    const timer2 = setTimeout(() => {
      setStage('revealing');
    }, 2500);

    // Stage 3: Reveal full name (1.5 seconds)
    const timer3 = setTimeout(() => {
      setStage('complete');
    }, 4000);

    // Stage 4: Fade out and complete (0.8 seconds)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Premium Light Streaks Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-light-streak animation-delay-500"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent animate-light-streak animation-delay-1200"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/6 to-transparent animate-light-streak animation-delay-1800"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-particle-drift"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDirection: particle.direction > 0 ? 'normal' : 'reverse'
            }}
          >
            <div className="w-1 h-1 bg-white/20 rounded-full animate-sparkle-subtle"></div>
          </div>
        ))}
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 50%, transparent 100%)'
      }}></div>

      {/* Main Content Container */}
      <div className="relative text-center z-10">
        {/* Stage 1: Initial FA Letters with Soft Glow */}
        {stage === 'initial' && (
          <div className="animate-cinematic-fade-in">
            <h1 className="text-9xl font-bold text-white tracking-wider">
              <span className="inline-block animate-glow-soft">F</span>
              <span className="inline-block animate-glow-soft animation-delay-200">A</span>
            </h1>
          </div>
        )}

        {/* Stage 2: Expanding and Transforming */}
        {stage === 'expanding' && (
          <div className="animate-cinematic-expand">
            <h1 className="text-9xl font-bold text-white tracking-wider transform scale-110">
              <span className="inline-block animate-letter-expand">F</span>
              <span className="inline-block animate-letter-expand animation-delay-100">A</span>
            </h1>
          </div>
        )}

        {/* Stage 3: Full Name Revelation */}
        {stage === 'revealing' && (
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-white tracking-wide">
              <span className="inline-block animate-letter-reveal animation-delay-200">F</span>
              <span className="inline-block animate-letter-reveal animation-delay-300">a</span>
              <span className="inline-block animate-letter-reveal animation-delay-400">r</span>
              <span className="inline-block animate-letter-reveal animation-delay-500">i</span>
              <span className="inline-block animate-letter-reveal animation-delay-600">d</span>
            </h1>
            <h2 className="text-5xl font-semibold text-white/90 tracking-wide">
              <span className="inline-block animate-letter-reveal animation-delay-800">A</span>
              <span className="inline-block animate-letter-reveal animation-delay-900">k</span>
              <span className="inline-block animate-letter-reveal animation-delay-1000">h</span>
              <span className="inline-block animate-letter-reveal animation-delay-1100">u</span>
              <span className="inline-block animate-letter-reveal animation-delay-1200">n</span>
              <span className="inline-block animate-letter-reveal animation-delay-1300">d</span>
              <span className="inline-block animate-letter-reveal animation-delay-1400">o</span>
              <span className="inline-block animate-letter-reveal animation-delay-1500">v</span>
            </h2>
          </div>
        )}

        {/* Stage 4: Final Fade Out */}
        {stage === 'complete' && (
          <div className="animate-cinematic-fade-out">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-white tracking-wide">Farid</h1>
              <h2 className="text-5xl font-semibold text-white/90 tracking-wide">Akhundov</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;