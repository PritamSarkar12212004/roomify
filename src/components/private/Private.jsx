import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private() {
  const auth = localStorage.getItem("auth");
  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default Private;
