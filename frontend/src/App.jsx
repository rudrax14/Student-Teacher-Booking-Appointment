import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage";
import LoginSignupPage from "./pages/LoginSignupPage";
function App() {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <LoginSignupPage />
      <Routes>
      </Routes>

    </>
  );
}

export default App;
