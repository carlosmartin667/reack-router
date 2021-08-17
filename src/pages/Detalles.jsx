import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

const Detalles = (props) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

Detalles.propTypes = {};

export default Detalles;
