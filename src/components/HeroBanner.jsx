import React from "react";
import "../App.css";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div className="bg-black  w-full h-[600px] sm:h-fit relative">
      <div className="whiteLines">
        <div className="whiteBoxLeft absolute left-[32%] transform -translate-x-1/2 h-full w-[310px]">
          <div className="border-l-[1.5px] border-r-[1.5px] w-full h-full opacity-30"></div>
          <div className="redSquare absolute top-[150px] sm:top-[250px] md:top-[340px] bg-red-500 h-4 w-4 hidden sm:block"></div>
          <div className="redTriangle absolute top-[152px] sm:top-[252px] md:top-[342px] ml-[9px] bg-red-500 h-3 w-3 rotate-45 hidden sm:block"></div>
        </div>

        <div className="whiteBoxRight absolute transform -translate-x-1/2 right-[14%] h-full w-[200px]">
          <div className="border-l-[1.5px] border-gray-400 w-full h-full opacity-30 z-0"></div>
          <div className="redSquare absolute top-[150px] bg-red-500 h-4 w-4 sm:hidden"></div>
          <div className="redTriangle absolute top-[152px] ml-[9px] bg-red-500 h-3 w-3 rotate-45 sm:hidden"></div>
        </div>
      </div>

      <div className="whiteCutOut absolute -bottom-[58px] -left-[12px] -translate-x-[45px] bg-offWhite h-28 w-28 rotate-45"></div>

      <div className="Hero Text">
        <div className="absolute top-[100px] md:top-1/3 transform left-1/2 -translate-x-1/2 ">
          <h1 className="font-valorant text-red-500 text-center text-[40px] xl:text-[60px] 3xl:text-[90px] mt-[90px] xl:mt-0 z-20">
            The Latest Events
          </h1>
          <h1 className="font-valorant text-center text-white text-[15px] lg:text-[20px]">
            The place for tactical shooter news
          </h1>
        </div>
      </div>

      <div className="WatchLiveButtonContainer absolute left-1/2 transform -translate-x-1/2 top-[65%] sm:top-[50%] md:top-[70%] lg:top-[70%] xl:top-[55%] hover:cursor-pointer">
        <div className="White Brackets">
          <div className="Top border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -top-[10px]"></div>
          <div className="Bottom border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -bottom-[10px]"></div>
        </div>

        <div className="RedBox bg-red-500 h-[60px] w-[238px]">
          <p className=" text-white uppercase font-bold text-sm absolute left-1/2 hover:transform -translate-x-1/2 top-[18px] hover:cursor-pointer hover:duration-200 hover:scale-110">
            Watch Live
          </p>
          <div className="smallBoxesWithinWatchLiveTopLeft absolute bg-black h-[3px] w-[3px]"></div>
          <div className="smallBoxesWithinWatchLiveBottomRight absolute bottom-0 right-0 bg-black h-[3px] w-[3px]"></div>
        </div>
      </div>

      <div className="vidBackground -z-10">
        <video
          controls
          autoPlay
          muted
          loop
          className="pointer-events-none h-[100%] w-[100%]  sm:-mt-[100px] md:-mt-[150px]"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroBanner;
