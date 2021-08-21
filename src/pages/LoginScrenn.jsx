import React from "react";
import { DataLogin } from "../helpers/DataLogin";

const LoginScrenn = ({ history }) => {

  const handleLogin = DataLogin(history);

  return (
    <>
      <div className="conatainer mt-5 text-center">
        <div className="conatainer mt-5 text-center">
          <img src="/assets/animate.gif" alt="" />
        </div>
        <h1 className="my-3">logueo</h1>
        <button
          type="button"
          onClick={handleLogin}
          className="btn btn-outline-primary my-3"
        >
          Primary
        </button>
      </div>
    </>
  );
};

export default LoginScrenn;
