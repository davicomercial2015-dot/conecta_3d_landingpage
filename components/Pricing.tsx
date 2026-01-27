
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowUpsell(true);
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 px-4 relative overflow-hidden">
      {/* Decoração sutil de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-24 left-10 w-64 h-64 bg-[#008080]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
          Escolha o seu plano e comece agora
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          Acesso vitalício com <span className="text-gray-900 font-bold underline decoration-green-500">pagamento único</span>. Não é assinatura.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative z-10">
        
        {/* Card Essencial - R$ 10 */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col p-8 md:p-12 transition-all hover:shadow-2xl duration-300">
          <div className="mb-8">
            <span className="text-gray-400 font-black uppercase text-xs tracking-[0.2em]">O Básico Necessário</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Plano Essencial</h3>
          </div>
          
          <div className="mb-10">
            <p className="text-gray-400 line-through text-sm font-bold">De R$ 37,00</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900">R$</span>
              <span className="text-6xl font-black text-gray-900 tracking-tighter">10</span>
              <span className="text-gray-500 font-bold ml-2">/único</span>
            </div>
          </div>

          <div className="space-y-5 mb-12 flex-1">
            {[
              "200 Moldes 3D em Alta Resolução",
              "Manual de Montagem Digital",
              "Acesso Vitalício Garantido",
              "Suporte via E-mail",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <div className="bg-green-50 p-1 rounded-full">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              <span className="line-through text-sm">Pacotes de Bônus Extras</span>
            </div>
          </div>

          <button 
            onClick={handleBasicClick}
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-black py-6 rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            QUERO O ESSENCIAL
          </button>
          <p className="mt-4 text-center text-[11px] font-bold text-gray-400 italic leading-tight">
            Antes de comprar, temos uma oferta ainda mais <span className="text-green-600 uppercase">vantajosa</span> pra você abaixo 👇
          </p>
        </div>

        {/* Card Combo Mestre - R$ 19 */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-green-600 flex flex-col p-8 md:p-12 transition-all hover:shadow-[0_20px_60px_rgba(22,163,74,0.2)] scale-[1.02] md:scale-[1.05] duration-300 relative overflow-hidden z-20">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-green-600 text-white px-8 py-2 font-black text-[10px] uppercase tracking-widest rounded-bl-2xl shadow-md">
            MELHOR CUSTO-BENEFÍCIO
          </div>
          
          <div className="mb-8">
            <span className="text-green-600 font-black uppercase text-xs tracking-[0.2em]">O Mais Completo</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">Combo Mestre 🏆</h3>
          </div>
          
          <div className="mb-10">
            <p className="text-green-600/50 line-through text-sm font-bold">De R$ 97,00</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-green-600">R$</span>
              <span className="text-7xl font-black text-green-600 tracking-tighter">19</span>
              <span className="text-green-600/70 font-bold ml-2">/único</span>
            </div>
          </div>

          <div className="space-y-5 mb-12 flex-1">
            {[
              "Tudo do Plano Essencial",
              "Manual VIP Ilustrado Passo a Passo",
              "BÔNUS: 100 Atividades Extras",
              "BÔNUS: 50 Quebra-Cabeças 3D",
              "BÔNUS: Atualizações Mensais",
              "Suporte Prioritário VIP",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-green-600 p-1.5 rounded-full shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <span className="text-gray-900 font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <a 
              href="https://www.ggcheckout.com/checkout/v5/6fZl5bbBTJr8cLY3kkzf" 
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center text-xl font-black py-7 rounded-2xl transition-all shadow-[0_10px_20px_rgba(22,163,74,0.3)] active:scale-95 animate-pulse-slow"
            >
              APROVEITAR COMBO COMPLETO ➜
            </a>
            <div className="absolute -top-3 -right-2 bg-yellow-400 text-gray-900 text-[10px] font-black px-2 py-1 rounded-lg rotate-12 shadow-md">
              80% OFF
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase tracking-tight">
            ⚡ Entrega imediata via E-mail e WhatsApp
          </p>
        </div>
      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowUpsell(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 text-2xl"
            >
              ✕
            </button>
            
            <div className="bg-yellow-400 p-4 text-center">
              <p className="font-black text-xs uppercase tracking-widest text-gray-900 italic">⚠️ Oferta Única e Exclusiva ⚠️</p>
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                ESPERA! Não leve apenas o básico...
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Por apenas <span className="font-bold text-green-600">mais R$ 4,00</span>, você leva o Combo Completo com todos os bônus inclusos.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-8 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="font-bold text-sm text-gray-800">+100 Atividades Extras</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="font-bold text-sm text-gray-800">+50 Quebra-Cabeças 3D</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600">✅</span>
                  <span className="font-bold text-sm text-gray-800">Manual VIP Passo a Passo</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.ggcheckout.com/checkout/v5/bBMmbg3VcTh6bTh7OWiU"
                  className="bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-2xl text-xl transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  SIM! QUERO O COMBO POR R$ 14
                </a>
                
                <a 
                  href="https://www.ggcheckout.com/checkout/v5/a1in5oH9lN7bt91ZRT8A"
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold underline decoration-gray-200"
                >
                  Não, quero apenas os 200 moldes por R$ 10
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Essa oferta não aparecerá novamente</p>
            </div>
          </div>
        </div>
      )}

      {/* Trust Badges */}
      <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale pointer-events-none">
        <img src="https://logospng.org/download/pix/logo-pix-1024.png" className="h-6 object-contain" alt="Pix" />
        <img src="https://logospng.org/download/visa/logo-visa-4096.png" className="h-6 object-contain" alt="Visa" />
        <img src="https://logospng.org/download/mastercard/logo-mastercard-4096.png" className="h-6 object-contain" alt="Mastercard" />
        <img src="https://logospng.org/download/mercadopago/logo-mercadopago-1024.png" className="h-6 object-contain" alt="Mercado Pago" />
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
