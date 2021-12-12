import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import { Grid, TextField, Button, Card } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

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
  },
}));
export default function SimpleContainer() {
  const classes = useStyles();

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
            <Icon className="far fa-calendar-check" color="primary" fontSize="large" />
            <h1>Login</h1>
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <TextField id="standard-basic" label="Email" type="email" />
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <TextField id="standard-basic" label="Senha" type="password" />
          </Grid>
          <Grid item xs zeroMinWidth className={ classes.grid }>
            <Button variant="contained" color="primary">Entrar</Button>
          </Grid>
        </Card>
      </form>
    </div>
  );
}
