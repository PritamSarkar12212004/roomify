import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TakeoutDiningRoundedIcon from "@mui/icons-material/TakeoutDiningRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contextMaker from "../../../../context/contextMaker";
function LeftBar() {
  const { ProfileTogel, setProfileTogel } = useContext(contextMaker);
  const notify = () => {
    toast.info(" Working On It", {
      position: "top-center",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };
  useEffect(() => {
  }, [ProfileTogel]);
  return (
    <div className="flex h-full items-center gap-7">
      <NavLink
        className={(e) =>
          e.isActive
            ? "hover:text-red-700 text-red-700 duration-300 flex items-center px-3 py-2 rounded-xl bg-[#EDECFB] gap-2"
            : " flex items-center text-black duration-300 gap-2"
        }
        to="/"
      >
        <HomeRoundedIcon />
        Home
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? "hover:text-red-700 text-red-700 duration-300 flex items-center px-3 py-2 rounded-xl bg-[#EDECFB] gap-2"
            : " flex items-center text-black duration-300 gap-2"
        }
        to="/room"
      >
        <KingBedRoundedIcon />
        Room
      </NavLink>

      <div>
        <button
          onClick={notify}
          className="flex items-center text-black duration-300 gap-2"
        >
          {" "}
          <TakeoutDiningRoundedIcon />
          Tifin!
        </button>
        <ToastContainer
          position="top-center"
          autoClose={15000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
      </div>

      <button className="hover:text-blue-700 text-blue-700 duration-300 gap-2 flex items-center px-3 py-2 rounded-xl bg-[#EDECFB]">
        <NotificationsRoundedIcon />
      </button>
      <button onClick={() => setProfileTogel(!ProfileTogel)}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
        </Stack>
      </button>
    </div>
  );
}

export default LeftBar;
