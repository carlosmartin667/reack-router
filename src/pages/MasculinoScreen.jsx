import React from "react";
import PropTypes from "prop-types";
import { Personajes } from "../models/Personajes";
import Card from "../components/Card";

const MasculinoScreen = (props) => {
  const hombre = Personajes.filter((x) => x.type === "h");
  console.log(hombre);
  return (
    <>
      <div className="container mt-3">
        <div class="alert alert-info" role="alert">
          Masculino
        </div>
    

      <hr />
   
        <div className="row">
          {hombre.map((man) => (
            <Card key={man.id} {...man} />
          ))}
        </div>
      </div>
    </>
  );
};

MasculinoScreen.propTypes = {};

export default MasculinoScreen;
