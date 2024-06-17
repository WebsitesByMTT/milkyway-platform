"use client";
import React, { createContext, useContext, useRef, useState } from "react";

const VolumeControlContext = createContext();

export const useVolumeControl = () => useContext(VolumeControlContext);

export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(1.0); // Default volume
  const audioRef = useRef(null);

  const updateVolume = (newVolume) => {
    const clampedVolume = Math.max(Math.min(newVolume, 1), 0);
    setVolume(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio play error:", err);
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <VolumeControlContext.Provider
      value={{ volume, updateVolume, playAudio, pauseAudio, audioRef }}
    >
      {children}
    </VolumeControlContext.Provider>
  );
};
