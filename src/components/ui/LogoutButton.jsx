"use client";
import React from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Notification from "./Notification";

const LogoutButton = () => {
  const router = useRouter();
  const deleteCookieHandler = () => {
    try {
      Cookies.remove("token");
      toast.custom((t) => (
        <Notification visible={t.visible} message={"Logout successful"} />
      ));
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.custom((t) => (
        <Notification visible={t.visible} message={"Failed to logout"} />
      ));
    }
  };

  return (
    <button className="w-[10vw] h-[10vw] md:w-[4vw] md:h-[4vw]" onClick={deleteCookieHandler}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM4.77196 40C4.77196 59.4559 20.5441 75.228 40 75.228C59.4559 75.228 75.228 59.4559 75.228 40C75.228 20.5441 59.4559 4.77196 40 4.77196C20.5441 4.77196 4.77196 20.5441 4.77196 40Z"
          fill="url(#paint0_linear_874_10778)"
        />
        <circle
          cx="40"
          cy="40"
          r="33.0855"
          fill="url(#paint1_linear_874_10778)"
          stroke="url(#paint2_linear_874_10778)"
          strokeWidth="1.6385"
        />
        <path
          d="M26.736 56.9738H39.5877C40.0366 56.9738 40.4685 56.7983 40.788 56.4835C41.1078 56.1686 41.2888 55.7399 41.2888 55.2913C41.2888 54.8428 41.1078 54.4141 40.788 54.0991C40.4685 53.7844 40.0366 53.6089 39.5877 53.6089H27.9369V25.8996H39.5877C40.0366 25.8996 40.4685 25.724 40.788 25.4093C41.1078 25.0943 41.2888 24.6656 41.2888 24.2171C41.2888 23.7686 41.1078 23.3399 40.788 23.0249C40.4685 22.7102 40.0366 22.5346 39.5877 22.5346H26.736C25.506 22.5346 24.5346 23.5674 24.5346 24.8013V54.7071C24.5346 55.941 25.506 56.9738 26.736 56.9738Z"
          fill="url(#paint3_linear_874_10778)"
          stroke="url(#paint4_linear_874_10778)"
          strokeWidth="0.93079"
        />
        <path
          d="M60.233 40.2737L47.9516 25.0961C47.5845 24.6349 46.8499 24.8997 46.8523 25.4926L46.8713 32.1217C46.8717 32.2043 46.8559 32.2861 46.825 32.3624C46.794 32.4388 46.7486 32.5082 46.6911 32.5667C46.6337 32.6252 46.5655 32.6716 46.4903 32.7033C46.4152 32.7349 46.3346 32.7512 46.2532 32.7512H33.9952C33.9141 32.7512 33.8337 32.7674 33.7587 32.799C33.6837 32.8305 33.6156 32.8767 33.5582 32.9349C33.5008 32.9931 33.4552 33.0623 33.4242 33.1384C33.3931 33.2144 33.3771 33.296 33.3771 33.3783V47.8976C33.3771 48.0639 33.4423 48.2234 33.5582 48.341C33.6741 48.4586 33.8313 48.5247 33.9952 48.5247H46.3051C46.4686 48.5247 46.6254 48.5904 46.7413 48.7075C46.8571 48.8246 46.9225 48.9835 46.9232 49.1494L46.9427 55.8832C46.9427 56.4755 47.6811 56.7346 48.0448 56.2691L60.2359 41.0576C60.3232 40.9461 60.3706 40.8077 60.37 40.6652C60.3695 40.5227 60.3212 40.3846 60.233 40.2737Z"
          fill="url(#paint5_linear_874_10778)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_874_10778"
            x1="40"
            y1="0"
            x2="40"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F0F9FD" />
            <stop offset="0.501082" stopColor="#444444" />
            <stop offset="1" stopColor="#E8E8E8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_874_10778"
            x1="40"
            y1="6.09521"
            x2="40"
            y2="73.9047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3E78D3" />
            <stop offset="1" stopColor="#1B2B69" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_874_10778"
            x1="40"
            y1="6.09521"
            x2="40"
            y2="73.9047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40C4C5" />
            <stop offset="0.49573" stopColor="#2379D8" />
            <stop offset="1" stopColor="#09A3DD" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_874_10778"
            x1="32.9117"
            y1="23"
            x2="32.9117"
            y2="56.5084"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0D811" />
            <stop offset="0.0134999" stopColor="#E0D811" />
            <stop offset="0.403821" stopColor="#E0D811" />
            <stop offset="0.545756" stopColor="#E69D2D" />
            <stop offset="1" stopColor="#DA9F0E" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_874_10778"
            x1="32.9117"
            y1="23"
            x2="32.9117"
            y2="56.5084"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0D811" />
            <stop offset="0.0134999" stopColor="#E0D811" />
            <stop offset="0.403821" stopColor="#E0D811" />
            <stop offset="0.545756" stopColor="#E69D2D" />
            <stop offset="1" stopColor="#DA9F0E" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_874_10778"
            x1="46.8736"
            y1="24.8616"
            x2="46.8736"
            y2="56.5084"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0D811" />
            <stop offset="0.0134999" stopColor="#E0D811" />
            <stop offset="0.403821" stopColor="#E0D811" />
            <stop offset="0.545756" stopColor="#E69D2D" />
            <stop offset="1" stopColor="#DA9F0E" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default LogoutButton;
