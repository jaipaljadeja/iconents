import * as React from "react";
import { IconBaseProps } from "../types";
const PcIcon = (svgProps: IconBaseProps) => {
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
        d="M16 2.5H4C3.17157 2.5 2.5 3.19289 2.5 4.04762V11.7857C2.5 12.6404 3.17157 13.3333 4 13.3333H16C16.8284 13.3333 17.5 12.6404 17.5 11.7857V4.04762C17.5 3.19289 16.8284 2.5 16 2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.66669 17.5H13.3334"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 13.3333V16.6667"
      />
    </svg>
  );
};
export default PcIcon;
