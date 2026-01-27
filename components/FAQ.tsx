
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Como eu vou receber os brinquedos?", a: "Imediatamente após a confirmação do pagamento, você receberá um link no seu e-mail e no seu WhatsApp para baixar todos os arquivos em PDF." },
    { q: "Preciso de alguma ferramenta especial?", a: "Não! Apenas uma impressora, papel comum (ou de gramatura maior para melhor firmeza), tesoura e cola branca." },
    { q: "Posso imprimir quantas vezes quiser?", a: "Sim! O acesso é vitalício. Se o brinquedo amassar ou estragar, basta imprimir novamente." },
    { q: "Os brinquedos são só para crianças pequenas?", a: "Não! Temos moldes com diferentes níveis de dificuldade. Desde crianças de 4 anos (com ajuda) até adolescentes e colecionadores que amam Paper Toys." },
    { q: "Quais são as formas de pagamento?", a: "Aceitamos Cartão de Crédito (liberação imediata), Pix (liberação imediata) e Boleto (até 3 dias para compensar)." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{faq.q}</span>
                <span className="text-2xl text-[#008080]">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
