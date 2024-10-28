import React from 'react';

const ProblemCard = ({ image, title, reportedBy, description, severity }) => (
  <div className="bg-transparent border border-black rounded-lg p-4 mb-6 flex">
    <img 
      src={image} 
      alt="Imagem do problema" 
      className="w-32 h-32 rounded mr-4"
    />
    <div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <div className="flex items-center">
        <img 
          src={reportedBy === "Smart Trac" ? "/Alert_Triangle.png" : "/User.png"} 
          alt="Ícone do usuário" 
          className="w-6 h-6 mr-2"
        />
        <p className="text-gray-600">Reportado por: {reportedBy}</p>
      </div>
      <p className="text-gray-700">{description}</p>
      <p className={`text-sm font-bold ${getSeverityColor(severity)}`}>Gravidade: {severity}</p>
    </div>
  </div>
);

// Função para determinar a cor da gravidade
const getSeverityColor = (severity) => {
  switch (severity) {
    case 'Baixa':
      return 'text-green-600';
    case 'Moderada':
      return 'text-yellow-600';
    case 'Grave':
      return 'text-orange-600';
    case 'Gravíssima':
      return 'text-red-600';
    default:
      return '';
  }
};

export default ProblemCard;
