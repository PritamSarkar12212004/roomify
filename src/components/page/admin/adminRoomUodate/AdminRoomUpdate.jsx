import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../utils/api/axios";

function AdminRoomUpdate() {
  document.title = "Admin Room Update";
  const params = useParams().id;
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [owner, setowner] = useState();
  const [userid, setuserid] = useState();
  const formSubmit = (data) => {
    axios.post("/find/room/update", { data, owner, userid });
    reset();
    navigate(-1);
  };
  const idData = () => {
    setuserid(params);
    const auth = localStorage.getItem("auth");
    const data = JSON.parse(auth);
    setowner(data._id);
  };
  useEffect(() => {
    idData();
  }, []);
  return (
    <div className="w-full h-[90.6vh] flex overflow-y-auto justify-center">
      {" "}
      <div className="w-[35%] h-full overflow-y-auto py-4">
        <h1 className="w-full flex justify-center text-xl">{params}</h1>
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

export default AdminRoomUpdate;
