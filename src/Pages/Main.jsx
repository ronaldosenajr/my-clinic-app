import React, { useContext } from 'react';
import scheduleContext from '../Context/Context';
import ContentPanel from '../Components/ContentPanel';
import Header from '../Components/Header';
import Pacientes from './Pacientes';
import authentication from '../firebaseConfig';

export default function Main() {
  const { user } = useContext(scheduleContext);
  const { tabValue } = useContext(scheduleContext);

  const logOut = () => {
    authentication.signOut();
  };
  return (
    <main>
      <Header />
      <ContentPanel value={ tabValue } index={ 0 }>
        Usuario
        {' '}
        {user ? user.email : ''}
        <button type="button" onClick={ logOut }>Sair</button>
      </ContentPanel>
      <ContentPanel value={ tabValue } index={ 1 }>
        <Pacientes />
      </ContentPanel>
      <ContentPanel value={ tabValue } index={ 2 }>
        Frequência
      </ContentPanel>
      <ContentPanel value={ tabValue } index={ 3 }>
        Agenda
      </ContentPanel>
    </main>
  );
}
