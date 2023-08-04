import React from "react";

export const Socials = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      icon: "https://assets.valorantesports.com/val/twitter.3c7988bf9d.svg",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "https://assets.valorantesports.com/val/instagram.9224bf3ef7.svg",
    },
    {
      id: 3,
      name: "Youtube",
      icon: "https://assets.valorantesports.com/val/youtube.f2f774a4bb.svg",
    },
    {
      id: 4,
      name: "Twitch",
      icon: "https://assets.valorantesports.com/val/twitch.696cd8ca21.svg",
    },
  ];

  return (
    <div className="font-valorantStandard md:w-[600px]">
      {/* Header Text */}
      <div className="flex justify-between pl-6 pr-6 text-3xl group">
        <div className="transition ease-in-out group-hover:text-red-500 group-hover:scale-105 cursor-pointer">
          Connect
        </div>
      </div>

      {/* Socials List */}
      <div className="flex justify-between text-white">
        <div className="w-full md:w-[600px]">
          {socialLinks.map((link) => {
            return (
              <div
                key={link.id}
                className="flex justify-between mt-4 mb-4 ml-6 mr-6 bg-gray-800 rounded-md h-[80px] group"
              >
                <div className="flex ml-4 p-4">
                  <div className="flex items-center">
                    <img
                      src={link.icon}
                      alt="social media icon"
                      className="h-10 w-10 transition ease-in-out group-hover:scale-110 cursor-pointer"
                    />
                    <span className="text-2xl mt-1 ml-10 transition ease-in-out group-hover:text-red-500 group-hover:scale-110 cursor-pointer">
                      {link.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
