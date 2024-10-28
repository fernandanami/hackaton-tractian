import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemCard from "../components/ProblemCard";

const AttentionPage = () => {
  const simulatedData = {
    username: "João",
    problems: [
      { 
        id: 1, 
        title: "Problema 1", 
        reportedBy: "Smart Trac", 
        description: "Descrição do problema 1", 
        image: "/User.png" // Caminho para a imagem
      },
      { 
        id: 2, 
        title: "Problema 2", 
        reportedBy: "Carlos", 
        description: "Descrição do problema 2", 
        image: "/User.png" // Caminho para a imagem
      },
      { 
        id: 3, 
        title: "Problema 3", 
        reportedBy: "Ana", 
        description: "Descrição do problema 3", 
        image: "/User.png" // Caminho para a imagem
      },
      { 
        id: 4, 
        title: "Problema 4", 
        reportedBy: "Smart Trac", 
        description: "Descrição do problema 4", 
        image: "/User.png" // Caminho para a imagem
      },
      { 
        id: 5, 
        title: "Problema 5", 
        reportedBy: "Carlos", 
        description: "Descrição do problema 5", 
        image: "/User.png" // Caminho para a imagem
      },
    ],
  };

  const { username, problems } = simulatedData;
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 4;

  // Calcular os problemas a serem exibidos na página atual
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  // Navegação para a página de detalhes do problema
  const navigate = useNavigate();
  const handleProblemClick = (id) => {
    navigate(`/problem/${id}`); // Supondo que a rota para o problema é '/problem/:id'
  };

  // Calcular o número total de páginas
  const totalPages = Math.ceil(problems.length / problemsPerPage);

  return (
    <div className="p-8 bg-transparent border border-gray-300 rounded min-h-screen">
      <h2 className="text-2xl font-semibold text-black">
        Olá, {username}.
      </h2>
      <p className="text-gray-600 mb-4">
        {problems.length} precisam da sua atenção.
      </p>

      <div className="mt-6"> {/* Aumentando a margem superior para os cards */}
        {currentProblems.map(problem => (
          <div key={problem.id} onClick={() => handleProblemClick(problem.id)} className="cursor-pointer">
            <ProblemCard 
              image={"/Equipamento.png"} // Caminho direto para a imagem
              title={problem.title} 
              reportedBy={problem.reportedBy} 
              description={problem.description} 
            />
          </div>
        ))}
      </div>

      {/* Contador de Páginas */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => setCurrentPage(index + 1)} 
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'} rounded mx-1`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AttentionPage;
