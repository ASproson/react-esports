import React from "react";
import "../App.css";

const LatestNews = () => {
  return (
    <div>
      <div className="relative">

        <div className="relative flex left-[45%] sm:left-[50%] top-[30px] space-x-11">
          <div className="bg-red-500 h-2 w-2"></div>
          <div className="bg-red-500 h-2 w-2"></div>
        </div>

        <div className="stencil">
          <h1 className="text-[200px] uppercase whitespace-nowrap -mt-[40px] -ml-[50px] font-valorant opacity-5 text-center">
            champions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
