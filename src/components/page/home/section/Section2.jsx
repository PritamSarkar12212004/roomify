import React, { useState } from "react";
import NearbyExplore from './element/NearbyExplore'
NearbyExplore
function Section2() {
  return (
    <div className="w-full h-screen py-10">
      <h1 className="w-full text-center text-5xl font-bold font-mono">
        Explore Nearby
      </h1>
      <div className="mt-10 ">
        <NearbyExplore/>
      </div>
    </div>
  );
}

export default Section2;
