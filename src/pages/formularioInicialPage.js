import React, { useState, useEffect } from 'react';
import InputField from '../components/NormalInputField'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [severity, setSeverity] = useState(''); // Estado para a gravidade
  const navigate = useNavigate(); // Hook para navegação

  // Simulação de dados que poderiam vir do backend
  const dataFromBackend = [
    'York',
    'Yorka',
    'Yorke',
    'Yorkaholik',
    'Yore',
    'Yoran',
    'Yori',
    'Yorm',
    'Teste',
    'Testa'
  ];

  // Filtra as opções com base no termo de pesquisa
  useEffect(() => {
    const filtered = dataFromBackend.filter(option =>
      option.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInput1Change = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInputValue2(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setFilteredOptions([]);
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio de formulário

    const formData = {
      nome: inputValue1,
      equipamento: searchTerm,
      falha: inputValue2,
      gravidade: severity, // Adiciona a gravidade ao formData
    };

    // Aqui você faria a requisição ao backend
    try {
      // Substitua pela sua requisição real
      // await fetch('YOUR_BACKEND_URL', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Navegar para a página de confirmação após o envio bem-sucedido
      navigate('/confirmation'); // Ajuste o caminho conforme necessário
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 max-w-md w-full"> {/* Define a largura máxima e centraliza */}
        <h2 className="text-2xl font-semibold text-black mb-4 text-center">Preencha o relatório</h2>
        
        <form onSubmit={handleSubmit}> {/* Adicione a tag de formulário */}
          <InputField 
            label="Nome"
            placeholder="Insira seu nome"
            value={inputValue1}
            onChange={handleInput1Change}
          />

          <div className="mb-4">
            <label className="block text-black mb-2">Equipamento</label>
            <input
              type="text"
              placeholder="Procure pelo equipamento desejado"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition duration-200"
            />
            {searchTerm && filteredOptions.length > 0 && ( // Mostra o dropdown apenas se houver texto no campo e opções filtradas
              <ul className="border border-gray-300 rounded-lg mt-2 max-h-60 overflow-auto">
                {filteredOptions.map((option, index) => (
                  <li 
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer hover:bg-blue-100 p-2"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <InputField 
            label="Falha"
            placeholder="O que aconteceu com o equipamento?"
            value={inputValue2}
            onChange={handleInput2Change}
          />

          <div className="mb-4">
            <label className="block text-black mb-2">Gravidade do Problema</label>
            <select
              value={severity}
              onChange={handleSeverityChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition duration-200"
            >
              <option value="">Selecione a gravidade</option>
              <option value="Baixa">Baixa</option>
              <option value="Moderada">Moderada</option>
              <option value="Grave">Grave</option>
              <option value="Gravíssima">Gravíssima</option>
            </select>
          </div>

          <div className="text-center"> {/* Centraliza o botão */}
            <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-blue-700">
              Submeter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
