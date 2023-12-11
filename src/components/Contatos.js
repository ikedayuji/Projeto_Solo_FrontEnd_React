import React, { useState } from 'react';

const Contato = ({ handleCalculadoraClick, handleDashboardClick }) => {
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'Maria', telefone: '123456789', email: 'maria@example.com' },
    { id: 2, nome: 'João', telefone: '987654321', email: 'joao@example.com' }
  ]);

  const [novoContato, setNovoContato] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = contatos.length + 1;
    setContatos([...contatos, { id, ...novoContato }]);
    setNovoContato({ nome: '', telefone: '', email: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoContato({ ...novoContato, [name]: value });
  };

  const handleContatosClick = () => {
    // Lógica para exibir a lista de contatos
  };

  return (
    <div className="contato-page">
      <header className="header">
        <h1>Contatos</h1>
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
        <section id="contato" className="section">
          <h2>Lista de Contatos</h2>
          <ul>
            {contatos.map(contato => (
              <li key={contato.id}>
                <strong>Nome:</strong> {contato.nome}, <strong>Telefone:</strong> {contato.telefone}, <strong>Email:</strong> {contato.email}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <h3>Adicionar Novo Contato</h3>
            <input type="text" name="nome" value={novoContato.nome} onChange={handleInputChange} placeholder="Nome" />
            <input type="text" name="telefone" value={novoContato.telefone} onChange={handleInputChange} placeholder="Telefone" />
            <input type="text" name="email" value={novoContato.email} onChange={handleInputChange} placeholder="Email" />
            <button type="submit">Adicionar Contato</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© Eric Yuji Ikeda 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Contato;
