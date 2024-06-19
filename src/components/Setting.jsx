"use client";
import React, { useState } from "react";
import { useVolumeControl } from "./context/VolumeControlContext";

const Setting = () => {
  const { volume, updateVolume } = useVolumeControl();
  const [progress, setProgress] = useState(volume * 100);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value) / 100;
    updateVolume(newVolume);
    setProgress(newVolume * 100);
  };
  return (
    <div className="h-full w-full text-white flex flex-col items-center justify-evenly">
      <div className="h-[50%] w-full flex flex-col items-center justify-evenly">
        <div className="flex items-center justify-center gap-[2vw] w-[70%]">
          <span className="inline-block bg-gradient-to-b from-[#ABDBF9] via-[#DBDED5] to-[#ABDBF9] bg-clip-text text-transparent text-[4vw] sm:text-[1.5vw] uppercase">
            Music
          </span>
          <div className="relative flex items-center w-[70%] sm:h-[1.5vw] h-[3.5vw]">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume * 100}
              onChange={handleVolumeChange}
              className="slider"
              id="music"
            />
            <progress
              value={progress}
              id="progress"
              min="0"
              max="100"
              className="absolute appearance-none w-[86%] ml-[0.3vw] z-[2] h-[50%] top-auto left-auto  rounded-[2vw] progress"
            ></progress>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[2vw] w-[70%]">
          <span className="inline-block bg-gradient-to-b from-[#ABDBF9] via-[#DBDED5] to-[#ABDBF9] bg-clip-text text-transparent text-[4vw] sm:text-[1.5vw] uppercase">
            Sound
          </span>
          <div className="relative flex items-center w-[70%] sm:h-[1.5vw] h-[3.5vw]">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume * 100}
              onChange={handleVolumeChange}
              className="slider"
              id="sound"
            />
            <progress
              value={progress}
              id="progress"
              min="0"
              max="100"
              className="absolute appearance-none w-[86%] ml-[0.3vw] z-[2] h-[50%] top-auto left-auto  rounded-[2vw] progress"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
