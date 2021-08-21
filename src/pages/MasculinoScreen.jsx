import React from "react";
import Card from "../components/Card";
import { genero } from "../helpers/Genero";

const MasculinoScreen = () => {

  const hombre = genero("h")

  return (
    <>
      <div className="container mt-3">
        <div className="alert alert-info" role="alert">
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


export default MasculinoScreen;
