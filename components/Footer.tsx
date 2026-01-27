
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4">Mestres do Papel © 2024 - Todos os direitos reservados.</p>
        <p className="text-xs max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar provas reais e resultados.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">Políticas de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Suporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
