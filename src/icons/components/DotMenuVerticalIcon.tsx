import * as React from "react";
import { IconBaseProps } from "../types";
const DotMenuVerticalIcon = (svgProps: IconBaseProps) => {
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
        d="M9.99999 5.00001C10.4602 5.00001 10.8333 4.62691 10.8333 4.16668C10.8333 3.70644 10.4602 3.33334 9.99999 3.33334C9.53975 3.33334 9.16666 3.70644 9.16666 4.16668C9.16666 4.62691 9.53975 5.00001 9.99999 5.00001Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z"
      />
    </svg>
  );
};
export default DotMenuVerticalIcon;
