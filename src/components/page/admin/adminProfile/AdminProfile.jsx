import React from "react";
function AdminProfile() {
  document.title = "Admin Profile";
  return (
    <div className="w-full h-full relative ">
      <img
        className="w-full h-52 rounded-2xl"
        src="/Profile/tyhb_12.jpg"
        alt=""
      />
      <div className="top-28 left-16 absolute">
        <span className="flex h-52 w-52 rounded-full  overflow-hidden">
          <img
            src="/avtar/tIeMRmsFR_OavSiy2mRupA.webp"
            className=" object-cover "
            alt=""
          />
        </span>
        <div className="flex flex-col justify-center  text-2xl font-mono">
          <h1>Pritam Sarkar</h1>
          <h2 className="text-xl">pritam7797419792@gmail.com</h2>
          <h2 className="text-xl">
            <i class="ri-map-pin-2-line">Bansinagar, Nagpur</i>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
