import React from "react";
import { useState } from "react";
import "../App.css";
import { BsChevronDoubleDown } from 'react-icons/bs'

const LatestNews = () => {
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

  const articles = [
    {
      id: 1,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      date:
        13 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "VCT Stage 2 Masters Recap // Return of the Champions",
      alt: "championship winners holding trophy",
    },
    {
      id: 2,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/bltdad29f65f60eb513/62eb9b7b99dab06ebd13d176/VCT-Off-Season-RedBull-Header_1920x1080.jpg?width=2472&height=1390",
      date:
        5 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "Red Bull Home Ground // Off-season tour announcement",
      alt: "championship winners holding trophy",
    },
    {
      id: 3,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blte641f2bd31733e66/62d6bbc3c75c5836dbd3835c/Valorant_Masters_2022_16x9_V12.jpg?width=2472&height=1390",
      date:
        2 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "Valorant Masters // Watch Parties UK & Nordics",
      alt: "Valorant masters watch parties location maps",
    },
    {
      id: 4,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blt40e206aa5fefb384/62e147e0a30ae37191c61d96/VCT_Stage_2_Masters_Recap_Header.jpg?width=2472&height=1390",
      date:
        13 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "VCT Stage 2 Masters Recap // Return of the Champions",
      alt: "championship winners holding trophy",
    },
    {
      id: 5,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/bltdad29f65f60eb513/62eb9b7b99dab06ebd13d176/VCT-Off-Season-RedBull-Header_1920x1080.jpg?width=2472&height=1390",
      date:
        5 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "Red Bull Home Ground // Off-season tour announcement",
      alt: "championship winners holding trophy",
    },
    {
      id: 6,
      img: "https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/blte641f2bd31733e66/62d6bbc3c75c5836dbd3835c/Valorant_Masters_2022_16x9_V12.jpg?width=2472&height=1390",
      date:
        2 +
        " / " +
        (new Date().getMonth() + 1) +
        " / " +
        new Date().getFullYear(),
      text: "Valorant Masters // Watch Parties UK & Nordics",
      alt: "Valorant masters watch parties location maps",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className=" flex ml-[45%] sm:left-[50%] space-x-12">
          <div className="bg-red-500 h-2 w-2 absolute top-[30px]"></div>
          <div className="bg-red-500 h-2 w-2 absolute top-[30px]"></div>
        </div>

        <div className="Stencil overflow-hidden">
          <h1 className="text-[175px] uppercase whitespace-nowrap -mt-[40px] -ml-[50px] font-valorant opacity-5 text-center">
            champions are made
          </h1>
        </div>

        <div className="Title relative -top-[130px] ml-[20px] lg:left-[15%]">
          <h2 className="text-[50px] text-red-500 uppercase font-valorant font-bold">
            Latest News
          </h2>
        </div>

        <section className="Latest Articles relative -top-[145px] ml-5 mr-5 lg:ml-[10px] md:ml-[80px] flex flex-wrap">
          {articles.slice(0, readMore).map((article) => {
            return (
              <div key={article.id} className="relative lg:left-[15%] lg:mr-10">
                <div className="relative mb-4">
                  <div className="rounded-sm hover:bg-red-500 duration-200 ease-in lg:h-[230px] lg:w-[400px] md:h-[400px] md:w-[750px]">
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
          })}
          <div className="font-valorantStandard text-3xl cursor-pointer hover:text-red-500 duration-200 ease-in mx-auto" onClick={() => handleReadMoreToggle()}>
            <button className="">
              {!readMoreClicked ? "Show more" : "Show less"}
            </button>
            <p className="animate-bounce flex justify-center mt-2"><BsChevronDoubleDown /></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestNews;
