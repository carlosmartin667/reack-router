import { useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AutReducer";

export const AppData = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("log")) || { log: false };
    };

    const [log, dispatch] = useReducer(AuthReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("log", JSON.stringify(log));
    }, [log]);


    return [log, dispatch];
};