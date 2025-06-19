import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const CitizenProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const role = window.sessionStorage.getItem("role");
    const isLoggedIn = window.sessionStorage.getItem("isLoggedIn");

    // simulate delay to ensure sessionStorage is read
    setTimeout(() => {
      setIsAuth(role === "citizen" && isLoggedIn === "true");
    }, 100); // can also try 100ms
  }, []);

  if (isAuth === null) return <div>Loading...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default CitizenProtectedRoute;
