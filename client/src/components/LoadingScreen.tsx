import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'separating' | 'revealing' | 'complete'>('initial');
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

    // Stage 1: Initial FA fade-in (1 second)
    const timer1 = setTimeout(() => {
      setStage('separating');
    }, 1000);

    // Stage 2: F slides left, A slides right (1 second)
    const timer2 = setTimeout(() => {
      setStage('revealing');
    }, 2000);

    // Stage 3: Reveal full name between F and A (1.5 seconds)
    const timer3 = setTimeout(() => {
      setStage('complete');
    }, 3500);

    // Stage 4: Fade out and complete (0.5 seconds)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4000);

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
        {/* Stage 1: Initial FA Letters with Fade-in */}
        {stage === 'initial' && (
          <div className="animate-cinematic-fade-in">
            <h1 className="text-9xl font-bold text-white tracking-wider">
              <span className="inline-block animate-glow-soft">F</span>
              <span className="inline-block animate-glow-soft animation-delay-200">A</span>
            </h1>
          </div>
        )}

        {/* Stage 2: F slides left, A slides right */}
        {stage === 'separating' && (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="relative w-full max-w-4xl flex justify-between items-center">
              <span className="text-9xl font-bold text-white animate-slide-left-smooth">F</span>
              <span className="text-9xl font-bold text-white animate-slide-right-smooth">A</span>
            </div>
          </div>
        )}

        {/* Stage 3: Full Name Revealed Between F and A */}
        {stage === 'revealing' && (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="relative w-full max-w-6xl flex justify-between items-center">
              {/* F with "arid" */}
              <div className="flex items-baseline">
                <span className="text-8xl font-bold text-white/80">F</span>
                <span className="text-8xl font-bold text-white ml-1 animate-smooth-fade-in">arid</span>
              </div>
              
              {/* Center "Designed by" */}
              <div className="text-center space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60 font-light animate-smooth-fade-in animation-delay-300">
                  Designed by
                </p>
              </div>
              
              {/* A with "khundov" */}
              <div className="flex items-baseline">
                <span className="text-8xl font-bold text-white/80">A</span>
                <span className="text-8xl font-bold text-white ml-1 animate-smooth-fade-in animation-delay-200">khundov</span>
              </div>
            </div>
          </div>
        )}

        {/* Stage 4: Final Fade Out */}
        {stage === 'complete' && (
          <div className="animate-cinematic-fade-out">
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="relative w-full max-w-6xl flex justify-between items-center">
                {/* F with "arid" */}
                <div className="flex items-baseline">
                  <span className="text-8xl font-bold text-white/80">F</span>
                  <span className="text-8xl font-bold text-white ml-1">arid</span>
                </div>
                
                {/* Center "Designed by" */}
                <div className="text-center space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60 font-light">
                    Designed by
                  </p>
                </div>
                
                {/* A with "khundov" */}
                <div className="flex items-baseline">
                  <span className="text-8xl font-bold text-white/80">A</span>
                  <span className="text-8xl font-bold text-white ml-1">khundov</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;