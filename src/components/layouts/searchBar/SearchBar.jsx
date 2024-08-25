import React from "react";

function SearchBar() {
  return (
    <div className="h-full flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="h-4/5 max-w-96 outline-none px-3 bg-gray-300 rounded-xl"
      />
    </div>
  );
}

export default SearchBar;
