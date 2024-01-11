import * as React from "react";
import { IconBaseProps } from "../types";
const DotMenuHorizontalIcon = (svgProps: IconBaseProps) => {
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
        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53975 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 9.99999C16.6667 9.53975 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 9.99999C5.00001 9.53975 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53975 3.33334 9.99999C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
      />
    </svg>
  );
};
export default DotMenuHorizontalIcon;
