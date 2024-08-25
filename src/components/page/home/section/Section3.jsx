import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
function Section3() {
  return (
    <div className="w-4/5 flex mx-auto h-[60vh] gap-20 text-2xl m-10 items-center">
      <img
        loading="lazy"
        className="h-full rounded-xl hover:scale-110 duration-300"
        src="/poster/persion-Photoroom.png"
        alt=""
      />
      <div>
        <h1 className="opacity-90 ">
          Simplify your living experience with Roomify. Discover comfortable
          room rentals and tasty tiffin services right in your local area. We
          connect you with the best options to make your stay enjoyable and
          convenient. Whether you're looking for a cozy room or a delicious
          meal, Roomify has you covered. Your perfect stay and meal are just a
          few clicks away.
        </h1>
        <span className="w-full flex  cursor-pointer justify-center text-blue-700">
          <KeyboardArrowDownRoundedIcon />
        </span>
      </div>
    </div>
  );
}

export default Section3;
