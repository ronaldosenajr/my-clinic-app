import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
        </Switch>
        <h1>TESTE</h1>
      </BrowserRouter>
    );
  }
}

export default App;
