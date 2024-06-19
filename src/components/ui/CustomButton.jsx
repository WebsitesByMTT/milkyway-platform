import React from "react";

const customButton = ({ text, type }) => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <svg
        width="356"
        height="120"
        viewBox="0 0 356 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <rect x="18" y="18" width="320" height="84" rx="42" fill="#2D6BEB" />
        <rect
          x="18"
          y="18"
          width="320"
          height="84"
          rx="42"
          fill="url(#paint0_linear_954_9504)"
        />
        <rect
          x="18"
          y="18"
          width="320"
          height="84"
          rx="42"
          fill="black"
          fill-opacity="0.1"
        />
        <rect
          x="15.2857"
          y="14.2857"
          width="325.429"
          height="91.4286"
          rx="45.7143"
          stroke="url(#paint1_linear_954_9504)"
          strokeWidth="8.57143"
        />
        <rect
          x="2.67857"
          y="2.67857"
          width="350.643"
          height="114.643"
          rx="57.3214"
          stroke="url(#paint2_linear_954_9504)"
          strokeWidth="5.35714"
        />
        <rect
          x="7.12883"
          y="6.12883"
          width="341.742"
          height="107.742"
          rx="53.8712"
          stroke="url(#paint3_linear_954_9504)"
          strokeWidth="2.25765"
        />
        <defs>
          <linearGradient
            id="paint0_linear_954_9504"
            x1="178"
            y1="102"
            x2="178"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#119EBF" />
            <stop offset="0.496954" stopColor="#0D82B3" stop-opacity="0.84" />
            <stop offset="1" stopColor="#17C5D8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_954_9504"
            x1="178.63"
            y1="10"
            x2="178.63"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CDD1D6" />
            <stop offset="0.497138" stopColor="#7D7D7D" />
            <stop offset="1" stopColor="#EFEFEF" />
            <stop offset="1" stopColor="#4F4F4F" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_954_9504"
            x1="178.672"
            y1="0"
            x2="178.672"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DBDBE3" />
            <stop offset="0.497138" stopColor="#99D9E3" />
            <stop offset="1" stopColor="#5C9BCE" />
            <stop offset="1" stopColor="#EFEFEF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_954_9504"
            x1="178"
            y1="5"
            x2="178"
            y2="115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#51B4F1" />
            <stop offset="1" stopColor="#4D5CBA" />
          </linearGradient>
        </defs>
      </svg>
      <button
        className="text-white w-[100%] h-[100%] text-[3.5vw] sm:text-[2vw] absolute top-auto left-auto"
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default customButton;
