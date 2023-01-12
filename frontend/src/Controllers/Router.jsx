import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sign from "../Pages/Sign";
import { AuthContext } from "./Auth";

const Router = () => {
  const { auth } = React.useContext(AuthContext);

  console.log(auth);
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="sign" element={<Sign />} />
    </Routes>
  );
};

export default Router;
