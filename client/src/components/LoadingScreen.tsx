import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'moving' | 'complete' | 'fadeOut'>('initial');

  useEffect(() => {
    // Stage 1: Show FA centered (0.5s)
    const timer1 = setTimeout(() => {
      setStage('moving');
    }, 500);

    // Stage 2: F moves right, A moves down, letters fade in (2s)
    const timer2 = setTimeout(() => {
      setStage('complete');
    }, 2500);

    // Stage 3: Hold complete name (0.5s)
    const timer3 = setTimeout(() => {
      setStage('fadeOut');
    }, 3000);

    // Stage 4: Fade out and load website (0.3s)
    const timer4 = setTimeout(() => {
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
      <div className="relative">
        {/* Stage 1: Initial FA centered */}
        {stage === 'initial' && (
          <div className="text-center">
            <div className="text-8xl font-thin text-white tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              FA
            </div>
          </div>
        )}

        {/* Stage 2: Moving and revealing */}
        {stage === 'moving' && (
          <div className="relative">
            <div className="flex flex-col items-center space-y-4">
              {/* Farid line */}
              <div className="flex items-center">
                <span 
                  className="text-8xl font-thin text-white animate-f-slide-right" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  F
                </span>
                <span 
                  className="text-8xl font-thin text-white animate-letters-fade-in"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  ərid
                </span>
              </div>
              
              {/* Akhundov line */}
              <div className="flex items-center">
                <span 
                  className="text-8xl font-thin text-white animate-a-slide-down" 
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  A
                </span>
                <span 
                  className="text-8xl font-thin text-white animate-letters-fade-in animation-delay-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  xundov
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Complete name */}
        {(stage === 'complete' || stage === 'fadeOut') && (
          <div className={`text-center ${stage === 'fadeOut' ? 'animate-minimal-fade-out' : ''}`}>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-8xl font-thin text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Fərid
              </div>
              <div className="text-8xl font-thin text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Axundov
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;