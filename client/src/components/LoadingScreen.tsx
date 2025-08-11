import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'logo' | 'expanding' | 'complete'>('logo');

  useEffect(() => {
    // Stage 1: Show FA logo for 2 seconds
    const timer1 = setTimeout(() => {
      setStage('expanding');
    }, 2000);

    // Stage 2: Expand to full name for 1.5 seconds
    const timer2 = setTimeout(() => {
      setStage('complete');
    }, 3500);

    // Stage 3: Fade out and complete
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-light-gray via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-navy/10 dark:bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-300/20 dark:bg-purple-500/20 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-blue-400/10 dark:bg-blue-400/20 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main loading content */}
      <div className="relative text-center">
        {/* FA Logo Stage */}
        <div 
          className={`transition-all duration-1000 ${
            stage === 'logo' 
              ? 'opacity-100 transform scale-100' 
              : 'opacity-0 transform scale-75'
          } ${stage === 'expanding' || stage === 'complete' ? 'absolute inset-0' : ''}`}
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
            <span className="text-6xl font-bold text-white">FA</span>
          </div>
        </div>

        {/* Expanding Name Stage */}
        <div 
          className={`transition-all duration-1000 ${
            stage === 'expanding' 
              ? 'opacity-100 transform scale-100 translate-y-0' 
              : 'opacity-0 transform scale-90 translate-y-8'
          } ${stage === 'complete' ? 'absolute inset-0' : ''}`}
        >
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">FA</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-navy dark:text-navy-light">
                <span className="inline-block animate-fade-in">F</span>
                <span className="inline-block animate-fade-in animation-delay-200">a</span>
                <span className="inline-block animate-fade-in animation-delay-400">r</span>
                <span className="inline-block animate-fade-in animation-delay-600">i</span>
                <span className="inline-block animate-fade-in animation-delay-800">d</span>
              </h1>
              <h2 className="text-3xl font-semibold text-navy-light dark:text-blue-400">
                <span className="inline-block animate-fade-in animation-delay-1000">A</span>
                <span className="inline-block animate-fade-in animation-delay-1100">k</span>
                <span className="inline-block animate-fade-in animation-delay-1200">h</span>
                <span className="inline-block animate-fade-in animation-delay-1300">u</span>
                <span className="inline-block animate-fade-in animation-delay-1400">n</span>
                <span className="inline-block animate-fade-in animation-delay-1500">d</span>
                <span className="inline-block animate-fade-in animation-delay-1600">o</span>
                <span className="inline-block animate-fade-in animation-delay-1700">v</span>
              </h2>
              <p className="text-lg text-charcoal dark:text-gray-300 animate-fade-in animation-delay-2000">
                IT Professional & Cybersecurity Specialist
              </p>
            </div>
          </div>
        </div>

        {/* Fade out stage */}
        <div 
          className={`transition-all duration-1000 ${
            stage === 'complete' 
              ? 'opacity-0 transform scale-110' 
              : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-navy-light to-blue-600 dark:from-blue-500 dark:to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">FA</span>
            </div>
            <h1 className="text-5xl font-bold text-navy dark:text-navy-light mb-2">Farid</h1>
            <h2 className="text-3xl font-semibold text-navy-light dark:text-blue-400 mb-4">Akhundov</h2>
            <p className="text-lg text-charcoal dark:text-gray-300">IT Professional & Cybersecurity Specialist</p>
          </div>
        </div>

        {/* Loading indicator */}
        <div className={`mt-12 transition-opacity duration-500 ${stage === 'complete' ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-navy-light dark:bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-navy-light dark:bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-navy-light dark:bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;