import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss';
import { Grid, TextField, Button, Card, Typography, Icon } from '@material-ui/core';
import { Alert } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import authentication from '../firebaseConfig';
import scheduleContext from '../Context/Context';

const marginPaddingWidth = 4;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `${theme.spacing(marginPaddingWidth)}px`,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
  grid: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(marginPaddingWidth),
    textAlign: 'center',
  },
  card: {
    width: `${theme.spacing(marginPaddingWidth)}vw`,
    minWidth: 320,
    backgroundColor: '#F8F8F1',
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  const history = useHistory();

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const { setUser } = useContext(scheduleContext);

  const showSignInError = () => {
    const waitTimer = 2000;
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, waitTimer);
  };

  const validateEmail = (email) => {
    setUserEmail(email);
    setEmailValid(true);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setEmailValid(false);
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authentication, userEmail, password,
      );
      const { user } = userCredential;
      setPassword('');
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/main');
    } catch (error) {
      console.log(error);
      showSignInError();
    }
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
      <form>
        <Card variant="outlined" className={ classes.card }>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <Icon
              className="far fa-calendar-check"
              style={ { color: '#04294D' } }
              fontSize="large"
            />
            <Typography
              style={ { color: '#04294D' } }
              variant="h5"
              align="center"
            >
              Faça o seu login
            </Typography>
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <TextField
              id="email"
              label="Email"
              type="email"
              error={ emailValid }
              value={ userEmail }
              onChange={ ({ target }) => validateEmail(target.value) }
            />
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <TextField
              id="password"
              label="Senha"
              type="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <Button
              variant="contained"
              color="primary"
              onClick={ signIn }
            >
              Entrar
            </Button>
          </Grid>
          <Grid>
            {showError ? (
              <Alert
                variant="danger"
                style={ { textAlign: 'center' } }
              >
                Email ou senha incorreto
              </Alert>
            ) : ''}
          </Grid>
        </Card>
      </form>
    </div>
  );
}
