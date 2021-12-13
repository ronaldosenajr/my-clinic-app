import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import './App.css';
import ScheduleProvider from './Context/Provider';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <ScheduleProvider>
          <Route exact path="/main" component={ Main } />
          <Route exact path="/" component={ Login } />
        </ScheduleProvider>
      </Switch>
    );
  }
}

export default App;
