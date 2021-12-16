import React, { useState } from 'react';

export default function Pacientes() {
  const [showCreatePatient, setShowCreatePatient] = useState(false);

  const handleCreatePatientClick = () => {
    setShowCreatePatient(true);
  };

  return (
    <div>
      <section>
        <button
          type="button"
          onClick={ handleCreatePatientClick }
          hidden={ showCreatePatient }
        >
          Adicionar Paciente
        </button>
        {showCreatePatient && (
          <form>
            <label htmlFor="nome-paciente-input">
              <input
                type="text"
                id="nome-paciente-input"
                placeholder="Nome do Paciente"
              />
            </label>
            <label htmlFor="nome-responsavel-input">
              <input
                type="text"
                id="nome-responsavel-input"
                placeholder="Nome do Responsável"
              />
            </label>
            <label htmlFor="email-responsavel-input">
              <input
                type="email"
                id="email-responsavel-input"
                placeholder="Email do Responsável"
              />
            </label>
            <label htmlFor="cpf-responsavel-input">
              <input
                type="number"
                id="cpf-responsavel-input"
                placeholder="CPF do Responsável"
              />
            </label>
            <button type="button">Salvar</button>
          </form>
        )}
      </section>
    </div>
  );
}
