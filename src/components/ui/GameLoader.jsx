import Image from "next/image";
import React, { useEffect } from "react";

const GameLoader = ({ loadingpercent, setLoadingPercent }) => {
  useEffect(() => {
    // Function to create stars
    function createStars(numStars) {
      for (let i = 0; i < numStars; i++) {
        drawStars();
      }
    }
    function getRandomPosition(min, max) {
      return Math.random() * (max - min) + min;
    }
    // Function to create stars
    function createElements(numElements) {
      const container = document.getElementById("viewport-container");
      const viewportWidth = container.clientWidth;
      const viewportHeight = container.clientHeight;

      for (let i = 0; i < numElements; i++) {
        // Create a new div element
        const div = document.createElement("div");
        div.innerHTML = `
            <div id="elements-container" class="h-[4vw] w-[4vw] absolute top-0 left-0 z-[99] animate-ping rotate">
                <svg
          width="148"
          height="148"
          viewBox="0 0 148 148"
          fill="none"
          class="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ mixBlendMode: "color-dodge" }}
            d="M0 73.5487C0 71.2448 32.9728 69.376 73.6256 69.376C114.278 69.376 147.277 71.2448 147.277 73.5487C147.277 75.8527 114.304 77.7216 73.6256 77.7216C32.9472 77.7216 0 75.8527 0 73.5487Z"
            fill="url(#paint0_radial_1090_10416)"
          />
          <path
            style={{ mixBlendMode: "color-dodge" }}
            d="M73.5488 0C75.8528 0 77.7216 32.9728 77.7216 73.6256C77.7216 114.278 75.8528 147.277 73.5488 147.277C71.2448 147.277 69.376 114.304 69.376 73.6256C69.376 32.9472 71.3216 0 73.5488 0Z"
            fill="url(#paint1_radial_1090_10416)"
          />
          <path
            style={{ mixBlendMode: "color-dodge" }}
            d="M31.7937 80.3878C28.6158 57.2483 44.7979 35.9137 67.9374 32.7357C91.077 29.5578 112.412 45.7399 115.59 68.8794C118.768 92.019 102.585 113.354 79.4458 116.532C56.3063 119.71 34.9717 103.527 31.7937 80.3878Z"
            fill="url(#paint2_radial_1090_10416)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1090_10416"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(72.8602 73.559) rotate(180) scale(68.6323 3.75039)"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1090_10416"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(73.6409 72.7834) rotate(-90) scale(68.6323 3.75041)"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_1090_10416"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(73.0853 74.2755) rotate(-179.771) scale(37.9079 38.2833)"
            >
              <stop offset="0.09" stop-color="white" />
              <stop offset="0.1" stop-color="#EBEBEB" />
              <stop offset="0.13" stop-color="#BBBBBB" />
              <stop offset="0.17" stop-color="#8E8E8E" stop-opacity="0" />
              <stop offset="0.2" stop-color="#686868" stop-opacity="0" />
              <stop offset="0.23" stop-color="#484848" stop-opacity="0" />
              <stop offset="0.27" stop-color="#2E2E2E" stop-opacity="0" />
              <stop offset="0.31" stop-color="#1A1A1A" stop-opacity="0" />
              <stop offset="0.36" stop-color="#0C0C0C" stop-opacity="0" />
              <stop offset="0.42" stop-color="#030303" stop-opacity="0" />
              <stop offset="0.52" stop-color="#010101" stop-opacity="0" />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
            </div>
        `;

        // Set random position
        const randomX = getRandomPosition(0, viewportWidth);
        const randomY = getRandomPosition(0, viewportHeight);
        div.style.position = "absolute";
        div.style.top = `${randomY}px`;
        div.style.left = `${randomX}px`;

        // Append div to viewport container
        container.appendChild(div);
      }
    }

    // Function to draw stars
    function drawStars() {
      const tmpStar = document.createElement("figure");
      tmpStar.className = "star";
      tmpStar.style.top = `${100 * Math.random()}%`;
      tmpStar.style.left = `${100 * Math.random()}%`;
      document.getElementById("stars").appendChild(tmpStar);
    }

    function animateStars() {
      const stars = document.querySelectorAll(".star");
      stars.forEach((star) => {
        // Set initial opacity to 0
        star.style.opacity = 0;
        // Animate opacity from 0 to 1 and back to 0 with random duration
        setInterval(() => {
          const duration = Math.random() * 1000 + 500; // Random duration between 500ms and 1500ms
          star.style.transition = `opacity ${duration / 1000}s ease-in-out`;
          star.style.opacity = 1;
          setTimeout(() => {
            star.style.opacity = 0;
          }, duration);
        }, Math.random() * 2000); // Repeat every 0 to 2000ms (random interval)
      });
    }

    // Create stars and animate them
    createStars(200);
    animateStars();
    createElements(5);
  }, []);

  return (
    <div
      className="relative h-full w-full flex items-center justify-center text-white bg-black"
      id="viewport-container"
    >
      <Image src="/gameloader.png" fill objectFit="cover" alt="gameLoaderbg"/>
      <div id="stars"></div>
      <div className="flex items-center justify-center gap-[2vw] w-[70%] z-[1000]">
        <span className="inline-block bg-gradient-to-r from-[#F6F693]  via-[#EE9502] to-[#FCC20C] bg-clip-text text-transparent text-[3vh] sm:text-[1.8vw] font-semibold uppercase">
          {loadingpercent}%
        </span>
        <div className="relative flex items-center w-[70%] h-[3vh] sm:h-[2vw]">
          <input
            type="range"
            value={loadingpercent}
            min="0"
            max="100"
            step="1"
            onChange={(e) => setLoadingPercent(e.target.value)}
            className="slider"
            disabled
            id="gameLoader"
          />
          <progress
            value={loadingpercent}
            id="progress"
            min="0"
            max="100"
            className="absolute appearance-none w-[88%] sm:w-[90%] ml-[0.3vw] z-[2] h-[70%] sm:h-[50%] top-auto left-auto  rounded-[2vw] progress"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default GameLoader;
