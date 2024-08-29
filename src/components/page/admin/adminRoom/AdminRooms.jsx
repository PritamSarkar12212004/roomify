import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../../utils/api/axios";
import { NavLink } from "react-router-dom";

function AdminRooms() {
  const { register, handleSubmit, reset } = useForm();
  const [owner, setuserid] = useState();
  const [room, setroom] = useState([]);

  const idData = () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      try {
        const data = JSON.parse(auth);
        setuserid(data._id);
      } catch (error) {
        console.error("Failed to parse auth from localStorage", error);
      }
    }
  };

  const authAdiminRoom = async () => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      try {
        const data = JSON.parse(auth);
        const res = await axios.post("/admin/publish/room/find", data);
        setroom(res.data);
      } catch (error) {
        console.error("Failed to fetch rooms or parse auth from localStorage", error);
      }
    }
  };

  const formSubmit = (data) => {
    axios
      .post("/admin/publish/room", { data, owner })
      .then((res) => authAdiminRoom())
      .catch((err) => console.log(err));
    reset();
  };

  useEffect(() => {
    idData();
    authAdiminRoom();
  }, []);
  return (
    <div className="w-full h-[90.6vh] py-3 flex">
      <div className="h-full w-[63%] flex flex-wrap overflow-y-auto">
        {room.map((item, index) => {
          const formattedDate = new Date(item.createdAt).toLocaleDateString(
            "en-GB"
          );

          return (
            <NavLink to={`/admin/rooms/controll/${item._id}`}>
              <div
                className="relative border-2 border-gray-300 rounded-xl m-2 h-80 px-2 py-2 hover:scale-105 duration-300 cursor-pointer"
                key={index}
              >
                <img
                  src={item.imageUrl1 ? item.imageUrl1 : "/areaRoom/1.jpg"}
                  className="h-56 rounded-xl w-60"
                  alt=""
                />
                <h1 className="text-xl font-mono flex gap-2">
                  <i className="ri-map-pin-2-line"></i>
                  {item.area}
                </h1>
                <h1 className="text-lg font-mono flex gap-2">
                  <span className="text-red-500">
                    <i className="ri-spam-3-fill"></i>
                  </span>
                  publish
                </h1>
                <h2 className="w-full flex justify-end text-sm">
                  Date: {formattedDate}
                </h2>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="w-[35%] h-full overflow-y-auto py-4">
        <h1 className="w-full flex justify-center text-xl">Publish Rooms</h1>
        <form action="" className="px-10" onSubmit={handleSubmit(formSubmit)}>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <div className="flex flex-col gap-4">
            <input
              className="block w-full text-sm py-2 px-2 border rounded-lg cursor-pointer bg-gray-300 focus:outline-none"
              placeholder="Image Url 1"
              id="file_input"
              type="text"
              required
              {...register("imageUrl1")}
            />
            <input
              className="block w-full text-sm py-2 px-2 border rounded-lg cursor-pointer bg-gray-300 focus:outline-none"
              placeholder="Image Url 2"
              id="file_input"
              type="text"
              required
              {...register("imageUrl2")}
            />
            <input
              className="block w-full text-sm py-2 px-2 border rounded-lg cursor-pointer bg-gray-300 focus:outline-none"
              placeholder="Image Url 3"
              id="file_input"
              type="text"
              required
              {...register("imageUrl3")}
            />
            <input
              type="number"
              className="h-12 rounded-lg px-4 w-full outline-none border-none bg-zinc-200"
              placeholder="Enter Price"
              required
              {...register("price")}
            />
            <textarea
              name=""
              id=""
              className="w-full border-[1px] bg-zinc-200   rounded-lg px-4 py-2 h-52 outline-none"
              {...register("description")}
              required
            ></textarea>
            <select
              name=""
              id=""
              className="h-12 rounded-lg px-4 w-full outline-none border-none bg-zinc-200"
              {...register("area")}
            >
              <option value="Sitabuldi">Sitabuldi</option>
              <option value="Lokmanya_Nagar">Lokmanya Nagar</option>
              <option value="Bansi_Nagar">Bansi Nagar</option>
              <option value="wadi">Wadi</option>
              <option value="Dharampeth">Dharampeth</option>
              <option value="Sadar">Sadar</option>
              <option value="Civil_Lines">Civil Lines</option>
              <option value="Ramdaspeth">Ramdaspeth</option>
              <option value="Manish_Nagar">Manish Nagar</option>
              <option value="Hingna">Hingna</option>
            </select>
          </div>
          <div className="w-full mt-2 flex justify-between">
            <select
              name=""
              id=""
              className="w-[49%] h-10 rounded-lg px-4 outline-none border-none bg-zinc-200"
              {...register("furnished")}
            >
              <option value="Furnished">Furnished</option>
              <option value="Semifurnished">Semifurnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
            <select
              name=""
              id=""
              className="w-[49%] h-10 rounded-lg px-4 outline-none border-none bg-zinc-200"
              {...register("independent")}
            >
              <option value="Independent">Independent</option>
              <option value="Nonindependent">Nonindependent</option>
            </select>
          </div>
          <div className="w-full mt-2 flex justify-between">
            <select
              name=""
              id=""
              className="w-[49%] h-10 rounded-lg px-4 outline-none border-none bg-zinc-200"
              {...register("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Family">Family</option>
            </select>
            <select
              name=""
              id=""
              className="w-[49%] h-10 rounded-lg px-4 outline-none border-none bg-zinc-200"
              {...register("type")}
            >
              <option value="Single">Single</option>
              <option value="Duo">Duo</option>
              <option value="Group">Group</option>
            </select>
          </div>
          <div className="w-full flex justify-center mt-5">
            <button className="px-5 py-2 bg-blue-600 rounded-xl text-white">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminRooms;
