import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark text-center bg-success mt-5 ">
      <div className="container-fluid ">
        <p className="navbar-brand h1">
          {" "}
          carlos martin cornejo - &copy; {new Date().getFullYear()}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
