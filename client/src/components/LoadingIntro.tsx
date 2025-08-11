import { useState, useEffect } from 'react';

interface LoadingIntroProps {
  onComplete: () => void;
}

export default function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [stage, setStage] = useState(0);
  // Stage 0: Initial fade in of FA
  // Stage 1: FA visible with glow
  // Stage 2: FA morphs to full name
  // Stage 3: Full name visible
  // Stage 4: Fade out and complete

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStage(1), 500),   // FA appears
      setTimeout(() => setStage(2), 2000),  // Start morph
      setTimeout(() => setStage(3), 2800),  // Full name visible
      setTimeout(() => setStage(4), 4000),  // Start fade out
      setTimeout(() => onComplete(), 4800)  // Complete
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-all duration-800 ${
        stage === 4 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle light streaks */}
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-blue-300/25 to-transparent animate-pulse animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-0.5 h-0.5 bg-purple-400/50 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-blue-300/30 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 left-4/5 w-0.5 h-0.5 bg-indigo-400/40 rounded-full animate-float-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* FA initials (stages 0-1) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
            stage === 0 ? 'opacity-0 scale-95' : 
            stage === 1 ? 'opacity-100 scale-100' :
            stage >= 2 ? 'opacity-0 scale-105' : 'opacity-0'
          }`}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-white tracking-wider">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              FA
            </span>
          </h1>
          {/* Glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl md:text-9xl font-bold text-blue-400/20 blur-xl tracking-wider">
              FA
            </div>
          </div>
        </div>

        {/* Full name (stages 2-3) */}
        <div 
          className={`transition-all duration-1000 ${
            stage < 2 ? 'opacity-0 scale-95 translate-y-4' :
            stage === 2 ? 'opacity-50 scale-98 translate-y-2' :
            stage >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
              Farid Akhundov
            </span>
          </h1>
          {/* Subtle glow for full name */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-blue-400/10 blur-lg tracking-wide">
              Farid Akhundov
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        {stage < 4 && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 bg-blue-400/20 rounded-full animate-pulse animation-delay-4000"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}