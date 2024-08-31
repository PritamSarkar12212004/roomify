import React, { useContext } from "react";
import axios from "../../../utils/api/axios";
import contextMaker from "../../../context/contextMaker";
function SideBarFilter(props) {
  const { setroom } = useContext(contextMaker);
  const { data } = props;
  const filter = (data) => {
    axios
      .post("/filter/controll", data)
      .then((res) => {
        setroom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <select
        name=""
        id=""
        className="h-10 w-full rounded-md border-gray-300 border-[1px] outline-none"
        onChange={(e) => filter(e.target.value)}
      >
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SideBarFilter;
