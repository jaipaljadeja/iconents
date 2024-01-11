import * as React from "react";
import { IconBaseProps } from "../types";
const PauseIcon = (svgProps: IconBaseProps) => {
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
        d="M8.33333 15V5.00001C8.33333 4.07954 7.58714 3.33334 6.66667 3.33334C5.74619 3.33334 5 4.07953 5 5.00001V15C5 15.9205 5.74619 16.6667 6.66667 16.6667C7.58714 16.6667 8.33333 15.9205 8.33333 15Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 15V5.00001C15 4.07954 14.2538 3.33334 13.3333 3.33334C12.4129 3.33334 11.6667 4.07953 11.6667 5.00001V15C11.6667 15.9205 12.4129 16.6667 13.3333 16.6667C14.2538 16.6667 15 15.9205 15 15Z"
      />
    </svg>
  );
};
export default PauseIcon;
