import React from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MiniSearchBar from "../../layouts/searchBar/MiniSearchBar";
import TakeoutDiningRoundedIcon from "@mui/icons-material/TakeoutDiningRounded";

import SideBarFilter from "../DropDown/SideBarFilter";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SideBar() {
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
  const priceFilter = [
    "PRICE",
    "1500 to 2000",
    "2000 to 2500",
    ,
    "2500 to 3000",
    ,
    "3000 to 3500",
    "3500 to 4000",
    ,
    "4000 to 4500",
    ,
    "4500 to 5000",
    ,
    "5000 to 5500",
    "5500 to 6000",
    ,
    "6000 to 6500",
    ,
    "7000 to 7500",
  ];
  const olnyFor = ["ONLY FOR", "male", "female", "family"];
  const onlyForType = ["single", "duo", "gropus"];
  const type = ["independent", "non-independent  "];
  const Furnished = ["furnished", "unfurnished", "semi-furnished"];
  const parking = ["PARKING", "yes", "no"];
  return (
    <div className="h-[90vh] w-56 px-5 py-3 border-r-[1px] border-gray-300 font-mono relative ">
      <div className="w-full flex justify-between">
        <h1 className="text-xl">Filter</h1>
        <WidgetsIcon />
      </div>
      <div>
        <MiniSearchBar />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <SideBarFilter data={priceFilter} />
        <SideBarFilter data={olnyFor} />
        <SideBarFilter data={onlyForType} />
        <SideBarFilter data={Furnished} />
        <SideBarFilter data={parking} />
        <SideBarFilter data={type} />
      </div>
      <div className="absolute bottom-2 left-0 w-full flex ">
        <button className="h-10 w-full hover:text-red-600 duration-300  rounded-md outline-none  px-3 py-2 flex items-center justify-between ">
      
            <div>
              <button onClick={notify} className="flex items-center gap-3">
                {" "}
                <SettingsInputCompositeIcon /> Facility
                <ArrowRightIcon />
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
        </button>
      </div>
    </div>
  );
}

export default SideBar;
