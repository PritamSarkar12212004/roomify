import React, { useEffect, useState } from "react";
import CardsRoom from "./Card.jsx/CardsRoom";
import axios from "../../../../utils/api/axios";
function MaincontentRoom() {
  const [room, setroom] = useState([]);
  const roomdata = () => {
    axios
      .get("/find/room")
      .then((res) => setroom(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    roomdata();
  }, []);
  return (
    <div className="flex flex-auto flex-col px-2 h-[90vh]">
      <h1 className=" flex mx-auto bg-white text-xl py-2">Nagpur</h1>
      <div className="flex flex-wrap gap-5  h-full overflow-y-auto">
        {room.map((item, index) => {
          return <CardsRoom key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
export default MaincontentRoom;
