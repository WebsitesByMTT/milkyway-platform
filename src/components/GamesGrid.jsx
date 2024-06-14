"use client";
import React, { useEffect, useState } from "react";
import { CarouselItem } from "./ui/carousel";
import FeaturedGameCard from "./FeaturedGameCard";
import GameCard from "./GameCard";
import GameModal from "./ui/GameModal";

const GamesGrid = ({ data }) => {
  const [featuredGames, setFeaturedGames] = useState(data);
  const [unfeaturedGames, setUnfeaturedGames] = useState(data);

  const [currentGame, setCurrentGame] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    const newFeaturedGames = data.filter((game) => game.type === "featured");
    const newUnfeaturedGames = data.filter((game) => game.type !== "featured");

    setFeaturedGames(newFeaturedGames);
    setUnfeaturedGames(newUnfeaturedGames);
  }, [data]);

  const closeModalHandler = () => {
    setGameLoaded(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Is Game Loade : ", gameLoaded);
  }, [gameLoaded]);
  return (
    <>
      {unfeaturedGames
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
                {featuredGames.length > 0 && (
                  <FeaturedGameCard data={featuredGames[0]} />
                )}
                <div className="grid grid-cols-3 gap-[2vw] w-[65%] py-[3%]">
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
            ) : (
              <CarouselItem>
                <div className="grid grid-cols-4 gap-[2vw] w-[85%] py-[3%] m-auto">
                  {chunk.map((game, index) => (
                    <GameCard key={index} src={game} type={game.type} />
                  ))}
                </div>
              </CarouselItem>
            )}
          </React.Fragment>
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
