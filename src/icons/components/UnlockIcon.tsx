import * as React from "react";
import { IconBaseProps } from "../types";
const UnlockIcon = (svgProps: IconBaseProps) => {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.83335 9.16667V5.83334C5.83231 4.80005 6.21525 3.80323 6.90782 3.03639C7.6004 2.26956 8.5532 1.78742 9.58127 1.68358C10.6093 1.57974 11.6393 1.86159 12.4712 2.47443C13.3032 3.08728 13.8777 3.98738 14.0833 5.00001"
      />
    </svg>
  );
};
export default UnlockIcon;
