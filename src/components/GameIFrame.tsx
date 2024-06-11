"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Portal from "./ui/Portal";
import Loader from "./ui/Loader";
import Cookies from "js-cookie";

const GameIframe = ({ data }: any) => {
  const [gameData, setGameData] = useState(data);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const router = useRouter();

  function getToken(cookieName: string): string | undefined {
    // Get all cookies as a string
    const cookies: string = document.cookie;

    // Parse the cookies string into an object
    const cookieArray: string[] = cookies
      .split(";")
      .map((cookie) => cookie.trim());
    const cookieObject: { [key: string]: string } = {};
    cookieArray.forEach((cookie) => {
      const parts: string[] = cookie.split("=");
      const key: string = decodeURIComponent(parts[0]);
      const value: string = decodeURIComponent(parts.slice(1).join("="));
      cookieObject[key] = value;
    });

    // Access the token
    return cookieObject[cookieName];
  }

  useEffect(() => {
    console.log("Token:", getToken("token"));

    // Use the token as needed...
  }, []);

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = event.data;
      console.log("message : ", message);

      const iframe = document.getElementById("gameIframe") as HTMLIFrameElement;
      if (message === "authToken") {
        if (iframe.contentWindow) {
          console.log("Sending to IFRAME ");

          iframe.contentWindow.postMessage(
            { type: "authToken", cookie: getToken("token") },
            `${gameData?.game?.gameHostLink}`
          );
        }
      }

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
        id="gameIframe"
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
