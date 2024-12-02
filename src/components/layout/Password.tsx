"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import toast from "react-hot-toast";
import Notification from "../ui/Notification";
import { updatePassword } from "@/src/lib/actions";

const Password = () => {
  const [existingPassword, setExistingPassword] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Validation checks
    if (existingPassword === "" || password === "" || reEnterPassword === "") {
      toast.custom((t) => (
        <Notification visible={t.visible} message="All fields are required" />
      ));
      return;
    }

    if (password !== reEnterPassword) {
      toast.custom((t) => (
        <Notification visible={t.visible} message="Passwords do not match" />
      ));
      return;
    }

    try {
      const response = await updatePassword({ existingPassword, password });
      if (response.message) {
        toast.custom((t) => (
          <Notification
            visible={t.visible}
            message="Password updated successfully."
          />
        ));
      } else {
        toast.custom((t) => (
          <Notification
            visible={t.visible}
            message={`${response.message || "Failed to update password."}`}
          />
        ));
      }
    } catch (error) {
      toast.custom((t) => (
        <Notification
          visible={t.visible}
          message={`An error occurred while updating the password.`}
        />
      ));
    }

    setExistingPassword("");
    setPassword("");
    setReEnterPassword("");
  };

  return (
    <div className="h-full w-full flex items-center justify-center mt-[1.5vw]">
      <form
        onSubmit={handleSubmit}
        className="z-[2] p-[2%] h-[75%] flex items-center  justify-center flex-col gap-[2vw] sm:gap-[3vw] w-[60%]  py-[2vw] m-auto"
      >
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] px-[1%] sm:p-[1%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rounded-[0.5vw] h-[100%]">
            <input
              type="text"
              name="oldPassword"
              value={existingPassword}
              onChange={(e) => setExistingPassword(e.target.value)}
              placeholder="Old Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[3vw] sm:text-[2vw]"
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] px-[1vw] sm:p-[1vw] bg-gradient-to-b from-[#0e052d] to-[#2b3953] h-[100%] rounded-[0.5vw]">
            <input
              type="text"
              name="changedPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[3vw] sm:text-[2vw]"
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] px-[1vw] sm:p-[1vw] bg-gradient-to-b from-[#0e052d] to-[#2b3953] h-[100%] rounded-[0.5vw]">
            <input
              type="text"
              name="reEnterPassword"
              value={reEnterPassword}
              onChange={(e) => setReEnterPassword(e.target.value)}
              placeholder="Re-Enter Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[3vw] sm:text-[2vw]"
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="w-[50%] h-[20%]">
          <CustomButton text="Confirm" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Password;
