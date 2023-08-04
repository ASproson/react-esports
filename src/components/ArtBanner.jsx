import React from "react";
import "../App.css";

const dimensionArtBanner =
  "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6088e7599a28fd3/62b4ac17919dfb0f9bf00456/REV_Valorant_2022_E5A1_PlayVALORANT_PlayValorantHomepage_3440x1020_MB02.jpg";

export const ArtBanner = () => {
  return (
    <div className="mt-8">
      <div className="">
        <img
          src={dimensionArtBanner}
          alt="Valorant Dimension season art banner"
          className="object-none h-[50vh] mt-5 w-[100%]"
        />
      </div>

      <div className="relative text-white -top-[370px] z-30 uppercase left-[5%] sm:left-[10%] md:left-[21%]">
        <p className=" font-valorantStandard text-[15px] sm:text-[25px]">
          E p i s o d e _ 5 / / A c t 1 / / Y r 2
        </p>
        <p className=" font-valorantStandard text-[70px] sm:text-[90px] font-bold md:-ml-1">
          dimension
        </p>

        <div className="WatchLiveButtonContainer absolute left-[2.2%] sm:left-[1.2%] transform top-[140px] sm:top-[170px] hover:cursor-pointer md:-ml-3 lg:-ml-4 group">
          <div className="White Brackets">
            <div className="Top border-t-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -top-[10px]"></div>
            <div className="Bottom border-b-2 border-l-2 border-r-2 border-white opacity-70 h-[30px] w-[255px] absolute -left-[9px] -bottom-[10px]"></div>
          </div>

          <div className="RedBox bg-red-500 h-[60px] w-[238px]">
            <button className="text-white uppercase font-bold text-sm absolute left-1/2 hover:transform -translate-x-1/2 top-[18px] hover:duration-200 group-hover:scale-110 ease-in-out transition">
              Find out more
            </button>
            <div className="smallBoxesWithinWatchLiveTopLeft absolute bg-black h-[3px] w-[3px]"></div>
            <div className="smallBoxesWithinWatchLiveBottomRight absolute bottom-0 right-0 bg-black h-[3px] w-[3px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
