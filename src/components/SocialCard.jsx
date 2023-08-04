export const SocialCard = ({ social, id }) => {
  return (
    <div
      key={id}
      className="flex justify-between mt-4 mb-4 ml-6 mr-6 bg-gray-800 rounded-md h-[80px] cursor-pointer group"
    >
      <div className="flex ml-4 p-4">
        <div className="flex items-center">
          <img
            src={social.icon}
            alt="social media icon"
            className="h-10 w-10 transition ease-in-out group-hover:scale-110 cursor-pointer"
          />
          <span className="text-2xl mt-1 ml-10 transition ease-in-out group-hover:text-red-500 group-hover:scale-110 cursor-pointer">
            {social.name}
          </span>
        </div>
      </div>
    </div>
  );
};
