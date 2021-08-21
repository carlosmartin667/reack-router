import React from "react";
import Card from "../components/Card";
import { genero } from "../helpers/Genero";

const FemeninoScreen = () => {

  const mujer = genero("m");
  
  return (
    <>
      <div className="container mt-3">
        <div className="alert alert-info" role="alert">
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

export default FemeninoScreen;
