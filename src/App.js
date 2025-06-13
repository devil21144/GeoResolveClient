import React from "react";
import "./output.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthorityRegister from "./Components/AuthorityRegister";
import CitizenRegistration from "./Components/CitizenRegistration";
import OTP from "./Components/OTP";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<AuthorityRegister />} path="/register/authority"></Route>
        <Route element={<CitizenRegistration />} path="/register/citizen"> </Route>
        <Route element={<OTP/>} path="/otp"></Route>
      </Routes>
    </div>
  );
};

export default App;
