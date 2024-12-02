"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
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
}
