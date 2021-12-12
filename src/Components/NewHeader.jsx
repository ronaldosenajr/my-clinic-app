import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import UserPerfilIcon from '@material-ui/icons/AccountCircleOutlined';
import AgendaIcon from '@material-ui/icons/EventOutlined';
import PacientesIcon from '@material-ui/icons/PeopleOutline';
import FrequenciaIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LinkTab from './LinkTab';
import scheduleContext from '../Context/Context';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F12',
  },
}));

export default function NewHeader() {
  const classes = useStyles();
  const { tabValue, setTabValue } = useContext(scheduleContext);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tres = 3;
  return (
    <div className={ classes.root }>
      <AppBar position="static" color="transparent">
        <Tabs
          variant="fullWidth"
          value={ tabValue }
          onChange={ handleChange }
          aria-label="nav tabs example"
        >
          <LinkTab
            label="Perfil"
            href="/perfil"
            icon={ <UserPerfilIcon /> }
            { ...a11yProps(0) }
          />
          <LinkTab
            label="Pacientes"
            href="/pacientes"
            icon={ <PacientesIcon /> }
            { ...a11yProps(1) }
          />
          <LinkTab
            label="Frequência"
            href="/frequencia"
            icon={ <FrequenciaIcon /> }
            { ...a11yProps(2) }
          />
          <LinkTab
            label="Agenda"
            href="/agenda"
            icon={ <AgendaIcon /> }
            { ...a11yProps(tres) }
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
