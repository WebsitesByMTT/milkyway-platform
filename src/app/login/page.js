import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <Image
        src="/login.png"
        alt="login-bg"
        fill
        priority={true}
        objectFit="contain"
        quality={100}
        objectPosition="center"
        className="z-[1]"
      />
      <form className=" z-[2] p-[2%] flex justify-center flex-col gap-5 w-[35%] h-[50%]">
        <div className="inputContainer">
          <div className="input">
            <input placeholder="ACCOUNT"></input>
          </div>
        </div>
        <div className="inputContainer">
          <div className="input">
            <input placeholder="PASSWORD"></input>
          </div>
        </div>
      </form>
      <div className="relative w-[45%] h-full">
        <Image
          src="/character.png"
          alt="login-character"
          fill
          objectFit="contain"
          className="z-[2]"
        />
      </div>
    </div>
  );
};

export default Page;
