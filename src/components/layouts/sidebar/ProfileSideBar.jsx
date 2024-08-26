import React, { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddHomeIcon from "@mui/icons-material/AddHome";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContrastIcon from "@mui/icons-material/Contrast";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";
function ProfileSideBar() {
  const [sidenav, setsidenav] = useState(false);

  return (
    <div
      className={`h-full w-52 bg-gray-300 bg-opacity-50 backdrop-blur-sm fixed z-50 ${
        sidenav ? "left-0" : "left-[-100%]"
      } transition-all duration-300 relative `}
    >
      <button onClick={() => setsidenav(!sidenav)}>
        <span className="text-7xl absolute right-[-27%] top-1/2 transform -translate-y-1/2 mr-2 text-blue-600 opacity-95">
          {sidenav ? (
            <i class="ri-arrow-drop-left-line"></i>
          ) : (
            <i class="ri-arrow-drop-right-line"></i>
          )}
        </span>
      </button>
      <div className="w-full ">
        <h1 className="w-full flex justify-center text-xl font-mono text-blue-600">
          Dash Bord
        </h1>
        <ul className="w-full flex flex-col gap-6 px-5 mt-5 ">
          <NavLink to={"/admin/profile"}>
            <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
              <ManageAccountsIcon /> Profile
            </li>
          </NavLink>
          <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
            <FavoriteIcon /> Fevuirate
          </li>
          <NavLink to={"/admin/profile/room"}>
            <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65  duration-300 gap-4">
              <AddHomeIcon /> Room
            </li>
          </NavLink>
          <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
            <InventoryIcon /> Tifiin Box
          </li>
          <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
            <ContrastIcon /> Theme
          </li>
          <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
            <LocationOnIcon /> Loaction
          </li>
          <li className="w-full flex justify-center cursor-pointer bg-gray-300 bg-opacity-50 backdrop-blur-sm   py-3 rounded-xl  border-opacity-65 hove:bg-gray-400 duration-300 gap-4 ">
            <SettingsIcon /> Setting
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSideBar;
