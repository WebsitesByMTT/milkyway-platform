"use client";
import React, { useEffect, useState } from "react";
import { useVolumeControl } from "./context/VolumeControlContext";
import { useRouter } from "next/navigation";

const GameFrame = ({ data }) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [gameLoaded, setGameLoaded] = useState(false);
  const { playAudio, pauseAudio } = useVolumeControl();

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
      {!gameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
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
