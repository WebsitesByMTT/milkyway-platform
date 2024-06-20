"use client";
import React, { useEffect, useState } from "react";
import { useVolumeControl } from "./context/VolumeControlContext";
import { useRouter } from "next/navigation";

const GameFrame = ({ data }) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [gameLoaded, setGameLoaded] = useState(false);
  const { playAudio, pauseAudio } = useVolumeControl();
  const [loadingpercent, setLoadingPercent] = useState(0)

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setIframeKey((prevKey) => prevKey + 1);
    }
  }, [data]);

  function getToken(cookieName) {
    const cookies = document.cookie;

    const cookieArray = cookies.split(";").map((cookie) => cookie.trim());
    const cookieObject = {};
    cookieArray.forEach((cookie) => {
      const parts = cookie.split("=");
      const key = decodeURIComponent(parts[0]);
      const value = decodeURIComponent(parts.slice(1).join("="));
      cookieObject[key] = value;
    });

    return cookieObject[cookieName];
  }

  useEffect(() => {
    if (loadingpercent !== 70) {
      const intervalId = setInterval(() => {
        if (loadingpercent < 100) {
          setLoadingPercent(prevLoadingPercent => prevLoadingPercent + 1);
        } else {
          if (loadingpercent >= 100) {
            clearInterval(intervalId);
          }
        }
      }, 70);
      return () => clearInterval(intervalId);
    } else if (gameLoaded) {
      const intervalId = setInterval(() => {
        if (loadingpercent < 100) {
          setLoadingPercent(prevLoadingPercent => prevLoadingPercent + 1);
        } else {
          if (loadingpercent >= 100) {
            clearInterval(intervalId);
          }
        }
      }, 70);
      return () => clearInterval(intervalId);
    }

  }, [loadingpercent, gameLoaded]);


  useEffect(() => {
    console.log("Current Src : ", data);
    const handleMessage = (event) => {
      const message = event.data;

      const iframe = document.getElementById("gameIframe");
      if (message === "authToken") {
        if (iframe.contentWindow) {
          console.log("Sending to IFRAME....................... ");

          iframe.contentWindow.postMessage(
            { type: "authToken", cookie: getToken("token") },
            `${data}`
          );
        }
      }

      if (message === "onExit") {
        setGameLoaded(false);
        playAudio();
        router.push("/");
        setLoadingPercent(0)
      }

      if (message === "OnEnter") {
        console.log("OnEnter message received.........................");
        setGameLoaded(true);
        pauseAudio();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [data, gameLoaded]);

  return (
    <div className=" w-full h-full relative">
      {gameLoaded && loadingpercent >= 100 ? null : (
        <div style={{ backgroundImage: "url('./gameloader.png')" }} className="object-contain bg-no-repeat absolute inset-0 flex items-center justify-center text-white bg-black">
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
                step='1'
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
      )}
      <iframe
        key={iframeKey}
        src={data}
        width="100%"
        height="100%"
        className={`rounded-lg transition-opacity duration-300`}
        id="gameIframe"
      ></iframe>
    </div>
  );
};

export default GameFrame;
