import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private2() {
  const auth = localStorage.getItem("auth");
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return <div>{!auth ? <Outlet /> : <Navigate to={"/"} />}</div>;
}

export default Private2;
