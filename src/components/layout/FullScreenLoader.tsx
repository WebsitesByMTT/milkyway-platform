"use client";

import ReactDOM from "react-dom";
import Loader from "../ui/Loader";
import { useEffect, useState } from "react";

const FullScreenLoader = () => {
  const [isOnClient, setIsOnClient] = useState<Boolean>(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  return isOnClient
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Loader />
        </div>,
        document.body
      )
    : null;
};

export default FullScreenLoader;
