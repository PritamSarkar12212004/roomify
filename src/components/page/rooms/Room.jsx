import React from "react";
import SideBar from "../../layouts/sidebar/SideBar";
import MaincontentRoom from "./MainContentRoom/MaincontentRoom";
function Room() {
  return (
    <div className="flex">
      <SideBar />
      <MaincontentRoom />
    </div>
  );
}

export default Room;
