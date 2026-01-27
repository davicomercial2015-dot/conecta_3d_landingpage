
import React from 'react';

const Bonus: React.FC = () => {
  const bonuses = [
    { title: "50 Quebra-Cabeças", desc: "Desenvolva o raciocínio lógico espacial com desafios físicos.", icon: "🧩", val: "R$ 19,90" },
    { title: "100 Atividades", desc: "Desenhos para colorir e caligrafia divertida.", icon: "🎨", val: "R$ 27,00" },
    { title: "Atualizações", desc: "Novos moldes adicionados mensalmente sem custo extra.", icon: "⚡", val: "R$ 47,00" }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest">Oferta Acumulada</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4">Você ainda leva <span className="text-[#008080]">R$ 93,90</span> em bônus hoje:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-[2rem] relative group border-2 border-transparent hover:border-yellow-400 transition-all">
              <div className="text-xs font-bold text-gray-400 line-through mb-2">Valor original: {bonus.val}</div>
              <div className="text-5xl mb-6">{bonus.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{bonus.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{bonus.desc}</p>
              <div className="text-green-600 font-black uppercase tracking-tighter">Custo HOJE: R$ 0,00</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;
