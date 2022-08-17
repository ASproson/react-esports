import React from "react";

const NavBar = () => {
  
  const navList = [
    {
      id: 1,
      title: "schedule",
    },
    {
      id: 2,
      title: "watch",
    },
    {
      id: 3,
      title: "standings",
    },
    {
      id: 4,
      title: "news",
    },
    {
      id: 5,
      title: new Date().getFullYear() + 1 + " VCT",
    },
  ];

  const logoLink =
    "https://img.icons8.com/color/452/valorant.png";

  return (
    <div className="navContainer flex bg-black h-20 justify-between sticky z-50">
      <div className="leftNav flex mr-6 text-white items-center ml-14">
        <img src={logoLink} className="h-10 w-10" />
      </div>
      <div className="rightNav flex space-x-6 text-[#8FA3B0] items-center mr-14 uppercase font-bold text-sm">
        {navList.map((navEl) => {
          return (
            <p
              key={navEl.id}
              className="cursor-pointer transition duration-200 hover:scale-110 hover:text-white hidden sm:block"
            >
              {navEl.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
