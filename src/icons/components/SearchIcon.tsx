import * as React from "react";
import { IconBaseProps } from "../types";
const SearchIcon = (svgProps: IconBaseProps) => {
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
        d="M8.75002 15.8333C12.662 15.8333 15.8334 12.662 15.8334 8.74999C15.8334 4.83797 12.662 1.66666 8.75002 1.66666C4.838 1.66666 1.66669 4.83797 1.66669 8.74999C1.66669 12.662 4.838 15.8333 8.75002 15.8333Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.3333 18.3333L13.75 13.75"
      />
    </svg>
  );
};
export default SearchIcon;
