
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-10">
          <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" className="w-40 h-40" alt="Selo Garantia" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Garantia incondicional de 30 dias</h2>
        <div className="text-xl text-gray-600 leading-relaxed max-w-2xl space-y-4">
          <p>Se por qualquer motivo você achar que não valeu a pena, é só pedir reembolso dentro de 30 dias.</p>
          <p className="text-gray-900 font-bold">Sem perguntas. Sem burocracia.</p>
          <p className="text-green-600 font-black text-2xl">Você testa sem risco.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
