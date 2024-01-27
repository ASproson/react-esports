import { BsPlayCircleFill } from "react-icons/bs";

export const VodCard = ({ match, id }) => {
  return (
    <div
      key={id}
      className="flex justify-between mt-4 mb-4 ml-6 mr-6 bg-gray-800 rounded-md h-[80px] group cursor-pointer"
    >
      <div className="flex ml-4 p-4">
        <div className="flex items-center">
          <img src={match.leftIcon} alt="team icon" className="h-10 w-10" />
          <span className="text-sm ml-5 mr-5">vs</span>
          <img src={match.rightIcon} alt="team icon" className="h-10 w-10" />
        </div>
        <div className="ml-6">
          <p>{match.leftTeam}</p>
          <p>{match.rightTeam}</p>
        </div>
      </div>
      <button className="flex items-center mr-6">
        <BsPlayCircleFill className="text-white text-3xl transition ease-in-out group-hover:text-red-500 group-hover:scale-125" />
      </button>
    </div>
  );
};
