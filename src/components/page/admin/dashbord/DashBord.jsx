import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import contextMaker from "../../../../context/contextMaker";
import ProfileSideBar from "../../../layouts/sidebar/ProfileSideBar";
import AdminProfile from "../../admin/adminProfile/AdminProfile";
import AdminRooms from "../../admin/adminRoom/AdminRooms";
import Private from "../../../private/Private";
function Profile() {
  const { setauth } = useContext(contextMaker);
  const navigate = useNavigate();
  const auth = () => {
    const auth = localStorage.removeItem("auth");
    setauth(null);
    navigate("/login");
  };
  return (
    <div className="w-full h-[90.6vh] flex">
      <span className="absolute h-[90.7vh]">
        <ProfileSideBar />
      </span>
      <div className="px-4 w-full h-full">
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<AdminProfile />} />
            <Route path="/room" element={<AdminRooms />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
