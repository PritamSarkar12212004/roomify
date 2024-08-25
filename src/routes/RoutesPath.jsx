import React from "react";
import { Route, Routes } from "react-router-dom";
import Room from "../components/page/rooms/Room";
import Tifin from "../components/page/tifin/Tifin";
import About from "../components/page/about/About";
import Contact from "../components/page/contact/Contact";
import Policy from "../components/page/policy/Policy";
import HomePage from "../components/page/home/HomePage";
import Profile from "../components/page/profile/Profile";
import Setting from "../components/page/setting/Setting";
import AuthenticateLogin from "../components/page/athenticate/AuthenticateLogin";
import Private from "../components/private/Private";
import AuthenticateRegister from "../components/page/athenticate/AuthenticateRegister";
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="/login" element={<AuthenticateLogin />} />\{" "}
      <Route path="/signup" element={<AuthenticateRegister />} />\{" "}
    </Routes>
  );
}

export default RoutesPath;
