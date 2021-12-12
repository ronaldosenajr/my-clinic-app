import React from 'react';
import { Grid, TextField, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `${theme.spacing(4)}px`,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
  grid: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  card: {
    width: `${theme.spacing(4)}vw`,
    minWidth: 320,
  },
}));
export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div className={ classes.root }>
      <form>
        <Card variant="outlined" className={ classes.card }>
          <Grid item xs zeroMinWidth className={ classes.grid }>
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
