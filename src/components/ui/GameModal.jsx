"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "@/components/ui/Loader";

const GameModal = ({ show, onClose, src, gameLoaded, setGameLoaded }) => {
  const [isOnClient, setIsOnClient] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  const handleClose = () => {
    setIframeLoaded(false);
    onClose();
  };

  if (!show) {
    return null;
  }

  return isOnClient
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" rounded-lg shadow-lg  relative w-full h-full">
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-white"
            >
              Close
            </button>
            <iframe
              src={src}
              width="100%"
              height="100%"
              className={`rounded-lg transition-opacity duration-300 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              id="gameIframe"
            ></iframe>

            {!iframeLoaded && (
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
