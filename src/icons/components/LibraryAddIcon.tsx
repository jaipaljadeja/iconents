import * as React from "react";
import { IconBaseProps } from "../types";
const LibraryAddIcon = (svgProps: IconBaseProps) => {
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
        d="M3 6V14C3 15.6569 4.34315 17 6 17H14"
      />
      <path
        stroke="currentColor"
        d="M6.1 4.5C6.1 3.7268 6.7268 3.1 7.5 3.1H15.5C16.2732 3.1 16.9 3.7268 16.9 4.5V12.5C16.9 13.2732 16.2732 13.9 15.5 13.9H7.5C6.7268 13.9 6.1 13.2732 6.1 12.5V4.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.5 5.5V11.5M8.5 8.5H14.5"
      />
    </svg>
  );
};
export default LibraryAddIcon;
