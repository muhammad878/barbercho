import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center animate-bounce-gentle">
          <img src="/src/assets/logo.svg" alt="BarberCho" className="w-12 h-12" />
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-gradient">BarberCho</h2>
          <p className="text-neutral-600">Memuat pengalaman terbaik...</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-neutral-200 rounded-full mt-8 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
