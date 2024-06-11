"use client";
import React, { createContext, useContext, useState } from "react";

const VolumeControlContext = createContext();

export const useVolumeControl = () => useContext(VolumeControlContext);

export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(1.0); // Default volume

  const updateVolume = (newVolume) => {
    const clampedVolume = Math.max(Math.min(newVolume, 1), 0);

    setVolume(clampedVolume);
  };

  return (
    <VolumeControlContext.Provider value={{ volume, updateVolume }}>
      {children}
    </VolumeControlContext.Provider>
  );
};
