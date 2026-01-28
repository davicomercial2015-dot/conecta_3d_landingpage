
import React from 'react';

const Identification: React.FC = () => {
  const painPoints = [
    { 
      title: "Excesso de Telas", 
      text: "O brilho constante dos vídeos curtos sobrecarrega o sistema nervoso da criança.", 
      icon: "📱" 
    },
    { 
      title: "Falta de Foco", 
      text: "Atividades digitais reduzem o tempo de concentração em tarefas reais.", 
      icon: "🧠" 
    },
    { 
      title: "Criatividade Limitada", 
      text: "Sem o estímulo do toque físico, a imaginação fica presa a cenários pré-prontos.", 
      icon: "💡" 
    },
    { 
      title: "Tédio Constante", 
      text: "Encontrar alternativas que prendam a atenção é um desafio para pais modernos.", 
      icon: "⏳" 
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-8 text-gray-900 leading-tight">
          Seu filho passa muito tempo em frente às <span className="text-red-600">telas?</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Sabemos que equilibrar o digital é um desafio. O excesso de estímulo virtual pode afetar o desenvolvimento natural.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
        {painPoints.map((item, index) => (
          <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-3xl mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-[#008080] text-white p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden text-center">
          <h3 className="text-xl md:text-3xl font-bold leading-relaxed relative z-10">
            "A solução é uma <span className="text-yellow-300 underline underline-offset-4">brincadeira manual</span> que estimula o desenvolvimento real."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Identification;
