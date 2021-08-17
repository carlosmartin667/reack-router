import React from "react";
import PropTypes from "prop-types";
import { Personajes } from "../models/Personajes";
import Card from "../components/Card";

const FemeninoScreen = (props) => {
  const mujer = Personajes.filter((x) => x.type === "m");
  console.log(mujer);
  return (
    <>
      <div className="container mt-3">
        <div class="alert alert-info" role="alert">
          feminino
        </div>
     
      <hr />
     
        <div className="row">
          {mujer.map((man) => (
            <Card key={man.id} {...man} />
          ))}
        </div>
      </div>
    </>
  );
};

FemeninoScreen.propTypes = {};

export default FemeninoScreen;
