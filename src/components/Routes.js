import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from '../history';
import SimpleStorage from './SimpleStorage';

const Routes = () =>
  <Router history={history}>
      <div>
        <span>
          <h1 id="main-header">Boilaaa</h1>
        </span>
        <Switch>
          <Route exact path='/' component={SimpleStorage} />
        </Switch>
      </div>
  </Router>

export default Routes;
