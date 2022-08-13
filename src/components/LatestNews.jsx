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

        <div className="Stencil">
          <h1 className="text-[200px] uppercase whitespace-nowrap -mt-[40px] -ml-[50px] font-valorant opacity-5 text-center">
            champions are made
          </h1>
        </div>

        <div className="Title relative -top-[145px] left-[79px]">
            <h2 className="text-[50px] text-red-500 uppercase font-valorant font-bold">
                Latest News
            </h2>
        </div>

      </div>
    </div>
  );
};

export default LatestNews;
