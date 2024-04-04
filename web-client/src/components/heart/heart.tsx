import React from "react";

type HeartProps = {
  className?: string;
};

export const Heart: React.FC<HeartProps> = ({ className }) => {
  return (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M27.8413 8.96803C27.8413 16.3164 21.0886 20.7466 14.1841 25C6.53136 20.8557 0 16.3164 0 8.96803C0 1.61964 7.17182 -2.70148 14.1841 3.13327C21.2136 -2.7015 27.8413 1.61964 27.8413 8.96803Z"
        fill="url(#paint0_linear_29_1374)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29_1374"
          x1="1.79398e-07"
          y1="11.2694"
          x2="27.7859"
          y2="10.9884"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6464" />
          <stop offset="1" stopColor="#FFDBDB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
