import { useEffect, useReducer } from "react";

import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AutReducer";
import LoginRouter from "./routers/LoginRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
