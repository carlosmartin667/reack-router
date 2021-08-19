import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const FemeninoScreen = lazy(() => import("../pages/FemeninoScreen"));
const MasculinoScreen = lazy(() => import("../pages/MasculinoScreen"));
const Detalles = lazy(() => import("../pages/Detalles"));
const Footer = lazy(() => import("../components/layout/Footer"));
const Search = lazy(() => import("../pages/Search"));
const Navbar = lazy(() => import("../components/layout/Navbar"));

const AppRouter = (props) => {
  return (
    <>
      <Suspense fallback={<h1>..</h1>}>
        <Navbar />
        <Switch>
          <Route exact path="/femenino" component={FemeninoScreen} />
          <Route exact path="/masculino" component={MasculinoScreen} />
          <Route exact path="/searchs" component={Search} />
          <Route exact path="/Detalles/:id" component={Detalles} />
          <Redirect to="/masculino" />
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
};

AppRouter.propTypes = {};

export default AppRouter;
