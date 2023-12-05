import React, { useState } from 'react';
import './App.css'; 
import Calculadora from './components/Calculadora';

const App = () => {
  const [showCalculadora, setShowCalculadora] = useState(false);

  const handleCalculadoraClick = () => {
    setShowCalculadora(true);
  };

  return (
    <div className="app">
      {!showCalculadora && (
        <>
          <header className="header">
            <h1>Meu Site Elegante</h1>
            <nav>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#calculadora" onClick={handleCalculadoraClick}>Calculadora</a></li>
              </ul>
            </nav>
          </header>

          <main className="main-content">
            <section id="sobre" className="section">
              <h2>Sobre</h2>
              <p>Bem-vindo ao meu site elegante. Aqui estamos comprometidos em oferecer...</p>
            </section>

            <section id="servicos" className="section">
              <h2>Serviços</h2>
              <p>Nossos serviços incluem...</p>
            </section>

            <section id="contato" className="section">
              <h2>Contato</h2>
              <p>Você pode nos contatar em...</p>
            </section>
          </main>

          <footer className="footer">
            <p>&copy; 2023 Eric Yuji Ikeda. Todos os direitos reservados.</p>
          </footer>
        </>
      )}

      {showCalculadora && <Calculadora />}
    </div>
  );
};

export default App;
