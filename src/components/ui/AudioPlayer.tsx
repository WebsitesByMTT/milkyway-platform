"use client";
import React, { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt to play the audio when the component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err: any) {
        if (err.name === "NotAllowedError") {
          setError("Autoplay failed. Click the button to play the audio.");
        } else {
          setError("Failed to play the audio.");
        }
        console.error("Audio play error:", err);
      }
    };

    playAudio();

    // Error event listener
    const handleError = () => {
      setError("An error occurred while trying to load the audio");
      console.error("Audio loading error");
    };

    audio.addEventListener("error", handleError);

    // Clean up the event listener on component unmount
    return () => {
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setError(null);
    } catch (err: any) {
      setError("Failed to play the audio.");
      console.error("Audio play error:", err);
    }
  };

  return (
    <audio
      ref={audioRef}
      src={"/audio/bg-audio.wav"}
      autoPlay
      loop
      className="hidden"
    />
  );
};

export default AudioPlayer;
