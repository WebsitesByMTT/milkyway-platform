"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "@/components/ui/Loader";

const GameModal = ({ show, onClose, src, gameLoaded, setGameLoaded }) => {
  const [isOnClient, setIsOnClient] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  useEffect(() => {
    if (show) {
      setIframeKey((prevKey) => prevKey + 1); // Change iframe key when modal is shown
    }
  }, [show]);

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
    console.log("Current Src : ", src);
    const handleMessage = (event) => {
      const message = event.data;
      console.log("message : ", message);

      const iframe = document.getElementById("gameIframe");
      if (message === "authToken") {
        if (iframe.contentWindow) {
          console.log("Sending to IFRAME....................... ");

          iframe.contentWindow.postMessage(
            { type: "authToken", cookie: getToken("token") },
            `${src}`
          );
        }
      }

      if (message === "onExit") {
        setGameLoaded(false);
        onClose();
      }

      if (message === "OnEnter") {
        console.log("OnENter message received.........................");
        setGameLoaded(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [show, onClose, src, gameLoaded, setGameLoaded]);

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
            {show && (
              <iframe
                key={iframeKey}
                src={src}
                width="100%"
                height="100%"
                className={`rounded-lg transition-opacity duration-300 ${
                  gameLoaded ? " block" : " hidden"
                }`}
                id="gameIframe"
              ></iframe>
            )}

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
