import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import contextMaker from "../../../context/contextMaker";
import axios from "../../../utils/api/axios.js";
function AuthenticateLogin() {
  document.title = "RoomiFy | Login";
  const { setauth } = useContext(contextMaker);
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();
  const loginAuth = (data) => {
    data === "User not found" ? reseter() : authSetup(data);
  };
  const reseter = () => {
    reset();

    alert("User not found Plz Register");
  };
  const authSetup = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setauth(data);
    reset();
    navigate("/");
  };
  const LoginformSubmit = (data) => {
    axios
      .post("/auth/login", data)
      .then((res) => loginAuth(res.data))
      .catch((err) => console.log(err));
  };
  document.title = "RoomiFy | Login";
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
          className=" flex flex-col gap-5 justify-center items-center border-2 border-zinc-800 px-10 py-20 rounded-2xl bg-black/15 backdrop-blur-sm"
          onSubmit={handleSubmit(LoginformSubmit)}
        >
          <h1 className="text-white text-3xl m-4">Login Your Identity </h1>
          <input
            required
            type="text"
            placeholder="enter your Email"
            className="h-12 rounded-lg px-4 w-72 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            {...register("email")}
          />
          <input
            required
            type="text"
            placeholder="enter your password"
            className="h-12 rounded-lg px-4 w-72 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            {...register("password")}
          />
          <p className="text-white opacity-85 text-sm">
            Not registered yet? Get started—
            <Link to="/signup" className="text-red-400 ">
              register now!
            </Link>
          </p>
          <button
            type="submit"
            className="px-4 mt-3 py-3 bg-blue-500 w-44 rounded text-white hover:bg-blue-600 duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthenticateLogin;
