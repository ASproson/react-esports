import React from "react";
import ReactPlayer from "react-player";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div className="border-2 border-black bg-black fixed w-full">
      <div className="flex flex-col">
        <div className="whiteBoxLeft absolute left-[32%] transform -translate-x-1/2 border-l-[1.5px] border-r-[1.5px] border-white opacity-25 h-full z-10 w-[310px] shadow-2xl"></div>
        <div className="whiteBoxRight absolute top-20 transform -translate-x-1/2 right-[14%] border-l-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[200px] shadow-2xl"></div>

        <div className="redBox absolute top-[150px] transform left-[26.2%] -translate-x-1/2 bg-red-500 h-4 w-4"></div>
        <div className="redTriangle absolute top-[152px] transform -translate-x-1/2 left-[26.5%] bg-red-500 h-3 w-3 rotate-45"></div>

        {/* <div className="whiteCutOut absolute bottom-[95px] -translate-x-[45px] bg-red-600 h-20 w-20 rotate-45"></div> */}

        <div className="Hero Text">
          <div className="absolute top-[100px] xl:top-[150px] 3xl:top-1/3 transform left-1/2 -translate-x-1/2 ">
            <h1 className="font-valorant text-red-500 text-[40px] xl:text-[60px] 3xl:text-[90px] ">
              The Latest Events
            </h1>
            <h1 className="font-valorant text-white text-[15px] lg:text-[20px]">
              The place for tactical shooter news
            </h1>
          </div>
        </div>

        <div className="WatchLiveButtonContainer absolute left-1/2 transform -translate-x-1/2 bottom-[47.5%]">
          <div className="White Brackets">
            <div className="Top border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -top-[10px]"></div>
            <div className="Bottom border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -bottom-[10px]"></div>
          </div>

          <div className="RedBox bg-red-500 h-[60px] w-[238px]">
            <p className=" text-white uppercase font-bold text-sm absolute left-1/2 transform -translate-x-1/2 top-[18px]">
              Watch Live
            </p>
            <div className="smallBoxesWithinWatchLiveTopLeft absolute bg-black h-[3px] w-[3px]"></div>
            <div className="smallBoxesWithinWatchLiveBottomRight absolute bottom-0 right-0 bg-black h-[3px] w-[3px]"></div>
          </div>
        </div>


        
        <div className="vidBackground border-2 border-blue-500">
        {/* <div className="h-20 w-20 bg-red-500 mt-40 z-40 relative">test</div> */}
          <ReactPlayer
            url={videoUrl}
            playing={true}
            muted={true}
            loop={true}
            width={"100%"}
            height={"100%"}
            style={{ border: "2px solid red", zIndex: '-10', marginTop: '-450px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
