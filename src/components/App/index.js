// == Import
import "./styles.scss";
import { ConstellationProvider } from "../../contexts/ConstellationContext";
import { AuthProvider } from "../../contexts/AuthContext";

import Routes from "../Routes";

// == Composant App
const App = () => {
  return (
    <ConstellationProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ConstellationProvider>
  );
};

// == Export
export default App;
