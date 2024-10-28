import React from 'react';

const ProblemCard = ({ image, title, reportedBy, description }) => (
  <div className="bg-transparent border border-black rounded-lg p-4 mb-6 flex"> {/* Margem inferior aumentada */}
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
    </div>
  </div>
);

export default ProblemCard;
