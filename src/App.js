import React, { useState } from 'react';
import './App.css'; 
import Calculadora from './components/Calculadora';
import Dashbord from './components/Dashbord'; 
import Contatos from './components/Contatos';

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCalculadora, setShowCalculadora] = useState(false);
  const [showContatos, setShowContatos] = useState(false); 

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowCalculadora(false);
    setShowContatos(false);
  };

  const handleCalculadoraClick = () => {
    setShowDashboard(false);
    setShowCalculadora(true);
    setShowContatos(false);
  };

  const handleContatosClick = () => {
    setShowDashboard(false);
    setShowCalculadora(false);
    setShowContatos(true); // Ative a exibição dos contatos ao clicar no link
  };

  return (
    <div className="app">
      {!showDashboard && !showCalculadora && !showContatos && (
        <>
          <header className="header">
            <h1>Página Inicial</h1>
            <nav>
              <ul>
                <li><a href="#contato" onClick={handleContatosClick}>Contato</a></li>
                <li><a href="#calculadora" onClick={handleCalculadoraClick}>Calculadora</a></li>
                <li><a href="#dashbord" onClick={handleDashboardClick}>DashBord</a></li>
                <li><a href="#servicos">Serviços</a></li>
              </ul>
            </nav>
          </header>

          <main className="main-content">
            <section id="sobre" className="section">
              <h2></h2>
              <p></p>
            </section>

            <section id="servicos" className="section">
              <h2></h2>
              <p></p>
            </section>

            <section id="contato" className="section">
              {showContatos && <Contatos />}
            </section>
          </main>

          <footer className="footer">
            <p>© Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
          </footer>
        </>
      )}

      {showDashboard && <Dashbord />} 
      {showCalculadora && <Calculadora />} 
    </div>
  );
};

export default App;
