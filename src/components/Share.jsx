"use client";

import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import toast from "react-hot-toast";

const Share = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.origin;
    setUrl(currentUrl);
  }, []);

  const handleQRCodeClick = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast.success("URL copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  return (
    <div className="h-full text-white flex items-center justify-center">
      <div className=" border p-1 bg-white  w-[20vw] h-[20vw]">
        <QRCodeSVG
          value={url}
          className=" w-full h-full"
          onClick={handleQRCodeClick}
        />
      </div>
    </div>
  );
};

export default Share;
