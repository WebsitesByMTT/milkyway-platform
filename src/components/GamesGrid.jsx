"use client";
import React, { useEffect, useState } from "react";
import { CarouselItem } from "./ui/carousel";
import FeaturedGameCard from "./FeaturedGameCard";
import GameCard from "./GameCard";
import GameModal from "./ui/GameModal";

const GamesGrid = ({ data }) => {
  const { featured, otherGames } = data || {};
  const [currentGame, setCurrentGame] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);

  const closeModalHandler = () => {
    setGameLoaded(false);
    setIsModalOpen(false);
  };


  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Create chunks for the slides after the first one
  const remainingChunks = chunkArray(otherGames.slice(6), 8);

  return (
    <>
      <CarouselItem className="flex justify-center m-auto w-[80%]">
        {featured.length > 0 && (
          <FeaturedGameCard
            src={featured[0]}
            setCurrentGame={setCurrentGame}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <div className="grid grid-cols-3 gap-[2vw] w-[65%] py-[3%]">
          {otherGames.slice(0, 6).map((game, index) => (
            <GameCard
              key={index}
              src={game}
              type={game.type}
              setCurrentGame={setCurrentGame}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      </CarouselItem>
      {remainingChunks.map((chunk, chunkIndex) => (
        <CarouselItem key={chunkIndex}>
          <div className="grid grid-cols-4 gap-[2vw] w-[85%] py-[3%] m-auto">
            {chunk.map((game, index) => (
              <GameCard
                key={index}
                src={game}
                type={game.type}
                setCurrentGame={setCurrentGame}
                setIsModalOpen={setIsModalOpen}
              />
            ))}
          </div>
        </CarouselItem>
      ))}
      <GameModal
        show={isModalOpen}
        onClose={closeModalHandler}
        src={currentGame}
        gameLoaded={gameLoaded}
        setGameLoaded={setGameLoaded}
      />
    </>
  );
};

export default GamesGrid;
