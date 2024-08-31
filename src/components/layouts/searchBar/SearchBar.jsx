import React from "react";
import axios from "../../../utils/api/axios";

function SearchBar() {
  const searchEngine = (data) => {
    axios
      .post("/find/room/searchengine",data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-full flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="h-4/5 max-w-96 outline-none px-3 bg-gray-300 rounded-xl"
        onChange={(e) => searchEngine(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
