// == Import
import "./styles.scss";
import { AuthProvider } from "../../contexts/AuthContext";
import MapFormProvider from "../../contexts/MapFormContext";

import Routes from "../Routes";

// == Composant App
const App = () => {
  return (
    <MapFormProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </MapFormProvider>
  );
};

// == Export
export default App;
