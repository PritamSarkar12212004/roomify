import React, { useEffect, useState } from "react";
import contextMaker from "./contextMaker";

const ContextProvider = ({ children }) => {
  const [ProfileTogel, setProfileTogel] = useState(false);
  const [theme, setTheme] = useState(false);
  const [auth, setauth] = useState();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setauth(localStorage.getItem("auth"));
    }
  }, []);
  return (
    <contextMaker.Provider
      value={{ ProfileTogel, setProfileTogel, theme, setTheme, setauth, auth }}
    >
      {children}
    </contextMaker.Provider>
  );
};

export default ContextProvider;
