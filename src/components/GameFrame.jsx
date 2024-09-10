"use client";
import React, { useEffect, useState } from "react";
import { useVolumeControl } from "./context/VolumeControlContext";
import { useRouter } from "next/navigation";
import { config } from "@/utils/config";
import toast from "react-hot-toast";
import Notification from "./ui/Notification";

const GameFrame = ({ data }) => {
  const [iframeKey, setIframeKey] = useState(0);
  const [gameLoaded, setGameLoaded] = useState(false);
  const { playAudio, pauseAudio } = useVolumeControl();
  const [loadingpercent, setLoadingPercent] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (data?.message) {
      toast.custom((t) => (
        <Notification visible={t.visible} message={data.message} />
      ));
      setTimeout(() => {
        playAudio();
        router.push("/");
      }, 1500);
      return;
    }
    if (data?.url) {
      setIframeKey((prevKey) => prevKey + 1);
      pauseAudio();
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
          setLoadingPercent((prevLoadingPercent) => prevLoadingPercent + 1);
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
          setLoadingPercent((prevLoadingPercent) => prevLoadingPercent + 1);
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
    const handleMessage = (event) => {
      const message = event.data;

      const iframe = document.getElementById("gameIframe");
      if (message === "authToken") {
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            {
              type: "authToken",
              cookie: getToken("token"),
              socketURL: config.server,
              console: config.nodeEnv === "production" ? false : true,
              loaderUrl: config.loaderUrl,
            },
            `${data.url}`
          );
        }
      }
      console.log("DATA", config.nodeEnv, config.loaderUrl);
      if (message === "onExit") {
        setGameLoaded(false);
        playAudio();
        router.push("/");
        setLoadingPercent(0);
      }

      if (message === "OnEnter") {
        setGameLoaded(true);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [data, gameLoaded]);

  return (
    <div className="w-full h-full relative">
      {!gameLoaded && data.url && (
        <iframe
          src={config.loaderUrl}
          width="100%"
          height="100%"
          id="gameLoader"
        />
      )}
      <iframe
        key={iframeKey}
        src={data.url}
        width="100%"
        height="100%"
        className={`rounded-lg transition-opacity duration-300`}
        id="gameIframe"
      ></iframe>
    </div>
  );
};

export default GameFrame;
