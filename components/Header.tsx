
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-600 text-white text-center py-2 px-4 sticky top-0 z-50 shadow-md">
      <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2">
        <span className="animate-pulse">🔥</span> 
        OFERTA ÚNICA: 90% DE DESCONTO EXPIRA EM: 
        <span className="bg-white text-red-600 px-2 py-0.5 rounded ml-1 font-mono">{formatTime(timeLeft)}</span>
      </p>
    </div>
  );
};

export default Header;
