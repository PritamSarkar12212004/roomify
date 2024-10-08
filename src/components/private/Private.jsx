import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private() {
  const auth = localStorage.getItem("auth");
  useEffect(() => {
  }, [auth]);
  return <div>{auth ? <Outlet /> : <Navigate to={"/login"} />}</div>;
}

export default Private;
