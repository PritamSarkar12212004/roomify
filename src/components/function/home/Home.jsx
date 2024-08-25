import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import RoutesPath from "../../../routes/RoutesPath";
import ToggalBoxLayout from "../../layouts/togglesBoxLayout/ToggalBoxLayout";
function Home() {
  return (
    <div>
      <Navbar />
      <ToggalBoxLayout />
      <div className=" flex mx-auto px-">
        <RoutesPath />
      </div>
    </div>
  );
}

export default Home;
