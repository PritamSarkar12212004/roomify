import React from "react";

function SideBarFilter(props) {
  const { data } = props;
  return (
    <div>
      <select
        name=""
        id=""
        className="h-10 w-full rounded-md border-gray-300 border-[1px] outline-none"
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
