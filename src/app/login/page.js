"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { config } from "../../utils/config";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import CustomButton from "@/components/ui/CustomButton";
import Notification from "@/components/ui/Notification";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    if (username === "" || password === "") {
      toast.custom((t) => (
        <Notification
          className="sm:rotate-0 -rotate-90"
          visible={t.visible}
          message="Username and password are required"
        />
      ));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      toast.custom((t) => (
        <Notification
          className="-rotate-90 sm:rotate-0"
          visible={t.visible}
          message="Loggin In..."
        />
      ));
      const response = await fetch(`${config.server}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data?.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken); // Check the decoded token

          if (decodedToken.designation === "player") {
            toast.remove();
            toast.custom((t) => (
              <Notification
                className="-rotate-90 sm:rotate-0"
                visible={t.visible}
                message="Login Successful"
              />
            ));
            Cookies.set("token", token);
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            Cookies.set("index", randomNumber);
            router.push("/");
          } else {
            toast.remove();
            toast.custom((t) => (
              <Notification
                className="-rotate-90 sm:rotate-0"
                visible={t.visible}
                message="Access Denied: Not a player"
              />
            ));
          }
        } else {
          toast.remove();
          toast.custom((t) => (
            <Notification
              className="-rotate-90 sm:rotate-0"
              visible={t.visible}
              message="Invalid Token"
            />
          ));
        }
      } else {
        toast.remove();
        console.log(data.error);
        toast.custom((t) => (
          <Notification
            className="-rotate-90 sm:rotate-0"
            visible={t.visible}
            message="Login failed"
          />
        ));
      }
    } catch (error) {
      toast.remove();
      toast.custom((t) => (
        <Notification
          visible={t.visible}
          className="-rotate-90 sm:rotate-0"
          message="An error occured! Please try again"
        />
      ));
    }

    setLoading(false);
  };
  return (
    <div className="relative items-center sm:items-start w-screen sm:w-full -rotate-90 sm:rotate-0 h-auto flex justify-evenly">
      <Image
        src="/login.png"
        alt="login-bg"
        fill
        priority={true}
        quality={100}
        objectPosition="center"
        className=" object-cover  w-full"
      />
      <form
        onSubmit={handleSubmit}
        className="z-[3] p-[3%] sm:static flex justify-center flex-col gap-[3vw] sm:gap-[3vw] w-[80%] sm:w-[35%] h-[35vh] sm:h-[50%] m-auto absolute top-auto "
        autoComplete="off"
      >
        <div className="bg-gradient-to-b from-[#fff] p-[1px] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] rounded-[1vw]">
          <div className="w-[100%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rounded-[1vw] h-full">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="ACCOUNT"
              className="placeholder-transparent sm:placeholder:text-[2vw] placeholder:text-[4vw] py-[3vw] sm:pb-[1vw] sm:pt-[1vw] px-[2vw] focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-full sm:text-[2vw] text-[4vw]"
              autoComplete="new-username"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#fff] p-[1px] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff]  rounded-[1vw]">
          <div className="w-[100%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rounded-[1vw] h-[100%] ">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="PASSWORD"
              className="placeholder-transparent sm:placeholder:text-[2vw] placeholder:text-[4vw] py-[3vw] sm:pb-[1vw] sm:pt-[1vw] px-[2vw] focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-full sm:text-[2vw] text-[4vw]"
              autoComplete="new-password"
            ></input>
          </div>
        </div>
        <div className="sm:h-[5vw] h-[10vw] w-auto">
          <CustomButton type="submit" text="Login" />
        </div>
      </form>
      <div className="relative w-full sm:w-[45%]  min-h-screen sm:min-h-[20vw] sm:mr-0 sm:h-[50vw] m-auto">
        <Image
          src="/character.png"
          alt="login-character"
          fill
          className="z-[2] object-contain bottom-0 m-auto"
        />
      </div>
    </div>
  );
};

export default Login;
