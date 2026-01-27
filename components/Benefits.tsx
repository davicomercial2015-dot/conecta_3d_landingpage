
import React from 'react';

const Benefits: React.FC = () => {
  const items = [
    { t: "Menos tela, mais presença", i: "📵" },
    { t: "Criança ocupada com algo que desenvolve", i: "🧠" },
    { t: "Você ganha uma “carta na manga” pro dia corrido", i: "🃏" },
    { t: "Atividade que cabe em 15 minutos", i: "⏰" },
    { t: "Brincadeira com propósito", i: "🎯" }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">O que muda na sua casa (ou na sua aula)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-4xl">{item.i}</span>
              <span className="text-lg font-bold text-gray-800 leading-tight">{item.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
