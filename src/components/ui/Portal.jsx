"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [isOnClient, setIsOnClient] = useState(false);
  useEffect(() => {
    setIsOnClient(true);
  }, []);

  return isOnClient
    ? ReactDOM.createPortal(
        <div className=" fixed top-0 w-full h-full bg-[#212121]">
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Portal;
