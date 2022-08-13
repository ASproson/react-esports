import React from "react";
import "../App.css";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div className=" bg-black fixed w-full">
      <div className="flex flex-col">
        <div className="whiteBoxLeft absolute left-[32%] transform -translate-x-1/2 border-l-[1.5px] border-r-[1.5px] border-white opacity-25 h-full z-10 w-[310px] shadow-2xl"></div>
        <div className="whiteBoxRight absolute transform -translate-x-1/2 right-[14%] border-l-[1.5px] border-white opacity-25 h-full z-10 w-[200px] shadow-2xl"></div>

        <div className="squareTriangle absolute left-[130px] sm:hidden">
          <div className="redSquare absolute top-[150px] bg-red-500 h-4 w-4"></div>
          <div className="redTriangle absolute top-[152px] ml-[9px] bg-red-500 h-3 w-3 rotate-45"></div>
        </div>

        <div className="whiteCutOut absolute -bottom-[58px] -left-[12px] -translate-x-[45px] bg-offWhite h-28 w-28 rotate-45"></div>

        <div className="Hero Text">
          <div className="absolute top-[100px] xl:top-[150px] 3xl:top-1/3 transform left-1/2 -translate-x-1/2 ">
            <h1 className="font-valorant text-red-500 text-center text-[40px] xl:text-[60px] 3xl:text-[90px] mt-[90px] xl:mt-0">
              The Latest Events
            </h1>
            <h1 className="font-valorant text-center text-white text-[15px] lg:text-[20px]">
              The place for tactical shooter news
            </h1>
          </div>
        </div>

        <div className="WatchLiveButtonContainer absolute left-1/2 transform -translate-x-1/2 lg:top-[35%] top-[53%] sm:top-[50%] md:top-[48%] xl:top-[55%] hover:cursor-pointer">
          <div className="White Brackets">
            <div className="Top border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -top-[10px]"></div>
            <div className="Bottom border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -bottom-[10px]"></div>
          </div>

          <div className="RedBox bg-red-500 h-[60px] w-[238px]">
            <p className=" text-white uppercase font-bold text-sm absolute left-1/2 transform -translate-x-1/2 top-[18px] hover:cursor-pointer">
              Watch Live
            </p>
            <div className="smallBoxesWithinWatchLiveTopLeft absolute bg-black h-[3px] w-[3px]"></div>
            <div className="smallBoxesWithinWatchLiveBottomRight absolute bottom-0 right-0 bg-black h-[3px] w-[3px]"></div>
          </div>
        </div>


        <div className="vidBackground -z-10">
          <video controls autoPlay muted loop className="pointer-events-none h-[100%] w-[700px] sm:w-full sm:-mt-[100px] md:-mt-[150px]">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
