import React from "react";
import CardsRoom from "./Card.jsx/CardsRoom";
function MaincontentRoom() {
  return (
    <div className="flex flex-auto flex-col px-2 h-[90vh]">
      <h1 className=" flex mx-auto bg-white text-xl py-2">Nagpur</h1>
      <div className="flex flex-wrap gap-5  h-full overflow-y-auto">
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
        <CardsRoom />
      </div>
    </div>
  );
}

export default MaincontentRoom;
