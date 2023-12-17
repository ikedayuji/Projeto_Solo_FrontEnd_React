import React, { useState } from 'react';
import './App.css';
import Calculadora from './components/Calculadora';
import Dashbord from './components/Dashbord';
import Contatos from './components/Contatos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Graficos from './Images/Graficos.png';
import ImagemCalculadora from './Images/ImagemCalculadora.png';

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCalculadora, setShowCalculadora] = useState(false);
  const [showContatos, setShowContatos] = useState(false);
  const [pageTitle, setPageTitle] = useState('Página Inicial'); // Controle do título

  const handleDashboardClick = () => {
    setPageTitle('Dashboard'); 
    setShowDashboard(true);
    setShowCalculadora(false);
    setShowContatos(false);
  };

  const handleCalculadoraClick = () => {
    setPageTitle('Calculadora');
    setShowDashboard(false);
    setShowCalculadora(true);
    setShowContatos(false);
  };

  const handleContatosClick = () => {
    setPageTitle('Contatos'); 
    setShowDashboard(false);
    setShowCalculadora(false);
    setShowContatos(true);
  };

  const handleServicosClick = () => {
    setPageTitle('Serviços');
    setShowDashboard(false);
    setShowCalculadora(false);
    setShowContatos(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25%',
  };

  const images = [
    Graficos,
    ImagemCalculadora,
  ];

  const centerSliderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '500px',
  };

  return (
    <div className="app">
      <header className="header">
        <h1>{pageTitle}</h1>
        <nav>
          <ul>
            <li><a href="#contato" onClick={handleContatosClick}>Contato</a></li>
            <li><a href="#calculadora" onClick={handleCalculadoraClick}>Calculadora</a></li>
            <li><a href="#dashbord" onClick={handleDashboardClick}>DashBord</a></li>
            <li><a href="#servicos" onClick={handleServicosClick}>Serviços</a></li>
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
                <div style={{ width: '90%' }}>
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt={`Imagem ${index}`}
                          style={{ width: '90%', height: 'auto', objectFit: 'contain' }}
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

      <main className="main-content">
        <section id="contato" className="section">
          {showContatos && <Contatos />}
        </section>
      </main>

      <footer className="footer">
        <p>© Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
