import React from "react";
import { DataSearchs } from "../helpers/DataSearch";
import Card from "../components/Card";

const Search = ({ history }) => {
  const { handleSubmit, inputValue, handleChange, characters } = DataSearchs(history);
  return (
    <>
      <div className=" container mx-5 mt-4">
        <div className="row text-center">
          <div className=" col-6">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Buscador:</div>
              <div className="card-body">
                <h5 className="card-title">Introdusca nombre del empleado </h5>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Buscar
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={inputValue}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-outline-info w-100">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="card border-info  mb-3"
            >
              <div className="card-header text-info">Resultado</div>
              <div className="card-body text-info ">
                <h5 className="card-title">Cantidad: {characters.length}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            {characters.length === 0 && (
              <div className="alert alert-warning text-center">
                Introdusca un nombre correcto
              </div>
            )}
          </div>
          <div className="row">
            {characters.map((character) => (
              <Card key={character.id} {...character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Search.propTypes = {};

export default Search;
