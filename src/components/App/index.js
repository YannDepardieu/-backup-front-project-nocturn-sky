// == Import
import "./styles.scss";
import { AuthProvider } from "../../contexts/AuthContext";

import Routes from "../Routes";

// == Composant App
const App = () => {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
};

// == Export
export default App;
