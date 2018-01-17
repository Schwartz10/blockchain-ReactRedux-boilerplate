import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Account from './Account';
import Drawer from './Drawer';
import history from '../history';

export default class Routes extends Component {
  componentDidMount () {}

  render () {
    return (
      <Router history={history}>
        <MuiThemeProvider >
          <div>
            <Drawer />
            <Switch>
              <Route exact path='/profile' component={Account} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {}
// }

// const mapDispatch = (dispatch) => {
//   return {}
// }

// export default connect(mapState, mapDispatch)(Routes)
