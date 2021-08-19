import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Card = ({ name, type, id }) => {
  const path = `/assets/${type}-${id}.png`;
  return (
    <>
      <div
        className="card  bg-info m-3 col-12 col-md-4"
        style={{
          width: 170,
        }}
      >
        <img
 
          loading="lazy"
          className="card-img-top"
          style={{ width: "100%" }}
          src={path}
          alt={id}
          height="200"
        />

        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            <Link className="card-link" to={`/detalles/${id}`}>
              Ver Más...
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {};

export default Card;
