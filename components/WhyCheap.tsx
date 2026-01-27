
import React from 'react';

const WhyCheap: React.FC = () => {
  return (
    <section className="py-24 bg-[#008080]/5 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-10 italic text-gray-900">
          “Se é bom, por que custa só R$10?”
        </h2>
        <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-8 max-w-3xl mx-auto">
          <p>
            Porque eu prefiro colocar esse material na mão de mais famílias e professores, do que vender caro e deixar pouca gente acessar.
          </p>
          <p className="font-extrabold text-gray-900">
            Você paga pouco, testa sem riscos e ainda proporciona uma infância de qualidade para seus filhos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCheap;
