import * as React from "react";
import { IconBaseProps } from "../types";
const LocationIcon = (svgProps: IconBaseProps) => {
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
        d="M16.6667 8.48485C16.6667 13.7879 10 18.3333 10 18.3333C10 18.3333 3.33334 13.7879 3.33334 8.48485C3.33334 6.67656 4.03572 4.94233 5.28596 3.66367C6.53621 2.38501 8.2319 1.66667 10 1.66667C11.7681 1.66667 13.4638 2.38501 14.7141 3.66367C15.9643 4.94233 16.6667 6.67656 16.6667 8.48485Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 10C10.9205 10 11.6667 9.25381 11.6667 8.33334C11.6667 7.41286 10.9205 6.66667 10 6.66667C9.07954 6.66667 8.33334 7.41286 8.33334 8.33334C8.33334 9.25381 9.07954 10 10 10Z"
      />
    </svg>
  );
};
export default LocationIcon;
