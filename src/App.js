
import { AuthContext } from "./context/AuthContext";
import { AppData } from "./helpers/AppData";
import LoginRouter from "./routers/LoginRouter";

const App = () => {
  
  const [log, dispatch] = AppData();

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
