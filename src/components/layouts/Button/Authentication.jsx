import React from "react";
import AthenticateButton from "./AthenticateButton";

function Authentication() {
  const button = ["Login", "Signup"];
  return (
    <div>
      <AthenticateButton data={button} />
    </div>
  );
}

export default Authentication;
