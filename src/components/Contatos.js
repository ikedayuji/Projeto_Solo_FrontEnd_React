import React, { useState } from 'react';

const Contatos = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setContacts([...contacts, { name, email }]);
    e.target.reset();
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>

      <h3>Adicionar Novo Contato</h3>
      <form onSubmit={handleAddContact}>
        <input type="text" name="name" placeholder="Nome" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Contatos;
