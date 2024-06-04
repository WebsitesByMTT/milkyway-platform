"use client";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
 e.preventDefault();
    console.log(account, password);
  };
  return (
    <div className="relative w-full flex justify-evenly">
      <Image
        src="/login.png"
        alt="login-bg"
        fill
        priority={true}
        objectFit="cover"
        quality={100}
        objectPosition="center"
      />
      <form
        onSubmit={handleSubmit}
        className="z-[2] p-[3%] flex justify-center flex-col gap-[5vw] sm:gap-[3vw] w-[35%] h-[50%] m-auto"
      >
        <div className="bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[1vw]">
          <div className="w-[100%] p-[4%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rouned-[1vw] h-[100%] rounded-[1vw]">
            <input
              name="account"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[2vw]"
              placeholder="ACCOUNT"
            ></input>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[1vw]">
          <div className="w-[100%] p-[4%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rouned-[1vw] h-[100%] rounded-[1vw]">
            <input
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="placeholder-inherit focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[2vw]"
              placeholder="PASSWORD"
            ></input>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[1vw] w-[40%]">
          <div className="bg-gradient-to-b from-[#51B4F1] to-[#4D5CBA] w-full h-[100%] p-[1%] rounded-[1vw]">
            <div className="bg-[#000000e3] h-[100%] w-[100%] p-[0.7%] rounded-[1vw]">
              <div className="bg-gradient-to-r from-[#CDD1D6] via-[#7D7D7D] to-[#EFEFEF] h-[100%] p-[2%] rounded-[1vw]">
                <button
                  type="submit"
                  className="bg-gradient-to-t from-[#119EBF] from-[0%] via-[#0D82B3D6] via-[549.72%] to-[#17C5D8] text-white w-[100%] h-[100%] text-[2vw] p-[2%] rounded-[1vw]"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="relative w-[55%] sm:w-[45%] h-[80vw] sm:h-[50vw]">
        <Image
          src="/character.png"
          alt="login-character"
          fill
          objectFit="cover"
          className="z-[2]"
        />
      </div>
    </div>
  );
};

export default Page;
