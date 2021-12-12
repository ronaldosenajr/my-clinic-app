import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
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
    width: '100%',
    display: 'flex',
    alignContent: 'cente',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid gray',
  },
}));

export default function Header() {
  const { setUser } = useContext(scheduleContext);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(getLocalStorage);
  }, [setUser]);

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
      <Button>
        <UserPerfilIcon />
        <Typography>Perfil</Typography>
      </Button>
      <Button>
        <PacientesIcon />
        <Typography>Pacientes</Typography>
      </Button>
      <Button>
        <AgendaIcon />
        <Typography>Agenda</Typography>
      </Button>
      <Button>
        <FrequenciaIcon />
        <Typography>Frequência</Typography>
      </Button>
      <Button aria-label="exit" color="secondary" onClick={ logOut }>
        <ExitAppIcon color="error" />
        <Typography>Sair</Typography>
      </Button>
    </div>
  );
}
