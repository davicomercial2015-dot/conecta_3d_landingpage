
import React from 'react';

const Identification: React.FC = () => {
  const painPoints = [
    { 
      title: "Excesso de Estímulo Visual", 
      text: "O brilho constante das telas e a velocidade dos vídeos curtos podem sobrecarregar o sistema nervoso da criança.", 
      icon: "📱" 
    },
    { 
      title: "Dificuldade de Concentração", 
      text: "Atividades digitais passivas reduzem o tempo de foco em tarefas que exigem paciência e raciocínio lógico.", 
      icon: "🧠" 
    },
    { 
      title: "Necessidade de Criatividade", 
      text: "Sem o estímulo do toque e da construção física, a imaginação pode acabar limitada a cenários pré-prontos.", 
      icon: "💡" 
    },
    { 
      title: "Desafio do Tempo de Tela", 
      text: "Muitas famílias sentem dificuldade em encontrar alternativas que prendam a atenção tanto quanto os dispositivos eletrônicos.", 
      icon: "⏳" 
    }
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
          Seu filho passa muito tempo em frente às <span className="text-red-600">telas?</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Sabemos que equilibrar o mundo digital é um desafio constante para os pais modernos. O excesso de estímulos virtuais pode afetar o desenvolvimento natural da criança.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {painPoints.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-[#008080] text-white p-10 md:p-14 rounded-[3rem] shadow-xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold leading-relaxed relative z-10">
            "A solução é manter seu filho longe das telas com uma <span className="text-yellow-300 underline decoration-2 underline-offset-4">brincadeira manual e divertida</span> que estimula o desenvolvimento cerebral e cognitivo."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Identification;
