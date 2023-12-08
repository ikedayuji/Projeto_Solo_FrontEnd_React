import React, { useState } from 'react';
import GraficosApi from './GraficosApi';
import '../App.css'; 

const Dashboard = () => {
  const [mostrarGraficos, setMostrarGraficos] = useState(false);

  const mostrarGraficosClick = () => {
    setMostrarGraficos(true);
  };

  const inicioClick = () => {
    setMostrarGraficos(false);
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li>
            <button onClick={inicioClick} className="dashboard-link">
              Início
            </button>
          </li>
          <li className="dashboard-right-align">
            <button onClick={mostrarGraficosClick} className="dashboard-link">
              Gráficos
            </button>
          </li>
        </ul>
      </nav>
      {mostrarGraficos ? (
        <div className="grid-container">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card">
              <GraficosApi />
            </div>
          ))}
        </div>
      ) : (
        <p>Página Inicial</p>
      )}
      <footer className="dashboard-footer">
        <p>&copy; Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
