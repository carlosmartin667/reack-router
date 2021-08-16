import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScrenn from "../pages/LoginScrenn";
import AppRouter from "./AppRouter";

const LoginRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScrenn} />
      </Switch>
      <AppRouter />
    </Router>
  );
};

LoginRouter.propTypes = {};

export default LoginRouter;
