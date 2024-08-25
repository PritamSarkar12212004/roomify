import React, { useContext, useState } from "react";
import contextMaker from "../../../context/contextMaker";
import { Link, NavLink } from "react-router-dom";
function ToggalBoxLayout() {
  const { ProfileTogel, setProfileTogel, theme, setTheme } =
    useContext(contextMaker);

  const themeHandle = () => {
    setTheme(!theme);
  };
  return (
    <div
      className={`fixed ${
        ProfileTogel ? "right-0 duration-300" : "right-[-100%] duration-300"
      } h-[90vh] w-40 z-50 px-7 py-3 duration-300 bg-white/30 backdrop-blur-lg flex flex-col gap-10 text-lg `}
      j
    >
      <NavLink to="/profile">
        {" "}
        <i class="ri-account-circle-fill"></i> Profile{" "}
      </NavLink>
      <div className="flex items-start flex-col gap-2">
        <button onClick={() => postbuttonHandle()}>
          <i class="ri-signpost-fill"></i> Post{" "}
          <i class="ri-arrow-down-s-fill"></i>
        </button>
        <div
          className=" flex
          duration-300 flex-col gap-2"
        >
          <Link>
            {" "}
            <i class="ri-home-2-fill"></i> Rooms
          </Link>
          <Link>
            <i class="ri-pie-chart-box-fill"></i> Tifin
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={() => themeHandle()}>
          <i class="ri-sun-cloudy-fill"></i> Theme{" "}
          <i class="ri-arrow-down-s-fill"></i>
        </button>
        <div
          className="flex
           duration-300 flex-col gap-2"
        >
          <Link>
            <i class="ri-moon-fill"></i> Dark
          </Link>
          <Link>
            <i class="ri-moon-line"></i> Light
          </Link>
        </div>
      </div>
      <NavLink to="/setting">
        <i class="ri-settings-3-fill"></i> Setting
      </NavLink>
    </div>
  );
}

export default ToggalBoxLayout;
