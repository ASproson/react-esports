import React from "react";
import ReactPlayer from "react-player";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div>
      <div className="-mt-44">
        <div className="whiteBoxLeft absolute top-20 translate-x-[105px] border-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[315px] shadow-2xl"></div>
        <div className="whiteBoxRight absolute top-20 translate-x-[1330px] border-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[200px] shadow-2xl"></div>
        <div className="redBox absolute top-[150px] translate-x-[106px] bg-red-500 h-4 w-4"></div>
        <div className="redTriangle absolute top-[152px] translate-x-[116px] bg-red-500 h-3 w-3 rotate-45"></div>
        <div className="whiteCutOut absolute bottom-[10px] -translate-x-[40px] bg-white h-20 w-20 rotate-45"></div>
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
