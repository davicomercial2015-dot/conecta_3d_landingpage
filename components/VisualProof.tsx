
import React from 'react';

const VisualProof: React.FC = () => {
  const images = [
    "https://i.imgur.com/Ut1TewG.png",
    "https://i.imgur.com/CejZBcA.png",
    "https://i.imgur.com/gHjKEgX.png",
    "https://i.imgur.com/ryoV8Aq.png"
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6">Veja o método na prática</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Brinquedos reais, criados por mãos reais. Deixe seu filho sentir o prazer de construir algo do zero.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl shadow-xl aspect-square bg-white border-4 border-white">
              <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Exemplo de brinquedo montado" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualProof;
