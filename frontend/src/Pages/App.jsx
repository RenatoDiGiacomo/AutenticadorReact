import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu";
import AuthProvider from "../Controllers/Auth";
import Router from "../Controllers/Router";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Menu />
        <Router />
        <Outlet />
      </AuthProvider>
    </>
  );
};

export default App;
