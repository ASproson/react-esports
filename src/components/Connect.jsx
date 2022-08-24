import React from "react";
import { BsPlayCircleFill } from 'react-icons/bs'

const Connect = () => {
  const vodList = [
    {
      id: 1,
      leftIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1647451114220_M3C_logo_square.png",
      rightIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1645434356978_ACEND_VECTOR_PURPLE_WITHOUT_TEXT1.png",
      leftTeam: "M3C",
      rightTeam: "Acend",
    },
    {
      id: 2,
      leftIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1630017626481_kru.png",
      rightIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1647451114220_M3C_logo_square.png",
      leftTeam: "KRU Esports",
      rightTeam: "M3C",
    },
    {
      id: 3,
      leftIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1637252586938_teamliquid.png",
      rightIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1645434356978_ACEND_VECTOR_PURPLE_WITHOUT_TEXT1.png",
      leftTeam: "Team Liquid",
      rightTeam: "Acend",
    },
    {
      id: 4,
      leftIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1630017626481_kru.png",
      rightIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1647451114220_M3C_logo_square.png",
      leftTeam: "KRU Esports",
      rightTeam: "FNATIC",
    },
    {
      id: 5,
      leftIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1652174377471_X10C_Logo_Color.png",
      rightIcon:
        "https://am-a.akamaihd.net/image?resize=70:70&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1647451114220_M3C_logo_square.png",
      leftTeam: "X10C ESPORT",
      rightTeam: "M3C",
    },
  ];

  return (
    <div className="font-valorantStandard -mt-[100px] md:w-[600px]">
      {/* Header Text */}
      <div className="flex justify-between pl-6 pr-6 text-3xl">
        <div className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer">Vods</div>
        <div className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer">View All</div>
      </div>

      {/* Team VOD List */}
      <div className="flex justify-between text-white">
        <div className="w-full md:w-[600px]">
          {vodList.map((match) => {
            return (
              <div key={match.id} className="flex justify-between mt-4 mb-4 ml-6 mr-6 bg-gray-800 rounded-md h-[80px]">
                <div className="flex ml-4 p-4">
                  <div className="flex items-center">
                    <img src={match.leftIcon} alt="team icon" className="h-10 w-10" /> <span className="text-sm ml-5 mr-5">vs</span>
                    <img src={match.rightIcon} alt="team icon" className="h-10 w-10" />
                  </div>
                  <div className="ml-6">
                    <p>{match.leftTeam}</p>
                    <p>{match.rightTeam}</p>
                  </div>
                </div>
                <div className="flex items-center mr-6"><BsPlayCircleFill className="text-white text-3xl transition ease-in-out hover:text-red-500 hover:scale-125 cursor-pointer"/></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Connect;
