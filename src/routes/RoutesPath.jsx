import React from "react";
import { Route, Routes } from "react-router-dom";
import Room from "../components/page/rooms/Room";
import Tifin from "../components/page/tifin/Tifin";
import About from "../components/page/about/About";
import Contact from "../components/page/contact/Contact";
import Policy from "../components/page/policy/Policy";
import HomePage from "../components/page/home/HomePage";
import Profile from "../components/page/admin/dashbord/DashBord";
import Setting from "../components/page/setting/Setting";
import AuthenticateLogin from "../components/page/athenticate/AuthenticateLogin";
import Private from "../components/private/Private";
import AuthenticateRegister from "../components/page/athenticate/AuthenticateRegister";
import Private2 from "../components/private/Private2";
import AdminRoomControll from "../components/page/admin/adminRommControll/AdminRoomControll";
function RoutesPath() {
  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<Room />} />
        <Route path="/tifin" element={<Tifin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/admin/profile/*" element={<Profile />} />
        <Route path="/admin/rooms/controll/:id" element={<AdminRoomControll />} />
      </Route>
      <Route element={<Private2 />}>
        <Route path="/login" element={<AuthenticateLogin />} />
        <Route path="/signup" element={<AuthenticateRegister />} />
      </Route>
    </Routes>
  );
}

export default RoutesPath;
