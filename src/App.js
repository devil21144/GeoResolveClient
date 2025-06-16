import React from "react";
import "./output.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthorityRegister from "./Components/AuthorityRegister";
import CitizenRegistration from "./Components/CitizenRegistration";
import OTP from "./Components/OTP";
import CitizenLogin from "./Components/CitizenLogin";
import AuthorityLogin from "./Components/AuthorityLogin";
import AdminLogin from "./Components/AdminLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<AuthorityRegister />} path="/register/authority"></Route>
        <Route element={<CitizenRegistration />} path="/register/citizen"> </Route>
        <Route element={<OTP />} path="/otp"></Route>
        <Route path="/login/citizen" element={<CitizenLogin />}></Route>
        <Route path="/login/authority" element={<AuthorityLogin />}></Route>
        <Route path="/login/admin" element={<AdminLogin/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
