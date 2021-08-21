import React from "react";
import { NavLink } from "react-router-dom";

import { DataNabar } from "../../helpers/DataNavbar";


const Navbar = () => {

  const handleLogout = DataNabar();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <h2 className="navbar-brand">DB App</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-white"
                  className="nav-link"
                  aria-current="page"
                  to="/masculino"
                >
                  masculino
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-white"
                  className="nav-link"
                  aria-current="page"
                  to="/femenino"
                >
                  femenino
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-white"
                  className="nav-link"
                  aria-current="page"
                  to="/searchs"
                >
                  Buscar
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
