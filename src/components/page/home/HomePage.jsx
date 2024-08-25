import React from "react";
import Seaction1 from "./section/Seaction1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Footer from "../footer/Footer";
function HomePage() {
  return (
    <div className="max-w-7xl 10 px-10">
      
      <Seaction1 />
      <Section3 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default HomePage;
