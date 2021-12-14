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
        <button
          type="button"
          onClick={ (e) => handleChange(e, 0) }
          className="nav-button"
        >
          Perfil
        </button>
        <button
          type="button"
          onClick={ (e) => handleChange(e, 1) }
          className="nav-button"
        >
          Pacientes
        </button>
        <button
          type="button"
          onClick={ (e) => handleChange(e, 2) }
          className="nav-button"
        >
          Frequência
        </button>
        <button
          type="button"
          onClick={ (e) => handleChange(e, agendaValue) }
          className="nav-button"
        >
          Agenda
        </button>
        <button
          type="button"
          onClick={ logOut }
          className="nav-button"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
