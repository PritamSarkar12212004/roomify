import React, { useEffect, useState } from "react";
import contextMaker from "./contextMaker";

const ContextProvider = ({ children }) => {
  const [ProfileTogel, setProfileTogel] = useState(false);
  const [theme, setTheme] = useState(false);
  const [auth, setauth] = useState();

  const [room, setroom] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setauth(localStorage.getItem("auth"));
    }
  }, []);
  return (
    <contextMaker.Provider
      value={{ ProfileTogel, setProfileTogel, theme, setTheme, setauth, auth ,setroom,room}}
    >
      {children}
    </contextMaker.Provider>
  );
};

export default ContextProvider;
