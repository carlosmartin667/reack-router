import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

export const DataNabar = () => {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);
    const handleLogout = () => {
        dispatch({ type: authTypes.logout });
        history.replace("/login");
    };

    return handleLogout;
};