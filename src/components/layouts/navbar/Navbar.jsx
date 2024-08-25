import React, { useContext, useEffect } from "react";
import RightBar from "./RightBar/RightBar";
import LeftBar from "./LeftBar/LeftBar";
import SearchBar from "../searchBar/SearchBar";
import contextMaker from "../../../context/contextMaker";
import Authentication from "../Button/Authentication";
function Navbar() {
  const { auth } = useContext(contextMaker);
  return (
    <div className="border-[1px] border-gray-300 h-16 flex items-center justify-center sticky top-0 bg-white z-50">
      <div className=" h-12 w-11/12 flex justify-between ">
        <RightBar />
        {auth ? (
          <div className="h-full  flex justify-between gap-32">
            <SearchBar />
            <LeftBar />
          </div>
        ) : (
          <div className="h-full flex items-center ">
            <Authentication />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
