import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemCard from "../components/ProblemCard";

const AttentionPage = () => {
  const simulatedData = {
    username: "João",
    problems: [
      { 
        id: 1, 
        title: "Esteira transportadora desalinhada", 
        reportedBy: "Luiz", 
        description: "A esteira acabou de parar abruptamente. A correia está visivelmente fora da trilha, pressionando contra a lateral dos roletes e emitindo um ruído metálico irregular. Isso fez com que o fluxo de produção fosse interrompido, e algumas caixas começaram a se acumular. Essa falha desgasta a correia, e pode causar danos permanentes.", 
        image: "/esteira_desalinhada.png", 
        severity: "Moderada" 
      },
      { 
        id: 2, 
        title: "Vazamento de óleo na prensa hidráulica", 
        reportedBy: "Carlos", 
        description: "O operador relatou que a máquina perdeu pressão durante um ciclo de prensagem, e agora há uma poça de óleo acumulando-se na base da prensa. É possível ver o óleo escorrendo pelas mangueiras e conectores desgastados. A produção foi interrompida imediatamente, e a equipe de segurança isolou a área para evitar acidentes por derrapagem.", 
        image: "/vazamento_prensa.jpeg", 
        severity: "Grave" 
      },
      { 
        id: 3, 
        title: "Bateria deficiente na empilhadeira", 
        reportedBy: "Ana", 
        description: "A operadora tentou levantar um pallet pesado, mas a empilhadeira perdeu potência no meio da manobra e agora não consegue nem abaixar nem levantar a carga. As luzes de aviso no painel estão piscando indicando uma bateria crítica, mesmo após a recarga noturna. A produção está parada à espera de uma empilhadeira reserva.", 
        image: "/bateria_empilhadeira.jpg", 
        severity: "Baixa" 
      },
      { 
        id: 4, 
        title: "Desgaste excessivo em rolamento", 
        reportedBy: "Smart Trac", 
        description: "O sensor de vibração identificou um aumento significativo na frequência de vibrações anormais no eixo principal de uma máquina. A análise mostrou picos indicativos de desgaste ou dano severo em um rolamento, podendo causar uma parada repentina do equipamento, além do risco de superaquecimento, que pode iniciar incêncios, e uma potencial sobrecarga no sistema.", 
        image: "/rolamento_desgaste.jpg", 
        severity: "Gravíssima" 
      },
      { 
        id: 5, 
        title: "Desbalanceamento do Motor (Ventilador Industrial)", 
        reportedBy: "Smart Trac", 
        description: "Vibrações leves foram identificadas no motor de um ventilador utilizado para ventilação de ar ou exaustão. A origem provável é acúmulo de poeira ou pequenos desalinhamentos nas pás. Esse caso pode gerar um desgaste prematuro de componentes do motor.", 
        image: "/ventilador_falha.png", 
        severity: "Baixa" 
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
