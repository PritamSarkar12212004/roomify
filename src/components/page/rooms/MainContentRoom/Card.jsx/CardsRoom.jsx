import React from "react";

function CardsRoom() {
  return (
    <div className="w-64">
      <img src="/areaRoom/2.jpg" className="w-full rounded-xl" alt="" />
      <span className="flex items-center gap-2 text-lg leading-tight tracking-tighter">
        <div className="flex  items-center gap-2">
          <span className="h-10 w-10 rounded-full bg-blue-500 flex">
            <img src="/avtar/avtar.jpeg" alt="" className="h-full w-full " />
          </span>{" "}
          <p>Rohit Sharma</p>
        </div>
      </span>
      <span className="text-sm opacity-95   ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </span>
      <div className="flex w-full justify-between">
        <div className="flex  gap-2">
          <span className="">
            <i class="ri-money-rupee-circle-line"></i>{" "}
          </span>
          2500 /-
        </div>
        <div className="flex gap-2  ">
          <span className="text-red-600">
            <i class="ri-map-pin-range-fill"></i>
          </span>
          Bansinagar
        </div>
      </div>
    </div>
  );
}

export default CardsRoom;
