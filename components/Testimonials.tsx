
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Mariana Silva", role: "Mãe do Leo (6 anos)", text: "O Leo não soltava o tablet. Agora ele acorda querendo saber qual herói vamos montar hoje. Melhor investimento de R$ 10 que já fiz!", avatar: "https://i.pravatar.cc/150?u=mariana" },
    { name: "Prof. Ricardo", role: "Educador Infantil", text: "Uso em minhas aulas de artes. Os alunos ficam super engajados e trabalham a coordenação motora de forma lúdica. Recomendo muito!", avatar: "https://i.pravatar.cc/150?u=ricardo" },
    { name: "Juliana Santos", role: "Mãe da Clara (8 anos)", text: "O material é de excelente qualidade. Os moldes encaixam perfeitamente. A Clara já tem uma estante cheia de bonequinhos.", avatar: "https://i.pravatar.cc/150?u=juliana" }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          O que dizem os pais e educadores:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
              <div className="flex items-center gap-4 mb-4">
                <img src={rev.avatar} className="w-12 h-12 rounded-full border-2 border-green-500" alt={rev.name} />
                <div>
                  <p className="font-bold">{rev.name}</p>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-700 italic">"{rev.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
