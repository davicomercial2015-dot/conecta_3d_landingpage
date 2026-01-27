
import React, { useState } from 'react';

const Solution: React.FC = () => {
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

  const steps = [
    { title: "IMPRIMA", desc: "Modelos otimizados para impressoras caseiras comuns.", icon: "🖨️" },
    { title: "RECORTE", desc: "Linhas guias fáceis para mãos pequenas treinarem o corte.", icon: "✂️" },
    { title: "MONTE", desc: "Abas numeradas que ensinam lógica e encaixe 3D.", icon: "🏗️" },
    { title: "CRIE", desc: "Um mundo inteiro de bonecos, animais e veículos reais.", icon: "🎨" }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            <span className="text-[#008080]">Engenharia de Papel 3D</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Não entregamos apenas "desenhos". Entregamos um sistema de construção manual que ativa áreas do cérebro responsáveis pelo <span className="font-bold">raciocínio espacial</span> e <span className="font-bold">resolução de problemas</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-gray-50 p-10 rounded-[2.5rem] text-center border-2 border-transparent group-hover:border-[#008080] transition-all duration-300">
                <div className="text-5xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-2xl text-gray-300">➜</div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#003333] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                200 Moldes Profissionais em Alta Resolução
              </h3>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Você nunca mais vai ouvir "não tenho nada pra fazer". O conteúdo é vasto e dividido por categorias: heróis, dinossauros, carros de corrida, animais da selva e muito mais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                  <span className="text-2xl">📱</span>
                  <span>Acesso imediato via celular ou computador</span>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                  <span className="text-2xl">♾️</span>
                  <span>Imprima quantas vezes quiser (acesso vitalício)</span>
                </div>
              </div>
            </div>
            
            {/* Carousel Container - Ajuste de padding para mobile para evitar colisão dos arrows */}
            <div className="lg:w-1/2 w-full px-8 md:px-12">
              <div className="relative group">
                {/* Imagem com Proporção Aumentada no Mobile (aspect-square) */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20">
                  <div className="aspect-square sm:aspect-[4/3] relative">
                    <img 
                      src={carouselImages[currentImg]} 
                      className="w-full h-full object-cover transition-opacity duration-500" 
                      alt="Demonstração do produto" 
                    />
                  </div>
                </div>

                {/* Arrow Esquerdo (Fora da Imagem) */}
                <button 
                  onClick={prevImg}
                  className="absolute -left-6 md:-left-14 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white backdrop-blur-md text-white hover:text-[#003333] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/20 shadow-xl group-hover:scale-110 active:scale-95"
                  aria-label="Imagem anterior"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Arrow Direito (Fora da Imagem) */}
                <button 
                  onClick={nextImg}
                  className="absolute -right-6 md:-right-14 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white backdrop-blur-md text-white hover:text-[#003333] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-20 border border-white/20 shadow-xl group-hover:scale-110 active:scale-95"
                  aria-label="Próxima imagem"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores (Dots) */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImg(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentImg ? 'bg-white w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
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
