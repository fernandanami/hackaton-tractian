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
        image: "/User.png", 
        severity: "Grave" 
      },
      { 
        id: 2, 
        title: "Problema 2", 
        reportedBy: "Carlos", 
        description: "Descrição do problema 2", 
        image: "/User.png", 
        severity: "Baixa" 
      },
      { 
        id: 3, 
        title: "Problema 3", 
        reportedBy: "Ana", 
        description: "Descrição do problema 3", 
        image: "/User.png", 
        severity: "Moderada" 
      },
      { 
        id: 4, 
        title: "Problema 4", 
        reportedBy: "Smart Trac", 
        description: "Descrição do problema 4", 
        image: "/User.png", 
        severity: "Gravíssima" 
      },
      { 
        id: 5, 
        title: "Problema 5", 
        reportedBy: "Carlos", 
        description: "Descrição do problema 5", 
        image: "/User.png", 
        severity: "Grave" 
      },
    ],
  };

  const { username, problems } = simulatedData;
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 4;

  // Define a prioridade da gravidade
  const severityPriority = ['Gravíssima', 'Grave', 'Moderada', 'Baixa'];

  // Ordenar os problemas por gravidade e, em caso de gravidade igual, por quem reportou
  const sortedProblems = problems.sort((a, b) => {
    const severityComparison = severityPriority.indexOf(a.severity) - severityPriority.indexOf(b.severity);
    
    if (severityComparison !== 0) {
      return severityComparison; // Retorna o resultado da comparação de gravidade
    }
    
    // Se a gravidade é a mesma, verifica quem reportou
    return (a.reportedBy === "Smart Trac" ? -1 : 1) - (b.reportedBy === "Smart Trac" ? -1 : 1);
  });

  // Calcular os problemas a serem exibidos na página atual
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = sortedProblems.slice(indexOfFirstProblem, indexOfLastProblem);

  // Navegação para a página de detalhes do problema
  const navigate = useNavigate();
  const handleProblemClick = (id) => {
    navigate(`/problem/${id}`);
  };

  // Calcular o número total de páginas
  const totalPages = Math.ceil(sortedProblems.length / problemsPerPage);

  return (
    <div className="p-8 bg-transparent border border-gray-300 rounded min-h-screen">
      <h2 className="text-2xl font-semibold text-black">
        Olá, {username}.
      </h2>
      <p className="text-gray-600 mb-4">
        {sortedProblems.length} precisam da sua atenção.
      </p>

      <div className="mt-6">
        {currentProblems.map(problem => (
          <div key={problem.id} onClick={() => handleProblemClick(problem.id)} className="cursor-pointer">
            <ProblemCard 
              image={problem.image}
              title={problem.title} 
              reportedBy={problem.reportedBy} 
              description={problem.description} 
              severity={problem.severity} // Passa a gravidade para o card
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
