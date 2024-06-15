"use client";

import React, { useEffect } from "react";
import AvatarBorder from "././svgs/AvatarBorder";
import Image from "next/image";
import { getUser } from "@/utils/actions";
import { useUser } from "./context/UserContext";

const User = ({ data }) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    setUser(data);
  }, []);

  return (
    <div className=" absolute top-[45%] left-[4%] flex gap-4">
      <div className=" user">
        <div className="avatar w-[4vw] h-[4vw] rounded-full relative flex items-center justify-center">
          <AvatarBorder className=" w-full h-full  absolute top-0 left-0 z-[1]" />
          <div className="relative  w-[90%] h-[90%] ">
            <Image
              src={"/avatar.png"}
              alt={data?.username}
              fill
              className=" object-cover"
            />
            <span>{data?.username}</span>
          </div>
          {/* <Connector className=" w-[60%] h-auto absolute -bottom-[.5vw] left-1/2 transform -translate-x-1/2 z-[2]" /> */}
        </div>
      </div>
      <div className=" flex items-center gap-2">
        <div className=" coin relative w-[3vw] h-[3vw]">
          <Image src={"/coin.png"} alt="coin" fill className=" w-full h-full" />
        </div>
        <span className="text-white">
          {parseFloat((data?.credits ?? 0).toFixed(1))}
        </span>
      </div>
    </div>
  );
};

export default User;
