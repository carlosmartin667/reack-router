import React from "react";
import PropTypes from "prop-types";
import { Personajes } from "../models/Personajes";

const MasculinoScreen = (props) => {
  const hombre = Personajes.filter(x  => x.type === "h");
  console.log(hombre);
  return (
    <>
      <div className="container mt-3">
        <h1>MasculinoScreen</h1>
      </div>
    </>
  );
};

MasculinoScreen.propTypes = {};

export default MasculinoScreen;
