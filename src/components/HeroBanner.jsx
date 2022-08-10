import React from "react";
import ReactPlayer from "react-player";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div className="border-2 border-black -mt-44">
      <div className="-mt-44">
        <div className="whiteBoxLeft absolute top-20 left-[32%] transform -translate-x-1/2 border-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[310px] shadow-2xl"></div>
        <div className="whiteBoxRight absolute top-20 transform -translate-x-1/2 right-[14%] border-l-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[200px] shadow-2xl"></div>
        <div className="redBox absolute top-[150px] transform left-[26.2%] -translate-x-1/2 bg-red-500 h-4 w-4"></div>
        <div className="redTriangle absolute top-[152px] transform -translate-x-1/2 left-[26.5%] bg-red-500 h-3 w-3 rotate-45"></div>
        <div className="whiteCutOut absolute bottom-[95px] -translate-x-[45px] bg-white h-20 w-20 rotate-45"></div>
        <div className="whiteBracketsRedBoxTop left-1/2 transform -translate-x-1/2 absolute bottom-[289px] border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px]"></div>
        <div className="whiteBracketsRedBoxBottom left-1/2 transform -translate-x-1/2 absolute bottom-[242px] border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px]"></div>
        <div className="redBox absolute bottom-[230px] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-red-500 h-[60px] w-[238px]">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white uppercase font-bold text-sm">
            Watch Live
          </p>
        </div>

        <div className="vidBackground">
          <div className="videoLoop">
            <ReactPlayer
              url={videoUrl}
              playing={true}
              muted={true}
              loop={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
