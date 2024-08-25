import React from "react";
import PrimaryButton from "../../../layouts/Button/PrimaryButton";
import { Link } from "react-router-dom";
import DropDown from "../../../layouts/DropDown/DropDown";
function Seaction1() {
  return (
    <div className="w-full h-[84vh]  flex justify-between">
      <div className="flex justify-center flex-col gap-4">
        <h1 className="text-7xl font-bold mt-3 font-mono ">
          Find the top Rooms nearby.
        </h1>
        <p className=" opacity-90">
          Roomify is your go-to platform for booking local rooms and tiffin
          services. Whether you need a cozy place to stay or a reliable meal
          service, we’ve got you covered. Discover comfort and convenience right
          in your neighborhood. ,
        </p>
        <div className="flex gap-7">
          <PrimaryButton content={"Explore Now"} />
          <DropDown />
          <Link className="flex items-center gap-2 text-xl">
            <img className="h-10" src="/poster/home.png" alt="" />
          </Link>
        </div>
      </div>
      <img className="h-full" src="/poster/home.png" alt="" />
    </div>
  );
}

export default Seaction1;
