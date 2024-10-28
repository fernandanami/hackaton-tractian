import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleReportProblemClick = () => {
    navigate('/form'); 
  };

  const handleAttentionPageClick = () => {
    navigate('/superior'); // Adicione esta função para navegar para a página de atenção
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="flex justify-end p-4">
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-black"
          onClick={handleAttentionPageClick} // Chama a função ao clicar
        >
          Atenção
        </button>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <img src="/tract_logo.png" alt="Logo" className="mb-16 w-1/6 h-auto" />
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Welcome to SmartTrac Buddy!</h2>
        <p className="text-gray-600 mb-6">Experience innovation with our trusted platform designed to meet your needs.</p>
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-black"
          onClick={handleReportProblemClick} 
        >
          Reporte um problema
        </button>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} SmartTrac Buddy. @ All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
