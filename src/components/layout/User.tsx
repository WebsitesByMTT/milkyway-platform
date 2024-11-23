"use client";

import React, { useEffect, useState } from "react";
import AvatarBorder from "../svgs/AvatarBorder";
import Logo from "../svgs/Logo";
import Image from "next/image";
import Connector from "../svgs/Connector";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/src/lib/redux/hooks";
import { setAvatar } from "@/src/lib/redux/features/userSlice";

const User = ({ data }: any) => {
  const credit = useAppSelector((state) => state.user.credits);
  const avatar = useAppSelector((state) => state.user.avatar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let avatarIndex = Cookies.get("index");

    // Validate and set the avatar index
    if (!avatarIndex || isNaN(parseInt(avatarIndex, 10))) {
      avatarIndex = (Math.floor(Math.random() * 10) + 1).toString();
      Cookies.set("index", avatarIndex); // Save to cookies if not found
    }

    dispatch(setAvatar(parseInt(avatarIndex, 10)));
  }, [dispatch]);

  return (
    <div className="absolute top-[1.2vw] left-[4%] flex gap-[5vw] sm:gap-[1vw]">
      <div className="user">
        <div className="avatar w-[8vw] h-[8vw] sm:w-[4vw] sm:h-[4vw] rounded-full relative flex items-center justify-center flex-col">
          <AvatarBorder className=" w-full h-full  absolute top-0 left-0 z-[1]" />
          <div className="relative w-[90%] h-[90%] ">
            <Image
              src={`/avatar/avatar${avatar}.png`}
              alt={data?.username}
              fill
              className="object-cover"
            />
          </div>
          <Connector
            name={data?.username}
            className="sm:w-[10vw] w-[12vw] h-auto absolute flex flex-col items-center justify-center -bottom-[5.3vw] sm:-bottom-[68%] left-1/2 transform -translate-x-1/2 z-[2]"
          />
        </div>
      </div>
      <div className="relative p-[0.1vw] h-fit rounded-[2vw] bg-gradient-to-b from-[#184260] to-[#666666] flex items-center justify-center">
        <div className="p-[0.15vw] h-fit rounded-[2vw] bg-[#00000091] flex items-center justify-center">
          <div className=" flex items-center bg-[#00000091] border-2 border-black h-fit rounded-[10vw] sm:rounded-[2vw] space-x-[7vw] pr-[1vw] sm:space-x-[3vw] sm:pr-4 ">
            <div className="absolute coin sm:w-[3vw] w-[7vw] h-[7vw] sm:h-[3vw] left-[-0.5vw] ">
              <Logo className="h-full w-full" />
            </div>
            <span className="text-[4vw] sm:text-[1.5vw] ml-[2.5vw] bg-gradient-to-b from-[#D4DA8F] via-[#BC7300] via-[50.91%] to-[#FFECB6] text-transparent bg-clip-text font-[400]">
              {parseFloat((credit ?? 0).toFixed(1))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;