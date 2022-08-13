import React from "react";
import "../App.css";

const LatestNews = () => {
  const articles = [
    {
      id: 1,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      date:
        new Date().getDate() +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "VCT Stage 2 Masters Recap // Return of the Champions",
      alt: "championship winners holding trophy",
    },
    {
      id: 2,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      date:
        new Date().getDate() +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "VCT Stage 2 Masters Recap: Return of the Champions",
      alt: "championship winners holding trophy",
    },
    {
      id: 1,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      date:
        new Date().getDate() +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "VCT Stage 2 Masters Recap: Return of the Champions",
      alt: "championship winners holding trophy",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="relative flex left-[45%] sm:left-[50%] top-[30px] space-x-11">
          <div className="bg-red-500 h-2 w-2"></div>
          <div className="bg-red-500 h-2 w-2"></div>
        </div>

        <div className="Stencil">
          <h1 className="text-[175px] uppercase whitespace-nowrap -mt-[40px] -ml-[50px] font-valorant opacity-5 text-center">
            champions are made
          </h1>
        </div>

        <div className="Title relative -top-[130px] left-[79px]">
          <h2 className="text-[50px] text-red-500 uppercase font-valorant font-bold">
            Latest News
          </h2>
        </div>

        <section className="Latest Articles relative -top-[145px] ml-5 mr-5">
          <div className="">
            {articles.map((article) => {
              return (
                <div key={article.id} className="mb-4">
                  <div>
                    <img
                      src={article.img}
                      alt="Champsionship winners"
                      className="h-[300px] w-[500px] rounded-sm cursor-pointer"
                    />
                  </div>
                  <div className="font-valorantStandard">
                    <div className="mt-3 text-2xl">{article.date}</div>
                    <div className="text-3xl cursor-pointer">
                      {article.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
