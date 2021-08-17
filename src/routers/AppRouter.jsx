import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import FemeninoScreen from "../pages/FemeninoScreen";
import MasculinoScreen from "../pages/MasculinoScreen";
import Detalles from "../pages/Detalles";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Search from "../pages/Search";

const AppRouter = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/femenino" component={FemeninoScreen} />
        <Route exact path="/masculino" component={MasculinoScreen} />
        <Route exact path="/searchs" component={Search} />
        <Route exact path="/Detalles/:id" component={Detalles} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
