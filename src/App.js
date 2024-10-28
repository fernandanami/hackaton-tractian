import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import FormPage from './pages/formularioInicialPage'; 
import ConfirmationPage from './pages/confirmationPage';
import AttentionPage from './pages/superiorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} /> 
        <Route path="/confirmation" element={<ConfirmationPage />} /> 
        <Route path="/superior" element={<AttentionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
