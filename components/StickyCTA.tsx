
import React from 'react';

const StickyCTA: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-4 animate-bounce-in">
      <div className="max-w-xl mx-auto bg-white p-4 rounded-2xl shadow-2xl border-2 border-green-500 flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-xs text-gray-500 font-bold uppercase">Oferta por Tempo Limitado</p>
          <p className="text-xl font-black text-green-600">A partir de R$ 10,00</p>
        </div>
        <button 
          onClick={scrollToPricing}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          ESCOLHER MEU PLANO! 🚀
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
