import "./App.css";
import AppRoutes from "./Routes/AppRoutes.jsx";
import NavBar from "./NavBar.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <AppRoutes />
      </UserProvider>
    </>
  );
}

export default App;
