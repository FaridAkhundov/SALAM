import { useState, useEffect } from 'react';
import { Sparkles, Shield, Lock, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'logo' | 'expanding' | 'revealing' | 'complete'>('logo');
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    // Stage 1: Show pulsing FA logo for 2.5 seconds
    const timer1 = setTimeout(() => {
      setStage('expanding');
    }, 2500);

    // Stage 2: Expand and transform for 2 seconds
    const timer2 = setTimeout(() => {
      setStage('revealing');
    }, 4500);

    // Stage 3: Reveal full name for 2.5 seconds
    const timer3 = setTimeout(() => {
      setStage('complete');
    }, 7000);

    // Stage 4: Fade out and complete
    const timer4 = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-light-gray via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          >
            <Sparkles className="w-2 h-2 text-blue-400/30 dark:text-blue-300/40" />
          </div>
        ))}
      </div>

      {/* Ripple Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-4 h-4 bg-blue-500/20 dark:bg-blue-400/30 rounded-full animate-ripple"></div>
        <div className="absolute w-4 h-4 bg-purple-500/20 dark:bg-purple-400/30 rounded-full animate-ripple animation-delay-1000"></div>
        <div className="absolute w-4 h-4 bg-indigo-500/20 dark:bg-indigo-400/30 rounded-full animate-ripple animation-delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative text-center z-10">
        {/* Stage 1: Pulsing FA Logo */}
        {stage === 'logo' && (
          <div className="animate-fade-in">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-40 h-40 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              
              {/* Main logo container */}
              <div className="relative w-36 h-36 mx-auto bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-logo-pulse">
                <span className="text-7xl font-bold text-white animate-glow">FA</span>
                
                {/* Floating icons around logo */}
                <div className="absolute -top-2 -left-2">
                  <Shield className="w-6 h-6 text-blue-300 animate-float animation-delay-400" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Lock className="w-5 h-5 text-purple-300 animate-float animation-delay-800" />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Zap className="w-6 h-6 text-indigo-300 animate-float animation-delay-1200" />
                </div>
              </div>
            </div>
            
            {/* Loading text */}
            <div className="mt-8">
              <p className="text-lg text-navy-light dark:text-blue-400 animate-pulse">
                Initializing Security Protocols...
              </p>
            </div>
          </div>
        )}

        {/* Stage 2: Logo Expanding and Transforming */}
        {stage === 'expanding' && (
          <div className="animate-fade-in">
            <div className="relative">
              {/* Expanding logo */}
              <div className="w-36 h-36 mx-auto bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-logo-expand">
                <span className="text-6xl font-bold text-white">FA</span>
              </div>
            </div>
            
            {/* System status */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-charcoal dark:text-gray-300">Authentication Systems Online</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
                <span className="text-sm text-charcoal dark:text-gray-300">Network Security Active</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-800"></div>
                <span className="text-sm text-charcoal dark:text-gray-300">Loading Portfolio Interface</span>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Name Revelation */}
        {stage === 'revealing' && (
          <div className="animate-fade-in">
            <div className="space-y-6">
              {/* Smaller logo */}
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">FA</span>
              </div>
              
              {/* Letter by letter revelation */}
              <div className="space-y-3">
                <h1 className="text-6xl font-bold text-navy dark:text-navy-light">
                  <span className="inline-block animate-letter-drop animation-delay-200">F</span>
                  <span className="inline-block animate-letter-drop animation-delay-400">a</span>
                  <span className="inline-block animate-letter-drop animation-delay-600">r</span>
                  <span className="inline-block animate-letter-drop animation-delay-800">i</span>
                  <span className="inline-block animate-letter-drop animation-delay-1000">d</span>
                </h1>
                <h2 className="text-4xl font-semibold text-navy-light dark:text-blue-400">
                  <span className="inline-block animate-letter-drop animation-delay-1200">A</span>
                  <span className="inline-block animate-letter-drop animation-delay-1300">k</span>
                  <span className="inline-block animate-letter-drop animation-delay-1400">h</span>
                  <span className="inline-block animate-letter-drop animation-delay-1500">u</span>
                  <span className="inline-block animate-letter-drop animation-delay-1600">n</span>
                  <span className="inline-block animate-letter-drop animation-delay-1700">d</span>
                  <span className="inline-block animate-letter-drop animation-delay-1800">o</span>
                  <span className="inline-block animate-letter-drop animation-delay-1900">v</span>
                </h2>
                
                {/* Professional title with typing effect */}
                <div className="mt-6">
                  <p className="text-xl text-charcoal dark:text-gray-300 animate-fade-in animation-delay-2000">
                    IT Professional & Cybersecurity Specialist
                  </p>
                  <p className="text-sm text-navy-light dark:text-blue-400 animate-fade-in animation-delay-2000 mt-2">
                    Securing Digital Infrastructures Since 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 4: Fade Out */}
        {stage === 'complete' && (
          <div className="animate-fade-in opacity-0 transition-opacity duration-1000">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">FA</span>
              </div>
              <h1 className="text-6xl font-bold text-navy dark:text-navy-light">Farid</h1>
              <h2 className="text-4xl font-semibold text-navy-light dark:text-blue-400">Akhundov</h2>
              <p className="text-xl text-charcoal dark:text-gray-300">Ready to Secure Your Digital World</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;