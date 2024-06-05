"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GameIframe = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event) => {
      const message = event.data;

      if (message === "onExit") {
        router.push("/");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe src={`${data?.game?.gameHostLink}`} className=" w-full h-full" />
  );
};

export default GameIframe;
