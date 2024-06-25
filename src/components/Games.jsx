"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/ui/Loader";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import GamesGrid from "./GamesGrid";
import { fetchGames } from "@/utils/actions";
import toast from "react-hot-toast";

const Games = ({ initialGames }) => {
  const [games, setGames] = useState(initialGames);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState();
  let showAlert;

  async function handleFetchGames(category) {
    setLoading(true);
    const data = await fetchGames(category);
    setSelectedCategory(category);
    setGames(data);
    setLoading(false);
  }

  const fullScreenHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
    setOpen(false);
    localStorage.setItem("showAlert", JSON.stringify(false));
  };

  const mobileSizeHandler = () => {
    if (window !== undefined) {
      const isMobile = window.innerWidth < 640;
      const isPortrait = window.innerWidth < window.innerHeight;
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      if (isMobile && isPortrait && !isFullscreen && showAlert) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  };

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
    toast.remove();
    const isPortrait = window.innerWidth < window.innerHeight;
    if (isPortrait) {
      showAlert =
        localStorage.getItem("showAlert") !== null
          ? JSON.parse(localStorage.getItem("showAlert"))
          : true;
      mobileSizeHandler();
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <div className="Carousel relative">
      <Sidebar
        onSelectCategory={handleFetchGames}
        selectedCategory={selectedCategory}
      />
      <Carousel className="sm:w-[100%] w-[95%] m-auto" opts={{ loop: true }}>
        <CarouselContent className="min-h-[66.5vw] sm:min-h-[37vw]">
          <GamesGrid data={games} />
        </CarouselContent>
        <CarouselPrevious className="CarouselPrevious w-[5%]" />
        <CarouselNext className="CarouselNext w-[5%]" />
      </Carousel>
      {open && (
        <div
          className={` w-[100vh] h-[100vw] sm:h-screen sm:w-screen z-[99] bg-black bg-opacity-50 flex items-center justify-center fixed top-0 left-0`}
        >
          <div className="h-auto sm:w-[70%] w-[90vw] relative flex items-center justify-center">
            <svg
              width="875"
              height="146"
              viewBox="0 0 875 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <mask id="path-1-inside-1_722_10728" fill="white">
                <path d="M0 0H875V146H0V0Z" />
              </mask>
              <path
                d="M0 0H875V146H0V0Z"
                fill="url(#paint0_linear_722_10728)"
              />
              <path
                d="M0 8H875V-8H0V8ZM875 138H0V154H875V138Z"
                fill="url(#paint1_linear_722_10728)"
                mask="url(#path-1-inside-1_722_10728)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_722_10728"
                  x1="0"
                  y1="73"
                  x2="875"
                  y2="73"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF2929" stopOpacity="0" />
                  <stop
                    offset="0.0956767"
                    stopColor="#DD573E"
                    stopOpacity="0.3"
                  />
                  <stop offset="0.5" stopColor="#810101" />
                  <stop
                    offset="0.900775"
                    stopColor="#DD573E"
                    stopOpacity="0.3"
                  />
                  <stop offset="1" stopColor="#DD573E" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_722_10728"
                  x1="0"
                  y1="73"
                  x2="875"
                  y2="73"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#739730" stopOpacity="0" />
                  <stop offset="0.30276" stopColor="#739730" />
                  <stop offset="0.5" stopColor="#EBF758" />
                  <stop offset="0.698187" stopColor="#739730" />
                  <stop offset="1" stopColor="#739730" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-auto left-auto">
              <p className="text-[4vw] text-white font-[600] text-center">
                Go to full screen mode for better experience.
              </p>
              <div className="flex w-[50%] items-center justify-between m-auto">
                <button
                  onClick={fullScreenHandler}
                  className="text-[4vw] bg-gradient-to-b text-transparent bg-clip-text from-[#10CD63] to-[#078F42] font-[600] text-center"
                >
                  Yes
                </button>
                <button
                  className="text-[4vw] bg-gradient-to-b text-transparent bg-clip-text from-[#ff5039] to-[#ffc8a6] font-[600] text-center"
                  onClick={() => {
                    setOpen(false);
                    localStorage.setItem("showAlert", JSON.stringify(false));
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div className="fixed top-0 left-0 h-full w-full bg-[#0000003b]">
          <Loader />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Games;
