import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import './App.css';
import ScheduleProvider from './Context/Provider';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Switch>
          <ScheduleProvider>
            <Route exact path="/main" component={ Main } />
            <Route exact path="/" component={ Login } />
          </ScheduleProvider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
