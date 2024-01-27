import { useState } from "react";
import { ARTICLES } from "../lib/ARTICLES";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Article } from "./Article";

export const LatestNews = () => {
  const [readMore, setReadMore] = useState(3);
  const [readMoreClicked, setReadMoreClicked] = useState(false);

  const handleReadMoreToggle = () => {
    if (!readMoreClicked) {
      setReadMore(6);
      setReadMoreClicked(!readMoreClicked);
    } else {
      setReadMore(3);
      setReadMoreClicked(!readMoreClicked);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="flex ml-[45%] sm:left-[50%] space-x-12">
          <div className="bg-red-500 h-2 w-2 absolute top-[20px] md:top-[30px]"></div>
          <div className="bg-red-500 h-2 w-2 absolute top-[20px] md:top-[30px]"></div>
        </div>

        <div className="Stencil overflow-hidden">
          <h1 className="text-[140px] md:text-[155px] xl:text-[175px] uppercase whitespace-nowrap -mt-[40px] -ml-[50px] font-valorant opacity-5 text-center">
            champions are made
          </h1>
        </div>

        <div className="Title relative -top-[130px] ml-[20px] lg:left-[15%]">
          <h2 className="text-[50px] text-red-500 uppercase font-valorant font-bold">
            Latest News
          </h2>
        </div>

        <section className="Latest Articles lg:w-[1250px] lg:grid lg:grid-cols-3 gap-1 -mt-[140px] relative mx-auto">
          {ARTICLES.slice(0, readMore).map((article) => {
            return (
              <Article article={article} id={article.id} key={article.id} />
            );
          })}
        </section>
        <div className="Show More Button w-[115px] mx-auto mt-8">
          <div
            className="font-valorantStandard text-3xl cursor-pointer hover:text-red-500 duration-200 ease-in mx-auto text-center"
            onClick={() => handleReadMoreToggle()}
          >
            <button>{!readMoreClicked ? "Show more" : "Show less"}</button>
            <p className="animate-bounce flex justify-center mt-2">
              <BsChevronDoubleDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
