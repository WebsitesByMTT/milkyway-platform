"use client";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import data from "@/utils/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Sidebar from "./Sidebar";

const Game = () => {
  useEffect(() => {
    const carousel = document.querySelector(".Carousel");
    let isScrolling = false;

    const handleWheel = (event) => {
      if (!isScrolling) {
        isScrolling = true;

        if (event.deltaY > 0) {
          const nextButton = document.querySelector(".CarouselNext");
          nextButton.click();
          // if (nextButton.disabled) {
          //   setCurrentIndex(0);
          // } else {
          //   nextButton.click();
          //   setCurrentIndex((prev) => prev + 1);
          // }
          // console.log(currentIndex);
        } else {
          const prevButton = document.querySelector(".CarouselPrevious");
          prevButton.click();
          // if (prevButton.disabled) {
          //   setCurrentIndex(0);
          // } else {
          //   nextButton.click();
          //   setCurrentIndex((prev) => prev - 1);
          // }
          // console.log(currentIndex);
        }

        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    };

    carousel.addEventListener("wheel", handleWheel);

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="Carousel relative">
      <Sidebar />
      <Carousel className="w-[100%] m-auto">
        <CarouselContent>
          {data
            .reduce((chunks, _, index) => {
              if (index === 0) {
                chunks.push(data.slice(0, 6));
              } else if ((index - 6) % 8 === 0) {
                chunks.push(data.slice(index, index + 8));
              }
              return chunks;
            }, [])
            .map((chunk, chunkIndex) => (
              <React.Fragment key={chunkIndex}>
                {chunk.length === 6 ? (
                  <CarouselItem className="flex justify-center m-auto w-[80%]">
                    <FeaturedCard data={data} />
                    <div className="grid grid-cols-3 gap-6 w-[65%] py-[2rem]">
                      {chunk.map((game, index) => (
                        <GameCard
                          key={index}
                          src={game.gameThumbnailUrl}
                          // gameId={game.gameId}
                          // gameName={game.gameName}
                          // gameHostLink={game.gameHostLink}
                          type={game.type}
                        />
                      ))}
                    </div>
                  </CarouselItem>
                ) : (
                  <CarouselItem>
                    <div className="grid grid-cols-4 gap-6 w-[85%] py-[2rem] m-auto">
                      {chunk.map((game, index) => (
                        <GameCard
                          key={index}
                          src={game.gameThumbnailUrl}
                          // gameId={game.gameId}
                          // gameName={game.gameName}
                          // gameHostLink={game.gameHostLink}
                          type={game.type}
                        />
                      ))}
                    </div>
                  </CarouselItem>
                )}
              </React.Fragment>
            ))}
        </CarouselContent>
        <CarouselPrevious className="CarouselPrevious w-[5%]" />
        <CarouselNext className="CarouselNext w-[5%]" />
      </Carousel>
    </div>
  );
};

export default Game;

const FeaturedCard = ({ data }) => {
  const [featured, setFeatured] = useState();
  useEffect(() => {
    setFeatured(data?.find((item) => item.flag === "feature"));
  }, []);

  return (
    <div className="w-[20%] h-auto py-[2rem]">
      <div className="m-auto w-[90%] h-full rounded-[2rem] p-1 bg-[#B18423] shadow-lg">
        <div className="bg-[#DC6E0E] rounded-[1.5rem] w-full h-full p-4">
          <div className="bg-gradient-to-b p-2 rounded-[1.5rem] from-[#EFC54C] shadow-lg via-[#F98F08] to-[#943E00] w-full h-full">
            <div className="relative bg-gradient-to-br rounded-[1.5rem] from-blue-900 to-indigo-900 w-full h-full">
              <Image
                src={featured?.gameThumbnailUrl}
                className="rounded-xl"
                fill
                objectFit="cover"
                alt="game-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
