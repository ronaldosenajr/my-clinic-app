import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import UserPerfilIcon from '@material-ui/icons/AccountCircleOutlined';
import AgendaIcon from '@material-ui/icons/EventOutlined';
import PacientesIcon from '@material-ui/icons/PeopleOutline';
import ExitAppIcon from '@material-ui/icons/ExitToApp';
import FrequenciaIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import scheduleContext from '../Context/Context';
import authentication from '../firebaseConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    border: '1px solid gray',
    flexGrow: 1,
    maxWidth: 500,
  },
}));

export default function Header() {
  const { setUser } = useContext(scheduleContext);
  const classes = useStyles();
  const history = useHistory();
  const [value, setNewValue] = useState(0);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(getLocalStorage);
  }, [setUser]);

  const handleChange = (event, newValue) => {
    setNewValue(newValue);
  };

  const logOut = async () => {
    await authentication.signOut();
    setUser({});
    localStorage.setItem('user', JSON.stringify({}));
    history.push('/');
  };

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div className={ classes.root }>
      <Tabs
        value={ value }
        onChange={ handleChange }
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="menu items"
      >
        <Tab icon={ <UserPerfilIcon /> } label="Perfil" />
        <Tab icon={ <PacientesIcon /> } label="Pacientes" />
        <Tab icon={ <FrequenciaIcon /> } label="Frequência" />
        <Tab icon={ <AgendaIcon /> } label="Agenda" />
        <Tab icon={ <ExitAppIcon /> } label="Sair" onClick={ logOut } />
      </Tabs>
    </div>
  );
}
