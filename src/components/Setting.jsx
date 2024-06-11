import React from "react";
import { useVolumeControl } from "./context/VolumeControlContext";

const Setting = () => {
  const { volume, updateVolume } = useVolumeControl();

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value) / 100;
    updateVolume(newVolume);
  };
  return (
    <div className=" h-full text-white flex items-center justify-center">
      <div className=" flex items-center gap-4">
        <span className="inline-block bg-gradient-to-b from-[#ABDBF9] via-[#DBDED5] to-[#ABDBF9] bg-clip-text text-transparent text-2xl uppercase">
          Music
        </span>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
