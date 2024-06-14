"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "@/components/ui/Loader";

const GameModal = ({ show, onClose, src, gameLoaded, setGameLoaded }) => {
  const [isOnClient, setIsOnClient] = useState(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

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
    const handleMessage = (event) => {
      const message = event.data;
      console.log("message : ", message);

      const iframe = document.getElementById("gameIframe");
      if (message === "authToken") {
        if (iframe.contentWindow) {
          console.log("Sending to IFRAME ");

          iframe.contentWindow.postMessage(
            { type: "authToken", cookie: getToken("token") },
            `${src}`
          );
        }
      }

      if (message === "onExit") {
        router.push("/");
      }

      if (message === "OnEnter") {
        setGameLoaded(true);
        alert("I FRAME LOADED");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!show) {
    return null;
  }

  return isOnClient
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" rounded-lg shadow-lg  relative w-full h-full">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-4 text-white"
            >
              Close
            </button>
            <iframe
              src={src}
              width="100%"
              height="100%"
              className={`rounded-lg transition-opacity duration-300 ${
                gameLoaded ? "opacity-100" : "opacity-0"
              }`}
              id="gameIframe"
            ></iframe>

            {!gameLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader />
              </div>
            )}
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default GameModal;
