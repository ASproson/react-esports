import React from "react";
import ReactPlayer from "react-player";

const HeroBanner = () => {
  const videoUrl =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";
  return (
    <div className="border-red-500 border-2">
      <div className="-mt-44">
        <div className="whiteBox absolute top-20 translate-x-24 border-[1.5px] border-white opacity-25 h-full -mt-12 z-10 w-[270px] shadow-2xl"></div>
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
