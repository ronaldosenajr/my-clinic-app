import React, { useContext } from 'react';
import scheduleContext from '../Context/Context';
import TabPanel from '../Components/TabPanel';
import NewHeader from '../Components/NewHeader';

export default function Main() {
  const { user } = useContext(scheduleContext);
  const { tabValue } = useContext(scheduleContext);
  return (
    <div>
      <NewHeader />
      <TabPanel value={ tabValue } index={ 0 }>
        Usuario
        {' '}
        {user.email}
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
