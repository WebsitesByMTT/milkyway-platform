import React from "react";

const AvatarBorder = ({ className }) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_i_741_11460)">
        <circle cx="48" cy="48" r="45" stroke="#39DBFE" strokeWidth="6" />
      </g>
      <defs>
        <filter
          id="filter0_i_741_11460"
          x="0"
          y="0"
          width="96"
          height="99"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.109804 0 0 0 0 0.329412 0 0 0 0 0.662745 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_741_11460"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AvatarBorder;
