"use client";
import React from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Notification from "../components/ui/Notification"
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  const deleteCookieHandler = () => {
    try {
      Cookies.remove("token");
      toast.custom((t) => (
        <Notification
          visible={t.visible}
          message="Logout Successfull"
        />
      ));
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.custom((t) => (
        <Notification
          visible={t.visible}
          message="Failed to logout"
        />
      ));
    }
  };

  return (
    <div class="gradient text-white min-h-screen flex items-center">
      <div class="container mx-auto p-4 flex flex-wrap items-center">
        <div class="w-full md:w-7/12 text-center md:text-left p-4">
          <div class="text-6xl font-medium">404</div>
          <div class="text-xl md:text-3xl font-medium mb-4">
            Oops. Somthing went wrong!.
          </div>
          <div class="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <button
            className=" border py-2 px-6 rounded-xl text-lg hover:bg-white hover:text-black transition-all"
            onClick={deleteCookieHandler}
          >
            Try to fix
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
