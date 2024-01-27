import { SOCIALS } from "../lib/SOCIALS";
import { SocialCard } from "./SocialCard";

export const Socials = () => {
  return (
    <div className="font-valorantStandard md:w-[600px]">
      <div className="flex justify-between pl-6 pr-6 text-3xl group">
        <div className="transition ease-in-out group-hover:text-red-500 group-hover:scale-105 cursor-pointer">
          Connect
        </div>
      </div>

      <div className="flex justify-between text-white">
        <div className="w-full md:w-[600px]">
          {SOCIALS.map((social, id) => {
            return <SocialCard social={social} id={id} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};
