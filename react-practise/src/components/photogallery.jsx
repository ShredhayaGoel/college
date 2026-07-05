import React, { useEffect, useState } from "react";
import axios from "axios";

const Photogallery = () => {
  const [userdata, setuserdata] = useState([]);

  const getdata = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100",
    );

    setuserdata(response.data);
  };

  useEffect(function () {
    getdata();
  }, []);

  let printdata = "no user available";
  if (userdata.length > 0) {
    printdata = userdata.map(function (elem, idx) {
      return (
        <div className="w-64 h-64">
          <img
            src={elem.download_url}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <button onClick={getdata}>getdata</button>

      <div className="flex flex-wrap gap-4">{printdata}</div>
    </div>
  );
};

export default Photogallery;
