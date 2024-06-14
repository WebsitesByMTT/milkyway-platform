"use client";
import React from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const deleteCookieHandler = () => {
    try {
      Cookies.remove("token");
      toast.success("Logout success");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to logout");
    }
  };

  return (
    <button className=" w-[4vw] h-[4vw]" onClick={deleteCookieHandler}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" w-full h-full"
      >
        <g filter="url(#filter0_df_741_11445)">
          <circle
            cx="44"
            cy="44"
            r="39"
            stroke="url(#paint0_linear_741_11445)"
            strokeWidth="2"
            shapeRendering="crispEdges"
          />
        </g>
        <path
          d="M84 44C84 66.0914 66.0914 84 44 84C21.9086 84 4 66.0914 4 44C4 21.9086 21.9086 4 44 4C66.0914 4 84 21.9086 84 44ZM8.77196 44C8.77196 63.4559 24.5441 79.228 44 79.228C63.4559 79.228 79.228 63.4559 79.228 44C79.228 24.5441 63.4559 8.77196 44 8.77196C24.5441 8.77196 8.77196 24.5441 8.77196 44Z"
          fill="url(#paint1_linear_741_11445)"
        />
        <circle
          cx="44"
          cy="44"
          r="33.0855"
          fill="url(#paint2_linear_741_11445)"
          stroke="url(#paint3_linear_741_11445)"
          strokeWidth="1.6385"
        />
        <path
          d="M30.8651 62.5H44.6724C45.1546 62.5 45.6187 62.3114 45.962 61.9733C46.3056 61.6349 46.5 61.1743 46.5 60.6924C46.5 60.2105 46.3056 59.75 45.962 59.4116C45.6187 59.0734 45.1546 58.8848 44.6724 58.8848H32.1553V29.1152H44.6724C45.1546 29.1152 45.6187 28.9266 45.962 28.5884C46.3056 28.25 46.5 27.7895 46.5 27.3076C46.5 26.8257 46.3056 26.3651 45.962 26.0268C45.6187 25.6886 45.1546 25.5 44.6724 25.5H30.8651C29.5436 25.5 28.5 26.6096 28.5 27.9352V60.0648C28.5 61.3904 29.5436 62.5 30.8651 62.5Z"
          fill="url(#paint4_linear_741_11445)"
          stroke="url(#paint5_linear_741_11445)"
        />
        <path
          d="M66.8528 44.5582L53.6582 28.2519C53.2638 27.7565 52.4746 28.041 52.4771 28.6779L52.4976 35.8C52.4979 35.8887 52.481 35.9765 52.4478 36.0586C52.4145 36.1406 52.3657 36.2152 52.304 36.2781C52.2423 36.3409 52.169 36.3907 52.0882 36.4248C52.0075 36.4588 51.9209 36.4763 51.8335 36.4763H38.6641C38.5769 36.4763 38.4905 36.4937 38.4099 36.5276C38.3294 36.5614 38.2562 36.6111 38.1945 36.6736C38.1328 36.7362 38.0839 36.8105 38.0505 36.8922C38.0172 36.974 38 37.0616 38 37.15V52.7489C38 52.9276 38.07 53.0989 38.1945 53.2253C38.319 53.3516 38.4879 53.4226 38.6641 53.4226H51.8892C52.0649 53.4226 52.2334 53.4932 52.3579 53.619C52.4823 53.7448 52.5526 53.9155 52.5533 54.0938L52.5742 61.3283C52.5742 61.9647 53.3675 62.243 53.7583 61.7429L66.8558 45.4003C66.9497 45.2805 67.0006 45.1318 67 44.9787C66.9994 44.8256 66.9475 44.6773 66.8528 44.5582Z"
          fill="url(#paint6_linear_741_11445)"
        />
        <defs>
          <filter
            id="filter0_df_741_11445"
            x="0"
            y="0"
            width="88"
            height="88"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_741_11445"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_741_11445"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect2_foregroundBlur_741_11445"
            />
          </filter>
          <linearGradient
            id="paint0_linear_741_11445"
            x1="44"
            y1="4"
            x2="44"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40C4C5" />
            <stop offset="0.49573" stopColor="#2379D8" />
            <stop offset="1" stopColor="#40C4C5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_741_11445"
            x1="44"
            y1="4"
            x2="44"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F0F9FD" />
            <stop offset="0.501082" stopColor="#444444" />
            <stop offset="1" stopColor="#E8E8E8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_741_11445"
            x1="44"
            y1="10.0952"
            x2="44"
            y2="77.9047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3E78D3" />
            <stop offset="1" stopColor="#1B2B69" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_741_11445"
            x1="44"
            y1="10.0952"
            x2="44"
            y2="77.9047"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#40C4C5" />
            <stop offset="0.49573" stopColor="#2379D8" />
            <stop offset="1" stopColor="#09A3DD" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_741_11445"
            x1="37.5"
            y1="26"
            x2="37.5"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0D811" />
            <stop offset="0.0134999" stopColor="#E0D811" />
            <stop offset="0.403821" stopColor="#E0D811" />
            <stop offset="0.545756" stopColor="#E69D2D" />
            <stop offset="1" stopColor="#DA9F0E" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_741_11445"
            x1="37.5"
            y1="26"
            x2="37.5"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0D811" />
            <stop offset="0.0134999" stopColor="#E0D811" />
            <stop offset="0.403821" stopColor="#E0D811" />
            <stop offset="0.545756" stopColor="#E69D2D" />
            <stop offset="1" stopColor="#DA9F0E" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_741_11445"
            x1="52.5"
            y1="28"
            x2="52.5"
            y2="62"
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
