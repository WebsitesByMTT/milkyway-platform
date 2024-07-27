"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  CarouselItem,
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import FeaturedGameCard from "./FeaturedGameCard";
import GameCard from "./GameCard";
import Autoplay from "embla-carousel-autoplay";

const GamesGrid = ({ data, category }) => {
  const { featured, others } = data || {};
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
  };

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      chunks.push(array?.slice(i, i + chunkSize));
    }
    return chunks;
  };

  let mergedArray = data?.featured?.concat(data?.others);

  // Create chunks for the slides after the first one
  const arrayToUse = category === "all" ? others : mergedArray;
  const remainingChunks = chunkArray(
    arrayToUse?.slice(category === "all" ? 6 : 8),
    8
  );
  
  return (
    <>
      <CarouselItem className="flex justify-center m-auto w-[80%]">
        {featured?.length > 0 && category === "all" && (
          <div className="w-[20%] h-auto py-[3%]">
            <div className="w-[90%] h-full rounded-[6%] p-[2%] bg-[#B18423] shadow-lg ">
              <div className="bg-[#DC6E0E] rounded-[6%] w-full h-full p-[3%]">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                  className="h-full "
                  onSlideChange={handleSlideChange}
                >
                  <CarouselContent className="h-full">
                    {featured?.map((game, index) => (
                      <CarouselItem key={index}>
                        <FeaturedGameCard src={game} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex items-center justify-center">
                  {featured.map((_, index) => (
                    <span
                      key={index}
                      className={` inline-block mr-2 w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-[#295fcf]" : "bg-white"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {category === "all" ? (
          <div className="grid grid-cols-3 gap-[2vw] sm:min-h-[36vw] min-h-[66.5vw]  w-[65%] py-[3%]">
            {others?.slice(0, 6).map((game, index) => (
              <GameCard key={index} src={game} type={game.type} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-[2vw] w-[85%] sm:min-h-[36vw] min-h-[66.5vw] py-[3%]">
            {mergedArray?.slice(0, 8).map((game, index) => (
              <GameCard key={index} src={game} type={game.type} />
            ))}
          </div>
        )}
      </CarouselItem>
      {remainingChunks?.map((chunk, chunkIndex) => (
        <CarouselItem key={chunkIndex}>
          <div className="grid grid-cols-4 gap-[2vw] w-[85%] py-[3%] m-auto">
            {chunk?.map((game, index) => (
              <GameCard key={index} src={game} type={game.type} />
            ))}
          </div>
        </CarouselItem>
      ))}
    </>
  );
};

export default GamesGrid;
