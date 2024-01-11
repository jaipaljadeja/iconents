import * as React from "react";
import { IconBaseProps } from "../types";
const SendIcon = (svgProps: IconBaseProps) => {
  const { title, ...props } = svgProps;
  const titleId = title;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      strokeWidth={1.2}
      stroke="currentColor"
      aria-hidden="true"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#clip0_3537_28495)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 10.1185L5.69004 10.1185"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.7368 10.1184L3.95812 16.7526C3.56894 16.94 3.14128 16.579 3.2607 16.1639L5 10.1184L3.2607 4.07298C3.14128 3.65787 3.56893 3.29685 3.95812 3.48424L17.7368 10.1184Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_3537_28495">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SendIcon;
