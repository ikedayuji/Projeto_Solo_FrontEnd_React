import React, { useState } from 'react';
import './App.css';
import Calculadora from './components/Calculadora';
import Dashbord from './components/Dashbord';
import Contatos from './components/Contatos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importação das imagens
import Graficos from './Images/Graficos.png';
import ImagemCalculadora from './Images/ImagemCalculadora.png';

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
    setShowContatos(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    Graficos,
    ImagemCalculadora,
  ];

  const centerSliderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px', // Definindo a altura mínima da seção de serviços
  };

  return (
    <div className="app">
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
        {!showDashboard && !showCalculadora && !showContatos && (
          <>
            <section id="sobre" className="section">
              <h2>Serviços</h2>
              <p></p>
              <p></p>
            </section>

            <section id="servicos" className="section">
              <div style={centerSliderStyle}>
                <div style={{ width: '70%' }}>
                  <h2></h2>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                          src={image}
                          alt={`Imagem ${index}`}
                          style={{ width: '900px', height: '500px', objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </Slider>

                </div>
              </div>
            </section>

            <section id="contato" className="section">
              {showContatos && <Contatos />}
            </section>
          </>
        )}

        {showDashboard && <Dashbord />}
        {showCalculadora && <Calculadora />}
      </main>

      <footer className="footer">
        <p>© Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
