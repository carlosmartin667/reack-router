import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import FemeninoScreen from "../pages/FemeninoScreen";
import MasculinoScreen from "../pages/MasculinoScreen";
import Buscador from "../pages/Buscador.Jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRouter = (props) => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/femenino" component={FemeninoScreen} />
        <Route exact path="/masculino" component={MasculinoScreen} />
        <Route exact path="/buscar" component={Buscador} />
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
