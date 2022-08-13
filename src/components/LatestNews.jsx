import React from "react";
import "../App.css";

const LatestNews = () => {
  const articles = [
    {
      id: 1,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      text: "Lorem 1",
      alt: 'Championship winners'
    },
    // {
    //   id: 2,
    //   img: "",
    //   text: "Lorem 2",
    // },
    // {
    //   id: 3,
    //   img: "",
    //   text: "Lorem 3",
    // },
    // {
    //   id: 4,
    //   img: "",
    //   text: "Lorem 4",
    // },
    // {
    //   id: 5,
    //   img: "",
    //   text: "Lorem 5",
    // },
    // {
    //   id: 6,
    //   img: "",
    //   text: "Lorem 6",
    // },
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

        <section className="Latest Articles relative -top-[150px]">
          <div className="border-2 border-red-500">
            {articles.map((article) => {
              return (
                <div key={article.id}>
                  <div>
                    <img src={article.img} alt="Champsionship winners" className="h-[300px] w-[500px]"/>
                    </div>
                  <div>{article.text}</div>
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
