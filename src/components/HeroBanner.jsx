import { VideoPlayer } from "./VideoPlayer";

export const HeroBanner = () => {
  return (
    <div className="bg-black w-full h-[600px] sm:h-fit relative">
      <WhiteLines />
      <TriangleCutOut />
      <HeroText />
      <WatchLive />
      <VideoPlayer />
    </div>
  );
};

/**
 * @returns White lines that visually divide up the video player
 */
const WhiteLines = () => {
  return (
    <>
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
    </>
  );
};

/**
 * @returns A triangle shape to be placed on top of the VideoPlayer
 */
const TriangleCutOut = () => {
  return (
    <div className="absolute -bottom-[58px] -left-[12px] -translate-x-[45px] bg-offWhite h-28 w-28 rotate-45"></div>
  );
};

const HeroText = () => {
  return (
    <div className="absolute top-[100px] md:top-1/3 transform left-1/2 -translate-x-1/2 ">
      <h1 className="font-valorant text-red-500 text-center text-[40px] xl:text-[60px] 3xl:text-[90px] mt-[90px] xl:mt-0 z-20">
        The Latest Events
      </h1>
      <h1 className="font-valorant text-center text-white text-[15px] lg:text-[20px]">
        The place for tactical shooter news
      </h1>
    </div>
  );
};

const WatchLive = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[75%] sm:top-[50%] md:top-[70%] lg:top-[70%] xl:top-[55%] hover:cursor-pointer group">
      <WhiteBrackets />

      <button className="RedBox bg-red-500 h-[60px] w-[238px]">
        <span className=" text-white uppercase font-bold text-sm absolute left-1/2 -translate-x-1/2 top-[18px] transition hover:cursor-pointer duration-300 group-hover:scale-125 ease-in-out">
          Watch Live
        </span>
        <SquareCutOut position={"top-0"} />
        <SquareCutOut position={"bottom-0 right-0"} />
      </button>
    </div>
  );
};

/**
 * @returns Brackets to encase the WatchLive button container
 */
export const WhiteBrackets = () => {
  return (
    <>
      <div className="border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -top-[10px]"></div>
      <div className="border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -bottom-[10px]"></div>
    </>
  );
};

/**
 * @param position
 * @returns Square black cut outs
 */
export const SquareCutOut = ({ position }) => {
  return (
    <div className={`absolute ${position} bg-black h-[3px] w-[3px]`}></div>
  );
};
