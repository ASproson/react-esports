export const Article = ({ article, id }) => {
  return (
    <div key={id} className="flex justify-center ml-2 mr-2">
      <div className="relative mb-4">
        <div className="rounded-sm hover:bg-red-500 duration-200 ease-in lg:h-[230px] lg:w-[400px] md:h-[300px] md:w-[600px]">
          <img
            src={article.img}
            alt={article.alt}
            className="h-full w-full rounded-sm cursor-pointer hover:opacity-50 duration-200 ease-in"
          />
        </div>
        <div className="font-valorantStandard">
          <div className="mt-3 text-2xl">{article.date}</div>
          <div className="text-3xl cursor-pointer hover:text-red-500 duration-200 ease-in lg:w-[400px]">
            {article.text}
          </div>
        </div>
      </div>
    </div>
  );
};
