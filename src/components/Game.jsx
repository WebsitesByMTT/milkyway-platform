"use client";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Sidebar from "./Sidebar";
import GamesGrid from "./GamesGrid";

const Game = ({ data }) => {
  const [gamesData, setGamesData] = useState(data);
  const [selectedOption, setSelectedOption] = useState("all");
  const [category, setCategory] = useState(["fishing", "slot"]);

  useEffect(() => {
    const carousel = document.querySelector(".Carousel");
    let isScrolling = false;

    const handleWheel = (event) => {
      if (!isScrolling) {
        isScrolling = true;

        if (event.deltaY > 0) {
          const nextButton = document.querySelector(".CarouselNext");
          nextButton.click();
        } else {
          const prevButton = document.querySelector(".CarouselPrevious");
          prevButton.click();
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

  useEffect(() => {
    const filterData = () => {
      if (selectedOption === "all") {
        setGamesData(data);
      } else {
        const newFilteredData = data.filter(
          (game) => game.category === selectedOption
        );
        setGamesData(newFilteredData);
      }
    };

    filterData();
  }, [selectedOption, category, data]);

  return (
    <div className="Carousel relative">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Carousel
        className="w-[100%] m-auto"
        opts={selectedOption === "all" ? { loop: true } : {}}
      >
        <CarouselContent className="min-h-[52vw] sm:min-h-[37vw]">
          <GamesGrid data={gamesData} />
        </CarouselContent>
        <CarouselPrevious className="CarouselPrevious w-[5%]" />
        <CarouselNext className="CarouselNext w-[5%]" />
      </Carousel>
    </div>
  );
};

export default Game;
