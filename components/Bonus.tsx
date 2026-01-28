
import React from 'react';

const Bonus: React.FC = () => {
  const bonuses = [
    { title: "50 Quebra-Cabeças", desc: "Desenvolva o raciocínio físico.", icon: "🧩" },
    { title: "100 Atividades", desc: "Desenhos e caligrafia divertida.", icon: "🎨" },
    { title: "Atualizações", desc: "Novos moldes todo mês.", icon: "⚡" }
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">Oferta Acumulada</span>
          <h2 className="text-2xl md:text-5xl font-black mt-4">Leve <span className="text-[#008080]">R$ 93,90</span> em bônus hoje:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl relative border border-gray-100">
              <div className="text-3xl md:text-5xl mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{bonus.desc}</p>
              <div className="text-green-600 font-black text-sm uppercase tracking-tighter">Custo HOJE: R$ 0,00</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;
