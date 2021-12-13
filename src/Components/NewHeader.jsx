import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab } from '@material-ui/core/';
import UserPerfilIcon from '@material-ui/icons/AccountCircleOutlined';
import AgendaIcon from '@material-ui/icons/EventOutlined';
import PacientesIcon from '@material-ui/icons/PeopleOutline';
import FrequenciaIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SairDoAppIcon from '@material-ui/icons/ExitToAppOutlined';
import LinkTab from './LinkTab';
import scheduleContext from '../Context/Context';
import authentication from '../firebaseConfig';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F8F8F1',
  },
}));

export default function NewHeader() {
  const history = useHistory();
  const classes = useStyles();
  const { tabValue, setTabValue } = useContext(scheduleContext);
  const [variant, setVariant] = useState('fullWidth');

  const resizeTheWindow = () => {
    const minWidthForMobile = 400;
    const newVariant = window.innerWidth > minWidthForMobile ? 'fullWidth' : 'scrollable';
    setVariant(newVariant);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeTheWindow);
    resizeTheWindow();
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const logOut = () => {
    authentication.signOut();
    setTabValue(1);
    history.push('/');
  };

  const tres = 3;
  const quatro = 4;
  return (
    <div className={ classes.root }>
      <AppBar position="static" color="transparent">
        <Tabs
          variant={ variant }
          scrollButtons="auto"
          value={ tabValue }
          onChange={ handleChange }
          aria-label="navbar"
          className={ classes.tabs }
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
          <Tab
            icon={ <SairDoAppIcon /> }
            label="Sair"
            onClick={ logOut }
            { ...a11yProps(quatro) }
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
