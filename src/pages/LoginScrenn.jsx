import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScrenn = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: authTypes.login });

    history.push("/");
  };
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

LoginScrenn.propTypes = {};

export default LoginScrenn;
