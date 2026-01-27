
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);
  
  const carouselImages = [
    "https://i.imgur.com/CejZBcA.png",
    "https://i.imgur.com/Ut1TewG.png",
    "https://i.imgur.com/gHjKEgX.png",
    "https://i.imgur.com/ryoV8Aq.png"
  ];

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white pt-16 pb-24 px-4 overflow-hidden">
      {/* Elementos decorativos de papel ao fundo */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#008080" d="M40,-62C52.2,-54.2,62.5,-43.3,69.4,-30.5C76.3,-17.7,79.8,-3,76.8,10.2C73.8,23.3,64.2,35,53.2,44.9C42.2,54.8,29.8,62.9,16.4,66.1C3,69.3,-11.3,67.6,-25,62.7C-38.6,57.8,-51.6,49.7,-60.1,38.1C-68.5,26.5,-72.4,11.3,-71.4,-3.4C-70.4,-18.2,-64.5,-32.5,-55.1,-43.9C-45.7,-55.3,-32.8,-63.8,-19.7,-68.2C-6.6,-72.6,6.6,-72.9,19.7,-68.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Top Badge */}
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest shadow-sm">
          A Solução Anti-Telas n° 1 do Brasil
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-10">
          Troque o celular por <span className="text-[#008080]">200 Brinquedos</span> que seu filho mesmo constrói.
        </h1>

        {/* CARROSSEL MOBILE (Visível apenas em dispositivos móveis) */}
        <div className="block md:hidden mb-16 px-8 relative">
          <div className="relative group">
            {/* Imagem do Carrossel */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-square">
              <img 
                src={carouselImages[currentImg]} 
                className="w-full h-full object-cover transition-opacity duration-500" 
                alt="Demonstração do produto" 
              />
              {/* Price Badge flutuando sobre o carrossel no mobile */}
              <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-2 rounded-xl font-black shadow-2xl border-2 border-white animate-pulse z-30">
                <span className="block text-[8px] uppercase opacity-90 tracking-tighter leading-none">Apenas</span>
                <span className="text-lg">R$ 10,00</span>
              </div>
            </div>

            {/* Arrow Esquerdo */}
            <button 
              onClick={prevImg}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-[#003333] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-gray-200 shadow-xl active:scale-95"
              aria-label="Imagem anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Arrow Direito */}
            <button 
              onClick={nextImg}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-[#003333] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-gray-200 shadow-xl active:scale-95"
              aria-label="Próxima imagem"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {carouselImages.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImg(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImg ? 'bg-[#008080] w-6' : 'bg-gray-300 w-1.5'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* MOCKUP DESKTOP (Visível apenas em telas maiores) */}
        <div className="hidden md:block relative max-w-2xl mx-auto mb-12">
          <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://i.imgur.com/sUJkzNV.png" 
              alt="Combo Mestres do Papel - 200 Brinquedos 3D" 
              className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white object-contain w-full bg-white"
            />
            {/* Price Badge flutuando sobre a imagem */}
            <div className="absolute -bottom-4 -right-2 md:-right-8 bg-red-600 text-white p-5 md:p-6 rounded-2xl font-black shadow-2xl border-4 border-white animate-pulse z-20">
              <span className="block text-[10px] md:text-xs uppercase opacity-90 tracking-tighter">Acesso vitalício por</span>
              <span className="text-2xl md:text-4xl">R$ 10,00</span>
            </div>
          </div>
          {/* Glow effect atrás da imagem */}
          <div className="absolute -inset-10 bg-[#008080]/10 blur-[80px] rounded-full -z-0"></div>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Resgate a infância "mão na massa". Um arsenal de <span className="font-bold text-gray-800">Paper Toys 3D</span> prontos para imprimir, recortar e montar. Diversão real por menos do que um café.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={scrollToPricing}
            className="bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-black py-6 px-12 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(22,163,74,0.3)] cursor-pointer w-full md:w-auto"
          >
            LIBERAR ACESSO IMEDIATO
          </button>
          
          {/* Trust Checkmarks */}
          <p className="mt-4 text-gray-400 text-sm font-bold flex flex-wrap justify-center items-center gap-x-6 gap-y-2 uppercase tracking-tighter">
             <span className="flex items-center gap-1"><span className="text-green-500">✅</span> Download Instantâneo</span>
             <span className="flex items-center gap-1"><span className="text-green-500">✅</span> 200+ Modelos</span>
             <span className="flex items-center gap-1"><span className="text-green-500">✅</span> Pagamento Único</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
