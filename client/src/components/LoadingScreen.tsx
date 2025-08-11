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
            <div className="text-8xl font-medium text-white tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              FA
            </div>
          </div>
        )}

        {/* Stage 2: Moving and revealing */}
        {stage === 'moving' && (
          <div className="relative w-full h-32 flex items-center justify-center">
            <div className="relative text-8xl font-medium text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {/* Start with FA positioned as if centered, then animate to final positions */}
              <div className="inline-block">
                <span className="inline-block animate-f-slide-left">F</span>
                <span className="inline-block animate-letters-fade-in animation-delay-500">ərid</span>
                <span className="inline-block">&nbsp;</span>
                <span className="inline-block animate-a-slide-right">A</span>
                <span className="inline-block animate-letters-fade-in animation-delay-800">xundov</span>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Complete name */}
        {(stage === 'complete' || stage === 'fadeOut') && (
          <div className={`text-center ${stage === 'fadeOut' ? 'animate-minimal-fade-out' : ''}`}>
            <div className="text-8xl font-medium text-white tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Fərid Axundov
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;