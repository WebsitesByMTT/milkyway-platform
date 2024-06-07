"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Portal from "./ui/Portal";
import Loader from "./ui/Loader";

const GameIframe = ({ data }: any) => {
  const [gameData, setGameData] = useState(data);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = event.data;

      console.log("HERE L: ", message);

      if (message === "onExit") {
        router.push("/");
      }

      if (message === "OnEnter") {
        setIframeLoaded(true);
        console.log("I FRAME LOADED");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <iframe
        src={`${gameData?.game?.gameHostLink}`}
        className=" w-full h-full "
      />

      {!iframeLoaded && (
        <Portal>
          <div className=" w-full h-full flex items-center justify-center text-white spin-loader">
            <div className="spinner">
              <div className="spinner1"></div>
            </div>
          </div>{" "}
        </Portal>
      )}
    </>
  );
};

export default GameIframe;
