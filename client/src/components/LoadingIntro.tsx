import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface LoadingIntroProps {
  onComplete: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [stage, setStage] = useState(0);
  // Stage 0: Particle formation
  // Stage 1: FA monogram appears
  // Stage 2: FA scale and glow
  // Stage 3: Shield icon appears
  // Stage 4: Full name appears
  // Stage 5: Fade out

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage(1), 600),   // FA particles form
      setTimeout(() => setStage(2), 1200),  // FA visible and scales
      setTimeout(() => setStage(3), 2000),  // Shield appears
      setTimeout(() => setStage(4), 2800),  // Full name appears
      setTimeout(() => setStage(5), 4000),  // Start fade out
      setTimeout(() => onComplete(), 4800)  // Complete
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 0.8,
    duration: 0.8 + Math.random() * 0.4
  }));

  return (
    <div 
      style={{ backgroundColor: '#F8F9FA' }}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${
        stage === 5 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Circuit background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 10 L10 0 L20 0 L20 10 L10 10 L10 20" 
                    fill="none" 
                    stroke="#347AE2" 
                    strokeWidth="0.3"/>
              <circle cx="10" cy="10" r="1" fill="#2C3E50" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating tech particles */}
      {stage >= 1 && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute w-1 h-1 rounded-full transition-all ${
                stage >= 1 ? 'animate-tech-float' : 'opacity-0'
              }`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                backgroundColor: '#347AE2',
                opacity: 0.3,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main content container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Particle formation effect for FA */}
        {stage === 0 && (
          <div className="relative">
            <svg width="240" height="120" viewBox="0 0 240 120" className="animate-particle-form">
              {/* F letter particles */}
              {Array.from({ length: 25 }, (_, i) => (
                <circle
                  key={`f-${i}`}
                  cx={20 + (i % 5) * 8}
                  cy={20 + Math.floor(i / 5) * 8}
                  r="2"
                  fill="#347AE2"
                  opacity="0.8"
                  className="animate-particle-gather"
                  style={{
                    animationDelay: `${i * 0.05}s`
                  }}
                />
              ))}
              {/* A letter particles */}
              {Array.from({ length: 25 }, (_, i) => (
                <circle
                  key={`a-${i}`}
                  cx={140 + (i % 5) * 8}
                  cy={20 + Math.floor(i / 5) * 8}
                  r="2"
                  fill="#347AE2"
                  opacity="0.8"
                  className="animate-particle-gather"
                  style={{
                    animationDelay: `${(i + 25) * 0.05}s`
                  }}
                />
              ))}
            </svg>
          </div>
        )}

        {/* FA Monogram */}
        <div 
          className={`relative transition-all duration-1000 ${
            stage === 0 ? 'opacity-0 scale-50' :
            stage === 1 ? 'opacity-100 scale-100' :
            stage === 2 ? 'opacity-100 scale-110' :
            stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0'
          }`}
        >
          <svg width="200" height="100" viewBox="0 0 200 100" className="drop-shadow-2xl">
            {/* F letter with modern styling */}
            <path
              d="M20 20 L20 80 M20 20 L60 20 M20 45 L50 45"
              stroke="#347AE2"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={stage >= 1 ? 'animate-draw-letter' : ''}
            />
            
            {/* A letter with modern styling */}
            <path
              d="M120 80 L140 20 L160 80 M130 55 L150 55"
              stroke="#347AE2"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={stage >= 1 ? 'animate-draw-letter' : ''}
              style={{ animationDelay: '0.3s' }}
            />

            {/* Tech accent lines */}
            {stage >= 2 && (
              <>
                <line
                  x1="65"
                  y1="20"
                  x2="115"
                  y2="20"
                  stroke="#2C3E50"
                  strokeWidth="2"
                  className="animate-tech-line"
                />
                <line
                  x1="85"
                  y1="15"
                  x2="95"
                  y2="15"
                  stroke="#2C3E50"
                  strokeWidth="1"
                  className="animate-tech-line"
                  style={{ animationDelay: '0.2s' }}
                />
              </>
            )}

            {/* Circuit connection points */}
            {stage >= 2 && (
              <>
                <circle cx="20" cy="20" r="3" fill="#2C3E50" className="animate-pulse-tech"/>
                <circle cx="160" cy="80" r="3" fill="#2C3E50" className="animate-pulse-tech" style={{ animationDelay: '0.5s' }}/>
              </>
            )}
          </svg>

          {/* Glow effect */}
          {stage >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="200" height="100" viewBox="0 0 200 100" className="blur-sm opacity-50">
                <path
                  d="M20 20 L20 80 M20 20 L60 20 M20 45 L50 45"
                  stroke="#347AE2"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M120 80 L140 20 L160 80 M130 55 L150 55"
                  stroke="#347AE2"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Shield Icon */}
        {stage >= 3 && (
          <div 
            className={`mt-4 transition-all duration-800 ${
              stage === 3 ? 'opacity-0 scale-50' :
              stage >= 4 ? 'opacity-100 scale-100' : 'opacity-0'
            }`}
          >
            <div className="relative">
              <Shield 
                size={32} 
                className="text-[#2C3E50] animate-shield-appear"
                fill="currentColor"
              />
              <div className="absolute inset-0">
                <Shield 
                  size={32} 
                  className="text-[#347AE2] opacity-30 blur-sm animate-pulse"
                />
              </div>
            </div>
          </div>
        )}

        {/* Full name */}
        {stage >= 4 && (
          <div 
            className={`mt-6 transition-all duration-1000 ${
              stage === 4 ? 'opacity-0 translate-y-4' :
              stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0'
            }`}
          >
            <h1 
              className="text-3xl md:text-4xl font-bold tracking-wide"
              style={{ color: '#2C3E50' }}
            >
              Farid Akhundov
            </h1>
            <div 
              className="text-sm md:text-base font-medium mt-2 tracking-wider opacity-70"
              style={{ color: '#347AE2' }}
            >
              CYBERSECURITY SPECIALIST
            </div>
          </div>
        )}

        {/* Loading dots */}
        {stage < 5 && (
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full animate-loading-dot"
                style={{ backgroundColor: '#347AE2' }}
              />
              <div 
                className="w-2 h-2 rounded-full animate-loading-dot"
                style={{ 
                  backgroundColor: '#347AE2',
                  animationDelay: '0.2s'
                }}
              />
              <div 
                className="w-2 h-2 rounded-full animate-loading-dot"
                style={{ 
                  backgroundColor: '#347AE2',
                  animationDelay: '0.4s'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}