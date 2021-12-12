import React, { useContext, useEffect } from 'react';
import { Typography, Button, Fab } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import UserPerfil from '@material-ui/icons/AccountCircleRounded';
import ExitAppIcon from '@material-ui/icons/ExitToApp';
import scheduleContext from '../Context/Context';

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
  const { user, setUser } = useContext(scheduleContext);
  const classes = useStyles();

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(getLocalStorage);
  }, [setUser]);

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
        <UserPerfil />
        <Typography>Perfil</Typography>
      </Button>
      <Button>
        <UserPerfil />
        <Typography>Pacientes</Typography>
      </Button>
      <Button>
        <UserPerfil />
        <Typography>Agenda</Typography>
      </Button>
      <Button>
        <UserPerfil />
        <Typography>Frequência</Typography>
      </Button>
      <Button aria-label="exit">
        <ExitAppIcon />
        <Typography>Sair</Typography>
      </Button>
    </div>
  );
}
