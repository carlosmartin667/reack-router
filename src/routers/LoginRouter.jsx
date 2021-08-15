import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginScrenn from '../pages/LoginScrenn';

const LoginRouter = props => {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScrenn} />
        </Switch>
      </Router>
    );
}

LoginRouter.propTypes = {

}

export default LoginRouter
