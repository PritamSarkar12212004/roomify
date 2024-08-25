import React from "react";
import { NavLink } from "react-router-dom";

function AthenticateButton(props) {
  const { data } = props;
  return (
    <div className="flex gap-3">
      {data.map((item, index) => {
        return (
          <NavLink key={index}
            className={(e) =>
              e.isActive ? "bg-red-500 rounded-xl" : "bg-blue-500 rounded-xl"
            }
            to={`/${item}`}
          >
            <button className="px-4 py-2  text-white " key={index}>
              {item}
            </button>
          </NavLink>
        );
      })}
    </div>
  );
}

export default AthenticateButton;
