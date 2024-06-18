"use client";
import React, { useState } from "react";
import CustomButton from "../components/ui/CustomButton.jsx";
import { updatePassword } from "@/utils/actions.ts";
import toast from "react-hot-toast";
import Notification from "./ui/Notification.jsx";

const Password = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    changedPassword: "",
    reEnterPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation checks
    if (
      !formData.oldPassword ||
      !formData.changedPassword ||
      !formData.reEnterPassword
    ) {
      toast.custom((t) => (
        <Notification visible={t.visible} message="All fields are required" />
      ));
      return;
    }

    if (formData.changedPassword !== formData.reEnterPassword) {
      toast.custom((t) => (
        <Notification visible={t.visible} message="Passwords do not match" />
      ));
      return;
    }

    try {
      const response = await updatePassword(formData);
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

    setFormData({
      oldPassword: "",
      changedPassword: "",
      reEnterPassword: "",
    });
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="z-[2] p-[2%] flex items-center  justify-center flex-col gap-[2vw] sm:gap-[3vw] w-[60%] h-[70%] m-auto"
      >
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] p-[1%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] rounded-[0.5vw] h-[100%]">
            <input
              type="text"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              placeholder="Old Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[2vw]"
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] p-[1%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] h-[100%] rounded-[0.5vw]">
            <input
              type="text"
              name="changedPassword"
              value={formData.changedPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[2vw]"
              autoComplete="off"
            ></input>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] h-[20%] p-[0.5%] rounded-[0.5vw]">
          <div className="w-[100%] p-[1%] bg-gradient-to-b from-[#0e052d] to-[#2b3953] h-[100%] rounded-[0.5vw]">
            <input
              type="text"
              name="reEnterPassword"
              value={formData.reEnterPassword}
              onChange={handleChange}
              placeholder="Re-Enter Password"
              className="placeholder-transparent focus:outline-none bg-gradient-to-b from-[#fff] from-[0%] via-[#a8d4f8] via-[50.72%] to-[#4b97ff] bg-clip-text text-transparent w-[100%] h-[100%] text-[2vw]"
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
