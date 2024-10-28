import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center text-center"> {/* Flexbox para centralizar os elementos */}
        <img 
          src="/Icon.png" 
          alt="Ícone de sucesso" 
          className="mb-2 w-20 h-20" // Ajuste o tamanho conforme necessário
        />
        <h2 className="text-2xl font-semibold text-green-600">Problema reportado</h2>
      </div>
    </div>
  );
};

export default SuccessPage;
