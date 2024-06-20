import React from "react";

const customButton = ({ text, type }) => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <svg
        width="282"
        height="112"
        viewBox="0 0 282 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <rect x="17" y="17" width="248" height="78" rx="7" fill="#2D6BEB" />
        <rect
          x="17"
          y="17"
          width="248"
          height="78"
          rx="7"
          fill="url(#paint0_linear_71_299)"
        />
        <rect
          x="13"
          y="13"
          width="256"
          height="86"
          rx="11"
          stroke="url(#paint1_linear_71_299)"
          stroke-width="8"
        />
        <rect
          x="2.5"
          y="2.5"
          width="277"
          height="107"
          rx="21.5"
          stroke="url(#paint2_linear_71_299)"
          stroke-width="5"
        />
        <rect
          x="6.05357"
          y="6.05357"
          width="269.893"
          height="99.8929"
          rx="15.9464"
          stroke="url(#paint3_linear_71_299)"
          stroke-width="2.10714"
        />
        <defs>
          <linearGradient
            id="paint0_linear_71_299"
            x1="141"
            y1="95"
            x2="141"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#119EBF" />
            <stop offset="0.496954" stop-color="#0D82B3" stop-opacity="0.84" />
            <stop offset="1" stop-color="#17C5D8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_71_299"
            x1="141.498"
            y1="9"
            x2="141.498"
            y2="103"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CDD1D6" />
            <stop offset="0.497138" stop-color="#7D7D7D" />
            <stop offset="1" stop-color="#EFEFEF" />
            <stop offset="1" stop-color="#4F4F4F" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_71_299"
            x1="141.532"
            y1="0"
            x2="141.532"
            y2="112"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DBDBE3" />
            <stop offset="0.497138" stop-color="#99D9E3" />
            <stop offset="1" stop-color="#5C9BCE" />
            <stop offset="1" stop-color="#EFEFEF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_71_299"
            x1="141"
            y1="5"
            x2="141"
            y2="107"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#51B4F1" />
            <stop offset="1" stop-color="#4D5CBA" />
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
