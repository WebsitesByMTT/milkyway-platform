"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GameIframe = ({ data }: any) => {
  const [gameData, setGameData] = useState(data);
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = event.data;

      console.log("HERE L: ", message);

      if (message === "onExit") {
        router.push("/");
      }

      if (message === "OnEnter") {
        console.log("AAAA RHA HU MAI");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      src={`${gameData?.game?.gameHostLink}`}
      className=" w-full h-full"
    />
  );
};

export default GameIframe;
