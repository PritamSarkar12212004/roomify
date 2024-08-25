import React from "react";
import { Link } from "react-router-dom";

function PrimaryButton(props) {
  return (
    <Link to={"/room"}>
      <button className="px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white duration-300 w-40 border-2 border-blue-500">
        {props.content}
      </button>
    </Link>
  );
}

export default PrimaryButton;

