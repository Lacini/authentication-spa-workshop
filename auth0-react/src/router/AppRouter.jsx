import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../components/Overview";
import Login from "../components/login";
import Detail from "../components/Detail";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} exact />
      <Route path="/pokemon" element={<Overview />} exact />
      <Route path="/detail/:name" element={<Detail />} exact />
      <Route path="*" element={<Navigate to="/pokemon" />} />
    </Routes>
  );
}

export default AppRouter;
