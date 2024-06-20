"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useVolumeControl } from "../context/VolumeControlContext";

const GameModal = ({ show, onClose, src, gameLoaded, setGameLoaded}) => {
  const [isOnClient, setIsOnClient] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const { playAudio, pauseAudio } = useVolumeControl();
  const [loadingpercent, setLoadingPercent] = useState(0)



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
    if (loadingpercent!==70) {
      const intervalId = setInterval(() => {
        if (loadingpercent < 100) {
          setLoadingPercent(prevLoadingPercent => prevLoadingPercent + 1);
        } else {
          if (loadingpercent >= 100) {
            clearInterval(intervalId);
          }
        }
      }, 80);
      return () => clearInterval(intervalId);
    }else if(gameLoaded){
      const intervalId = setInterval(() => {
        if (loadingpercent < 100) {
          setLoadingPercent(prevLoadingPercent => prevLoadingPercent + 1);
        } else {
          if (loadingpercent >= 100) {
            clearInterval(intervalId);
          }
        }
      }, 80);
      return () => clearInterval(intervalId);
    }

  }, [loadingpercent,gameLoaded]);

  useEffect(() => {
    console.log("Current Src : ", src);
    const handleMessage = (event) => {
      const message = event.data;
      console.log("Message : ", message);

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
        playAudio(); // Play audio on exit
        setLoadingPercent(0)
      }

      if (message === "OnEnter") {
        console.log("OnEnter message received.........................");
        setGameLoaded(true);
        pauseAudio(); // Pause audio on enter
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [show, onClose, src, gameLoaded, setGameLoaded, playAudio, pauseAudio]);

  if (!show) {
    return null;
  }



  const handleClose = () => {
    setGameLoaded(false);
    onClose();
  };



  return isOnClient
    ? ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="rounded-lg shadow-lg relative w-full h-full">
          {show && (
            <iframe
              key={iframeKey}
              src={src}
              width="100%"
              height="100%"
              className={`rounded-lg transition-opacity duration-300`}
              id="gameIframe"
            ></iframe>
          )}

          {gameLoaded&&loadingpercent>=100 ? null : (
            <div style={{ backgroundImage: "url('./gameloader.png')" }} className="object-contain bg-no-repeat absolute inset-0 flex items-center justify-center text-white bg-black">
              <div className="flex items-center justify-center gap-[2vw] w-[70%]">
                <span className="inline-block bg-gradient-to-r from-[#F6F693]  via-[#EE9502] to-[#FCC20C] bg-clip-text text-transparent text-[3vh] sm:text-[1.8vw] font-semibold uppercase">
                  {loadingpercent}%
                </span>
                <div className="relative flex items-center w-[70%] h-[3vh] sm:h-[2vw]">
                  <input
                    type="range"
                    value={loadingpercent}
                    min="0"
                    max="100"
                    step='1'
                    onChange={(e) => setLoadingPercent(e.target.value)}
                    className="slider"
                    id="gameLoader"
                  />
                  <progress
                    value={loadingpercent}
                    id="progress"
                    min="0"
                    max="100"
                    className="absolute appearance-none w-[88%] sm:w-[90%] ml-[0.3vw] z-[2] h-[70%] sm:h-[50%] top-auto left-auto  rounded-[2vw] progress"
                  ></progress>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>,
      document.getElementById("modal")
    )
    : null;
};

export default GameModal;
