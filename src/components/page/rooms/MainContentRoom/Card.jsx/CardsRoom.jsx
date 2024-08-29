import React from "react";

function CardsRoom(prpps) {
  const { imageUrl1, area, price, description } = prpps.item;
  return (
    <div className="w-64 h-72 ">
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
  );
}

export default CardsRoom;
