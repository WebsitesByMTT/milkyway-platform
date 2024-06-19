"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { config } from "../../utils/config";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import CustomButton from "@/components/ui/CustomButton"
import Notification from "@/components/ui/Notification"

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
            toast.dismiss();
            toast.custom((t) => (
              <Notification
                visible={t.visible}
                message="Login Successful"
              />
            ));
            Cookies.set("token", token);
            router.push("/");
          } else {
            toast.dismiss();
            toast.custom((t) => (
              <Notification
                visible={t.visible}
                message="Access Denied: Not a player"
              />
            ));
          }
        } else {
          toast.dismiss();
          toast.custom((t) => (
            <Notification
              visible={t.visible}
              message="Invalid Token"
            />
          ));
        }
      } else {
        toast.dismiss();
        console.log(data.error);
        toast.custom((t) => (
          <Notification
            visible={t.visible}
            message="Login failed"
          />
        ));
      }
    } catch (error) {
      toast.dismiss();
      toast.custom((t) => (
        <Notification
          visible={t.visible}
          message="An error occured! Please try again"
        />
      ));
    }

    setLoading(false);
  };
  return (
    <div className="relative w-full h-full sm:h-auto flex justify-evenly">
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
        className="z-[2] p-[3%] flex justify-center flex-col gap-[5vw] sm:gap-[3vw] w-[35%] h-[50%] m-auto"
        autoComplete="off"
      >
        <div className="bg-gradient-to-b from-[#fff] p-[1px] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff]  rounded-[1vw]">
          <div className="w-[100%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rouned-[1vw] h-[100% rounded-[1vw]">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="ACCOUNT"
              className="placeholder-transparent md:placeholder:text-[2vw] placeholder:text-[.9rem] pb-2 pt-2 sm:pb-3 sm:pt-3 px-4 focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-full md:text-[2vw] text-[5vw]"
              autoComplete="new-username"
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#fff] p-[1px] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff]  rounded-[1vw]">
          <div className="w-[100%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rouned-[1vw] h-[100% rounded-[1vw]">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="PASSWORD"
              className="placeholder-transparent md:placeholder:text-[2vw] placeholder:text-[.9rem] pb-2 pt-2 sm:pb-3 sm:pt-3 px-4 focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-full md:text-[2vw] text-[5vw]"
              autoComplete="new-password"
            ></input>
          </div>
        </div>
        <div className="sm:h-[5vw] h-[8vw] w-auto">
          <CustomButton type="submit" text="Login" />
        </div>
      </form>
      <div className="relative w-[35%] sm:w-[45%] min-h-[30vw] mr-[5%] sm:mr-0 sm:h-[50vw]">
        <Image
          src="/character.png"
          alt="login-character"
          fill
          className="z-[2] object-cover bottom-0"
        />
      </div>
    </div>
  );
};

export default Login;
