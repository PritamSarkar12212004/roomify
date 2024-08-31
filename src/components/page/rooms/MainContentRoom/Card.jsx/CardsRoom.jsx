import React from "react";
import { NavLink } from "react-router-dom";
function CardsRoom(prpps) {
  const { imageUrl1, area, price } = prpps.item;
  return (
    <NavLink to={`/rooms/show/${prpps.item._id}`}>
      <div className="w-64 h-72 cursor-pointer rounded-xl hover:scale-105 duration-300 ">
        <img src={imageUrl1} className="w-full h-56 rounded-xl" alt="" />
        <span className="flex items-center gap-2 text-lg leading-tight tracking-tighter"></span>
        <div className="flex w-full justify-between gap-2 mt-3 px-2">
          <div className="flex  gap-2">
            <span className="">
              <i class="ri-money-rupee-circle-line"></i>{" "}
            </span>
            {price} /-
          </div>
          <div className="flex gap-2  ">
            <span className="text-red-600">
              <i class="ri-map-pin-range-fill"></i>
            </span>
            {area}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default CardsRoom;
