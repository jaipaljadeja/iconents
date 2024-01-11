import * as React from "react";
import { IconBaseProps } from "../types";
const FlagIcon = (svgProps: IconBaseProps) => {
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
        d="M3.33334 12.5C3.33334 12.5 4.16668 11.6667 6.66668 11.6667C9.16668 11.6667 10.8333 13.3333 13.3333 13.3333C15.8333 13.3333 16.6667 12.5 16.6667 12.5V2.50001C16.6667 2.50001 15.8333 3.33334 13.3333 3.33334C10.8333 3.33334 9.16668 1.66667 6.66668 1.66667C4.16668 1.66667 3.33334 2.50001 3.33334 2.50001V12.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.33334 18.3333V12.5"
      />
    </svg>
  );
};
export default FlagIcon;
