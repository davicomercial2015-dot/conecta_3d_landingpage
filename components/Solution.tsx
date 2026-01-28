
import React, { useState, useEffect } from 'react';

const Solution: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);
  
  const carouselImages = [
    "https://i.imgur.com/6IAi37A.png",
    "https://i.imgur.com/ZD6xJyZ.png",
    "https://i.imgur.com/w3w16v4.png",
    "https://i.imgur.com/m6zSQCr.png",
    "https://i.imgur.com/BYON6YZ.png",
    "https://i.imgur.com/cZvadMA.png",
    "https://i.imgur.com/rTnusnE.png",
    "https://i.imgur.com/FaDFH5X.png",
    "https://i.imgur.com/qXCegaS.png"
  ];

  // Autoplay Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const steps = [
    { title: "IMPRIMA", desc: "Modelos para impressoras comuns.", icon: "🖨️" },
    { title: "RECORTE", desc: "Linhas guias fáceis de seguir.", icon: "✂️" },
    { title: "MONTE", desc: "Abas que ensinam lógica 3D.", icon: "🏗️" },
    { title: "CRIE", desc: "Um mundo real em suas mãos.", icon: "🎨" }
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-8">
            <span className="text-[#008080]">Engenharia de Papel 3D</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ative o <span className="font-bold">raciocínio espacial</span> e <span className="font-bold">resolução de problemas</span> de forma divertida.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-12 md:mb-24">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] text-center border border-gray-100">
              <div className="text-3xl md:text-5xl mb-3 md:mb-6">{step.icon}</div>
              <h3 className="text-sm md:text-xl font-black uppercase">{step.title}</h3>
              <p className="hidden md:block text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#003333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 leading-tight">
                200 Moldes Profissionais
              </h3>
              <p className="text-sm md:text-xl text-gray-300 mb-6 md:mb-10">
                Conteúdo vasto: heróis, dinossauros, carros e animais. Diversão que não acaba.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl text-xs md:text-base">
                  <span>📱</span> Acesso imediato pelo celular
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl text-xs md:text-base">
                  <span>♾️</span> Acesso vitalício (imprima sempre)
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full px-6 md:px-12">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                  <div className="aspect-square sm:aspect-[4/3] relative bg-white/5">
                    <img 
                      src={carouselImages[currentImg]} 
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out" 
                      alt="Demonstração do produto" 
                    />
                  </div>
                </div>

                <button 
                  onClick={prevImg} 
                  className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 border border-white/20 active:scale-90"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button 
                  onClick={nextImg} 
                  className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 border border-white/20 active:scale-90"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Dots Indicators */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImg(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImg ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
