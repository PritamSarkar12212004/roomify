import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/function/home/Home";
import "remixicon/fonts/remixicon.css";
function App() {
  return (
    <div className=" select-none">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
