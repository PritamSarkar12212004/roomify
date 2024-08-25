import React, { useState, useEffect } from "react";
import axios from "axios";

function NearbyExplore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/45f13fc0-0088-4c64-a91b-056c8ccca9b7")
      .then((res) => {
        setData(res.data.areas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center gap-10">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, index) => (
          <div
            className="flex flex-col items-center gap-3 text-xl hover:text-blue-600 duration-300 font-bold font-mono"
            key={index}
          >
            <img
              className="h-40 w-40 rounded-full"
              src={item.imgUrl || "/areaRoom/no.avif"}
              
            />
            <h1>{item.area}</h1>
          </div>
        ))
      )}
    </div>
  );
}

export default NearbyExplore;
