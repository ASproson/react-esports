import { NavElement } from "./NavElement";
import { NAV_LIST } from "../lib/NAV_LIST";
import { GiHamburgerMenu } from "react-icons/gi";

const logoLink = "https://img.icons8.com/color/452/valorant.png";

export const NavBar = () => {
  return (
    <div className="navContainer flex bg-black h-20 justify-between sticky z-50">
      <div className="leftNav flex mr-6 text-white items-center ml-14">
        <img
          src={logoLink}
          alt="Valorant logo"
          className="h-10 w-10 transition duration-200 hover:scale-150 cursor-pointer"
        />
      </div>
      <div className="rightNav flex space-x-6 text-[#8FA3B0] items-center mr-14 uppercase font-bold text-sm">
        {NAV_LIST.map((navEl) => (
          <NavElement navEl={navEl} id={navEl.id} key={navEl.id} />
        ))}
        {/* TODO: Place NavElement map inside of the dropdown on click */}
        <GiHamburgerMenu className="h-7 w-7 sm:hidden transition duration-200 hover:scale-125 hover:text-red-500 ease-in cursor-pointer mt-2" />
      </div>
    </div>
  );
};
