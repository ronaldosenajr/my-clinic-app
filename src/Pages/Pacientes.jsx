/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import scheduleContext from '../Context/Context';

export default function Pacientes() {
  const [showCreatePatient, setShowCreatePatient] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [answerableName, setAnswerableName] = useState('');
  const [answerableEmail, setAnswerableEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [showPacients, setShowPacients] = useState(false);
  const { patients, createNewPatient, getPatients } = useContext(scheduleContext);

  useEffect(() => {
    getPatients();
  }, []);

  useEffect(() => {
    if (patients.length > 0 && !showPacients) {
      setShowPacients(true);
      console.log('chamou no if do patients.length');
    }
  }, [patients]);

  const handleCreatePatientClick = () => {
    setShowCreatePatient(true);
  };

  const clearPatientAddedValues = () => {
    setPatientName('');
    setAnswerableEmail('');
    setAnswerableName('');
    setCpf('');
  };

  const saveNewPatient = async () => {
    const patient = { nome: patientName,
      responsavel: answerableName,
      email: answerableEmail,
      cpf };
    createNewPatient(patient);
    setShowCreatePatient(false);
    clearPatientAddedValues();
  };

  return (
    <div>
      <section>
        {showPacients && patients.map((value) => (
          value.nome && (
            <h3 key={ value.nome }>
              nome:
              {' '}
              {value.nome}
            </h3>)))}
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
                value={ patientName }
                onChange={ ({ target }) => setPatientName(target.value) }
              />
            </label>
            <label htmlFor="nome-responsavel-input">
              <input
                type="text"
                id="nome-responsavel-input"
                placeholder="Nome do Responsável"
                value={ answerableName }
                onChange={ ({ target }) => setAnswerableName(target.value) }
              />
            </label>
            <label htmlFor="email-responsavel-input">
              <input
                type="email"
                id="email-responsavel-input"
                placeholder="Email do Responsável"
                value={ answerableEmail }
                onChange={ ({ target }) => setAnswerableEmail(target.value) }
              />
            </label>
            <label htmlFor="cpf-responsavel-input">
              <input
                type="number"
                id="cpf-responsavel-input"
                placeholder="CPF do Responsável"
                value={ cpf }
                onChange={ ({ target }) => setCpf(target.value) }
              />
            </label>
            <button type="button" onClick={ saveNewPatient }>Salvar</button>
            <button
              type="button"
              onClick={ () => setShowCreatePatient(false) }
            >
              Fechar
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
