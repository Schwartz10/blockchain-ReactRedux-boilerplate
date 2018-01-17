import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Routes extends Component {
  componentDidMount () {}

  render () {
    return (
      <Router history={history}>
        <MuiThemeProvider >
          <div>
            {/* <Switch>
              <Route exact path='/manage/orders/:orderId' component={} />
            </Switch>*/}
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Routes)
