import React, { useState } from 'react';
import GraficosApi from './GraficosApi';
import '../App.css';

const Dashboard = () => {
  const [mostrarGraficos, setMostrarGraficos] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('inicio');

  const mostrarGraficosClick = () => {
    setMostrarGraficos(true);
    setPaginaAtual('graficos');
  };

  const inicioClick = () => {
    setMostrarGraficos(false);
    setPaginaAtual('inicio');
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li>
            <button onClick={inicioClick} className={paginaAtual === 'inicio' ? 'dashboard-link active' : 'dashboard-link'}>
              Início
            </button>
          </li>
          <li className="dashboard-right-align">
            <button onClick={mostrarGraficosClick} className={paginaAtual === 'graficos' ? 'dashboard-link active' : 'dashboard-link'}>
              Gráficos
            </button>
          </li>
        </ul>
      </nav>
      {mostrarGraficos ? (
        <div className="grid-container">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card increased-height">
              <h2>Gráfico {index + 1}</h2>
              <div className="Dashboard-chart">
                <GraficosApi />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Página Inicial</p>
      )}
      <footer className="dashboard-footer">
        <p>© Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
