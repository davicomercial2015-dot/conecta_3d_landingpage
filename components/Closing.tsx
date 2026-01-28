
import React from 'react';

const Closing: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white px-4 border-t border-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black mb-4">Não brigue com a tela.</h2>
        <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-12">Tenha uma alternativa pronta.</p>
        
        <div className="bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-[3rem] mb-8 md:mb-12 text-left max-w-lg mx-auto">
          <ul className="space-y-3">
            {['Criança criando de verdade', 'Atividade simples e rápida', 'Fortalece valores em casa'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm md:text-lg font-bold">
                <span className="text-green-500">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={scrollToPricing} className="bg-green-600 text-white text-lg md:text-2xl font-black py-5 md:py-8 px-8 md:px-12 rounded-2xl md:rounded-[2rem] shadow-2xl active:scale-95 cursor-pointer">
          VER OPÇÕES DE ACESSO
        </button>
      </div>
    </section>
  );
};

export default Closing;
