import { IconProps } from "@/src/types/IconTypes";
import React from "react";

const LikeIcon = ({className}:IconProps) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z"
        stroke="white"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export default LikeIcon;
