"use client";
import React, { useEffect, useState } from "react";
import { CarouselItem, Carousel, CarouselContent } from "./ui/carousel";
import FeaturedGameCard from "./FeaturedGameCard";
import GameCard from "./GameCard";
import Autoplay from "embla-carousel-autoplay";
import Modal from "./ui/Modal";
import Maintenance from "./ui/Maintenance";

const GamesGrid = ({ data, category, handleFetchGames }) => {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  
  useEffect(() => {
    if (data?.isUnderMaintenance === true) {
      setOpen(true);
    }
  }, [data]);

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

  let mergedArray = data?.others;

  // Create chunks for the slides after the first one
  const remainingChunks = chunkArray(
    mergedArray?.slice(category === "all" ? 6 : 8),
    8
  );
  useEffect(() => {
    setOpen(false);
    handleFetchGames();
  }, [reload]);

  return (
    <>
      <CarouselItem className="flex justify-center m-auto w-[80%]">
        {featured?.length > 0 && category === "all" && (
          <div className="w-[20%] h-auto py-[3%]">
            <div className="w-[90%] h-full rounded-[0.95vw] p-[0.2vw] bg-gradient-to-b from-[#B18423] via-[#F7E10D] to-[#ECDB3F] shadow-lg ">
              <div className="bg-[#DC6E0E] rounded-[0.9vw] w-full h-full p-[0.4vw]">
                <div className="bg-gradient-to-b p-[0.8vw] rounded-[0.95vw] from-[#EFC54C] shadow-lg via-[#F98F08] to-[#943E00] w-full h-full">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 2000,
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="h-full rounded-[1vw] overflow-hidden"
                    onSlideChange={handleSlideChange}
                  >
                    <CarouselContent className="h-full rounded-[1vw]">
                      {featured?.map((game, index) => (
                        <CarouselItem key={index}>
                          <FeaturedGameCard src={game} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        )}
        {category === "all" ? (
          <div className="grid grid-cols-3 gap-[2vw] sm:min-h-[36vw] min-h-[66.5vw]  w-[65%] py-[3%]">
            {mergedArray?.slice(0, 6).map((game, index) => (
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
      <Modal
        isOpen={open}
        setOpen={setOpen}
        modalType="Maintenance"
        disableClose={true}
      >
        <Maintenance data={data} reload={reload} setReload={setReload} />
      </Modal>
    </>
  );
};

export default GamesGrid;
