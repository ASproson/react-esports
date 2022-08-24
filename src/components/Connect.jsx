import React from "react";

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
    <div className="font-valorantStandard -mt-20">
      {/* Header Text */}
      <div className="flex justify-between">
        <div className="">Vods</div>
        <div className="">View All</div>
      </div>

      {/* Team VOD List */}
      <div className="flex justify-between border-2 border-blue-500 text-white">
        <div className="w-full">
          {vodList.map((match) => {
            return (
              <div key={match.id} className="flex justify-between mt-4 mb-4 ml-6 mr-6 bg-gray-800">
                <div className="flex">
                  <div className="flex items-center">
                    <img src={match.leftIcon} className="h-10 w-10" /> <span className="text-sm ml-2 mr-2">vs</span>
                    <img src={match.rightIcon} className="h-10 w-10" />
                  </div>
                  <div className="ml-4">
                    <p>{match.leftTeam}</p>
                    <p>{match.rightTeam}</p>
                  </div>
                </div>
                <div className="flex items-center mr-6">play</div>
              </div>
            );
          })}
        </div>
        {/* <div>play</div> */}
      </div>
    </div>
  );
};

export default Connect;
