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
        alert("ON ENTER");

        console.log(
          "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate, laborum quam hic eaque deserunt repellendus adipisci quae facere aut perferendis, obcaecati eligendi. Harum sunt eveniet id? Temporibus, fugit sapiente!"
        );
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <>
      <iframe
        src={`${gameData?.game?.gameHostLink}`}
        className=" w-full h-full "
        onLoad={handleIframeLoad}
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
