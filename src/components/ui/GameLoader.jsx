import React from "react";

const GameLoader = ({ loadingpercent, setLoadingPercent}) => {
  return (
    <div
      style={{ backgroundImage: "url('./gameloader.png')" }}
      className="object-contain bg-no-repeat absolute inset-0 flex items-center justify-center text-white bg-black"
    >
      <div className="flex items-center justify-center gap-[2vw] w-[70%]">
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
