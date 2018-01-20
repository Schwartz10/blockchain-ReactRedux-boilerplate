import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import Account from './Account';
import Drawer from './Drawer';
import history from '../history';
import Exchange from './Exchange';
import Explore from './Explore';
import CreatePost from './CreatePost';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    width: "7em",
    height: "3em",
  },
};

const Routes = () =>
  <Router history={history}>
      <div>
        <span>
          <Drawer />
          <h1 id="main-header">InstaCoin</h1>
          <Link to="/" >
            <RaisedButton className='home-button' buttonStyle={styles.button}
            primary={true} label="home" />
          </Link>
        </span>
        <Switch>
          <Route exact path='/profile' component={Account} />
          <Route exact path='/exchange' component={Exchange} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/create-post' component={CreatePost} />
          <Route exact path='/' component={Explore} />
        </Switch>
      </div>
  </Router>

export default Routes;
