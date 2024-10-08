import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../../utils/api/axios.js";
import contextMaker from "../../../context/contextMaker.js";
function AuthenticateRegister() {
  document.title = "RoomiFy | Register";
  const { setauth } = useContext(contextMaker);
  const { reset, handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const resAlert = (res) => {
    res === "User already exists"
      ? alert("User already exists plz Login")
      : authsetup(res);
  };
  const authsetup = (res) => {
    localStorage.setItem("auth", JSON.stringify(res));
    console.log(res);
    setauth(JSON.stringify(res));
    reset();
    navigate("/login");
  };
  const formSubmit = (data) => {
    document.title = "RoomiFy | Register";
    axios
      .post("/auth/register", data)
      .then((res) => resAlert(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className=" w-full h-[90.7vh]  flex flex-wrap  overflow-hidden relative "
      style={{
        backgroundImage: "url('/Login/17973908.jpg')",
        backgroundSize: "cover",
      }}
    >
      <img
        src="/Login/1.png"
        className="h-96 rotate-[-25deg]  left-[-10%] top-[-2%]  absolute"
        alt=""
      />
      <img
        src="/Login/5.png"
        className="h-[70vh]  absolute right-[-10%] top-[-10%] "
        alt=""
      />
      <img
        src="/Login/6.png"
        className="h-96  absolute  right-[-5%]  bottom-[-20%] "
        alt=""
      />
      <img
        src="/Login/7.png"
        className="h-[75vh]  absolute top-4     left-60 rotate-[20deg]"
        alt=""
      />
      <img
        src="/Login/9.png"
        className="h-[70vh] bottom-[-20%]  absolute  "
        alt=""
      />
      <div className="w-full h-full bg-black/15 backdrop-blur-sm flex justify-center items-center ">
        <form
          action=""
          className=" flex flex-col gap-5 justify-center items-center border-2 border-zinc-800 px-10 py-10 rounded-2xl bg-black/5 backdrop-blur-sm"
          onSubmit={handleSubmit(formSubmit)}
        >
          <h1 className="text-white text-3xl m-4">Register Your Identity </h1>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="h-12 rounded-lg px-4 w-80 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            {...register("name")}
          />
          <input
            type="text"
            required
            placeholder="enter your Email"
            className="h-12 rounded-lg px-4 w-80 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            {...register("email")}
          />

          <input
            type="text"
            required
            placeholder="enter your password"
            className="h-12 rounded-lg px-4 w-80 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            {...register("password")}
          />
          <div className="w-full flex justify-center items-center gap-2">
            <select
              name=""
              id=""
              className="h-12 rounded-lg px-4 w-40  outline-none border-none bg-black/45 text-white backdrop-blur-sm"
              {...register("city")}
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
            <select
              name=""
              id=""
              className="h-12 rounded-lg px-4 w-40 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
              {...register("gender")}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <p className="text-white opacity-85 text-sm">
            Already have an account? Access your dashboard-
            <Link to="/login" className="text-red-400 ">
              login now!
            </Link>
          </p>
          <button className="px-4 mt-3 py-3 bg-blue-500 w-44 rounded text-white hover:bg-blue-600 duration-300">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthenticateRegister;
