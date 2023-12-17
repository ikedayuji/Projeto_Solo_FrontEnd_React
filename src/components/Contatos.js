import React from 'react';
import '../App.css';

const Contatos = () => {
  const meusContatos = [
    { name: 'Seu Nome', email: 'seuemail@example.com' },
    { name: 'Outro Contato', email: 'outroemail@example.com' },
  ];

  return (
    <div className="contatos-container">
      <h2>Lista de Contatos</h2>
      <ul className="contatos-list">
        {meusContatos.map((contact, index) => (
          <li key={index} className="contato-item">
            <div className="contato-info">
              <p className="contato-name">{contact.name}</p>
              <p className="contato-email">{contact.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contatos;
