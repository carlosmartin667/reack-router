import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import PublicRouter from "./PublicRouter";
import LoginScrenn from "../pages/LoginScrenn";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";


const LoginRouter = (props) => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      <PublicRouter path="/login" auth={log} component={LoginScrenn} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Switch>
    </Router>
  );
};

LoginRouter.propTypes = {};

export default LoginRouter;
