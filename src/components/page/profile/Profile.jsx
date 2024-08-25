import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import contextMaker from "../../../context/contextMaker";
function Profile() {
  const { setauth } = useContext(contextMaker);
  const navigate = useNavigate();
  const auth = () => {
    const auth = localStorage.removeItem("auth");
    setauth(null);
    navigate("/login");
  };
  return (
    <div>
      <button onClick={() => auth()}>logout</button>
    </div>
  );
}

export default Profile;
