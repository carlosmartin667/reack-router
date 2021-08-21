import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

export const DataLogin = (history) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({ type: authTypes.login });
        history.push("/");
    };

    return handleLogin;
};