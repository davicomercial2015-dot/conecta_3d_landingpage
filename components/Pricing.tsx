
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">Escolha seu plano</h2>
        <p className="text-base md:text-xl text-gray-600">Acesso vitalício. <span className="font-bold">Pagamento único.</span></p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        
        {/* Card Essencial */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 border border-gray-100 shadow-xl flex flex-col">
          <div className="mb-6 md:mb-8">
            <span className="text-gray-400 font-black uppercase text-[10px] tracking-widest">O Básico</span>
            <h3 className="text-xl md:text-3xl font-bold mt-1">Plano Essencial</h3>
          </div>
          
          <div className="mb-6 md:mb-10">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold">R$</span>
              <span className="text-5xl md:text-6xl font-black tracking-tighter">10</span>
            </div>
          </div>

          <div className="space-y-4 mb-8 flex-1">
            {["200 Moldes 3D", "Manual Digital", "Acesso Vitalício"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500">✓</span> {item}
              </div>
            ))}
          </div>

          <button onClick={handleBasicClick} className="w-full bg-green-500 text-white font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg active:scale-95 cursor-pointer">
            QUERO O ESSENCIAL
          </button>
        </div>

        {/* Card Combo Mestre */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 border-4 border-green-600 shadow-2xl flex flex-col scale-[1.02] relative">
          <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1.5 font-black text-[8px] uppercase tracking-widest rounded-bl-xl shadow-md">RECOMENDADO</div>
          
          <div className="mb-6 md:mb-8">
            <span className="text-green-600 font-black uppercase text-[10px] tracking-widest">Completo</span>
            <h3 className="text-xl md:text-3xl font-bold mt-1">Combo Mestre 🏆</h3>
          </div>
          
          <div className="mb-6 md:mb-10">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-green-600">R$</span>
              <span className="text-6xl md:text-7xl font-black text-green-600 tracking-tighter">19</span>
            </div>
          </div>

          <div className="space-y-4 mb-8 flex-1">
            {["Tudo do Essencial", "100 Atividades Extras", "50 Quebra-Cabeças", "VIP Prioritário"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-bold">
                <span className="text-green-600">✓</span> {item}
              </div>
            ))}
          </div>

          <a href="https://www.ggcheckout.com/checkout/v5/6fZl5bbBTJr8cLY3kkzf" className="block w-full bg-green-600 text-white text-center font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg animate-pulse-slow">
            APROVEITAR COMBO ➜
          </a>
        </div>
      </div>

      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-10 text-center relative">
            <button onClick={() => setShowUpsell(false)} className="absolute top-4 right-4 text-gray-400 text-xl">✕</button>
            <h3 className="text-xl md:text-2xl font-black mb-4">ESPERA! Oferta Única...</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">Por apenas <span className="font-bold text-green-600">+ R$ 4,00</span>, você leva o Combo Completo com todos os bônus.</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.ggcheckout.com/checkout/v5/bBMmbg3VcTh6bTh7OWiU" className="bg-green-600 text-white font-black py-4 rounded-xl shadow-xl">QUERO O COMBO POR R$ 14</a>
              <a href="https://www.ggcheckout.com/checkout/v5/a1in5oH9lN7bt91ZRT8A" className="text-gray-400 text-xs font-bold underline">Apenas os 200 moldes por R$ 10</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
