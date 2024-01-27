import { VodCard } from "./VodCard";
import { VOD_LIST } from "../lib/VOD_LIST";

export const Connect = () => {
  return (
    <section className="font-valorantStandard -mt-[100px] md:w-[600px]">
      <div className="flex justify-between pl-6 pr-6 text-3xl">
        <h3 className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer w-full">
          Vods
        </h3>
        <h3 className="transition ease-in-out hover:text-red-500 hover:scale-105 cursor-pointer w-full text-right">
          View All
        </h3>
      </div>

      <TeamVodList />
    </section>
  );
};

const TeamVodList = () => {
  return (
    <article className="flex justify-between text-white">
      <div className="w-full md:w-[600px]">
        {VOD_LIST.map((match) => {
          return <VodCard match={match} key={match.id} />;
        })}
      </div>
    </article>
  );
};
