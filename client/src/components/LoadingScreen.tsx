import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start the stroke animation and complete after 4 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="welcome-container">
        <svg 
          className="welcome-svg" 
          width="400" 
          height="80" 
          viewBox="0 0 400 80" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Welcome text as stroke paths */}
          <g className="welcome-text" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* W */}
            <path className="letter letter-w" d="M20 20 L25 60 L30 40 L35 60 L40 20" pathLength="100" />
            
            {/* e */}
            <path className="letter letter-e1" d="M50 40 L70 40 M50 40 C50 30, 70 30, 70 40 C70 50, 50 50, 50 40" pathLength="100" />
            
            {/* l */}
            <path className="letter letter-l1" d="M80 20 L80 60" pathLength="100" />
            
            {/* c */}
            <path className="letter letter-c" d="M100 40 C100 30, 120 30, 120 40 C120 50, 100 50, 100 40" pathLength="100" />
            
            {/* o */}
            <path className="letter letter-o" d="M140 40 C140 30, 160 30, 160 40 C160 50, 140 50, 140 40 Z" pathLength="100" />
            
            {/* m */}
            <path className="letter letter-m" d="M180 60 L180 30 C180 30, 185 25, 190 30 L190 60 M190 30 C190 30, 195 25, 200 30 L200 60" pathLength="100" />
            
            {/* e */}
            <path className="letter letter-e2" d="M220 40 L240 40 M220 40 C220 30, 240 30, 240 40 C240 50, 220 50, 220 40" pathLength="100" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;