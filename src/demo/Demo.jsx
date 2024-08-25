import React, { useEffect, useState } from "react";
import ContextMaker from "./ContextMaker";
import randomColor from "randomcolor";

const ContextProvider = ({ children }) => {
  // for theme background and text
  //for sm navbar
  const [smenu, setsmenu] = useState(true);
  // for the notification cebter
  const [noti, setnoti] = useState(false);
  // fot randomBgColor
  const [randomBgColor, setrandomBgColor] = useState(randomColor());
  console.log(randomBgColor);

  const [theme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      description: "This is the description for Movie 1.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/mlc_highlights_vertical_carousel-1721020413009.jpg",
    },
    {
      id: 2,
      title: "Movie 2",
      description: "This is the description for Movie 2.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/top_10_vertical_carousel-1720645133122.jpg",
    },
    {
      id: 3,
      title: "Movie 3",
      description: "This is the description for Movie 3.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/vertical-mobile-1720069024862.jpg",
    },
    {
      id: 4,
      title: "Movie 4",
      description: "This is the description for Movie 4.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/mobile-1721470487231.jpg",
    },
    {
      id: 5,
      title: "Movie 5",
      description: "This is the description for Movie 5.",
      image:
        "https://v3img.voot.com/resizeMedium,w_538,h_763/v3Storage/assets/vertical-mobile-1720616655818.jpg",
    },
  ];
  const data = {
    title: "New Movies",
    data: [
      {
        id: 1,
        title: "New Movies",
        image:
          "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/cvsc-1721568059771.jpg",
      },
      {
        id: 2,
        title: "New Movies",
        image:
          "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-1721654033425.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-4-1721583090536.jpg",
      },
      {
        id: 4,
        title: "New Movies",
        image:
          "https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/3x4-1720379628225.jpg",
      },
    ],
  };
  const data2 = {
    title: "Top Movies",
    data: [
      {
        id: 1,
        title: "new Movies",
        image:
          "https://i.pinimg.com/564x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg",
      },
      {
        id: 2,
        title: "New Movies",
        image:
          "https://i.pinimg.com/736x/51/26/08/512608d675fd98fca4105f90ab7d6d5c.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/24/ab/ae/24abae63eacee53b19a8c87d0624fb6a.jpg",
      },
    ],
  };
  const data3 = {
    title: "Comedy Movies",
    data: [
      {
        id: 1,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/e1/a7/62/e1a7620432b5105429e73ca4ca16a12a.jpg",
      },
      {
        id: 2,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/5e/32/f9/5e32f90ff44d49d666df9c6521b000c0.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/75/4e/b8/754eb80cf8699804c0c3588155149df8.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/9f/e0/49/9fe0497e8ac5724db7df481948d9a0bf.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/736x/35/8c/22/358c22c6c79303f85ccc0f05e24f71f8.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/31/29/b8/3129b8ab849a232ed46311d1624a94f3.jpg",
      },
      {
        id: 3,
        title: "New Movies",
        image:
          "https://i.pinimg.com/564x/37/a5/92/37a5922f0b787878f6114b86cd94c630.jpg",
      },
    ],
  };

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ContextMaker.Provider
      value={{
        theme,
        setIsDarkTheme,
        smenu,
        setsmenu,
        noti,
        setnoti,
        randomBgColor,
        movies,
        data,
        data2,
        data3,
      }}
    >
      {children}
    </ContextMaker.Provider>
  );
};
export default ContextProvider;