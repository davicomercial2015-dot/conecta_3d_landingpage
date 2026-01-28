
import React from 'react';

const Benefits: React.FC = () => {
  const items = [
    { t: "Menos tela, mais presença", i: "📵" },
    { t: "Criança focada e ocupada", i: "🧠" },
    { t: "Solução para o dia corrido", i: "🃏" },
    { t: "Atividade em 15 minutos", i: "⏰" },
    { t: "Brincadeira com propósito", i: "🎯" }
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black text-center mb-10 md:mb-16">Impacto na sua rotina</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100">
              <span className="text-3xl">{item.i}</span>
              <span className="text-sm md:text-lg font-bold text-gray-800">{item.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
