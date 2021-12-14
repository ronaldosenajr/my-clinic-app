import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import scheduleContext from '../Context/Context';
import authentication from '../firebaseConfig';
import './Header.css';

export default function Header() {
  const { setUser } = useContext(scheduleContext);
  const { setTabValue } = useContext(scheduleContext);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const logOut = async () => {
    await authentication.signOut();
    setUser({});
    history.push('/');
  };

  const agendaValue = 3;
  return (
    <header>
      <nav>
        <label htmlFor="perfil-input" className="nav-button">
          Perfil
          <input
            type="button"
            id="perfil-input"
            onClick={ (e) => handleChange(e, 0) }
          />
        </label>
        <label htmlFor="pacientes-input" className="nav-button">
          Pacientes
          <input
            type="button"
            id="pacientes-input"
            onClick={ (e) => handleChange(e, 1) }
          />
        </label>
        <label htmlFor="frequencia-input" className="nav-button">
          Frequência
          <input
            type="button"
            id="frequencia-input"
            onClick={ (e) => handleChange(e, 2) }
          />
        </label>
        <label htmlFor="agenda-input" className="nav-button">
          Agenda
          <input
            type="button"
            id="agenda-input"
            onClick={ (e) => handleChange(e, agendaValue) }
          />
        </label>
        <label htmlFor="pacientes-input" className="sair-button">
          Sair
          <input
            type="button"
            id="pacientes-input"
            onClick={ logOut }
          />
        </label>
      </nav>
    </header>
  );
}
