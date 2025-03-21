import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signup/signin";
import Login from "./components/login/login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
