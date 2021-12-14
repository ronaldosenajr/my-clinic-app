import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUserCircle,
  faUsers, faCalendarDay, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import scheduleContext from '../Context/Context';
import authentication from '../firebaseConfig';
import './Header.css';

export default function Header() {
  const { setUser } = useContext(scheduleContext);
  const { setTabValue } = useContext(scheduleContext);
  const history = useHistory();

  const handleChange = ({ target }, newValue) => {
    const oldTab = document.querySelector('.selected');
    oldTab.className = 'nav-button';
    setTabValue(newValue);
    target.parentElement.className = 'nav-button selected';
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
          <div><FontAwesomeIcon icon={ faUserCircle } className="icon" /></div>
          Perfil
          <input
            type="button"
            id="perfil-input"
            onClick={ (e) => handleChange(e, 0) }
          />
        </label>
        <label htmlFor="pacientes-input" className="nav-button selected">
          <div><FontAwesomeIcon icon={ faUsers } className="icon" /></div>
          Pacientes
          <input
            type="button"
            id="pacientes-input"
            onClick={ (e) => handleChange(e, 1) }
          />
        </label>
        <label htmlFor="frequencia-input" className="nav-button">
          <div><FontAwesomeIcon icon={ faCalendarCheck } className="icon" /></div>
          Frequência
          <input
            type="button"
            id="frequencia-input"
            onClick={ (e) => handleChange(e, 2) }
          />
        </label>
        <label htmlFor="agenda-input" className="nav-button">
          <div><FontAwesomeIcon icon={ faCalendarDay } className="icon" /></div>
          Agenda
          <input
            type="button"
            id="agenda-input"
            onClick={ (e) => handleChange(e, agendaValue) }
          />
        </label>
        <label htmlFor="sair-input" className="nav-button">
          <div><FontAwesomeIcon icon={ faSignOutAlt } className="icon" /></div>
          Sair
          <input
            type="button"
            id="sair-input"
            onClick={ logOut }
          />
        </label>
      </nav>
    </header>
  );
}
