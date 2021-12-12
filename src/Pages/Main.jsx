import React, { useContext } from 'react';
import scheduleContext from '../Context/Context';
import TabPanel from '../Components/TabPanel';
import NewHeader from '../Components/NewHeader';
import authentication from '../firebaseConfig';

export default function Main() {
  const { user } = useContext(scheduleContext);
  const { tabValue } = useContext(scheduleContext);

  const logOut = () => {
    authentication.signOut();
  };
  return (
    <div>
      <NewHeader />
      <TabPanel value={ tabValue } index={ 0 }>
        Usuario
        {' '}
        {user ? user.email : ''}
        <button type="button" onClick={ logOut }>Sair</button>
      </TabPanel>
      <TabPanel value={ tabValue } index={ 1 }>
        Pacientes
      </TabPanel>
      <TabPanel value={ tabValue } index={ 2 }>
        Frequência
      </TabPanel>
      <TabPanel value={ tabValue } index={ 3 }>
        Agenda
      </TabPanel>
    </div>
  );
}
