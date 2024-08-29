import React from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import RoutesPath from "./routes/RoutesPath";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div>
        <RoutesPath />
      </div>
    </div>
  );
}

export default App;
