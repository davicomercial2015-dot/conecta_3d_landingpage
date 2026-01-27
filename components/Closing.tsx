
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
    <section className="py-24 bg-white px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-900">Você não precisa brigar com a tela.</h2>
        <p className="text-2xl text-gray-600 mb-12 font-medium">Você só precisa ter uma alternativa pronta.</p>
        
        <div className="bg-gray-50 p-10 rounded-[3rem] mb-12 text-left">
          <p className="text-xl font-bold mb-6 text-gray-900">Se você quer:</p>
          <ul className="space-y-4 mb-10">
            {['ver seu filho criando e brincando', 'ter uma atividade simples pro dia corrido', 'e ainda fortalecer valores em casa'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                <span className="text-green-500">✅</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-gray-900">Então clica no botão e veja as opções de acesso.</p>
        </div>

        <button 
          onClick={scrollToPricing}
          className="bg-green-600 hover:bg-green-700 text-white text-2xl md:text-3xl font-black py-8 px-12 rounded-[2rem] transition-all shadow-2xl hover:scale-[1.02] inline-block mb-6 cursor-pointer"
        >
          VER OPÇÕES DE ACESSO
        </button>
        <p className="text-gray-400 text-sm font-medium flex items-center justify-center gap-4">
          <span>🔒 compra segura</span>
          <span>🚀 acesso imediato</span>
          <span>🛡️ garantia 30 dias</span>
        </p>
      </div>
    </section>
  );
};

export default Closing;
