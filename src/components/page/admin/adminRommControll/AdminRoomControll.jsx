import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../utils/api/axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
function AdminRoomControll() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setdata] = useState([]);
  const { imageUrl1, imageUrl2, imageUrl3 } = data;
  const [imgdata, setimgdata] = useState();
  const dataset = (res) => {
    document.title = "Admin Controll";
    setdata(res.data);
    setimgdata(res.data.imageUrl1);
  };
  const [roomdeletedata, setroomdeletedata] = useState();
  const deleteroom = (data) => {
    axios
      .put("/find/room/delete", data)
      .then((res) => setroomdeletedata(res))
      .catch((err) => console.log(err));
    navigate("/admin/profile/room");
  };
  const roomControllUpdatePaht = (data) => {
    navigate(`/admin/rooms/controll/update/${data.id}`);
  };
  useEffect(() => {
    axios
      .post("/find/room/controll", params)
      .then((res) => dataset(res))
      .catch((err) => console.log(err));
  }, [roomdeletedata]);

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
        {data.description}
        <div className="flex gap-2 justify-center flex-col">
          <span className="text-xl  ">
            <span className="text-red-500 ">
              <CurrencyRupeeIcon />
            </span>
            {data.price}
          </span>
          <span className=" text-xl">
            <span className="text-orange-500">
              <LocationOnIcon />
            </span>
            {data.area}
          </span>
          <div className="w-1/2 flex gap-4 flex-wrap ">
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {data.type}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {data.gender}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {data.furnished}
            </span>
            <span className="px-4 py-2 bg-gray-400 rounded-xl">
              {data.independent}
            </span>
          </div>
          <div className="mt-10 ">
            <Stack direction="row" spacing={2} className="flex gap-3">
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteroom(data)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => roomControllUpdatePaht(params)}
              >
                Update
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRoomControll;
