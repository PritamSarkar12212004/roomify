import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "react-toastify/dist/ReactToastify.css";
function RightBar() {
  const auth = localStorage.getItem("auth");
  return (
    <div className="right flex h-full items-center text- gap-5  font-medium opacity-85">
      <img src="/logo/mainLogo.png" className="h-full" alt="" />
      {auth ? (
        <div>
          <NavLink
            className={(e) =>
              e.isActive
                ? "hover:text-red-700 text-red-700 duration-300"
                : "text-black duration-300"
            }
            to="/about"
          >
            About <ArrowDropDownIcon />{" "}
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive
                ? "hover:text-red-700 text-red-700 duration-300"
                : "text-black duration-300"
            }
            to="/contact"
          >
            Contact <ArrowDropDownIcon />{" "}
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive
                ? "hover:text-red-700 text-red-700 duration-300"
                : "text-black duration-300"
            }
            to="/policy"
          >
            Policy <ArrowDropDownIcon />{" "}
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default RightBar;
