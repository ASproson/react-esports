import { VodCard } from "./VodCard";
import { VOD_LIST } from "../lib/VOD_LIST";

export const Connect = () => {
  return (
    <div className="font-valorantStandard -mt-[100px] md:w-[600px]">
      {/* Header Text */}
      <div className="flex justify-between pl-6 pr-6 text-3xl">
        <div className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer w-full">
          Vods
        </div>
        <div className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer w-full text-right">
          View All
        </div>
      </div>

      {/* Team VOD List */}
      <div className="flex justify-between text-white">
        <div className="w-full md:w-[600px]">
          {VOD_LIST.map((match) => {
            return <VodCard match={match} />;
          })}
        </div>
      </div>
    </div>
  );
};
