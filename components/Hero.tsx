
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
    <section className="relative bg-white pt-8 pb-16 md:pt-16 md:pb-24 px-4 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 md:opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#008080" d="M40,-62C52.2,-54.2,62.5,-43.3,69.4,-30.5C76.3,-17.7,79.8,-3,76.8,10.2C73.8,23.3,64.2,35,53.2,44.9C42.2,54.8,29.8,62.9,16.4,66.1C3,69.3,-11.3,67.6,-25,62.7C-38.6,57.8,-51.6,49.7,-60.1,38.1C-68.5,26.5,-72.4,11.3,-71.4,-3.4C-70.4,-18.2,-64.5,-32.5,-55.1,-43.9C-45.7,-55.3,-32.8,-63.8,-19.7,-68.2C-6.6,-72.6,6.6,-72.9,19.7,-68.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 md:mb-6 uppercase tracking-widest shadow-sm">
          A Solução Anti-Telas n° 1 do Brasil
        </span>

        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 md:mb-10">
          Troque o celular por <span className="text-[#008080]">200 Brinquedos</span> que seu filho mesmo constrói.
        </h1>

        {/* CARROSSEL MOBILE - Mais compacto entre Headline e Subheadline */}
        <div className="block md:hidden mb-8 px-6 relative max-w-sm mx-auto">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white aspect-square bg-gray-100">
              <img 
                src={carouselImages[currentImg]} 
                className="w-full h-full object-cover transition-opacity duration-500" 
                alt="Demonstração" 
              />
              <div className="absolute bottom-3 right-3 bg-red-600 text-white px-2 py-1.5 rounded-lg font-black shadow-lg border-2 border-white animate-pulse z-30">
                <span className="block text-[7px] uppercase leading-none opacity-90">Apenas</span>
                <span className="text-base leading-none">R$ 10</span>
              </div>
            </div>

            <button 
              onClick={prevImg}
              className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#003333] w-9 h-9 rounded-full flex items-center justify-center z-20 border border-gray-100 shadow-lg active:scale-90"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button 
              onClick={nextImg}
              className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#003333] w-9 h-9 rounded-full flex items-center justify-center z-20 border border-gray-100 shadow-lg active:scale-90"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* MOCKUP DESKTOP */}
        <div className="hidden md:block relative max-w-2xl mx-auto mb-12">
          <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://i.imgur.com/sUJkzNV.png" 
              alt="Combo Mestres do Papel" 
              className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white object-contain w-full bg-white"
            />
            <div className="absolute -bottom-4 -right-8 bg-red-600 text-white p-6 rounded-2xl font-black shadow-2xl border-4 border-white animate-pulse z-20">
              <span className="block text-xs uppercase opacity-90 tracking-tighter">Acesso vitalício por</span>
              <span className="text-4xl">R$ 10,00</span>
            </div>
          </div>
          <div className="absolute -inset-10 bg-[#008080]/10 blur-[80px] rounded-full -z-0"></div>
        </div>

        <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Resgate a infância "mão na massa". Um arsenal de <span className="font-bold text-gray-800">Paper Toys 3D</span> prontos para imprimir e montar. Diversão real por menos do que um café.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={scrollToPricing}
            className="bg-green-600 hover:bg-green-700 text-white text-lg md:text-2xl font-black py-5 md:py-6 px-10 md:px-12 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer w-full max-w-md md:w-auto"
          >
            LIBERAR ACESSO IMEDIATO
          </button>
          <p className="mt-2 text-gray-400 text-[10px] md:text-sm font-bold flex flex-wrap justify-center items-center gap-x-4 gap-y-1 uppercase tracking-tighter">
             <span className="flex items-center gap-1"><span className="text-green-500 text-xs">✅</span> Download Instantâneo</span>
             <span className="flex items-center gap-1"><span className="text-green-500 text-xs">✅</span> 200+ Modelos</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
