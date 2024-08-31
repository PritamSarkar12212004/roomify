import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../../utils/api/axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function ShowRoom() {
  const params = useParams();
  const [room, setroom] = useState([]);
  const [imgdata, setimgdata] = useState();
  const dataset = (res) => {
    setroom(res.data);
    setimgdata(res.data.imageUrl1);
  };
  const { imageUrl1, imageUrl2, imageUrl3 } = room;
  const roomdataFetac = () => {
    axios
      .post("/find/room/peoplesite/search", params.id)
      .then((res) => dataset(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    roomdataFetac();
  }, []);
  return (
    <div className="w-full h-[90.6vh] px-10 py-10 flex  ">
      <div className="h-full w-[30%] ">
        <img
          src={imgdata}
          className="w-full h-60 duration-300 rounded-2xl"
          alt=""
        />
        <div className="w-full gap-3 h-36 flex   justify-between mt-5">
          <img
            src={imageUrl1}
            onClick={() => setimgdata(imageUrl1)}
            className="h-28 w-36  rounded-xl hover:scale-110 duration-300 cursor-pointer"
            alt=""
          />
          <img
            src={imageUrl2}
            onClick={() => setimgdata(imageUrl2)}
            className="h-28  w-36 rounded-xl hover:scale-110 duration-300 cursor-pointer"
            alt=""
          />
          <img
            src={imageUrl3}
            onClick={() => setimgdata(imageUrl3)}
            className="h-28 w-36  rounded-xl hover:scale-110 duration-300 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="w-[70%] h-full flex flex-col gap-3 px-20 py-5">
        {room.description}
        <div className="flex gap-2 justify-center flex-col">
          <span className="text-xl  ">
            <span className="text-red-500 ">
              <CurrencyRupeeIcon />
            </span>
            {room.price}
          </span>
          <span className=" text-xl">
            <span className="text-orange-500">
              <LocationOnIcon />
            </span>
            {room.area}
          </span>
          <div className="w-1/2 flex gap-4 flex-wrap ">
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {room.type}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {room.gender}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {room.furnished}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {room.independent}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );``
}

export default ShowRoom;
