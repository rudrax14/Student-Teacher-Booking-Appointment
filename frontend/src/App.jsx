import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login/:role" element={<LoginPage />} />
      </Routes>
    </>

  );
}

export default App;
